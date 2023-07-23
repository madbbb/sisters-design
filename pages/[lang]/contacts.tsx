import Layout from '../../components/layout';
import { strings } from '../../translations';

const Home = ({ lang }) => (
  <Layout title={strings[lang].contacts} lang={lang}>
    <div className="main-contacts-heading-container">
      <span className="main-contacts-heading">{strings[lang].contacts}</span>
    </div>
    <div className="main-contacts__row">
      <div className="main-contacts__row-item">
        <span className="heading-item">{strings[lang].irina}</span>
        <span>
          <a href="tel:+79262628222">+7 (926) 262-8222</a> <br />
          <a href="mailto:sisters-design@mail.ru">sisters-design@mail.ru</a>
        </span>
      </div>
      <div className="main-contacts__row-item">
        <span className="heading-item">{strings[lang].ilona}</span>
        <span>
          <a href="tel:+79859995084">+7 (985) 999-5084</a>
          <br />
          <a href="mailto:info@sisters-design.ru">info@sisters-design.ru</a>
        </span>
      </div>
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
