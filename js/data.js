"use strict";
// H E A D E R section
    var navigationLinks = [
        {
            name: 'home',
            link: '#hero'
        },
        {
            name: 'about',
            link: '#about'
        },
        {
            name: 'services',
            link: '#services'
        },
        {
            name: 'education',
            link: '#education'
        },
        {
            name: 'portfolio',
            link: '#portfolio'
        },
        {
            name: 'testimonials',
            link: '#testimonials'
        },
        {
            name: 'blogs',
            link: '#blogs'
        },
        {
            name: 'contact',
            link: '#contact'
        }
    ];
    
// H E R O section
    var Icons = [
        {
            icon: 'facebook',
            link: '#'
        },
        {
            icon: 'twitter',
            link: '#'
        },
        {
            icon: 'dribbble',
            link: '#'
        },
        {
            icon: 'pinterest',
            link: '#'
        },
        {
            icon: 'instagram',
            link: '#'
        }
    ];
// A B O U T   M E section

// M Y   S E R V I C E S section
    var servicesInfo = [
        {
            icon:'html5',
            name:'Web development',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        },
        {
            icon:'laptop',
            name:'Website design',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        },
        {
            icon:'book',
            name:'Quick reports',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        },
        {
            icon:'mobile',
            name:'App development',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        },
        {
            icon:'camera-retro',
            name:'Creative photography',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        },
        {
            icon:'picture-o',
            name:'Graphic design',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        },
        {
            icon:'life-ring',
            name:'Online Support',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        },
        {
            icon:'line-chart',
            name:'Seo merketing',
            description:'The life of a designer is a life of fight. Just like a doctor fights against disease.'
        }
    ]
// E D U C A T I O N section
    var educationInfo = [
        {
            month:'July',
            day:'16',
            year:'2016',
            degree:'Bachelor degree certificate',
            place:'Harvard University',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae. Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae. Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae. Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'Nov',
            day:'23',
            year:'2014',
            degree:'Traineeship google developer',
            place:'California, United States',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'May',
            day:'09',
            year:'2013',
            degree:'High school certificate',
            place:'New York High School',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'Oct',
            day:'24',
            year:'2010',
            degree:'Specialized courses',
            place:'Designing Firm, California',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'April',
            day:'12',
            year:'2009',
            degree:'Secondary school certificate',
            place:'Manhattan Secondary School School',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        }
    ]
// S K I L L S section
    var fillBarInfo = [
        {
            title: 'HTML5, CSS',
            value: '98%',
        },
        {
            title: 'Adobe Photoshop',
            value: '86%',
        },
        {
            title: 'Bootstrap',
            value: '92%',
        },
        {
            title: 'PHP & MYSQL',
            value: '85%',
        },
        {
            title: 'Laravel',
            value: '96%',
        },
        {
            title: 'Wordpress',
            value: '78%',
        }
    ]
// E X P E R I E N C E section
    var experienceInfo = [
        {
            month:'Dec',
            day:'18',
            year:'2014',
            degree:'Frontend Developer',
            place:'Apple Inc',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'Jan',
            day:'03',
            year:'2013',
            degree:'UX/UI designer',
            place:'Web Agency',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'June',
            day:'21',
            year:'2010',
            degree:'WEB designer',
            place:'Web Agency',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'Feb',
            day:'14',
            year:'2009',
            degree:'Graphic designer',
            place:'Apple Inc',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        },
        {
            month:'Aout',
            day:'02',
            year:'2008',
            degree:'Freelancer',
            place:'Web Agency',
            outline:'Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem. Mauris magna sapien, pharetra consectetur fringilla vitae.'
        }
    ]
// S T A T I S T I C S section
    var statisticsInfo = [
        {
            icon:'check',
            score:'2084',
            name:'Projects finished'
        },
        {
            icon:'users',
            score:'380',
            name:'Satisfied clients'
        },
        {
            icon:'trophy',
            score:'218',
            name:'Award won'
        }
    ]

// M Y   P O R T F O L I O section
    var myWorkInfo = [
        {
            project_title: 'web',
            image: 'p-1.jpg',
        },
        {
            project_title: 'photography',
            image: 'p-2.jpg',
        },
        {
            project_title: 'design',
            image: 'p-3.jpg',
        },
        {
            project_title: 'music',
            image: 'p-4.jpg',
        },
        {
            project_title: 'photography',
            image: 'p-5.jpg',
        },
        {
            project_title: 'web',
            image: 'p-6.jpg',
        },
        {
            project_title: 'design',
            image: 'p-7.jpg',
        },
        {
            project_title: 'web',
            image: 'p-8.jpg',
        },
        {
            project_title: 'photography',
            image: 'p-9.jpg',
        },
        {
            project_title: 'web',
            image: 'p-10.jpg',
        },
        {
            project_title: 'design',
            image: 'p-11.jpg',
        },
        {
            project_title: 'web',
            image: 'p-12.jpg',
        },
        {
            project_title: 'photography',
            image: 'p-13.jpg',
        },
        {
            project_title: 'design',
            image: 'p-14.jpg',
        }
    ]
