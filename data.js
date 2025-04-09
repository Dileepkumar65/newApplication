// Define our topics data structure
const topics = [
    // Main categories
    {
        id: 'main_modules',
        title: 'Main Modules',
        description: 'Main computer science modules',
        content: 'Navigate through the main computer science modules',
        parentId: null
    },
    {
        id: 'build_from_scratch_roadmaps',
        title: 'Build-From-Scratch Roadmaps',
        description: 'Learn how to build systems from the ground up',
        content: 'Learn how to build complex computer systems from the ground up without relying on high-level abstractions.',
        parentId: null
    },
    {
        id: 'tools',
        title: 'Tools',
        description: 'Learning tools',
        content: 'Tools to enhance your learning experience.',
        parentId: null
    },
    
    // Roadmaps
    {
        id: 'os_roadmap',
        title: 'Build an Operating System',
        description: 'Build an operating system from scratch',
        content: 'Learn how to build a fully functional operating system from the ground up, including memory management, process scheduling, file systems, and more.',
        parentId: 'build_from_scratch_roadmaps',
        icon: 'fas fa-server'
    },
    {
        id: 'compiler_roadmap',
        title: 'Build a Compiler',
        description: 'Build a compiler from scratch',
        content: 'Learn the techniques for building a compiler, including lexical analysis, parsing, semantic analysis, optimization, and code generation.',
        parentId: 'build_from_scratch_roadmaps',
        icon: 'fas fa-code'
    },
    {
        id: 'ai_roadmap',
        title: 'Build an AI System',
        description: 'Build an AI system from scratch',
        content: 'Understand how to create your own artificial intelligence systems from first principles, covering neural networks, machine learning algorithms, and more.',
        parentId: 'build_from_scratch_roadmaps',
        icon: 'fas fa-robot'
    },
    {
        id: 'network_roadmap',
        title: 'Build a Network Stack',
        description: 'Build a network stack from scratch',
        content: 'Create a complete networking stack from the physical layer to the application layer, including protocols, routers, and more.',
        parentId: 'build_from_scratch_roadmaps',
        icon: 'fas fa-network-wired'
    },
    {
        id: 'database_roadmap',
        title: 'Build a Database',
        description: 'Build a database from scratch',
        content: 'Design and implement your own database system, including storage engines, query processors, indexing mechanisms, and transaction management.',
        parentId: 'build_from_scratch_roadmaps',
        icon: 'fas fa-database'
    },
    
    // Tools
    {
        id: 'web_scraper',
        title: 'Web Scraper',
        description: 'Tool to scrape web content for research',
        content: 'Use this tool to scrape content from websites for your research and learning.',
        parentId: 'tools',
        icon: 'fas fa-globe'
    },
    {
        id: 'about',
        title: 'About',
        description: 'About this application',
        content: 'Information about the CS Learning Guide application.',
        parentId: 'tools',
        icon: 'fas fa-info-circle'
    }
];

// Functions to work with topics
function getTopicsByParentId(parentId) {
    return topics.filter(topic => topic.parentId === parentId);
}

function getTopicById(id) {
    return topics.find(topic => topic.id === id);
}

function searchTopics(query) {
    query = query.toLowerCase();
    return topics.filter(topic => 
        topic.title.toLowerCase().includes(query) || 
        topic.description.toLowerCase().includes(query) ||
        (topic.content && topic.content.toLowerCase().includes(query))
    );
}