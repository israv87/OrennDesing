import React from 'react'

import { Helmet } from 'react-helmet'

import GalleryCard2 from '../components/gallery-card2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Orenn</title>
        <meta property="og:title" content="Orenn" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-links-container">
            <a href="#servicios" className="home-link">
              Servicios
            </a>
            <a href="#portafolio" className="home-link1">
              Portafolio
            </a>
            <a href="#planes" className="home-link2">
              Planes
            </a>
            <a href="#contacto" className="home-link3">
              Contacto
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="Card-Heading home-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link4 Navbar-Link">About</span>
              <span className="home-link5 Navbar-Link">Experience</span>
              <span className="home-link6 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div id="home" className="home-container02">
        <div className="home-hero">
          <div className="home-hero1">
            <div className="home-container03">
              <img alt="image" src="/oren-1500h.png" className="home-image" />
            </div>
          </div>
        </div>
      </div>
      <div id="servicios" className="home-features">
        <div className="home-cards-container">
          <img
            alt="image"
            src="/imagen_2024-03-18_164556173-200h.png"
            className="home-image1"
          />
        </div>
        <video
          src="https://whttps://www.youtube.com/embed/fS4cH2fky5M?autoplay=1&amp;mute=1"
          loop="true"
          muted="true"
          poster="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwMXx8bWFya2V0aW5nfGVufDB8fHx8MTcxMDgwMzk4NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          preload="auto"
          autoPlay="true"
          className="home-video"
        ></video>
      </div>
      <div className="home-about">
        <div className="home-banner">
          <h1 className="home-text">Portafolio</h1>
          <span className="home-text01">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum
                mi ut rhoncus. Integer in dignissim tortor. Sed non volutpat
                turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                ortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </div>
        <div id="portafolio" className="home-gallery">
          <div className="home-container04">
            <div className="home-container05">
              <div className="home-container06">
                <GalleryCard2
                  title="Construcora Vipacas"
                  imageSrc="/277239546_1135155623978556_4153383881003623431_n-1500h.jpg"
                  rootClassName="rootClassName2"
                ></GalleryCard2>
              </div>
              <div className="home-container07">
                <GalleryCard2
                  title="Maku Suchi"
                  imageSrc="/334959830_128997123442214_3778094926354358598_n-1500h.jpg"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container08">
              <GalleryCard2
                title="Geeksid"
                imageSrc="/337557711_3462720947330918_9136830404972638970_n-1500h.jpg"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container09">
            <GalleryCard2
              title="Monster Energy"
              imageSrc="/359772532_1709882879439924_2608505970169777243_n-1500w.jpg"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div id="planes" className="home-pricing">
        <div className="home-heading-container">
          <img alt="image" src="/planes-200h.png" className="home-image2" />
        </div>
        <div className="home-pricing-card-container">
          <div className="home-card">
            <div className="home-card-heading">
              <span className="home-type Anchor">Plan Básico</span>
              <span className="Section-Heading">Básico</span>
            </div>
            <div className="home-card-content">
              <div className="home-feature">
                <span className="Card-Text">Feature one</span>
                <span className="home-limit Card-Text">TBD</span>
              </div>
              <div className="home-feature1">
                <span className="Card-Text">Feature two</span>
                <span className="home-limit1 Card-Text">TBD</span>
              </div>
              <div className="home-feature2">
                <span className="Card-Text">Feature three</span>
                <span className="home-limit2 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-feature3">
                <span className="Card-Text">Feature four</span>
                <span className="home-limit3 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-choose button">ELEGIR</button>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-card-heading1">
              <span className="home-type1 Anchor">Plan PRO</span>
              <span className="Section-Heading">Completo</span>
            </div>
            <div className="home-card-content1">
              <div className="home-container10">
                <span className="Card-Text">Feature one</span>
                <span className="home-text06 Card-Text">TBD</span>
              </div>
              <div className="home-container11">
                <span className="Card-Text">Feature two</span>
                <span className="home-text08 Card-Text">TBD</span>
              </div>
              <div className="home-container12">
                <span className="Card-Text">Feature three</span>
                <span className="home-text10 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container13">
                <span className="Card-Text">Feature four</span>
                <span className="home-text12 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-button Anchor button">ELEGIR</button>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-card-heading2">
              <span className="home-type2 Anchor">Plan Pro+</span>
              <span className="Section-Heading">Professional</span>
            </div>
            <div className="home-card-content2">
              <div className="home-container14">
                <span className="Card-Text">Feature one</span>
                <span className="home-text14 Card-Text">TBD</span>
              </div>
              <div className="home-container15">
                <span className="Card-Text">Feature two</span>
                <span className="home-text16 Card-Text">TBD</span>
              </div>
              <div className="home-container16">
                <span className="Card-Text">Feature three</span>
                <span className="home-text18 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container17">
                <span className="Card-Text">Feature four</span>
                <span className="home-text20 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-button1 Anchor button">ELEGIR</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div id="contacto" className="home-subscribe">
        <img
          alt="image"
          src="/122791267_856175685122627_5185975001702022849_n-1500w.jpg"
          className="home-image3"
        />
        <div className="home-container18">
          <h2 className="home-text21">Trabaja con nosotros</h2>
          <input
            type="text"
            required="true"
            placeholder="Nombre"
            className="home-textinput Section-Text input"
          />
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput1 Section-Text input"
          />
          <input
            type="text"
            required="true"
            placeholder="Teléfono"
            className="home-textinput2 Section-Text input"
          />
          <textarea
            placeholder="Mensaje"
            className="home-textarea Section-Text textarea"
          ></textarea>
          <button className="home-button2 button">CONTÁCTANOS</button>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
