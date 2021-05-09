import sgcpdf from "../pdfs/sgc.pdf";
import thesisSwedish from "../pdfs/thesisSwedish.pdf";
import thesisEnglish from "../pdfs/thesisEnglish.pdf";
import pepperpdf from "../pdfs/pepperreport.pdf";
import soundcanvaspdf from "../pdfs/soundcanvasreport.pdf";
import solematepdf from "../pdfs/SoleMate.pdf";
import syntheseyeserpdf from "../pdfs/syntheseyeserreport.pdf";
import halfwaypdf from "../pdfs/halfway.pdf";

export const projectData = [
    {
    pictureNr: 0,
    title: "SvtUI",
    year: "Master Thesis (iOS-app), 2021",
    info: `As the final part of my masters in Interactive Media Technology at KTH, 
    I am currently writing my master thesis on the topic of programming language assessment and evaluation. 
    In collaboration with the Svt-play mobile team, I have built a new version of Svt-Play with focus on implementing SwiftUI. 
    The code, my experience of implementing it and SwiftUI in general is going to be analysed and summed up in my thesis, 
    focusing mainly on assessing the novel framework. Hopefully the results will also provide Svt with an idea of the scope 
    of implementing SwiftUI in the future. `,
    contributions: [
      `📱 Broadened my knowledge of Swift, SwiftUI and iOS-development`,
      `🤹‍♂️ Learned from and worked together with an agile team at Svt`,
      `🔍 Explored ways of analyzing and assessing programming languages/frameworks`,
    ],
  },
  {
    pictureNr: 1,
    title: "Halfway",
    year: "iOS-app, 2020",
    info: `Halfway is an iOS-app that myself and two classmates built with the purpose of getting hands-on experience within the field of iOS development.
    The app is built using SwiftUI and is extended with MapKit to get all the map functionality needed. 
    Halfway lets users, in a swift (pun intended) and easy manner, calculate the half-way point between themselves and a 
    friend and enables temporary location sharing in secure navigation-sessions. These sessions feature real-time 
    location updates for both parties as well as GPS navigation to a shared half-way point. Hopefully the app will end up on the Appstore in the near future!`,
    contributions: [
      `🎨 Co-designed the app`,
      `📍 Built the map and location functionality`,
      `👨‍🏫 Learned alot about SwiftUI`,
    ],
    externals: [{
      url: halfwaypdf,
      text: "Read report",
    },],
  },
  {
    pictureNr: 2,
    title: "johannesloor.se",
    year: "This website, 2020",
    info: `To showcase my projects and me as a person, I built this website using React and Gatsby. 
    The concept around it, except acting as my portfolio, was to make something that seems ordinary but 
    when you hover and click on things, goofy things happen.`,
    contributions: [
      `⏰ A Johannes-Clock (Do you know my middle name?)`,
      `🎡 Twirling letters that bring chaos`,
      `🤷‍♂️ Indecisive hobbies that rewrite themselves`,
      "👨‍💻 Designed and built the whole thing",
    ],
  },
  {
    pictureNr: 3,
    title: "Osqledaren.se",
    year: "Website, 2019-2020",
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
    pictureNr: 4,
    title: "Östermalms Föreningsråd",
    year: "Website, 2016-2020",
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
    title: "SoleMate",
    vimeoId: "475384468",
    year: "Interactive shoe soles, 2020",
    info: `SoleMate is an explorative design project striving to achieve the ambient feeling of 
    copresence between people without the need of physical presence. 
    Two pairs of shoe soles are equipped with pressure sensors and vibration motors and are connected 
    through the internet, using Arduinos. A step taken with one pair of the soles results in haptic feedback in the other, 
    and vice versa.`,
    contributions: [
      "👨‍💻 Programmed the Arduinos",
      "👠 Co-designed the experience", 
      "🔨 Explored the world of physical interaction design",
    ],
    externals: [{
      url: solematepdf,
      text: "Read report",
    },],
  },
  {
    title: "Sonic Gesture Challenge",
    pictureNr: 5,
    year: "Web-based music app, 2020",
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
    title: "Sound Canvas",
    vimeoId: "458073967",
    year: "Art installation, 2020",
    info: `Sound Canvas is an art installation that knows where on the blank canvas the user is looking. 
    Using this information it plays different sounds, matching various environments, 
    making the user feel as if they are walking within the painting, just by looking around. 
    This was done by mapping sounds to points on a computer screen, using Pure-data, 
    and having the mousecursor be controlled by a Tobii eye-tracker.`,
    contributions: [`💭 Conceptualised the idea`, `👨‍💻 Explored Pure-Data`, `🖼 Designed the sonic layout of the canvas`],
    externals: [
      {
        url: soundcanvaspdf,
        text: "Read report",
      },
    ],
  },
  {
    vimeoId: "458073950",
    title: "Open Riksdag",
    year: "Website, 2020",
    info: `As a project in a course about information visualization, 
    the Open Riksdag website was built to visualize the flow of motions and 
    proposals in the Swedish parliamentary system. 
    A fun project in which I not only learned about visualization techniques 
    but also a fair amount about the Swedish parliamentary system. `,
    contributions: [`💻 Front-end development`, `🌊 Co-designed the visual flow of data`, `📽 Open Riksdag - The movie`],
  },
  {
    vimeoId: "458073896",
    title: "Brushi",
    year: "Kids game, 2019",
    info: `Brushi is an interactive game with the main objective of making it more engaging for children 
    to brush their teeth. The game is controlled by brushing your own teeth and has four levels corresponding 
    to different parts of the mouth. Building the game and the controller from scratch was a really fun design challenge
    that gave a glimts into the everyday struggle most parents face when it's time for bed.`,
    contributions: [`👨‍💻 Built the game using Python`, `📡 Connected the data from the Arduino sensor to the game`, 
    `🕹 Co-designed the controller`],
  },
  {
    pictureNr: 6,
    title: "The natural language of robots",
    year: "Robot research, 2019",
    info: `In this project we explored the perception of robot-to-human communication using Pepper, a humanoid robot.
    Pepper was programmed to react to a story, told by user test participants, with either gestures and sounds or solely with gestures. 
    This was done to see if and how the users perception of the robot changed depending on auditory feedback. `,
    contributions: [`🤖 Helped program Pepper the robot`, `📝 Co-designed user tests`, `👨‍🏫 Lead user testing`],
    externals: [
      {
        url: pepperpdf,
        text: "Read report",
      },
    ],
  },
  {
    vimeoId: "458074093",
    title: "SynthesEyeser",
    year: "Music instrument, 2019",
    info: `While exploring multimodal interactions, the gaze and gesture based instrument SynthesEyeser was built. 
    The instrument uses a Tobii eye-tracker to understand where, on the custom built UI, the player is looking changing the pitch and amount of effect applied to the sound.
    The volume is controlled through gestures infront of a proximity sensor. All of which is controlled via a Bela micro-controller.`,
    contributions: [`👨‍💻 Programmed the Bela to handle the input/output`, `👀 Learned how to use an eye-tracker`, `🙋‍♀️ Designed the user experience`],
    externals: [
      {
        url: syntheseyeserpdf,
        text: "Read report",
      },
    ],
  },
  {
    pictureNr: 7,
    title: "Bass as an indicator of quality",
    year: "Bachelor thesis, 2019",
    info: `As our bachelor thesis, me and Martin Linder Nilsson explored what effect 
    the amount of bass in headphones had on the perception of quality. This was done by fooling users,
    making them believe that they tried different pairs of headphones when infact they used the same pair every time, 
    listening to the same track with various amount of bass. The results point towards participants 
    finding the tracks modified with an increased amount of bass to be of higher quality.`,
    contributions: [`✏️ Co-wrote the thesis`, `🎧 Lead user testing`, `📚 Explored related works`],
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
    pictureNr: 8,
    title: "Challenge Me",
    year: "React Native app, 2019",
    info: `Challenge Me is an app for challenging your skater friends to bust a trick at specific locations. 
    Once you have added a challenge, your friends can find them on the map and take on the challenge. 
    This prototype was built using Reactive Native with the aim to explore mobile development in general 
    and more specifically React Native. Having a few old skaters (Hello, fellow kids) in the development 
    team made the project engaging and helped to really understand the potential user group.`,
    contributions: [`🗺 Built the map interface `, `🎨 Co-designed the entire app`, `🛹 Bragged about my former skating skills`],
  },

  {
    pictureNr: 9,
    title: "Evacuate Me",
    year: "Website, 2019",
    info: `The world has come to an end and you have to move to a new planet, but where should you go? 
    Tatooine? Naboo? Or maybe Endor? Evacuate Me is a website that helps you decide by narrowing down your 
    choices according to your preferred weather, population size, gravity and even time. 
    It is built using Vue and SWAPI (Star Wars API) and will hopefully help you in the search for your new home.`,
    contributions: [`💻 Learned about and used Vue `, "👥 Built the population selector page", `🪐 Connected the Star Wars API`, ],
  },
];
