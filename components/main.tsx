import { strings } from '../translations';

export default ({ lang }) => (
  <div className="main-images">
    <div className="main-images__item animated fadeInUp responsive-image"></div>
    <div className="img-container">
      <div className="main-images__item-sm animated fadeInUp" style={{ backgroundImage: 'url("/images/sisters-new.jpg")' }}></div>
      <div className="visible-x">
        {strings[lang].intro}
      </div>
    </div>
    <div className="animated-arrow visible-x">
      <a href="#anchor"></a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.983 511.983">
        <path d="M485.884 102.764L255.991 365.523 26.116 102.764 0 125.601l242.942 277.683c3.297 3.783 8.052 5.935 13.049 5.935s9.77-2.152 13.049-5.935l242.942-277.683-26.098-22.837z" />
      </svg>
    </div>
  </div>);