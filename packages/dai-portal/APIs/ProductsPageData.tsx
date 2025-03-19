import { getAnnouncements, getSummary } from "./SummariesAndAnnouncements";

export interface Stand {
    title: string;
    subTitle: string;
    alt?: string;
  }
  
export interface Product {
  id: number;
  name: string;
  summary: any;
  image?: string;
  imageStyle?: { width: string; height: string };
  stands: Stand[];
  featuredVideo: {
    src: string;
    poster: string;
    description: string;
  };
  announcements: any;
  contacts: {
    msg: string;
    buttonLabel: string;
    link: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const getAcronym = (name: string): string => {
  const words = name.split(" ").filter(word => word.length > 0);
  return words.map(word => word[0].toUpperCase()).join("");
};

export const getProductsData = (): Product[] => {
  return [
    {
      id: 1,
      name: "Enhanced Powerline Safety Settings",
      summary: getSummary("EPSS"),
      image: "../EPSS.png",
      imageStyle: { width: "600px", height: "500px" },
      stands: [
        {
          title: "Rebuild the Trust with our Customers",
          subTitle: "True North Strategy",
          alt: "Default EPSS Strategy Image" // Optional alt text; no explicit image URL stored here
        },
        {
          title: "Catastrophic Wildfires Shall Stop",
          subTitle: "Stand",
          alt: "Default EPSS Stand Image"
        }
      ],
      featuredVideo: {
        src: "https://players.brightcove.net/1691765962001/SkPAPXDi_default/index.html?videoId=6301866511001",
        poster: "../prd_main_movie_CustOutageJourney.png",
        description: "PG&E engineers use laboratory to stress test EPSS Technology."
      },
      announcements: getAnnouncements("EPSS"),
      contacts: [
        {
          msg: "Need to request New Product, Enhancement or report Defect? Check out our services.",
          buttonLabel: "Go to Services",
          link: "https://iis10t2prd.cloud.pge.com/MyITServices/"
        },
        {
          msg: "Need general help? Drop us a mail at EPSS_dist_list@pge.com",
          buttonLabel: "Email Us",
          link: "mailto:EPSS_dist_list@pge.com"
        }
      ],
      faqs: [
        { question: "What is EPSS?", answer: "EPSS is a wildfire mitigation program." },
        { question: "How does it work?", answer: "It adjusts grid settings to reduce ignitions." }
      ]
    },
    {
      id: 2,
      name: "Customer Outage Journey",
      summary: getSummary("COJ"),
      image: "../prd_main_customerOutageJourney.png",
      imageStyle: { width: "650px", height: "430px" },
      stands: [
        {
          title: "Rebuild Trust with our Customers",
          subTitle: "True North Strategy",
          alt: "Default COJ Strategy Image"
        },
        {
          title: "It is enjoyable to work with and for PG&E",
          subTitle: "Stand",
          alt: "Default COJ Stand Image"
        }
      ],
      featuredVideo: {
        src: "../2024 Heart of the Customer Award.mp4",
        poster: "../prd_main_movie_CustOutageJourney.png",
        description: "2024 Heart of the Customer Award."
      },
      announcements: getAnnouncements("COJ"),
      contacts: [
        {
          msg: "Need to request New Product, Enhancement or report Defect? Check out our services.",
          buttonLabel: "Go to Services",
          link: "https://iis10t2prd.cloud.pge.com/MyITServices/"
        },
        {
          msg: "Need general help? Drop us a mail at COJ_support@pge.com",
          buttonLabel: "Email Us",
          link: "mailto:COJ_support@pge.com"
        }
      ],
      faqs: [
        { question: "What is COJ?", answer: "COJ is a program to improve customer outage experience." },
        { question: "How do I report an outage?", answer: "Follow the steps on the portal to report an outage." }
      ]
    }
  ];
};

export const getProductByAcronym = (acronym: string): Product | undefined => {
  const products = getProductsData();
  return products.find(product => getAcronym(product.name) === acronym.toUpperCase());
};
