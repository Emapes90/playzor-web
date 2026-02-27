import {
  Shield,
  Zap,
  Server,
  Clock,
  MapPin,
  Cpu,
  MemoryStick,
  HardDrive,
  Globe,
  Headphones,
  Gauge,
} from "lucide-react";

export const features = [
  {
    title: "Instant Setup",
    description:
      "Get your server up and running in seconds. No complicated configurations.",
    icon: Zap,
  },
  {
    title: "DDoS Protection",
    description:
      "Enterprise protection keeps your server online and secure against any attack.",
    icon: Shield,
    highlight: true,
  },
  {
    title: "99.9% Uptime",
    description:
      "Our redundant infrastructure ensures your server stays online.",
    icon: Gauge,
  },
  {
    title: "24/7 Support",
    description:
      "Expert support team available around the clock to help with any issues.",
    icon: Headphones,
  },
  {
    title: "Powerful Hardware",
    description:
      "High-performance NVMe SSDs and latest-gen CPUs for lag-free gaming.",
    icon: Cpu,
  },
  {
    title: "Global Locations",
    description:
      "Multiple data centers worldwide to ensure low latency for all players.",
    icon: Globe,
  },
];

export const plans = [
  {
    name: "Iron",
    price: "₹199",
    ram: "2 GB",
    cpu: "1 vCPU",
    storage: "20 GB NVMe SSD",
    slots: "Unlimited",
    backups: "1 Backup",
    recommended: false,
  },
  {
    name: "Gold",
    price: "₹399",
    ram: "4 GB",
    cpu: "2 vCPU",
    storage: "40 GB NVMe SSD",
    slots: "Unlimited",
    backups: "2 Backups",
    recommended: true,
  },
  {
    name: "Diamond",
    price: "₹599",
    ram: "8 GB",
    cpu: "4 vCPU",
    storage: "60 GB NVMe SSD",
    slots: "Unlimited",
    backups: "4 Backups",
    recommended: false,
  },
  {
    name: "Netherite",
    price: "₹1199",
    ram: "16 GB",
    cpu: "6 vCPU",
    storage: "120 GB NVMe SSD",
    slots: "Unlimited",
    backups: "6 Backups",
    recommended: false,
  },
];

export const reviews = [
  {
    name: "Alex Chen",
    role: "Server Owner",
    content:
      "The performance is unmatched. Switching to Playzor was the best decision for my SMP.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Community Manager",
    content:
      "Support is incredible. They helped me migrate my files in minutes. Zero lag since day one.",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    role: "Network Admin",
    content:
      "Hosting in the India region gave our Asian player base <20ms ping. Absolutely fantastic.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Valheim Guild Master",
    content:
      "Our guild has been with Playzor for over a year now. The uptime is incredible and mod support is seamless.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Ark Tribe Owner",
    content:
      "Running a large Ark server requires serious hardware. Playzor delivers on every front - performance, reliability, and service.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 72-hour money-back guarantee. If you're not satisfied with our service for any reason, just let us know within the first 3 days for a full refund.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Instantly! Your server is automatically deployed immediately after payment is confirmed. You can start playing within seconds.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your server resources at any time through our billing panel without losing any data.",
  },
  {
    question: "Do you support modpacks?",
    answer:
      "Yes, our custom panel supports 1-click installation for over 2,000 modpacks from CurseForge, Modrinth, and FTB.",
  },
  {
    question: "Is DDoS protection included?",
    answer:
      "Yes, all our servers come with enterprise-grade DDoS protection (up to 12Tbps) at no extra cost to keep your community safe.",
  },
  {
    question: "Can I switch server locations?",
    answer:
      "Yes, you can request a location transfer between our India and Singapore data centers by opening a support ticket.",
  },
];