// T E S T I M O N I A L S section
    var testimonialsInfo = [
        {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis sed dapibus leo nec ornare diam. Sed commodo nibh 
            facilisis bibendum dolor feugiat.`,
            icon: `Java (1).png`,
            info: [`alwin jewel`, `front end developer`],
        },
        {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis sed dapibus leo nec ornare diam. Sed commodo nibh 
            facilisis bibendum dolor feugiat.`,
            icon: `js-flat.png`,
            info: [`amber cottle`, `web developer`],
        },
        {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis sed dapibus leo nec ornare diam. Sed commodo nibh 
            facilisis bibendum dolor feugiat.`,
            icon: `java.png`,
            info: [`mark smith`, `creative head`],
        },
        {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis sed dapibus leo nec ornare diam. Sed commodo nibh 
            facilisis bibendum dolor feugiat.`,
            icon: `pentagram.png`,
            info: [`rebecca johansson`, `project manager`],
        },
        {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis sed dapibus leo nec ornare diam. Sed commodo nibh 
            facilisis bibendum dolor feugiat.`,
            icon: `AWT-Plane.png`,
            info: [`john doe`, `ceo founder`],
        },
    ]
// M Y   B L O G S section
var blog = [
    {
        photo: 'blog-2.jpg',
        info: ['Technology', '15th July'],
        heading: 'Designed for Everyone, Everywhere',
        description: 'Lorem ipsum dolor sit amet eiusmod, do tempo commodo bibendumr incid idunt ut labore ...',
        personal_info: ['t-1.jpg', 'By', 'Jason Doe'],
        icon: [
            {
                name: 'share-alt',
                adress:'#' 
            },
            {
                name:'twitter',
                adress:'https://twitter.com/' 
            },
            {
                name:'google-plus',
                adress:'https://www.google.com' 
            },
            {
                name:'facebook',
                adress:'https://lt.wikipedia.org/wiki/Facebook' 
            }
        ]
    },
    {
        photo: 'blog-1.jpg',
        info: ['Web Design', '27th June'],
        heading: `Don't Just Be a Designer, Be a Good one`,
        description: 'Lorem ipsum dolor sit amet eiusmod, do tempo commodo bibendumr incid idunt ut labore ...',
        personal_info: ['t-1.jpg', 'By', 'Jason Doe'],
        icon: [
            {
                name: 'share-alt',
                adress:'#' 
            },
            {
                name:'twitter',
                adress:'https://twitter.com/' 
            },
            {
                name:'google-plus',
                adress:'https://www.google.com' 
            },
            {
                name:'facebook',
                adress:'https://lt.wikipedia.org/wiki/Facebook' 
            }
        ]
    },
    {
        photo: 'blog-3.jpg',
        info: ['Trending', '17th March'],
        heading: 'Creative and Innovative Navigation Designs',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, fuga! Lorem ipsum dolor sit amet eiusmod, do tempo commodo bibendumr incid idunt ut labore ...',
        personal_info: ['t-3.jpg', 'By', 'Dennis Ritchie'],
        icon: [
            {
                name: 'share-alt',
                adress:'#' 
            },
            {
                name:'twitter',
                adress:'https://twitter.com/' 
            },
            {
                name:'google-plus',
                adress:'https://www.google.com' 
            },
            {
                name:'facebook',
                adress:'https://lt.wikipedia.org/wiki/Facebook' 
            }
        ]
    },
]
// C O N T A C T   M E  section
    var contactForm = {
        fields: [
            {
                type: 'input',
                attr: [
                    {
                        name: 'type',
                        value: 'text'
                    },
                    {
                        name: 'value',
                        value: ''
                    },
                    {
                        name: 'placeholder',
                        value: 'Name'
                    }
                ],
                description: `You know what means "Name", don't you?`,
                className: ['col-6'],
                required: true,
            },

            {
                type: 'input',
                attr: [
                    {
                        name: 'type',
                        value: 'email'
                    },
                    {
                        name: 'value',
                        value: '',
                    },
                    {
                        name: 'placeholder',
                        value: 'Email'
                    }
                ],
                description: 'I expect an e-mail, darling!',
                className: ['col-6'],
                required: true
            },
            {
                type: 'textarea',
                attr: [
                    {
                        name: 'placeholder',
                        value: 'Message'
                    }
                ],
                description: 'Darling, please text something!',
                value: '',
                className: ['col-12'],
                required: true
            },
        ],
                actions: [
                    {
                        type: 'submit',
                        text: 'Send message'
                    }
                ]
            }

// B O T T O M   N A V I G A T I O N section
    var footerIcons = [
        {
            icon: 'facebook',
            link: '#'
        },
        {
            icon: 'twitter',
            link: '#'
        },
        {
            icon: 'pinterest',
            link: '#'
        },
        {
            icon: 'instagram',
            link: '#'
        }
    ];

// F O O T E R  section






