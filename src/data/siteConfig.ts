import heroCharacter from '../assets/hero-character.webp'
import transparentLogo from '../assets/logo.webp'
import ashtonPortrait from '../assets/team-ashton.webp'
import carterPortrait from '../assets/team-carter.webp'
import everlyPortrait from '../assets/team-everly.webp'
import finleyPortrait from '../assets/team-finley.webp'
import lashayPortrait from '../assets/team-lashay.webp'
import savannahPortrait from '../assets/team-savannah.webp'
import analyticsArm from '../../assets/animation/generated/analytics-arm.png'
import robotBody from '../../assets/animation/generated/body.png'
import calendarArm from '../../assets/animation/generated/calendar-arm.png'
import crmArm from '../../assets/animation/generated/crm-arm.png'
import emailArm from '../../assets/animation/generated/email-arm.png'
import receptionistArm from '../../assets/animation/generated/receptionist-arm.png'
import workflowArm from '../../assets/animation/generated/workflow-arm.png'

export const siteConfig = {
  company: 'AI Banana',
  tagline: 'We Build Your AI Workforce™',
  supportingStatement: 'AI Automation That Works',
  description:
    'Custom AI Employees that answer calls, follow up with leads, schedule appointments, automate repetitive tasks, and help your business grow—24 hours a day.',
  assets: {
    logo: transparentLogo,
    heroCharacter,
    masterRenderSource: 'assets/characters/Master Character Render v1.png',
    robotBody,
  },
  links: {
    wixBooking: '',
    aiReceptionistBooking: '',
    demoPhone: '',
    email: 'mailto:connect@get-aibanana.com',
    facebook: 'https://www.facebook.com/profile.php?id=61588448423750',
    instagram: 'https://www.instagram.com/get_aibanana/',
    tiktok: 'https://www.tiktok.com/@aibananabiz',
    privacy: '',
    terms: '',
  },
  contact: {
    phone: '855-970-NANA',
    phoneHref: 'tel:+18559706262',
    email: 'connect@get-aibanana.com',
    location: 'Based in Charlotte, NC — serving businesses nationwide.',
    demoPhone: '[Demo phone number]',
  },
  booking: {
    primaryLabel: 'Book a Strategy Call',
    secondaryLabel: 'Book Through Our AI Receptionist',
  },
  robotArmAnimation: {
    debug: false,
    cycleDuration: 17500,
    finalAt: 13250,
    resetAt: 16000,
    tasks: [
      { id: 'receptionist', title: 'Incoming Phone Call', incoming: 'Waiting', action: 'Connecting call', result: 'Answered', asset: receptionistArm, start: 900, duration: 2200, rig: { anchorX: 43, anchorY: 27, width: 76, rotationRetracted: 13, rotationDeployed: -5, translateX: 7, translateY: 5, transformOriginX: 92, transformOriginY: 22, zIndex: 3, flipX: true } },
      { id: 'email', title: 'New Email', incoming: 'Waiting', action: 'Preparing reply', result: 'Sent', asset: emailArm, start: 3600, duration: 2200, rig: { anchorX: 57, anchorY: 27, width: 76, rotationRetracted: -13, rotationDeployed: 5, translateX: -7, translateY: 5, transformOriginX: 10, transformOriginY: 18, zIndex: 3, flipX: true } },
      { id: 'calendar', title: 'Meeting Request', incoming: 'Waiting', action: 'Checking calendar', result: 'Scheduled', asset: calendarArm, start: 6200, duration: 1800, rig: { anchorX: 42, anchorY: 32, width: 72, rotationRetracted: 9, rotationDeployed: -10, translateX: 8, translateY: 2, transformOriginX: 94, transformOriginY: 25, zIndex: 2, flipX: true } },
      { id: 'crm', title: 'CRM Update', incoming: 'Waiting', action: 'Updating customer', result: 'Saved', asset: crmArm, start: 8300, duration: 1500, rig: { anchorX: 58, anchorY: 32, width: 72, rotationRetracted: -9, rotationDeployed: 10, translateX: -8, translateY: 2, transformOriginX: 7, transformOriginY: 26, zIndex: 2, flipX: true } },
      { id: 'workflow', title: 'Workflow Automation', incoming: 'Waiting', action: 'Running automation', result: 'Completed', asset: workflowArm, start: 10000, duration: 1350, rig: { anchorX: 43, anchorY: 37, width: 68, rotationRetracted: 8, rotationDeployed: -14, translateX: 7, translateY: -2, transformOriginX: 95, transformOriginY: 36, zIndex: 1, flipX: true } },
      { id: 'analytics', title: 'Analytics', incoming: 'Waiting', action: 'Building report', result: 'Report Ready', asset: analyticsArm, start: 11500, duration: 1350, rig: { anchorX: 57, anchorY: 37, width: 68, rotationRetracted: -8, rotationDeployed: 14, translateX: -7, translateY: -2, transformOriginX: 8, transformOriginY: 25, zIndex: 1, flipX: true } },
    ],
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'AI Workforce', href: '#ai-workforce' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why AI Banana', href: '#why-us' },
  ],
  problems: [
    { title: 'Answering phones', description: 'Every interruption breaks focus and slows meaningful work.', icon: 'phone' },
    { title: 'Following up with leads', description: 'Warm opportunities go cold when follow-up depends on a busy day.', icon: 'follow-up' },
    { title: 'Scheduling', description: 'Back-and-forth calendar coordination drains time from every week.', icon: 'calendar' },
    { title: 'Managing emails', description: 'Routine replies and inbox triage crowd out higher-value decisions.', icon: 'mail' },
    { title: 'Updating your CRM', description: 'Critical customer details are lost when systems rely on manual entry.', icon: 'database' },
    { title: 'Customer support', description: 'Customers expect thoughtful answers the moment they need help.', icon: 'support' },
    { title: 'Administrative work', description: 'Repetitive processes quietly consume your most expensive resource: time.', icon: 'clipboard' },
  ],
  employees: [
    { title: 'AI Receptionist', description: 'Answers, qualifies, and routes every call with a calm, professional experience.', icon: 'phone' },
    { title: 'Sales Concierge', description: 'Guides prospects, answers questions, and keeps conversations moving.', icon: 'sparkles' },
    { title: 'Lead Qualifier', description: 'Identifies intent and prioritises the opportunities most ready to act.', icon: 'target' },
    { title: 'Appointment Setter', description: 'Books, confirms, and reschedules appointments around the clock.', icon: 'calendar' },
    { title: 'Customer Support', description: 'Provides consistent answers and escalates when a human touch matters.', icon: 'support' },
    { title: 'CRM Manager', description: 'Keeps records organised, current, and ready for your team.', icon: 'database' },
    { title: 'Operations Assistant', description: 'Connects daily workflows and makes sure the next step happens.', icon: 'workflow' },
    { title: 'Review Manager', description: 'Requests feedback and helps protect your hard-earned reputation.', icon: 'star' },
    { title: 'Email Assistant', description: 'Drafts, organises, and follows up without letting details slip.', icon: 'mail' },
  ],
  benefits: [
    { value: '20+', label: 'Hours saved every week', icon: 'clock' },
    { value: 'Every', label: 'Lead answered and followed up', icon: 'target' },
    { value: 'Seconds', label: 'Not hours, to respond', icon: 'zap' },
    { value: 'More', label: 'Capacity to increase revenue', icon: 'trending' },
    { value: 'Lower', label: 'Pressure on payroll costs', icon: 'wallet' },
    { value: 'Scale', label: 'Without adding headcount', icon: 'scale' },
    { value: '24/7', label: 'Availability for your customers', icon: 'sun' },
    { value: 'One', label: 'Consistent customer experience', icon: 'heart' },
  ],
  challengePrompts: [
    'Ask a complicated question.',
    'Interrupt while she is speaking.',
    'Change your appointment request.',
    'Say you are frustrated.',
    'Give incomplete information.',
    'Request to speak with a human.',
  ],
  process: [
    { step: '01', title: 'Discovery', description: 'We learn how your business works, where time disappears, and what your customers expect.' },
    { step: '02', title: 'Strategy', description: 'We design the right AI roles, workflows, and handoffs around your goals and systems.' },
    { step: '03', title: 'Build', description: 'We create, connect, train, and thoroughly test your custom AI Employees.' },
    { step: '04', title: 'Launch', description: 'Your new workforce goes live with thoughtful oversight, optimisation, and support.' },
  ],
  industries: [
    { title: 'Insurance', icon: 'shield' },
    { title: 'Medical', icon: 'medical' },
    { title: 'Legal', icon: 'scale' },
    { title: 'Real Estate', icon: 'building' },
    { title: 'Contractors', icon: 'hard-hat' },
    { title: 'Professional Services', icon: 'briefcase' },
    { title: 'Small Businesses', icon: 'store' },
  ],
  workforce: [
    { name: 'Savannah', role: 'Sales Concierge', image: savannahPortrait, accent: 'gold' },
    { name: 'LaShay', role: 'Marketing Manager', image: lashayPortrait, accent: 'blue' },
    { name: 'Ashton', role: 'Automation Architect', image: ashtonPortrait, accent: 'gold' },
    { name: 'Finley', role: 'Funnel Builder', image: finleyPortrait, accent: 'blue' },
    { name: 'Everly', role: 'Email Marketing Specialist', image: everlyPortrait, accent: 'gold' },
    { name: 'Carter', role: 'Client Success Manager', image: carterPortrait, accent: 'blue' },
  ],
  whyUs: [
    { title: 'Designed around your business', description: 'Your workflows, voice, priorities, and customer experience become the blueprint.' },
    { title: 'Built as a team, not a tool', description: 'Each AI Employee has a clear role and works with the rest of your operation.' },
    { title: 'Supported by real strategists', description: 'We stay involved from first conversation through launch and optimisation.' },
  ],
  founderStory: {
    eyebrow: 'The story behind the name',
    title: 'Why the Name AI Banana?',
    body: 'Some grandmothers are called Granny, Glamma, or Nana. Shayla’s grandbabies call her Banana—short for “Bad Nana.” That grandmother name inspired a brand built around noticing what needs to be handled and taking care of it before it becomes a problem.',
    closing: 'That is the AI Banana promise: thoughtful support, handled before it becomes a problem.',
    founder: 'Shayla Davis',
    role: 'Founder, AI Banana',
    principles: ['Show up early', 'Notice what matters', 'Make hard things simpler'],
  },
} as const

export type IconName =
  | (typeof siteConfig.problems)[number]['icon']
  | (typeof siteConfig.employees)[number]['icon']
  | (typeof siteConfig.benefits)[number]['icon']
  | (typeof siteConfig.industries)[number]['icon']
