import HustleTo from "../../assets/projects/Hustle-To.png";
import Nomadic from "../../assets/projects/Nomadic.png";
import Tracker from "../../assets/projects/Tracker.png";
import FlyHead from "../../assets/projects/FlyHead.png";
import SneakerVault from "../../assets/projects/Sneaker-Vault.png";
import DallE from "../../assets/projects/DallE.png";

const data = [
  {
    img: HustleTo,
    title: "HustleTo",
    subtitle: "Ecommerce website using Mern-Stack",
    desc: "As a huge sneaker enthusiast, I wanted to create a platform where I could share my passion with others and offer some of my inventory for sale. This website not only showcases my collection, but also provides a seamless shopping experience for customers with features like a shopping cart and payment integration.",
    stack: ["NodeJS", "React", "Stripe API"],
    demo: "https://hustle-to.herokuapp.com/",
    github: "https://github.com/Leo-GeZhao/Hustle-To",
  },
  {
    img: FlyHead,
    title: "FlyHead",
    subtitle: "Travel/Event Planning Website using Mern-Stack",
    desc: "This project is a travel planning platform that simplifies the process of finding the best restaurants, hotels, and tours for your next trip. The platform includes a built-in calendar feature to track events, making it the perfect tool for any avid traveler.",
    stack: ["NodeJS", "React", "GoogleMap API", "FullCalender", "Rapid API"],
    demo: "https://flyhead.herokuapp.com/",
    github: "https://github.com/Leo-GeZhao/Flyhead",
  },
  {
    img: SneakerVault,
    title: "Sneaker-Vault",
    subtitle: "Sneaker Management/Dashboard using Mern-Stack",
    desc: "This project is a sneaker management dashboard that enables me to efficiently manage my entire sneaker inventory. I've integrated an unofficial StockX API to track real-time ask/bid prices and keep a close eye on the market value of each sneaker. Using this dashboard, I can easily monitor my inventory and make informed decisions about which sneakers to sell and when.",
    stack: ["NodeJS", "React", "StockX API"],
    demo: "https://sneaker--vault.herokuapp.com/",
    github: "https://github.com/Leo-GeZhao/SneakerVault",
  },
  {
    img: DallE,
    title: "OpenAI Dall-E 2.0 Clone",
    subtitle: "Creating Art with AI: An OpenAI DALL-E Clone",
    desc: "To create the project, I designed and implemented a React-based front-end interface that allows users to input text and view the corresponding generated images. On the back-end, I integrated the OpenAI API and built a custom server using Node.js and Express.js. This allowed my application to send natural language input to the OpenAI API and receive corresponding images that were rendered in real-time on the front-end.",
    stack: ["NodeJS", "React", "OpenAI API"],
    demo: "https://dall-e-2-clone-0nmw.onrender.com/",
    github: "https://github.com/Leo-GeZhao/Dall-E-Clone",
  },
  {
    img: Tracker,
    title: "Tracker",
    subtitle: "Tracker/Task-management website using Django",
    desc: "This is a task management website, designed to help users effectively manage their to-do lists. With the ability to set progress and mark it as complete or incomplete, this platform provides a seamless and user-friendly experience. Users can create, update, and delete tasks with ease, and set due dates to stay on track.",
    stack: ["Django", "REST Framework", "React"],
    demo: "https://tracker.herokuapp.com/",
    github: "hhttps://github.com/Leo-GeZhao/Tracker",
  },
  {
    img: Nomadic,
    title: "Nomadic",
    subtitle: "Airbnb inspired website using Django",
    desc: "This project was a group project during my coding bootcamp that was inspired by Airbnb. Our website allows renters to list their properties for travelers to book for their next stay.  It was a great opportunity to collaborate with other developers and showcase my ability to create engaging applications.",
    stack: ["Django"],
    demo: "https://nomadic-app.herokuapp.com/",
    github: "https://github.com/Leo-GeZhao/nomadic",
  },
];

export default data;
