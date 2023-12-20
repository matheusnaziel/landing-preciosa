import { useEffect } from 'react';
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Product from "../components/products";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Script from 'next/script';
import PopupWidget from "../components/popupWidget";

const Home = () => {
  useEffect(() => {
    document.querySelectorAll('[id^="botao-whatsapp"]').forEach(button => {
      button.addEventListener('click', function() {
        gtag('event', 'click', {
          'event_category': 'WhatsApp',
          'event_label': this.id
        });
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Água Mineral Preciosa - Pureza e Qualidade Natural</title>
        <meta name="description" content="Descubra a Água Mineral Preciosa, uma fonte de pureza e saúde. Água naturalmente filtrada e rica em minerais essenciais para o seu bem-estar." />
        <meta name="keywords" content="água mineral, agua mineral, Preciosa, água natural, saúde, bem-estar, hidratação, água rio de janeiro, agua rio de janeiro, água para evento, agua para evento, água para eventos, agua para eventos"/>
        <meta name="author" content="Distribuidora Preciosa"/>
        <meta property="og:title" content="Água Mineral Preciosa - Pureza e Qualidade Natural"/>
        <meta property="og:description" content="Descubra a Água Mineral Preciosa, uma fonte de pureza e saúde. Água naturalmente filtrada e rica em minerais essenciais."/>
        <meta property="og:image" content="URL_da_Imagem_da_Garrafa_de_Água"/>
        <meta property="og:url" content="https://distribuidorapreciosa.com.br"/>
        <meta property="og:type" content="website"/>
        <link rel="canonical" href="https://distribuidorapreciosa.com.br"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZZ9C9LWMTE"/>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11451873008"/>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11451873008');
          gtag('event', 'conversion', {'send_to': 'AW-11451873008/aM19CJbpmYEZEPDt1tQq'});
          gtag('config', 'G-ZZ9C9LWMTE');
        `}
      </Script>   
      <Navbar />
      <Hero />
      <Product/>
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}
      {/* <Testimonials /> */}
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;