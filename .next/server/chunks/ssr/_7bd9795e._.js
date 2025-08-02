module.exports = {

"[project]/components/common/Category.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
;
;
const Category = ({ label, active = false, onClick, icon })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex flex-col items-center justify-center gap-1 p-1 rounded-lg text-sm font-medium transition-colors ${active ? 'text-[#616161]' : 'text-[#616161] hover:bg-gray-100'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: icon,
                    alt: label,
                    width: 34,
                    height: 34
                }, void 0, false, {
                    fileName: "[project]/components/common/Category.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/Category.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: `relative w-full ${active ? 'font-semibold' : 'font-normal'}`,
                children: [
                    label,
                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#34967C]"
                    }, void 0, false, {
                        fileName: "[project]/components/common/Category.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/Category.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/Category.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Category;
}}),
"[project]/components/common/Pill.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const Pill = ({ label, active = false, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `px-8 py-3 rounded-full text-sm font-medium transition-colors ${active ? 'bg-[#F0FFFB] border border-[#34967C] text-[#34967C]' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/common/Pill.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Pill;
}}),
"[project]/constants/index.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_URL": (()=>API_URL),
    "APP_NAME": (()=>APP_NAME),
    "CATEGORIES": (()=>CATEGORIES),
    "DEFAULT_CURRENCY": (()=>DEFAULT_CURRENCY),
    "HEROSECTION_BG_IMAGE": (()=>HEROSECTION_BG_IMAGE),
    "HOUSE": (()=>HOUSE),
    "PROPERTYLISTINGSAMPLE": (()=>PROPERTYLISTINGSAMPLE),
    "UI_TEXT": (()=>UI_TEXT)
});
const API_URL = 'https://api.example.com/listings';
const APP_NAME = 'ALX Listing App';
const DEFAULT_CURRENCY = 'USD';
const UI_TEXT = {
    BOOK_NOW: 'Book Now',
    DETAILS: 'View Details',
    LOADING: 'Loading...'
};
const HEROSECTION_BG_IMAGE = '/assets/images/homepage_background1.png';
const HOUSE = '/assets/images/house.png';
const PROPERTYLISTINGSAMPLE = [
    {
        name: "Villa Ocean Breeze",
        address: {
            state: "Seminyak",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.89,
        category: [
            "Luxury Villa",
            "Pool",
            "Free Parking"
        ],
        price: 3200,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 2.png",
            "/assets/images/image 6.png",
            "/assets/images/image 7.png",
            "/assets/images/image 12.png"
        ],
        discount: "",
        description: "Experience luxury at Villa Ocean Breeze, a stunning beachfront property in Seminyak. Enjoy a private pool, spacious living areas, and breathtaking ocean views, perfect for a relaxing tropical getaway.",
        reviews: [
            {
                name: "Alice Johnson",
                avatar: "/assets/avatars/alice.jpg",
                rating: 5,
                comment: "An incredible stay! The villa is beautiful, and the staff were so attentive."
            },
            {
                name: "Mark Lee",
                avatar: "/assets/avatars/mark.jpg",
                rating: 4.8,
                comment: "Loved the pool and location. Highly recommend for a luxurious escape."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Mountain Escape Chalet",
        address: {
            state: "Aspen",
            city: "Colorado",
            country: "USA"
        },
        rating: 4.70,
        category: [
            "Mountain View",
            "Fireplace",
            "Self Checkin"
        ],
        price: 1800,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: [
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 11.png",
            "/assets/images/image 17.png"
        ],
        discount: "30",
        description: "Nestled in the heart of Aspen, this cozy chalet offers stunning mountain views and a warm fireplace, ideal for a winter retreat or summer adventure.",
        reviews: [
            {
                name: "Sarah Brown",
                avatar: "/assets/avatars/sarah.jpg",
                rating: 4.5,
                comment: "The chalet was cozy and perfect for our family ski trip."
            },
            {
                name: "David Kim",
                avatar: "/assets/avatars/david.jpg",
                rating: 4.9,
                comment: "Great location and amenities. The fireplace was a highlight!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA"
        },
        rating: 4.92,
        category: [
            "Desert View",
            "Pet Friendly",
            "Self Checkin"
        ],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: [
            "/assets/images/image 4.png",
            "/assets/images/image 9.png",
            "/assets/images/image 15.png"
        ],
        discount: "",
        description: "A charming retreat in Palm Springs, surrounded by desert landscapes. Perfect for couples or small families, with pet-friendly accommodations and modern amenities.",
        reviews: [
            {
                name: "Emma Davis",
                avatar: "/assets/avatars/emma.jpg",
                rating: 5,
                comment: "Loved the desert vibes and pet-friendly policy!"
            },
            {
                name: "Liam Wilson",
                avatar: "/assets/avatars/liam.jpg",
                rating: 4.8,
                comment: "Very clean and comfortable. Great for a weekend getaway."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA"
        },
        rating: 4.85,
        category: [
            "City View",
            "Free WiFi",
            "24h Checkin"
        ],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: [
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 15.png",
            "/assets/images/image 18.png"
        ],
        discount: "15",
        description: "Live the high life in this luxurious penthouse in the heart of NYC, offering panoramic city views and modern amenities for an unforgettable urban experience.",
        reviews: [
            {
                name: "Olivia Martinez",
                avatar: "/assets/avatars/olivia.jpg",
                rating: 4.9,
                comment: "The view was spectacular! Perfect for a city getaway."
            },
            {
                name: "James Taylor",
                avatar: "/assets/avatars/james.jpg",
                rating: 4.7,
                comment: "Very stylish and convenient location. Loved it!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand"
        },
        rating: 4.77,
        category: [
            "Riverside",
            "Private Dock",
            "Free Kayaks"
        ],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 6.png",
            "/assets/images/image 2.png",
            "/assets/images/image 12.png"
        ],
        discount: "20",
        description: "A serene riverside cabin in Queenstown, offering a private dock and free kayaks for exploring the stunning waterways of Otago.",
        reviews: [
            {
                name: "Sophie Clark",
                avatar: "/assets/avatars/sophie.jpg",
                rating: 4.8,
                comment: "Kayaking was amazing! The cabin is cozy and peaceful."
            },
            {
                name: "Ethan Walker",
                avatar: "/assets/avatars/ethan.jpg",
                rating: 4.7,
                comment: "Perfect for nature lovers. Highly recommend!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Modern Beachfront Villa",
        address: {
            state: "Sidemen",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.95,
        category: [
            "Beachfront",
            "Private Pool",
            "Chef Service"
        ],
        price: 5000,
        offers: {
            bed: "5",
            shower: "4",
            occupants: "8-10"
        },
        image: [
            "/assets/images/image 7.png",
            "/assets/images/image 2.png",
            "/assets/images/image 13.png",
            "/assets/images/image 6.png"
        ],
        discount: "",
        description: "Indulge in luxury at this modern beachfront villa in Sidemen, complete with a private pool and optional chef service for an exquisite dining experience.",
        reviews: [
            {
                name: "Isabella Nguyen",
                avatar: "/assets/avatars/isabella.jpg",
                rating: 5,
                comment: "The chef service was a game-changer! Stunning villa."
            },
            {
                name: "Lucas Brown",
                avatar: "/assets/avatars/lucas.jpg",
                rating: 4.9,
                comment: "Perfect for a large group. The beach access was fantastic."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Lakeside Chalet",
        address: {
            state: "Banff",
            city: "Alberta",
            country: "Canada"
        },
        rating: 4.65,
        category: [
            "Lakeside",
            "Mountain View",
            "Hiking Trails"
        ],
        price: 2300,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: [
            "/assets/images/image 8.png",
            "/assets/images/image 3.png",
            "/assets/images/image 11.png",
            "/assets/images/image 17.png"
        ],
        discount: "10",
        description: "A cozy lakeside chalet in Banff, surrounded by mountains and hiking trails, perfect for outdoor enthusiasts seeking a tranquil retreat.",
        reviews: [
            {
                name: "Mia Thompson",
                avatar: "/assets/avatars/mia.jpg",
                rating: 4.6,
                comment: "The lake views were breathtaking. Great hiking nearby."
            },
            {
                name: "Noah Lee",
                avatar: "/assets/avatars/noah.jpg",
                rating: 4.7,
                comment: "Very comfortable and great location for exploring Banff."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Tropical Garden Villa",
        address: {
            state: "Koh Samui",
            city: "Surat Thani",
            country: "Thailand"
        },
        rating: 4.80,
        category: [
            "Garden",
            "Free Parking",
            "Self Checkin"
        ],
        price: 2750,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "5-6"
        },
        image: [
            "/assets/images/image 9.png",
            "/assets/images/image 4.png",
            "/assets/images/image 13.png"
        ],
        discount: "25",
        description: "Relax in this tropical garden villa in Koh Samui, featuring lush surroundings, free parking, and easy self-check-in for a hassle-free stay.",
        reviews: [
            {
                name: "Ava Garcia",
                avatar: "/assets/avatars/ava.jpg",
                rating: 4.9,
                comment: "The garden was beautiful, and the villa was very spacious."
            },
            {
                name: "William Chen",
                avatar: "/assets/avatars/william.jpg",
                rating: 4.7,
                comment: "Loved the tropical vibe and easy check-in process."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Urban Loft",
        address: {
            state: "Berlin",
            city: "Berlin",
            country: "Germany"
        },
        rating: 4.60,
        category: [
            "City Center",
            "Free WiFi",
            "24h Checkin"
        ],
        price: 2000,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: [
            "/assets/images/image 10.png",
            "/assets/images/image 5.png",
            "/assets/images/image 15.png",
            "/assets/images/image 18.png"
        ],
        discount: "",
        description: "A stylish urban loft in the heart of Berlin, offering free WiFi and 24-hour check-in, perfect for city explorers.",
        reviews: [
            {
                name: "Charlotte Kim",
                avatar: "/assets/avatars/charlotte.jpg",
                rating: 4.5,
                comment: "Great location and modern design. Perfect for a city trip."
            },
            {
                name: "Henry Patel",
                avatar: "/assets/avatars/henry.jpg",
                rating: 4.7,
                comment: "Very convenient and stylish. Loved the WiFi speed!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Secluded Forest Cabin",
        address: {
            state: "Whistler",
            city: "British Columbia",
            country: "Canada"
        },
        rating: 4.72,
        category: [
            "Secluded",
            "Hot Tub",
            "Self Checkin"
        ],
        price: 2600,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: [
            "/assets/images/image 11.png",
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 17.png"
        ],
        discount: "40",
        description: "Escape to this secluded forest cabin in Whistler, complete with a hot tub and self-check-in for a peaceful retreat in nature.",
        reviews: [
            {
                name: "Amelia Wright",
                avatar: "/assets/avatars/amelia.jpg",
                rating: 4.8,
                comment: "The hot tub was amazing! Perfect for a quiet getaway."
            },
            {
                name: "Jack Liu",
                avatar: "/assets/avatars/jack.jpg",
                rating: 4.6,
                comment: "Very secluded and relaxing. Great for families."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Cliffside Villa",
        address: {
            state: "Amalfi",
            city: "Salerno",
            country: "Italy"
        },
        rating: 4.93,
        category: [
            "Cliffside",
            "Infinity Pool",
            "Sea View"
        ],
        price: 6000,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 12.png",
            "/assets/images/image 2.png",
            "/assets/images/image 6.png",
            "/assets/images/image 7.png"
        ],
        discount: "50",
        description: "Perched on the cliffs of Amalfi, this villa offers an infinity pool and stunning sea views, ideal for a luxurious Italian escape.",
        reviews: [
            {
                name: "Sophia Rossi",
                avatar: "/assets/avatars/sophia.jpg",
                rating: 5,
                comment: "The infinity pool and views were unforgettable!"
            },
            {
                name: "Mateo Gonzalez",
                avatar: "/assets/avatars/mateo.jpg",
                rating: 4.9,
                comment: "Luxury at its finest. Highly recommend this villa."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Coastal Escape Villa",
        address: {
            state: "Noosa",
            city: "Queensland",
            country: "Australia"
        },
        rating: 4.83,
        category: [
            "Beachfront",
            "Pet Friendly",
            "Free Parking"
        ],
        price: 3400,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 13.png",
            "/assets/images/image 7.png",
            "/assets/images/image 9.png",
            "/assets/images/image 4.png"
        ],
        discount: "",
        description: "A pet-friendly beachfront villa in Noosa, offering direct access to the coast and ample parking for a perfect Australian holiday.",
        reviews: [
            {
                name: "Ella Harris",
                avatar: "/assets/avatars/ella.jpg",
                rating: 4.8,
                comment: "Great for our dog and family. Beach access was perfect."
            },
            {
                name: "Oliver King",
                avatar: "/assets/avatars/oliver.jpg",
                rating: 4.9,
                comment: "Spacious and clean. Loved the coastal location."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Downtown Apartment",
        address: {
            state: "Tokyo",
            city: "Tokyo",
            country: "Japan"
        },
        rating: 4.81,
        category: [
            "City Center",
            "Free WiFi",
            "Public Transport"
        ],
        price: 2200,
        offers: {
            bed: "1",
            shower: "1",
            occupants: "2"
        },
        image: [
            "/assets/images/image 15.png",
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 18.png"
        ],
        discount: "",
        description: "A modern downtown apartment in Tokyo, steps away from public transport and offering fast WiFi for city adventurers.",
        reviews: [
            {
                name: "Hana Sato",
                avatar: "/assets/avatars/hana.jpg",
                rating: 4.8,
                comment: "Perfect location for exploring Tokyo. Very clean."
            },
            {
                name: "Ryan Tanaka",
                avatar: "/assets/avatars/ryan.jpg",
                rating: 4.7,
                comment: "Compact but stylish. Great for a short city stay."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Luxury Safari Lodge",
        address: {
            state: "Serengeti",
            city: "Mara",
            country: "Tanzania"
        },
        rating: 4.97,
        category: [
            "Safari",
            "Guided Tours",
            "Free Breakfast"
        ],
        price: 4500,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 16.png",
            "/assets/images/image 4.png",
            "/assets/images/image 9.png"
        ],
        discount: "20",
        description: "Immerse yourself in the Serengeti with this luxury safari lodge, offering guided tours and complimentary breakfast for an unforgettable adventure.",
        reviews: [
            {
                name: "Zoe Mweupe",
                avatar: "/assets/avatars/zoe.jpg",
                rating: 5,
                comment: "The safari tours were incredible! Amazing lodge."
            },
            {
                name: "Ahmed Khan",
                avatar: "/assets/avatars/ahmed.jpg",
                rating: 4.9,
                comment: "Luxurious and great staff. Breakfast was top-notch."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Countryside Cottage",
        address: {
            state: "Cotswolds",
            city: "Gloucestershire",
            country: "UK"
        },
        rating: 4.58,
        category: [
            "Countryside",
            "Fireplace",
            "Self Checkin"
        ],
        price: 1800,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-4"
        },
        image: [
            "/assets/images/image 17.png",
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 11.png"
        ],
        discount: "25",
        description: "A quaint countryside cottage in the Cotswolds, featuring a cozy fireplace and self-check-in for a charming rural escape.",
        reviews: [
            {
                name: "Lily Evans",
                avatar: "/assets/avatars/lily.jpg",
                rating: 4.6,
                comment: "So charming and peaceful. Loved the fireplace."
            },
            {
                name: "George Baker",
                avatar: "/assets/avatars/george.jpg",
                rating: 4.5,
                comment: "Perfect for a quiet weekend in the countryside."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Riverfront Mansion",
        address: {
            state: "Paris",
            city: "Île-de-France",
            country: "France"
        },
        rating: 4.86,
        category: [
            "Riverfront",
            "Private Garden",
            "Self Checkin"
        ],
        price: 5000,
        offers: {
            bed: "4",
            shower: "3",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 18.png",
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 15.png"
        ],
        discount: "30",
        description: "A grand riverfront mansion in Paris, featuring a private garden and easy self-check-in, perfect for a luxurious French getaway.",
        reviews: [
            {
                name: "Claire Dubois",
                avatar: "/assets/avatars/claire.jpg",
                rating: 4.9,
                comment: "Stunning mansion with a beautiful garden. Loved it!"
            },
            {
                name: "Pierre Martin",
                avatar: "/assets/avatars/pierre.jpg",
                rating: 4.8,
                comment: "Very spacious and elegant. Perfect for our group."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    }
];
const CATEGORIES = [
    {
        name: "Rooms",
        image: "/assets/icons/living-room 1.svg"
    },
    {
        name: "Mansion",
        image: "/assets/icons/mansion 1.png"
    },
    {
        name: "Countryside",
        image: "/assets/icons/farm 1.png"
    },
    {
        name: "Villa",
        image: "/assets/icons/villa 1.svg"
    },
    {
        name: "Tropical",
        image: "/assets/icons/palm-tree 1.svg"
    },
    {
        name: "New",
        image: "/assets/icons/key-chain 1.svg"
    },
    {
        name: "Amazing pool",
        image: "/assets/icons/swimming-pool 1.svg"
    },
    {
        name: "Beach house",
        image: "/assets/icons/vacations 1.svg"
    },
    {
        name: "Island",
        image: "/assets/icons/island (1) 1.svg"
    },
    {
        name: "Camping",
        image: "/assets/icons/tent 1.svg"
    },
    {
        name: "Apartment",
        image: "/assets/icons/apartment 1.svg"
    },
    {
        name: "House",
        image: "/assets/icons/home 1.svg"
    },
    {
        name: "Lakefront",
        image: "/assets/icons/cottage 1.svg"
    },
    {
        name: "Farm house",
        image: "/assets/icons/barn 1.svg"
    },
    {
        name: "Treehouse",
        image: "/assets/icons/treehouse (1) 1.svg"
    },
    {
        name: "Cabins",
        image: "/assets/icons/cabin 1.svg"
    },
    {
        name: "Castles",
        image: "/assets/icons/castle-tower 1.svg"
    }
];
}}),
"[project]/components/common/Card.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bath.js [ssr] (ecmascript) <export default as Bath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed.js [ssr] (ecmascript) <export default as Bed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$squares$2d$subtract$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SquaresSubtract$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/squares-subtract.js [ssr] (ecmascript) <export default as SquaresSubtract>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
;
const Card = ({ property })=>{
    console.log(property);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full cursor-pointer hover:shadow-md hover:rounded-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/property/${property.name}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: property.image[0] || "/images/fallback.jpg",
                    alt: property.name || "house image",
                    width: 400,
                    height: 300,
                    className: "rounded-t-lg",
                    onError: (e)=>{
                        e.currentTarget.src = "/images/fallback.jpg";
                    }
                }, void 0, false, {
                    fileName: "[project]/components/common/Card.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-between p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-start gap-4 mb-4",
                            children: property.category.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded",
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/common/Card.tsx",
                            lineNumber: 30,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between w-full gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-[22px]",
                                            children: property.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 42,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-4 h-4 text-[#FAC02B]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-[17px] ml-2",
                                                    children: property.rating
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 43,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 41,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-[16px]",
                                    children: [
                                        property.address.city,
                                        ", ",
                                        property.address.country
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 48,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/common/Card.tsx",
                            lineNumber: 40,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-1 px-2 bg-gray-200 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                property.offers.bed,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__["Bed"], {
                                                    className: "w-4 h-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 55,
                                            columnNumber: 13
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                property.offers.shower,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__["Bath"], {
                                                    className: "w-4 h-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 58,
                                            columnNumber: 13
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                property.offers.occupants,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 61,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 54,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4 text-[#FAC02B]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 66,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-[17px] ml-2",
                                            children: property.price
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 67,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/common/Card.tsx",
                            lineNumber: 53,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/Card.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this),
                property.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute z-10 flex items-center justify-between gap-4 bg-green-500 rounded-t-lg rounded-br-lg left-1 top-1 w-fit",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "flex items-center text-sm font-medium text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$squares$2d$subtract$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SquaresSubtract$3e$__["SquaresSubtract"], {
                                className: "w-3 h-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/common/Card.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            property.discount,
                            "% Off"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/common/Card.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/common/Card.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/Card.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/Card.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Card;
}}),
"[project]/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Category$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Category.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pill$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Pill.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Card.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
function Home() {
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("All");
    const [isTabletView, setIsTabletView] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsTabletView(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const allCategories = [
        "All",
        ...Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PROPERTYLISTINGSAMPLE"].flatMap((property)=>property.category)))
    ];
    const visibleCategories = allCategories.slice(0, 5);
    const mobileVisibleCategories = allCategories.slice(0, 2);
    const hiddenCategories = allCategories.slice(isTabletView ? 2 : 5);
    const filteredProperties = activeFilter === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PROPERTYLISTINGSAMPLE"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PROPERTYLISTINGSAMPLE"].filter((property)=>property.category.includes(activeFilter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "w-full space-y-4 font-quicksand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2 overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CATEGORIES"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Category$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: category.name,
                            icon: category.image,
                            active: activeFilter === category.name,
                            onClick: ()=>setActiveFilter(category.name)
                        }, category.name, false, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "relative flex items-center justify-center w-full h-full p-4",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["HEROSECTION_BG_IMAGE"]})`,
                    width: "100%",
                    minHeight: "280px",
                    backgroundSize: "cover",
                    borderRadius: "27px",
                    backgroundPosition: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col items-center justify-center w-full h-full max-w-2xl gap-5 md:max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "font-bold text-[28.28px] sm:text-[66.63px] text-center text-white lg:text-[94px]",
                            children: "Find your favorite place here!"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "px-4 text-xs font-semibold text-center text-white sm:text-lg lg:text-2xl",
                            children: "The best prices for over 2 million properties worldwide."
                        }, void 0, false, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        (isTabletView ? mobileVisibleCategories : visibleCategories).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pill$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: category,
                                active: activeFilter === category,
                                onClick: ()=>setActiveFilter(category)
                            }, category, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)),
                        hiddenCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                            className: "px-4 py-2 text-sm border rounded-md",
                            onChange: (e)=>setActiveFilter(e.target.value),
                            value: activeFilter,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "More..."
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                hiddenCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                        value: category,
                                        children: category
                                    }, category, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
                children: filteredProperties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        property: property,
                        title: property.name
                    }, property.name, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/bath.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Bath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 4 8 6",
            key: "1rru8s"
        }
    ],
    [
        "path",
        {
            d: "M17 19v2",
            key: "ts1sot"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ],
    [
        "path",
        {
            d: "M7 19v2",
            key: "12npes"
        }
    ],
    [
        "path",
        {
            d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
            key: "14ym8i"
        }
    ]
];
const Bath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("bath", __iconNode);
;
 //# sourceMappingURL=bath.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/bath.js [ssr] (ecmascript) <export default as Bath>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Bath": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bath.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/bed.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Bed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2 4v16",
            key: "vw9hq8"
        }
    ],
    [
        "path",
        {
            d: "M2 8h18a2 2 0 0 1 2 2v10",
            key: "1dgv2r"
        }
    ],
    [
        "path",
        {
            d: "M2 17h20",
            key: "18nfp3"
        }
    ],
    [
        "path",
        {
            d: "M6 8v9",
            key: "1yriud"
        }
    ]
];
const Bed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("bed", __iconNode);
;
 //# sourceMappingURL=bed.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/bed.js [ssr] (ecmascript) <export default as Bed>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Bed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>DollarSign)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }
    ],
    [
        "path",
        {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }
    ]
];
const DollarSign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("dollar-sign", __iconNode);
;
 //# sourceMappingURL=dollar-sign.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript) <export default as DollarSign>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DollarSign": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/squares-subtract.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>SquaresSubtract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 22a2 2 0 0 1-2-2",
            key: "i7yj1i"
        }
    ],
    [
        "path",
        {
            d: "M16 22h-2",
            key: "18d249"
        }
    ],
    [
        "path",
        {
            d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z",
            key: "1njgbb"
        }
    ],
    [
        "path",
        {
            d: "M20 8a2 2 0 0 1 2 2",
            key: "1770vt"
        }
    ],
    [
        "path",
        {
            d: "M22 14v2",
            key: "iot8ja"
        }
    ],
    [
        "path",
        {
            d: "M22 20a2 2 0 0 1-2 2",
            key: "qj8q6g"
        }
    ]
];
const SquaresSubtract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("squares-subtract", __iconNode);
;
 //# sourceMappingURL=squares-subtract.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/squares-subtract.js [ssr] (ecmascript) <export default as SquaresSubtract>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SquaresSubtract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$squares$2d$subtract$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$squares$2d$subtract$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/squares-subtract.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Star)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Star": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Users)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Users": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "getServerSideProps": (()=>getServerSideProps),
    "getStaticPaths": (()=>getStaticPaths),
    "getStaticProps": (()=>getStaticProps),
    "reportWebVitals": (()=>reportWebVitals),
    "routeModule": (()=>routeModule),
    "unstable_getServerProps": (()=>unstable_getServerProps),
    "unstable_getServerSideProps": (()=>unstable_getServerSideProps),
    "unstable_getStaticParams": (()=>unstable_getStaticParams),
    "unstable_getStaticPaths": (()=>unstable_getStaticPaths),
    "unstable_getStaticProps": (()=>unstable_getStaticProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [ssr] (ecmascript)");
// Import the app and document modules.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_document$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/_document.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_app$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/_app.tsx [ssr] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/index.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'default');
const getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticProps');
const getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getStaticPaths');
const getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'getServerSideProps');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'config');
const reportWebVitals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'reportWebVitals');
const unstable_getStaticProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getStaticParams');
const unstable_getServerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, 'unstable_getServerSideProps');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["PagesRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RouteKind"].PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_app$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        Document: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_document$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages.js.map
}}),

};

//# sourceMappingURL=_7bd9795e._.js.map