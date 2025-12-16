// AICANARY: CSD-ELearn-2025

const coursesData = [
    {
        id: 1,
        title: "Python Programming Fundamentals",
        category: "programming",
        level: "beginner",
        duration: "8 weeks",
        instructor: "Dr. Maria Papadopoulos",
        description: "Learn Python from scratch. This course covers all the basics including variables, data types, control structures, functions, and object-oriented programming.",
        objectives: [
            "Understand Python syntax and basic programming concepts",
            "Work with data structures like lists, dictionaries, and tuples",
            "Create functions and understand scope",
            "Build simple applications using Python"
        ],
        requirements: [
            "No prior programming experience needed",
            "A computer with internet connection",
            "Willingness to practice coding regularly"
        ],
        featured: true
    },
    {
        id: 2,
        title: "Web Development with JavaScript",
        category: "programming",
        level: "intermediate",
        duration: "10 weeks",
        instructor: "Nikos Dimitriou",
        description: "Master modern JavaScript for web development. Learn ES6+, DOM manipulation, async programming, and build interactive web applications.",
        objectives: [
            "Master modern JavaScript syntax and features",
            "Manipulate the DOM effectively",
            "Handle asynchronous operations with promises and async/await",
            "Build responsive web applications"
        ],
        requirements: [
            "Basic HTML and CSS knowledge",
            "Understanding of programming fundamentals",
            "Text editor installed"
        ],
        featured: true
    },
    {
        id: 3,
        title: "Network Security Fundamentals",
        category: "security",
        level: "intermediate",
        duration: "6 weeks",
        instructor: "Yannis Stavros",
        description: "Explore the foundations of network security including encryption, firewalls, VPNs, and security protocols.",
        objectives: [
            "Understand common network security threats",
            "Implement encryption and secure protocols",
            "Configure firewalls and intrusion detection systems",
            "Conduct basic security audits"
        ],
        requirements: [
            "Basic networking knowledge",
            "Understanding of TCP/IP",
            "Access to virtual lab environment"
        ],
        featured: false
    },
    {
        id: 4,
        title: "SQL Database Design",
        category: "databases",
        level: "beginner",
        duration: "6 weeks",
        instructor: "Sofia Katsaros",
        description: "Learn to design and query relational databases using SQL. Master database normalization, joins, and transactions.",
        objectives: [
            "Design normalized database schemas",
            "Write complex SQL queries",
            "Understand indexes and performance optimization",
            "Manage transactions and ensure data integrity"
        ],
        requirements: [
            "Basic computer skills",
            "Logical thinking ability",
            "SQL client software (provided)"
        ],
        featured: true
    },
    {
        id: 5,
        title: "Computer Networks and TCP/IP",
        category: "networks",
        level: "intermediate",
        duration: "8 weeks",
        instructor: "Nikos Dimitriou",
        description: "Deep dive into computer networking concepts, protocols, and the TCP/IP model. Learn routing, switching, and network troubleshooting.",
        objectives: [
            "Understand the OSI and TCP/IP models",
            "Configure routers and switches",
            "Implement network protocols",
            "Troubleshoot network issues"
        ],
        requirements: [
            "Basic IT knowledge",
            "Interest in networking",
            "Access to packet tracer software"
        ],
        featured: false
    },
    {
        id: 6,
        title: "Ethical Hacking and Penetration Testing",
        category: "security",
        level: "advanced",
        duration: "12 weeks",
        instructor: "Yannis Stavros",
        description: "Learn ethical hacking techniques and penetration testing methodologies. Discover vulnerabilities and secure systems effectively.",
        objectives: [
            "Conduct vulnerability assessments",
            "Perform penetration testing",
            "Understand exploit development",
            "Write professional security reports"
        ],
        requirements: [
            "Strong networking knowledge",
            "Linux command line proficiency",
            "Understanding of programming basics"
        ],
        featured: false
    },
    {
        id: 7,
        title: "Java Object-Oriented Programming",
        category: "programming",
        level: "intermediate",
        duration: "10 weeks",
        instructor: "Dr. Maria Papadopoulos",
        description: "Master object-oriented programming with Java. Learn classes, inheritance, polymorphism, and design patterns.",
        objectives: [
            "Write object-oriented Java code",
            "Implement inheritance and polymorphism",
            "Use Java collections effectively",
            "Apply common design patterns"
        ],
        requirements: [
            "Basic programming knowledge",
            "Java JDK installed",
            "IDE setup (Eclipse or IntelliJ)"
        ],
        featured: false
    },
    {
        id: 8,
        title: "NoSQL Databases with MongoDB",
        category: "databases",
        level: "intermediate",
        duration: "5 weeks",
        instructor: "Sofia Katsaros",
        description: "Explore NoSQL databases focusing on MongoDB. Learn document modeling, queries, aggregation, and indexing.",
        objectives: [
            "Understand NoSQL vs SQL databases",
            "Design document schemas in MongoDB",
            "Write complex aggregation pipelines",
            "Optimize MongoDB performance"
        ],
        requirements: [
            "Basic database concepts",
            "JSON knowledge helpful",
            "MongoDB installed locally"
        ],
        featured: true
    },
    {
        id: 9,
        title: "Cloud Computing with AWS",
        category: "networks",
        level: "advanced",
        duration: "12 weeks",
        instructor: "Nikos Dimitriou",
        description: "Learn cloud infrastructure using Amazon Web Services. Cover EC2, S3, Lambda, and cloud architecture patterns.",
        objectives: [
            "Deploy applications on AWS",
            "Design scalable cloud architectures",
            "Manage cloud security and costs",
            "Implement DevOps practices in the cloud"
        ],
        requirements: [
            "Networking fundamentals",
            "Linux system administration",
            "AWS free tier account"
        ],
        featured: false
    },
    {
        id: 10,
        title: "Cybersecurity Essentials",
        category: "security",
        level: "beginner",
        duration: "6 weeks",
        instructor: "Yannis Stavros",
        description: "Introduction to cybersecurity concepts including threat landscape, security best practices, and basic defense mechanisms.",
        objectives: [
            "Identify common security threats",
            "Implement security best practices",
            "Understand authentication and authorization",
            "Protect personal and organizational data"
        ],
        requirements: [
            "Basic computer literacy",
            "Interest in security",
            "No prior experience needed"
        ],
        featured: false
    },
    {
        id: 11,
        title: "Data Structures and Algorithms",
        category: "programming",
        level: "intermediate",
        duration: "10 weeks",
        instructor: "Dr. Maria Papadopoulos",
        description: "Master fundamental data structures and algorithms. Learn complexity analysis, sorting, searching, trees, and graphs.",
        objectives: [
            "Implement common data structures",
            "Analyze algorithm complexity",
            "Solve problems efficiently",
            "Prepare for technical interviews"
        ],
        requirements: [
            "Programming proficiency in any language",
            "Understanding of basic math",
            "Problem-solving mindset"
        ],
        featured: false
    },
    {
        id: 12,
        title: "Database Administration and Optimization",
        category: "databases",
        level: "advanced",
        duration: "8 weeks",
        instructor: "Sofia Katsaros",
        description: "Advanced database topics including performance tuning, backup strategies, replication, and high availability.",
        objectives: [
            "Optimize database performance",
            "Implement backup and recovery strategies",
            "Configure replication and clustering",
            "Monitor and maintain database health"
        ],
        requirements: [
            "SQL proficiency",
            "Database design knowledge",
            "Experience with a DBMS"
        ],
        featured: false
    }
];
