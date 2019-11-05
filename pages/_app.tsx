// pages/_app.js
import React from 'react'

// style
import 'antd/dist/antd.css'

const MyApp = (props: any) => {
    const { Component, pageProps } = props

    return (
        <Component {...pageProps} />
    )
}

export default MyApp