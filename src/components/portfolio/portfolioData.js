import Image1 from "../../../public/assets/img/portfolio/projector.png";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Prjector Realtime",
    image: Image1,
    tag: ["Audiovisual"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Prjector Realtime",
        client: "Me",
        language: "HTML, CSS, Javascript",
        preview: "projector.gazdev.cloud",
        link: "https://projector.gazdev.cloud/",
      },
    ],
  },
  {
    id: 2,
    type: "OBS",
    image: Image2,
    tag: ["Audiovisual"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "OBS Remote Control",
        client: "Me",
        language: "Svelte, CSS, Javascript",
        preview: "gazdev.cloud/obs-web",
        link: "https://gazdev.cloud/obs-web",
      },
    ],
  }
];

export default PortfolioData;
