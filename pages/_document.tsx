import Document, {
  Html,
  Head,
  Main,
  NextScript,
  // DocumentContext,
} from 'next/document'

//import { GA_TRACKING_ID } from '../utils/analytics/gtag'
const GA_TRACKING_ID = 'XXXXX'

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          {process.env.NEXT_PUBLIC_INSTANCE === 'production' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}

          {process.env.NEXT_PUBLIC_INSTANCE === 'staging' && (
            <script
              async
              defer
              src="https://static.cdn.prismic.io/prismic.js?new=true&repo=ilo-voices"
            ></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
