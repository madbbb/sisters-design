import { press } from '../constants';
import Link from 'next/link'
import { strings } from '../translations';

export default ({ lang, title = false }) => (
  <div className="cards-block">
    {title &&
      <div className="main-contacts-heading-container">
        <span className="main-contacts-heading">{strings[lang].otherPress}</span>
      </div>
    }
    <div className="cards-block__container" id="anchor">
      {press.map((project) =>
        <div key={project.id} className="cards-block__item">
          <Link href='/[lang]/press/[id]' as={`/${lang}/press/${project.id}/`}>
            <a className="cards-block__link"></a>
          </Link>
          <div
            className="cards-block__img animated fadeInUp press"
            style={{ backgroundImage: `url("/press/${project.id}/${project.img}")` }}
          ></div>
          <span className="cards-block__heading">{project.name[lang]}</span>
        </div>
      )}
    </div>
  </div>
);