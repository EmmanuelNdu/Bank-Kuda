import { CreditCard } from "lucide-react";

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
        icon: <CreditCard />,
        text: "Order a Kuda card on the app with pickup and delivery options."
    },

    {
        icon: <chart-pie />,
        text: "Enjoy cashless payment options online and offline."
    },

    {
        icon: <scale />,
        text: "Pay your essential bills and buy gift cards easily."
    },

    {
        icon: <navigation />,
        text: "Get 25 free transfers to Nigerian banks every month."
    },

    {
        icon: <piggy-bank />,
        text: "Save money automatically any time you spend."
    },
]
