import data from "./data";
import Card from "../../components/Card";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Here is a selection of projects I've worked on. More projects are
        comming very soon.
      </p>
      <div className="container portfolio__cards">
        {data.map((item, index) => (
          <Card key={index + 1} className="portfolio__card">
            <div className="portfolio__image">
              <img src={item.img} alt="" className="portfolio__card-img" />
            </div>
            <h5>{item.title}</h5>
            {/* <small>{item.subtitle}</small> */}
            <div className="stacks">
              {item.stack.map((s) => (
                <div className="stack">#{s}</div>
              ))}
            </div>

            <div className="desc">{item.desc}</div>
            <div className="btn__group">
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn portfolio-btn"
              >
                Demo
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn portfolio-btn"
              >
                Github
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
