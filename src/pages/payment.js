import Script from "next/script";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomLoader from "@/components/customLoader";

const payment = () => {
  const [loader, setLoader] = useState(false);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [params, setParams] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
      var params = [];
      var pairs = querystring[1].split("&");
      for (i in pairs) {
        var keyval = pairs[i].split("=");
        params[keyval[0]] = keyval[1];
      }
      setParams(params);
      getVoucherPaymentRequest(params);
    }
  }, []);

  async function getVoucherPaymentRequest(params) {
    setLoader(true);
    await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        "/invoice-pay-request/" +
        params.token +
        "?voucherVersion=" +
        params.voucherVersion,
      {
        method: "GET",
        mode: "cors",
        cache: "no-store",
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          response.body.pdfContent =
            "data:application/pdf;base64," + response.body.content;
          setApiResponse(response);
          setLoader(false);
        } else {
          setApiResponse(null);
          showToaster("No payment request found!", "error");
          setLoader(false);
        }
      });
  }

  async function payInvoiceGiddh(url, payload) {
    setPaymentInProgress(true);
    await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: "POST",
      mode: "cors",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        setPaymentInProgress(false);
        if (response.status === "success") {
          apiResponse.body.canPay = false;
          setApiResponse(apiResponse);
          showToaster(response.body, "success");
        } else {
          showToaster(response.body.message, "error");
        }
      });
  }

  function showToaster(message, type) {
    toast.dismiss();
    toast(message, { type: type });
  }

  function downloadInvoice() {
    var a;
    a = document.createElement("a");
    a.download = apiResponse.body.contentNumber + ".pdf";
    a.href = apiResponse.body.pdfContent;
    return a.click();
  }

  function payInvoice() {
    let options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      handler: function (res) {
        successPayment(res);
      },
      amount:
        params.voucherVersion == "2"
          ? apiResponse.body.amount
          : apiResponse.body.amount * 100,
      currency:
        params.voucherVersion == "2" ? apiResponse.body.currency.code : "INR",
      name: apiResponse.body.company.name,
      description: "Invoice payment for " + apiResponse.body.company.name,
    };

    try {
      var razorpay = new window["Razorpay"](options);
      setTimeout(() => {
        razorpay?.open();
      }, 100);
    } catch (exception) {}
  }

  function successPayment(response) {
    if (apiResponse.body.contentType === "invoice") {
      var payload;
      if (params.voucherVersion == "2") {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
          dd = "0" + dd;
        }
        if (mm < 10) {
          mm = "0" + mm;
        }
        var date = dd + "-" + mm + "-" + yyyy;
        payload = {
          paymentId: response.razorpay_payment_id,
          amount: apiResponse.body.amount,
          date: date,
        };
      } else {
        payload = data;
      }

      payInvoiceGiddh(
        "/company/" +
          apiResponse.body.company.uniqueName +
          "/invoices/" +
          apiResponse.body.contentNumber +
          "/pay?voucherVersion=" +
          params.voucherVersion,
        payload
      );
    } else if (apiResponse.body.contentType === "proforma") {
      payInvoiceGiddh(
        "/company/" +
          apiResponse.body.company.uniqueName +
          "/proforma/" +
          apiResponse.body.contentNumber +
          "/pay",
        response
      );
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="payment">
        {loader && (
          <div>
            <CustomLoader />
          </div>
        )}
        {apiResponse && (
          <div className="row payment__btn-wrapper">
            {params &&
              apiResponse &&
              ((params.voucherVersion == "1" && apiResponse.status != "paid") ||
                (params.voucherVersion == "2" &&
                  apiResponse.body.canPay == true)) && (
                <button className="btn" onClick={payInvoice}>
                  {paymentInProgress && (
                    <div
                      className="spinner-border spinner-border-sm col-white"
                      role="status"
                    ></div>
                  )}
                  {!paymentInProgress && <span>Pay Now</span>}
                </button>
              )}
            <button className="btn" onClick={downloadInvoice}>
              Download
            </button>
          </div>
        )}

        {apiResponse && (
          <div className="row payment__pdf-content-wrapper">
            <object data={apiResponse.body.pdfContent} type="application/pdf">
              <param
                name="title"
                value={`${apiResponse.body.contentNumber}.pdf`}
              />
            </object>
          </div>
        )}
      </div>
    </>
  );
};

export default payment;
