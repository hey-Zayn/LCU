"use client";
import React from "react";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";

import {
  Users,
  Handshake,
  Briefcase,
  Heart,
  HelpCircle,
  BarChart2,
  MapPin,
  LayoutTemplate,
  Zap,
  Globe2,
  BadgeCheck,
  ShoppingCart,
  PackageCheck,
  Truck,
  Star,
  Search,
  Building2,
  Store,
  List,
  Target,
  Share2,
  RefreshCw,
  Mic,
  Tv,
  Mail,
  Youtube,
  DollarSign,
  Facebook,
  Code2,
  Palette,
  Accessibility,
  PenSquare,
  Layers,
  DraftingCompass,
  FileText,
  Video,
  Smartphone,
  Contact2,
  Cpu,
  Cloud,
  FolderGit2,
  Phone,
  Headset,
  ClipboardList,
  PhoneIncoming,
  ShieldCheck,
  UserCog,
  UserPlus,
  Lightbulb,
  RefreshCcwDot,
  ChartNoAxesCombined,
  GraduationCap,
  Network,
  Goal,
  Cog,
  Package,
  WorkflowIcon,
  Award,
  UserCircle2,
  ShoppingBag,
  MessageSquare,
  Brain,
  Code,
  Eye,
  HeartPulse,
  Server,
  BookOpen,
  Building,
  Blocks,
} from "lucide-react";

import MobMenu from "./MobMenu";

