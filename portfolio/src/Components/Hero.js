import React from "react";
import HeroImage from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
export default function Hero() {
  function btnTwitter() {
    window.open(
      " https://x.com/JoelMurphy2k3?t=U08A1TqAzdfowktUY-bTVQ&s=08 ",
      "_blank"
    );
  }
  function btnLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/joel-murphy-456a10281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  ",
      "_blank"
    );
  }
  function btnFaceBook() {
    window.open(
      "https://www.facebook.com/joelmurphy.joelmurphy.5?mibextid=ZbWKwL",
      "_blank"
    );
  }
  const config = {
    subtitle: "Im a Web Developer",
  };
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center"
    >
      <div className="md:w-1/2">
        <h1 className=" color text-6xl font-hero-font">
          Hi, <br /> Im Joel Murphy
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className=" color flex py-10 cursor-pointer">
          <p onClick={btnTwitter} className="pr-5 text-black icon">
            <AiOutlineTwitter size={40} />
          </p>
          <p onClick={btnFaceBook} className="pr-5 text-black  icon ">
            <AiOutlineFacebook size={40} />
          </p>
          <p onClick={btnLinkedIn} className="pr-5  text-black  icon ">
            <AiOutlineLinkedin size={40} />
          </p>
        </div>
      </div>
      <img className="md:w-1/3 " src={HeroImage} alt="" />
    </section>
  );
}
