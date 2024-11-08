import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2L9QG');`,
          }}
        />
         <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
         <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
         <script src="https://embed.typeform.com/next/embed.js" />
         <script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
         <script src="/js/helper.js" />
      </Head>
      <body>
        <noscript>
          <iframe
           src="https://www.googletagmanager.com/ns.html?id=GTM-K2L9QG"
           height="0" width="0"  style={{display: "none" , visibility: "hidden"}}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
