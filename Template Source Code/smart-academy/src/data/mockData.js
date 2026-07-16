// Kids School Education Platform Mock Data for Smart Academy Kids School

export const coursesData = [
  {
    id: "prog-101",
    title: "Preschool Playgroup",
    category: "Preschool",
    rating: 4.9,
    reviewsCount: 124,
    duration: "Full Year",
    level: "Ages 2-3",
    price: 350,
    instructor: "Miss Emily Watson",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    description: "A fun-filled introduction to learning! Toddlers explore socialization, simple communication, and motor skills through sensory play and games.",
    syllabus: [
      "Sensory play exploration & shape recognition",
      "Basic speech sounds & vocabulary building",
      "Sharing, emotional regulation & group play",
      "Creative painting, modeling clay & safety exercises",
      "Singing nursery rhymes & simple coordination games",
      "Structured outdoor play & morning circle routines"
    ]
  },
  {
    id: "prog-202",
    title: "Kindergarten Adventure",
    category: "Kindergarten",
    rating: 4.8,
    reviewsCount: 142,
    duration: "Full Year",
    level: "Ages 4-5",
    price: 390,
    instructor: "Mr. David Miller",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
    description: "Preparing curious minds for primary school. Focuses on early phonics, counting numbers, science discoveries, and emotional growth.",
    syllabus: [
      "Phonics: alphabet sounds & reading simple words",
      "Basic mathematics: addition & subtraction concepts",
      "Nature study: plants, insects, and solar systems",
      "Social-emotional: empathy, patience, and friendship",
      "Interactive drawing, cutting, and origami labs",
      "Gross motor: dancing, running, and physical agility"
    ]
  },
  {
    id: "prog-303",
    title: "Creative Arts & Crafts",
    category: "Creative Arts",
    rating: 4.9,
    reviewsCount: 96,
    duration: "12 Weeks",
    level: "Ages 3-8",
    price: 180,
    instructor: "Mrs. Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    description: "Unleash your child's inner Picasso! Kids experiment with finger painting, collage designing, paper sculpting, and recycling craft projects.",
    syllabus: [
      "Finger painting & basic color mixing formulas",
      "Paper folding (Origami) & safe child-scissor controls",
      "Designing puppets, mask crafts & theatrical play",
      "Clay sculpting, modeling dough and patterns",
      "Recycled card creations & environmental crafts",
      "Creating mini classroom art galleries for parents"
    ]
  },
  {
    id: "prog-404",
    title: "Little Scientists STEM",
    category: "STEM Activities",
    rating: 4.8,
    reviewsCount: 112,
    duration: "16 Weeks",
    level: "Ages 5-10",
    price: 240,
    instructor: "Mr. James Patel",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=600&q=80",
    description: "Fostering critical logic! Children perform safe chemistry experiments, understand gravity, build blocks, and program basic toy robots.",
    syllabus: [
      "Volcano eruptions: mixing safe household liquids",
      "Building bridges: architectural blocks and load checks",
      "Exploring physics: magnets, weights, and slides",
      "Green thumbs: planting seeds and monitoring growth",
      "Fun programming: directing color-coded toy bug robots",
      "Group puzzle projects & logical deductive riddles"
    ]
  },
  {
    id: "prog-505",
    title: "Reading & Phonics Club",
    category: "Reading Programs",
    rating: 4.7,
    reviewsCount: 88,
    duration: "8 Weeks",
    level: "Ages 4-8",
    price: 150,
    instructor: "Miss Lily Chang",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    description: "Igniting a lifetime love of books. Features interactive storytelling, phonics sound mapping, group reading logs, and vocabulary quizzes.",
    syllabus: [
      "Vowel & consonant blends mapping exercises",
      "Reading sight words with pictorial association cards",
      "Interactive storybook theater and charades",
      "Learning rhyming pairs, word families, and poetry",
      "Drafting short sentences and personal letters",
      "Weekly reading challenges and group story logs"
    ]
  },
  {
    id: "prog-606",
    title: "Music, Dance & Rhythm",
    category: "Music & Dance",
    rating: 4.9,
    reviewsCount: 130,
    duration: "10 Weeks",
    level: "Ages 3-9",
    price: 160,
    instructor: "Miss Chloe Carter",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    description: "Expressing energy! Children learn rhythm beats, playing simple instruments (tambourines, bells), and basic theatrical choreography.",
    syllabus: [
      "Understanding tempo: slow beats, fast drum rolls",
      "Playing hand tambourines, bells, and xylophones",
      "Learning coordinates: jumps, spins, and basic postures",
      "Group choral singing: voice control & fun dynamics",
      "Creating customized mini music bands in class",
      "Performing dance choreographies on recital day"
    ]
  }
];

