package com.cslearningguide.utils;

import android.content.ContentValues;
import android.content.Context;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.util.Log;

import com.cslearningguide.data.TopicContract;

public class DataInitializer {
    
    private static final String PREFS_NAME = "CS_LEARNING_GUIDE_PREFS";
    private static final String DATA_INITIALIZED_KEY = "data_initialized";
    
    private Context context;
    
    public DataInitializer(Context context) {
        this.context = context;
    }
    
    public void initializeDataIfNeeded() {
        SharedPreferences prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        boolean isDataInitialized = prefs.getBoolean(DATA_INITIALIZED_KEY, false);
        
        if (!isDataInitialized) {
            // Check if the database is already populated
            Cursor cursor = context.getContentResolver().query(
                    TopicContract.TopicEntry.CONTENT_URI,
                    new String[]{"COUNT(*) AS count"},
                    null,
                    null,
                    null
            );
            
            boolean databaseEmpty = true;
            if (cursor != null && cursor.moveToFirst()) {
                int count = cursor.getInt(0);
                databaseEmpty = count == 0;
                cursor.close();
            }
            
            if (databaseEmpty) {
                populateDatabase();
                
                SharedPreferences.Editor editor = prefs.edit();
                editor.putBoolean(DATA_INITIALIZED_KEY, true);
                editor.apply();
                
                Log.d("DataInitializer", "Database initialized with default data");
            }
        }
    }
    
    private void populateDatabase() {
        // Main categories (parent_id = 0)
        long computerArchitectureId = insertTopic("Computer Architecture", 
                "Study of the structure, organization, and design of computer hardware components", 
                getComputerArchitectureContent(), 0, 1);
        
        long programmingLanguagesId = insertTopic("Programming Languages", 
                "Study of languages used to develop software and applications", 
                getProgrammingLanguagesContent(), 0, 2);
        
        long operatingSystemsId = insertTopic("Operating Systems", 
                "Software that manages computer hardware and provides services for computer programs", 
                getOperatingSystemsContent(), 0, 3);
        
        long embeddedSystemsId = insertTopic("Embedded Systems", 
                "Computer systems with dedicated functions within larger mechanical or electrical systems", 
                getEmbeddedSystemsContent(), 0, 4);
        
        long networkingId = insertTopic("Networking", 
                "Study of how computers and devices communicate with each other", 
                getNetworkingContent(), 0, 5);
        
        long userInterfacesId = insertTopic("User Interfaces and Applications", 
                "Design and development of interfaces between computers and humans", 
                getUserInterfacesContent(), 0, 6);
        
        long mlAiId = insertTopic("Machine Learning and AI", 
                "Study of algorithms that allow computers to learn from and make decisions based on data", 
                getMachineLearningContent(), 0, 7);
        
        // Computer Architecture Subtopics
        insertTopic("CPU Design", 
                "The architecture and implementation of processors", 
                getCpuDesignContent(), computerArchitectureId, 1);
        
        insertTopic("Memory Hierarchy", 
                "Organization of computer memory into multiple levels", 
                getMemoryHierarchyContent(), computerArchitectureId, 2);
        
        insertTopic("Pipelining", 
                "Technique to increase instruction throughput", 
                getPipeliningContent(), computerArchitectureId, 3);
        
        insertTopic("Parallel Processing", 
                "Simultaneous execution of multiple processes", 
                getParallelProcessingContent(), computerArchitectureId, 4);
        
        // Programming Languages Subtopics
        insertTopic("C Programming", 
                "A general-purpose, procedural computer programming language", 
                getCProgrammingContent(), programmingLanguagesId, 1);
        
        insertTopic("Python Programming", 
                "A high-level, interpreted programming language", 
                getPythonProgrammingContent(), programmingLanguagesId, 2);
        
        insertTopic("Assembly Language", 
                "Low-level programming language specific to a particular computer architecture", 
                getAssemblyLanguageContent(), programmingLanguagesId, 3);
        
        insertTopic("Data Structures and Algorithms", 
                "Study of organizing and manipulating data efficiently", 
                getDataStructuresContent(), programmingLanguagesId, 4);
        
        // Operating Systems Subtopics
        insertTopic("Process Management", 
                "The way operating systems handle and manage processes", 
                getProcessManagementContent(), operatingSystemsId, 1);
        
        insertTopic("Memory Management", 
                "The way operating systems manage primary memory", 
                getMemoryManagementContent(), operatingSystemsId, 2);
        
        insertTopic("File Systems", 
                "Methods and data structures used to organize and store data", 
                getFileSystemsContent(), operatingSystemsId, 3);
        
        // Add other subtopics for remaining categories...
    }
    
