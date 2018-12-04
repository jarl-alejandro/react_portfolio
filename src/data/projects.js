import map from '../images/map.png';
import reads from '../images/myReads.svg'
import restaurant from '../images/restaurant.png';
import arcade from '../images/arcade.png';
import memory from '../images/memory.png';
import portfolio from '../images/Portfolio.png';
import clock from '../images/clock.svg';
import calculator from '../images/calc.svg';
import todo from '../images/todo2.svg';
import pixel from '../images/pixel.svg';
import twitch from '../images/twitch.svg';
import wiki from '../images/wiki.svg';
import resume from '../images/eResume.png';
import senior from '../images/RARA_UML.png';
import tribute from '../images/Tribute_Page.png';

const projects = [
  {
      featured: true,
      date: "2018-10-01",
      name: "Location Guide",
      image: map,
      for: "Udacity's Front-End Nanodegree",
      description: "React based location finder web app created for Udacity's Front End Developer Nanodegree.",
      repo: "https://github.com/bloom305/FEND-Neighborhood_Map_App-/",
      link: "https://bloom305.github.io/FEND-Neighborhood_Map_App-/",
      languages: [
          "React",
          "MaterialUI",
          "Mapbox"
      ],
      frameworks: [
          "API",
          "Axios",
          "FourSquare"
      ],
      utilities: [
      ]
  },
  {
      featured: true,
      date: "2018-07-13",
      name: "Book Tracker",
      image: reads,
      for: "Udacity's Front-End Nanodegree",
      description: "React based book tracking web app created for Udacity's Front End Developer Nanodegree.",
      repo: "https://github.com/bloom305/FEND-MyRead",
      link: "https://bloom305.github.io/FEND-MyRead/#/",
      languages: [
          "React",
          "UIKit"
      ],
      frameworks: [
          
      ],
      utilities: [
      ]
  },
  {
      featured: false,
      date: "2018-06-22",
      name: "Restaurant Reviews",
      image: restaurant,
      for: "Udacity's Front-End Nanodegree",
      description: "A responsive, accessible, and offline first restaurant review webpage created for Udacity's Front End Developer Nanodegree.",
      repo: "https://github.com/bloom305/FEND-RestaurantReview",
      link: "https://bloom305.github.io/FEND-RestaurantReview/index.html",
      languages: [
          "HTML",
          "CSS",
          "JavaScript",
      ],
      frameworks: [
          "AngularJS",
          "API",
          "ServiceWorker"
      ],
      utilities: [
          "A11y",
          "ESLint",
          "HTMLHint",
          "CSSLint"
      ]
  },
  {
      featured: false,
      date: "2018-05-23",
      name: "Arcade Game Clone",
      image: arcade,
      for: "Udacity's Front-End Nanodegree",
      description: "Frogger clone created for Udacity's Front End Developer Nano-degree.",
      repo: "https://github.com/bloom305/FEND-ArcadeGame",
      link: "https://bloom305.github.io/FEND-ArcadeGame/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "Canvas",
          "ESLint",
          "HTMLHint"
      ],
      utilities: [
          "CSSLint",
      ]
  },
  {
      featured: false,
      date: "2018-05-14",
      name: "Memory Game",
      image: memory,
      for: "Udacity's Front-End Nanodegree",
      description: "Memory game application created for Udacity Front End Developer Nanodegree.",
      repo: "https://github.com/bloom305/FEND-MemoryGame",
      link: "https://bloom305.github.io/FEND-MemoryGame/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "Bootstrap",
          "ESLint",
          "HTMLHint"
      ],
      utilities: [
          "CSSLint",
      ]
  }, 
  {
      featured: false,
      date: "2018-05-07",
      name: "Portfolio",
      image: portfolio,
      for: "Udacity's Front-End Nanodegree",
      description: "Single page portfolio created for Udacity Front End Developer Nano-degree.",
      repo: "https://github.com/bloom305/FEND-Portfolio",
      link: "https://bloom305.github.io/FEND-Portfolio/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [

      ],
      utilities: [
          "ESLint",
          "HTMLHint",
          "CSSLint"
      ]
  }, 
  {
      featured: true,
      date: "2018-04-17",
      name: "Pomodoro Clock",
      image: clock,
      for: "Free Code Camp",
      description: "A javascript based clock for tracking work and break durations. Developed for freecodecamp.com advanced front end development project.",
      repo: "https://github.com/bloom305/FreeCodeCamp",
      link : "https://bloom305.github.io/FreeCodeCamp/Pomodoro_Clock/",
      languages: [
          "Pug",
          "Sass",
          "JavaScript"
      ],
      frameworks: [
          
      ],
      utilities: [
      ]
  },
  {
      featured: true,
      date: "2018-04-10",
      name: "Calculator",
      image: calculator,
      for: "Free Code Camp",
      description: "A javascript based usable calculator. Developed for freecodecamp.com advanced front end development project.",
      repo: "https://github.com/bloom305/FreeCodeCamp",
      link: "https://bloom305.github.io/FreeCodeCamp/Calculator/",
      languages: [
          "HTML",
          "Sass",
          "JavaScript"
      ],
      frameworks: [
          
      ],
      utilities: [
          
      ]
  },
  {
      featured: false,
      date: "2018-04-06",
      name: "Todo List",
      image: todo,
      for: "Learning/Training AngularJS",
      description: "Todo list created for a CodeBuddies training session on AngularJS.",
      repo: "https://github.com/bloom305/Todo_List",
      link: "https://bloom305.github.io/Todo_List/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "Bootstrap",
          "AngularJS"
      ],
      utilities: [
      ]
  },
  {
      featured: false,
      date: "2018-03-15",
      name: "Pixel Art",
      image: pixel,
      for: "Udacity Grow With Google Schlorship Challenge",
      description: "Pixel art drawer project created for Grow with Google Scholarship Challenge.",
      repo: "https://github.com/bloom305/pixeProject_GWG",
      link: "https://bloom305.github.io/pixeProject_GWG/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "JQuery"
      ],
      utilities: [

      ]
  },
  {
      featured: false,
      date: "2018-02-22",
      name: "Twitch Viewer",
      image: twitch,
      for: "Free Code Camp",
      description: "A page to display Twitch.tv channel information using Twitch API. Developed for freecodecamp.com intermediate front end development project.",
      repo: "https://github.com/bloom305/FreeCodeCamp",
      link: "https://bloom305.github.io/FreeCodeCamp/Twitch_Viewer/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "JQuery",
          "API"
      ],
      utilities: [
          
      ]
  },
  {
      featured: false,
      date: "2018-02-14",
      name: "Wiki Viewer",
      image: wiki,
      for: "Free Code Camp",
      description: "A page that gathered information via Wikipedia API. Developed for freecodecamp.com intermediate front end development project.",
      repo: "https://github.com/bloom305/FreeCodeCamp",
      link: "https://bloom305.github.io/FreeCodeCamp/Wikipedia_Viewer/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "Bootstrap",
          "JQuery",
          "AJAX"
      ],
      utilities: [
          "API"
      ]
  },
  {
      featured: false,
      date: "2018-02-07",
      name: "E-Resume",
      image: resume,
      for: "Learning AngularJS",
      description: "An editable resume using AngularJS and styled with W3CSS.",
      repo: "https://github.com/bloom305/E-Resume_template",
      link: "https://bloom305.github.io/E-Resume_template/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "W3CSS",
          "AngularJS"
      ],
      utilities: [

      ]
  },
  {
      featured: false,
      date: "2017-10-22",
      name: "RARA Asset Manager",
      image: senior,
      for: "Senior Project",
      description: "Asset management device developed for B.S. in Electronic Engineering Technology senior project at DeVry University.",
      repo: "https://github.com/bloom305/Senior_Project",
      link: "",
      languages: [
          "C/Cpp",
          "Assembly"
      ],
      frameworks: [
          "Arduino",
          "Electronics",
          "Sensors"
      ],
      utilities: [
          "Touchscreen",
          "RFID"
      ]
  },
  {
      featured: false,
      date: "2017-08-26",
      name: "Tribute Page",
      image: tribute,
      for: "Free Code Camp",
      description: "A tribute page dedicated to Anthony Bourdain, created for freecodecamp.com basic front end development project.",
      repo: "https://github.com/bloom305/FreeCodeCamp",
      link: "https://bloom305.github.io/FreeCodeCamp/Tribute_Page/",
      languages: [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      frameworks: [
          "Bootstrap"
      ],
      utilities: [
          
      ]
  }
]

export default projects;