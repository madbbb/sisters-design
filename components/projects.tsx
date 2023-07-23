import { projects } from '../constants';
import Link from 'next/link'
import { strings } from '../translations';

export default ({ lang, title = false }) => (
  <div className="cards-block">
    {title &&
      <div className="main-contacts-heading-container">
        <span className="main-contacts-heading">{strings[lang].otherProjects}</span>
      </div>
    }
    <div className="cards-block__container" id="anchor">
      {projects.map((project) =>
        <div key={project.id} className="cards-block__item">
          <Link href='/[lang]/project/[id]' as={`/${lang}/project/${project.id}`}>
            <a className="cards-block__link"></a>
          </Link>
          <div
            className="cards-block__img animated fadeInUp"
            style={{ backgroundImage: `url("/images/${project.img}")` }}
          ></div>
          <span className="cards-block__heading">{project.name[lang]}</span>
        </div>
      )}
    </div>
  </div>
);