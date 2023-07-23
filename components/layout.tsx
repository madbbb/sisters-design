import Link from 'next/link'
import Head from 'next/head'
import { strings } from '../translations';

export default ({ children, title = '', lang = 'ru' }) => {
  const addon = title ? `${title} - ` : '';
  return (
    <div>
      <Head>
        <title>{addon}Sisters` Design</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="stylesheet" href="/css/libs.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </Head >
      <header>
        <div className="container">
          <div className="header-container">
            <div className="logo-container">
              <div className="logo">
                <Link href={`/${lang}`}>
                  <a><img src="/images/logo.svg" alt="The Sisters' Design" /></a>
                </Link>
              </div>
            </div>
            <nav className="nav-container">
              <Link href={`/${lang}/#anchor`}>
                <a className="nav-container__item">{strings[lang].projects}</a>
              </Link>
              <Link href={`/${lang}/about`}>
                <a className="nav-container__item">{strings[lang].about}</a>
              </Link>
              {/* <a href="#" className="nav-container__item">Media</a>
                        <a href="#" className="nav-container__item">Events</a> */}
              {/* <Link href={`/${lang}/press`}>
                <a className="nav-container__item">{strings[lang].press}</a>
              </Link> */}
              <Link href={`/${lang}/inspiration`}>
                <a className="nav-container__item">{strings[lang].inspiration}</a>
              </Link>
              <Link href={`/${lang}/contacts`}>
                <a className="nav-container__item">{strings[lang].contacts}</a>
              </Link>
            </nav>
            <div className="change-block">
              <Link href="/ru">
                <a className={"change-block__item " + (lang === 'ru' ? 'active' : '')}>rus</a>
              </Link>{" "}
              <Link href="/en">
                <a className={"change-block__item " + (lang === 'en' ? 'active' : '')}>eng</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            {children}
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="copyright">
            {strings[lang].copyright}
          </div>
          <div className="social-icons">
            <a href="#"><img src="/images/facebook.svg" height="24" /></a>
            <a href="https://www.instagram.com/sistersdesign_moscow/"><img src="/images/instagram.svg" height="24" /></a>
          </div>
        </div>
      </footer>
    </div >
  )
}