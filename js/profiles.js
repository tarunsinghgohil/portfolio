/*
 * Profile content for index.html — one entry per resume.
 *
 *   frontend   -> Tarun-Singh-Gohil-Frontend-Resume-2026.pdf     (tab: Frontend)
 *   fullstack  -> Tarun-Singh-Gohil-Full-Stack-Resume-2026.pdf   (tab: Full stack, track: MERN)
 *   python-ai  -> Tarun-Singh-Gohil-Python-AI-Resume-2026.pdf    (tab: Full stack, track: Python & AI)
 *   product    -> Tarun-Singh-Gohil-PM-Resume-2026.pdf           (tab: Product manager)
 *
 * Resume sections are copied verbatim: summary, jobs[].points, jobs[].extra,
 * genai.points, projects, skillGroups, education. Keep them in sync with the
 * PDFs. Everything else (hero copy, stats, caps, pipeline, tools, closing) is
 * website copy and can be edited freely.
 *
 * Text conventions (rendered by index.html):
 *   **text**  -> <strong>  (mirrors bold phrases in the PDF)
 *   Every other character is HTML-escaped, so plain "&" and "<" are safe.
 *
 * Field reference: see AGENTS.md -> "Profile schema".
 */
window.PROFILE_ORDER = ['frontend', 'fullstack', 'python-ai', 'product'];

