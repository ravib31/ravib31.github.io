import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/digital.png";
import IMG2 from "../../assets/basket.png";
import IMG3 from "../../assets/amazon.png";
import IMG4 from "../../assets/befour.png";
import IMG5 from "../../assets/today.png";
import IMG6 from "../../assets/messhomart.png";
import IMG7 from "../../assets/movie.png";
import news from "../../assets/news.png"

const Portfolio = () => {
  return (
    <div id="projects">
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">
          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>
            <h6 className="project-title">BeFour.com</h6>
            <h5 className="project-description">
              It is an E-commerce website where user can buy different varities
              of products mainly related to clothing and You can also buy mobile
              accesories like mobile back-covers. This website also has admin
              section where admin can add, delete and update the products data.
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- React.JS | HTML&CSS | ChakraUI | MongoDB | Node.JS
            </h6>
            <h5 className="details">This is a group project executed in 6 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/atheist31/legit-substance-7075"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://frontend-eight-ashen-60.vercel.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
             
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG7} alt="" />
            </div>
            <h6 className="project-title">Movie App</h6>
            <h5 className="project-description">
              Movie App is your one-stop destination for all things movies.
              Whether you're seeking heart-pounding action, heartwarming
              romance, spine-tingling thrillers, or thought-provoking dramas,
              Movie App has it all.
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- HTML&CSS | JavaScript
            </h6>
            <h5 className="details">A solo project executed in 06 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/atheist31/movies-app"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://dainty-moonbeam-5a387f.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={news} alt="" />
            </div>
            <h6 className="project-title">News App</h6>
            <h5 className="project-description">
              News Catcher is a news app it is delivers curated news, tailored
              just for you. Get breaking updates, diverse perspectives, and
              personalized content at your fingertips. Here you can Explore via
              categories, and read articles.
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- JavaScript | React.JS | BootStrap
            </h6>
            <h5 className="details">A solo project executed in 06 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/atheist31/My-News"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://enchanting-faun-2c80a6.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h6 className="project-title">Amazon</h6>
            <h5 className="project-description">
              An E-commerce responsive website where user can singup & login,and
              see many pages & products which are categorised and finally can
              checkout and signout.And it has a admin side where admin can add
              new product and update the product and user also.
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- React | HTML&CSS | Redux | ChakraUI
            </h6>
            <h5 className="details">This is a group project executed in 6 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/ramNgithub/amazon.in-Clone"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://steady-swan-05d49a.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h6 className="project-title">Reliance Digital</h6>
            <h5 className="project-description">
              Reliance Digital is an online fully responsive store for
              electronic products. Customers can buy everyday household items
              after Login or Signup.There is many category and products variety.
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- React | HTML | CSS | ChakraUI
            </h6>
            <h5 className="details">This is a group project executed in 6 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/PoojaBijwal/luxuriant-square-3578"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://comforting-concha-d43513.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>
            <h6 className="project-title">Big-basket</h6>
            <h5 className="project-description">
              An E-commerce website where user can buy any food product after
              Login or Signup and see different pages & products.There are lots
              of products variety. This was group project of 5 members
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- Javascript | HTML | CSS
            </h6>
            <h5 className="details">This is a group project executed in 6 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/AnjuTewatia/abrupt-cough-2319"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://fascinating-syrniki-299085.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG5} alt="" />
            </div>
            <h6 className="project-title">India-Today</h6>
            <h5 className="project-description">
              This is a online news website where you can read and watch news
              allover world.Through the mobile App also.
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- HTML | CSS
            </h6>
            <h5 className="details">This is a group project executed in 6 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/atheist31/jolly-rat-6057"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://timely-madeleine-ae4695.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG6} alt="" />
            </div>
            <h6 className="project-title">Messho.com</h6>
            <h5 className="project-description">
              This is a online E-commerce website where user can find many
              category and products variety at very lowest price.
            </h5>
            <h6 className="project-tech-stack" color="red">
              TechStack:- React JS | JavaScript | MongoDB
            </h6>
            <h5 className="details">This is a group project executed in 6 days</h5>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/atheist31/wired-interest-36"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://642a6273ab8bc424be3e3f48--cool-sherbet-fa209e.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