const Header = () => {


 

  const Menus = [
    {
      id: 1,
      name: " Services ",
      subMenuHeading: [
        "AI & Technology",
        "Development Services",
        "Industry Solutions",
      ],
      subMenu: [
        {
          name: "AI-Monitoring & Integration",
          desc: "Smart systems",
          icon: Cpu,
          link: "/ai-monitoring-integration",
        },
        {
          name: "MERN Stack Development",
          desc: "Full-stack JavaScript solutions",
          icon: Code,
          link: "/mern-stack-development",
        },
        {
          name: "E-Commerce Solution",
          desc: "Online store setup",
          icon: ShoppingBag,
          link: "/e-commerce-solution",
        },
        {
          name: "AI Development Services",
          desc: "Custom AI solutions",
          icon: Cpu,
          link: "/ai-development-services",
        },
        {
          name: "Hybrid Mobile Apps",
          desc: "Cross-platform mobile solutions",
          icon: Code2,
          link: "/hybrid-mobile-apps",
        },
        {
          name: "Healthcare IT Solutions",
          desc: "EMR/EHR systems",
          icon: HeartPulse,
          link: "/healthcare-it-solutions",
        },
        {
          name: "AI Chatbot Development",
          desc: "Intelligent chatbots",
          icon: MessageSquare,
          link: "/ai-chatbot-development",
        },
        {
          name: "Python-Django Stack",
          desc: "Custom Python solutions and scripting",
          icon: Code,
          link: "/python-development",
        },
        {
          name: "Fintech Solutions",
          desc: "Banking & financial solutions",
          icon: Smartphone,
          link: "/fintech-app-development",
        },
        {
          name: "Chat GPT Integrations",
          desc: "AI-powered chat",
          icon: MessageSquare,
          link: "/chat-gpt-integrations",
        },
        {
          name: "LAMP Stack Development",
          desc: "Linux, Apache, MySQL, PHP",
          icon: Server,
          link: "/lamp-stack-development",
        },

        {
          name: "Publishing & Media",
          desc: "Content management systems",
          icon: FolderGit2,
          link: "/publishing-media-cms",
        },

        {
          name: "Machine Learning",
          desc: "AI algorithms",
          icon: Brain,
          link: "/machine-learning",
        },

        {
          name: ".NET Stack Development",
          desc: ".NET Core, C#, ASP.NET solutions",
          icon: Server,
          link: "/dotnet-stack-development",
        },

        {
          name: "Education Platforms",
          desc: "E-learning & virtual classrooms",
          icon: BookOpen,
          link: "/education-platforms",
        },
        // {
        //   name: "Real Estate Tech",
        //   desc: "Property listing & management",
        //   icon: Home,
        //   link: "/real-estate-tech",
        // },
        // {
        //   name: "Travel & Hospitality",
        //   desc: "Booking & reservation systems",
        //   icon: Plane,
        //   link: "/travel-hospitality",
        // },
        {
          name: "Blockchain",
          desc: "Decentralized ledger solutions",
          icon: Blocks, // fixed icon from RefreshCw to Blocks
          link: "/blockchain",
        },



        {
          name: "Rails: Ruby on Rails",
          desc: "Full-stack web apps with Rails",
          icon: Code,
          link: "/rails-ruby-on-rails",
        },
        {
          name: "Real Estate Tech",
          desc: "Property listing & management",
          icon: Building, // changed from Home to Building
          link: "/real-estate-tech",
        },

        {
          name: "Computer Vision",
          desc: "Image recognition",
          icon: Eye,
          link: "/computer-vision",
        },
        // {
        //   name: "Staff Augmentation",
        //   desc: "Team expansion",
        //   icon: UserPlus,
        //   link: "/staff-augmentation",
        // },

      ],
      gridCols: 3,
    },
    {
      id: 2,
      name: " Marketing",
      subMenuHeading: [
        "Industries",
        "Digital Advertisement",
        "Commerce Platforms"
      ],
      subMenu: [
        {
          name: "Search Engine Optimization",
          desc: "Boost online visibility",
          icon: BarChart2,
          link: "/Search-Engine-Optimization",
        },
        {
          name: "PPC & Ads",
          desc: "Targeted ad campaigns",
          icon: ShoppingBag,
          link: "/paid-media-advertisement",
        },
        {
          name: "Social Media Campaigning",
          desc: "Boost social engagement",
          icon: Share2,
          link: "/social-media-marketing",
        },
        {
          name: "SEO for Leads",
          desc: "Generate quality leads",
          icon: Zap,
          link: "/seo-leads",
        },
        {
          name: "Brand Optimization",
          desc: "Strengthen brand presence",
          icon: BadgeCheck,
          link: "/brand-optimization",
        },

        {
          name: "SEO for Amazon",
          desc: "Dominate Amazon rankings",
          icon: Building2,
          link: "/seo-amazon",
        },
        {
          name: "SEO for Walmart",
          desc: "Boost Walmart visibility",
          icon: Store,
          link: "/seo-for-walmart",
        },

        {
          name: "Facebook Lead Generation",
          desc: "Capture Facebook leads",
          icon: Target,
          link: "/facebook-lead-generation",
        },

        {
          name: "B2B Advertisement",
          desc: "Business-to-business ads",
          icon: Users,
          link: "/B2B-advertisement",
        },
        {
          name: "Local Search Optimization",
          desc: "Dominate local searches",
          icon: MapPin,
          link: "/Local-Search-Optimization",
        },

        {
          name: "360 Lead Nurture",
          desc: "Nurture leads effectively",
          icon: RefreshCw,
          link: "/360-lead-nurture",
        },

        {
          name: "Influencer Marketing",
          desc: "Leverage influencer reach",
          icon: Mic,
          link: "/influencer-marketing",
        },
        {
          name: "Landing Page Optimization",
          desc: "Maximize conversion rates",
          icon: LayoutTemplate,
          link: "/Landing-Page-Optimization",
        },
        {
          name: "Email Marketing",
          desc: "Engage via email",
          icon: Mail,
          link: "/email-marketing",
        },
        {
          name: "Media Buying & Advertisement",
          desc: "Optimize ad spend",
          icon: DollarSign,
          link: "/media-buying-advertisement",
        },
        {
          name: "Amazon Marketplace",
          desc: "Sell on Amazon",
          icon: Building2,
          link: "/amazon-marketing",
        },
        {
          name: "Walmart Marketplace",
          desc: "Expand on Walmart",
          icon: Store,
          link: "/walmart-marketplace",
        },
        {
          name: "Commerce Credibility",
          desc: "Build trust fast",
          icon: BadgeCheck,
          link: "/commerce-credibility",
        }
      ],
      gridCols: 3,
    },
    {
      id: 3,
      name: "Business Servicing",
      subMenuHeading: ["BPO Services", "Human Resources", "Consultation"],
      subMenu: [
        {
          name: "Call Center",
          desc: "24/7 support",
          icon: Phone,
          link: "/call-centers",
        },
        {
          name: "Customer Service",
          desc: "Client support",
          icon: Headset,
          link: "/customer-service",
        },
        {
          name: "Back Office",
          desc: "Operations support",
          icon: ClipboardList,
          link: "/back-office",
        },
        {
          name: "Consulting",
          desc: "Expert guidance",
          icon: Briefcase,
          link: "/consulting",
        },
        {
          name: "Inbound Development",
          desc: "Call management",
          icon: PhoneIncoming,
          link: "/inbound-development",
        },
        {
          name: "Staffing",
          desc: "Team building",
          icon: Users,
          link: "/staffing",
        },
        {
          name: "Recruiting",
          desc: "Talent acquisition",
          icon: Search,
          link: "/recruiting",
        },
        {
          name: "Benefits Consulting",
          desc: "Employee benefits",
          icon: ShieldCheck,
          link: "/benefits-consulting",
        },
        {
          name: "HR Consulting",
          desc: "HR solutions",
          icon: UserCog,
          link: "/hr-consulting",
        },
        {
          name: "HR Outsourcing",
          desc: "HR management",
          icon: UserPlus,
          link: "/hr-outsourcing",
        },
        {
          name: "Business Consultants",
          desc: "Strategic advice",
          icon: Lightbulb,
          link: "/business-consultants",
        },
        {
          name: "Change Management",
          desc: "Transition support",
          icon: RefreshCcwDot,
          link: "/change-management",
        },
        {
          name: "Strategy Development",
          desc: "Growth planning",
          icon: ChartNoAxesCombined,
          link: "/strategy-development",
        },
        {
          name: "Corporate Training",
          desc: "Skill development",
          icon: GraduationCap,
          link: "/corporate-training",
        },
        {
          name: "Association Management",
          desc: "Organization leadership",
          icon: Network,
          link: "/association-management",
        },
      ],
      gridCols: 3,
    },
    {
      id: 4,
      name: "About",
      subMenuHeading: ["About Us", "Careers", "Values"],
      subMenu: [
        {
          name: "Who we are",
          desc: "Our story",
          icon: Users,
          link: "/Who-We-Are",
        },
        {
          name: "Meet OUR LEAD",
          desc: "Our CEO",
          icon: Goal,
          link: "/AwaisSheikh",
        },
        {
          name: "How-It-Works",
          desc: "Our process",
          icon: Cog,
          link: "/How-It-Works",
        },
        {
          name: "Packages",
          desc: "Our offerings",
          icon: Package,
          link: "/packages",
        },
        {
          name: "Portfolio",
          desc: "Our work",
          icon: WorkflowIcon,
          link: "/portfolio",
          // link: '/our-work'
        },
        {
          name: "Courses",
          desc: "Our courses",
          icon: GraduationCap,
          link: "/courses",
        },

        {
          name: "Our Team",
          desc: "Meet us",
          icon: UserCircle2,
          link: "/our-team",
        },

        {
          name: "FAQs",
          desc: "Get answers",
          icon: HelpCircle,
          link: "/FAQs",
        },
        {
          name: "We are hiring!",
          desc: "Careers",
          icon: Briefcase,
          link: "/we-are-hiring",
        },
        {
          name: "Blogs",
          desc: "Insights & updates",
          icon: BookOpen,
          link: "/blogs",

        },
      ],
      gridCols: 3,
    },

  ];

  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent text-white">

      <div className="w-full  flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-4 max-md:w-full max-sm:w-full max-md:justify-between max-sm:justify-between justify-between lg:justify-center">
          <div className="flex items-center">
            <Link href={`/`} className="w-50 max-sm:w-50 ">
              <img src="/dev/images/forwardsols_logo.svg" alt="Logo" className="w-100 max-sm:w-90"
              />
            </Link>
          </div>
          {/* forward_logo.png 
          forward1-01.svg
          */}


        </div>
        <div>
          {/* Desktop Menu - hidden on tablet and mobile */}
          <ul className="hidden lg:flex gap-2">
            {Menus.map((menu) => (
              <DesktopMenu key={menu.id} menu={menu} />
            ))}
          </ul>

          {/* Mobile Menu - hidden on desktop, shown on tablet and mobile */}
          <div className="flex-center gap-x-5 lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>

        <div className="max-sm:hidden max-md:hidden">
          <Link href="/contact">
            <div className="relative inline-block group max-sm:hidden min-w-[160px]">
              <button className="relative z-20 text-white px-8 py-4 max-sm:px-6 max-sm:py-3 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                <span className="relative z-20 -10 lg:text-xs">Book a Demo</span>

                <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
              </button>
              <img
                src="/dev/images/left top.svg"
                alt=""
                className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-21 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
              <img
                src="/dev/images/right top.svg"
                alt=""
                className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-21 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
              />
              <img
                src="/dev/images/left bottom.svg"
                alt=""
                className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-21 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <img
                src="/dev/images/right bottom.svg"
                alt=""
                className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-21 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;