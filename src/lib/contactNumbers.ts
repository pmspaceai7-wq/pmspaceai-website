export type ContactNumber = {
  country: string;
  navLabel: string;
  number: string;
  href: string;
  email: string;
  regionalEmail?: string;
  flag: string;
  flagSrc?: string;
  location?: string;
  extraNumbers?: { number: string; href: string }[];
};

export const contactNumbers: ContactNumber[] = [
  {
    country: "USA",
    navLabel: "USA",
    number: "+1 646 421 5740",
    href: "tel:+16464215740",
    email: "contact@pmspace.ai",
    regionalEmail: "usa@pmspace.ai",
    flag: "🇺🇸",
    flagSrc: "/assets/images/flags/us.svg",
    location: "2500 MARCONI AVE, STE 101, SACRAMENTO, CA 95821 USA",
  },
  {
    country: "Canada",
    navLabel: "CA",
    number: "+1 (979) 326-9493",
    href: "tel:+19793269493",
    email: "contact@pmspace.ai",
    regionalEmail: "ca@pmspace.ai",
    flag: "🇨🇦",
    flagSrc: "/assets/images/flags/ca.svg",
    location: "North America - Regional Office, Toronto, ON, Canada",
  },
  {
    country: "Malaysia",
    navLabel: "MY",
    number: "+60 10 660 7357",
    href: "tel:+60106607357",
    email: "contact@pmspace.ai",
    regionalEmail: "my@pmspace.ai",
    flag: "🇲🇾",
    flagSrc: "/assets/images/flags/my.svg",
  },
  {
    country: "Singapore",
    navLabel: "SG",
    number: "+65 86 111 900",
    href: "tel:+6586111900",
    email: "contact@pmspace.ai",
    regionalEmail: "sg@pmspace.ai",
    flag: "🇸🇬",
    flagSrc: "/assets/images/flags/sg.svg",
    location: "7 Soon Lee St, #04-39 ISPACE BUILDING, Singapore 627608",
  },
  {
    country: "Dubai",
    navLabel: "UAE",
    number: "+971 56 256 7509",
    href: "tel:+971562567509",
    email: "contact@pmspace.ai",
    regionalEmail: "uae@pmspace.ai",
    flag: "🇦🇪",
    flagSrc: "/assets/images/flags/ae.svg",
    location: "Middle East Regional Office, Dubai, UAE",
  },
  {
    country: "Saudi Arabia",
    navLabel: "KSA",
    number: "+966 56 208 1999",
    href: "tel:+966562081999",
    email: "contact@pmspace.ai",
    regionalEmail: "sa@pmspace.ai",
    flag: "🇸🇦",
    flagSrc: "/assets/images/flags/sa.svg",
    location: "Saudi Arabia Office, Riyadh, Kingdom of Saudi Arabia",
  },
  {
    country: "Kuwait",
    navLabel: "KW",
    number: "+965 9724 3755",
    href: "tel:+96597243755",
    email: "contact@pmspace.ai",
    regionalEmail: "kw@pmspace.ai",
    flag: "🇰🇼",
    flagSrc: "/assets/images/flags/kw.svg",
    location: "Kuwait City, Strategic Partner for Gulf Region",
  },
];
