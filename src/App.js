import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import EmailIcon from "@mui/icons-material/Email";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import VideoAppIcon from "./img/videoapp.png";
import ForgottenIcon from "./img/forgotten.png";
import ThreeIcon from "./img/three.png";
import ReactIcon from "./img/react.png";
import CSSIcon from "./img/css.png";
import HTMLIcon from "./img/html.png";
import JSXIcon from "./img/jsx.png";
import MernIcon from "./img/mern.png";
import NodeIcon from "./img/node.png";
import ExpressIcon from "./img/express.png";
import MongoIcon from "./img/mongo.png";
import PhotoshopIcon from "./img/ps.png";
import AfterEffectsIcon from "./img/ae.png";
import C4DIcon from "./img/c4d.png";
import ZBrushIcon from "./img/zb.png";
import GithubIcon from "./img/github.png";
import MarvelousDesignerIcon from "./img/md.jpg";
import ExcelIcon from "./img/excel.png";
import SAPIcon from "./img/sap.png";
import JWTIcon from "./img/jwt.png";
import ReduxIcon from "./img/redux.png";
import PurdueIcon from "./img/purdue.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Popover from "@mui/material/Popover";
const ColorButton = styled(Button)(() => ({
  color: "black",
  padding: ".5vh 2vh !important",
  backgroundColor: "rgba(160,160,160, 0)",
  "&:hover": {
    backgroundColor: "rgba(140,140,140,.5)",
  },
}));

const links = [
  {
    name: "email",
    href: "mailto:tyler.steele.main@gmail.com",
    icon: EmailIcon,
    popover: "tyler.steele.main@gmail.com",
    secure: true,
  },
  {
    name: "phone",
    href: "tel:303-881-2282",
    icon: PhoneIcon,
    popover: "303-881-2282",
    secure: true,
  },
  {
    name: "Diploma",
    href: "https://www.purdueglobal.edu/",
    img: PurdueIcon,
    popover: "Bachelors in IT",
    secure: true,
  },
  {
    name: "History",
    href: "https://ts-2022-jsonresume.netlify.app",
    icon: WorkHistoryIcon,
    popover: "My Work and Education History.",
    secure: true,
  },
  {
    name: "github",
    href: "https://github.com/pcdependency",
    img: GithubIcon,
    popover: "My GitHub: Check out the code for my projects.",
    secure: true,
  },
  {
    name: "Graphics",
    href: "https://forgottendesigns.netlify.app/",
    img: ForgottenIcon,
    popover:
      "Freelance Graphic Renders I made for previous clients and my web portfolio.",
    secure: false,
  },
  {
    name: "3D app",
    href: "https://forgottencity.netlify.app/",
    icon: WebAssetIcon,
    popover: "Fully 3D Interactive Three.js Website.",
    secure: false,
  },
  {
    name: "Full-stack",
    href: "https://github.com/pcdependency/videoapp",
    img: VideoAppIcon,
    popover: "MERN Youtube Clone",
    secure: false,
  },
  {
    name: "Front-end",
    href: "https://mt-lorem-restaurant.netlify.app/",
    icon: WebIcon,
    popover:
      "In Development: Unique custom website interface with parallax and 3D menu system.",
    secure: false,
  },
];

const experience = [
  {
    title: "front-end web development",
    body: "I am experienced and well versed in numerous front-end languages, libraries and frameworks such as HTML, CSS, JavaScript, and React.js.",
    icons: [HTMLIcon, CSSIcon, JSXIcon, ReactIcon, ReduxIcon, ThreeIcon],
  },
  {
    title: "back-end web development",
    body: "I am experienced in most REST API languages, frameworks, libraries such as JavaScript, Node, Express, and MongoDB.",
    icons: [MernIcon, NodeIcon, ExpressIcon, MongoIcon, JWTIcon],
  },
  {
    title: "graphic design",
    body: "I am proficient in static and animated graphic design software available in the Adobe Cloud Suite.",
    icons: [PhotoshopIcon, AfterEffectsIcon],
  },
  {
    title: "3D Design",
    body: "I am proficient in many 3D modeling, designing and animating softwares that are highly useful to next generation graphics on the modern web.",
    icons: [C4DIcon, ZBrushIcon, MarvelousDesignerIcon],
  },
  {
    title: "general experience",
    body: "I have almost a decade of experience working in large production, construction, warehouse, retail, sales, management, food and customer-service oriented jobs.",
    icons: [ExcelIcon, SAPIcon],
  },
];

