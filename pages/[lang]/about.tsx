import Layout from '../../components/layout';
import { strings } from '../../translations';
import { useRouter } from 'next/router';

const Home = ({ lang }) => (
  <Layout title={strings[lang].aboutTitle} lang={lang}>
    <div className="main-contacts-heading-container">
      <span className="main-contacts-heading">{strings[lang].aboutTitle}</span>
    </div>
    {strings[lang].aboutText}
  </Layout>
);

Home.getInitialProps = async ({ query }) => {
  let { lang } = query;
  if (!lang) {
    lang = 'ru';
  }
  return { lang };
};

export default Home;
