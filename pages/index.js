import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [user, setUser] = useState("");
  const [url, setUrl] = useState("");
  const [resume, setResume] = useState(false);


  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=3180163-50123b99e06cda0e64fc27394&q=nature&image_type=all"
    )
      .then((res) => res.json())
      .then((data) => {
        var hits = data.hits;
        var randomIndex = Math.floor(Math.random() * hits.length);
        var randomHit = hits[randomIndex];
        setBackgroundImage(randomHit.largeImageURL);
        setUser(randomHit.user);
        setUrl(randomHit.pageURL);
      });
      if (resume) {
        const resumeElement = document.querySelector(`.${styles.resume}`);
        resumeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  }, [resume]);

  let letOpen = (event) => {
    if(event.target.innerText === 'Resume'){
      setResume(!resume)
    }
  }

  let closeWindow = () => {
    setResume(false);
  };

  return (
    <section>
      <Head>
        <title>Jesus Tello Developer</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section
        id={styles.everything}
        className="w3-light-grey"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Page Container */}
        <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
          {/* The Grid */}
          <div className="w3-row-padding">
            {/* Left Column */}
            <div className="w3-third">
              <div className="w3-text-grey w3-card-4" id={styles.imageAndInfo}>
                <div className="w3-display-container">
                  <Image
                    id={styles.smilesJpg}
                    className={styles.imageSmile}
                    src="/smile.jpg"
                    width={300}
                    height={300}
                    alt="Avatar"
                  />
                  <div className="w3-display-bottomleft w3-text-black">
                    <h2 id={styles.myName}>Jesus Tello</h2>
                  </div>
                </div>
                <div className="w3-container">
                  <div id={styles.information} className={styles.typingEffect}>
                    <p>
                      <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
                      Developer
                    </p>
                    <p>
                      <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />
                      San Diego, C.A
                    </p>
                    <p>
                      <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
                      jesustellor@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
                      858-863-6764
                    </p>
                  </div>
                  <hr />
                  <p className="w3-large">
                    <b>
                      <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />
                      Skills
                    </b>
                  </p>
                  <p>JavaScript</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "95%" }}
                    >
                      95%
                    </div>
                  </div>
                  <p>HTML</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "90%" }}
                    >
                      <div className="w3-center w3-text-white">90%</div>
                    </div>
                  </div>
                  <p>CSS</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: "85%" }}
                    >
                      85%
                    </div>
                  </div>
                  <br />
                  <p className="w3-large w3-text-theme">
                    <b>
                      <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />
                      Languages
                    </b>
                  </p>
                  <p>English</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div
                      className="w3-round-xlarge w3-teal"
                      style={{ height: 24, width: "100%" }}
                    />
                  </div>
                  <p>Spanish</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div
                      className="w3-round-xlarge w3-teal"
                      style={{ height: 24, width: "100%" }}
                    />
                  </div>
                  <br />
                </div>
              </div>
              <br />
              {/* End Left Column */}
            </div>
            {/* Right Column */}
            <div className="w3-twothird">
              <div
                className="w3-container w3-card w3-margin-bottom"
                id={styles.workExperience}
              >
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                  Work Experience
                </h2>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Front End Developer</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right" />
                    Jan 2015 -{" "}
                    <span className="w3-tag w3-teal w3-round">Current</span>
                  </h6>
                  <p>
                    I am a Full Stack MERN Developer with a passion for staying
                    current with emerging technologies. My expertise lies in
                    JavaScript. I am available for hire to assist with any and
                    all of your online development needs.
                  </p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>View Resume</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <button
                      onClick={letOpen}
                      className="w3-button w3-teal w3-round w3-opacity w3-hover-opacity-off"
                      id={styles.resumeButton}
                    >
                      Resume
                    </button>
                    {/* <button className="w3-button w3-teal w3-round w3-opacity w3-hover-opacity-off">
                      Projects
                    </button> */}
                  </h6>
                  <br />
                  {/*resume added here */}
                  {resume && (
                    <section className={styles.resume}>
                      <button
                        className={styles.closeButtonResume}
                        onClick={closeWindow}
                      >
                        X
                      </button>
                      <Image
                        className={styles.resumeImage}
                        src="/resume.jpg"
                        alt="A picture of my resume showing my skills education and Work Experience."
                        width={375}
                        height={110}
                      />
                    </section>
                  )}
                </div>
              </div>
              <div className="w3-container w3-card" id={styles.educationInfo}>
                <h2 className="w3-text-grey w3-padding-16">
                  <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                  Education
                </h2>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>W3Schools.com / Freecodecamp / ProgrammingHub</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right" />
                    Forever
                  </h6>
                  <p>Web Development! All I need to know in one place</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity">
                    <b>Mark Morse Twain</b>
                  </h5>
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right" />
                    2005 - 2006
                  </h6>
                  <p>High School Diploma /w College credits</p>
                  <br />
                </div>
              </div>
              {/* End Right Column */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Page Container */}
        </div>
        <footer
          className="w3-container w3-teal w3-center w3-margin-top"
          id={styles.footerId}
        >
          <a href={url} className={styles.backgroundThanks}>
            <p>
              <Image
                alt="Pixabay logo next to creator ${user}"
                src="https://pixabay.com/static/img/logo.svg"
                width={100}
                height={30}
              />{" "}
              Image by {user}
            </p>
          </a>
          <div id={styles.findmeAt}>
            <p>Find me on social media.</p>
            <section className={styles.socialIcons}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/jesustellor"
              >
                <i className="fa fa-github w3-hover-opacity" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/jesus-tello/"
                target="_blank"
              >
                <i className="fa fa-linkedin w3-hover-opacity" />
              </a>
            </section>
            <p>
              Powered by{" "}
              <a
                rel="noreferrer"
                href="https://www.w3schools.com/w3css/default.asp"
                target="_blank"
              >
                w3.css
              </a>
            </p>
          </div>
        </footer>
      </section>
    </section>
  );
}
