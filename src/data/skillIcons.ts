import type { IconType } from "react-icons";
import { DiAws } from "react-icons/di";
import { FaChartBar, FaMicrosoft } from "react-icons/fa";
import {
  SiApachehadoop,
  SiApachespark,
  SiCplusplus,
  SiDatabricks,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGooglecloud,
  SiJupyter,
  SiMysql,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiR,
  SiScala,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si";

export type SkillIconEntry = {
  name: string;
  Icon: IconType;
  accent?: string;
};

export type SkillIconSlide = {
  label: string;
  icons: SkillIconEntry[];
};

/** ~8 icons per slide — carousel like the reference */
export const skillIconSlides: SkillIconSlide[] = [
  {
    label: "Languages & ML",
    icons: [
      { name: "Python", Icon: SiPython, accent: "#3776AB" },
      { name: "R", Icon: SiR, accent: "#276DC3" },
      { name: "SQL", Icon: SiPostgresql, accent: "#4169E1" },
      { name: "Java", Icon: SiOpenjdk, accent: "#437291" },
      { name: "TensorFlow", Icon: SiTensorflow, accent: "#FF6F00" },
      { name: "PyTorch", Icon: SiPytorch, accent: "#EE4C2C" },
      { name: "scikit-learn", Icon: SiScikitlearn, accent: "#F7931E" },
      { name: "pandas", Icon: SiPandas, accent: "#150458" },
    ],
  },
  {
    label: "Stack & engineering",
    icons: [
      { name: "NumPy", Icon: SiNumpy, accent: "#013243" },
      { name: "Jupyter", Icon: SiJupyter, accent: "#F37626" },
      { name: "Git", Icon: SiGit, accent: "#F05032" },
      { name: "GitHub", Icon: SiGithub, accent: "#24292F" },
      { name: "Bash", Icon: SiGnubash, accent: "#4EAA25" },
      { name: "C++", Icon: SiCplusplus, accent: "#00599C" },
      { name: "Scala", Icon: SiScala, accent: "#DC322F" },
      { name: "Flask", Icon: SiFlask, accent: "#000000" },
    ],
  },
  {
    label: "Cloud, data & MLOps",
    icons: [
      { name: "FastAPI", Icon: SiFastapi, accent: "#009688" },
      { name: "MySQL", Icon: SiMysql, accent: "#4479A1" },
      { name: "AWS", Icon: DiAws, accent: "#FF9900" },
      { name: "GCP", Icon: SiGooglecloud, accent: "#4285F4" },
      { name: "Databricks", Icon: SiDatabricks, accent: "#FF3621" },
      { name: "Docker", Icon: SiDocker, accent: "#2496ED" },
      { name: "Hadoop", Icon: SiApachehadoop, accent: "#66CCFF" },
      { name: "Spark", Icon: SiApachespark, accent: "#E25A1C" },
    ],
  },
  {
    label: "Analytics & BI",
    icons: [
      { name: "Tableau", Icon: FaChartBar, accent: "#E97627" },
      { name: "Power BI", Icon: FaMicrosoft, accent: "#F2C811" },
      { name: "Streamlit", Icon: SiStreamlit, accent: "#FF4B4B" },
      { name: "Plotly", Icon: SiPlotly, accent: "#239120" },
    ],
  },
];
