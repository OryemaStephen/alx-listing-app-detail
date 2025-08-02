module.exports = {

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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/components/property/PropertyDetail.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
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
const PropertyDetail = ({ property })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container p-6 mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold",
                children: property.name
            }, void 0, false, {
                fileName: "[project]/components/property/PropertyDetail.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center mt-2 space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-yellow-500",
                        children: [
                            property.rating,
                            " stars"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/property/PropertyDetail.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: [
                            property.address.city,
                            ", ",
                            property.address.country
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/property/PropertyDetail.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/property/PropertyDetail.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: property.image[0],
                    alt: property.name,
                    width: 400,
                    height: 384,
                    className: "rounded-t-lg"
                }, void 0, false, {
                    fileName: "[project]/components/property/PropertyDetail.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/property/PropertyDetail.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/components/property/PropertyDetail.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: property.description
                    }, void 0, false, {
                        fileName: "[project]/components/property/PropertyDetail.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/property/PropertyDetail.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold",
                        children: "What this place offers"
                    }, void 0, false, {
                        fileName: "[project]/components/property/PropertyDetail.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: "flex flex-wrap space-x-4",
                        children: property.category.map((amenity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: "p-2 bg-gray-200 rounded-md",
                                children: amenity
                            }, index, false, {
                                fileName: "[project]/components/property/PropertyDetail.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/property/PropertyDetail.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/property/PropertyDetail.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/property/PropertyDetail.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PropertyDetail;
}}),
"[project]/pages/property/[id].tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PropertyPage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$property$2f$PropertyDetail$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/property/PropertyDetail.tsx [ssr] (ecmascript)");
;
;
;
;
function PropertyPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const property = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PROPERTYLISTINGSAMPLE"].find((item)=>item.name === id);
    if (!property) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
        children: "Property not found"
    }, void 0, false, {
        fileName: "[project]/pages/property/[id].tsx",
        lineNumber: 10,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$property$2f$PropertyDetail$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            property: property
        }, void 0, false, {
            fileName: "[project]/pages/property/[id].tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/property/[id].tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9bda26e8._.js.map