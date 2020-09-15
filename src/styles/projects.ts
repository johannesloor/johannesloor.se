import ol from "../images/Osqledaren.png";
import sgc from "../images/sgc.png";
import ipadWebsite from "../images/myWebsite.png";
import ofr from "../images/ofr.png";
import thesis from "../images/thesis.png";
import pepper from "../images/pepperposter.png";
import challengeMe from "../images/challengeMe.png";
import evacuateMe from "../images/evacuateMe.png";

import sgcpdf from "../pdfs/sgc.pdf";
import thesisSwedish from "../pdfs/thesisSwedish.pdf";
import thesisEnglish from "../pdfs/thesisEnglish.pdf";

export const projects = [
  {
    image: ipadWebsite,
    title: "johannesloor.se (this website)",
    year: "2020",
    info: `To showcase projects and me as a person, I built this website using React and Gatsby. 
    The concept around it, except acting as my portfolio, was to make something that seems ordinary but 
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
        text: "Go to Github page",
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
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
    externals: [{ url: "https://osqledaren.se", text: "Go to website" }],
  },
  {
    image: ofr,
    title: "Östermalms Föreningsråd",
    year: "2020",
    info: `Östermalms Föreningsråd is a conference facility of which I have been the IT- and 
    technical support person at for the last couple of years. My main responsibility has been 
    managing the website, which is Wordpress-driven and serves as place where customers 
    can explore the rooms available before booking.`,
    contributions: [
      `🎨 Updated the webpage design`,
      `🛠 General maintenance`,
      `⛑ Helped colleagues with other technical issues`,
    ],
    externals: [{ url: "http://www.lokomalm.se", text: "Go to website" }],
  },
  {
    title: "Sound Canvas",
    vimeoId: "458073967",
    year: "2020",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
    externals: [
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
        text: "Go to website",
      },
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    vimeoId: "458073950",
    title: "Open Riksdag",
    year: "2020",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
    externals: [
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    vimeoId: "458073896",
    title: "Brushi",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
    externals: [
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    image: pepper,
    title: "The natural language of robots",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
  },
  {
    vimeoId: "458074093",
    title: "SynthesEyeser",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
    externals: [
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    image: thesis,
    title: "Bass as an indicator of quality - Bachelor thesis",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
    externals: [
      {
        url: thesisSwedish,
        text: "Read in Swedish",
      },
      {
        url: thesisEnglish,
        text: "Read in English",
      },
    ],
  },

  {
    image: challengeMe,
    title: "Challenge Me",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
  },
  {
    image: evacuateMe,
    title: "Evacuate Me",
    year: "2019",
    info: `Description Description Description Description Description
      Description Description Description Description Description
      Description Description`,
    contributions: [`⏰ `, `🎡 `, `🤷‍♂️ `, "👨‍💻 "],
  },
];