    private long insertTopic(String title, String description, String content, long parentId, int order) {
        ContentValues values = new ContentValues();
        values.put(TopicContract.TopicEntry.COLUMN_TITLE, title);
        values.put(TopicContract.TopicEntry.COLUMN_DESCRIPTION, description);
        values.put(TopicContract.TopicEntry.COLUMN_CONTENT, content);
        values.put(TopicContract.TopicEntry.COLUMN_PARENT_ID, parentId);
        values.put(TopicContract.TopicEntry.COLUMN_ORDER, order);
        
        return Long.parseLong(context.getContentResolver()
                .insert(TopicContract.TopicEntry.CONTENT_URI, values)
                .getLastPathSegment());
    }
    
    // Content for main topics and subtopics
    private String getComputerArchitectureContent() {
        return "<h2>Computer Architecture</h2>" +
                "<p>Computer architecture is the conceptual design and fundamental operational structure of a " +
                "computer system. It focuses on how the hardware components work together to execute software " +
                "instructions.</p>" +
                "<p>The main aspects of computer architecture include:</p>" +
                "<ul>" +
                "<li>Instruction Set Architecture (ISA): The set of instructions that the processor can understand and execute</li>" +
                "<li>Microarchitecture: The way the ISA is implemented in a processor</li>" +
                "<li>System Design: How different components like CPU, memory, and I/O devices interact</li>" +
                "</ul>" +
                "<p>Understanding computer architecture helps in designing efficient hardware systems and optimizing " +
                "software for better performance.</p>";
    }
    
    private String getProgrammingLanguagesContent() {
        return "<h2>Programming Languages</h2>" +
                "<p>Programming languages are formal languages that allow developers to write instructions that can be " +
                "executed by computers. These languages serve as a bridge between human thought processes and machine " +
                "execution.</p>" +
                "<p>Programming languages are classified into different paradigms:</p>" +
                "<ul>" +
                "<li>Imperative: Focuses on how to achieve results with sequences of statements that change program state</li>" +
                "<li>Functional: Treats computation as the evaluation of mathematical functions and avoids state changes</li>" +
                "<li>Object-Oriented: Uses objects and classes for organizing code and data</li>" +
                "<li>Declarative: Focuses on what the program should accomplish without specifying how</li>" +
                "</ul>" +
                "<p>Different languages excel at different types of tasks, and choosing the right language depends on the " +
                "specific requirements of your project.</p>";
    }
    
    private String getOperatingSystemsContent() {
        return "<h2>Operating Systems</h2>" +
                "<p>An operating system (OS) is system software that manages computer hardware, software resources, and " +
                "provides common services for computer programs.</p>" +
                "<p>Key responsibilities of an operating system include:</p>" +
                "<ul>" +
                "<li>Process Management: Creating, scheduling, and terminating processes</li>" +
                "<li>Memory Management: Allocating and deallocating memory to programs</li>" +
                "<li>File System Management: Organizing and accessing files and directories</li>" +
                "<li>Device Management: Controlling I/O devices and providing interfaces to them</li>" +
                "<li>Security: Protecting system resources and user data</li>" +
                "</ul>" +
                "<p>Examples of operating systems include Windows, macOS, Linux, iOS, and Android. Each has its own " +
                "architecture and design principles, but they all serve the fundamental purpose of abstracting hardware " +
                "details from applications and providing a convenient environment for running software.</p>";
    }
    
    private String getEmbeddedSystemsContent() {
        return "<h2>Embedded Systems</h2>" +
                "<p>Embedded systems are computer systems designed to perform dedicated functions within larger " +
                "mechanical or electrical systems. Unlike general-purpose computers, embedded systems are optimized " +
                "for specific tasks, often with real-time computing constraints.</p>" +
                "<p>Key characteristics of embedded systems:</p>" +
                "<ul>" +
                "<li>Single-function or limited functionality</li>" +
                "<li>Tightly constrained in terms of size, power, and memory</li>" +
                "<li>Often required to respond to events in real-time</li>" +
                "<li>Usually built around microcontrollers or microprocessors</li>" +
                "</ul>" +
                "<p>Examples of embedded systems include automotive control systems, medical devices, industrial " +
                "automation equipment, consumer electronics, and IoT devices.</p>" +
                "<p>Embedded systems programming typically requires specialized knowledge of hardware interfaces, " +
                "memory constraints, and real-time programming techniques.</p>";
    }
    
