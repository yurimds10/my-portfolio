import type { NextPage } from 'next'
import { GlobalStyle } from '../src/global/styles/GlobalStyle';
import Head from '../src/infra/components/head/index';
import Main from '../src/main';
import Footer from '../src/patterns/footer';
import Header from '../src/patterns/header';

const Home: NextPage = () => {
  return (
    <>
      <Head/>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default Home;
