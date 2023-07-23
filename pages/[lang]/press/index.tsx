import Layout from '../../../components/layout';
import Press from '../../../components/press-list';
import { strings } from '../../../translations';

const Home = ({ lang }) => (
  <Layout title={strings[lang].press} lang={lang}>
    <div className="main-contacts-heading-container">
      <span className="main-contacts-heading">{strings[lang].press}</span>
    </div>
    <Press lang={lang} />
  </Layout>
);

Home.getInitialProps = async ({ query }) => {
  const { lang } = query;

  return { lang };
};

export default Home;
