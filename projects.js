/* =====================================================================
   PROJECT CONTENT — edit this one file and both pages update.

   Fields (anything left out is simply skipped on the project page):
     cover      "spruce/img1.png"   cover for the grid and project page (path from the site root)
     coverPos   "left center"       which part to keep when the cover is cropped
     coverFit   "contain"           show a logo whole on coverBg instead of cropping it
     gallery    [{ src: "img/anemoia/1.jpg", caption: "Early blockout" }, ...]
     video      YouTube or Vimeo EMBED link, e.g. "https://www.youtube.com/embed/VIDEO_ID"
     cats       drive the filter chips on the home page
     tags       shown on cards and the project page (keep to two)
   Text in [brackets] is a placeholder for you to replace.
   ===================================================================== */
const PROJECTS = [
  { id: "anemoia", title: "Anemoia", year: "2026", kind: "Team project, 3 people", context: "DNID English Capstone",
    page: "anemoia-design/index.html",   // Anemoia has its own long-form page instead of project.html
    cover: "anemoia-design/images/coverImage.png", coverPos: "left center",
    roleShort: "Project manager, narrative designer, lead artist", duration: "Spring 2026",
    tags: ["VR", "Narrative design"], cats: ["VR", "Narrative", "Games"], lobes: 9,
    summary: "A VR narrative for Meta Quest 2 about a queer student coming home from college and stepping into the objects of a childhood they never felt present in.",
    tools: ["Unity", "C#", "Meta Quest 2", "SideQuest"],
    links: [
      { href: "https://sidequestvr.com/app/55470", label: "Play on SideQuest" },
      { href: "https://github.com/CaleMoore28/TheHeart", label: "GitHub repo" }
    ] },

  { id: "genesis", title: "MACHINA : GENESIS", year: "Ongoing", kind: "Personal project", context: "Solo development",
    roleShort: "Solo developer", duration: "[Start date] to present",
    tags: ["Immersive sim", "Unity"], cats: ["Games", "Narrative"], lobes: 12,
    summary: "A 3D immersive sim inspired by the original Deus Ex, set in a Fallout-style wasteland.",
    overview: "A 3D immersive simulation game heavily inspired by the original Deus Ex, with a wasteland world inspired by Fallout. Its themes are self-discovery, finding your place in the world, the ethics of artificial intelligence, the social problems of the digital age, recovery, and making peace with the past.",
    challenge: "[What makes an immersive sim work for you, and what you want GENESIS to do differently.]",
    role: "Solo developer, covering design, programming, and systems.",
    highlights: ["First- and third-person camera switching", "Third-person camera collision handling", "Grid-based inventory system"],
    process: "[What you're building now, what's next, and a design question you're working through.]",
    gallery: [],
    video: "",
    outcome: "[Current state of the build and what's coming next.]",
    reflection: "[What building this solo has taught you.]",
    team: [["Eli Newsham", "Design, programming, systems"]],
    tools: ["Unity", "C#", "Git"], links: [] },

  { id: "strongtogether3d", title: "StrongTogether3D", year: "2026", kind: "Team project", context: "SCI Capstone",
    roleShort: "Environment and interaction design", duration: "[e.g. 2 semesters]",
    tags: ["Environment design", "Unity"], cats: ["Games", "Environments"], lobes: 6,
    summary: "An interactive 3D hospital environment built in Unity with a capstone team.",
    overview: "StrongTogether3D is a Unity hospital environment developed as a team capstone. [Add the project's goal and who it's for.]",
    challenge: "[What the hospital environment needed to do for its users.]",
    role: "Environment and interaction design. I built the pharmacy room in ProBuilder and integrated the phone system UI into the scene.",
    highlights: ["Modeled and dressed the pharmacy room in ProBuilder", "Integrated an interactive phone system UI", "Collaborated through a shared Git LFS repository and upstream branches"],
    process: "[Blockout to final: how the pharmacy room came together, and how the team coordinated work in one Unity project.]",
    gallery: [],
    video: "",
    outcome: "[How the capstone was presented and received.]",
    reflection: "[What working on a large shared Unity project taught you.]",
    team: [["[Teammate]", "[Role]"], ["[Teammate]", "[Role]"]],
    tools: ["Unity", "Git", "GitHub"], links: [] },

  { id: "spruce", title: "Spruce", year: "2026", kind: "Team project", context: "Pitt Design Jam",
    cover: "spruce/img1.png", coverFit: "contain", coverBg: "#F0FBF5",
    roleShort: "Concept Designer", duration: "1 week",
    tags: ["Physical design", "UX"], cats: ["Physical", "UX"], lobes: 5,
    summary: "Winner for Best All Around Project at the Pitt Spring 2026 Design Jam. Connectable playground modules that add park amenities, plus an app that helps local families meet.",
    overview: "For the Design Jam's theme of playgrounds, my team proposed a series of playground modules that connect to provide park amenities. A companion mobile app lets families meet people in their community and see information about nearby playgrounds.",
    challenge: "[How your team interpreted the playgrounds theme.]",
    role: "[Your role on the team.]",
    highlights: ["[A key design decision]", "[How the modules connect]"],
    process: "[From the theme reveal to the final presentation.]",
    gallery: [],
    video: "",
    outcome: "[How the presentation went.]",
    reflection: "[What designing under a time limit taught you.]",
    team: [["[Teammate]", "[Role]"]],
    tools: ["Figma", "3D Modeling", "3D Printing"],
    links: [{ href: "https://sonicdrives.itch.io/Spruce/", label: "View on itch.io" }] },

  { id: "paperworkx", title: "Paperworkx", year: "2025", kind: "Team project", context: "[Course or event]",
    cover: "paperworkx/paperworkxCover.png",
    roleShort: "[Your role]", duration: "[Length]",
    tags: ["2D", "Unity"], cats: ["Games"], lobes: 4,
    summary: "Winner for Best Narrative Design at the Pitt Fall 2025 Game Jam. Play as a robot on a post-apocalyptic Earth who fills out paperwork in order to immigrate to Mars.",
    overview: "[What the game is and what the player does.]",
    challenge: "[The design goal.]",
    role: "[What you did on the team.]",
    highlights: ["[Highlight]", "[Highlight]"],
    process: "[How the game came together.]",
    gallery: [],
    video: "",
    outcome: "[Where it ended up.]",
    reflection: "[What you learned.]",
    team: [["[Teammate]", "[Role]"]],
    tools: ["Unity"],
    links: [{ href: "https://sonicdrives.itch.io/paperworks", label: "Play on itch.io" }] },

  { id: "ninetofive", title: "Nine to Five", year: "2026", kind: "Team project", context: "Pitt Fall 2026 Game Jam (Games 4 Social Impact)",
    cover: "nine-to-five/nineToFiveTitle.png", coverFit: "contain", coverBg: "#47704C",
    roleShort: "Concept designer, level designer", duration: "48 Hours",
    tags: ["Level design"], cats: ["Games"], lobes: 7,
    summary: "Made for the Pitt Games 4 Social Impact Game Jam. As a new Jamazon employee, pack customer orders, load them onto a dolly, and get them to the truck before you miss your daily quota.",
    overview: "You're a newly hired Jamazon employee working nine to five. Your job is to package items into boxes for customers, stack them on a dolly, and bring them out to the delivery truck, all while keeping up with your daily quota.",
    challenge: "The jam's theme was \"dolly.\" We built the game's core loop around one: pack the order, load the dolly, and make the delivery.",
    role: "Concept design and level design.",
    gallery: [],
    video: "",
    team: [["Myself", "Level design"], ["Anish", "Programming"], ["Shannon ", "Programming, art, 3D Modeling"]],
    tools: ["Unity", "Blender", "Visual Studio Code"],
    links: [
      { href: "https://sonicdrives.itch.io/nine-to-five", label: "Play on itch.io" },
      { href: "https://github.com/Anish-Satish/Amazon-Simulator", label: "GitHub repo" }
    ] },

  { id: "anomaly", title: "Arduino Anomaly Detector", year: "2025", kind: "Team project", context: "DNID final project",
    cover: "arduino-anomaly-device/20251122_160230.jpg",
    roleShort: "Concept design, storyboarding", duration: "5 Months",
    tags: ["ARG", "Arduino"], cats: ["Physical", "Narrative"], lobes: 8,
    summary: "A handheld Arduino device with a GPS module that drives a physically interactive ARG.",
    overview: "Using an Arduino controller, we assembled a device with a GPS module to build a physically interactive alternate reality game. It was programmed in the Arduino IDE.",
    challenge: "Create a narrative of some sort using an Arduino device.",
    role: "Concept design, storyboarding",
    highlights: ["Designing the storyboard for the anomoly face graphics displayed on the LED screen", "Designing and mapping out the inital concept designs with group"],
    process: "[Prototyping the hardware and testing the ARG with players.]",
    gallery: [],
    video: "",
    outcome: "[How players reacted.]",
    reflection: "[What working with hardware taught you.]",
    team: [["Myself", "Concept design, storyboarding"], ["Chris", "Programming, hardware assembly"]],
    tools: ["Arduino", "Arduino IDE", "GPS module"], links: [] }
];

const FILTERS = ["All", "Games", "VR", "Narrative", "Physical", "UX"];
