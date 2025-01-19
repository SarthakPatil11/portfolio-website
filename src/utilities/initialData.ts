// import { iProjectDetails, iTimelineData, iWhatIDoData } from "@/types/types";

// const listWhatIDo: iWhatIDoData[] = [
//   {
//     workTitle: "Full Stack JavaScript",
//     workSubtitle: "I have completed one major project.",
//     workDescription:
//       "I have completed one major project that include MongoDB - ExpressJS - VueJS - NodeJS (MEVN Stack). Please navigate to learn more or click above link.",
//     workType: "Projects",
//     workTopic: "JS",
//   },
//   {
//     workTitle: "C# with DotNET",
//     workSubtitle:
//       "Currently, I am working in this technology and have completed ten challenges as well as one mini-project.",
//     workDescription:
//       "Currently, I am working in this technology and have completed ten challenges as well as one mini-project. Please navigate to learn more or click above link.",
//     workType: "Projects",
//     workTopic: "CSHARP",
//   },
//   {
//     workTitle: "Python with Django",
//     workSubtitle: "I have completed two projects - one major and one minor.",
//     workDescription:
//       "I have completed two projects - one major and one minor. Please navigate to learn more or click above link.",
//     workType: "Projects",
//     workTopic: "PYTHON",
//   },
//   {
//     workTitle: "C & C++",
//     workSubtitle:
//       "Completed Data Structures and Algorithms course, utilized in competitive programming, and completed a hardware project.",
//     workDescription:
//       "Completed Data Structures and Algorithms course, utilized in competitive programming, and completed a hardware project. For more information, please navigate to learn more or click above link.",
//     workType: "Projects",
//     workTopic: "CSHARP",
//   },
//   {
//     workTitle: "Certification Cources",
//     workSubtitle: "I have completed many intresting Certification Courses.",
//     workDescription:
//       "I have completed many cources like UI/UX design, Product management and Product Analyst course. Please navigate to learn more or click above link.",
//     workType: "Projects",
//     workTopic: "CSHARP",
//   },
// ];

// const listProjects: iProjectDetails[] = [
//   {
//     projImgPath: "/images/ProjectSS/js/ForYou.png",
//     projTopic: "JS",
//     projTitle: "ForYOU: Learning Website",
//     projSubtitle: "Major Project | April 2023 - May 2023",
//     projDescription:
//       "In this project, JavaScript’s ExpressJS framework with NodeJS Environment is used as backend technology to handle user requests and to create APIs for frontend. MongoDB is the database to store information. VueJS framework for triggering appropriate pages and queries with HTML, CSS and Bootstrap as frontend technology.",
//     projLinks: [
//       {
//         btnText: "See Github [FE]",
//         btnLink: "https://github.com/SarthakPatil11/for-you-frontend",
//       },
//       {
//         btnText: "See Github [BE]",
//         btnLink: "https://github.com/SarthakPatil11/for-you-backend",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/js/parking-palace-MERN.jpg",
//     projTopic: "JS",
//     projTitle: "Parking Palace: Using MERN",
//     projSubtitle: "Personal Project | Aug 2024 - Now",
//     projDescription:
//       "In this project, JavaScript’s ExpressJS framework with NodeJS Environment is used as backend technology to handle user requests and to create APIs for frontend. MongoDB is the database to store information. ReactJS for triggering appropriate pages and queries with HTML, CSS and Tailwind as frontend technology.",
//     projLinks: [
//       {
//         btnText: "See Github [FE]",
//         btnLink:
//           "https://github.com/SarthakPatil11/Parking-Palace-Frontend-MERN",
//       },
//       {
//         btnText: "See Github [BE]",
//         btnLink:
//           "https://github.com/SarthakPatil11/Parking-Palace-Backend-MERN",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/python/Prakruti.png",
//     projTopic: "PYTHON",
//     projTitle: "Parkruti: Analysis and Prediction Website",
//     projSubtitle: "Major Project | Dec 2022 - May 2023",
//     projDescription:
//       "In this project, Python’s Django framework is used as backend technology to handle user requests and trigger appropriate pages and queries. Also used for Prakruti Prediction and analysis module that are using AI and ML algorithms (Decision Tree and Content-Based Recommendation). PostgreSQL is the database to store information. HTML, CSS and Bootstrap as frontend technology.",
//     projLinks: [
//       {
//         btnText: "See Github",
//         btnLink: "https://github.com/SarthakPatil11/Prakruti",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/python/ParkingPalace.png",
//     projTopic: "PYTHON",
//     projTitle: "Parking Palace",
//     projSubtitle: "Minor Project | May 2022 - Aug 2022",
//     projDescription:
//       "In this project, Python’s Django framework is used as backend technology to handle user requests and trigger appropriate pages and queries. SQL lite is the database to store information. HTML, CSS and Bootstrap as frontend technology.",
//     projLinks: [
//       {
//         btnText: "See Github",
//         btnLink: "https://github.com/SarthakPatil11/Parking-Palace",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/cpp/DSA&CP.png",
//     projTopic: "C&CPP",
//     projTitle: "DSA and competitive programming Challenges",
//     projSubtitle: "",
//     projDescription:
//       "I have successfully completed various programming challenges, including those related to Data Structures, Algorithms, and competitive programming. Additionally, I have created dummies of operating system algorithms.",
//     projLinks: [
//       {
//         btnText: "See Github",
//         btnLink: "https://github.com/SarthakPatil11/DSA-CP",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/js/HardwareProject.png",
//     projTopic: "C&CPP",
//     projTitle: "Arduino-UNO Based car braking system",
//     projSubtitle: "Major Project | Dec 2019 - April 2020",
//     projDescription:
//       "In this project, the Arduino-UNO board is used as the main component. This project is based on auto car breaking mechanism at traffic signal also reduce fuel consumption by turning off engine. For connectivity HC-05 Bluetooth module and To handle the motor L293D motor driver is used and programmed this whole system using C & C++.",
//     projLinks: [
//       {
//         btnText: "See Github",
//         btnLink:
//           "https://drive.google.com/file/d/1GUAhCY2IXx6UgDQXoaAW-ZnOlPK5bWVF/view",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/course/Product_Management.png",
//     projTopic: "COURCES",
//     projTitle: "Become a Product Manager | Learn the Skills & Get the Job",
//     projSubtitle: "Major Project | Dec 2019 - April 2020",
//     projDescription:
//       "Check out my article in that I have briefly explained from this certification course what skills I have learnt.",
//     projLinks: [
//       {
//         btnText: "See Insights",
//         btnLink:
//           "https://medium.com/design-bootcamp/unveiling-the-insights-a-case-study-of-the-product-management-course-c4c7c0609351",
//       },
//       {
//         btnText: "See Certificate",
//         btnLink:
//           "https://www.udemy.com/certificate/UC-0c5f899d-b662-4822-a9f2-b2daccd148b2/",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/course/UIUX_Design.png",
//     projTopic: "COURCES",
//     projTitle: "UX Design Workshop",
//     projSubtitle: "Major Project | Dec 2019 - April 2020",
//     projDescription:
//       "Check out my article in that I have briefly explained from this certification course what skills I have learnt.",
//     projLinks: [
//       {
//         btnText: "See Insights",
//         btnLink:
//           "https://medium.com/@patilsarthak999/unveiling-the-insights-a-case-study-of-the-ux-design-certification-workshop-5a42d7c06d0e",
//       },
//       {
//         btnText: "See Certificate",
//         btnLink:
//           "https://learners.growthschool.io/certificate/c75fee77-dcec-4098-a52b-5d41c15b3db7",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/cSharp/10Chanllenges.png",
//     projTopic: "CSHARP",
//     projTitle: "10 Problems Challenge",
//     projSubtitle: "Challenge | July 2023 - Sept 2023",
//     projDescription:
//       "I have successfully solved 10 problems that will help you become proficient in C# using DotNet. Almost every concept is efficiently used in these problems.",
//     projLinks: [
//       {
//         btnText: "See Github",
//         btnLink: "https://github.com/SarthakPatil11/10-Problems-Challenge",
//       },
//     ],
//   },
//   {
//     projImgPath: "/images/ProjectSS/cSharp/Developer.png",
//     projTopic: "CSHARP",
//     projTitle: "People Organization System",
//     projSubtitle: "Minor Project | Sept 2023 - Oct 2023",
//     projDescription:
//       "In this project, C# with .NET6 is used as backend technology to handle user requests and fetch the data using REST API. SQL server is used to store the information. HTML, CSS and Bootstrap as frontend technology.",
//     projLinks: [
//       {
//         btnText: "See Github",
//         btnLink: "https://github.com/SarthakPatil11/People-Org-System",
//       },
//     ],
//   },
// ];

