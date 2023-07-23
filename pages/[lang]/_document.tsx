import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document<{ lang: 'en' | 'ru' }> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const lang = this.props.lang || 'ru';
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
