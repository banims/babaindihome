import React, { Component } from 'react';
import '../style/styles.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
            <img className="imgfluid" src={require('../logo/logo.png')}></img>
            </div>
            <div className="menu">
              <ul>
                  <li><a>Promo</a></li>
                  <li><a>paket & Add-On</a></li>
                  <li><a>pusat bantuan</a></li>
                  <li><a>info terkini</a></li>
                  <li className=""><a>myIndiHome</a></li>
              </ul>
            </div>
            {/**end menu */}
          </div>
          {/*end navbar */}
        </div>
        {/*end header */}
        <div className="head-bottom"><p>Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</p></div>
        {/*end header-bottom */}
        
            <div className="container">
                <div className="slider">
                    <img src={require('../images/slider.jpeg')}></img>
                  
                </div>
                <div className="container-kanan">
                  <div className="container-right1">
                  <img className="minibanner1" src={require('../images/mini-banner-1-raw.png')}></img>
                  </div>
                  <div className="container-right1">
                  <img className="minibanner2" src={require('../images/mini-banner-2-raw.png')} ></img>
                  </div>
                </div>

                <div className="banner-bottom">
                  <h2>Add-On Unggulan</h2>
                  <div className="banner-bottom-ok"><img className="img-iflix" src={require('../images/iflix-home.jpg')}></img><div className="addon"><p className="ket">iflix</p><a>LIHAT</a></div></div>
                  <div className="banner-bottom-ok"><img className="img-hooq" src={require('../images/hooq-home.jpg')}></img><div className="addon"><p className="ket">hooq</p><a>LIHAT</a></div></div>
                  <div className="banner-bottom-ok"><img className="img-edukids" src={require('../images/edukids-home.jpg')}></img><div className="addon"><p className="ket">edukids</p><a>LIHAT</a></div></div>
                  <div className="banner-bottom-ok"><img className="img-catchplay" src={require('../images/catchplay-home-new.jpg')}></img><div className="addon"><p className="ket">catchplay</p><a>LIHAT</a></div></div>
                </div>
            </div>
              <div className="tivi">
                  <div className="container-tivi">
                    <h2>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h2>
                    <div className="list-tivi">
                        <div><img className="list-img1" src={require('../images/Indihome-active.png')}></img></div>
                        <div><img className="list-img2" src={require('../images/hooq.png')}></img></div>
                        <div><img className="list-img3" src={require('../images/catchplay.png')}></img></div>
                    </div>

                    <div className="tv-section">
                        <div className="banner-bottom-tv"><img className="img-tv1" src={require('../images/Highlight_2.jpg')}></img><p className="ket">LOMBA EPG</p></div>
                        <div className="banner-bottom-tv"><img className="img-tv2" src={require('../images/Highlight.jpg')}></img><p className="ket">UseeSports 2 - BWF</p></div>
                        <div className="banner-bottom-tv"><img className="img-tv3" src={require('../images/Ray.jpg')}></img><p className="ket">FX - Ray Donovan Season 7</p></div>
                        <div className="banner-bottom-tv"><img className="img-tv4" src={require('../images/taffy.jpg')}></img><p className="ket">Boomerang - Taffy</p></div>
                    </div>
                  </div>
              </div>
        </div>
    );
  }
}

export default App;