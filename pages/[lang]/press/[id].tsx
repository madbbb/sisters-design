import Layout from '../../../components/layout';
import { press } from '../../../constants';
import LazyLoad from 'react-lazyload';
import PressList from '../../../components/press-list';
import { strings } from '../../../translations';

const Press = (props) => {
  return (
    <Layout title={props.project.name[props.lang]} lang={props.lang}>
      <div className="main-photos">
        <div className="main-contacts-heading-container">
          <span className="main-contacts-heading">{props.project.name[props.lang]}</span>
        </div>
        <div className="main-photos__container">
          {props.project.images.map((el, i) =>
            <LazyLoad key={i}>
              <img className={el.includes('h') ? 'horizontal animated fadeInUp' : 'vertical animated fadeInUp'} src={`/press/${props.project.id}/${el}`} />
            </LazyLoad>
          )}
        </div>
      </div>
      <PressList lang={props.lang} title />
    </Layout>
  )
};

Press.getInitialProps = async function (context) {
  const { id, lang } = context.query;
  const project = press.find(el => el.id == id);
  return { id, project, lang };
};

export default Press;
