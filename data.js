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
        title: 'Hardware & Computer Architecture',
        description: 'Understanding computer hardware from transistors to complete systems',
        content: 'Computer hardware encompasses all the physical components that make up a computing system. This includes everything from individual transistors to complete integrated systems.',
        parentId: null
    },
    {
        id: 'programming',
        title: 'Programming & Languages',
        description: 'Programming concepts, paradigms, and languages',
        content: 'Programming and languages form the bridge between human intention and machine execution. This area explores how we communicate with computers through code.',
        parentId: null
    },
    {
        id: 'data_structures',
        title: 'Data Structures & Algorithms',
        description: 'Efficient ways to organize and process data',
        content: 'Data structures and algorithms are fundamental to computer science. They provide efficient ways to store, organize, and manipulate data, and they form the basis of most software systems.',
        parentId: null
    },
    {
        id: 'operating_systems',
        title: 'Operating Systems',
        description: 'Software that manages computer hardware and provides services for programs',
        content: 'Operating systems are the critical interface between hardware and software. They manage resources, provide security, and enable applications to run effectively on computing hardware.',
        parentId: null
    },
    {
        id: 'networks',
        title: 'Computer Networks',
        description: 'How computers communicate with each other',
        content: 'Computer networks enable computers to communicate and share resources. From local networks to the global internet, networking technologies connect our digital world.',
        parentId: null
    },
    {
        id: 'databases',
        title: 'Databases & Storage',
        description: 'Storing, retrieving, and managing data',
        content: 'Databases and storage systems are designed to organize, store, and retrieve structured data efficiently. They are essential components in most software applications.',
        parentId: null
    },
    {
        id: 'ai_ml',
        title: 'AI & Machine Learning',
        description: 'Intelligent systems and algorithms',
        content: 'Artificial Intelligence and Machine Learning are fields concerned with creating systems that can perform tasks that typically require human intelligence. These areas are transforming how we interact with technology.',
        parentId: null
    },
    {
        id: 'software_engineering',
        title: 'Software Engineering',
        description: 'Principles and practices of software development',
        content: 'Software Engineering encompasses the systematic approach to developing, operating, and maintaining complex software systems. It applies engineering principles to software creation.',
        parentId: null
    },
    {
        id: 'security',
        title: 'Computer Security',
        description: 'Protecting computer systems and data',
        content: 'Computer Security focuses on protecting computing systems, networks, and data from unauthorized access and attacks. It's an increasingly critical aspect of our connected world.',
        parentId: null
    },
    
    // CS Foundations Subtopics
    {
        id: 'binary',
        title: 'Binary & Number Systems',
        description: 'Understanding binary, hexadecimal, and other number systems',
        content: 'Binary is the fundamental language of computers, using only 0s and 1s to represent all information. This section explores binary and other number systems, and how they are used in computing.',
        parentId: 'cs_foundations'
    },
    {
        id: 'boolean_logic',
        title: 'Boolean Logic & Digital Logic',
        description: 'Logical operations and digital circuits',
        content: 'Boolean logic is a form of algebra where variables have values of either true or false (1 or 0). It forms the foundation of digital circuits and computer operations.',
        parentId: 'cs_foundations'
    },
    {
        id: 'computation_theory',
        title: 'Theory of Computation',
        description: 'What computers can and cannot compute',
        content: 'The theory of computation explores the fundamental capabilities and limitations of computers. It addresses questions about what problems can be solved algorithmically and how efficiently.',
        parentId: 'cs_foundations'
    },
    {
        id: 'math_cs',
        title: 'Mathematics for CS',
        description: 'Essential mathematical concepts for computer science',
        content: 'Computer science relies on various mathematical concepts, including discrete mathematics, logic, set theory, graph theory, and probability. These provide the theoretical foundation for many CS applications.',
        parentId: 'cs_foundations'
    },
    
    // Hardware Subtopics
    {
        id: 'digital_logic',
        title: 'Digital Logic & Gates',
        description: 'Building blocks of digital circuits',
        content: `
        <h2>Digital Logic & Gates</h2>
        
        <h3>From Transistors to Logic Circuits</h3>
        <p>At the most fundamental level, all computer logic begins with transistors. A transistor is a semiconductor device that can amplify or switch electronic signals. In digital computers, transistors act as tiny electronic switches that can be either ON or OFF, directly implementing the binary values 1 and 0.</p>
        
        <h4>Building from Transistors</h4>
        <p>The most fundamental building block is the NOT gate (inverter). It can be constructed using as few as two transistors:</p>
        <ul>
            <li>When the input is LOW (0), the output is HIGH (1)</li>
            <li>When the input is HIGH (1), the output is LOW (0)</li>
        </ul>
        
        <p>From this simple beginning, we can build more complex logic gates:</p>
        
        <h4>Basic Logic Gates</h4>
        <ul>
            <li><strong>AND Gate:</strong> Output is 1 only if all inputs are 1</li>
            <li><strong>OR Gate:</strong> Output is 1 if at least one input is 1</li>
            <li><strong>NOT Gate:</strong> Output is the opposite of the input</li>
            <li><strong>NAND Gate:</strong> Combination of NOT and AND (universal gate)</li>
            <li><strong>NOR Gate:</strong> Combination of NOT and OR (universal gate)</li>
            <li><strong>XOR Gate:</strong> Output is 1 when inputs are different</li>
            <li><strong>XNOR Gate:</strong> Output is 1 when inputs are the same</li>
        </ul>
        
        <h3>Building Complex Circuits</h3>
        <p>Using these basic gates, we can construct more complex digital circuits like:</p>
        
        <h4>Combinational Circuits</h4>
        <ul>
            <li><strong>Half Adder:</strong> Adds two single binary digits</li>
            <li><strong>Full Adder:</strong> Adds three binary digits (including carry)</li>
            <li><strong>Multiplexer:</strong> Selects one of many input signals and forwards it to the output</li>
            <li><strong>Demultiplexer:</strong> Takes a single input and routes it to one of many outputs</li>
            <li><strong>Encoder/Decoder:</strong> Converts between different data formats</li>
        </ul>
        
        <h4>Sequential Circuits</h4>
        <ul>
            <li><strong>Flip-Flops:</strong> Basic memory elements that store a single bit</li>
            <li><strong>Registers:</strong> Groups of flip-flops that store multiple bits</li>
            <li><strong>Counters:</strong> Circuits that count clock pulses</li>
            <li><strong>Memory Units:</strong> Arrays of storage elements</li>
        </ul>
        
        <h3>Build-From-Scratch Project: 1-bit Adder</h3>
        <p>To understand digital logic thoroughly, try building a 1-bit adder from individual transistors:</p>
        <ol>
            <li>Build NOT gates using NMOS or CMOS transistors</li>
            <li>Combine transistors to create NAND or NOR gates</li>
            <li>Use these gates to build XOR gates and AND gates</li>
            <li>Combine these into a half-adder (sum and carry outputs)</li>
            <li>Expand to a full adder by adding a carry-in input</li>
        </ol>
        
        <p>This project demonstrates how complex computing functions can be built from the simplest electronic components, forming the foundation of all computer hardware.</p>
        `,
        parentId: 'hardware'
    },
    {
        id: 'computer_arch',
        title: 'Computer Architecture',
        description: 'How computers are designed and organized',
        content: `
        <h2>Computer Architecture</h2>
        
        <h3>From Logic Gates to Complete Systems</h3>
        <p>Computer architecture is the design and organization of a computing system, from the lowest level of logic gates to the highest level of system organization. Understanding computer architecture means knowing how to build every component from simpler parts.</p>
        
        <h4>Building a CPU from Scratch</h4>
        <p>A CPU (Central Processing Unit) can be built entirely from logic gates. At its core, a CPU consists of:</p>
        <ul>
            <li><strong>ALU (Arithmetic Logic Unit):</strong> Performs calculations and logical operations</li>
            <li><strong>Control Unit:</strong> Directs the operation of the processor</li>
            <li><strong>Registers:</strong> Small, fast storage locations within the CPU</li>
            <li><strong>Clock:</strong> Synchronizes all CPU operations</li>
        </ul>
        
        <p>Each of these components can be constructed from basic logic gates. For example, an ALU is built from adders, multiplexers, and logic gates, while registers are made from flip-flops.</p>
        
        <h3>Memory Hierarchy</h3>
        <p>Modern computers use a memory hierarchy to balance speed and capacity:</p>
        <ul>
            <li><strong>Registers:</strong> Fastest but smallest storage, built into the CPU</li>
            <li><strong>Cache:</strong> Fast memory close to the CPU (L1, L2, L3)</li>
            <li><strong>Main Memory (RAM):</strong> Larger but slower than cache</li>
            <li><strong>Secondary Storage:</strong> Hard drives, SSDs - very large but relatively slow</li>
        </ul>
        
        <p>Each level can be understood from its building blocks - from the transistors in SRAM cells to the capacitors in DRAM.</p>
        
        <h3>Instruction Execution</h3>
        <p>A CPU executes instructions through a cycle known as the fetch-decode-execute cycle:</p>
        <ol>
            <li><strong>Fetch:</strong> Retrieve instruction from memory</li>
            <li><strong>Decode:</strong> Determine what the instruction means</li>
            <li><strong>Execute:</strong> Perform the operation</li>
            <li><strong>Memory access:</strong> Read from or write to memory if needed</li>
            <li><strong>Write back:</strong> Write results to registers</li>
        </ol>
        
        <p>This process is implemented through a network of control signals and data paths between components.</p>
        
        <h3>CPU Architectures</h3>
        <p>Different CPU architectures organize these components in different ways:</p>
        <ul>
            <li><strong>RISC (Reduced Instruction Set Computer):</strong> Simpler instructions that execute in a single cycle</li>
            <li><strong>CISC (Complex Instruction Set Computer):</strong> More complex instructions that may take multiple cycles</li>
            <li><strong>VLIW (Very Long Instruction Word):</strong> Multiple operations specified in a single instruction</li>
            <li><strong>Harvard vs. von Neumann:</strong> Separate vs. unified memory for instructions and data</li>
        </ul>
        
        <h3>Build-From-Scratch Project: Simple CPU</h3>
        <p>To truly understand computer architecture, try building a simple CPU from logic gates:</p>
        <ol>
            <li>Design an ALU that can perform basic operations (ADD, SUB, AND, OR, NOT)</li>
            <li>Create registers using D flip-flops</li>
            <li>Build a control unit that decodes instructions</li>
            <li>Implement a simple instruction set with opcodes</li>
            <li>Connect everything with a data bus and control signals</li>
            <li>Write a simple program in machine code to test your CPU</li>
        </ol>
        
        <p>This project demonstrates how complex computing systems can be built from the ground up, giving you a deep understanding of how computers actually work at their most fundamental level.</p>
        `,
        parentId: 'hardware'
    },
    {
        id: 'memory_systems',
        title: 'Memory Systems',
        description: 'How computers store and access data',
        content: 'Memory systems are the components that store data for processing in a computer system. They range from very fast, small capacity cache memory to slower, much larger capacity storage devices.',
        parentId: 'hardware'
    },
    {
        id: 'io_peripherals',
        title: 'I/O & Peripherals',
        description: 'Input/output systems and peripheral devices',
        content: 'Input/Output systems and peripherals allow computers to interact with the external world and with users. They include everything from keyboards and mice to network adapters and graphics cards.',
        parentId: 'hardware'
    },
    
    // Programming Subtopics
    {
        id: 'programming_basics',
        title: 'Programming Fundamentals',
        description: 'Basic concepts of programming',
        content: 'Programming fundamentals include the core concepts and skills needed to write computer programs. These include understanding variables, data types, control structures, functions, and basic problem-solving techniques.',
        parentId: 'programming'
    },
    {
        id: 'programming_paradigms',
        title: 'Programming Paradigms',
        description: 'Different approaches to programming',
        content: 'Programming paradigms are different approaches to organizing code and solving problems. Common paradigms include imperative, object-oriented, functional, and logical programming, each with its own strengths and applications.',
        parentId: 'programming'
    },
    {
        id: 'language_design',
        title: 'Language Design & Implementation',
        description: 'How programming languages are designed and implemented',
        content: 'Programming language design and implementation involves creating the syntax, semantics, and features of a language, as well as building compilers or interpreters that transform code into executable instructions.',
        parentId: 'programming'
    },
    {
        id: 'compilers',
        title: 'Compilers & Interpreters',
        description: 'How code is translated into machine instructions',
        content: 'Compilers and interpreters are tools that translate human-readable programming code into instructions that computers can execute. Compilers generate executable files, while interpreters execute code line by line.',
        parentId: 'programming'
    },
    
    // More topics and subtopics can be added here
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
        topic.content.toLowerCase().includes(query)
    );
}