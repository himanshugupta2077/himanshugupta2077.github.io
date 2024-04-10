import icon from "../src/assets/icon1.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Himanshu Gupta",
    job: "security consultant",
    started: "2022-01-01",
    stack: "SecurityBoat",
    hobby: "read books",
    projectLink: "https://github.com/himanshugupta2077?tab=repositories",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/himanshugupta2077/",
    github: "https://github.com/himanshugupta2077",
    twitter: "https://twitter.com/himanshug2077",
  },
  projects: {
    "SafePass": {
      url: "https://github.com/himanshugupta2077/Password_manager",
      tags: ["password manager", "offline", "python", "tkinter", "SHA-256", "mongodb", "linux"],
    },
    "Bug Bounty Automation": {
      url: "https://github.com/himanshugupta2077/bug_bounty_automation",
      tags: ["bug bounty", "automation", "recon", "database"],
    },
  },
  og: {
    image: icon.src,
  },
};
