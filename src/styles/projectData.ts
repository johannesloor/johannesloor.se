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

export const projectData = [
  {
    image: ipadWebsite,
    title: "johannesloor.se (this very website)",
    year: "2020",
    info: `To showcase my projects and me as a person, I built this website using React and Gatsby. 
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
      a team of eight people in building a completely new website. The new
      website is built using React and Gatsby with a custom cms on Sanity.`,
    contributions: [
      `🗓 Planned and supervised the project`,
      `✂️ Organized brainstorms and team buildings`,
      "👨‍💻 Co-built the website",
    ],
    externals: [{ url: "https://osqledaren.se", text: "Go to website" }],
  },
  {
    image: ofr,
    title: "Östermalms Föreningsråd",
    year: "2016 - Now",
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
    info: `Sound Canvas is an art installation that knows where on the blank canvas the user is looking. 
    Using this information it plays different sounds, matching various environments, 
    making the user feel as if they are walking within the painting, just by looking around. 
    This was done by mapping sounds to points on a computer screen, using Pure-data, 
    and having the mousecursor be controlled by a Tobii eye-tracker.`,
    contributions: [`💭 Conceptualised the idea`, `👨‍💻 Explored Pure-Data`, `🖼 Designed the sonic layout of the canvas`],
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
    info: `As a project in a course about information visualization, 
    the Open Riksdag website was built to visualize the flow of motions and 
    proposals in the Swedish parliamentary system. 
    A fun project in which I not only learned about visualization techniques 
    but also a fair amount about the Swedish parliamentary system. `,
    contributions: [`💻 Front-end development`, `🌊 Co-designed the visual flow of data`, `📽 Open Riksdag - The movie`],
    externals: [
      
      
    ],
  },
  {
    vimeoId: "458073896",
    title: "Brushi",
    year: "2019",
    info: `Brushi is an interactive game with the main objective of making it more engaging for children 
    to brush their teeth. The game is controlled by brushing your own teeth and has four levels corresponding 
    to different parts of the mouth. Building the game and the controller from scratch was a really fun design challenge
    that gave a glimts into the everyday struggle most parents face when it's time for bed.`,
    contributions: [`👨‍💻 Built the game using Python`, `📡 Connected the data from the Arduino sensor to the game`, 
    `🕹 Co-designed the controller`],
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
    info: `In this project we explored the perception of robot-to-human communication using Pepper, a humanoid robot.
    Pepper was programmed to react to a story told by user test participants with either gestures and sounds or solely with gestures. 
    This was done to see if and how the users perception of the robot changed depending on auditory feedback. `,
    contributions: [`🤖 Helped program Pepper the robot`, `📝 Co-designed user tests`, `👨‍🏫 Lead user testing`],
  },
  {
    vimeoId: "458074093",
    title: "SynthesEyeser",
    year: "2019",
    info: `While exploring multimodal interactions, the gaze and gesture based instrument SynthesEyeser was built. 
    The instrumentet uses a Tobii eye-tracker to understand where, on the custom built UI, the player is looking changing the pitch and amount of effect applied to the sound.
    The volume is controlled through gestures infront of a proximity sensor. All of which is controlled via a Bela micro-controller.`,
    contributions: [`👨‍💻 Programmed the Bela to handle the input/output`, `👀 Learned how to use an eye-tracker`, `🙋‍♀️ Designed the user experience`],
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
    info: `As our bachelor thesis, me and Martin Linder Nilsson explored what effect 
    the amount of bass in headphones had on the perception of quality. This was done by fooling users
    that they tried different pairs of headphones when infact they used the same pair every time, 
    whith instead the bass levels of the track played changing. The results point towards participants 
    finding the tracks modified with an increased amount of bass to be of higher quality.`,
    contributions: [`✏️ Co-wrote the thesis`, `👨‍🏫 Lead user testing`, `📚 Explored related works`],
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
