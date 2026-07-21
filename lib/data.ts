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
  icon: LucideIcon
  title: string
  duration: string
  description: string
  skills: string[]
  format: string[]
}

export const programs: Program[] = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    duration: '12 weeks',
    description:
      'Turn raw data into insight. Learn to collect, clean, analyze, and visualize data to drive real decisions.',
    skills: ['Excel & SQL', 'Python for Data', 'Power BI / Tableau', 'Statistics'],
    format: ['Hands-on labs', 'Capstone project', 'Mentorship'],
  },
  {
    icon: Braces,
    title: 'Software Engineering',
    duration: '16 weeks',
    description:
      'Build modern web applications from scratch and learn the engineering practices used by top teams.',
    skills: ['JavaScript & TypeScript', 'React & Next.js', 'APIs & Databases', 'Git & Testing'],
    format: ['Project-based', 'Code reviews', 'Pair programming'],
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    duration: '10 weeks',
    description:
      'Design intuitive, beautiful digital products with a user-centered process from research to prototype.',
    skills: ['User Research', 'Wireframing', 'Figma', 'Design Systems'],
    format: ['Design sprints', 'Portfolio reviews', 'Mentorship'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    duration: '14 weeks',
    description:
      'Defend systems and data. Master the fundamentals of security, threat detection, and safe practices.',
    skills: ['Network Security', 'Threat Analysis', 'Ethical Hacking', 'Security Tools'],
    format: ['Virtual labs', 'Real scenarios', 'Certification prep'],
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    duration: '12 weeks',
    description:
      'Deploy and scale applications in the cloud with hands-on experience across leading platforms.',
    skills: ['Cloud Fundamentals', 'Linux & Networking', 'Containers', 'CI/CD'],
    format: ['Hands-on labs', 'Live deployments', 'Mentorship'],
  },
  {
    icon: Kanban,
    title: 'Product Management',
    duration: '10 weeks',
    description:
      'Lead products from idea to launch. Learn discovery, prioritization, and cross-functional delivery.',
    skills: ['Product Discovery', 'Roadmapping', 'Agile', 'Analytics'],
    format: ['Case studies', 'Real projects', 'Mentorship'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    duration: '8 weeks',
    description:
      'Grow brands online with data-driven strategy across content, social, SEO, and paid channels.',
    skills: ['SEO & Content', 'Social Media', 'Paid Ads', 'Analytics'],
    format: ['Live campaigns', 'Hands-on tools', 'Mentorship'],
  },
]

export type Testimonial = {
  name: string
  role: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Amara Okafor',
    role: 'Frontend Engineer, alumna',
    quote:
      'NakelGreen took me from zero coding experience to shipping real products. The mentorship and community made all the difference in landing my first role.',
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
    name: 'Ngozi Balogun',
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
