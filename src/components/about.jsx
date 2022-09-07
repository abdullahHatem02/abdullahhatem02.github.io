import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
         {
          id: "Java_skill",
          content: "Java",
          porcentage: "90%",
          value: "90"
        },
         {
          id: "Node_skill",
          content: "Nodejs",
          porcentage: "90%",
          value: "90"
        },
         {
          id: "Express_skill",
          content: "Express",
          porcentage: "90%",
          value: "90"
        },
          {
          id: "Mongoose_skill",
          content: "Mongoose",
          porcentage: "90%",
          value: "90"
        },
          {
          id: "MongoDB",
          content: "Mongo",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "Python", content: "Python", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75"
        },
       
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "OOP-Skill",
          content: "OOP",
          porcentage: "85%",
          value: "85"
        },
         {
          id: "Prolog-Skill",
          content: "Prolog",
          porcentage: "85%",
          value: "85"
        },
         {
          id: "Haskell-Skill",
          content: "Haskell",
          porcentage: "85%",
          value: "85"
        },
         {
          id: "C-Skill",
          content: "C",
          porcentage: "85%",
          value: "85"
        },
         {
          id: "Numpy",
          content: "Numpy",
          porcentage: "80%",
          value: "80"
        },
          {
          id: "pandas",
          content: "Pandas",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "TensorFlow",
          content: "Tensorflow",
          porcentage: "70%",
          value: "70"
        },
         {
          id: "Anaconda",
          content: "Anaconda",
          porcentage: "80%",
          value: "80"
        },
         {
          id: "MatplotLib",
          content: "Matlplotlib",
          porcentage: "80%",
          value: "80"
        },
           {
          id: "Jupyter",
          content: "Jupyter-Notebook",
          porcentage: "80%",
          value: "80"
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
           "Hello there, I'd like to introduce myself first. My name is Abdullah Hatem. I am currently Studying computer science and engineering at the German Univeristy in Cairo. My main area of expertise is Software engineering including backend and frontend develpoment and machine learning and Data Science. I've created multiple web applications and projects using latest technologies like NodeJs, ExpressJs, MongoDB and React js known as the MERN stack.I've also used pug templates in some projects. The projects were full stack , I did the frontend using react,html,bootstrap and css. On the backend , I use NodeJs, ExpressJs, and Nosql MongoDB for the database. The projects I did were E-commerce websites"
        },
        {
          id: "second-p-about",
          content:
            "The projects I developed were E-commerce websites, dashboard websites for merchants to track their transactions data, booking and tours appplication, Bills management web application for merchants and small & medium enterprises to upload their official info and bills to be integrated with POS Systems to get automatically paid with AMAN-EPayements."
        },
        {
          id: "third-p-about",
          content:
            "The projects I developed included but not limited to: complete user registration system with strong security and encryption, restful APIs design to get,post and patch data to the database, automatic Emails using sendGrid, online payements using PAYPAL and Stripe,File uploading like images and csv files,data aggregation and analysis,advanced data modeling and advanced error handling"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
