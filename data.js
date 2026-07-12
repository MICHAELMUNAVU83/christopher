/* ============================================================
   Christopher Msando Foundation — site content
   ------------------------------------------------------------
   Single source of truth for the dynamic content (projects &
   stories). Edit here and both index.html and project.html
   update automatically.

   Loaded as a plain <script> (assigned to window.SITE_DATA) so
   it works when opening the files directly in a browser. When
   deployed you can switch to fetch("data.json") if you prefer.
   ============================================================ */
window.SITE_DATA = {
  projects: [
    {
      slug: "ict-training-centre",
      title: "New ICT Training Centre",
      date: "Flagship Project",
      location: "Nairobi, Kenya",
      image: "images/foundation_images/IMG_1705.jpg",
      heroImage: "images/foundation_images/IMG_1705.jpg",
      goal: "$10,000",
      raised: "$12,500",
      excerpt:
        "With your support we will develop an ICT Centre to train youth and children who would otherwise have little access to technology.",
      summary:
        "An ICT Centre that trains youth and children with little access to technology in skills that greatly improve their quality of life.",
      storyHeading: "An ICT Centre for the next change makers",
      body: [
        "With your support, we would love to develop an ICT Centre that trains youth and children who would otherwise have little access to technology in skills that would greatly improve their quality of life.",
        "Through grants and donations we would be able to identify needy beneficiaries and hone their potential to become the next change makers in the country.",
      ],
      highlights: [
        "Hands-on training in computing and digital skills",
        "Identifying and supporting needy beneficiaries",
        "Nurturing talents, passions, character and purpose",
        "Opening access to technology for underserved youth",
      ],
    },
    {
      slug: "youth-mentorship",
      title: "Youth Mentorship Programs",
      date: "Ongoing Program",
      location: "Kenya",
      image: "images/foundation_images/IMG_1767.jpg",
      heroImage: "images/foundation_images/IMG_1767.jpg",
      goal: "$25,000",
      raised: "$32,000",
      excerpt:
        "Nurturing capable young leaders in peace, conflict resolution, music, leadership and personal finance management.",
      summary:
        "Growing skilled professionals and capable young leaders full of character.",
      storyHeading: "Growing capable young leaders",
      body: [
        "We aim to grow not just skilled professionals in the technology sector but also young capable leaders full of character.",
        "We would like to create a community of people who would love to pour into young people and nurture them in peace, conflict resolution, music, leadership and personal finance management.",
      ],
      highlights: [
        "Leadership and character development",
        "Peace and conflict resolution",
        "Music and creative expression",
        "Personal finance management",
      ],
    },
    {
      slug: "volunteers-day",
      title: "Volunteer's Day",
      date: "Community Program",
      location: "Kenya",
      image: "images/foundation_images/IMG_1726.jpg",
      heroImage: "images/foundation_images/IMG_1726.jpg",
      goal: "$12,500",
      raised: "$14,500",
      excerpt:
        "Volunteers share life experiences and skills with young, unequally advantaged children and youth — and grow in the process.",
      summary:
        "An environment where volunteers develop too, from giving to young, unequally advantaged children and youth.",
      storyHeading: "Where volunteers grow too",
      body: [
        "The Foundation plans to create an environment where volunteers develop as well from giving to young, unequally advantaged children and youth.",
        "In doing so, they are able to share life experiences and skills learnt from the work at the Foundation, building a common bonding cause.",
      ],
      highlights: [
        "Sharing life experiences and practical skills",
        "Mentoring unequally advantaged children and youth",
        "Personal growth for every volunteer",
        "Building a common bonding cause",
      ],
    },
    {
      slug: "cultural-exhibitions",
      title: "Cultural Exhibitions",
      date: "Program",
      location: "Kenya",
      image: "images/foundation_images/IMG_1682.jpg",
      heroImage: "images/foundation_images/IMG_1682.jpg",
      goal: "$28,500",
      raised: "$35,500",
      excerpt:
        "Promoting awareness of the legacy of Kenyans like Christopher Msando, and inspiring young people to tell African stories.",
      summary:
        "Spaces where young people tell African stories and review Kenyan history — breeding inspiration and belief in their abilities.",
      storyHeading: "Telling African stories",
      body: [
        "To promote awareness of the legacy of various Kenyans such as Christopher Msando, who have made contributions to the development of the country in various sectors, we would love to organise spaces among the youth.",
        "These are spaces where young people can tell African stories, review Kenyan history and, as a result, breed inspiration and belief in their ability to do great things.",
      ],
      highlights: [
        "Celebrating Kenyan history and heroes",
        "Young people telling African stories",
        "Inspiration through shared heritage",
        "Belief in the ability to do great things",
      ],
    },
    {
      slug: "ict-outreach-nairobi",
      title: "ICT Outreach in Nairobi",
      date: "13th July 2020",
      location: "Nairobi, Kenya",
      image: "images/foundation_images/IMG_1709.jpg",
      heroImage: "images/foundation_images/IMG_1709.jpg",
      goal: "$35,000",
      raised: "$42,000",
      excerpt:
        "Working with children from the North Eastern on ICT, emotional education and other uplifting ventures.",
      summary:
        "The Christopher Msando Foundation with children from the North Eastern — carrying out programs on ICT and emotional education.",
      storyHeading: "On the ground in Nairobi",
      body: [
        "The Christopher Msando Foundation joined children from the North Eastern in Nairobi. We were able to carry out programs on ICT, emotional education and other such uplifting ventures.",
        "Days like these are why we do this work — meeting young people where they are and opening doors to skills, confidence and opportunity.",
      ],
      highlights: [
        "ICT skills sessions for children",
        "Emotional education and wellbeing",
        "Uplifting community ventures",
        "Reaching underserved regions",
      ],
    },
  ],

  stories: [
    {
      slug: "next-generation-ict-leaders",
      title: "Nurturing the Next Generation of ICT Leaders",
      date: "January 7, 2023",
      image: "images/foundation_images/IMG_1825.jpg",
      heroImage: "images/foundation_images/IMG_1825.jpg",
      excerpt:
        "How mentorship grows not just skilled professionals, but capable young leaders full of character.",
      summary:
        "How mentorship grows not just skilled professionals, but capable young leaders full of character.",
      storyHeading: "More than skills — character",
      body: [
        "We aim to grow not just skilled professionals in the technology sector but also young, capable leaders full of character.",
        "By pouring into young people and nurturing them in peace, leadership and personal finance management, we help them become the next change makers in the country.",
      ],
      highlights: [
        "Skilled professionals and capable leaders",
        "Character, peace and leadership",
        "A community that pours into the youth",
      ],
    },
    {
      slug: "sharing-skills-and-stories",
      title: "Volunteer's Day: Sharing Skills and Stories",
      date: "January 7, 2023",
      image: "images/foundation_images/IMG_1660.jpg",
      heroImage: "images/foundation_images/IMG_1660.jpg",
      excerpt:
        "Volunteers give to young, unequally advantaged children — and grow just as much in return.",
      summary:
        "Volunteers give to young, unequally advantaged children — and grow just as much in return.",
      storyHeading: "Giving and growing",
      body: [
        "The Foundation creates an environment where volunteers develop as well from giving to young, unequally advantaged children and youth.",
        "They share life experiences and skills learnt from the work at the Foundation, and leave changed by the experience.",
      ],
      highlights: [
        "Life experiences shared both ways",
        "Skills passed to the next generation",
        "A common bonding cause",
      ],
    },
    {
      slug: "african-stories-through-culture",
      title: "Telling African Stories Through Culture",
      date: "January 7, 2023",
      image: "images/foundation_images/IMG_1657.jpg",
      heroImage: "images/foundation_images/IMG_1657.jpg",
      excerpt:
        "Cultural exhibitions that celebrate Kenyan heroes and inspire belief in the youth.",
      summary:
        "Cultural exhibitions that celebrate Kenyan heroes and inspire belief in the youth.",
      storyHeading: "Heritage as inspiration",
      body: [
        "We organise spaces where young people can tell African stories and review Kenyan history.",
        "By promoting awareness of the legacy of Kenyans like Christopher Msando, we breed inspiration and belief in the youth's ability to do great things.",
      ],
      highlights: [
        "Celebrating Kenyan history and heroes",
        "Young people telling their own stories",
        "Inspiration rooted in heritage",
      ],
    },
  ],
};
