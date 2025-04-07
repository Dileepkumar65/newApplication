// CS Learning Guide Data Structure
// Main modules are topics with parentId = null
// Topics under modules have the module's id as their parentId

const topics = [
    // Main Modules (parentId = null)
    {
        id: 'foundations',
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
        content: 'Computer networking involves the practice of connecting computers to share data and resources. Networks are essential for modern computing, enabling everything from local file sharing to global internet communications.',
        parentId: null
    },
    {
        id: 'databases',
        title: 'Databases',
        description: 'Database systems and data management',
        content: 'Databases are organized collections of data stored and accessed electronically. Database systems are designed to manage large amounts of information and provide mechanisms for storing, retrieving, and modifying data.',
        parentId: null
    },
    {
        id: 'ai_ml',
        title: 'AI & Machine Learning',
        description: 'Artificial intelligence and machine learning',
        content: 'Artificial Intelligence (AI) involves creating systems capable of performing tasks that normally require human intelligence. Machine Learning is a subset of AI that enables computers to learn from data without being explicitly programmed.',
        parentId: null
    },
    {
        id: 'security',
        title: 'Cybersecurity',
        description: 'Computer security and threat protection',
        content: 'Cybersecurity involves protecting computer systems, networks, and data from digital attacks. It encompasses technologies, processes, and practices designed to protect systems from unauthorized access and data theft.',
        parentId: null
    },

    // Topics under CS Foundations
    {
        id: 'boolean_logic',
        title: 'Boolean Logic',
        description: 'The foundation of digital circuit design and computer operations',
        content: 'Boolean logic is a form of algebra that deals with binary variables and logic operations. It forms the basis for digital circuit design and is fundamental to understanding how computers operate at the lowest level.\n\nKey concepts include:\n- Binary values (0 and 1, true and false)\n- Logical operations (AND, OR, NOT, XOR)\n- Truth tables\n- Boolean expressions and simplification\n- Logic gates and circuits',
        parentId: 'foundations'
    },
    {
        id: 'data_representation',
        title: 'Data Representation',
        description: 'How computers store and represent different types of data',
        content: 'Data representation refers to the various ways computers store and manipulate different types of data, from simple numbers to complex multimedia.\n\nKey aspects include:\n- Binary number system\n- Bits, bytes, and words\n- Integer representation (signed and unsigned)\n- Floating-point representation\n- Character encoding (ASCII, Unicode)\n- Image, audio, and video encoding\n- Data compression techniques',
        parentId: 'foundations'
    },
    {
        id: 'algorithms',
        title: 'Algorithms & Complexity',
        description: 'Algorithms, efficiency, and computational complexity',
        content: 'Algorithms are step-by-step procedures for solving problems or performing computations. Computational complexity measures the resources (like time and space) required by an algorithm.\n\nImportant topics include:\n- Algorithm design techniques\n- Searching and sorting algorithms\n- Recursive algorithms\n- Time and space complexity\n- Big O notation\n- Tractable vs. intractable problems\n- P vs. NP problem',
        parentId: 'foundations'
    },
    {
        id: 'data_structures',
        title: 'Data Structures',
        description: 'Ways to organize and store data for efficient operations',
        content: 'Data structures are specialized formats for organizing, processing, retrieving, and storing data. They enable efficient access and modification of information.\n\nCommon data structures include:\n- Arrays and linked lists\n- Stacks and queues\n- Trees (binary trees, BSTs, AVL trees)\n- Heaps\n- Hash tables\n- Graphs\n- Tries',
        parentId: 'foundations'
    },

    // Topics under Computer Hardware
    {
        id: 'digital_logic',
        title: 'Digital Logic & Gates',
        description: 'The building blocks of digital circuits',
        content: 'Digital logic is the foundation of electronic circuits that operate on digital signals. Logic gates are the basic building blocks of digital systems.\n\nKey concepts include:\n- Basic logic gates (AND, OR, NOT, XOR, NAND, NOR)\n- Combinational logic circuits\n- Sequential logic circuits\n- Flip-flops and latches\n- Multiplexers and demultiplexers\n- Adders and ALUs\n- Memory elements',
        parentId: 'hardware'
    },
    {
        id: 'computer_architecture',
        title: 'Computer Architecture',
        description: 'Design and organization of computer systems',
        content: 'Computer architecture refers to the design and organization of computer systems at both hardware and software levels.\n\nImportant aspects include:\n- Von Neumann architecture\n- Harvard architecture\n- Instruction set architectures (CISC vs. RISC)\n- Pipelining and parallelism\n- Memory hierarchy\n- Cache organization\n- I/O systems\n- Multiprocessor systems',
        parentId: 'hardware'
    },
    {
        id: 'processors',
        title: 'Processors & CPUs',
        description: 'Central processing units and their operation',
        content: 'Processors (CPUs) are the primary components that execute instructions in a computer.\n\nKey topics include:\n- CPU components (ALU, control unit, registers)\n- Instruction cycle (fetch, decode, execute)\n- CPU performance factors\n- Pipelining and superscalar execution\n- Branch prediction\n- Out-of-order execution\n- Multicore processors\n- CPU caching\n- Specialized processors (GPUs, TPUs, etc.)',
        parentId: 'hardware'
    },
    {
        id: 'memory_systems',
        title: 'Memory Systems',
        description: 'Computer memory technologies and hierarchy',
        content: 'Memory systems store data and instructions for immediate and long-term use by the CPU.\n\nTopics include:\n- Memory hierarchy\n- Registers\n- Cache memory (L1, L2, L3)\n- Main memory (RAM)\n- Virtual memory\n- Storage technologies (HDD, SSD, etc.)\n- Memory addressing\n- Memory management techniques',
        parentId: 'hardware'
    },

    // Topics under Programming & Languages
    {
        id: 'programming_basics',
        title: 'Programming Fundamentals',
        description: 'Core concepts in programming',
        content: 'Programming fundamentals cover the basic concepts and principles that apply across most programming languages.\n\nCore concepts include:\n- Variables and data types\n- Operators and expressions\n- Control structures (conditionals, loops)\n- Functions and methods\n- Parameters and return values\n- Scope and lifetime\n- Error handling\n- Basic I/O operations',
        parentId: 'programming'
    },
    {
        id: 'language_paradigms',
        title: 'Programming Paradigms',
        description: 'Different approaches to programming',
        content: 'Programming paradigms are ways of thinking about and structuring code to solve problems.\n\nMajor paradigms include:\n- Imperative programming\n- Procedural programming\n- Object-oriented programming\n- Functional programming\n- Declarative programming\n- Logic programming\n- Event-driven programming\n- Concurrent programming',
        parentId: 'programming'
    },
    {
        id: 'popular_languages',
        title: 'Popular Programming Languages',
        description: 'Overview of widely-used programming languages',
        content: 'Different programming languages are designed for various purposes and have distinct characteristics.\n\nPopular languages include:\n- Python (general-purpose, data science)\n- JavaScript (web development)\n- Java (enterprise, Android)\n- C/C++ (systems, performance-critical)\n- C# (.NET ecosystem)\n- Go (systems, concurrency)\n- Rust (systems, memory safety)\n- Swift (iOS, macOS)\n- PHP (web development)\n- Ruby (web, scripting)',
        parentId: 'programming'
    },
    {
        id: 'software_development',
        title: 'Software Development',
        description: 'Processes and practices for creating software',
        content: 'Software development encompasses the processes and practices used to create, design, deploy, and maintain software.\n\nKey aspects include:\n- Software development lifecycle\n- Requirements gathering\n- Software design principles\n- Version control systems\n- Testing methodologies\n- Debugging techniques\n- Development methodologies (Agile, Waterfall, etc.)\n- Continuous Integration/Continuous Deployment\n- Code quality and review',
        parentId: 'programming'
    },

    // Topics under Operating Systems
    {
        id: 'os_basics',
        title: 'OS Fundamentals',
        description: 'Core concepts and functions of operating systems',
        content: 'Operating system fundamentals cover the basic functions and concepts that apply to all operating systems.\n\nKey concepts include:\n- OS structures and components\n- Kernel and user modes\n- System calls\n- Processes and threads\n- CPU scheduling\n- Memory management\n- File systems\n- I/O management\n- Protection and security',
        parentId: 'systems'
    },
    {
        id: 'process_management',
        title: 'Process Management',
        description: 'How operating systems handle processes and threads',
        content: 'Process management involves creating, scheduling, and terminating processes and managing their resources.\n\nImportant topics include:\n- Process states and transitions\n- Process control blocks\n- Threads and multithreading\n- CPU scheduling algorithms\n- Process synchronization\n- Deadlocks and their prevention\n- Inter-process communication\n- Context switching',
        parentId: 'systems'
    },
    {
        id: 'memory_management',
        title: 'Memory Management',
        description: 'How operating systems manage computer memory',
        content: 'Memory management involves organizing and controlling computer memory, allocating portions to programs, and ensuring efficient use.\n\nKey concepts include:\n- Physical and virtual memory\n- Memory allocation techniques\n- Paging and segmentation\n- Page replacement algorithms\n- Virtual memory management\n- Memory protection\n- Garbage collection\n- Memory hierarchies and caching',
        parentId: 'systems'
    },
    {
        id: 'file_systems',
        title: 'File Systems',
        description: 'Organization and management of files',
        content: 'File systems control how data is stored and retrieved in an operating system.\n\nImportant aspects include:\n- File concepts and attributes\n- File operations and access methods\n- Directory structures\n- File system implementation\n- Allocation methods\n- Free-space management\n- Journaling and recovery\n- Common file systems (FAT, NTFS, ext4, etc.)',
        parentId: 'systems'
    }
];

// Function to get topics by parent ID
function getTopicsByParentId(parentId) {
    return topics.filter(topic => topic.parentId === parentId);
}

// Function to get a topic by ID
function getTopicById(id) {
    return topics.find(topic => topic.id === id);
}

// Function to search topics
function searchTopics(query) {
    query = query.toLowerCase();
    return topics.filter(topic => 
        topic.title.toLowerCase().includes(query) || 
        (topic.description && topic.description.toLowerCase().includes(query)) ||
        (topic.content && topic.content.toLowerCase().includes(query))
    );
}
