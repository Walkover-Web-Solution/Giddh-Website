import Head from "next/head";
import Data from "@/data/metadata.json";
import { useEffect, useState } from "react";

const header = (browserPath) => {
    const metaPath = browserPath.browserPath;
    const metaData = Data[metaPath];
    const [link, setLink] = useState(false);
    const [canonicalLink, setCanonicalLink] = useState(
        process.env.NEXT_PUBLIC_SITE_URL
    );
    const [restrictFromSeo, setRestrictFromSeo] = useState(false);

    useEffect(() => {
        setCountry();
        generateCanonicalLink();
        const isRestrictedPage = (window.location.href && window.location.href.indexOf("v2/login") > -1);
        setRestrictFromSeo(isRestrictedPage);
    }, []);

    function setCountry() {
        let currentLink = getCurrentSiteCountry();
        if (currentLink) {
            setLink(currentLink);
        }
    }

    function generateCanonicalLink() {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
        const router = window.location.pathname;
        const cleanPath = router.split("#")[0].split("?")[0];
        const finalLink = `${siteUrl}` + (router.asPath === "/" ? "" : cleanPath);
        setCanonicalLink(finalLink);
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
                <link rel="canonical" href={canonicalLink} />

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
