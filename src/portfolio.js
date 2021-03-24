/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Erin Cleaver",
  title: "Hi all, I'm Erin",
  subTitle: emoji(
    "I am studing to be a full stack developer.  Currently working with customers in techinical support for the usda."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ErinCleaver-GRCC",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "ecleaver@live.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",,
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tier 1 Techincical support",
  skills: [
    emoji(
      "⚡ Help customers with thier techinical issues through chat."
    ),
    emoji("⚡ Teach them how to perform tasks within their computer."),
    emoji(
      "⚡ Lastly write up tickets about users issues."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GRCC (Grand Rapids Community College)",
      subHeader: "Associate of Applied Arts & Sciences, Computer programming",
      duration: "September 2017 - current",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Davenport University",
      subHeader: "BBA, Accounting",
      duration: "September 2008 - April 2010",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "GRCC (Grand Rapids Community College)",
      subHeader: "Associates of Business, Accounting",
      duration: "September 2005 - April 2008",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Remedy on Demand", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Activee Directory",
      progressPercentage: "70%"
    },
    {
      Stack: "Office prodcuts",
      progressPercentage: "90%"
    },
    {
      Stack: "SCCM, Software center",
      progressPercentage: "60%"
    }, 
    {
      Stack: "Windows Server",
      progressPercentage: "60%"
    }, 
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "USDA Technical Server Representative (General Clear 3)",
      companylogo: require("./assets/images/PeckhamInc.png"),
      date: "Feb 2015 – Present",
      desc:
        "Working as tier 1 techinical support",
      descBullets: [
        "Answer customers computer questions through chat",
        "Type up tickets quickly",
        "Handle up to 4 customers at once",
        "Customer service skills"
      ]
    },
    {
      role: "Data Entry Assistant",
      company: "Meletrotter",
      companylogo: require("./assets/images/Meletrotter.png"),
      date: "July 2012 – Jan 2015",
      desc:
        "Performed Data entry at Meletrotter for donations"
    },
    {
      role: "Accounting Assistant",
      company: "Habitat of Humanity of Kent County",
      companylogo: require("./assets/images/habitatforhumanityLogo.png"),
      date: "April 2013 – Sep 2013",
      desc:
        "Did basic accounting tasks under the direction from the Sinor Accountant."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ecleaver", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "NA",
  subtitle: "NA",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "NA",
      projectDesc: "NA",
      footerLink: [
        {
          name: "NA",
          url: "NA"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "NA",
      projectDesc: "NA",
      footerLink: [
        {
          name: "NA",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  /*title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true*/
};

// Blogs Section

const blogSection = {
  /*title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true*/
};

// Talks Sections

const talkSection = {
 /* title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true*/
};

// Podcast Section

const podcastSection = {
  /*title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true*/
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Please contact by email",
  //number: "(323) 768 0674",
  email_address: "ecleaver@live.com"
};

// Twitter Section

const twitterDetails = {
  //userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  //display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
