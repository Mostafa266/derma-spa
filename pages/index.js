import Head from 'next/head'
import Header from './../components/blocks/Header';
import OurProduct from './../components/blocks/OurProduct';
import Features from './../components/blocks/Features';
import VideoIntro from './../components/blocks/VideoIntro';
import Clinical from './../components/blocks/Clinical';
import Insights from './../components/blocks/Insights';
import References from './../components/blocks/References';



export default function Home() {
  return (
    <div >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Derma</title>
        <meta name="description" content="Derma Site Build By Mostafa Abd Elazeem"/>
        <link rel="icon" type="image/png" href="./../imgs/public/leo.png"></link>
      </Head>
        
      
        <Header/>
        <OurProduct/>
        <Features/>
        <VideoIntro/>
        <Clinical/>
        <Insights/>
        <References/>
    </div>
  )
}
