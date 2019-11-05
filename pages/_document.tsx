import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<IProps> {
    static getInitialProps(props: any) {
        const { renderPage } = props
        const sheet = new ServerStyleSheet();
        const page = renderPage((App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        );

        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Next.js + Antd + Styled</title>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </html>
        );
    }
}