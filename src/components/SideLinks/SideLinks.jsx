import datacampLogo from "../../images/logo/datacamp.png";
import githubLogo from "../../images/logo/github.png";
import kaggleLogo from "../../images/logo/kaggle.png";
import linkedinLogo from "../../images/logo/linkedin.png";
import verticleLine from "../../images/logo/verticle_line.png";
import "./SideLinks.css";

const SideLinks = () => {
  return (
    <div
      className="
        fixed 
        z-[100]
        bottom-0
        xl:left-10 lg:left-2 md:left-2 sm:left-2 left-0
        flex flex-col justify-center gap-2"
    >
      <a
        href="https://www.datacamp.com/portfolio/abhash-rai/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center transform hover:scale-110 transition-transform duration-300"
      >
        <img
          src={datacampLogo}
          className="side_links_datacamp"
          alt="datacampLogo"
        />
      </a>
      <a
        href="https://github.com/AbhashChamlingRai/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center transform hover:scale-110 transition-transform duration-300"
      >
        <img src={githubLogo} className="side_links_github" alt="githubLogo" />
      </a>
      <a
        href="https://www.kaggle.com/abhashrai/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center transform hover:scale-110 transition-transform duration-300"
      >
        <img src={kaggleLogo} className="side_links_kaggle" alt="kaggleLogo" />
      </a>
      <a
        href="https://www.linkedin.com/in/abhash-rai/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center transform hover:scale-110 transition-transform duration-300"
      >
        <img
          src={linkedinLogo}
          className="side_links_linkedin"
          alt="linkedinLogo"
        />
      </a>
      <div className="flex justify-center">
        <img src={verticleLine} className="" alt="verticleLine" />
      </div>
    </div>
  );
};

export default SideLinks;
