import { Check, Coins, CreditCard, Fingerprint } from "lucide-react";

export const navItems = [
    { label: "Personal", href:"#" },
    { label: "Business", href:"#" },
    { label: "Company", href:"#" },
    { label: "Help", href:"#" },
];

export const navItems_m = [
    { label: "Personal", href:"#" },
    { label: "Business", href:"#" },
    { label: "Company", href:"#" },
    { label: "Developers", href:"#" },
    {label: "Contact Us", href:"#" },
    {label: "Help", href:"#" },
  
];

export const nija = 
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle opacity="0.3" cx="15" cy="15" r="15" fill="#008751">
    </circle><mask id="mask0_37774_3385_bc" maskUnits="userSpaceOnUse" x="6" y="7" width="18" height="16" style="mask-type: alpha;">
        <rect x="6.91406" y="7.29712" width="16.1724" height="15.4023" rx="3" fill="#E94D1E">
            </rect></mask><g mask="url(#mask0_37774_3385_bc)"><path d="M0.324219 4.1355H29.5134V26.0274H0.324219V4.1355Z" fill="#008751">
                </path><path d="M11.1875 4.05444H19.2956V25.9463H11.1875V4.05444Z" fill="white"></path></g>
                <defs><clipPath id="clip0_37774_3385_bc"><rect width="29.1892" height="21.8919" fill="white" transform="translate(0.324219 4.1355)">
                    </rect></clipPath></defs></svg>

export const features = [ 
    {
        icon: <Fingerprint />,
        text: "Order a Kuda card on the app with pickup and delivery options."
    },

    {
        icon: <Fingerprint />,
        text: "Enjoy cashless payment options online and offline."
    },

    {
        icon:<Fingerprint />,
        text: "Pay your essential bills and buy gift cards easily."
    },

    {
        icon: <Fingerprint />,
        text: "Get 25 free transfers to Nigerian banks every month."
    },

    {
        icon: <CreditCard />,
        text: "Save money automatically any time you spend."
    },
]



const carouselItems = [
    "I love how easy it is to check my balance and transfer funds with just a few taps. This app is a game-changer!",
    "The app is super quick and easy to use. I love how I can access everything I need in just a few taps",
    "The mobile check deposit feature is super convenient. I can deposit checks anytime without going to the bank!",
    "With this app, I can manage my finances on the go. It’s fast, reliable, and user-friendly.",
    "The spending tracker helps me stay on top of my budget. I’ve never been more organized with my finances!",
    "I can quickly send money to my friends and family, and the transfers are instant. No more waiting!",
    "The loan application process was so simple and fast. I got approved within minutes",
  ];


export const f_table = [
    {text: "Transfer Fee"},
    {text: "Card Delivery"},
    {text: "Card Maintenance Fee"},
    {text: "Alerts"},
    {text: "Annual Interest"},
    {text: "Bill Payment Fee"},
    {text: "Instant Reversal"},
    {text: "Maintenance"}
];

export const s_table = [
    {   icon: <Coins />,
        text: "Up to ₦50 plus V.A.T."},
    {   icon: <Coins />,
        text: "smiley"},
    {   icon: <Coins />,
        text: "Up to N50 per quater"},
    {   icon: <Coins />,
        text: "Charge for SMS alerts"},
    {   icon: <Coins />,
        text: "4%"},
    {   icon: <Coins />,
        text: "Up to N100 per bill"},
    {   icon: <Coins />,
        text: "smiley"},
    {   icon: <Coins />,
        text: "yes"},
];

export const t_table = [
    {   icon: <Check />,
        text: "25 free transfers every month"},
    {   icon: < Check />,
        text: "Yes"},
    {   icon: <Check />,
        text: "No"},
    {   icon: <Check />,
        text: "Free instant notifications"},
    {   icon: <Check />,
        text: "Up to 12%"},
    {   icon: <Check />,
        text: "No"},
    {   icon: <Check />,
        text: "Yes"},
    {   icon: <Check />,
        text: "No"}
];

export const  kuda_business = [
    {
        title: "Kuda Business",
        features: [
           "Grow your business with our all-in-one", 
           "business manager. Get a POS, bulk",
          "transfers, payroll and more.",
        ],
    },

    {
        title: "Transfer & Spend",
        features: [
            "Send money for free to any Nigerian",
             "account with 25 free transfers every",             "month.",
        ],
    },
    {
        title: "Loans",
        features: [
            "Get up to ₦150,000 in your Kuda",
           "account easily and repay in convenient",
              "instalments.",
        ],
    },
]; 