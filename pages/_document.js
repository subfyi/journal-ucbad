import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'

export default class extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="tr">
                <Head>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
};
