import Layout from '../../../components/layout';
import { projects } from '../../../constants';
import LazyLoad from 'react-lazyload';
import Projects from '../../../components/projects';
import { strings } from '../../../translations';

const Project = props => (
  <Layout title={props.project.name[props.lang]} lang={props.lang}>
    <div className="main-photos">
      <div className="main-contacts-heading-container">
        <span className="main-contacts-heading">
          {props.project.name[props.lang]}
          {props.project.photoBy ? `.  ${strings[props.lang].photos}  ${props.project.photoBy[props.lang]}` : ''}
        </span>
      </div>
      <div className="main-photos__container">
        {props.project.images.map((el, i) => (
          <LazyLoad key={i}>
            <img
              className={el.includes('h') ? 'horizontal animated fadeInUp' : 'vertical animated fadeInUp'}
              src={`/projects/${props.project.id}/${el}`}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
    <Projects lang={props.lang} title />
  </Layout>
);

Project.getInitialProps = async function (context) {
  let { id, lang } = context.query;
  if (!lang) {
    lang = 'ru';
  }
  let project = projects.find(el => el.id == id);
  if (!project) {
    project = projects[0];
    console.log({ project });
  }
  return { id, project, lang };
};

export default Project;