    private String getNetworkingContent() {
        return "<h2>Networking</h2>" +
                "<p>Computer networking is the practice of connecting computers and devices to share data and resources. " +
                "Networks range from small local networks to the global Internet.</p>" +
                "<p>Key concepts in networking:</p>" +
                "<ul>" +
                "<li>Network Protocols: Rules that govern communication between devices</li>" +
                "<li>OSI Model: A conceptual framework that standardizes network communication functions</li>" +
                "<li>TCP/IP: The fundamental suite of protocols that power the Internet</li>" +
                "<li>Network Topologies: Physical and logical arrangements of networks</li>" +
                "<li>Routing and Switching: Methods for directing data between networks and devices</li>" +
                "<li>Network Security: Protecting information and systems from unauthorized access</li>" +
                "</ul>" +
                "<p>Understanding networking principles is essential for developing distributed applications, cloud " +
                "systems, and any software that communicates over networks.</p>";
    }
    
    private String getUserInterfacesContent() {
        return "<h2>User Interfaces and Applications</h2>" +
                "<p>User interfaces (UI) are the points of interaction between humans and computers. They encompass " +
                "both hardware interfaces (like keyboards and touchscreens) and software interfaces (like graphical " +
                "user interfaces).</p>" +
                "<p>Key aspects of UI design and development:</p>" +
                "<ul>" +
                "<li>User Experience (UX) Design: Creating intuitive and satisfying user experiences</li>" +
                "<li>Frontend Development: Implementing user interfaces using technologies like HTML, CSS, and JavaScript</li>" +
                "<li>Backend Development: Building server-side logic that powers applications</li>" +
                "<li>Mobile Development: Creating applications for smartphones and tablets</li>" +
                "<li>Accessibility: Ensuring interfaces can be used by people with disabilities</li>" +
                "</ul>" +
                "<p>Modern application development often separates frontend and backend concerns, with APIs facilitating " +
                "communication between them. This approach allows for more specialized development and better scalability.</p>";
    }
    
    private String getMachineLearningContent() {
        return "<h2>Machine Learning and AI</h2>" +
                "<p>Machine Learning (ML) and Artificial Intelligence (AI) involve creating systems that can learn from " +
                "data and make decisions with minimal human intervention.</p>" +
                "<p>Key areas in ML and AI:</p>" +
                "<ul>" +
                "<li>Supervised Learning: Training models on labeled data</li>" +
                "<li>Unsupervised Learning: Finding patterns in unlabeled data</li>" +
                "<li>Reinforcement Learning: Training agents through reward-based feedback</li>" +
                "<li>Deep Learning: Using neural networks with multiple layers</li>" +
                "<li>Natural Language Processing: Enabling computers to understand and generate human language</li>" +
                "<li>Computer Vision: Allowing machines to interpret and understand visual information</li>" +
                "</ul>" +
                "<p>ML and AI are transforming industries by automating complex tasks, providing insights from large " +
                "datasets, and enabling new capabilities in software and systems.</p>";
    }
    
    // Subtopic content methods
    private String getCpuDesignContent() {
        return "<h2>CPU Design</h2>" +
                "<p>CPU (Central Processing Unit) design involves creating the electronic circuitry that executes " +
                "instructions in a computer program. Modern CPU design combines electrical engineering, computer " +
                "science, and materials science principles.</p>" +
                "<h3>Key Components of a CPU:</h3>" +
                "<ul>" +
                "<li><strong>Arithmetic Logic Unit (ALU):</strong> Performs arithmetic and logical operations</li>" +
                "<li><strong>Control Unit:</strong> Directs the operation of the processor by telling the computer's memory, " +
                "ALU and I/O devices how to respond to the instructions sent to the CPU</li>" +
                "<li><strong>Registers:</strong> Small, fast storage locations within the CPU</li>" +
                "<li><strong>Cache:</strong> High-speed memory that stores frequently accessed data</li>" +
                "<li><strong>Buses:</strong> Communication pathways between CPU components</li>" +
                "</ul>" +
                "<h3>CPU Architecture Types:</h3>" +
                "<ul>" +
                "<li><strong>CISC (Complex Instruction Set Computer):</strong> Processors with many specialized instructions</li>" +
                "<li><strong>RISC (Reduced Instruction Set Computer):</strong> Processors with simpler instructions that execute in a single cycle</li>" +
                "<li><strong>VLIW (Very Long Instruction Word):</strong> Architecture that executes multiple operations in parallel</li>" +
                "</ul>" +
                "<p>Modern CPU design focuses on improving performance, reducing power consumption, and enhancing " +
                "security while maintaining backward compatibility with existing software.</p>";
    }
    
