import brushi from "../images/Brushi_logo.png";
import sgc from "../images/SGC.png";
import ol from "../images/Osqledaren.png";
import ipadWebsite from "../images/ipadWebsite.png";
import ofr from "../images/ofr.png";

import sgcpdf from "../pdfs/sgc.pdf";

export const projects = [
  {
    image: ipadWebsite,
    title: "johannesloor.se (this website)",
    year: "2020",
    info: `To showcase projects and me as a person, I built this website using React and Gatsby. 
    The concept around it, except being a portfolio, was to make something that seems ordinary but 
    when you hover and click on things, goofy things happen.`,
    contributions: [
      `⏰ A Johannes-Clock (Do you know my middle name?)`,
      `🎡 Twirling letters that bring chaos`,
      `🤷‍♂️ Indecisive hobbies that rewrite themselves`,
      "👨‍💻 Designed and built the whole thing",
    ],
    externals: [
      {
        url: "https://github.com/johannesloor/johannesloor.se",
        text: "Github page",
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
    image: ofr,
    title: "The website of Östermalms Föreningsråd",
    year: "2020",
    info: `Östermalms Föreningsråd is a conference facility of which I have been the IT- and 
    technical support person at for the last couple of years. My main responsibility has been 
    the website, which is Wordpress-driven and serves as place where customers 
    can explore the rooms available before booking.`,
    contributions: [
      `🎨 Updated the webpage design`,
      `🛠 General maintenance`,
      `⛑ Helped colleagues with other technical issues`,
    ],
    externals: [{ url: "http://www.lokomalm.se", text: "Go to website" }],
  },
  {
    image: "",
    title: "Sound Canvas",
    year: "2020",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [``],
    externals: [
      { url: "https://osqledaren.se", text: "Watch video" },
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
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
    image: brushi,
    title: "Brushi",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [``],
    externals: [
      { url: "https://osqledaren.se", text: "Watch video" },
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    image: "",
    title: "SynthesEyeser",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [``],
    externals: [
      { url: "https://osqledaren.se", text: "Watch video" },
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    image: "",
    title: "Evacuate Me",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [``],
    externals: [{ url: "https://osqledaren.se", text: "Watch video" }],
  },
  {
    image: "",
    title: "Challenge Me",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [``],
    externals: [{ url: "https://osqledaren.se", text: "Watch video" }],
  },
];
