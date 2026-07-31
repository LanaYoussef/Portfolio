export const profile = {
  name: 'Lana Youssef',
  firstName: 'Lana',
  title: 'Computer Science graduate',
  tagline:
    'I build web and mobile apps — from a peer-to-peer trading platform to studio booking and desktop tools.',
  email: 'lanayusf12@gmail.com',
  phone: '78867414',
  location: 'Beirut, Lebanon',
  github: 'https://github.com/LanaYoussef',
  linkedin: 'https://linkedin.com/in/lana-youssef/',
  cv: '/cv.html',
  education: {
    degree: "Bachelor's in Computer Science",
    note: 'French-educated · Graduating July 2026',
  },
  languages: ['Arabic', 'French', 'English'],
}

export const experience = [
  {
    org: 'Decode Labs',
    role: 'Mentor-Guided Virtual Internship',
    detail:
      'Project-based remote internship with weekly milestones, mentor feedback, and portfolio-ready deliverables.',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C#', 'C++', 'JavaScript', 'PHP'],
  },
  {
    label: 'Web & mobile',
    items: ['React', 'Node.js', 'ASP.NET', 'React Native', 'Flutter', 'HTML/CSS'],
  },
  {
    label: 'Data & tools',
    items: ['MySQL', 'SQL Server', 'GitHub', 'Linux', 'Android Studio'],
  },
]

export const organizations = [
  {
    name: 'DOT Lebanon',
    detail: 'AI For Social Impact — UNICEF GIL programme at Lebanese University Hadath.',
  },
  {
    name: 'GDSC',
    detail: 'Google Developer Student Club — peer learning around Google technologies.',
  },
  {
    name: 'Adyan Foundation',
    detail: 'Volunteer for diversity, cultural competency, and community support.',
  },
]

export const projects = [
  {
    id: 'tradematch',
    name: 'TradeMatch',
    badge: 'Graduation · Full-stack',
    summary:
      'Full-stack peer marketplace: list items, swipe to trade, match on mutual interest, then chat. Mobile app, Express API, and React admin for moderation.',
    stack: 'React Native · Expo · Node.js · Express · SQL Server · JWT · Vite React',
    highlights: [
      'JWT auth with bcrypt, email OTP, rate limiting, and role-separated admin access',
      'Double opt-in swipe matching that auto-opens encrypted chat (AES-256-GCM)',
      'REST APIs plus Expo mobile and Vite admin for users, listings, and reports',
    ],
  },
  {
    id: 'pilates',
    name: 'Pilates Studio',
    badge: 'Full-stack web',
    summary:
      'Studio booking platform with member enrollment and admin CRUD — React SPA on an ASP.NET Core API with SQL Server.',
    stack: 'React · Vite · ASP.NET Core 9 · EF Core · SQL Server · JWT · Swagger',
    highlights: [
      'JWT + BCrypt with Admin/User RBAC on protected API routes',
      'Enrollment rules with capacity checks and duplicate prevention',
      'Role-split React UX: schedule booking for members, dashboard CRUD for admins',
    ],
  },
  {
    id: 'bookhive',
    name: 'BookHive',
    badge: 'Team · Desktop',
    summary:
      'Java Swing library system on SQL Server — members borrow or buy from a cart; staff manage inventory and see live sales analytics.',
    stack: 'Java · Swing · SQL Server · JDBC',
    highlights: [
      'Dual-role login routing members and staff to different UIs',
      'Cart checkout with inventory updates and transactional user deletes',
      'Staff sales dashboard with time-window reporting and late-fee logic',
    ],
  },
  {
    id: 'clinic',
    name: 'Clinic Desk',
    badge: '.NET desktop',
    summary:
      'Windows Forms clinic desk on SQL Server: staff login, doctor CRUD, patient intake, appointment slots, and filtered reports.',
    stack: 'C# · .NET 8 · WinForms · SQL Server · ADO.NET',
    highlights: [
      'Multi-form CRUD wired to a real relational clinic schema',
      'Appointment booking with generated 10-minute time slots',
      'JOIN-based reports filtered by date and doctor',
    ],
  },
  {
    id: 'luxe',
    name: 'LUXE',
    badge: 'Frontend',
    summary:
      'Vanilla JS fashion storefront with filters, search, product modal, localStorage cart, and a multi-step checkout UI.',
    stack: 'HTML · CSS · JavaScript',
    highlights: [
      'Client-side cart with size/qty line items and persistent localStorage',
      'DOM filter/search pipeline with no framework',
      'Tokenized CSS, responsive layout, and modular JS modules',
    ],
  },
]
