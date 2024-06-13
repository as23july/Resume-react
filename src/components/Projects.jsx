import React from "react";
import { FaPython } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import "./Listproject.css";
import Notebook from "../image/notebook.png"
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div class="container project">
        <div class="listproject">
          <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Top Recent Projects
          </h1>
          <hr />
          <p className="pb-3 text-center">
            👉 Here are my top 3 Recent Project with live link and source code
          </p>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={<img src={Notebook}/>}
              iconStyle={{ background: "#138781", color: "#fff"}}
              icon={<FaReact />}
            >
              <div class="card-skills">
                <span class="card-detail-badge">React.js</span>
                <span class="card-detail-badge">Node.js</span>
                <span class="card-detail-badge">Express.js</span>
                <span class="card-detail-badge">MongoDB</span>
                <span class="card-detail-badge">Git</span>
                <span class="card-detail-badge">HTML & CSS</span>
              </div>
              <h3 className="vertical-timeline-element-title">
                Notebook Website
              </h3>
              {/* <h5 className="vertical-timeline-element-subtitle">Node.js, Express.js, React.js, MongoDB, HTML&CSS</h5> */}
              <ol>
                <li>
                  <p>
                    Developed a full-stack notebook application using the MERN
                    stack, enabling users to create, organize, and manage
                    personal notes and to-do lists effectively.
                  </p>
                </li>
                <li>
                  <p>
                    Designed and implemented a MongoDB database to store and
                    retrieve user-generated notes and tasks, ensuring data
                    persistence and seamless retrieval.
                  </p>
                </li>
                <li>
                  <p>
                    Utilized Express.js to create RESTful APIs for handling CRUD
                    (Create, Read, Update, Delete) operations, facilitating
                    smooth communication between the front-end and back-end
                    components.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented front-end functionality using React.js,
                    including state management with Redux for centralized data
                    handling, resulting in an intuitive and responsive user
                    interface.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Integrated user authentication and authorization features,
                    ensuring secure access to personal notes and tasks using
                    JSON Web Tokens (JWT) and bcrypt for password hashing and
                    verification.
                  </p>
                </li>
                <li>
                  <p>
                    Employed responsive design principles and CSS frameworks to
                    ensure cross-device compatibility, providing an optimal user
                    experience across different screen sizes.
                  </p>
                </li>
              </ol>
              <div class="project1-button text-center">
                <a
                  href="https://github.com/as23july/notebook-react"
                  class="ad-btn"
                >
                  {" "}
                  View
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaPython />}
            >
              <div class="card-skills">
                <span class="card-detail-badge">Python</span>
                <span class="card-detail-badge">OpenCV</span>
                <span class="card-detail-badge">Numpy</span>
                <span class="card-detail-badge">Git</span>
              </div>
              <h3 className="vertical-timeline-element-title">
                {" "}
                Air Canvas Software
              </h3>
              {/* <h5 className="vertical-timeline-element-subtitle"> Python, OpenCV, Numpy, Git</h5> */}
              <ol>
                <li>
                  <p>
                    {" "}
                    Build a model which start reading the frames and convert the
                    captured frames to HSV color space.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    It prepare the canvas frame and put the respective color
                    button on it. Use the tracker bar values for identifying
                    which colored is marked.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Preprocess the mask with morphological operations (Erosion
                    and dilation). Detect the contours, find the center
                    coordinates of largest contour and keep storing them in the
                    array for successive frames.
                  </p>
                </li>
                <li>
                  <p> It use array for drawing points on frames and canvas.</p>
                </li>
              </ol>
              <div class="project1-button text-center">
                <a
                  href="https://github.com/as23july/notebook-react"
                  class="ad-btn"
                >
                  {" "}
                  View
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaHtml5 />}
            >
              <div class="card-skills">
                <span class="card-detail-badge">HTML/CSS</span>
                <span class="card-detail-badge">JavaScript</span>
                <span class="card-detail-badge">Bootstrap</span>
                <span class="card-detail-badge">Git</span>
              </div>
              <h3 className="vertical-timeline-element-title">
                Dynamic Website for Company
              </h3>
              {/* <h5 className="vertical-timeline-element-subtitle">HTML/CSS, JavaScript, Bootstrap, Git</h5> */}
              <ol>
                <li>
                  <p>
                    {" "}
                    Build a website which display the work of that company from
                    starting till now.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Anyone can inquire about there work with the help of mail
                    and can get in touch with them.
                  </p>
                </li>
                <li>
                  <p> It is hosted on GitHub.</p>
                </li>
              </ol>
              <div class="project1-button text-center">
                <a
                  href="https://github.com/as23july/notebook-react"
                  class="ad-btn"
                >
                  {" "}
                  View
                </a>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
export default Projects;
