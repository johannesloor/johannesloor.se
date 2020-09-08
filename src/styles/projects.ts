import brushi from "../images/Brushi_logo.png";
import sgc from "../images/SGC.png";
import ol from "../images/Osqledaren.png";
import sgcpdf from "../pdfs/sgc.pdf";

export const projects = [
  {
    title: "Sonic Gesture Challenge",
    image: sgc,
    year: "2020",
    info: `Sonic Gesture Challenge is a sound and gesture mapping game
      where the goal is to repeat a gesture after only hearing the
      sound it produces. This was a really fun project focusing on how to make sound
      designs for the web, using WebAudioXML by Hans Lindetorp, and
      exploring if it is feasible to use this framework for these
      kinds of ear-training apps.`,
    contributions: [
      "🎨 Designed and built the interface",
      "👨‍💻 Co-built the comparing algorythm",
      "🎵 Designed one of the seven sounds",
    ],
    externals: [
      {
        url: "https://johannesloor.github.io/Sonic-Gesture-Challenge/",
        text: "Check out project",
      },
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    image: ol,
    title: "Osqledaren.se",
    year: "2019/2020",
    info: `Osqledaren is the student union newspaper at KTH. For the
      semester of 2019/2020 I was responsible for the website and lead
      a team of eight, building a completely new website. The new
      website is built using React and Gatsby with a custom cms on Sanity.`,
    contributions: [``],
    externals: [{ url: "https://osqledaren.se", text: "Go to Osqledaren" }],
  },
  {
    image: brushi,
    title: "Brushi",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [``],
    externals: [{ url: "https://osqledaren.se", text: "Watch video" }],
  },
];
