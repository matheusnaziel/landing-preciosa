import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-ZZ9C9LWMTE"
          />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11451873008"></Script>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                gtag('event', 'conversion', {'send_to': 'AW-11451873008/aM19CJbpmYEZEPDt1tQq'});
              `,
            }}
          />
          <Script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11451873008');
            `}
          </Script>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-ZZ9C9LWMTE');
              `,
            }}
          />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
