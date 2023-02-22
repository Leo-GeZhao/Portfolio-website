import "./about.css";
import aboutImg from "../../assets/about.jpg";
import { HiDownload } from "react-icons/hi";
import CV from "../../assets/CV.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h3>About Me</h3>
          <p>
            After three years of working in Accounting and Finance, I made the
            decision to change my career path.
          </p>
          <p>
            The moment I discovered coding and programming, I realized it was
            the perfect career for me - one where I could find fulfillment in
            solving problems and building applications to help others.
          </p>
          <p>
            Though it was a long journey, my passion for software development
            gave me the courage to make this life-changing decision. I am
            excited to continue growing in this field and contributing to the
            development of innovative solutions.
          </p>
          <a href={CV} download className="btn">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