    private String getMemoryHierarchyContent() {
        return "<h2>Memory Hierarchy</h2>" +
                "<p>Memory hierarchy refers to the organization of computer memory into multiple levels, each with " +
                "different characteristics in terms of speed, capacity, and cost.</p>" +
                "<h3>Levels of Memory Hierarchy (from fastest to slowest):</h3>" +
                "<ul>" +
                "<li><strong>Registers:</strong> Fastest memory, located within the CPU</li>" +
                "<li><strong>Cache Memory:</strong>" +
                "<ul>" +
                "<li>L1 Cache: Smallest and fastest cache, typically split into instruction and data caches</li>" +
                "<li>L2 Cache: Larger but slower than L1, may be dedicated to each core or shared</li>" +
                "<li>L3 Cache: Even larger and slower, usually shared among all cores</li>" +
                "</ul></li>" +
                "<li><strong>Main Memory (RAM):</strong> Principal memory used by the CPU during program execution</li>" +
                "<li><strong>Storage Memory:</strong> Non-volatile memory like SSDs and HDDs</li>" +
                "</ul>" +
                "<h3>Key Concepts:</h3>" +
                "<ul>" +
                "<li><strong>Locality of Reference:</strong> The tendency of programs to access data in nearby memory locations</li>" +
                "<li><strong>Cache Hit:</strong> When data requested is found in the cache</li>" +
                "<li><strong>Cache Miss:</strong> When data requested is not in the cache and must be fetched from slower memory</li>" +
                "<li><strong>Cache Coherence:</strong> Ensuring consistency of shared data across multiple caches</li>" +
                "</ul>" +
                "<p>Memory hierarchy design aims to bridge the speed gap between CPU and main memory, " +
                "taking advantage of locality of reference to improve overall system performance.</p>";
    }
    
    private String getPipeliningContent() {
        return "<h2>Pipelining</h2>" +
                "<p>Pipelining is a technique used in CPU design to increase instruction throughput by allowing multiple " +
                "instructions to be processed simultaneously at different stages of execution.</p>" +
                "<h3>Classic 5-Stage Pipeline:</h3>" +
                "<ol>" +
                "<li><strong>Instruction Fetch (IF):</strong> Retrieve instruction from memory</li>" +
                "<li><strong>Instruction Decode (ID):</strong> Determine what operation to perform and prepare operands</li>" +
                "<li><strong>Execute (EX):</strong> Perform the operation in the ALU</li>" +
                "<li><strong>Memory Access (MEM):</strong> Access memory if needed</li>" +
                "<li><strong>Write Back (WB):</strong> Write results back to registers</li>" +
                "</ol>" +
                "<h3>Pipeline Hazards:</h3>" +
                "<ul>" +
                "<li><strong>Structural Hazards:</strong> Hardware resource conflicts</li>" +
                "<li><strong>Data Hazards:</strong> Dependencies between instructions</li>" +
                "<li><strong>Control Hazards:</strong> Branch instructions that change program flow</li>" +
                "</ul>" +
                "<h3>Solutions to Pipeline Hazards:</h3>" +
                "<ul>" +
                "<li><strong>Forwarding:</strong> Passing results directly to dependent instructions</li>" +
                "<li><strong>Stalling:</strong> Pausing the pipeline until dependencies are resolved</li>" +
                "<li><strong>Branch Prediction:</strong> Guessing the outcome of branch instructions</li>" +
                "<li><strong>Out-of-Order Execution:</strong> Executing instructions in an order different from program order</li>" +
                "</ul>" +
                "<p>Modern processors use sophisticated pipelining techniques with many stages and advanced hazard " +
                "resolution methods to achieve high performance.</p>";
    }
    
    private String getParallelProcessingContent() {
        return "<h2>Parallel Processing</h2>" +
                "<p>Parallel processing refers to the simultaneous execution of multiple processes or threads to solve " +
                "computational problems more quickly.</p>" +
                "<h3>Types of Parallelism:</h3>" +
                "<ul>" +
                "<li><strong>Instruction-Level Parallelism (ILP):</strong> Multiple instructions executed simultaneously</li>" +
                "<li><strong>Data Parallelism:</strong> Same operation performed on multiple data elements simultaneously</li>" +
                "<li><strong>Task Parallelism:</strong> Different operations performed simultaneously on different data</li>" +
                "</ul>" +
                "<h3>Parallel Architectures:</h3>" +
                "<ul>" +
                "<li><strong>Multi-core Processors:</strong> Multiple processing cores on a single chip</li>" +
                "<li><strong>Symmetric Multiprocessing (SMP):</strong> Multiple processors sharing memory and I/O</li>" +
                "<li><strong>Distributed Systems:</strong> Independent computers connected via a network</li>" +
                "<li><strong>GPU Computing:</strong> Using graphics processing units for general-purpose computing</li>" +
                "</ul>" +
                "<h3>Challenges in Parallel Processing:</h3>" +
                "<ul>" +
                "<li><strong>Amdahl's Law:</strong> Limits to speedup based on the proportion of parallelizable code</li>" +
                "<li><strong>Synchronization:</strong> Coordinating access to shared resources</li>" +
                "<li><strong>Load Balancing:</strong> Distributing work evenly across processing units</li>" +
                "<li><strong>Communication Overhead:</strong> Cost of exchanging data between processors</li>" +
                "</ul>" +
                "<p>Parallel programming requires special languages, libraries, or extensions like OpenMP, MPI, CUDA, " +
                "and threading APIs to effectively utilize parallel hardware.</p>";
    }
    
