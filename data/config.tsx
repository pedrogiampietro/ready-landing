import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const siteConfig = {
  seo: {
    title: "Ready Travel",
    description:
      "O aplicativo de viagens inteligente para aventureiros modernos",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "Privacy Policy",
        href: "/policy",
      },
      // {
      //   label: 'Login',
      //   href: '/login',
      // },
      // {
      //   label: 'Sign Up',
      //   href: '/signup',
      //   variant: 'primary',
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{" "}
        <Link href="https://github.com/pedrogiampietro">Ready Travel</Link>
      </>
    ),
    links: [
      {
        href: "mailto:pedrogiampietro@hotmail.com",
        label: "Contact",
      },
      {
        href: "#",
        label: <FaTwitter size="14" />,
      },
      {
        href: "#",
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: "Start building with Ready Travel",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
