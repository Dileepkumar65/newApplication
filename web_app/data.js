// CS Learning Guide Data

const topics = [
    {
        id: 1,
        title: "Computer Architecture",
        description: "Study of the structure, organization, and design of computer hardware components",
        content: `<h2>Computer Architecture</h2>
                <p>Computer architecture is the conceptual design and fundamental operational structure of a 
                computer system. It focuses on how the hardware components work together to execute software 
                instructions.</p>
                <p>The main aspects of computer architecture include:</p>
                <ul>
                <li>Instruction Set Architecture (ISA): The set of instructions that the processor can understand and execute</li>
                <li>Microarchitecture: The way the ISA is implemented in a processor</li>
                <li>System Design: How different components like CPU, memory, and I/O devices interact</li>
                </ul>
                <p>Understanding computer architecture helps in designing efficient hardware systems and optimizing 
                software for better performance.</p>`,
        parentId: 0,
        order: 1
    },
    {
        id: 2,
        title: "Programming Languages",
        description: "Study of languages used to develop software and applications",
        content: `<h2>Programming Languages</h2>
                <p>Programming languages are formal languages that allow developers to write instructions that can be 
                executed by computers. These languages serve as a bridge between human thought processes and machine 
                execution.</p>
                <p>Programming languages are classified into different paradigms:</p>
                <ul>
                <li>Imperative: Focuses on how to achieve results with sequences of statements that change program state</li>
                <li>Functional: Treats computation as the evaluation of mathematical functions and avoids state changes</li>
                <li>Object-Oriented: Uses objects and classes for organizing code and data</li>
                <li>Declarative: Focuses on what the program should accomplish without specifying how</li>
                </ul>
                <p>Different languages excel at different types of tasks, and choosing the right language depends on the 
                specific requirements of your project.</p>`,
        parentId: 0,
        order: 2
    },
    {
        id: 3,
        title: "Operating Systems",
        description: "Software that manages computer hardware and provides services for computer programs",
        content: `<h2>Operating Systems</h2>
                <p>An operating system (OS) is system software that manages computer hardware, software resources, and 
                provides common services for computer programs.</p>
                <p>Key responsibilities of an operating system include:</p>
                <ul>
                <li>Process Management: Creating, scheduling, and terminating processes</li>
                <li>Memory Management: Allocating and deallocating memory to programs</li>
                <li>File System Management: Organizing and accessing files and directories</li>
                <li>Device Management: Controlling I/O devices and providing interfaces to them</li>
                <li>Security: Protecting system resources and user data</li>
                </ul>
                <p>Examples of operating systems include Windows, macOS, Linux, iOS, and Android. Each has its own 
                architecture and design principles, but they all serve the fundamental purpose of abstracting hardware 
                details from applications and providing a convenient environment for running software.</p>`,
        parentId: 0,
        order: 3
    },
    {
        id: 4,
        title: "Embedded Systems",
        description: "Computer systems with dedicated functions within larger mechanical or electrical systems",
        content: `<h2>Embedded Systems</h2>
                <p>Embedded systems are computer systems designed to perform dedicated functions within larger 
                mechanical or electrical systems. Unlike general-purpose computers, embedded systems are optimized 
                for specific tasks, often with real-time computing constraints.</p>
                <p>Key characteristics of embedded systems:</p>
                <ul>
                <li>Single-function or limited functionality</li>
                <li>Tightly constrained in terms of size, power, and memory</li>
                <li>Often required to respond to events in real-time</li>
                <li>Usually built around microcontrollers or microprocessors</li>
                </ul>
                <p>Examples of embedded systems include automotive control systems, medical devices, industrial 
                automation equipment, consumer electronics, and IoT devices.</p>
                <p>Embedded systems programming typically requires specialized knowledge of hardware interfaces, 
                memory constraints, and real-time programming techniques.</p>`,
        parentId: 0,
        order: 4
    },
    {
        id: 5,
        title: "Networking",
        description: "Study of how computers and devices communicate with each other",
        content: `<h2>Networking</h2>
                <p>Computer networking is the practice of connecting computers and devices to share data and resources. 
                Networks range from small local networks to the global Internet.</p>
                <p>Key concepts in networking:</p>
                <ul>
                <li>Network Protocols: Rules that govern communication between devices</li>
                <li>OSI Model: A conceptual framework that standardizes network communication functions</li>
                <li>TCP/IP: The fundamental suite of protocols that power the Internet</li>
                <li>Network Topologies: Physical and logical arrangements of networks</li>
                <li>Routing and Switching: Methods for directing data between networks and devices</li>
                <li>Network Security: Protecting information and systems from unauthorized access</li>
                </ul>
                <p>Understanding networking principles is essential for developing distributed applications, cloud 
                systems, and any software that communicates over networks.</p>`,
        parentId: 0,
        order: 5
    },
    {
        id: 6,
        title: "User Interfaces and Applications",
        description: "Design and development of interfaces between computers and humans",
        content: `<h2>User Interfaces and Applications</h2>
                <p>User interfaces (UI) are the points of interaction between humans and computers. They encompass 
                both hardware interfaces (like keyboards and touchscreens) and software interfaces (like graphical 
                user interfaces).</p>
                <p>Key aspects of UI design and development:</p>
                <ul>
                <li>User Experience (UX) Design: Creating intuitive and satisfying user experiences</li>
                <li>Frontend Development: Implementing user interfaces using technologies like HTML, CSS, and JavaScript</li>
                <li>Backend Development: Building server-side logic that powers applications</li>
                <li>Mobile Development: Creating applications for smartphones and tablets</li>
                <li>Accessibility: Ensuring interfaces can be used by people with disabilities</li>
                </ul>
                <p>Modern application development often separates frontend and backend concerns, with APIs facilitating 
                communication between them. This approach allows for more specialized development and better scalability.</p>`,
        parentId: 0,
        order: 6
    },
    {
        id: 7,
        title: "Machine Learning and AI",
        description: "Study of algorithms that allow computers to learn from and make decisions based on data",
        content: `<h2>Machine Learning and AI</h2>
                <p>Machine Learning (ML) and Artificial Intelligence (AI) involve creating systems that can learn from 
                data and make decisions with minimal human intervention.</p>
                <p>Key areas in ML and AI:</p>
                <ul>
                <li>Supervised Learning: Training models on labeled data</li>
                <li>Unsupervised Learning: Finding patterns in unlabeled data</li>
                <li>Reinforcement Learning: Training agents through reward-based feedback</li>
                <li>Deep Learning: Using neural networks with multiple layers</li>
                <li>Natural Language Processing: Enabling computers to understand and generate human language</li>
                <li>Computer Vision: Allowing machines to interpret and understand visual information</li>
                </ul>
                <p>ML and AI are transforming industries by automating complex tasks, providing insights from large 
                datasets, and enabling new capabilities in software and systems.</p>`,
        parentId: 0,
        order: 7
    },
    // Computer Architecture Subtopics
    {
        id: 8,
        title: "CPU Design",
        description: "The architecture and implementation of processors",
        content: `<h2>CPU Design</h2>
                <p>CPU (Central Processing Unit) design involves creating the electronic circuitry that executes 
                instructions in a computer program. Modern CPU design combines electrical engineering, computer 
                science, and materials science principles.</p>
                <h3>Key Components of a CPU:</h3>
                <ul>
                <li><strong>Arithmetic Logic Unit (ALU):</strong> Performs arithmetic and logical operations</li>
                <li><strong>Control Unit:</strong> Directs the operation of the processor by telling the computer's memory, 
                ALU and I/O devices how to respond to the instructions sent to the CPU</li>
                <li><strong>Registers:</strong> Small, fast storage locations within the CPU for temporary data storage and manipulation</li>
                <li><strong>Cache Memory:</strong> High-speed memory that stores frequently accessed data to reduce access time</li>
                </ul>
                <h3>CPU Design Concepts:</h3>
                <ul>
                <li><strong>Instruction Set Architecture (ISA):</strong> The part of the computer architecture related to programming, 
                including instructions, registers, memory addressing, etc.</li>
                <li><strong>Microarchitecture:</strong> The implementation of the ISA, involving how the CPU is organized and how it functions</li>
                <li><strong>Clock Speed:</strong> The operating frequency of the CPU, measured in Hertz (Hz)</li>
                <li><strong>Pipelining:</strong> Technique for executing multiple instructions simultaneously at different stages</li>
                <li><strong>Superscalar Execution:</strong> Ability to execute multiple instructions in a single clock cycle</li>
                <li><strong>Out-of-Order Execution:</strong> Executing instructions in an order different from the original program order 
                to improve performance</li>
                </ul>
                <p>Modern CPUs also implement advanced features like branch prediction, speculative execution, and 
                SIMD (Single Instruction, Multiple Data) operations to enhance performance. Multicore designs allow 
                multiple CPU cores to work together, further increasing computational capabilities.</p>`,
        parentId: 1,
        order: 1
    },
    {
        id: 9,
        title: "Memory Hierarchy",
        description: "Organization of computer memory into multiple levels",
        content: `<h2>Memory Hierarchy</h2>
                <p>Memory hierarchy in computer architecture refers to the hierarchical arrangement of storage in a computer 
                system, organized by access speed, capacity, and cost per bit.</p>
                <h3>Levels of Memory Hierarchy (from fastest/smallest/most expensive to slowest/largest/least expensive):</h3>
                <ul>
                <li><strong>Registers:</strong> Located inside the processor, these are the fastest storage locations with extremely 
                limited capacity (bytes)</li>
                <li><strong>Cache Memory:</strong>
                    <ul>
                    <li>L1 Cache: Smallest and fastest cache, typically split into instruction and data caches</li>
                    <li>L2 Cache: Larger but slightly slower than L1</li>
                    <li>L3 Cache: Found in modern processors, larger and shared among multiple cores</li>
                    </ul>
                </li>
                <li><strong>Main Memory (RAM):</strong> Primary storage used to hold currently executing programs and data</li>
                <li><strong>Storage Memory:</strong> Non-volatile memory like SSDs (faster) and HDDs (slower)</li>
                <li><strong>Offline Storage:</strong> Removable media, cloud storage, etc.</li>
                </ul>
                <h3>Key Concepts:</h3>
                <ul>
                <li><strong>Locality of Reference:</strong> The tendency of programs to access the same set of memory locations 
                repeatedly (temporal locality) or nearby memory locations (spatial locality)</li>
                <li><strong>Cache Coherence:</strong> In multiprocessor systems, ensuring all caches have a consistent view of memory</li>
                <li><strong>Virtual Memory:</strong> Technique that provides an abstraction of the physical memory, allowing programs 
                to use memory addresses independent of actual physical memory locations</li>
                <li><strong>Memory Management Unit (MMU):</strong> Hardware component responsible for handling memory access requested 
                by the CPU, including virtual-to-physical address translation</li>
                </ul>
                <p>The memory hierarchy is designed to bridge the gap between fast processors and relatively slower main memory. 
                It exploits the principle of locality to provide the illusion of a large, fast memory system at a reasonable cost.</p>`,
        parentId: 1,
        order: 2
    },
    // Programming Languages Subtopics
    {
        id: 10,
        title: "C Programming",
        description: "A general-purpose, procedural computer programming language",
        content: `<h2>C Programming</h2>
                <p>C is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie 
                at Bell Labs. It was designed to be a language with the expressiveness of a high-level language but with 
                the efficiency and control of assembly language.</p>
                <h3>Key Features of C:</h3>
                <ul>
                <li><strong>Low-level Memory Access:</strong> Ability to manipulate memory directly through pointers</li>
                <li><strong>Static Type System:</strong> Variables must be declared with their types before use</li>
                <li><strong>Modularity:</strong> Programs can be divided into functions and files for organization</li>
                <li><strong>Efficiency:</strong> Close to hardware performance with minimal runtime overhead</li>
                <li><strong>Portability:</strong> Programs can be compiled on different platforms with minimal changes</li>
                </ul>
                <h3>Basic Syntax Example:</h3>
                <pre>
#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}
                </pre>
                <h3>Applications of C:</h3>
                <ul>
                <li>Operating Systems (Linux, Unix, Windows parts)</li>
                <li>Embedded Systems and IoT devices</li>
                <li>System Software and Device Drivers</li>
                <li>Databases (MySQL, PostgreSQL)</li>
                <li>Programming Language Interpreters/Compilers</li>
                </ul>
                <p>C has influenced numerous programming languages, including C++, C#, Java, JavaScript, PHP, and 
                Python. Despite being over 50 years old, C remains one of the most widely used programming languages 
                due to its efficiency, portability, and ability to directly interact with hardware.</p>`,
        parentId: 2,
        order: 1
    },
    {
        id: 11,
        title: "Python Programming",
        description: "A high-level, interpreted programming language",
        content: `<h2>Python Programming</h2>
                <p>Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. 
                Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with its use of 
                significant whitespace and a clean, expressive syntax.</p>
                <h3>Key Features of Python:</h3>
                <ul>
                <li><strong>Easy to Learn and Use:</strong> Simple, intuitive syntax that focuses on readability</li>
                <li><strong>Interpreted:</strong> Code executes without the need for compilation, enabling rapid development and testing</li>
                <li><strong>Dynamically Typed:</strong> Variable types are determined at runtime</li>
                <li><strong>Extensive Standard Library:</strong> Rich collection of modules and packages for various tasks</li>
                <li><strong>Multi-paradigm:</strong> Supports procedural, object-oriented, and functional programming styles</li>
                <li><strong>Cross-platform:</strong> Runs on virtually any operating system</li>
                </ul>
                <h3>Basic Syntax Example:</h3>
                <pre>
def greet(name):
    """A simple function that greets the user"""
    return f"Hello, {name}!"

# Main program
if __name__ == "__main__":
    user_name = input("Enter your name: ")
    message = greet(user_name)
    print(message)
                </pre>
                <h3>Applications of Python:</h3>
                <ul>
                <li><strong>Data Science and Analysis:</strong> Pandas, NumPy, SciPy</li>
                <li><strong>Machine Learning and AI:</strong> TensorFlow, PyTorch, scikit-learn</li>
                <li><strong>Web Development:</strong> Django, Flask, FastAPI</li>
                <li><strong>Scientific Computing:</strong> Jupyter, Matplotlib</li>
                <li><strong>Automation and Scripting:</strong> System administration, task automation</li>
                <li><strong>Game Development:</strong> Pygame</li>
                <li><strong>Desktop Applications:</strong> PyQt, Tkinter</li>
                </ul>
                <p>Python's philosophy emphasizes code readability, simplicity, and expressiveness, as encapsulated in the 
                "Zen of Python" (accessible by typing <code>import this</code> in the Python interpreter). Its versatility 
                and ease of use have made it one of the most popular programming languages in the world, especially for 
                beginners and in fields like data science, artificial intelligence, and web development.</p>`,
        parentId: 2,
        order: 2
    }
    // More subtopics for other main topics...
];

// Helper function to get topics by parent ID
function getTopicsByParentId(parentId) {
    return topics.filter(topic => topic.parentId === parentId)
                .sort((a, b) => a.order - b.order);
}

// Helper function to get a topic by ID
function getTopicById(id) {
    return topics.find(topic => topic.id === id);
}

// Function to search topics
function searchTopics(query) {
    query = query.toLowerCase();
    return topics.filter(topic => {
        return topic.title.toLowerCase().includes(query) || 
               topic.description.toLowerCase().includes(query) ||
               topic.content.toLowerCase().includes(query);
    });
}