const information = [
  {
    name: "title",
    info: "IT Technician & MERN Full Stack Web developer",
  },
  {
    name: "name",
    info: "Tyler Steele",
  },
  {
    name: "location",
    info: "Colorado",
  },
  {
    name: "phone",
    info: "(303) 881-2282",
  },
  {
    name: "email",
    info: "tyler.steele.main@gmail.com",
  },
];

const pages = {
  languages: [
    {
      name: "HTML",
      level: 100,
    },
    {
      name: "CSS",
      level: 100,
    },
    {
      name: "JavaScript",
      level: 90,
    },
    {
      name: "React JSX",
      level: 95,
    },
    {
      name: "SQL",
      level: 50,
    },
    {
      name: "MongoDB Aggregation",
      level: 80,
    },
  ],

  general: [
    {
      name: "Redux",
      level: 100,
    },
    {
      name: "Redux Thunk",
      level: 100,
    },
    {
      name: "Heroku Deployment",
      level: 100,
    },
    {
      name: "React Context API",
      level: 100,
    },
    {
      name: "Grid-FS Multer",
      level: 80,
    },
    {
      name: "Express",
      level: 90,
    },
    {
      name: "NodeJS",
      level: 95,
    },
    {
      name: "GIT",
      level: 75,
    },
    {
      name: "Google Services API",
      level: 75,
    },
  ],

  libraries: [
    {
      name: "JSON Web Token",
      level: 100,
    },
    {
      name: "Three.js",
      level: 50,
    },
    {
      name: "Bootstrap",
      level: 85,
    },
    {
      name: "Material-UI",
      level: 80,
    },
    {
      name: "FFMPEG File Transcoding & Compression",
      level: 90,
    },
    {
      name: "React-router-dom",
      level: 100,
    },
    {
      name: "Nodemailer",
      level: 90,
    },
  ],

  skills: [
    {
      name: "File, Video, Image, & Buffer Streaming",
      level: 90,
    },
    {
      name: "Encryption & Hashing",
      level: 90,
    },
    {
      name: "Data Validation",
      level: 85,
    },
    {
      name: "State Optimization",
      level: 85,
    },
    {
      name: "Database & Query Optimization",
      level: 80,
    },
    {
      name: "Cloud Deployment",
      level: 80,
    },
  ],

  experience: [
    {
      name: "Production & Manufacturing",
      level: 90,
    },
    {
      name: "System and Physical Production/Warehouse Inventory Management",
      level: 100,
    },
    {
      name: "Wood, Tile, Carpet Flooring and Installation Sales",
      level: 100,
    },
    {
      name: "Industry and Residential Delivery",
      level: 80,
    },
    {
      name: "Oil, Pipeline, City Infrastructure Construction Maintenance",
      level: 50,
    },
    {
      name: "Industrial, Residential, Automotive, Sandblasting, Painting & Detailing",
      level: 30,
    },
    {
      name: "Retail, Food & Customer Service Jobs",
      level: 100,
    },
  ],

  software: [
    {
      name: "Windows OS 7, 8 & 10",
      level: 100,
    },
    {
      name: "Visual Studio Code",
      level: 90,
    },
    {
      name: "All Adobe Suite Applications Including Photoshop ",
      level: 100,
    },
    {
      name: "MongoDB Compass",
      level: 100,
    },
    {
      name: "All Microsoft 365 Applications Including Access & Excel",
      level: 100,
    },
    {
      name: "Cinema 4D, Octane, VRay",
      level: 70,
    },
    {
      name: "SAP",
      level: 90,
    },
  ],

  learning: [
    {
      name: "Next.js",
      level: 25,
    },
    {
      name: "Type-GraphQL",
      level: 25,
    },
    {
      name: "TypeScript",
      level: 25,
    },
    {
      name: "TypeORM",
      level: 25,
    },
    {
      name: "PostgreSQL",
      level: 25,
    },
    {
      name: "Apollo Client",
      level: 25,
    },
    {
      name: "Jest",
      level: 25,
    },
  ],
};