    private String getCProgrammingContent() {
        return "<h2>C Programming</h2>" +
                "<p>C is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie " +
                "at Bell Labs. It remains one of the most influential and widely used programming languages.</p>" +
                "<h3>Key Features of C:</h3>" +
                "<ul>" +
                "<li>Low-level memory access</li>" +
                "<li>Simple set of keywords</li>" +
                "<li>Static type system</li>" +
                "<li>Lexical variable scope</li>" +
                "<li>Recursion</li>" +
                "<li>Structured programming</li>" +
                "</ul>" +
                "<h3>Basic C Program Structure:</h3>" +
                "<pre><code>#include &lt;stdio.h&gt;\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}</code></pre>" +
                "<h3>Applications of C:</h3>" +
                "<ul>" +
                "<li>Operating Systems</li>" +
                "<li>Embedded Systems</li>" +
                "<li>System Utilities</li>" +
                "<li>Database Systems</li>" +
                "<li>Language Compilers and Interpreters</li>" +
                "</ul>" +
                "<h3>Memory Management in C:</h3>" +
                "<p>C requires manual memory management using functions like <code>malloc()</code>, <code>calloc()</code>, " +
                "<code>realloc()</code>, and <code>free()</code>. This gives programmers fine control over memory usage " +
                "but can lead to issues like memory leaks and dangling pointers if not handled carefully.</p>" +
                "<h3>Pointers in C:</h3>" +
                "<p>Pointers are variables that store memory addresses. They allow direct memory manipulation and are " +
                "essential for creating dynamic data structures, passing function arguments by reference, and many " +
                "other low-level operations.</p>" +
                "<pre><code>int x = 10;\nint *ptr = &x;  // ptr points to x\nprintf(\"%d\\n\", *ptr);  // Prints 10</code></pre>";
    }
    
    private String getPythonProgrammingContent() {
        return "<h2>Python Programming</h2>" +
                "<p>Python is a high-level, interpreted programming language known for its readability, simplicity, " +
                "and versatility. Created by Guido van Rossum and first released in 1991, Python has become one of " +
                "the most popular programming languages worldwide.</p>" +
                "<h3>Key Features of Python:</h3>" +
                "<ul>" +
                "<li>Easy to learn and read syntax</li>" +
                "<li>Dynamic typing</li>" +
                "<li>Automatic memory management</li>" +
                "<li>Extensive standard library</li>" +
                "<li>Support for multiple programming paradigms (procedural, object-oriented, functional)</li>" +
                "<li>Large and active community</li>" +
                "</ul>" +
                "<h3>Basic Python Program:</h3>" +
                "<pre><code># Hello World in Python\nprint(\"Hello, World!\")\n\n# Variables and data types\nname = \"Python\"\nage = 30\nis_popular = True\n\n# Conditional statement\nif age > 20:\n    print(f\"{name} is mature and {age} years old\")</code></pre>" +
                "<h3>Applications of Python:</h3>" +
                "<ul>" +
                "<li>Web Development (Django, Flask)</li>" +
                "<li>Data Analysis and Visualization (Pandas, Matplotlib)</li>" +
                "<li>Machine Learning and AI (TensorFlow, PyTorch, scikit-learn)</li>" +
                "<li>Scientific Computing (NumPy, SciPy)</li>" +
                "<li>Automation and Scripting</li>" +
                "<li>Game Development</li>" +
                "</ul>" +
                "<h3>Python Data Structures:</h3>" +
                "<pre><code># Lists - mutable, ordered collection\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfruits.append(\"orange\")\n\n# Dictionaries - key-value pairs\nperson = {\"name\": \"John\", \"age\": 30}\nprint(person[\"name\"])\n\n# Tuples - immutable ordered collection\ncoordinates = (10, 20)\n\n# Sets - unordered collection with no duplicates\nunique_numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}</code></pre>" +
                "<p>Python's philosophy emphasizes code readability and a clean, pragmatic approach to programming, " +
                "making it an excellent choice for beginners and experts alike.</p>";
    }
    
