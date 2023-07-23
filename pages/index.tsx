import Layout from '../components/layout';
import Main from '../components/main';
import Projects from '../components/projects';
import { strings } from '../translations';

const Home = ({ lang }) => {
  return (
    <Layout title={strings[lang].title} lang={lang}>
      <Main lang={lang} />
      <Projects lang={lang} />
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
  let { lang } = query;
  if (!lang) {
    lang = 'ru';
  }
  return { lang };
};

export default Home;
