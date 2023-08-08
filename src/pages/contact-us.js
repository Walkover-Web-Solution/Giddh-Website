import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const contactUs = () => {
  const [currentCountryCode, setCurrentCountryCode] = useState("91");

  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  let isAE = startPath[1] === "ae";

  // Update Country Code countrywise
  useEffect(() => {
    let currentCode = isIndia ? "91" : isAE ? "971" : "44";
    console.log("currentCode", currentCode);
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
      <div className="contact_us">
        <section className="container-fluid contact_us__banner">
          <div className="container">
            <div className="row">
              <div className="col-12 contact_us__banner__content">
                <h1 className="col-white mb-3">Ideas/Questions?</h1>
                <p className="col-white c-fs-1">
                  Someone will always be there to answer them!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid contact_us__form">
          <div className="container">
            <h3 className="col-primary c-fs-1 c-fw-600 text-center">
              Contact Us
            </h3>
            <p className="col-dark-light c-fs-4 text-center">
              For complete accounting solution for your business
            </p>

            <div className="row mt-5 align-items-center">
              <div className="col-lg-6 contact_us__form__left text-end">
                <div>
                  <p className="col-dark-light c-fs-4">
                    request a demo:
                    <br />{" "}
                    <a
                      className="text-decoration-underline col-primary c-fs-3"
                      href="#"
                    >
                      Schedule Now
                    </a>
                  </p>
                  <p className="col-dark-light c-fs-4">
                    or visit:
                    <br />{" "}
                    <a
                      className="text-decoration-underline col-primary c-fs-3"
                      href="https://giddh.com/help"
                    >
                      giddh.com/help
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 contact_us__form__right border-start">
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <label htmlFor="name" className="pb-3">
                          Name <span className="col-danger">*</span>
                        </label>
                        <div className="mb-3">
                          <input
                            autoComplete="name"
                            type="email"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="pb-3">
                          Email <span className="col-danger">*</span>
                        </label>
                        <div className="mb-3">
                          <input
                            autoComplete="email"
                            type="email"
                            className="form-control"
                            placeholder="example@gmail.com"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="col-12 ">
                        <div className="row">
                          <label htmlFor="mobileNo" className="pb-3">
                            Mobile Number <span className="col-danger">*</span>
                          </label>
                          <div className="col-4 pe-0">
                            <div className="mb-3">
                              <select
                                autoComplete="on"
                                className="form-select c-fs-6"
                                value={currentCountryCode}
                                onChange={handleCountryCodeChange}
                                id="mobileNo"
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
                          <div className="col-8 ">
                            <div className="mb-3">
                              <input
                                autoComplete="tel-national"
                                type="email"
                                className="form-control"
                                placeholder="Mobile Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="description" className="pb-3">
                          Description
                        </label>
                        <div className="mt-2">
                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Description"
                            autoComplete="on"
                            id="description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="submit__button mt-4 ms-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default contactUs;