    private String getAssemblyLanguageContent() {
        return "<h2>Assembly Language</h2>" +
                "<p>Assembly language is a low-level programming language that has a strong correspondence with the " +
                "machine code instructions for a specific computer architecture. Unlike high-level languages, assembly " +
                "language is specific to a particular processor family.</p>" +
                "<h3>Characteristics of Assembly Language:</h3>" +
                "<ul>" +
                "<li>One-to-one correspondence with machine instructions</li>" +
                "<li>Architecture-specific (e.g., x86, ARM, MIPS)</li>" +
                "<li>Uses mnemonics for operations and addressing modes</li>" +
                "<li>Direct hardware control</li>" +
                "<li>Minimal abstraction from the hardware</li>" +
                "</ul>" +
                "<h3>Basic Assembly Language Example (x86):</h3>" +
                "<pre><code>section .data\n    msg db 'Hello, World!', 0Ah\n    len equ $ - msg\n\nsection .text\n    global _start\n\n_start:\n    ; Write the message to stdout\n    mov eax, 4      ; sys_write system call\n    mov ebx, 1      ; file descriptor (stdout)\n    mov ecx, msg    ; message to write\n    mov edx, len    ; message length\n    int 80h         ; call kernel\n\n    ; Exit the program\n    mov eax, 1      ; sys_exit system call\n    xor ebx, ebx    ; exit code 0\n    int 80h         ; call kernel</code></pre>" +
                "<h3>Uses of Assembly Language:</h3>" +
                "<ul>" +
                "<li>Operating system kernels</li>" +
                "<li>Device drivers</li>" +
                "<li>Embedded systems programming</li>" +
                "<li>Performance-critical code sections</li>" +
                "<li>Reverse engineering and malware analysis</li>" +
                "<li>Exploiting security vulnerabilities</li>" +
                "</ul>" +
                "<h3>Assembly Language Components:</h3>" +
                "<ul>" +
                "<li><strong>Instructions:</strong> Operations the CPU can perform (e.g., MOV, ADD, JMP)</li>" +
                "<li><strong>Registers:</strong> Small, fast storage locations within the CPU</li>" +
                "<li><strong>Memory Addressing:</strong> Ways to specify memory locations</li>" +
                "<li><strong>Directives:</strong> Commands for the assembler, not the CPU</li>" +
                "</ul>" +
                "<p>While most modern programming is done in high-level languages, understanding assembly language " +
                "provides deep insights into computer architecture and is essential for certain specialized fields.</p>";
    }
    
    private String getDataStructuresContent() {
        return "<h2>Data Structures and Algorithms</h2>" +
                "<p>Data structures are specialized formats for organizing, processing, retrieving, and storing data. " +
                "Algorithms are step-by-step procedures for solving specific computational problems.</p>" +
                "<h3>Fundamental Data Structures:</h3>" +
                "<ul>" +
                "<li><strong>Arrays:</strong> Fixed-size collection of elements accessed by index</li>" +
                "<li><strong>Linked Lists:</strong> Linear collection of elements where each element points to the next</li>" +
                "<li><strong>Stacks:</strong> Last-In-First-Out (LIFO) data structure</li>" +
                "<li><strong>Queues:</strong> First-In-First-Out (FIFO) data structure</li>" +
                "<li><strong>Trees:</strong> Hierarchical data structure with a root node and child nodes</li>" +
                "<li><strong>Graphs:</strong> Collection of nodes connected by edges</li>" +
                "<li><strong>Hash Tables:</strong> Data structure that maps keys to values using a hash function</li>" +
                "</ul>" +
                "<h3>Algorithm Categories:</h3>" +
                "<ul>" +
                "<li><strong>Sorting Algorithms:</strong> Quick Sort, Merge Sort, Bubble Sort, etc.</li>" +
                "<li><strong>Searching Algorithms:</strong> Binary Search, Linear Search, Depth/Breadth-First Search</li>" +
                "<li><strong>Graph Algorithms:</strong> Dijkstra's, A*, Kruskal's, Prim's</li>" +
                "<li><strong>Dynamic Programming:</strong> Breaking problems into simpler subproblems</li>" +
                "<li><strong>Greedy Algorithms:</strong> Making locally optimal choices at each stage</li>" +
                "<li><strong>Divide and Conquer:</strong> Breaking problems into smaller instances of the same problem</li>" +
                "</ul>" +
                "<h3>Algorithm Analysis:</h3>" +
                "<p>The efficiency of algorithms is typically measured using Big O notation, which describes " +
                "the upper bound of an algorithm's time or space complexity in terms of input size (n):</p>" +
                "<ul>" +
                "<li><strong>O(1):</strong> Constant time - execution time doesn't depend on input size</li>" +
                "<li><strong>O(log n):</strong> Logarithmic time - execution time grows logarithmically with input size</li>" +
                "<li><strong>O(n):</strong> Linear time - execution time grows linearly with input size</li>" +
                "<li><strong>O(n log n):</strong> Linearithmic time - common in efficient sorting algorithms</li>" +
                "<li><strong>O(n²):</strong> Quadratic time - execution time grows quadratically with input size</li>" +
                "<li><strong>O(2^n):</strong> Exponential time - execution time doubles with each additional input element</li>" +
                "</ul>" +
                "<p>Choosing the right data structure and algorithm is critical for efficient software development, " +
                "as it can dramatically impact performance, especially with large datasets.</p>";
    }
    
