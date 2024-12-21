import cinephoria from "../assets/cine.png";
import bgx from "../assets/bgmi.png";
import codeshift from "../assets/codeshift.png";
import dataquest from "../assets/dataquest.png";
import agora from "../assets/agora.png";
import quiztacular from "../assets/quizz.png";
import itmanager from "../assets/itm.png";
import weblynx from "../assets/weblynx.png";
import xploit from "../assets/xploit.png";
import hacknbuild from "../assets/hacknbuild.png";
const eventsData = [
  {
    no: "I",
    name: "Hack-N-Build",
    slug: "hacknbuild",
    date: "30th & 31st Jan",
    image: hacknbuild,
    description: "Create practical solutions for real-world problems within a limited timeframe, showcasing your ingenuity.",
    chips: ["Innovation", "Prototyping", "Collaboration"],
    about: "Welcome to Hack-n-Build, where your creativity, coding skills, and business acumen are put to the ultimate test! Start by crafting an innovative solution that addresses a real-world problem, ensuring its both feasible and impactful. Once your idea is locked in, you’ll dive into building the solution that works seamlessly and stands out. Finally, it will be time to pitch your creation, showcasing its market potential, scalability, and business value. Think fast, code smart, and pitch like a pro—Hack-n-Build is your stage to turn ideas into game-changing products!",
    venue: "M1 Lab",
    guidelines : [
      "Team Size: 1 - 4 members.", 
      "Number of Rounds: 3 ",
      "All work must be original and developed during the event.", 
      "Git commits will be checked to ensure originality and progress.", 
      "Use of any pre-built templates or plagiarised work will lead to disqualification.", 
      "Participants need to bring their own laptops and equipments.", 
      "Topics: AI for Human Emotions/Mental Health, Fintech for Tech Nerds/Housemakers, Event Management/Crowd Management, Ease for Tourism, Web for Social and Environmental Well-Being.",
      ],
      team: true,
  },
  {
    no: "II",
    name: "IT Manager",
    slug: "itmanager",
    date: "30th & 31st Jan",
    image: itmanager,
    description: "Step into the shoes of an IT Manager and tackle real-world scenarios with strategy and innovation.",
    chips: ["Leadership", "Team Management", "Decision Making"],
    about: "Step into the world of IT Manager, where quick thinking, sharp decision-making, and leadership under pressure are key! This event will test your ability to solve problems, make tough choices, and defend your strategy—all while staying cool under fire. Whether you're ditching any products, convincing skeptics of an issue in your company, or facing the hot seat, every round will push you to prove you are the kind of leader who thrives in the fast-paced world of IT. Ready to lead, innovate, and rise to the challenge? The spotlight’s on YOU!",
    venue: "M1 Lab, M1 & M2 Auditorium",
    guidelines: [
      "Team Size: Solo participation.", 
      "Number of Rounds: 4 ",
      "The rest of the guidelines are a surprise. Expect the unexpected.",

      ],
      team: false,
  },
  {
    no: "III",
    name: "codeshift",
    slug: "codeshift",
    date: "30th Jan",
    image: codeshift,
    description: "Flex your coding skills to solve algorithmic challenges and eliminate bugs in this high-pressure event.",
    chips: ["Algorithms", "Problem Solving", "Debugging"],
    about: "Welcome to CodeShift, where speed, logic, and problem-solving reign supreme! Test your skills across two high-intensity phases, each demanding precision, quick thinking, and flawless execution. Race through fast-paced quizzes, guess tricky outputs, and dive deep into coding challenges. Whether you're solving or fixing, it’s all about making smart moves and fast decisions. Ready to outcode and outdebug the competition? Your time and wits will decide your fate in Codeshift!",
    venue: "M4 Lab",
    guidelines: [
      "Team Size: 2 members.", 
      "Number of Rounds: 2 ",
      "The first round will evaluate the skills of both team members individually.", 
      "The second round will be conducted on HackerRank.", 
      "All participants are required to have an active HackerRank account.", 
      "Both the rounds will be conducted in C, Java and Python languages.",
      
    ],
    team: true,
  },
  {
    no: "IV",
    name: "weblynx",
    slug: "weblynx",
    date: "31st Jan",
    image: weblynx,
    description: "Collaborate to build visually stunning and user-centric websites, blending creativity with technical expertise.",
    chips: ["Development", "UI/UX", "Design"],
    about: "Welcome to Weblynx, where your skills in design and development will be put to the test! First, you’ll demonstrate your knowledge of web design and development concepts. Next, it's time to craft a visually stunning design that balances creativity and usability, followed by bringing that design to life with pure code—no shortcuts allowed. To top it off, your website will need to be interactive, responsive, and spot-on with the design. It’s a perfect blend of creativity and technical precision. Ready to prove your web development chops in Weblynx? Let’s build something amazing!",
    venue: "M5 Lab",
    guidelines: [
      "Team Size: 2 members",
      "Number of Rounds: 2",
      "Participants must bring their own systems with the necessary software installed. For designing - Figma and developing - HTML, CSS, Javascript. No frameworks allowed.",
      "Teams must complete all assigned tasks within the stipulated time, including surprise tasks to earn brownie points.",
      "Plagiarism is strictly prohibited and will result in immediate disqualification."
    ],
    team: true,
  },
  {
    no: "V",
    name: "xploit",
    slug: "xploit",
    date: "30th Jan",
    image: xploit,
    description: "Secure digital systems and demonstrate your team’s ability to identify vulnerabilities.",
    chips: ["Ethical Hacking", "CTF", "Strategy"],
    about: "We are pleased to announce the upcoming Xploit event, an engaging Capture-The-Flag (CTF) competition designed for budding hackers to showcase their skills. This event aims to simulate realistic cybersecurity scenarios, providing participants with an opportunity to showcase their hacking skills and techniques. Dare to Defy the Digital Darkness? Capture the Flag, Fortify Your Digital Fortress!",
    venue: "M5 Lab",
    guidelines: [
      "Team Size: 2 members.",
      "Number of Rounds: 1 ",
      "Participants are allowed to use search engines while the challenge is going on. Participants are not allowed to use any kind of LLM chatbots or AI models. ", 
      "Participants are encouraged to bring their own laptops. ", 
      "Participants are allowed to use any OS(Operating system) of their choice. ", 
      "No external tools such as USB’s, Rubber ducky’s etc., will be allowed. If any participant wants to use such a device(such as a USB), permission should be sought from any of the event coordinators. ", 
      "Failure to abide by any of the mentioned rules will lead to severe consequences and disqualification from the event.",

    ],
    team: true,
  },
  {
    no: "VI",
    name: "DataQuest",
    slug: "dataquest",
    date: "31st Jan",
    image: dataquest,
    description: "Transform raw data into meaningful insights with impactful visualizations and analytical precision.",
    chips: ["Data Analytics", "Visualization Tools", "Statistical Modeling"],
    about: "Welcome to DataQuest – where data meets insight and storytelling! In this event, you will dive into complex datasets, transforming them through cleaning, analysis, and visualization to uncover meaningful insights and share compelling narratives. From addressing data quality challenges to creating visually striking, user-friendly dashboards, every step will test your analytical and presentation skills. Do you have what it takes to turn raw data into actionable insights? Show us your expertise at DataQuest!",
    venue: "M4 Lab & M3 Auditorium",
    guidelines: [
      "Team Size: 2 members.", 
      "Number of rounds: 2 ", 
      "Proficiency in Python is required for data wrangling tasks.", 
      "Dashboards must be developed using Power BI.", 
      "The use of AI tools is strictly prohibited.", 
      "Participants may bring their own laptops or use systems provided by the organizers.", 
      "Any violation of the guidelines set by the event heads will lead to immediate disqualification.",
    ],
    team: true,
  },
  {
    no: "VII",
    name: "agora",
    slug: "agora",
    date: "30th Jan",
    image: agora,
    description: "Articulate your ideas on tech topics with clarity and confidence, engaging the audience and judges alike.",
    chips: ["Communication", "Critical Thinking", "Public Speaking"],
    about: "Welcome to Agora, where your wit, knowledge, and creativity collide! This event will have you on your toes as you listen closely, break down tech jargon for any audience, and debate like a prime time news reporter. From untangling complex ideas to defending your points with sharp precision (and a touch of sass), Agora is the ultimate test of how well you can explain, simplify, and argue in the world of IT. Ready to outsmart your opponents, impress with your clarity, and add a dash of snark? The stage is set—let the challenge begin!",
    venue: "M5 Lab & M3 Auditorium",
    guidelines: [
      "Team Size: 3 members.", 
      "Number of Rounds: 3 ", 
      "Balance strategy with creativity to outmaneuver your opponents ", 
      "Confidence and clarity will amplify your impact. ", 
      "Participants must adhere to the code of conduct throughout the competition.",

      ],
      team: true,
  },
  {
    no: "VIII",
    name: "quiztacular",
    slug: "quiztacular",
    date: "30th Jan",
    image: quiztacular,
    description: "Compete in a thrilling quiz on topics like AI, cybersecurity, programming, and emerging trends.",
    chips: ["Trivia", "Quick Thinking", "Knowledge"],
    about: "Step into the ultimate IT quiz where knowledge meets strategy. Your mission: Crack the Code and demonstrate your expertise in the ever-evolving world of technology. Test your intellect, outsmart the competition, and prove you have what it takes to be crowned the quiz champion. The stage is set—are you ready to lead the way?",
    venue: "M4 Lab & M1 Auditorium",
    guidelines: [
      "Team Size: 2 members.",  
      "Number of Rounds: 3 ", 
      "No External Help: No phones or outside resources allowed. ", 
      "Time Limits: Adhere to time limits for each round.",
      "Participants must adhere to the code of conduct throughout the competition.",
    ],
    team: true,
  },
  {
    no: "IX",
    name: "cinephoria",
    slug: "cinephoria",
    date: "30th Jan",
    image: cinephoria,
    description: "Showcase your storytelling through visually stunning edits that captivate the audience.",
    chips: ["Creativity", "Storytelling", "Visual Communication"],
    about: "Lights, camera, action! Get ready to unleash your creativity with Cinephoria, an extraordinary event crafted for aspiring photographers, filmmakers, and editors. Step into a realm where every shot tells a story, and every edit adds a touch of magic. Whether it is capturing the perfect moment or transforming visuals through stunning edits, this event will challenge your imagination and push your artistic boundaries.",
    venue: "M2 Lab",
    guidelines: [
      "Team Size: Solo participation.", 
      "Number of Rounds: 2 ", 
      "All participants must bring their own laptops, cameras, smartphones, and any necessary accessories like chargers and adapters. ", 
      "Each participant is expected to complete both rounds on their own without external assistance. ", 
      "Participants must seek permission before filming or photographing anyone on campus. ", 
      "The decisions made by the judges are final. No appeals or requests for re-evaluation will be entertained.",

    ],
    team: false,
  },
  {
    no: "X",
    name: "BGX",
    slug: "bgx",
    date: "30th & 31st Jan",
    image: bgx,
    description: "Compete in an adrenaline-packed gaming experience where coordination and quick thinking decide the victor.",
    chips: ["Teamwork", "Strategy", "Reflexes"],
    about: "BattleGrounds Xtreme (BGX) will be an exciting e-sports event of Xactitude, bringing together the best players and squads for an adrenaline-fueled BGMI tournament. This event will be a true test of strategy, teamwork, and skill as participants battle it out on BGMI’s iconic maps such as Erangel, Miramar, Sanhok, and Arena Maps, offering a dynamic blend of long-range warfare and close-quarter combat.",
    venue: "AL 1&2 Lab, M2 Auditorium",
    guidelines: [
      "Team Size: 5 members.", 
      "Number of Rounds: 2 ", 
      "Players must use their own mobile devices for gameplay. ", 
      "All players are responsible for ensuring stable internet connections during matches. ", 
      "No rematches will be provided for connectivity issues. ", 
      "External devices such as controllers, triggers, or emulators are strictly prohibited. ", 
      "Each player must compete using their own registered BGMI account. ", 
      "Players must ensure their accounts are in good standing (no bans or violations). ", 
      "Accounts under any restrictions by the game will result in disqualification. ", 
      "Use of any cheats, hacks, unauthorized mods, or exploits (such as glitching into inaccessible areas) will result in immediate disqualification of the player and/or team.",

    ],
    team: true,
  },
];

export default eventsData;