// const listTimelineData: iTimelineData[] = [
//   {
//     year: "Full Time Job | Jul 2023 - Present",
//     title: "Programmer",
//     company: "Acty Systems",
//     description: [
//       "Developed web applications using C# with front-end technologies (HTML, CSS, JavaScript) and RESTful APIs to manage communication between client and server.",
//       "Built and consumed REST APIs for seamless integration and data exchange across services.",
//       "Developed Windows Services for background tasks, ensuring reliable performance and task automation.",
//       "Worked with SQL Server, Entity Framework, and LINQ for data access, querying, and management.",
//       "Contributed to .NET web solutions, implementing secure authentication and custom business logic.",
//       "Integrated AWS services like SQS, RDS, S3, and IoT Core for cloud-based solutions. Utilized MQTT for efficient messaging in C# applications, enhancing IoT communication.",
//     ],
//     head: true,
//   },
//   {
//     year: "Internship | Oct 2022 - March 2023 | 6 Months",
//     title: "Web Developer",
//     company: "Sparsh Tech",
//     description: [
//       "Worked in a team to develop and support web applications using the MERN stack for both front-end and back-end. Used MERN for effective data management and server-side logic.",
//       "Focused on ReactJS for interactive, responsive user interfaces. Integrated APIs for data fetching and updates within React components.",
//       "Applied ReactJS best practices component-based architecture, state management (Hooks), and performance optimization.",
//     ],
//     isLeft: true,
//   },
//   {
//     year: "Internship | May 2019 - Aug 2019 | 16 weeks",
//     title: "Web Developer",
//     company: "Fox & Cloud Technologies",
//     description: [
//       "Learned Python concepts from basic to intermediate level for web development and applied them to day-to-day tasks.",
//       "Developed expertise in Django framework for full-stack web development and maintained backend for various websites.",
//       "Improved skills in HTML, CSS, JS and learned Bootstrap framework for maintaining the frontend.",
//       "Enhancing communication abilities and improving teamwork.",
//     ],
//     tail: true,
//   },
// ];

// export { listWhatIDo, listProjects, listTimelineData };