    private String getProcessManagementContent() {
        return "<h2>Process Management</h2>" +
                "<p>Process management is how operating systems handle and manage processes (running programs). " +
                "It involves creating, scheduling, and terminating processes, as well as mechanisms for process " +
                "communication and synchronization.</p>" +
                "<h3>Process Concepts:</h3>" +
                "<ul>" +
                "<li><strong>Process:</strong> An instance of a program in execution</li>" +
                "<li><strong>Process Control Block (PCB):</strong> Data structure containing process information</li>" +
                "<li><strong>Process States:</strong> New, Ready, Running, Waiting, Terminated</li>" +
                "<li><strong>Process vs. Thread:</strong> Processes have separate memory spaces; threads share memory</li>" +
                "</ul>" +
                "<h3>Process Scheduling:</h3>" +
                "<ul>" +
                "<li><strong>CPU Scheduler:</strong> Selects which process to run next</li>" +
                "<li><strong>Scheduling Algorithms:</strong>" +
                "<ul>" +
                "<li>First-Come, First-Served (FCFS)</li>" +
                "<li>Shortest Job First (SJF)</li>" +
                "<li>Priority Scheduling</li>" +
                "<li>Round Robin (RR)</li>" +
                "<li>Multilevel Queue</li>" +
                "</ul></li>" +
                "</ul>" +
                "<h3>Inter-Process Communication (IPC):</h3>" +
                "<ul>" +
                "<li><strong>Shared Memory:</strong> Processes access a common memory region</li>" +
                "<li><strong>Message Passing:</strong> Processes exchange messages</li>" +
                "<li><strong>Pipes:</strong> Unidirectional communication channel</li>" +
                "<li><strong>Sockets:</strong> Communication endpoints for networked processes</li>" +
                "<li><strong>Signals:</strong> Software interrupts sent to processes</li>" +
                "</ul>" +
                "<h3>Process Synchronization:</h3>" +
                "<ul>" +
                "<li><strong>Race Conditions:</strong> When multiple processes access shared data concurrently</li>" +
                "<li><strong>Critical Section:</strong> Code segment accessing shared resources</li>" +
                "<li><strong>Synchronization Tools:</strong>" +
                "<ul>" +
                "<li>Semaphores: Signaling mechanism with counting capability</li>" +
                "<li>Mutexes: Binary semaphores for mutual exclusion</li>" +
                "<li>Monitors: High-level synchronization construct</li>" +
                "</ul></li>" +
                "</ul>" +
                "<h3>Deadlocks:</h3>" +
                "<ul>" +
                "<li><strong>Conditions for Deadlock:</strong> Mutual exclusion, Hold and wait, No preemption, Circular wait</li>" +
                "<li><strong>Deadlock Handling:</strong> Prevention, Avoidance, Detection, Recovery</li>" +
                "</ul>" +
                "<p>Effective process management is crucial for system performance, resource utilization, " +
                "and ensuring that multiple processes can run concurrently without interference.</p>";
    }
    
