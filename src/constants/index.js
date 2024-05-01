import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Rewards",
  "100% Secured",
  "Balance Transfer",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Enhancing User Experience",
    text: "Streamline the account creation process for a smoother onboarding experience and implement more comprehensive profiling questions to better understand user preferences and goals.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Portfolio Expansion",
    text: "Expand investment offerings to include new asset classes or thematic portfolios and allow users to customize their investment strategies based on specific criteria.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Advanced Investment Tools",
    text: "Introduce smart goal-setting features to help users define and track their financial objectives and launch interactive tools and calculators for retirement planning, college savings, and more.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Premium Features and Services",
    text: "Provide advanced analytics and investment insights for Premium plan users and Offer personalized recommendations and support from financial experts for Enterprise plan clients.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText =
  "Keep your eyes on the big picture, your other investments, or basically anything besides the busy work.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description:
      "Our Basic Plan offers essential features to kickstart your investment journey.",
    price: "0",
    features: [
      "Automated portfolio management",
      "Diversified investment portfolios",
      "Goal-based investing tools",
      "Automated Rebalancing",
      "Secure account management",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      " Upgrade to our Premium Plan for enhanced investment capabilities and personalized services.",
    price: "9.99",
    features: [
      "All features of the Basic Plan",
      "Tax-efficient investing strategies",
      "Access to advanced financial planning tools",
      "Priority customer support",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Ideal for sophisticated investors and businesses looking for comprehensive investment solutions.",
    price: null,
    features: [
      "All features of the Premium Plan",
      "Customizable portfolios and investment strategies",
      "Institutional-grade analytics and reporting",
      "Dedicated account manager",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Portfolio Management",
    text: "With Flutter Funds, you gain access to professional portfolio management typically reserved for high-net-worth individuals.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Low Fees and Minimums",
    text: "Flutter Funds charge lower fees compared to traditional financial advisors, making investing accessible to a broader range of investors.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: " Automated Rebalancing",
    text: "Flutter Funds continuously monitor your portfolio and automatically rebalance it as needed to maintain your desired asset allocation.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Financial Planning Tools",
    text: "Enjoy access to comprehensive financial planning tools that help you visualize your financial future.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Tax-Efficient Investing",
    text: "Robo advisors employ tax-loss harvesting techniques to minimize your tax liabilities by strategically selling investments at a loss to offset capital gains.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "User-Friendly Interface",
    text: "Experience investing made easy with intuitive and user-friendly platforms offered by Flutter Funds. ",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
