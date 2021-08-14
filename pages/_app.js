import * as React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from '@theme-ui/core';
import 'swiper/swiper.scss';
import '../styles/app.scss';
import 'swiper/components/navigation/navigation.scss';
import Layout from './../components/layouts/Layout';

export default class App extends NextApp {
  render(){
    const{Component,pageProps} = this.props;
    return(
      // <ThemeProvider>
         <Layout>
             <Component {...pageProps} />
        </Layout>
        // </ThemeProvider>
    )
  }
}
