import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const enquiryForm = () => {
  const [currentCountryCode, setCurrentCountryCode] = useState("91");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [description, setDescription] = useState("");

  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] === "";
  let isAE = startPath[1] === "ae";
  let isUK = startPath[1] === "uk";

  // Update Country Code countrywise
  useEffect(() => {
    let currentCode = isIndia ? "91" : isAE ? "971" : "44";
    setCurrentCountryCode(currentCode);
  }, []);

  // Country Calling Code Array
  const allCallingCode = [
    "590",
    "591",
    "350",
    "592",
    "230",
    "351",
    "593",
    "352",
    "231",
    "353",
    "595",
    "232",
    "354",
    "233",
    "234",
    "355",
    "597",
    "356",
    "235",
    "598",
    "236",
    "357",
    "237",
    "358",
    "359",
    "238",
    "239",
    "1473",
    "240",
    "241",
    "242",
    "1",
    "243",
    "244",
    "245",
    "246",
    "1345",
    "248",
    "249",
    "7",
    "20",
    "27",
    "1242",
    "370",
    "371",
    "250",
    "372",
    "251",
    "252",
    "373",
    "374",
    "253",
    "254",
    "375",
    "376",
    "255",
    "377",
    "256",
    "378",
    "257",
    "258",
    "379",
    "30",
    "31",
    "32",
    "33",
    "34",
    "36",
    "39",
    "1809",
    "380",
    "381",
    "260",
    "261",
    "382",
    "262",
    "263",
    "264",
    "385",
    "386",
    "265",
    "387",
    "266",
    "267",
    "1246",
    "389",
    "268",
    "269",
    "40",
    "41",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "1264",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "960",
    "961",
    "1268",
    "962",
    "963",
    "964",
    "965",
    "966",
    "60",
    "967",
    "968",
    "61",
    "62",
    "63",
    "4779",
    "64",
    "65",
    "66",
    "290",
    "291",
    "1284",
    "297",
    "298",
    "299",
    "850",
    "971",
    "972",
    "852",
    "973",
    "974",
    "853",
    "975",
    "855",
    "976",
    "977",
    "856",
    "76",
    "500",
    "501",
    "502",
    "503",
    "504",
    "81",
    "505",
    "82",
    "506",
    "507",
    "84",
    "508",
    "86",
    "509",
    "992",
    "993",
    "994",
    "995",
    "996",
    "90",
    "91",
    "998",
    "92",
    "93",
    "94",
    "95",
    "98",
    "880",
    "886",
    "1869",
    "1868",
    "1340",
    "1876",
    "1758",
    "1767",
    "420",
    "421",
    "423",
    "1649",
    "670",
    "672",
    "673",
    "674",
    "675",
    "676",
    "677",
    "678",
    "679",
    "1671",
    "1670",
    "680",
    "681",
    "682",
    "683",
    "1787",
    "685",
    "686",
    "1664",
    "1784",
    "687",
    "688",
    "689",
    "690",
    "691",
    "692",
    "212",
    "213",
    "216",
    "218",
    "220",
    "221",
    "222",
    "223",
    "224",
    "225",
    "1684",
    "226",
    "227",
    "1441",
    "228",
    "229",
  ];
  function handleCountryCodeChange(e) {
    let selectedCode = e.target.value;
    setCurrentCountryCode(selectedCode);
  }
  return (
    <>
      <section className="container-fluid enquiry_form">
        <div className="container enquiry_form--max-width-unset mt-auto">
          <div className="enquiry_form__wrapper d-flex align-items-center flex-column">
            <div className="enquiry_form__wrapper__title text-center">
              <h1>
                {isIndia ? "Upgrade your Books to Giddh." : ""}
                {isAE ? "Dubai is all set to do VAT friendly accounting!" : ""}
                {isUK ? "UK is all set to do VAT friendly accounting!" : ""}
              </h1>
              <p className="c-fs-3 mb-5">
                {isIndia ? "Giddh fits the needs of every business." : ""}
                {isAE || isUK
                  ? "Light on pocket, easy to use, VAT compliant,"
                  : ""}
                <br />
                {isAE || isUK
                  ? "With Giddh, you can now connect to banks & departments seamlessly"
                  : ""}
              </p>
            </div>
            <div className="enquiry_form__wrapper__form_wrapper">
              <form>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 ">
                      <div className="mb-2">
                        <input
                          autoComplete="name"
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          required
                          pattern="[A-Za-z\s]{3,50}"
                          title="Name between 3 - 50 letters"
                        />
                        <span className="error-msg col-white c-fs-6">Name between 3 - 50 letters</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 ">
                      <div className="mb-3">
                        <input
                          autoComplete="email"
                          type="email"
                          className="form-control"
                          placeholder="example@gmail.com"
                          pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 ">
                      <div className="row">
                        <div className="col-4 pe-0">
                          <div className="mb-3">
                            <select
                              autoComplete="on"
                              className="form-select"
                              value={currentCountryCode}
                              required
                              onChange={handleCountryCodeChange}
                            >
                              {allCallingCode.map((e, key) => {
                                return (
                                  <option key={key} value={e}>
                                    {"+" + e}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="mb-3">
                            <input
                              autoComplete="tel-national"
                              type="tel"
                              className="form-control"
                              placeholder="Mobile Number"
                              pattern="([0]{1})?[0-9]{10}"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mt-2">
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Description"
                          autoComplete="on"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="submit__button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default enquiryForm;
