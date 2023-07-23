import Layout from '../../components/layout';
import Projects from '../../components/projects';
import { strings } from '../../translations';

const Home = ({ lang }) => (
  <Layout title={strings[lang].inspiration} lang={lang}>
    <div className="main-contacts-heading-container">
      <span className="main-contacts-heading">{strings[lang].inspiration}</span>
    </div>
    <div className="videoWrapper" style={{ marginBottom: '40px' }}>
      <iframe
        width="560"
        height="349"
        src="https://www.youtube.com/embed/mO6qabb8PYk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="videoWrapper">
      <iframe
        width="560"
        height="349"
        src="https://www.youtube.com/embed/dSBsto2-bho"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
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
