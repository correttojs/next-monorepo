import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          <>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            ></meta>
            <meta
              name="google-site-verification"
              content="KdtvkyxtNp0Msw0A01kGAFCDxasV6K58QyV9Qy_oXZ8"
            ></meta>
            <meta name="theme-color" content={`rgb(9, 54, 76)`} />

            <link
              href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap"
              rel="preload"
              as="style"
            />

            <link
              href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap"
              rel="stylesheet"
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
           
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_UA}');


          `,
              }}
            />
          </>

          <link rel="icon" href="/icon_144.png" type="image/png" />
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="/icon_144.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <script
            src={`https://cmp.osano.com/${process.env.NEXT_PUBLIC_OSANO}/osano.js`}
          ></script> */}
        </body>
      </Html>
  )
}
 
