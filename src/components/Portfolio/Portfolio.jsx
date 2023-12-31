import attendance_management_system from "../../images/project_images/attendance_management_system.png";
import customer_churn from "../../images/project_images/customer_churn.png";
import sydney_housing_analysis from "../../images/project_images/sydney_housing_analysis.png";
import co2_prediction from "../../images/project_images/co2_prediction.png";
import "./Portfolio.css";

const Portfolio = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  const projects = [
    {
      coverImg: attendance_management_system,
      projectTitle: "Attendance Management System",
      projectType: "COMPUTER VISION & DATA ANALYSIS",
      link: "https://github.com/AbhashChamlingRai/attendance-system/",
    },
    {
      coverImg: customer_churn,
      projectTitle: "Customer Churn Prediction",
      projectType: "MACHINE LEARNING CLASSIFICATION & DATA ANALYSIS",
      link: "",
    },
    {
      coverImg: sydney_housing_analysis,
      projectTitle: "Sydney Housing Market Analysis",
      projectType: "DATA ANALYSIS",
      link: "https://www.kaggle.com/code/abhashrai/sydney-house-prices-analysis/",
    },
    {
      coverImg: co2_prediction,
      projectTitle: "CO2 Emissions Prediction",
      projectType: "MACHINE LEARNING REGRESSION & DATA ANALYSIS",
      link: "https://www.kaggle.com/code/abhashrai/predicting-co2-emissions-ps-s3e20/",
    },
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div
        className="project-card shadow-xl
        w-[80%] sm:w-[70%] md:w-[70%] lg:w-[45%] xl:w-[45%] box-border 
        h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[350px]"
        style={{
          backgroundImage: `url(${project.coverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="project-hover-layer bg-custom-project-blue w-full h-full flex flex-col justify-center items-center px-10 sm:px-20 gap-5 text-center">
          <div className={`${headers_classes}`}>{project.projectTitle}</div>
          <div className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-md text-center">
            {project.projectType}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${headers_classes} font-semibold py-2 px-5 bg-custom-dark-blue shadow-md`}
          >
            View Project
          </a>
        </div>
        {/* <img src={project.coverImg} alt={project.projectTitle} /> */}
      </div>
    );
  };

  return (
    <div
      id="projects"
      className={`portfolio_section flex flex-col gap-16 ${container_classes}`}
    >
      <div className="w-full flex flex-col gap-2">
        <div
          className={`${normal_text_classes} text-custom-light-blue text-center`}
        >
          PORTFOLIO
        </div>
        <div className="text-[18px] sm:text-[22px] md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-center">
          Some of my works
        </div>
      </div>
      <div class="flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
