import Layout from '../components/Layout';
import { Rubik_Bubbles} from 'next/font/google';
import '../styles/global.css';

const pres = Rubik_Bubbles({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main className={pres.className}>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