    private String getMemoryManagementContent() {
        return "<h2>Memory Management</h2>" +
                "<p>Memory management is the process of controlling and coordinating computer memory, assigning portions to " +
                "programs when needed and freeing it for reuse when no longer needed.</p>" +
                "<h3>Memory Hierarchy:</h3>" +
                "<ul>" +
                "<li>Registers</li>" +
                "<li>Cache (L1, L2, L3)</li>" +
                "<li>Main Memory (RAM)</li>" +
                "<li>Virtual Memory (Disk)</li>" +
                "</ul>" +
                "<h3>Memory Allocation Strategies:</h3>" +
                "<ul>" +
                "<li><strong>Contiguous Allocation:</strong>" +
                "<ul>" +
                "<li>Fixed Partitioning: Memory divided into fixed-size partitions</li>" +
                "<li>Dynamic Partitioning: Partitions created as needed</li>" +
                "</ul></li>" +
                "<li><strong>Non-contiguous Allocation:</strong>" +
                "<ul>" +
                "<li>Paging: Physical memory divided into fixed-size frames, logical memory into pages</li>" +
                "<li>Segmentation: Memory divided based on logical segments of programs</li>" +
                "<li>Segmented Paging: Combines both approaches</li>" +
                "</ul></li>" +
                "</ul>" +
                "<h3>Virtual Memory:</h3>" +
                "<ul>" +
                "<li><strong>Concept:</strong> Using disk space as an extension of RAM</li>" +
                "<li><strong>Page Fault:</strong> Occurs when a program accesses a page not in physical memory</li>" +
                "<li><strong>Page Replacement Algorithms:</strong>" +
                "<ul>" +
                "<li>FIFO (First-In-First-Out)</li>" +
                "<li>LRU (Least Recently Used)</li>" +
                "<li>LFU (Least Frequently Used)</li>" +
                "<li>Optimal (theoretical best)</li>" +
                "</ul></li>" +
                "<li><strong>Thrashing:</strong> Excessive paging causing severe performance degradation</li>" +
                "</ul>" +
                "<h3>Memory Protection:</h3>" +
                "<ul>" +
                "<li><strong>Base and Limit Registers:</strong> Define valid memory addresses for a process</li>" +
                "<li><strong>Memory Protection Keys:</strong> Associate memory regions with protection domains</li>" +
                "<li><strong>Address Space Layout Randomization (ASLR):</strong> Randomizes memory addresses to prevent attacks</li>" +
                "</ul>" +
                "<h3>Garbage Collection:</h3>" +
                "<ul>" +
                "<li><strong>Concept:</strong> Automatic reclamation of unused memory</li>" +
                "<li><strong>Algorithms:</strong>" +
                "<ul>" +
                "<li>Mark and Sweep</li>" +
                "<li>Reference Counting</li>" +
                "<li>Generational Collection</li>" +
                "</ul></li>" +
                "</ul>" +
                "<p>Effective memory management ensures efficient utilization of memory resources, prevents memory leaks, " +
                "and provides isolation between processes for system stability and security.</p>";
    }
    
    private String getFileSystemsContent() {
        return "<h2>File Systems</h2>" +
                "<p>File systems are the methods and data structures that an operating system uses to organize, store, " +
                "retrieve, and manage data on storage devices.</p>" +
                "<h3>File System Functions:</h3>" +
                "<ul>" +
                "<li>Creating, reading, writing, and deleting files</li>" +
                "<li>Managing directories and file hierarchies</li>" +
                "<li>Mapping files to physical storage locations</li>" +
                "<li>Enforcing access permissions</li>" +
                "<li>Maintaining metadata about files</li>" +
                "</ul>" +
                "<h3>File System Components:</h3>" +
                "<ul>" +
                "<li><strong>Files:</strong> Named collections of related information</li>" +
                "<li><strong>Directories/Folders:</strong> Containers for files and other directories</li>" +
                "<li><strong>Metadata:</strong> Information about files (size, permissions, timestamps, etc.)</li>" +
                "<li><strong>Storage Blocks:</strong> Fixed-size units of physical storage</li>" +
                "</ul>" +
                "<h3>Common File System Types:</h3>" +
                "<ul>" +
                "<li><strong>FAT (File Allocation Table):</strong> Simple file system used in smaller devices</li>" +
                "<li><strong>NTFS (New Technology File System):</strong> Windows file system with advanced features</li>" +
                "<li><strong>ext4 (Fourth Extended File System):</strong> Common Linux file system</li>" +
                "<li><strong>HFS+ (Hierarchical File System Plus):</strong> Used in older macOS versions</li>" +
                "<li><strong>APFS (Apple File System):</strong> Modern file system for Apple devices</li>" +
                "<li><strong>ZFS (Zettabyte File System):</strong> Advanced file system with data integrity features</li>" +
                "</ul>" +
                "<h3>File Allocation Methods:</h3>" +
                "<ul>" +
                "<li><strong>Contiguous Allocation:</strong> Files stored in consecutive blocks</li>" +
                "<li><strong>Linked Allocation:</strong> Each block contains a pointer to the next block</li>" +
                "<li><strong>Indexed Allocation:</strong> A special index block contains pointers to file blocks</li>" +
                "<li><strong>Extent-Based Allocation:</strong> Files allocated in extents (contiguous sequences of blocks)</li>" +
                "</ul>" +
                "<h3>File System Operations:</h3>" +
                "<ul>" +
                "<li><strong>Mounting:</strong> Making a file system accessible to the OS</li>" +
                "<li><strong>Formatting:</strong> Preparing a storage device with a specific file system</li>" +
                "<li><strong>Defragmentation:</strong> Reorganizing fragmented files into contiguous blocks</li>" +
                "<li><strong>Journaling:</strong> Tracking changes before committing them to improve reliability</li>" +
                "</ul>" +
                "<p>File systems play a critical role in data persistence, organization, and access, with different " +
                "designs offering various trade-offs in terms of performance, reliability, and features.</p>";
    }
}
