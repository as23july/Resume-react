import aditya from "../image/adityanew.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div class="container-fluid px-6 py-4">
        <div class="row flex-lg-row-reverse align-items-center g-6 py-5 ">
          <div class="col-sm-8 col-xl-5">
            <img
              src={aditya}
              class="d-block mx-lg-auto img-fluid header-img"
              alt="Bootstrap Themes"
              // width="700"
              // height="500"
              loading="lazy"
            />
          </div>

          <div class="col-lg-6">
            <h1 class="display-4 fw-bold lh-1 mb-3">Hi, I'm Aditya Singh</h1>
            <p class="lead">
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web applications with JavaScript / Reactjs / Nodejs
              and some other cool libraries and frameworks.
            </p>
            <div class="gap-5 d-md-flex justify-content-md-start">
              <FaGithub size={50} />
              <FaLinkedin size={50} />
              <CiMail size={50} />
            </div>
            <div class="d-grid gap-5 d-md-flex justify-content-start mt-4">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
