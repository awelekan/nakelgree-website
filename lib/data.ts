import {
  Braces,
  BarChart3,
  PenTool,
  ShieldCheck,
  Cloud,
  Kanban,
  Megaphone,
  GraduationCap,
  Building2,
  Lightbulb,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'

export type Vertical = {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export const verticals: Vertical[] = [
  {
    icon: GraduationCap,
    title: 'Tech Academy',
    description:
      'Industry-aligned digital skills training across engineering, data, design, and more — taught by practitioners.',
    href: '/programs',
  },
  {
    icon: Building2,
    title: 'Co-working Space',
    description:
      'A productive, high-speed workspace built for makers, freelancers, and remote teams to do their best work.',
    href: '/innovation',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description:
      'Incubation, mentorship, and hackathons that turn bold ideas into launch-ready products and startups.',
    href: '/innovation',
  },
  {
    icon: Briefcase,
    title: 'Talent Placement',
    description:
      'Career support, internships, and job readiness that connect skilled talent with real opportunities.',
    href: '/talent',
  },
]

export type Program = {
  id: string
  icon: LucideIcon
  title: string
  duration: string
  description: string
  fullDescription: string
  skills: string[]
  format: string[]
  prerequisites?: string[]
  outcomes?: string[]
  schedule?: string
  investmentInfo?: string
}

export const programs: Program[] = [
  {
    id: 'data-analytics',
    icon: BarChart3,
    title: 'Data Analytics',
    duration: '12 weeks',
    description:
      'Turn raw data into insight. Learn to collect, clean, analyze, and visualize data to drive real decisions.',
    fullDescription:
      'Data is everywhere. Our Data Analytics program teaches you to extract, analyze, and communicate insights that drive business decisions. You will work with real datasets, learn statistical thinking, and build dashboards that stakeholders actually use. By the end, you will have a portfolio of projects and the skills to land your first analytics role.',
    skills: ['Excel & SQL', 'Python for Data', 'Power BI / Tableau', 'Statistics', 'Data Visualization', 'A/B Testing'],
    format: ['Hands-on labs', 'Capstone project', 'Mentorship', 'Real-world datasets'],
    prerequisites: ['Basic computer literacy', 'Elementary statistics (optional)'],
    outcomes: ['Build interactive dashboards', 'Write complex SQL queries', 'Communicate insights effectively', 'Land analytics internships or roles'],
    schedule: '3-4 hours per week + 5 hours self-study',
    investmentInfo: 'Flexible payment plans available. Scholarship opportunities for underrepresented groups.',
  },
  {
    id: 'software-engineering',
    icon: Braces,
    title: 'Software Engineering',
    duration: '16 weeks',
    description:
      'Build modern web applications from scratch and learn the engineering practices used by top teams.',
    fullDescription:
      'Our Software Engineering program takes you from hello world to deployment-ready applications. You will learn the full stack: frontend frameworks, backend APIs, databases, and deployment. More importantly, you will learn how professional teams work—code reviews, testing, version control, and collaboration. You will ship real projects and have code to show employers.',
    skills: ['JavaScript & TypeScript', 'React & Next.js', 'APIs & Databases', 'Git & Testing', 'Deployment', 'Agile methodology'],
    format: ['Project-based', 'Code reviews', 'Pair programming', 'Live coding sessions'],
    prerequisites: ['Programming basics or prior experience', 'Commitment to daily practice'],
    outcomes: ['Build and deploy full-stack applications', 'Understand software architecture', 'Write testable code', 'Join engineering teams'],
    schedule: '4-5 hours per week + 8-10 hours project work',
    investmentInfo: 'Income-share agreements available. Career coaching included.',
  },
  {
    id: 'ui-ux-design',
    icon: PenTool,
    title: 'UI/UX Design',
    duration: '10 weeks',
    description:
      'Design intuitive, beautiful digital products with a user-centered process from research to prototype.',
    fullDescription:
      'Design is about solving problems for real people. Our UI/UX program teaches you the complete design process: research, wireframing, prototyping, and testing. You will use industry tools like Figma and learn design thinking. By the end, you will have a portfolio of case studies that demonstrate your ability to go from problem to polished solution.',
    skills: ['User Research', 'Wireframing', 'Figma', 'Design Systems', 'Prototyping', 'Usability Testing'],
    format: ['Design sprints', 'Portfolio reviews', 'Mentorship', 'Guest talks from designers'],
    prerequisites: ['Creative thinking', 'Basic computer skills', 'Portfolio building interest'],
    outcomes: ['Create user research insights', 'Build professional design systems', 'Design and test prototypes', 'Land UX design roles'],
    schedule: '3-4 hours per week + 5-6 hours studio time',
    investmentInfo: 'Tools and software licenses provided. Pro mentorship monthly.',
  },
  {
    id: 'cybersecurity',
    icon: ShieldCheck,
    title: 'Cybersecurity',
    duration: '14 weeks',
    description:
      'Defend systems and data. Master the fundamentals of security, threat detection, and safe practices.',
    fullDescription:
      'In a connected world, security is everyone\'s responsibility. Our Cybersecurity program covers the fundamentals of protecting systems and data. You will learn threat modeling, ethical hacking, network security, and compliance. You will work on real scenarios and get hands-on with industry tools. Graduates are ready for security operations or security engineering roles.',
    skills: ['Network Security', 'Threat Analysis', 'Ethical Hacking', 'Security Tools', 'Compliance', 'Incident Response'],
    format: ['Virtual labs', 'Real scenarios', 'Certification prep', 'Hands-on exercises'],
    prerequisites: ['Basic networking knowledge', 'Attention to detail'],
    outcomes: ['Identify security vulnerabilities', 'Respond to security incidents', 'Understand compliance frameworks', 'Prepare for security certifications'],
    schedule: '4-5 hours per week + lab practice',
    investmentInfo: 'Certification exam fees covered. Security clearance guidance included.',
  },
  {
    id: 'cloud-computing',
    icon: Cloud,
    title: 'Cloud Computing',
    duration: '12 weeks',
    description:
      'Deploy and scale applications in the cloud with hands-on experience across leading platforms.',
    fullDescription:
      'Cloud is the future of infrastructure. Our Cloud Computing program teaches you to architect, deploy, and manage applications on major cloud platforms. You will learn containerization, serverless computing, and infrastructure as code. Hands-on labs with real cloud resources prepare you for roles in cloud engineering and DevOps.',
    skills: ['Cloud Fundamentals', 'Linux & Networking', 'Containers', 'CI/CD', 'Infrastructure as Code', 'Database Management'],
    format: ['Hands-on labs', 'Live deployments', 'Mentorship', 'Cloud platform credits'],
    prerequisites: ['Basic Linux knowledge (taught in program)', 'Familiarity with command line'],
    outcomes: ['Deploy containerized applications', 'Build scalable infrastructure', 'Understand cloud architecture patterns', 'Land cloud engineering roles'],
    schedule: '4-5 hours per week + 6-8 hours labs',
    investmentInfo: 'Free cloud platform credits provided. Hands-on labs included.',
  },
  {
    id: 'product-management',
    icon: Kanban,
    title: 'Product Management',
    duration: '10 weeks',
    description:
      'Lead products from idea to launch. Learn discovery, prioritization, and cross-functional delivery.',
    fullDescription:
      'Product managers are the connective tissue between users, engineering, and business. Our Product Management program teaches you to discover user needs, define strategies, and lead teams to build products people love. You will work on real case studies, learn industry frameworks, and build the soft skills that make great PMs.',
    skills: ['Product Discovery', 'Roadmapping', 'Agile', 'Analytics', 'Stakeholder Management', 'User Research'],
    format: ['Case studies', 'Real projects', 'Mentorship', 'Industry talks'],
    prerequisites: ['Curiosity about user needs', 'Basic business literacy'],
    outcomes: ['Conduct effective user research', 'Build product roadmaps', 'Make data-driven decisions', 'Transition to PM roles'],
    schedule: '3-4 hours per week + project work',
    investmentInfo: 'Networking events included. Guest speakers from top companies.',
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    duration: '8 weeks',
    description:
      'Grow brands online with data-driven strategy across content, social, SEO, and paid channels.',
    fullDescription:
      'Digital marketing is about connecting brands with audiences in authentic, measurable ways. Our program covers the full digital landscape: SEO, social media, content strategy, paid advertising, and analytics. You will run live campaigns, work with real tools, and learn to measure what actually works. Perfect for marketers and entrepreneurs.',
    skills: ['SEO & Content', 'Social Media Strategy', 'Paid Advertising', 'Analytics', 'Email Marketing', 'Conversion Optimization'],
    format: ['Live campaigns', 'Hands-on tools', 'Mentorship', 'Case study analysis'],
    prerequisites: ['Basic internet literacy', 'Interest in digital trends'],
    outcomes: ['Run successful social campaigns', 'Optimize websites for search', 'Manage ad spend effectively', 'Build marketing portfolios'],
    schedule: '3-4 hours per week + campaign management',
    investmentInfo: 'Ad platform credits provided. Live projects with real brands.',
  },
]

export type Event = {
  id: string
  icon: LucideIcon
  title: string
  date: string
  description: string
  fullDescription: string
  format: string[]
  details?: string[]
  benefits?: string[]
  whoShouldAttend?: string
  location?: string
}

export const innovationEvents: Event[] = [
  {
    id: 'startup-accelerator',
    icon: Lightbulb,
    title: 'Startup Accelerator Program',
    date: 'Rolling admissions',
    description: 'Intensive 4-month program for founders to validate ideas, build products, and raise funding.',
    fullDescription:
      'Our Startup Accelerator program is designed for ambitious founders ready to turn ideas into scalable businesses. Over 4 months, you will work closely with experienced mentors, access investor networks, and get structured support through product-market fit. Participants get access to co-working space, technical resources, and a community of founders.',
    format: ['Weekly mentorship', 'Investor introductions', 'Technical support', 'Demo day preparation'],
    benefits: ['Equity-free funding opportunities', 'Investor connections', 'Technical mentorship', 'Community of founders'],
    whoShouldAttend: 'Early-stage founders with product ideas or MVP',
    location: 'NakelGreen Innovation Lab, Lagos',
  },
  {
    id: 'hackathon-events',
    icon: Braces,
    title: 'Tech Hackathons',
    date: 'Monthly',
    description: 'Competitive 48-hour hackathons focused on solving real-world problems with tech.',
    fullDescription:
      'Our monthly hackathons bring together developers, designers, and product thinkers to build solutions to real problems. These events are high-energy, collaborative, and a great way to expand your network, build portfolio projects, and compete for prizes. Beginners and professionals are welcome.',
    format: ['48-hour coding sprints', 'Mentorship available', 'Networking sessions', 'Prize competitions'],
    benefits: ['Build portfolio projects', 'Win prizes', 'Network with peers', 'Learn new skills quickly'],
    whoShouldAttend: 'Developers, designers, product managers, and tech enthusiasts',
    location: 'NakelGreen Co-working Space, Lagos',
  },
  {
    id: 'coworking-space',
    icon: Building2,
    title: 'Co-working Membership',
    date: 'Year-round',
    description: 'High-speed, fully equipped workspace for freelancers, remote teams, and entrepreneurs.',
    fullDescription:
      'Our state-of-the-art co-working space provides the tools and community you need to do your best work. With high-speed internet, comfortable workstations, meeting rooms, and a vibrant community of makers and innovators, you can focus on what matters. Join for flexible daily, monthly, or annual memberships.',
    format: ['Dedicated desks', 'Meeting rooms', 'Networking events', 'Community support'],
    benefits: ['Professional workspace', 'Fast and reliable internet', 'Access to community', 'Meeting room access'],
    whoShouldAttend: 'Freelancers, remote teams, startups, and entrepreneurs',
    location: 'NakelGreen Innovation Hub, Lagos',
  },
]

export const communityEvents: Event[] = [
  {
    id: 'tech-talks',
    icon: Megaphone,
    title: 'Tech Talks & Workshops',
    date: 'Bi-weekly',
    description: 'Free monthly talks from industry leaders on emerging tech trends and best practices.',
    fullDescription:
      'Join our community for insightful talks from tech leaders, entrepreneurs, and innovators. Topics range from AI and cloud computing to product strategy and career development. These sessions are free, open to the public, and a great way to stay updated on industry trends while building your professional network.',
    format: ['Live presentations', 'Q&A sessions', 'Networking after-party', 'Recorded sessions available'],
    benefits: ['Stay updated on trends', 'Learn from experts', 'Network with community', 'Free attendance'],
    whoShouldAttend: 'Tech enthusiasts, professionals, students, and career changers',
    location: 'NakelGreen Community Space, Lagos',
  },
  {
    id: 'women-in-tech',
    icon: GraduationCap,
    title: 'Women in Tech Initiative',
    date: 'Weekly',
    description: 'Mentorship, networking, and career support specifically for women in technology.',
    fullDescription:
      'Our Women in Tech initiative provides mentorship, networking opportunities, and career development support for women entering or advancing in technology fields. Meet successful female leaders, learn from their experiences, and build lasting connections with women who are shaping the tech industry.',
    format: ['Mentorship circles', 'Career workshops', 'Networking events', 'Success story sessions'],
    benefits: ['Female mentorship', 'Career guidance', 'Supportive community', 'Leadership development'],
    whoShouldAttend: 'Women interested in or working in tech fields',
    location: 'NakelGreen Community Space, Lagos',
  },
  {
    id: 'alumni-network',
    icon: Building2,
    title: 'Alumni Network & Events',
    date: 'Monthly',
    description: 'Exclusive networking and career support for NakelGreen alumni and program graduates.',
    fullDescription:
      'Stay connected with your cohort and the broader NakelGreen community through alumni events. Get career support, job opportunities, continued learning, and access to a network of successful professionals who have gone through our programs. Alumni events include job fairs, professional development workshops, and social gatherings.',
    format: ['Networking events', 'Job fairs', 'Professional development', 'Social gatherings'],
    benefits: ['Career opportunities', 'Lifelong network', 'Continued learning', 'Community support'],
    whoShouldAttend: 'NakelGreen program alumni and graduates',
    location: 'Various NakelGreen locations, Lagos',
  },
]

export const talentEvents: Event[] = [
  {
    id: 'internship-program',
    icon: Briefcase,
    title: 'Internship Opportunities',
    date: 'Rolling admissions',
    description: 'Paid internships with top tech companies and startups to build real-world experience.',
    fullDescription:
      'Our internship program connects talented individuals with meaningful opportunities at leading tech companies and innovative startups. Interns gain hands-on experience, mentorship from professionals, and a path to full-time employment. All internships are paid and designed to accelerate your career.',
    format: ['3-6 month placements', 'Professional mentorship', 'Career coaching', 'Job offer opportunities'],
    benefits: ['Paid experience', 'Industry connections', 'Real projects', 'Potential full-time offers'],
    whoShouldAttend: 'Recent graduates and career changers seeking real-world experience',
    location: 'Partner companies across Lagos',
  },
  {
    id: 'job-placement-support',
    icon: BarChart3,
    title: 'Job Placement & Career Coaching',
    date: 'Year-round',
    description: 'Dedicated career coaching and job placement assistance to secure your first tech role.',
    fullDescription:
      'Our career services team provides personalized job placement support and career coaching to help you land your first tech role. From resume preparation to interview coaching to job matching, we work with you every step of the way. We have partnerships with hundreds of tech companies actively hiring.',
    format: ['1-on-1 coaching', 'Resume workshops', 'Interview prep', 'Job matching service'],
    benefits: ['Personalized coaching', 'Resume optimization', 'Interview preparation', 'Job connections'],
    whoShouldAttend: 'Program graduates seeking their first tech role or career transition',
    location: 'NakelGreen Career Services, Lagos',
  },
  {
    id: 'continuing-education',
    icon: GraduationCap,
    title: 'Continuing Education & Upskilling',
    date: 'Flexible',
    description: 'Advanced courses and workshops for working professionals looking to upskill.',
    fullDescription:
      'Stay ahead in your career with our advanced technical and professional development courses. Designed for working professionals, these flexible programs let you learn new skills while maintaining your job. Topics include advanced programming, leadership, and emerging technologies.',
    format: ['Evening/weekend classes', 'Online and in-person', 'Self-paced modules', 'Certification programs'],
    benefits: ['Career advancement', 'Flexible scheduling', 'Industry-recognized certifications', 'Networking opportunities'],
    whoShouldAttend: 'Working professionals seeking career advancement and new skills',
    location: 'NakelGreen Learning Center & Online',
  },
]

type Testimonial = {
  name: string
  role: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Asamu Kudiratullahi',
    role: 'Data Analyst alumnus',
    quote:
      'NakelGreen took me from zero experience to working on real products. The mentorship and community made all the difference in landing my first role.',
    avatar: '/images/avatar-1.png',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Product Manager, alumnus',
    quote:
      'The projects were real and challenging. I built a portfolio I was proud of and had a clear path into the industry by the time I graduated.',
    avatar: '/images/avatar-2.png',
  },
  {
    name: 'Jolade Jumoke',
    role: 'Data Analyst, alumna',
    quote:
      'Beyond the skills, the network I gained here is priceless. The co-working space and events kept me connected long after my cohort ended.',
    avatar: '/images/avatar-3.png',
  },
]

export const stats = [
  { value: '200+', label: 'Learners trained' },
  { value: '4x', label: 'Cohorts every year' },
  { value: '20+', label: 'Industry mentors' },
  { value: '85%', label: 'Placement support rate' },
]