const bioLinks = [
  "https://ts-2022-jsonresume.netlify.app/",
  "https://github.com/pcdependency?tab=repositories",
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const initialState = {};

links.forEach((l, i) => {
  initialState[i] = null;
});

function App() {
  const { r } = useParams();
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = useState(initialState);

  const handlePopover = (e, i, hover) => {
    setAnchorEl({
      [i]: hover ? e.currentTarget : null,
    });
  };

  function SetPage(type) {
    if (type === "inc" && page < Object.keys(pages).length - 1) {
      setPage(page + 1);
    }
    if (type === "dec" && page > 0) {
      setPage(page - 1);
    }
  }

  return (
    <div className="appContainer">
      <div className="fgElementsLayerContainer">
        <div className="resumeContainer">
          <div className="notePadBar"></div>
          <div className="resumeTitleContainer">
            <p>Tyler {r !== "r" && "Steele"}</p>
            <div className="titleDivider"></div>
          </div>
          <div className="linksContainer">
            {links.map((l, i) => {
              return (
                <a
                  style={
                    r === "r" && l.secure
                      ? {
                          opacity: ".5",
                          cursor: "not-allowed",
                        }
                      : {}
                  }
                  target="_blank"
                  rel="noreferrer"
                  href={r === "r" && l.secure ? "/r" : l.href}
                  key={l.name}
                  className="linkContainer"
                  onMouseEnter={(e) => handlePopover(e, i, true)}
                  onMouseLeave={(e) => handlePopover(e, i, false)}
                >
                  <p>{l.name}</p>
                  {l.img ? (
                    <img src={l.img} alt="" />
                  ) : (
                    <SvgIcon component={l.icon} />
                  )}
                  {!(r === "r" && l.secure) && (
                    <Popover
                      sx={{
                        pointerEvents: "none",
                        "& .MuiPopover-paper": {
                          backgroundColor: "black",
                          color: "white",
                          padding: "1vh !important",
                          maxWidth: "300px",
                        },
                      }}
                      open={Boolean(anchorEl[i])}
                      anchorEl={anchorEl[i]}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={(e) => handlePopover(e, i, false)}
                      disableRestoreFocus
                    >
                      {l.popover}
                    </Popover>
                  )}
                </a>
              );
            })}
          </div>
          <div className="bioContainer">
            <p>
              <b>IT Technician, MERN Full Stack Web developer</b> and Digital
              Artist. <b> Bachelors in IT</b> at Purdue University and am
              interested in employment and career development. Feel free to
              check out my{" "}
              <a href={bioLinks[0]} target="_blank" rel="noreferrer">
                professional
              </a>
              ,{" "}
              <a href={bioLinks[0]} target="_blank" rel="noreferrer">
                education
              </a>{" "}
              and{" "}
              <a href={bioLinks[1]} target="_blank" rel="noreferrer">
                project
              </a>{" "}
              history linked above.
            </p>
          </div>
          <div className="experiencesContainer">
            {experience.map((e) => {
              return (
                <div className="experienceContainer" key={e.title}>
                  <div className="titleContainer">
                    <p>{e.title}</p>
                  </div>
                  <div className="bodyContainer">
                    <p>{e.body}</p>
                  </div>
                  <div className="experienceIconsContainer">
                    {e.icons.map((i, idx) => {
                      return <img src={i} key={idx} alt="" />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="informationContainer">
            <div className="titleContainer">
              <p>information</p>
            </div>
            <div className="bodyContainer">
              {/* I realize this is not "security." */}
              {r !== "r" ? (
                information.map((i) => {
                  return (
                    <div className="infoContainer" key={i.name}>
                      <p>{i.name}:</p>
                      <p>{i.info}</p>
                    </div>
                  );
                })
              ) : (
                <div className="r">
                  <p>Request Private Information</p>
                  <a href="mailto:pc.dependency@gmail.com">
                    pc.dependency@gmail.com
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="skillsSection">
            <div className="topContainer">
              <div className="titleContainer">
                <p>
                  {Object.keys(pages)[page]}
                  <span className="skillPageTxt">
                    {page + 1}/{Object.keys(pages).length}
                  </span>
                </p>
              </div>
              <div className="bodyContainer">
                {pages[Object.keys(pages)[page]].map((s, i, a) => {
                  return (
                    <p key={i} className="listItem">
                      - {s.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="skillsControls">
              <ColorButton
                onClick={() => SetPage("dec")}
                disabled={!(page > 0)}
              >
                Previous
              </ColorButton>
              <ColorButton
                onClick={() => SetPage("inc")}
                disabled={!(page < Object.keys(pages).length - 1)}
              >
                Next
              </ColorButton>
            </div>
          </div>
        </div>
      </div>
      {width > 720 && (
        <div className="bgElementsLayerContainer">
          <div className="phone" />
          <div className="plant" />
        </div>
      )}
    </div>
  );
}

export default App;
