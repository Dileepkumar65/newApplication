// Define topics array
const topics = [
    {
        id: 'cs_foundations',
        title: 'CS Foundations',
        description: 'Basic concepts and foundations of computer science',
        content: 'Computer Science foundations include the basic principles and concepts that underpin all of computing. These foundational elements provide the groundwork for understanding more complex computer systems and software development.',
        parentId: null
    },
    {
        id: 'hardware',
        title: 'Computer Hardware',
        description: 'Physical components and architecture of computers',
        content: 'Computer hardware encompasses all the physical components that make up a computer system. Understanding hardware is essential for optimizing performance and troubleshooting issues in computing systems.',
        parentId: null
    },
    {
        id: 'programming',
        title: 'Programming & Languages',
        description: 'Programming concepts and popular languages',
        content: 'Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming languages are the formal languages used to write these instructions.',
        parentId: null
    },
    {
        id: 'systems',
        title: 'Operating Systems',
        description: 'Computer operating systems and system software',
        content: 'Operating systems are software that manage computer hardware and software resources and provide common services for computer programs. They act as an interface between users and the hardware.',
        parentId: null
    },
    {
        id: 'networks',
        title: 'Networking',
        description: 'Computer networks and data communication',
        content: 'Computer networking is the practice of connecting computers together to share resources and communicate. Networks are essential for modern computing, enabling information to be transferred between devices.',
        parentId: null
    },
    {
        id: 'algorithms',
        title: 'Algorithms & Data Structures',
        description: 'Algorithms and efficient data organization',
        content: 'Algorithms are step-by-step procedures for solving problems or accomplishing tasks. Data structures are specialized formats for organizing and storing data for efficient access and modification.',
        parentId: null
    },
    {
        id: 'databases',
        title: 'Databases',
        description: 'Database systems and data storage',
        content: 'Database systems provide organized mechanisms to store, manage, and retrieve information. They are fundamental to applications that require persistent data storage.',
        parentId: null
    },
    {
        id: 'security',
        title: 'Cybersecurity',
        description: 'Protecting systems, networks, and programs',
        content: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks often aim to access, change, or destroy sensitive information.',
        parentId: null
    },
    {
        id: 'ai_ml',
        title: 'AI & Machine Learning',
        description: 'Artificial intelligence and machine learning concepts',
        content: 'Artificial Intelligence enables machines to simulate human intelligence. Machine Learning, a subset of AI, allows systems to learn and improve from experience without explicit programming.',
        parentId: null
    },
    {
        id: 'theory',
        title: 'Theory of Computation',
        description: 'Mathematical foundation of computation',
        content: 'Theory of Computation is the mathematical study of the capabilities and limitations of computing systems. It provides the theoretical foundation for practical computing.',
        parentId: null
    },
    {
        id: 'software_eng',
        title: 'Software Engineering',
        description: 'Principles and practices of software development',
        content: 'Software Engineering is the systematic application of engineering approaches to the development of software. It encompasses methodologies, tools, and practices that ensure quality software products.',
        parentId: null
    }
];

// Helper functions to work with topics
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
        topic.content.toLowerCase().includes(query)
    );
}