export const facultyData = [
  {
    id: 1,
    name: "Miss Emily Watson",
    role: "Preschool Director",
    coursesTaught: "Preschool Playgroup",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Certified Early Childhood Educator with 10+ years directing kindergarten cohorts. Specializes in child sensory development."
  },
  {
    id: 2,
    name: "Mr. David Miller",
    role: "Kindergarten Lead Coordinator",
    coursesTaught: "Kindergarten Adventure",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Ex-primary school teacher with 8 years designing early literacy and math programs. Specializes in fun games coaching."
  },
  {
    id: 3,
    name: "Mrs. Sarah Jenkins",
    role: "Creative Arts Specialist",
    coursesTaught: "Creative Arts & Crafts",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Art academy graduate passionate about finger painting, mask making, and inspiring young kids' imaginations."
  },
  {
    id: 4,
    name: "Miss Lily Chang",
    role: "Reading & Phonics Coach",
    coursesTaught: "Reading & Phonics Club",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Masters in Education specializing in early speech therapy and reading comprehension for young learners."
  },
  {
    id: 5,
    name: "Mr. James Patel",
    role: "Little Scientists STEM Lead",
    coursesTaught: "Little Scientists STEM",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Passionate educator coaching lego structures, robot bug coordinates, and fun kitchen chemistry experiments."
  },
  {
    id: 6,
    name: "Miss Chloe Carter",
    role: "Music & Dance Choreographer",
    coursesTaught: "Music, Dance & Rhythm",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=350&q=80",
    bio: "Professional dancer and music tutor dedicated to helping kids coordinate rhythmic jumps, tambourines, and vocals."
  }
];

