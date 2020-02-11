import React from 'react';

const Test = () => (
  <section className="banner">
    <img
      className="banner__image--mobile"
      src="//images.ctfassets.net/ogwrx47jrz16/2TCDGSUeb226IJAG5SELfG/bb9c78796886b7190edb0fde172f3f5e/Australia_Kata_Tjuta_Sunsrise_Travellers_Hiking.jpg"
      alt="banner"
    />
    <div className="banner__container">
      <div className="banner__image-container">
        <img
          className="banner__image"
          src="//images.ctfassets.net/ogwrx47jrz16/2TCDGSUeb226IJAG5SELfG/bb9c78796886b7190edb0fde172f3f5e/Australia_Kata_Tjuta_Sunsrise_Travellers_Hiking.jpg"
          alt="banner"
        />
        <div className="banner__overlay">
          <img
            className="banner__logo"
            src="//images.ctfassets.net/ogwrx47jrz16/2wo66hLt2IQGN5ftsbBOjs/21a0861415832ee52127513c08af4fd8/G-Adventures-Logo-2015-FINAL-KO-HORIZONTAL.png"
            alt="banner"
          />
          <div className="banner__info--details">
            <h5 className="banner__heading">
              Alice Spring to Kakadu: Starry Nights and Secret Waterfalls
            </h5>
            <p>6 days | Alice Springs to Darwin</p>
            <a
              className="banner__link"
              href=" https://www.usit.ie/tours/25247-alice-springs-to-kakadu-starry-nights-secret-waterfalls "
              target="_blank"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Test;