window.PROFILES = {
  /* ------------------------------------------------------------------ */
  /* FRONTEND — Tarun-Singh-Gohil-Frontend-Resume-2026.pdf               */
  /* ------------------------------------------------------------------ */
  frontend: {
    tab: 'frontend',
    track: null,
    id: '01',
    star: '82,233,255',
    label: 'Frontend portfolio / 2026',
    title: 'Tarun Singh Gohil | Frontend Developer',
    headline: 'Frontend Developer | React.js | UI/UX',
    role: 'Frontend developer.',
    console: 'Frontend Developer',
    mode: 'React.js / UI UX / Design systems',
    focus: 'Interface engineering',
    one: 'React 19',
    two: 'UI Systems',
    years: '6+ years crafting digital products',
    meta: 'React / UI systems / AI workflows',
    resume: 'Tarun-Singh-Gohil-Frontend-Resume-2026.pdf',
    portfolio: true,
    hero: 'Frontend Developer with 6+ years of experience building responsive, scalable and user-focused web applications with React.js, TypeScript, modern UI systems, REST APIs and performance-focused delivery.',
    stats: [
      ['6+', 'years of experience'],
      ['60+', 'sites & applications'],
      ['12+', 'high-traffic products'],
      ['9+', 'healthcare modules'],
    ],
    manifestTitle: 'Clarity is a feature.',
    manifest:
      'The strongest product experiences make difficult things feel obvious. I bring together user context, visual hierarchy and resilient engineering to make that happen.',
    signal: 'Signal: thoughtful interface engineering',

    summary:
      'Frontend Developer with over 6 years of professional experience building responsive, scalable and user-focused web applications, with deep hands-on expertise in React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Redux Toolkit, React Router, REST APIs and modern UI development. Experienced in reusable component architecture, performance optimization, responsive design, cross-browser compatibility, API integration, debugging and enterprise workflows. Proficient in leveraging AI-powered tools such as GitHub Copilot, Claude, Cursor and ChatGPT to accelerate development and improve code quality. Understanding of modern Front-end / Backend / Database ecosystems, principles and performance optimization. Proven track record of managing multiple high-traffic sites and delivering enterprise modules for healthcare and retail platforms.',

    capKicker: 'Capability matrix',
    capTitle: 'From design intent to a dependable interface.',
    capCopy:
      'A focused frontend toolkit for shipping polished, accessible product experiences without compromising the systems beneath them.',
    caps: [
      [
        'React systems',
        'Scalable component architecture for large, evolving products - thoughtful states, reusable patterns and deliberate data flow.',
        ['React 19', 'TypeScript', 'Hooks', 'Redux Toolkit'],
      ],
      [
        'Precision UI',
        'Interfaces that respect the design intent while staying responsive, accessible and coherent on every screen.',
        ['Figma to UI', 'Tailwind', 'MUI', 'A11y'],
      ],
      [
        'Data-rich products',
        'Dashboards, visualisations and operational workflows that help users see what matters and act with confidence.',
        ['Chart.js', 'Recharts', 'Tables', 'Filters'],
      ],
      [
        'Connected experiences',
        'Reliable frontend data flows across REST services, authentication boundaries and complex role-based journeys.',
        ['REST APIs', 'Axios', 'JWT', 'RBAC'],
      ],
      [
        'Performance craft',
        'A faster perceived experience through code splitting, lazy loading, efficient rendering and measured iteration.',
        ['Lighthouse', 'Caching', 'DevTools', 'Web Vitals'],
      ],
      [
        'Product partnership',
        'Comfortable at the intersection of design, engineering and business - from ambiguity to a shippable experience.',
        ['Agile', 'Git', 'QA', 'AI-assisted dev'],
      ],
    ],

    experienceTitle: 'Built through increasingly complex products.',
    experienceCopy:
      'Six years across product interfaces, enterprise systems, front-to-back features and the design discipline that makes them feel effortless.',
    jobs: [
      {
        dates: 'Aug 2025 – Aug 2026',
        title: 'Lead Developer',
        company: 'Growit.ai Technology Private Limited · Jaipur',
        points: [
          'Led frontend development for an **AI-powered, multi-tenant Hospital Information Management System (HIMS)**, owning React-based UI architecture and delivery across complex, role-based healthcare workflows.',
          'Architected and developed **scalable, reusable React.js components and modules** using **React 19, TypeScript, JavaScript (ES6+), React Hooks, Redux Toolkit, React Router and Tailwind CSS**, following modern component and frontend architecture patterns.',
          'Built responsive, accessible and reusable enterprise interfaces for **Patient Management, OPD/IPD, Emergency, Laboratory, Radiology, Pharmacy, Billing, Inventory, Analytics and Reporting**, supporting multiple user roles and workflows.',
          'Integrated **hundreds of REST API endpoints** using **Axios, JSON and asynchronous programming**, implementing frontend data flows for JWT authentication, RBAC, validation, error handling and complex API-driven workflows with Django REST services.',
          'Designed and maintained **client-side state and data management** using **Redux Toolkit, Redux, React Redux, Context API and modern data-fetching patterns**, ensuring predictable state architecture across large-scale applications.',
          'Developed complex **forms, validation flows, dashboards, tables, reusable UI patterns and role-based interfaces**, with a strong focus on responsive design, usability and maintainability.',
          'Implemented **AI-assisted frontend experiences** including OCR-driven document workflows, intelligent user flows, analytics dashboards and voice-enabled interfaces, integrating AI capabilities into practical enterprise workflows.',
          'Improved application performance and maintainability through **code splitting, lazy loading, component reuse, caching, API optimization, efficient rendering and browser-level debugging/profiling**.',
          'Developed and maintained UI systems using **Tailwind CSS, Material UI, Bootstrap, Sass/LESS and reusable component-library patterns**, translating product and design requirements into production-ready interfaces.',
          'Collaborated closely with **product managers, designers, QA engineers and backend developers** to build, test, debug and release frontend features through Agile/Scrum workflows, Git-based development and code reviews.',
          {
            text: 'Key project contributions include:',
            sub: [
              '**Zonov Hospital Management System:** Developed enterprise modules, integrated AI features, and optimized performance for a multi-tenant application.',
              '**RetailX ERP:** Drove the creation of POS Billing, Inventory Management, and Reporting modules, focusing on responsive and scalable architecture.',
              '**Charge My EV:** Developed features for an EV charging platform utilizing React Native, enhancing mobile interfaces and real-time communication capabilities.',
            ],
          },
        ],
      },
      {
        dates: 'Feb 2022 – Jul 2025',
        title: 'UI Developer',
        company: 'Formidium India Private Limited · Jaipur',
        points: [
          'Developed and maintained **production-grade React.js applications** using scalable, reusable and performance-oriented component architecture for enterprise and customer-facing products.',
          'Built **responsive, pixel-perfect and accessible user interfaces** by translating Figma designs into production-ready applications using **React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI and Bootstrap**.',
          'Designed and maintained **reusable UI components, custom hooks and modular frontend architecture**, improving development consistency, maintainability and feature scalability across multiple applications.',
          'Implemented complex **client-side state management and application workflows** using **Redux, Redux Toolkit and Context API**, with structured state architecture for large-scale frontend applications.',
          'Integrated **custom and third-party REST APIs** using **Axios, JSON and asynchronous JavaScript**, building dynamic, data-driven interfaces and collaborating with backend teams on API contracts, payload structures and response performance.',
          'Managed and optimized **12+ high-traffic production websites and applications**, improving frontend performance, scalability, reliability and overall user experience across different products.',
          'Enhanced application performance using **code splitting, lazy loading, caching, API optimization and efficient component rendering**, while leveraging **Chrome DevTools** for debugging, profiling and performance analysis.',
          'Developed interactive **dashboards, analytics interfaces, product pages and customer-facing applications** using **Chart.js, Recharts and reusable visualization components** to present KPIs, trends, financial data, operational metrics and business insights.',
          'Built responsive interfaces with strong attention to **cross-browser compatibility, mobile responsiveness, usability and UI consistency** across different screen sizes and devices.',
          'Proposed and implemented **UI/UX improvements** based on modern frontend and design-system principles, improving visual consistency, usability, customer experience and conversion-focused product flows.',
          'Worked extensively with **HubSpot CRM and marketing/product interfaces**, developing and maintaining reusable frontend patterns, landing pages and customer-facing experiences.',
          'Collaborated with backend engineers on **API performance, database/query optimization and response-time improvements**, contributing frontend insights to improve overall application efficiency.',
          'Contributed to **frontend testing, debugging and issue resolution**, working with development and QA teams to identify and resolve browser, UI, API and application-level issues.',
          'Participated in **Git-based development, pull requests, code reviews, deployment workflows and continuous application improvements** within Agile/Scrum teams.',
          'Worked closely with **UI/UX designers, backend developers, QA engineers and product managers** to translate business requirements and design specifications into scalable, production-ready frontend features.',
          'Maintained **clean, reusable, maintainable and well-documented code**, following frontend best practices, coding standards and component-driven development principles.',
          'Leveraged **AI-assisted development tools** to improve coding productivity, debugging efficiency, documentation and overall feature delivery speed.',
        ],
      },
      {
        dates: 'Nov 2020 – Feb 2022',
        title: 'Web Developer',
        company: 'i3Techs · Jaipur',
        points: [
          'Developed and maintained **50+ responsive, production websites and web applications**, focusing on frontend performance, usability, accessibility, SEO, reliability and cross-browser compatibility.',
          'Converted **PSD and Figma designs into pixel-accurate, responsive production interfaces** using **HTML5, CSS3, JavaScript, Bootstrap and React**, following mobile-first and component-based frontend practices.',
          'Built reusable **UI components, layout patterns and frontend code structures** to improve consistency, maintainability and development efficiency across multiple projects.',
          'Designed and implemented modern, user-focused website layouts and visual interfaces using **Adobe Photoshop**, with close attention to typography, spacing, responsive behaviour and visual consistency.',
          'Customized **WordPress themes and plugins** and developed customer-facing interfaces using **Elementor**, while maintaining SEO-friendly markup, responsive layouts and consistent user experiences.',
          'Improved website performance through **image optimization, script optimization, caching, asset optimization and frontend code improvements**, contributing to faster page load times and better usability.',
          'Ensured **cross-browser and cross-device compatibility** across desktop, tablet and mobile screen sizes, resolving UI and browser-specific issues during development and testing.',
          'Implemented responsive **landing pages, product pages and business websites** from design specifications while maintaining consistency with branding and modern UI/UX principles.',
          'Applied frontend best practices for **semantic HTML, CSS organization, responsive design, accessibility and reusable code**, producing clean and maintainable implementations.',
          'Collaborated with designers and clients to translate business and design requirements into production-ready web interfaces and resolve UI/UX issues.',
          'Worked with **Git/version-control workflows, debugging, deployment support and production maintenance** across multiple client websites and applications.',
          'Gained practical exposure to **API-driven integrations, server-side workflows and backend collaboration**, primarily from a frontend integration and data-consumption perspective.',
        ],
      },
      {
        dates: 'May 2019 – Jul 2019',
        title: 'Trainee in Web Development',
        company: 'i3Techs · Jaipur',
        points: [
          'Gained hands-on experience with modern web development tools, design workflows, and methodologies across multiple projects.',
          'Designed visually engaging web interfaces, graphics, and mockups using Adobe XD, ensuring alignment with branding and project goals.',
          'Contributed to UI/UX design initiatives, emphasizing usability, visual consistency, and modern design principles to enhance user engagement.',
        ],
      },
    ],

    genai: null,

    projectKicker: 'Selected project highlights',
    projectTitle: 'Systems with real-world consequences.',
    projectCopy:
      'Work across healthcare, operations and mobility - shaped around complex workflows, live data and the people who use them daily.',
    projects: [
      {
        id: '01 / HEALTHCARE',
        name: 'Hospital Information Management System',
        type: 'Zonov · AI-powered, multi-tenant HIMS',
        text: 'React + JavaScript enterprise frontend with multi-tenant workflows, Redux Toolkit, Tailwind CSS, REST APIs, JWT/RBAC, reusable modules, dashboards and performance optimization.',
        points: [
          'Developed enterprise modules, integrated AI features, and optimized performance for a multi-tenant application.',
        ],
      },
      {
        id: '02 / ENTERPRISE',
        name: 'RetailX ERP',
        type: 'POS, inventory & reporting',
        text: 'React-based POS billing, inventory and reporting modules with responsive workflows and data-driven interfaces.',
        points: [
          'Drove the creation of POS Billing, Inventory Management, and Reporting modules, focusing on responsive and scalable architecture.',
        ],
      },
      {
        id: '03 / MOBILITY',
        name: 'Charge My EV',
        type: 'EV charging platform',
        text: 'Developed features for an EV charging platform utilizing React Native, enhancing mobile interfaces and real-time communication capabilities.',
      },
      {
        id: '04 / PLATFORMS',
        name: 'Enterprise Web Platforms',
        type: 'Production websites & applications',
        text: 'Production websites and applications requiring reusable components, responsive UI, REST integration, browser compatibility, debugging, Git-based delivery and performance tuning.',
      },
    ],

    skillTitle: 'Deep frontend, deliberately organised.',
    skillCopy:
      'From the component boundary to release workflows, this is the broader toolkit used to build responsive enterprise and customer-facing experiences.',
    skillGroups: [
      [
        'Frontend',
        ['React.js', 'React 19', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'React Hooks', 'Component Lifecycle', 'Reusable Components', 'React Router', 'Next.js', 'Responsive Web Design', 'Accessibility', 'Cross-Browser Compatibility'],
      ],
      [
        'State & Data Management',
        ['Redux Toolkit', 'Redux', 'React Redux', 'Context API', 'Zustand', 'TanStack Query (React Query)', 'State Architecture', 'Form State Management & Validation'],
      ],
      [
        'UI / Styling & Design',
        ['Tailwind CSS', 'Material UI (MUI)', 'Bootstrap', 'Sass', 'LESS', 'Radix UI', 'Lucide React', 'React Icons', 'Figma', 'Adobe XD', 'UI/UX Principles', 'Design Systems', 'Component Library Patterns', 'Figma-to-UI Implementation', 'Accessibility-Focused UI Development'],
      ],
      [
        'APIs & Integration',
        ['REST APIs', 'REST API Architecture', 'GraphQL', 'JSON', 'Axios', 'Asynchronous Programming', 'Third-Party API Integration', 'API Integration', 'JWT Authentication', 'Role-Based Access Control (RBAC)', 'Payment Integrations', 'Healthcare Technology Integrations', 'WhatsApp Business API'],
      ],
      [
        'Build, Tooling & Testing',
        ['Vite', 'Webpack', 'Babel', 'ESLint', 'Chrome DevTools', 'Browser Debugging', 'Debugging', 'Performance Profiling', 'Vitest', 'Jest', 'React Testing Library', 'Cypress', 'Playwright', 'End-to-End (E2E) Testing'],
      ],
      [
        'Backend / Server-Side',
        ['Python 3.11', 'Django', 'Django REST Framework', 'Node.js', 'Express.js'],
      ],
      [
        'Databases & Caching',
        ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Database Fundamentals'],
      ],
      [
        'Cloud & Infrastructure',
        ['AWS', 'AWS S3', 'Google Cloud', 'Vercel', 'Docker', 'Docker Compose', 'Linux', 'Cloud Deployment Fundamentals', 'Frontend Deployment', 'Release Workflows', 'CI/CD Workflows'],
      ],
      [
        'Version Control & Engineering',
        ['Git', 'GitHub', 'GitLab', 'Code Reviews', 'Agile', 'Scrum', 'Software Debugging', 'Release Management'],
      ],
      [
        'AI / Automation & Emerging Technologies',
        ['OpenAI GPT Models', 'Deepgram Speech-to-Text', 'Whisper', 'Faster-Whisper', 'OCR Workflows', 'AI-Assisted Development Tools (GitHub Copilot, Claude, Cursor, ChatGPT)'],
      ],
      [
        'Additional Engineering Knowledge',
        ['Frontend Architecture', 'Component Architecture', 'Design-System Architecture', 'API Integration Patterns', 'Authentication & Authorization', 'Deployment Support'],
      ],
    ],

    archTitle: 'Design for the next decision.',
    archCopy:
      'I work through a connected system: understand the user journey, create a durable component model, then make every state and hand-off predictable.',
    pipeline: [
      ['Frame', 'User flow, hierarchy & interface intent'],
      ['Compose', 'Reusable components & resilient states'],
      ['Refine', 'Accessible, fast & production-ready'],
    ],
    toolsTitle: 'Daily toolkit',
    tools: ['React 19', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Figma', 'REST APIs', 'Chart.js', 'Playwright'],

    education: [
      ['Bachelor’s Degree in Computer Science Engineering', 'Global Institute of Technology, Jaipur', 'Aug 2016 – Aug 2020'],
      ['Senior Secondary Education (Science)', 'Anand Public School, Sawai Madhopur', 'Aug 2016'],
    ],
    languages: ['English', 'Hindi'],

    closeTitle: 'Have a product that deserves more than a template?',
    closeCopy:
      'I am drawn to ambitious teams solving complicated problems with care. If that sounds like your next project, let us connect.',
  },

  /* ------------------------------------------------------------------ */
  /* FULL STACK (MERN) — Tarun-Singh-Gohil-Full-Stack-Resume-2026.pdf    */
  /* ------------------------------------------------------------------ */
  fullstack: {
    tab: 'fullstack',
    track: 'MERN stack',
    id: '02',
    star: '124,245,190',
    label: 'Full stack portfolio / 2026',
    title: 'Tarun Singh Gohil | Full Stack Developer (MERN)',
    headline:
      'Full Stack Developer (MERN) | React.js · Node.js · Express.js · MongoDB | UI/UX',
    role: 'Full stack developer.',
    console: 'Full Stack Developer',
    mode: 'MERN / APIs / Product systems',
    focus: 'MERN architecture',
    one: 'MERN Stack',
    two: 'API Systems',
    years: '5+ years shipping production systems',
    meta: 'MERN / API systems / secure data flows',
    resume: 'Tarun-Singh-Gohil-Full-Stack-Resume-2026.pdf',
    portfolio: false,
    hero: 'Full Stack Developer with 5+ years building and shipping production MERN applications with TypeScript, RESTful APIs, modern UI/UX, secure workflows and database-backed product features.',
    stats: [
      ['5+', 'years in full-stack delivery'],
      ['60+', 'sites & applications'],
      ['9+', 'modules shipped end-to-end'],
      ['100s', 'REST endpoints integrated'],
    ],
    manifestTitle: 'Every useful interface has a dependable system behind it.',
    manifest:
      'Great products are a conversation between the screen, the service and the data. I design each layer to make that conversation fast, secure and understandable.',
    signal: 'Signal: frontend, services & data in sync',

    summary:
      'Full Stack Developer with 5+ years of experience building and shipping production web applications on the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript, RESTful APIs and modern UI/UX. Currently Lead Developer on a multi-tenant, AI-powered Hospital Information Management System, owning React.js frontend architecture while building and integrating backend services, authentication and role-based access control. Delivered enterprise modules across healthcare, retail/ERP and EV-charging platforms, and has built or maintained 60+ production websites and applications. Strong in reusable component architecture, REST API integration, database-backed features and frontend performance optimization, with day-to-day use of AI-assisted development tools (GitHub Copilot, Claude, Cursor, ChatGPT).',

    capKicker: 'Capability matrix',
    capTitle: 'Full-stack delivery, without losing product detail.',
    capCopy:
      'MERN-first engineering that pairs thoughtful frontend architecture with secure APIs, well-modelled data and real operational workflows.',
    caps: [
      [
        'MERN delivery',
        'Production features across React, Node.js, Express and MongoDB - composed as useful systems rather than disconnected layers.',
        ['MongoDB', 'Express', 'React', 'Node.js'],
      ],
      [
        'Service design',
        'REST APIs with validation, pagination, error handling and practical contracts that make integrations predictable.',
        ['RESTful APIs', 'Mongoose', 'Axios', 'JSON'],
      ],
      [
        'Secure workflows',
        'Authentication and authorization designed around real user roles, protected routes and permission-driven product behaviour.',
        ['JWT', 'RBAC', 'Validation', 'Tenants'],
      ],
      [
        'Data-driven UI',
        'Dashboards and operational products that join API data, visualisation, filtering and decision-ready interface design.',
        ['Redux', 'Chart.js', 'Tables', 'Analytics'],
      ],
      [
        'System performance',
        'Better end-user performance through rendering discipline, API optimisation, caching and targeted profiling across the stack.',
        ['Caching', 'Lighthouse', 'Lazy load', 'Docker'],
      ],
      [
        'Integrated engineering',
        'MERN as the core, with practical contributions to Django REST integrations, cloud deployment and AI-assisted workflows.',
        ['Django REST', 'AWS', 'Git', 'AI tooling'],
      ],
    ],

    experienceTitle: 'Built through increasingly complex products.',
    experienceCopy:
      'Five-plus years of MERN delivery across product interfaces, backend services, secure workflows and database-backed features.',
    jobs: [
      {
        dates: 'Aug 2025 – Aug 2026',
        title: 'Lead Developer',
        company: 'Growit.ai Technology Private Limited · Jaipur',
        tagline:
          'Full-stack (MERN) development and frontend ownership for AI-powered enterprise SaaS products.',
        points: [
          'Led full-stack development of a scalable, multi-tenant, AI-powered Hospital Information Management System (HIMS/HMS), with primary ownership of the React.js frontend and Node.js/Express.js services, while also contributing to Python/Django-based backend integrations.',
          'Architected and developed enterprise-grade applications using the MERN stack — MongoDB, Express.js, React.js and Node.js — with React 19, TypeScript, JavaScript (ES6+), React Hooks, React Router, Redux Toolkit and Tailwind CSS, following scalable component and frontend architecture patterns.',
          'Delivered 9+ complex healthcare modules end to end, including Patient Management, OPD, IPD, Emergency, Laboratory, Radiology, Pharmacy, Billing, Inventory, Analytics, Reporting and NABH Compliance, covering API integration, data flows, business workflows and production-ready UI.',
          'Designed and developed reusable React component architecture and UI systems, including forms, data tables, dashboards, filters, validation flows and role-based interfaces, using Redux Toolkit, Redux, React Redux, Context API, Tailwind CSS, Material UI and Bootstrap to maintain consistency and accelerate feature development.',
          'Developed and integrated Node.js/Express.js REST APIs with MongoDB/Mongoose, implementing backend services, API flows, request validation, pagination, error handling, authentication workflows and data operations for large-scale enterprise features.',
          'Worked extensively with hundreds of REST API endpoints, integrating React applications with Node.js/Express.js and Python/Django REST Framework services using Axios, JSON and asynchronous programming, while collaborating with backend engineers on API contracts, payload structures, response handling and performance optimization.',
          'Implemented secure authentication and authorization mechanisms using JWT, protected routes and Role-Based Access Control (RBAC), supporting multiple hospital tenants, user roles and complex permission-driven workflows across the application.',
          'Contributed hands-on to Python-based backend development and integrations using Python, Django and Django REST Framework, including API consumption, business-workflow integration, data handling and integration with the React frontend, while maintaining MERN as the primary application stack.',
          'Improved application performance and scalability through code splitting, lazy loading, reusable component architecture, memoization, caching strategies, efficient rendering, API optimization and bundle optimization, while using Chrome DevTools, Lighthouse and performance profiling to identify and resolve bottlenecks.',
          'Collaborated closely with product managers, UI/UX designers, QA engineers and backend developers throughout Agile/Scrum sprints, participating in technical discussions, code reviews, debugging, release activities and production issue resolution.',
          'Managed Git-based development and deployment workflows, including branching, pull requests, code reviews, release coordination and frontend/backend deployment support across cloud environments.',
        ],
      },
      {
        dates: 'Feb 2022 – Jul 2025',
        title: 'UI Developer',
        company: 'Formidium India Private Limited · Jaipur',
        points: [
          'Developed and maintained production-grade MERN stack applications using React.js, JavaScript (ES6+), TypeScript, Node.js, Express.js and MongoDB, with primary ownership of frontend architecture and UI development across multiple enterprise and customer-facing products.',
          'Architected scalable, reusable React applications using modular components, custom hooks, Redux, Redux Toolkit and Context API, building maintainable frontend systems for multiple products, dashboards, business workflows and high-traffic web applications.',
          'Built and integrated Node.js / Express.js backend services and REST APIs with React applications, working with MongoDB for data-driven features, API workflows and application functionality while collaborating with backend teams on API contracts, data structures and performance.',
          'Developed responsive, pixel-perfect and accessible interfaces by converting Figma designs into production-ready applications using React.js, TypeScript, Tailwind CSS, Material UI, Bootstrap, HTML5 and CSS3, ensuring consistent UI/UX across desktop, tablet and mobile devices.',
          'Worked across multiple MERN-based projects to develop interactive dashboards, analytics interfaces, product pages and business applications, integrating REST APIs and visualization libraries such as Chart.js and Recharts to present KPIs, financial data, operational metrics and real-time business insights.',
          'Managed and optimized 12+ high-traffic production websites and applications, improving performance, scalability and reliability through code splitting, lazy loading, caching, API optimization, efficient rendering and build optimization using Webpack.',
          'Integrated custom and third-party REST APIs using Axios, JSON and asynchronous JavaScript, implementing dynamic data flows, error handling and frontend-backend communication while contributing to API response-time and database/query performance improvements.',
          'Built and maintained HubSpot CRM/CMS marketing pages, product pages and customer-facing interfaces, while also contributing UI/UX improvements, reusable design patterns and conversion-focused experiences across multiple web properties.',
          'Collaborated with backend engineers, UI/UX designers, QA engineers and product managers in Agile/Scrum teams, contributing to Git-based development, code reviews, debugging, testing, deployment workflows and continuous improvements across MERN applications.',
          'Leveraged AI-assisted development tools to improve coding productivity, debugging, documentation and feature delivery while maintaining clean, reusable, well-documented code and frontend engineering best practices.',
        ],
      },
      {
        dates: 'Nov 2020 – Feb 2022',
        title: 'Web Developer',
        company: 'i3Techs · Jaipur',
        points: [
          'Developed and maintained 50+ production websites and web applications, with a strong focus on HTML5, CSS3, JavaScript, Bootstrap and React.js, building responsive, performant and user-friendly interfaces across multiple client projects.',
          'Converted PSD and Figma designs into pixel-perfect, responsive production interfaces, applying mobile-first development, reusable UI patterns, semantic HTML, modern CSS practices and component-based frontend development.',
          'Built reusable React.js UI components, layouts and frontend structures for selected web applications, improving consistency, maintainability and development efficiency across projects.',
          'Developed responsive landing pages, product pages, business websites and customer-facing web interfaces, ensuring accessibility, usability, SEO-friendly markup and consistent experiences across desktop, tablet and mobile devices.',
          'Worked on API-driven frontend integrations, consuming backend data and collaborating on server-side workflows to connect web interfaces with application functionality and dynamic content.',
          'Customized WordPress themes and plugins and developed customer-facing websites using Elementor, while implementing responsive layouts, SEO best practices, reusable patterns and client-specific functionality.',
          'Ensured cross-browser and cross-device compatibility, identifying and resolving UI, rendering, responsiveness and browser-specific issues during development, testing and production maintenance.',
          'Designed and implemented modern visual interfaces using Adobe Photoshop and Adobe XD, collaborating with designers and clients to translate business requirements, branding guidelines and design specifications into production-ready experiences.',
          'Applied frontend engineering best practices across projects, including responsive design, accessibility, reusable code, CSS organization, debugging, Git-based version control and deployment support.',
        ],
      },
      {
        dates: 'May 2019 – Jul 2019',
        title: 'Web Development Trainee',
        company: 'i3Techs · Jaipur',
        points: [
          'Gained practical exposure to web development, UI/UX design workflows, responsive web design and modern frontend development practices across multiple client projects.',
          'Designed web interfaces, graphics and mockups using Adobe XD and Photoshop, focusing on visual consistency, typography, spacing, usability and alignment with project requirements.',
          'Contributed to UI/UX design and frontend implementation activities, developing an understanding of responsive layouts, design systems, usability principles and production-oriented web workflows.',
        ],
      },
    ],

    genai: null,

    projectKicker: 'Key projects',
    projectTitle: 'From database-backed features to useful products.',
    projectCopy:
      'Experience working through frontend, services, auth and data flows for platforms where reliability and workflow fit are non-negotiable.',
    projects: [
      {
        id: '01 / HEALTHCARE',
        name: 'Zonov — Multi-Tenant Hospital Management System (HIMS/HMS)',
        type: 'Multi-tenant MERN platform',
        text: 'End-to-end enterprise modules across React, Node/Express, MongoDB and Django REST integrations, including JWT, RBAC and AI/OCR workflows.',
        stack: ['React.js', 'React 19', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Django REST Framework', 'REST APIs', 'JWT', 'RBAC', 'AI/OCR'],
      },
      {
        id: '02 / OPERATIONS',
        name: 'RetailX ERP — POS Billing, Inventory & Reporting',
        type: 'POS, inventory & reporting',
        text: 'React and TypeScript workflow delivery with REST API data flows for POS billing, inventory management and operational reporting.',
        stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      },
      {
        id: '03 / MOBILITY',
        name: 'Charge My EV — EV Charging Platform',
        type: 'Web + mobile product',
        text: 'Product feature development spanning React Native and MERN services for responsive, connected charging experiences.',
        stack: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      },
    ],

    skillTitle: 'A practical, end-to-end engineering stack.',
    skillCopy:
      'MERN is the core, supported by frontend systems, databases, quality tooling, cloud fundamentals and the integrations needed by real products.',
    skillGroups: [
      [
        'Frontend',
        ['React.js', 'React 19', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'React Hooks', 'Component Lifecycle', 'Reusable Components', 'React Router', 'Next.js', 'Responsive Web Design', 'Responsive Design', 'Accessibility', 'Cross-Browser Compatibility'],
      ],
      [
        'State & Data Management',
        ['Redux', 'Redux Toolkit', 'React Redux', 'Context API', 'Zustand', 'TanStack Query (React Query)', 'State Architecture', 'Form State Management & Validation'],
      ],
      [
        'UI / Styling & Design',
        ['Tailwind CSS', 'Material UI (MUI)', 'Bootstrap', 'Sass', 'LESS', 'jQuery', 'Radix UI', 'Lucide React', 'React Icons', 'Figma', 'Adobe XD', 'UI/UX Principles', 'Design Systems', 'Component Library Patterns', 'Figma-to-UI Implementation', 'Figma/PSD to Pixel-Perfect UI Development', 'Accessibility-Focused UI Development', 'Wireframing'],
      ],
      [
        'APIs & Integration',
        ['REST APIs', 'RESTful APIs', 'REST API Architecture', 'GraphQL', 'JSON', 'Axios', 'Asynchronous Programming', 'Third-Party API Integration', 'API Integration', 'JWT Authentication', 'Role-Based Access Control (RBAC)', 'Payment Integrations', 'Healthcare Technology Integrations', 'WhatsApp Business API'],
      ],
      [
        'Build, Tooling & Testing',
        ['Vite', 'Webpack', 'Babel', 'npm', 'Yarn', 'ESLint', 'Chrome DevTools', 'Browser Debugging', 'Debugging', 'Performance Profiling', 'Vitest', 'Jest', 'React Testing Library', 'Cypress', 'Playwright', 'End-to-End (E2E) Testing'],
      ],
      [
        'Backend / Server-Side',
        ['Node.js', 'Express.js', 'Python', 'Python 3.11', 'Django', 'Django REST Framework'],
      ],
      [
        'Databases & Caching',
        ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'Redis', 'Database Fundamentals', 'Caching Strategies'],
      ],
      [
        'Cloud & Infrastructure',
        ['AWS', 'AWS S3', 'Google Cloud', 'Vercel', 'Docker', 'Docker Compose', 'Linux', 'Cloud Deployment Fundamentals', 'Frontend Deployment', 'Deployment Workflows', 'Release Workflows', 'CI/CD Workflows'],
      ],
      [
        'Performance & SEO',
        ['Code Splitting', 'Lazy Loading', 'Bundle Optimization', 'Core Web Vitals', 'Lighthouse', 'Performance Profiling', 'On-Page Search Engine Optimization (SEO)'],
      ],
      [
        'CMS & Platforms',
        ['WordPress', 'WordPress Theme and Plugin Customization', 'Elementor', 'HubSpot CRM', 'HubSpot CMS'],
      ],
      [
        'Version Control & Engineering',
        ['Git', 'GitHub', 'GitLab', 'Git-Based Version Control', 'Code Reviews', 'Agile', 'Scrum', 'Software Debugging', 'Release Management', 'Deployment Support', 'Frontend Architecture', 'Component Architecture', 'Design-System Architecture', 'API Integration Patterns', 'Authentication & Authorization'],
      ],
      [
        'AI / Automation & Emerging Technologies',
        ['OpenAI GPT Models', 'Deepgram Speech-to-Text', 'Whisper', 'Faster-Whisper', 'OCR Workflows', 'AI-Assisted Development Tools (GitHub Copilot, Claude, Cursor, ChatGPT)'],
      ],
    ],

    archTitle: 'From intent to production, end to end.',
    archCopy:
      'I build with clean contracts between the interface, service and data layers - so a product can be extended with confidence after the first release.',
    pipeline: [
      ['Experience', 'React UI, state & product workflows'],
      ['Services', 'Express APIs, auth & business rules'],
      ['Data', 'MongoDB models, queries & operations'],
    ],
    toolsTitle: 'Full-stack toolkit',
    tools: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'TypeScript', 'Docker', 'Django REST'],

    education: [
      ['Bachelor’s Degree in CSE', 'Global Institute of Technology, Jaipur', 'Aug 2016 – Aug 2020'],
      ['Senior Secondary Education (Science)', 'Anand Public School, Sawai Madhopur', 'Aug 2016'],
    ],
    languages: ['English', 'Hindi'],

    closeTitle: 'Let us build the whole product loop.',
    closeCopy:
      'From a sharp interface to a secure API and the data underneath, I enjoy building the connected systems that make ambitious products real.',
  },

  /* ------------------------------------------------------------------ */
  /* FULL STACK (PYTHON & AI) — Tarun-Singh-Gohil-Python-AI-Resume-2026  */
  /* (source file: Tarun_Singh_Gohil_Senior_Resume_2026.pdf)             */
  /* ------------------------------------------------------------------ */
  'python-ai': {
    tab: 'fullstack',
    track: 'Python & AI',
    id: '03',
    star: '255,211,110',
    label: 'Python & AI portfolio / 2026',
    title: 'Tarun Singh Gohil | Senior Python / Full-Stack AI Engineer',
    headline: 'Senior Python / Full-Stack AI Engineer',
    role: 'Python & AI engineer.',
    console: 'Senior Python / AI Engineer',
    mode: 'Python / Django REST / GenAI',
    focus: 'AI-enabled services',
    one: 'Python 3.x',
    two: 'RAG & OCR',
    years: '5+ years building production systems',
    meta: 'Python / Django REST / GenAI workflows',
    resume: 'Tarun-Singh-Gohil-Python-AI-Resume-2026.pdf',
    portfolio: false,
    hero: 'Python-focused Full-Stack Engineer with 5+ years building production web applications, enterprise SaaS products and AI-enabled workflows across Django, FastAPI, React and Generative AI.',
    stats: [
      ['5+', 'years of professional experience'],
      ['50+', 'production websites & apps'],
      ['12+', 'production apps optimised'],
      ['LLM', 'RAG · OCR · speech-to-text'],
    ],
    manifestTitle: 'Useful AI is reliable software first.',
    manifest:
      'Model output only matters when downstream code can trust it. I build Python services with validated contracts, sensible fallbacks and permissions that keep every tenant’s data where it belongs.',
    signal: 'Signal: services, data & models in sync',

    summary:
      '**Python-focused Full-Stack Engineer with 5+ years of professional experience building production web applications, enterprise SaaS products and AI-enabled workflows.** Hands-on experience across Python, Django, Django REST Framework, FastAPI/Flask, REST APIs, authentication and authorization, ORM/data modelling, SQL/NoSQL databases, background processing and third-party integrations. Strong full-stack ownership across React/TypeScript frontends, API contracts and end-to-end feature delivery. Practical Generative AI exposure includes OpenAI GPT integrations, prompt engineering, RAG-style retrieval, embeddings/vector search concepts, OCR/document understanding and speech-to-text workflows. Experienced with AWS, Docker, CI/CD fundamentals and Agile/Scrum delivery, with a focus on readable code, reliable APIs, debugging and production problem solving.',

    capKicker: 'Capability matrix',
    capTitle: 'Python services with intelligence built in.',
    capCopy:
      'Backend-first engineering across Django REST and FastAPI, with GenAI features that are validated, permissioned and wired into real business workflows.',
    caps: [
      [
        'Python services',
        'Production Python for application logic, APIs, data-processing workflows and automation that replaces repetitive manual steps.',
        ['Python 3.x', 'Django', 'DRF', 'FastAPI'],
      ],
      [
        'API architecture',
        'REST contracts with serializers, viewsets, permissions, validation, pagination and filtering that web clients can rely on.',
        ['REST/JSON', 'Pydantic', 'Postman', 'Versioning'],
      ],
      [
        'Tenant-aware security',
        'Permission-driven, role-based access and tenant-aware data isolation that keeps data scoped to the right organisation and user.',
        ['JWT', 'RBAC', 'Multi-tenancy', 'Middleware'],
      ],
      [
        'Applied GenAI',
        'LLM features for document understanding, summarisation and assisted data entry, with structured JSON contracts downstream code can trust.',
        ['OpenAI GPT', 'Prompting', 'JSON outputs', 'Guardrails'],
      ],
      [
        'Retrieval & documents',
        'RAG-style flows, OCR pipelines and speech-to-text capture that turn scanned reports and voice into structured, grounded data.',
        ['RAG', 'Embeddings', 'OCR', 'Whisper'],
      ],
      [
        'Full-stack ownership',
        'React 19 / TypeScript frontends, data modelling across MySQL and MongoDB, Docker environments and release coordination.',
        ['React 19', 'MySQL', 'MongoDB', 'Docker'],
      ],
    ],

    experienceTitle: 'Python, APIs and AI across real products.',
    experienceCopy:
      'Five-plus years moving from frontend foundations to Python services, tenant-aware APIs and AI-enabled healthcare workflows.',
    jobs: [
      {
        dates: 'Aug 2025 – Aug 2026',
        title: 'Lead Developer — Python & Full-Stack',
        company: 'Growit.ai Technology Private Limited · Jaipur',
        points: [
          'Led development of a scalable, multi-tenant, AI-powered Hospital Information Management System (HIMS), working hands-on across Python/Django backend services, REST API integration and React frontend architecture.',
          'Built and integrated Python + Django REST Framework APIs for enterprise healthcare workflows, including serializers, viewsets, permissions, middleware, ORM queries, migrations, validation, pagination and filtering.',
          'Designed REST API contracts consumed by web clients, covering request/response payloads, JWT authentication, tenant-aware authorization, error handling and asynchronous client-server communication.',
          'Implemented permission-driven, role-based access and tenant-aware data isolation for a large set of business endpoints, helping keep hospital data scoped to the correct organization and user context.',
          'Contributed to AI/OCR-enabled workflows, connecting document data extraction and LLM-assisted capabilities with clinical, reporting and billing-oriented application flows.',
          'Delivered complex modules spanning Patient Management, OPD, IPD, Emergency, Laboratory, Radiology, Pharmacy, Billing, Inventory, Analytics, Reporting and NABH-related compliance workflows.',
          'Modelled and optimized data operations across MySQL and MongoDB, including schema decisions, indexing, query tuning and caching for data-heavy screens and API flows.',
          'Built the enterprise React 19 / TypeScript / Redux Toolkit / Tailwind frontend with reusable components, dashboards, data tables and role-based interfaces integrated with Python and Node.js services.',
          'Owned Git branching, pull requests, code reviews, release coordination, Docker-based development environments and deployment support while collaborating with product, QA, design and backend engineering teams.',
          'Worked across Python/Django and Node.js/Express services, aligning frontend and backend contracts and troubleshooting API, authentication, data and deployment issues through the development lifecycle.',
        ],
      },
      {
        dates: 'Feb 2022 – Jul 2025',
        title: 'Software Engineer',
        company: 'Formidium India Private Limited · Jaipur',
        points: [
          'Developed and maintained production-grade enterprise fintech/SaaS applications, working hands-on with Python for application logic, API development, data-processing workflows and backend-supported business features alongside React.',
          'Built Python/Django-based services and REST APIs for business workflows, including request validation, authentication, ORM-driven database operations and third-party system integrations.',
          'Wrote Python scripts and utilities for data extraction, transformation, validation and reporting, replacing repetitive manual steps with repeatable and testable automation.',
          'Collaborated on API contracts, response handling, pagination and performance tuning with backend teams, and debugged production issues across frontend, API and data layers.',
          'Developed reusable React/TypeScript components, custom hooks and Redux Toolkit / Context API state patterns for dashboards, operational tools and customer-facing products.',
          'Built analytics dashboards using Chart.js and Recharts to present KPIs, financial information and operational business metrics sourced from backend APIs.',
          'Managed and optimized 12+ production applications through caching, code splitting, lazy loading, API optimization and Webpack/build improvements to support responsive user experiences.',
          'Participated in Git-based development, code reviews, testing, Agile/Scrum ceremonies and CI/CD-supported release workflows across multiple product teams.',
        ],
      },
      {
        dates: 'Nov 2020 – Feb 2022',
        title: 'Web Developer',
        company: 'i3Techs · Jaipur',
        points: [
          'Contributed to full-stack-oriented development workflows by working across frontend interfaces, API integrations, client-side functionality and production deployment requirements, building a strong foundation for subsequent Python and backend engineering responsibilities.',
          'Developed and maintained 50+ production websites and web applications using HTML5, CSS3, JavaScript, Bootstrap and React.js, contributing to end-to-end application development with API-driven frontend implementations and backend-integrated workflows.',
          'Built reusable and responsive UI components from PSD/Figma designs, focusing on clean architecture, semantic HTML, accessibility-aware implementation, cross-browser compatibility, maintainability and performance.',
          'Worked on API-integrated web applications, handling frontend-to-backend data flows, request/response integration and dynamic business data while collaborating on application requirements and delivery.',
          'Developed and maintained WordPress/Elementor-based business websites and client-facing applications with attention to usability, responsive behaviour, SEO-aware structure, maintainability and production quality.',
        ],
      },
      {
        dates: 'May 2019 – Jul 2019',
        title: 'Web Development Trainee',
        company: 'i3Techs · Jaipur',
        points: [
          'Completed hands-on training in web application development, responsive UI/UX implementation, frontend architecture fundamentals and production-oriented development practices.',
          'Worked with HTML, CSS, JavaScript, responsive design principles and Adobe XD/Photoshop while learning how to translate design requirements into structured, maintainable web interfaces.',
          'Built foundational understanding of application development workflows, debugging, browser-based development and collaborative delivery practices, establishing the base for subsequent full-stack engineering experience.',
        ],
      },
    ],

    genai: {
      title: 'Generative AI & AI engineering experience.',
      copy: 'LLM features, retrieval, document intelligence and speech-to-text — exposed through Python services with validation, retries and safe fallbacks.',
      points: [
        'Integrated LLM-powered features into production applications using OpenAI GPT models for document understanding, content generation, summarization and assisted data entry within business workflows.',
        'Designed and iterated system/role prompts, few-shot examples and structured JSON output contracts so model responses could be validated and consumed reliably by downstream application logic.',
        'Built RAG-style flows covering document ingestion, chunking, embeddings, similarity search and grounded response generation using retrieved domain context.',
        'Delivered OCR and computer-vision-assisted document pipelines to extract structured information from scanned reports and forms, reducing manual data-entry effort.',
        'Implemented speech-to-text workflows with Whisper / Faster-Whisper for transcription and voice-driven data capture scenarios.',
        'Exposed AI capabilities through Python REST services with request validation, error handling, retries, timeouts, usage controls and safe fallback behavior when model calls failed.',
        'Applied working knowledge of agentic patterns across LangChain, LangGraph, CrewAI and AutoGen, including tool calling, routing, state/memory and human-in-the-loop review steps.',
      ],
    },

    projectKicker: 'Selected projects',
    projectTitle: 'Where Python services meet real workflows.',
    projectCopy:
      'Healthcare, document intelligence, retail operations and mobility — each built around reliable APIs and the people who depend on them.',
    projects: [
      {
        id: '01 / HEALTHCARE',
        name: 'Zonov — Multi-Tenant AI-Enabled Hospital Information Management System',
        type: 'Enterprise Healthcare / HIMS',
        stack: ['Python', 'Django REST Framework', 'REST APIs', 'JWT', 'RBAC', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'OpenAI/OCR', 'React 19', 'TypeScript', 'Redux Toolkit'],
        points: [
          'Built Python/DRF backend services and API integrations for a multi-tenant HIMS covering patient, OPD/IPD, emergency, laboratory, radiology, pharmacy, billing, inventory, reporting and compliance workflows.',
          'Implemented tenant-aware access control and permission-driven workflows while integrating AI/OCR-assisted document processing into application-facing business flows.',
        ],
      },
      {
        id: '02 / GENAI',
        name: 'AI Document & Voice Assistant Workflows',
        type: 'GenAI / Document Intelligence',
        stack: ['Python', 'FastAPI', 'OpenAI GPT', 'Prompt engineering', 'Embeddings & vector search', 'Whisper / Faster-Whisper', 'OCR', 'REST APIs'],
        points: [
          'Developed Python services that ingest documents, extract structured data through OCR, retrieve relevant context with embeddings and vector search, and generate grounded, schema-validated LLM responses.',
          'Added speech-to-text capture using Whisper / Faster-Whisper for hands-free data entry and transcription-oriented workflows, with API validation and application integration.',
        ],
      },
      {
        id: '03 / OPERATIONS',
        name: 'RetailX ERP — POS Billing, Inventory & Reporting',
        type: 'Enterprise Business Application',
        stack: ['Python/Node.js services', 'REST APIs', 'MongoDB', 'React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
        points: [
          'Delivered data-driven billing, inventory and reporting workflows with API integrations, role-based access patterns and reusable frontend architecture.',
          'Worked across business-facing screens and backend-connected flows where data consistency, responsive UI behavior and API handling were core requirements.',
        ],
      },
      {
        id: '04 / MOBILITY',
        name: 'Charge My EV — EV Charging Platform',
        type: 'Web + Mobile Product',
        stack: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
        points: [
          'Built customer-facing EV charging workflows and API-driven features across web and mobile surfaces, working with reusable UI patterns and backend integrations.',
        ],
      },
    ],

    skillTitle: 'Python depth, AI breadth, full-stack range.',
    skillCopy:
      'Language fundamentals through frameworks, GenAI and agentic tooling, data, APIs, cloud and quality — the full technical skill set from the resume.',
    skillGroups: [
      [
        'Python & Backend',
        ['Python 3.x', 'OOP', 'Abstract base classes', 'Abstraction', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Decorators', 'Decorator chaining', 'Generators', 'Iterators', 'List/dictionary comprehensions', 'Slicing', 'Mutability', 'Context managers', 'Custom exceptions', 'Typing/type hints', 'async/await', 'Threading vs multiprocessing', 'Scope and memory fundamentals', 'Pythonic clean-code practices'],
      ],
      [
        'Django / Django REST Framework',
        ['Django', 'Django REST Framework (DRF)', 'Application architecture', 'REST API development', 'Serializers', 'Viewsets', 'Middleware', 'Authentication', 'Permissions', 'ORM queries', 'Migrations', 'Signals', 'Validation', 'Pagination', 'Filtering', 'Request/response handling', 'Integration with React clients'],
      ],
      [
        'FastAPI / Flask',
        ['FastAPI async endpoints', 'Pydantic validation', 'Dependency injection', 'Auto-generated API documentation', 'Lightweight service development', 'Flask-based utilities and internal services', 'Celery-style background and asynchronous task processing'],
      ],
      [
        'Generative AI / LLM / ML / NLP',
        ['OpenAI GPT', 'Azure OpenAI concepts', 'AWS Bedrock concepts', 'Google Vertex AI concepts', 'Prompt engineering', 'Prompt templates', 'System/role prompts', 'Few-shot examples', 'Structured JSON outputs', 'RAG workflows', 'Document ingestion', 'Chunking', 'Embeddings', 'Similarity/vector search', 'Function/tool calling', 'Token and cost optimization', 'LLM evaluation', 'Guardrails', 'scikit-learn', 'NumPy', 'Pandas', 'NLP concepts', 'Computer vision', 'OCR', 'Hugging Face', 'Whisper', 'Faster-Whisper'],
      ],
      [
        'Agentic AI',
        ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Google ADK', 'Multi-agent workflow design', 'Agent routing', 'Tool/agent orchestration', 'Memory and state handling', 'Human-in-the-loop review and approval patterns'],
        'LangChain, LangGraph, CrewAI, AutoGen and Google ADK: working knowledge.',
      ],
      [
        'Frontend',
        ['React 19', 'React.js', 'JavaScript ES6+', 'TypeScript', 'React Hooks', 'React Router', 'Next.js', 'Redux Toolkit', 'Redux', 'Context API', 'Zustand', 'TanStack Query', 'Form and API state management', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'HTML5', 'CSS3', 'Responsive design', 'Accessibility-aware implementation', 'Angular fundamentals'],
      ],
      [
        'Databases & Data',
        ['MySQL', 'PostgreSQL', 'MongoDB/Mongoose', 'Redis', 'SQL joins', 'Subqueries', 'Normalization', 'Indexing', 'Query optimization', 'Transactions', 'Schema and data modelling', 'ORM-based database operations', 'Caching strategies'],
      ],
      [
        'APIs & Architecture',
        ['REST/JSON API design', 'API versioning', 'Microservices concepts', 'JWT authentication', 'RBAC', 'Multi-tenancy', 'Pagination', 'Validation', 'Filtering', 'Error handling', 'Retries', 'Timeouts', 'Rate limiting', 'Webhooks', 'WebSockets', 'GraphQL', 'Third-party API integrations', 'Payment integrations'],
      ],
      [
        'Cloud / DevOps',
        ['AWS Lambda', 'EC2', 'S3', 'CloudWatch', 'IAM basics', 'Serverless concepts and concurrency limits', 'Azure and GCP fundamentals', 'Docker', 'Docker Compose', 'Linux', 'Git', 'GitHub', 'GitLab', 'CI/CD workflows', 'Environment and release management', 'Vercel'],
      ],
      [
        'Testing & Quality',
        ['pytest', 'unittest', 'Fixtures and mocking', 'API testing with Postman', 'Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Code reviews', 'Debugging', 'Performance profiling', 'Production issue triage'],
      ],
      [
        'Architecture & Delivery',
        ['Modular backend services', 'REST-first design', 'Reusable business logic', 'Clear authentication/authorization boundaries', 'API contracts', 'Git branching and pull requests', 'Release workflows', 'Docker-based environments', 'CI/CD fundamentals', 'Cloud deployment support', 'Agile/Scrum', 'Requirements analysis', 'End-to-end feature ownership'],
        'Engineering practices',
      ],
    ],

    archTitle: 'Contracts first, intelligence on top.',
    archCopy:
      'Every AI feature sits on a dependable service: validated inputs, permissioned data, structured model output and a safe fallback when a model call fails.',
    pipeline: [
      ['Interface', 'React 19 / TypeScript clients'],
      ['Services', 'Django REST & FastAPI, auth & tenancy'],
      ['Intelligence', 'LLMs, RAG, OCR & speech-to-text'],
    ],
    toolsTitle: 'Python & AI toolkit',
    tools: ['Python 3.x', 'Django REST', 'FastAPI', 'OpenAI GPT', 'Whisper', 'MySQL / MongoDB', 'Docker', 'AWS'],

    education: [
      ['B. Tech, Computer Science & Engineering', 'Global Institute of Technology, Jaipur', '2016 – 2020'],
      ['Senior Secondary (Science)', 'Anand Public School, Sawai Madhopur', '2016'],
    ],
    languages: ['English', 'Hindi'],

    closeTitle: 'Let us put AI to work in a real product.',
    closeCopy:
      'From Django REST services to grounded LLM features, OCR pipelines and the React interface on top, I build AI capabilities that hold up in production.',
  },

  /* ------------------------------------------------------------------ */
  /* PRODUCT MANAGER — Tarun-Singh-Gohil-PM-Resume-2026.pdf              */
  /* ------------------------------------------------------------------ */
  product: {
    tab: 'product',
    track: null,
    id: '04',
    star: '255,171,122',
    label: 'Product portfolio / 2026',
    title: 'Tarun Singh Gohil | Product Manager',
    headline:
      'Product Manager | Technical Product Manager | Product & UI/UX | B2B/B2C',
    role: 'Product manager.',
    console: 'Product Manager',
    mode: 'Technical PM / Product & UI UX / B2B·B2C',
    focus: 'Product delivery',
    one: 'Roadmaps',
    two: 'KPIs & PRDs',
    years: '6+ years across B2B & B2C products',
    meta: 'Roadmaps / PRDs / KPIs / Jira delivery',
    resume: 'Tarun-Singh-Gohil-PM-Resume-2026.pdf',
    portfolio: false,
    hero: 'Product-focused technology professional with 6+ years across B2B and B2C products — translating business requirements into features, workflows, dashboards and production-ready experiences.',
    stats: [
      ['6+', 'years across B2B & B2C'],
      ['34+', 'enterprise modules in scope'],
      ['12+', 'high-traffic products'],
      ['50+', 'client-facing web products'],
    ],
    manifestTitle: 'Good products start with the right problem.',
    manifest:
      'I translate business goals into clear requirements, measurable outcomes and flows engineering can build with confidence — then use real usage data to decide what comes next.',
    signal: 'Signal: discovery, delivery & data in one loop',

    summary:
      'Product-focused technology professional with 6+ years of experience working across B2B and B2C digital products, translating business requirements into product features, workflows, dashboards and production-ready experiences. Experienced in product discovery, product design, roadmap planning, KPI definition, Jira-based delivery, PRD and requirement documentation, stakeholder coordination, analytics dashboards, API integrations and cross-functional delivery with engineering, UI/UX and QA teams. Strong technical foundation across React.js, TypeScript, Node.js, Express.js, Python/Django, REST APIs, MongoDB, MySQL and modern cloud/deployment ecosystems, enabling effective collaboration with engineering teams and practical technical decision-making. Hands-on experience in healthcare, ERP, e-commerce, EV charging, CRM/CMS and customer-facing web products, with an analytical, data-driven approach to user workflows, product adoption, operational metrics and continuous improvement.',

    capKicker: 'Product management capabilities',
    capTitle: 'From discovery to measurable delivery.',
    capCopy:
      'The product management capabilities behind every roadmap, requirement and release — exactly as listed on the resume.',
    caps: [
      [
        'Product Strategy & Vision',
        'Product vision, roadmap planning, feature prioritization, requirement discovery, workflow definition, product lifecycle thinking, business-to-technology translation, release planning.',
        [],
      ],
      [
        'Product Discovery & Requirements',
        'PRD writing, user stories, acceptance criteria, feature breakdown, functional requirements, process mapping, user-flow definition, edge-case identification, requirement clarification.',
        [],
      ],
      [
        'Delivery & Execution',
        'Jira, sprint planning, task management, backlog coordination, cross-functional delivery, dependency tracking, release coordination, QA/UAT collaboration, production issue resolution.',
        [],
      ],
      [
        'Data & Analytics',
        'KPI definition, North Star Metric thinking, analytics dashboards, operational metrics, financial KPIs, product usage insights, trend analysis, reporting, data-driven prioritization.',
        [],
      ],
      [
        'UX & Product Design',
        'Product design, wireframing, Figma, responsive UX, design-system thinking, usability improvements, role-based workflows, accessibility, information architecture, design-to-development handoff.',
        [],
      ],
      [
        'Stakeholder Management',
        'Product, engineering, UI/UX, QA, business and customer collaboration; requirement alignment; trade-off discussions; delivery communication; feedback incorporation.',
        [],
      ],
      [
        'Technical Product Knowledge',
        'REST APIs, API contracts, third-party integrations, authentication/RBAC, payments, database-backed workflows, microservice/API concepts, frontend architecture, backend services and deployment fundamentals.',
        [],
      ],
    ],

    experienceTitle: 'Product delivery with an engineer’s depth.',
    experienceCopy:
      'Six-plus years across B2B and B2C products — owning requirements, roadmaps, KPIs and delivery while staying fluent in the stack underneath.',
    jobs: [
      {
        dates: 'Aug 2025 – Aug 2026',
        title: 'Lead Developer',
        company: 'Growit.ai Technology Private Limited · Jaipur',
        points: [
          'Owned product-focused delivery for AI-powered enterprise SaaS products, working across product vision, roadmap discussions, feature planning, business workflows and technical execution for complex multi-tenant applications.',
          'Worked with stakeholders to understand business objectives, convert requirements into product features, define user workflows, break large initiatives into actionable Jira tasks and coordinate delivery with engineering and QA.',
          'Managed Jira-based work across discovery, development, testing and release stages, maintaining visibility into feature status, dependencies, blockers, priorities and delivery milestones.',
          'Created and refined product requirements and PRD-style documentation covering problem statements, functional requirements, user flows, acceptance criteria, edge cases, API dependencies and expected product outcomes.',
          'Defined and tracked KPIs for product areas including operational activity, financial workflows, patient activity, service utilization, reporting and dashboard performance; used data and product usage patterns to guide improvements.',
          'Designed and delivered analytics and reporting dashboards for hospital operations, financial activity, patient workflows, laboratory/radiology operations, pharmacy/inventory and management reporting.',
          'Led product design discussions with UI/UX stakeholders and converted business needs into Figma-ready flows, information architecture, reusable UI patterns, forms, tables, filters, dashboards and role-based experiences.',
          'Collaborated closely with engineering teams on API contracts, integrations, payload structures, data models, authentication, RBAC, performance considerations and technical feasibility before and during implementation.',
          'Worked on a multi-tenant Hospital Information Management System covering Patient Management, OPD, IPD, Emergency, Laboratory, Radiology, Pharmacy, Billing, Inventory, Analytics, Reporting and NABH-oriented workflows.',
          'Integrated hundreds of REST API endpoints and supported third-party/enterprise integrations using Axios, JSON, authentication workflows and asynchronous data flows, helping align product requirements with technical implementation.',
          'Used product and operational data to identify workflow friction, improve usability, prioritize enhancements and resolve production issues across multiple user roles and hospital tenants.',
          'Partnered with product managers, business stakeholders, designers, backend developers and QA engineers through Agile/Scrum ceremonies, reviews, UAT, release coordination and post-release issue resolution.',
          'Contributed to B2B enterprise product initiatives and B2C/customer-facing experiences, balancing user needs, business priorities, implementation effort and delivery timelines.',
          'Supported release planning, feature validation, documentation and production-readiness activities while maintaining a strong understanding of the underlying React, Node.js, Python/Django, API and database stack.',
        ],
        extra: {
          title: 'Key Product Area: Zonov AI Hospital Management System',
          points: [
            'Product scope: multi-tenant healthcare platform with 34+ enterprise modules, role-based workflows, analytics/reporting, billing, inventory, patient journeys, compliance workflows and AI-enabled capabilities.',
            'Product responsibilities included roadmap input, requirement analysis, workflow design, KPI/dashboard definition, Jira task management, engineering coordination, UX refinement, API/integration planning and production delivery.',
          ],
        },
      },
      {
        dates: 'Feb 2022 – Jul 2025',
        title: 'UI Developer / Product Delivery Contributor',
        company: 'Formidium India Private Limited · Jaipur',
        points: [
          'Worked for more than three years across enterprise and customer-facing B2B/B2C products, combining product requirements, UI/UX, analytics, frontend engineering and delivery coordination.',
          'Used Jira extensively for task planning, sprint execution, issue tracking, backlog follow-up, delivery coordination and status visibility across multiple product initiatives and engineering workflows.',
          'Participated in product planning and requirement discussions, translating business requirements into functional screens, workflows, acceptance expectations, development tasks and release-ready features.',
          'Contributed to product roadmap discussions by identifying dependencies, sequencing feature work, estimating implementation complexity from the frontend perspective and aligning delivery with business priorities.',
          'Created product and technical requirement documentation, including feature behavior, screen requirements, API dependencies, validation rules, user states, error scenarios and UI acceptance criteria.',
          'Worked closely with product managers, business stakeholders, UI/UX designers, backend engineers and QA teams to resolve ambiguity, validate requirements and deliver production-ready product features.',
          'Designed and implemented analytics dashboards using Chart.js/Recharts and reusable visualization components to present KPIs, financial metrics, operational trends and business insights.',
          'Contributed to data-driven product decisions by examining dashboard patterns, API responses, workflow usage and performance indicators and converting observations into UI/UX and feature improvements.',
          'Designed product interfaces and user flows from Figma, including information architecture, navigation, forms, tables, filters, dashboards, reporting views and responsive customer-facing experiences.',
          'Worked on API-driven products using REST APIs, Axios, JSON, asynchronous programming and third-party integrations, collaborating with backend teams on API contracts, payload structures, errors and response performance.',
          'Supported B2B business applications and B2C/customer-facing product experiences, balancing usability, performance, responsive design, conversion-oriented journeys and business rules.',
          'Managed and optimized 12+ high-traffic production websites/applications while contributing to reliability, performance, analytics, UX consistency, release quality and continuous product improvements.',
          'Participated in Agile/Scrum ceremonies, sprint planning, backlog discussions, code/design reviews, QA/UAT coordination, release preparation and production support.',
          'Worked with HubSpot CRM/CMS and marketing/product interfaces, using customer-facing data and business requirements to improve content, navigation, forms, landing pages and conversion-focused experiences.',
          'Collaborated on product prioritization and issue resolution by evaluating business impact, user impact, dependencies, technical effort and release constraints with cross-functional teams.',
        ],
      },
      {
        group: 'Earlier product & web experience',
        dates: 'Nov 2020 – Feb 2022',
        title: 'Web Developer',
        company: 'i3Techs · Jaipur',
        points: [
          'Worked on 50+ client-facing websites and web applications spanning B2B and B2C use cases, helping translate business needs into product pages, dashboards, workflows and responsive digital experiences.',
          'Handled requirement discussions, UI/UX planning, product-page structure, customer journeys and implementation of business-driven website functionality.',
          'Built and maintained data-driven dashboards and reporting-style interfaces, consuming APIs and presenting business information through structured views, metrics and reusable frontend patterns.',
          'Integrated backend APIs and dynamic data sources, working with server-side teams to consume data, troubleshoot issues and validate end-to-end functionality.',
          'Designed product and user experiences from PSD/Figma specifications, contributing wireframes, interface structure, responsive behavior, usability improvements and reusable UI patterns.',
          'Worked with clients and internal stakeholders to clarify scope, incorporate feedback, resolve UX issues and deliver production-ready web experiences.',
          'Supported SEO, performance, accessibility, responsive behavior and cross-browser quality across multiple product and customer-facing properties.',
          'Worked with WordPress, Elementor and CMS workflows while also developing React-based interfaces for selected applications.',
        ],
      },
      {
        dates: 'May 2019 – Jul 2019',
        title: 'Web Development Trainee',
        company: 'i3Techs · Jaipur',
        points: [
          'Gained hands-on exposure to web product development, UI/UX workflows, responsive design, design reviews and production-oriented delivery practices.',
          'Created visual mockups and interface concepts using Adobe XD and Photoshop and supported implementation aligned with product and client requirements.',
        ],
      },
    ],

    genai: null,

    projectKicker: 'Selected product portfolio',
    projectTitle: 'Products shaped around real operations.',
    projectCopy:
      'Healthcare, retail operations, e-commerce and mobility — each defined by its workflows, its users and the outcomes it had to move.',
    projects: [
      {
        id: '01 / HEALTHCARE',
        name: 'Zonov AI Hospital Management System',
        type: 'Multi-tenant enterprise healthcare',
        stack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Django REST', 'REST APIs', 'JWT', 'RBAC', 'AI/OCR'],
        text: 'Product focus: multi-tenant enterprise healthcare workflows, analytics, reporting, patient journeys, billing, inventory, compliance and AI-enabled capabilities.',
      },
      {
        id: '02 / OPERATIONS',
        name: 'RetailX ERP',
        type: 'POS, inventory & reporting',
        stack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
        text: 'Product focus: POS billing, inventory management, reporting, operational workflows and data-driven business dashboards.',
      },
      {
        id: '03 / COMMERCE',
        name: 'E-commerce',
        type: 'B2C product experience',
        stack: ['React', 'Vite', 'Tailwind'],
        text: 'React/Vite/Tailwind product experience covering catalog, product discovery, cart/checkout-style flows, API-driven data consumption and responsive B2C e-commerce UI patterns.',
      },
      {
        id: '04 / MOBILITY',
        name: 'Charge My EV',
        type: 'EV charging product',
        stack: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
        text: 'Product focus: EV charging workflows, mobile UX, real-time communication and API-driven experiences.',
      },
    ],

    skillKicker: 'Technical product & analytics stack',
    skillTitle: 'The toolkit behind the roadmap.',
    skillCopy:
      'Product management practice, analytics, design and the engineering stack that makes technical trade-off conversations productive.',
    skillGroups: [
      [
        'Product Management',
        ['Product Vision', 'Roadmap Planning', 'Feature Prioritization', 'PRDs', 'User Stories', 'Acceptance Criteria', 'Requirement Analysis', 'User Flows', 'Jira', 'Sprint Planning', 'Backlog Management', 'Release Planning', 'Stakeholder Management', 'Agile', 'Scrum', 'UAT'],
      ],
      [
        'Analytics & Metrics',
        ['KPI Definition', 'North Star Metric Frameworks', 'Product Analytics', 'Data/Analytics Dashboards', 'Operational Metrics', 'Financial Metrics', 'Reporting', 'Trend Analysis', 'Dashboard UX', 'Chart.js', 'Recharts'],
      ],
      [
        'Design & UX',
        ['Product Design', 'Figma', 'Adobe XD', 'Wireframing', 'Information Architecture', 'User Journeys', 'Responsive UX', 'Accessibility', 'Design Systems', 'Component Libraries', 'Figma-to-UI Delivery'],
      ],
      [
        'Engineering & Integrations',
        ['React.js', 'React 19', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'Python', 'Django', 'Django REST Framework', 'REST APIs', 'GraphQL', 'Axios', 'JSON', 'API Contracts', 'Third-Party Integrations', 'JWT', 'RBAC', 'Payment Integrations', 'WhatsApp Business API'],
      ],
      [
        'Data & Platforms',
        ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'Redis', 'AWS', 'AWS S3', 'Google Cloud', 'Vercel', 'Docker', 'GitHub', 'GitLab', 'CI/CD', 'Webpack', 'Vite', 'Chrome DevTools', 'Lighthouse'],
      ],
      [
        'AI & Productivity',
        ['OpenAI GPT Models', 'Deepgram Speech-to-Text', 'Whisper', 'Faster-Whisper', 'OCR Workflows', 'GitHub Copilot', 'Claude', 'Cursor', 'ChatGPT'],
      ],
    ],

    archTitle: 'Discovery, definition, delivery — then measure.',
    archCopy:
      'I keep one loop running: understand the problem and the metric, write requirements engineering can build from, then ship and let the data shape the next decision.',
    pipeline: [
      ['Discover', 'Problems, users, KPIs & requirements'],
      ['Define', 'PRDs, user flows & acceptance criteria'],
      ['Deliver', 'Jira sprints, QA/UAT & release'],
    ],
    toolsTitle: 'Product toolkit',
    tools: ['Jira', 'Figma', 'PRDs', 'User stories', 'KPI dashboards', 'Chart.js / Recharts', 'REST APIs', 'Agile / Scrum'],

    education: [
      ['Bachelor’s Degree in Computer Science Engineering', 'Global Institute of Technology, Jaipur', 'Aug 2016 – Aug 2020'],
      ['Senior Secondary Education (Science)', 'Anand Public School, Sawai Madhopur', '2016'],
    ],
    languages: ['English', 'Hindi'],

    closeTitle: 'Have a product that needs clear direction?',
    closeCopy:
      'I enjoy the space between business goals and shipped software — shaping requirements, aligning teams and measuring what actually changes for users.',
  },
};
