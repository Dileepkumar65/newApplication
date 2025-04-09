// Define topics array with "Build from Scratch" philosophy
const topics = [
    // CS Foundations
    {
        id: 'cs_foundations',
        title: 'CS Foundations',
        description: 'Basic concepts and foundations of computer science',
        content: 'Computer Science foundations include the basic principles and concepts that underpin all of computing. These foundational elements provide the groundwork for understanding more complex computer systems and software development. Our approach follows the "Build from Scratch" philosophy, teaching you to understand and implement every layer of computing from first principles.',
        parentId: null
    },
    {
        id: 'boolean_logic',
        title: 'Boolean Logic & Digital Circuits',
        description: 'The fundamental building blocks of computation',
        content: 'Boolean logic forms the mathematical foundation of digital circuits and all computation. We\'ll explore how simple logical operations (AND, OR, NOT) implemented with transistors can be combined to create increasingly complex digital systems. Starting with these fundamental building blocks, you\'ll learn to construct basic logic gates and understand how they form the basis of all digital computation. By building digital circuits from first principles, you\'ll gain insight into how computers fundamentally operate at their lowest level.',
        parentId: 'cs_foundations'
    },
    {
        id: 'information_theory',
        title: 'Information Theory & Representation',
        description: 'How information is quantified, stored, and processed',
        content: 'Information theory establishes the fundamental limits of storing and communicating data. This topic explores how information is measured, encoded, and represented within computing systems. Starting from the basic concept of a bit, you\'ll learn about information entropy, coding theory, and data compression. By understanding these foundations, you\'ll gain insight into how all digital data—from text and images to audio and video—is represented and manipulated. Rather than using existing libraries, we\'ll implement our own encoding/decoding systems from scratch.',
        parentId: 'cs_foundations'
    },
    {
        id: 'computation_models',
        title: 'Models of Computation',
        description: 'Theoretical frameworks that define computation',
        content: 'This topic explores the theoretical models that define what computation is and what problems are computable. Starting with finite state machines, you\'ll progress to more powerful models like pushdown automata and Turing machines. We\'ll examine the Church-Turing thesis and understand the theoretical limitations of computation (including undecidable problems). By implementing these models from scratch, you\'ll develop a deep understanding of computability theory and the fundamental nature of algorithms, without relying on existing implementations or abstractions.',
        parentId: 'cs_foundations'
    },
    
    // Computer Hardware
    {
        id: 'hardware',
        title: 'Computer Hardware',
        description: 'Physical components and architecture of computers',
        content: 'Computer hardware encompasses all the physical components that make up a computer system. Understanding hardware is essential for optimizing performance and troubleshooting issues in computing systems. Our "Build from Scratch" approach means learning about every layer of hardware, from transistors and logic gates up to complete computer systems, emphasizing how each component can be understood from first principles.',
        parentId: null
    },
    {
        id: 'transistors',
        title: 'Transistors & Logic Gates',
        description: 'The fundamental building blocks of digital systems',
        content: 'Transistors are the basic electronic components that enable modern computing. In this topic, we examine how these semiconductor devices function as switches and amplifiers, and how they\'re manufactured from silicon. You\'ll learn how transistors are combined to form logic gates (AND, OR, NOT, etc.) that perform fundamental boolean operations. Rather than treating these components as black boxes, we\'ll dive deep into their physics and electrical properties, building an understanding from atoms and electrons upward. This foundation is essential for truly understanding how computers work at their most basic level.',
        parentId: 'hardware'
    },
    {
        id: 'digital_circuits',
        title: 'Digital Circuits & Components',
        description: 'Building useful circuits from basic logic gates',
        content: 'Digital circuits combine logic gates into functional components that perform specific operations. This topic explores how to design and build circuits like multiplexers, decoders, flip-flops, registers, and counters. You\'ll learn how to implement combinational circuits (whose output depends only on current inputs) and sequential circuits (which have memory). By designing these components from scratch using only basic gates, you\'ll develop the skills to build complex digital systems from first principles, without relying on pre-built integrated circuits or abstract models.',
        parentId: 'hardware'
    },
    {
        id: 'cpu_design',
        title: 'CPU Design & Architecture',
        description: 'Designing a functional CPU from basic components',
        content: 'The central processing unit (CPU) is the brain of any computer. In this topic, we\'ll build a complete CPU from the ground up, using only the digital components we\'ve previously designed. You\'ll learn about different CPU architectures (Harvard vs. von Neumann), instruction set design, control units, arithmetic logic units (ALUs), and registers. We\'ll implement a fully functional CPU using a hardware description language (HDL), which could be simulated or even synthesized to run on an FPGA. By avoiding pre-built CPU cores or high-level abstractions, you\'ll gain a comprehensive understanding of how instructions are fetched, decoded, and executed at the hardware level.',
        parentId: 'hardware'
    },
    {
        id: 'memory_systems',
        title: 'Memory Systems',
        description: 'From individual bits to complex memory hierarchies',
        content: 'Memory systems store the data and instructions that a computer needs to operate. This topic explores how bits are physically stored and retrieved, from the transistor-based flip-flops that make up registers to the complex DRAM cells used in main memory. You\'ll learn about memory hierarchies, including registers, caches (L1, L2, L3), main memory, and storage. We\'ll implement memory controllers and caching algorithms from scratch, understanding the tradeoffs between speed, capacity, cost, and power consumption. This approach avoids relying on existing memory modules as black boxes, instead building an understanding from the ground up.',
        parentId: 'hardware'
    },
    {
        id: 'io_systems',
        title: 'I/O Systems & Peripherals',
        description: 'Connecting computers to the outside world',
        content: 'Input/Output systems allow computers to interact with users and the external world. This topic covers the hardware mechanisms that enable communication with peripherals and external devices. We\'ll explore buses, controllers, and interfaces from first principles, implementing simple I/O controllers for keyboards, displays, and storage devices. You\'ll learn about different I/O methods (programmed I/O, interrupt-driven I/O, DMA) and protocols (serial, parallel). Rather than using existing controllers and drivers, we\'ll design our own from basic digital components, developing a deep understanding of how computers communicate with the outside world.',
        parentId: 'hardware'
    },
    
    // Programming & Languages
    {
        id: 'programming',
        title: 'Programming & Languages',
        description: 'Programming concepts and language implementation',
        content: 'Programming is the process of creating instructions that tell a computer how to perform tasks. Rather than just learning to use existing programming languages, our "Build from Scratch" approach focuses on understanding how programming languages themselves work and are implemented. You\'ll learn to create your own languages, compilers, and interpreters, building a deep understanding of programming concepts from first principles.',
        parentId: null
    },
    {
        id: 'assembly',
        title: 'Assembly Language & Machine Code',
        description: 'The lowest level of programming',
        content: 'Assembly language is the human-readable representation of a computer\'s machine code. This topic explores how to program directly at the level of individual CPU instructions. You\'ll learn the instruction set architecture (ISA) of a CPU and write programs that manipulate registers, memory, and I/O devices directly. We\'ll implement our own assembler from scratch that translates assembly code into machine code, gaining insight into how higher-level languages are ultimately converted to instructions that hardware can execute. This bottom-up approach gives you unparalleled control and understanding of the machine.',
        parentId: 'programming'
    },
    {
        id: 'language_design',
        title: 'Programming Language Design',
        description: 'Creating your own programming language',
        content: 'Programming language design explores the principles and trade-offs involved in creating languages. This topic covers language paradigms (imperative, functional, object-oriented), syntax design, semantics, type systems, and evaluation models. Instead of just using existing languages, you\'ll design your own programming language from scratch, making conscious decisions about its features and implementation. By understanding the fundamental concepts behind languages rather than just their surface syntax, you\'ll become a more effective programmer in any language and gain insight into why languages are designed the way they are.',
        parentId: 'programming'
    },
    {
        id: 'compiler_construction',
        title: 'Compiler & Interpreter Construction',
        description: 'Building tools that translate and execute code',
        content: 'Compilers and interpreters are programs that translate source code into executable forms. This topic covers the complete pipeline: lexical analysis (breaking code into tokens), syntax analysis (parsing into structured representations), semantic analysis (checking meaning and types), optimization, and code generation. You\'ll implement a complete compiler or interpreter from scratch for the language you\'ve designed, without using existing compiler frameworks or parser generators. This hands-on approach demystifies the "magic" of how programming languages work and provides deep insight into the relationship between code and machine execution.',
        parentId: 'programming'
    },
    {
        id: 'systems_programming',
        title: 'Systems Programming',
        description: 'Creating software that interfaces with hardware',
        content: 'Systems programming involves creating software that provides services to the computer hardware and other software. This topic covers the development of operating systems, device drivers, embedded systems, and other low-level software. You\'ll learn how to write code that interacts directly with hardware, manages system resources, and provides abstractions for higher-level applications. Instead of using existing APIs and libraries, you\'ll implement core system services from scratch, developing a deep understanding of the critical software that forms the foundation of computing systems.',
        parentId: 'programming'
    },
    
    // Operating Systems
    {
        id: 'systems',
        title: 'Operating Systems',
        description: 'Building computer operating systems from first principles',
        content: 'Operating systems are the fundamental software that manages computer hardware and provides common services for computer programs. Our "Build from Scratch" approach teaches you to design and implement every component of an operating system yourself, without relying on existing implementations or high-level abstractions. You\'ll learn how to create a functional OS from basic principles, understanding every layer from hardware interaction to user interfaces.',
        parentId: null
    },
    {
        id: 'boot_process',
        title: 'Boot Process & Kernel Initialization',
        description: 'How computers start up and load the operating system',
        content: 'The boot process is the sequence of steps that happens from when a computer is powered on until the operating system is fully loaded and running. This topic explores the entire sequence from the BIOS/UEFI firmware to the bootloader to kernel initialization. You\'ll implement your own bootloader from scratch that can load a simple kernel into memory and transfer control to it. We\'ll cover early hardware initialization, memory setup, and the transition from real mode to protected mode. By avoiding existing bootloaders and understanding this critical process from first principles, you\'ll gain insight into the foundation of OS operation.',
        parentId: 'systems'
    },
    {
        id: 'process_management',
        title: 'Process Management',
        description: 'Creating and controlling execution units',
        content: 'Process management is how operating systems create, schedule, and terminate programs. This topic covers the implementation of processes and threads, context switching, scheduling algorithms, and inter-process communication. You\'ll build a complete process subsystem from scratch, including process control blocks, a scheduler, and synchronization primitives. Instead of using existing implementations, you\'ll develop your own data structures and algorithms to manage execution efficiently. This approach provides deep insight into how modern multi-tasking operating systems allow multiple programs to run concurrently on limited hardware resources.',
        parentId: 'systems'
    },
    {
        id: 'memory_management',
        title: 'Memory Management',
        description: 'Efficiently allocating and protecting memory resources',
        content: 'Memory management is how operating systems control and allocate the computer\'s main memory. This topic covers physical and virtual memory systems, paging, segmentation, and address translation. You\'ll implement your own memory manager from scratch, including page tables, allocation algorithms, and a virtual memory system. We\'ll explore protection mechanisms that prevent processes from interfering with each other\'s memory space. By building these components yourself rather than relying on existing implementations, you\'ll understand the complex tradeoffs involved in memory management and gain insight into how modern systems efficiently utilize limited memory resources.',
        parentId: 'systems'
    },
    {
        id: 'filesystem',
        title: 'File Systems',
        description: 'Organizing and storing persistent data',
        content: 'File systems provide a mechanism to store, organize, and retrieve data on storage devices. This topic covers the design and implementation of file systems from first principles. You\'ll learn about different file system structures, directory organization, allocation methods, and metadata management. We\'ll implement our own simple file system from scratch, including the low-level disk access, data structures for tracking files and directories, and the system calls that applications use to interact with the file system. This approach avoids using existing file system implementations, giving you a deep understanding of how data is persistently stored and managed.',
        parentId: 'systems'
    },
    {
        id: 'device_drivers',
        title: 'Device Drivers & I/O',
        description: 'Interfacing with hardware devices',
        content: 'Device drivers are software components that allow the operating system to communicate with hardware devices. This topic covers the principles of device driver development and I/O subsystems. You\'ll implement drivers from scratch for common devices (keyboard, display, disk), learning about device registers, interrupts, DMA, and bus protocols. We\'ll build a device driver framework that abstracts hardware details while providing efficient access to devices. By writing drivers directly rather than using existing ones, you\'ll gain insight into the critical interface between hardware and software, and understand how operating systems provide uniform access to diverse hardware devices.',
        parentId: 'systems'
    },

    // Networking
    {
        id: 'networks',
        title: 'Networking',
        description: 'Building network systems and protocols from scratch',
        content: 'Computer networking is the practice of connecting computers to share resources and communicate. Our "Build from Scratch" approach means learning about every layer of the network stack, from the physical transmission of signals to application protocols, implementing each component yourself. This comprehensive understanding allows you to build, optimize, and troubleshoot network systems with insight that\'s impossible to gain by just using existing implementations.',
        parentId: null
    },
    {
        id: 'physical_layer',
        title: 'Physical Layer & Signal Transmission',
        description: 'How bits become signals on physical media',
        content: 'The physical layer is where digital bits are converted into signals that can be transmitted over physical media. This topic explores the fundamental physics and electrical engineering principles behind data transmission. You\'ll learn about different transmission media (copper wire, fiber optic, wireless), signaling methods, modulation techniques, and encoding schemes. We\'ll implement simple physical layer protocols from scratch, using basic electronic components to send and receive data. This approach avoids treating the physical layer as a black box, instead building understanding from electromagnetic principles upward, giving you insight into the true foundation of all networking.',
        parentId: 'networks'
    },
    {
        id: 'data_link_layer',
        title: 'Data Link Layer & MAC Protocols',
        description: 'Creating reliable links between directly connected devices',
        content: 'The data link layer provides reliable transmission of data frames between directly connected nodes. This topic covers frame formats, error detection and correction, medium access control (MAC) protocols, and basic switching. You\'ll implement your own data link protocols from scratch, including Ethernet-like framing, error-checking algorithms (CRC), and collision handling mechanisms (CSMA/CD). Rather than using existing network interface drivers, we\'ll build a complete link layer that can reliably transmit frames over an unreliable physical connection, developing deep insight into how networks manage shared media and handle transmission errors.',
        parentId: 'networks'
    },
    {
        id: 'network_layer',
        title: 'Network Layer & Routing',
        description: 'Finding paths through interconnected networks',
        content: 'The network layer handles routing packets across multiple networks to reach their destination. This topic explores IP addressing, subnet design, routing algorithms, and packet forwarding. You\'ll implement your own network layer protocol from scratch, including address assignment, routing tables, and forwarding logic. We\'ll build routing algorithms that can find optimal paths through complex network topologies, simulating how the internet itself works. By avoiding existing IP implementations and routing protocols, you\'ll gain a deep understanding of how data finds its way across the global internet infrastructure.',
        parentId: 'networks'
    },
    {
        id: 'transport_layer',
        title: 'Transport Layer Protocols',
        description: 'Creating reliable end-to-end communication',
        content: 'The transport layer provides end-to-end communication services for applications, including reliability, flow control, and congestion management. This topic covers protocol design for both reliable (TCP-like) and unreliable (UDP-like) transport. You\'ll implement your own transport protocols from scratch, including connection establishment, acknowledgment mechanisms, retransmission strategies, and congestion control algorithms. Rather than using existing TCP/UDP implementations, we\'ll build a complete transport layer that applications can use to communicate reliably over unreliable networks. This hands-on approach provides deep insight into the challenges and solutions of internet-scale communication.',
        parentId: 'networks'
    },
    {
        id: 'application_protocols',
        title: 'Application Layer Protocols',
        description: 'Building protocols for specific applications',
        content: 'Application layer protocols define how applications communicate over a network. This topic explores the design and implementation of protocols for specific purposes like file transfer, web access, email, and real-time communication. You\'ll implement your own application protocols from scratch, developing clients and servers that can interoperate using well-defined message formats and sequences. Rather than using existing libraries or frameworks, we\'ll build complete application-level communication systems that solve real-world problems. This approach provides insight into protocol design considerations, state management, and the tradeoffs involved in networked application development.',
        parentId: 'networks'
    },

    // Algorithms & Data Structures
    {
        id: 'algorithms',
        title: 'Algorithms & Data Structures',
        description: 'Implementing efficient solutions from first principles',
        content: 'Algorithms are step-by-step procedures for solving problems, while data structures organize data for efficient access and modification. Our "Build from Scratch" approach means implementing every algorithm and data structure yourself, understanding their mathematical foundations, and analyzing their efficiency. Rather than using existing libraries, you\'ll gain the skills to design and optimize solutions for any computational problem.',
        parentId: null
    },
    {
        id: 'basic_data_structures',
        title: 'Basic Data Structures',
        description: 'Fundamental ways to organize data',
        content: 'Basic data structures provide the foundation for efficiently organizing and accessing data in memory. This topic covers the implementation of fundamental structures like arrays, linked lists, stacks, queues, and hash tables. You\'ll build each of these structures from scratch, starting with primitive memory operations and implementing all the necessary operations and algorithms. Rather than using language-provided containers or libraries, we\'ll develop our own implementations, gaining insight into memory management, pointers, and the tradeoffs between different ways of organizing data. This approach builds a deep understanding of how data is stored and manipulated in computer systems.',
        parentId: 'algorithms'
    },
    {
        id: 'advanced_data_structures',
        title: 'Advanced Data Structures',
        description: 'Sophisticated structures for complex problems',
        content: 'Advanced data structures provide efficient solutions for more complex data management problems. This topic covers the implementation of sophisticated structures like balanced trees (AVL, Red-Black), B-trees, heaps, tries, and graphs. You\'ll build each of these structures from scratch, including all the balancing operations, traversal algorithms, and optimizations that make them effective. Instead of using existing libraries, we\'ll develop our own implementations, gaining insight into the mathematical properties and algorithmic techniques that enable efficient operations on large datasets. This approach builds the skills to design custom data structures for specific problem domains.',
        parentId: 'algorithms'
    },
    {
        id: 'searching_sorting',
        title: 'Searching & Sorting Algorithms',
        description: 'Finding and organizing data efficiently',
        content: 'Searching and sorting are fundamental operations in computing that arrange and locate data. This topic covers algorithms for efficiently searching through data (linear, binary, hashing) and sorting collections (bubble, insertion, selection, merge, quick, heap). You\'ll implement each algorithm from scratch, analyzing their time and space complexity mathematically. Rather than using language-provided functions or libraries, we\'ll develop our own implementations, gaining insight into algorithm design, correctness proofs, and optimization techniques. This approach builds a deep understanding of algorithmic efficiency and the tradeoffs involved in different approaches.',
        parentId: 'algorithms'
    },
    {
        id: 'graph_algorithms',
        title: 'Graph Algorithms',
        description: 'Solving problems on interconnected data',
        content: 'Graph algorithms provide solutions for problems involving relationships between objects. This topic covers algorithms for traversal (BFS, DFS), shortest paths (Dijkstra\'s, Bellman-Ford), minimum spanning trees (Prim\'s, Kruskal\'s), and network flow. You\'ll implement each algorithm from scratch, representing graphs using appropriate data structures and developing the necessary algorithmic logic. Rather than using existing graph libraries, we\'ll build complete implementations that can solve real-world problems in areas like social networks, transportation systems, and computer networks. This approach provides deep insight into the mathematical properties of graphs and the algorithmic techniques that exploit their structure.',
        parentId: 'algorithms'
    },
    {
        id: 'algorithm_design',
        title: 'Algorithm Design Techniques',
        description: 'Strategies for creating efficient algorithms',
        content: 'Algorithm design techniques provide systematic approaches to solving computational problems. This topic explores paradigms like divide-and-conquer, dynamic programming, greedy algorithms, and backtracking. You\'ll implement algorithms based on each technique from scratch, applying them to solve complex problems. Rather than memorizing existing solutions, we\'ll develop the skills to recognize which technique is appropriate for a given problem and how to apply it effectively. This approach builds analytical thinking and problem-solving abilities, enabling you to design efficient algorithms for novel problems rather than just using pre-built solutions.',
        parentId: 'algorithms'
    },

    // Databases
    {
        id: 'databases',
        title: 'Databases',
        description: 'Building database systems from first principles',
        content: 'Database systems provide organized mechanisms to store, manage, and retrieve information. Our "Build from Scratch" approach means implementing every component of a database system yourself, from storage engines and query processors to transaction managers. Rather than just using existing database systems, you\'ll understand how they work internally and be able to design storage solutions for any data management problem.',
        parentId: null
    },
    {
        id: 'storage_engines',
        title: 'Storage Engines & Data Organization',
        description: 'How databases physically store and retrieve data',
        content: 'Storage engines are the components of database systems that manage how data is stored on disk and in memory. This topic explores the physical organization of data, including file formats, page layouts, and access methods. You\'ll implement your own storage engine from scratch, designing data structures for efficient storage and retrieval of records. We\'ll cover indexing techniques like B-trees and hash indexes, implementing these structures ourselves rather than using existing libraries. This approach provides deep insight into the fundamental challenges of persistent storage, including durability, concurrency, and performance optimization.',
        parentId: 'databases'
    },
    {
        id: 'query_processing',
        title: 'Query Processing & Execution',
        description: 'Translating queries into efficient operations',
        content: 'Query processing is how database systems translate user queries into execution plans that retrieve or modify data. This topic covers query parsing, optimization, and execution strategies. You\'ll implement your own query processor from scratch, including a parser for a SQL-like language, an optimizer that can rewrite queries for efficiency, and an execution engine that carries out the operations. Rather than using existing query engines, we\'ll build a complete system that can understand and efficiently execute complex queries. This approach provides insight into the algorithms and techniques that enable databases to answer questions about large datasets quickly.',
        parentId: 'databases'
    },
    {
        id: 'transaction_management',
        title: 'Transaction Management',
        description: 'Ensuring data consistency during concurrent operations',
        content: 'Transaction management ensures that database operations maintain consistency even during concurrent access and system failures. This topic covers ACID properties, concurrency control mechanisms, isolation levels, and recovery techniques. You\'ll implement your own transaction manager from scratch, including locking protocols, deadlock detection, write-ahead logging, and crash recovery. Rather than relying on existing transaction systems, we\'ll build a complete implementation that can correctly handle multiple clients modifying data simultaneously. This approach provides deep insight into the theoretical and practical challenges of maintaining data integrity in multi-user systems.',
        parentId: 'databases'
    },
    {
        id: 'database_design',
        title: 'Database Design & Normalization',
        description: 'Structuring data for consistency and efficiency',
        content: 'Database design is the process of structuring data to represent real-world entities and relationships efficiently. This topic covers data modeling techniques, normalization theory, and schema design. You\'ll learn how to analyze application requirements and create appropriate database schemas that minimize redundancy while supporting required queries. We\'ll implement integrity constraints and explore the mathematical foundations of the relational model. Rather than using automated design tools, you\'ll develop the skills to manually design optimal database structures, gaining insight into the theoretical principles that guide schema design decisions.',
        parentId: 'databases'
    },
    {
        id: 'distributed_databases',
        title: 'Distributed Database Systems',
        description: 'Building databases that span multiple machines',
        content: 'Distributed database systems store and process data across multiple computers for improved scalability, availability, and reliability. This topic explores the challenges and solutions for distributing data, including partitioning strategies, replication protocols, distributed transactions, and consensus algorithms. You\'ll implement components of a distributed database from scratch, including mechanisms for data distribution, consistency maintenance, and fault tolerance. Rather than using existing distributed systems, we\'ll build our own implementations of key protocols like two-phase commit and Paxos. This approach provides deep insight into the fundamental trade-offs in distributed systems and the techniques used to overcome the challenges of network partitions and node failures.',
        parentId: 'databases'
    },

    // Cybersecurity
    {
        id: 'security',
        title: 'Cybersecurity',
        description: 'Building security systems and controls from first principles',
        content: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. Our "Build from Scratch" approach means implementing security mechanisms yourself, understanding the mathematical foundations of cryptography, and learning to think like both defenders and attackers. Rather than just using existing security tools, you\'ll gain the knowledge to design secure systems from the ground up and evaluate the security of any digital system.',
        parentId: null
    },
    
    // AI & Machine Learning
    {
        id: 'ai_ml',
        title: 'AI & Machine Learning',
        description: 'Building intelligent systems from mathematical foundations',
        content: 'Artificial Intelligence enables machines to simulate human intelligence, while Machine Learning allows systems to learn from data without explicit programming. Our "Build from Scratch" approach means implementing AI algorithms and ML models yourself, starting from their mathematical foundations. Rather than using existing frameworks and libraries, you\'ll gain the knowledge to design, train, and evaluate intelligent systems from first principles.',
        parentId: null
    },
    
    // Theory of Computation
    {
        id: 'theory',
        title: 'Theory of Computation',
        description: 'Mathematical foundation of computation and algorithms',
        content: 'Theory of Computation is the mathematical study of the capabilities and limitations of computing systems. Our "Build from Scratch" approach means learning the formal models and mathematical proofs that define computation, then implementing these models yourself. This deep theoretical understanding provides insight into what can and cannot be computed, and forms the foundation for practical algorithm design and analysis.',
        parentId: null
    },
    
    // Software Engineering
    {
        id: 'software_eng',
        title: 'Software Engineering',
        description: 'Building quality software systems from first principles',
        content: 'Software Engineering is the systematic application of engineering approaches to software development. Our "Build from Scratch" approach means designing and implementing software systems yourself, understanding every component rather than relying on existing frameworks. You\'ll learn methodologies for building reliable, maintainable, and efficient software, with an emphasis on understanding why certain practices work rather than just following established processes.',
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