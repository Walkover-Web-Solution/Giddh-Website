import Head from "next/head";
import Data from "@/data/metadata.json";
import { useEffect, useState } from "react";

const header = (browserPath) => {
    const currentPath = browserPath.browserPath;
    const metaData = Data[currentPath];
    const [link, setLink] = useState(false);
    const [restrictFromSeo, setRestrictFromSeo] = useState(false);

    useEffect(() => {
        setCountry();       
        const isRestrictedPage = (window.location.href && window.location.href.indexOf("v2/login") > -1);
        setRestrictFromSeo(isRestrictedPage);
    }, []);

    function setCountry() {
        let currentLink = getCurrentSiteCountry();
        if (currentLink) {
            setLink(currentLink);
        }
    }

    return (
        <>
            <Head>
                <title>{metaData?.title}</title>
                <meta name="description" content={metaData?.description}></meta>
                <link rel="icon" type="image/x-icon" href="/favico.svg"></link>

                {restrictFromSeo && (
                    <meta name="robots" content="noindex, nofollow" />
                )}

                {link.isIndia && (
                    <>
                        <link
                            rel="alternate"
                            hrefLang="x-default"
                            href="https://giddh.com"
                        />
                        <link rel="alternate" hrefLang="en-IN" href="https://giddh.com" />
                    </>
                )}
                {link.isAE && (
                    <>
                        <link
                            rel="alternate"
                            hrefLang="x-default"
                            href="https://giddh.com"
                        />
                        <link
                            rel="alternate"
                            hreflang="en-AE"
                            href="https://giddh.com/ae"
                        />
                    </>
                )}
                {link.isUK && (
                    <>
                        <link
                            rel="alternate"
                            hrefLang="x-default"
                            href="https://giddh.com"
                        />
                        <link
                            rel="alternate"
                            hreflang="en-GB"
                            href="https://giddh.com/uk"
                        />
                    </>
                )}
                <link rel="canonical" href={ "https://giddh.com" + currentPath } />

                <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                    rel="stylesheet"
                />
                <script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    type="text/javascript"
                    async
                ></script>
                <script src="//embed.typeform.com/next/embed.js"></script>
                <script src="/js/helper.js"></script>
            </Head>
        </>
    );
};
export default header;