export const eventsData = [
  {
    id: "event-1",
    title: "Annual Kids Art Exhibition",
    date: "2026-07-20",
    time: "10:00 - 13:00",
    speaker: "Mrs. Sarah Jenkins",
    venue: "School Art Courtyard",
    description: "Explore finger-paint creations, paper-mache puppets, and clay models made by our creative preschool and kindergarten classes.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "event-2",
    title: "Science & Lego Robotics Fair",
    date: "2026-08-10",
    time: "11:00 - 14:00",
    speaker: "Mr. James Patel",
    venue: "Main Indoor Playroom",
    description: "Watch our Little Scientists run bug robots through maze paths, build block bridges, and trigger bubble-volcano chemistry labs.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "event-3",
    title: "Preschool Rhythm Concert",
    date: "2026-08-25",
    time: "16:00 - 17:30",
    speaker: "Miss Chloe Carter",
    venue: "Outdoor Main Stage",
    description: "A delightful afternoon of tambourine bands, choral singing, and physical coordinates performed live by our student classes.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Mother of Toby (Age 4)",
    company: "Preschool Parent",
    text: "Toby's speech has improved immensely since joining Emily Watson's playgroup. He looks forward to sensory play and singing circles every morning!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Arthur Vance",
    role: "Father of Lily (Age 5)",
    company: "Kindergarten Parent",
    text: "The STEM lego robotics experiments are outstanding. Lily is always showing us how her magnets attract items at home. We highly recommend this academy.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Mother of Nikita (Age 7)",
    company: "Creative Arts Parent",
    text: "Sarah Jenkins makes arts and crafts extremely welcoming. Nikita has designed puppets and mask creations that are proudly taped to our refrigerator.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

// Student Portal Specific Data
export const studentDashboardData = {
  profile: {
    name: "Franklin Pierce",
    email: "parent@smartacademy.com",
    studentId: "SA-KIDS-9831",
    enrolledDate: "January 12, 2026",
    cgpa: "A",
    major: "Kindergarten Program",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  enrolledCourses: [
    {
      id: "prog-202",
      title: "Kindergarten Adventure",
      progress: 75,
      grade: "A",
      nextClass: "Wednesday, 10:00 AM (Auditorium)",
      assignmentsPending: 1
    },
    {
      id: "prog-404",
      title: "Little Scientists STEM",
      progress: 40,
      grade: "A-",
      nextClass: "Thursday, 01:00 PM (Lego Lab)",
      assignmentsPending: 1
    }
  ],
  assignments: [
    {
      id: "assign-1",
      courseName: "Kindergarten Adventure",
      title: "Alphabet sight-words card project check",
      dueDate: "2026-06-15",
      status: "Pending",
      maxGrade: "Excellent"
    },
    {
      id: "assign-2",
      courseName: "Kindergarten Adventure",
      title: "Finger paint primary colors blending card",
      dueDate: "2026-06-02",
      status: "Submitted & Graded",
      grade: "Excellent"
    },
    {
      id: "assign-3",
      courseName: "Little Scientists STEM",
      title: "Construct double-arch lego blocks bridge",
      dueDate: "2026-06-20",
      status: "Pending",
      maxGrade: "Excellent"
    }
  ],
  attendance: [
    { month: "January", percent: "98%" },
    { month: "February", percent: "95%" },
    { month: "March", percent: "96%" },
    { month: "April", percent: "92%" },
    { month: "May", percent: "97%" }
  ],
  certificates: [
    {
      id: "cert-9031",
      courseName: "Creative Arts & Crafts",
      issueDate: "2026-04-18",
      instructor: "Mrs. Sarah Jenkins",
      grade: "Outstanding"
    }
  ]
};

// Admin Dashboard Mock Stats
export const adminDashboardStats = {
  overview: [
    { label: "Active Enrolled Kids", value: "1,200+", change: "+15% vs last term" },
    { label: "Staff Teachers", value: "80+", change: "+5 new educators" },
    { label: "Play Programs", value: "12", change: "2 pending audits" },
    { label: "Success Rate", value: "99%", change: "+1% target met" }
  ],
  admissionsRequests: [
    { id: "adm-101", studentName: "Toby Miller", email: "toby.mom@company.com", selectedCourse: "Kindergarten Adventure", date: "2026-06-08", status: "Pending Evaluation" },
    { id: "adm-102", studentName: "Nikita Rostova", email: "nikita.r@gmail.com", selectedCourse: "Creative Arts & Crafts", date: "2026-06-09", status: "Pending Evaluation" },
    { id: "adm-103", studentName: "Lily Vance", email: "lily.v@yahoo.com", selectedCourse: "Little Scientists STEM", date: "2026-06-10", status: "Reviewed & Approved" }
  ],
  academicReport: [
    { courseTitle: "Kindergarten Adventure", passingRate: "99%", avgGrade: "Excellent", complaints: "0" },
    { courseTitle: "Little Scientists STEM", passingRate: "98%", avgGrade: "Excellent", complaints: "0" },
    { courseTitle: "Creative Arts & Crafts", passingRate: "99%", avgGrade: "Outstanding", complaints: "0" },
    { courseTitle: "Reading & Phonics Club", passingRate: "97%", avgGrade: "Excellent", complaints: "0" }
  ]
};
