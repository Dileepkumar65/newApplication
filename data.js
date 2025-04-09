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
        content: '<h3>1. Boolean Algebra Fundamentals</h3>\n<p>Boolean algebra, developed by George Boole in the 19th century, provides the mathematical foundation for all digital systems. Unlike traditional algebra which works with continuous numerical values, Boolean algebra operates on binary values (true/false, 1/0) and defines operations that manipulate these values.</p>\n<p>The three fundamental Boolean operations are:</p>\n<ul>\n<li><strong>AND</strong>: Output is true only when both inputs are true</li>\n<li><strong>OR</strong>: Output is true when at least one input is true</li>\n<li><strong>NOT</strong>: Output is the opposite of the input (inverts the value)</li>\n</ul>\n<p>In Boolean algebra, these operations are rigorously defined with truth tables and algebraic laws that allow us to analyze and manipulate logical expressions. By understanding and applying Boolean algebra, we can design digital circuits that perform specific logical functions.</p>\n\n<h3>2. Implementing Logic with Transistors</h3>\n<p>Transistors are the physical devices that implement Boolean logic in hardware. A transistor can act as an electronically controlled switch, allowing or blocking the flow of current based on a control signal. By arranging transistors in specific configurations, we can create physical implementations of logical operations.</p>\n<p>The two main types of transistor logic families are:</p>\n<ul>\n<li><strong>TTL (Transistor-Transistor Logic)</strong>: Uses bipolar junction transistors</li>\n<li><strong>CMOS (Complementary Metal-Oxide-Semiconductor)</strong>: Uses field-effect transistors in complementary pairs</li>\n</ul>\n<p>When building from scratch, we\'ll examine how transistors function at the quantum level and how their physical properties enable them to implement logical operations. Rather than taking these components as black boxes, we\'ll understand exactly how electrons flow through semiconductor materials to create switching behavior.</p>\n\n<h3>3. Basic Logic Gates</h3>\n<p>Logic gates are the fundamental building blocks of digital circuits, directly implementing Boolean functions. Each type of gate performs a specific logical operation on its inputs.</p>\n<p>The basic gates include:</p>\n<ul>\n<li><strong>AND Gate</strong>: Output is high (1) only when all inputs are high</li>\n<li><strong>OR Gate</strong>: Output is high when at least one input is high</li>\n<li><strong>NOT Gate (Inverter)</strong>: Output is the opposite of the input</li>\n<li><strong>NAND Gate</strong>: Combines AND and NOT operations (universal gate)</li>\n<li><strong>NOR Gate</strong>: Combines OR and NOT operations (universal gate)</li>\n<li><strong>XOR Gate</strong>: Output is high when inputs are different</li>\n<li><strong>XNOR Gate</strong>: Output is high when inputs are the same</li>\n</ul>\n<p>We\'ll implement each of these gates from transistors, understanding their internal structure rather than treating them as prefabricated components. This approach reveals how complex logical functions can be built from simple electronic components.</p>\n\n<h3>4. Combinational Logic Circuits</h3>\n<p>Combinational circuits perform operations where the output depends only on the current input values, without any memory of previous states. These circuits combine multiple logic gates to implement more complex functions.</p>\n<p>Key combinational circuits include:</p>\n<ul>\n<li><strong>Multiplexers (MUX)</strong>: Select one of several input signals based on control inputs</li>\n<li><strong>Demultiplexers (DEMUX)</strong>: Route an input signal to one of several outputs</li>\n<li><strong>Encoders</strong>: Convert multiple input signals into a binary code</li>\n<li><strong>Decoders</strong>: Convert a binary code into multiple output signals</li>\n<li><strong>Adders</strong>: Perform binary addition on two or more numbers</li>\n<li><strong>Comparators</strong>: Compare two binary numbers and determine their relationship</li>\n</ul>\n<p>By building these circuits from basic gates (which we\'ve already built from transistors), we\'ll gain a comprehensive understanding of how complex logical operations can be implemented in hardware.</p>\n\n<h3>5. Sequential Logic and Memory</h3>\n<p>While combinational logic computes based solely on current inputs, sequential logic allows circuits to have memory and maintain state over time. This is achieved through feedback loops and storage elements.</p>\n<p>The fundamental sequential elements include:</p>\n<ul>\n<li><strong>Latches</strong>: Basic storage elements that hold a value as long as enabled</li>\n<li><strong>Flip-flops</strong>: Edge-triggered storage elements that change state only at specific clock transitions</li>\n<li><strong>Registers</strong>: Groups of flip-flops that store multiple bits of information</li>\n<li><strong>Counters</strong>: Sequential circuits that cycle through a sequence of states</li>\n</ul>\n<p>We\'ll build these sequential components from scratch using our fundamental gates, understanding how feedback and timing create memory in electronic systems. This forms the bridge between combinational logic and more complex computational systems with state.</p>',
        parentId: 'cs_foundations'
    },
    {
        id: 'information_theory',
        title: 'Information Theory & Representation',
        description: 'How information is quantified, stored, and processed',
        content: '<h3>1. Foundations of Information Theory</h3>\n<p>Information theory, developed by Claude Shannon in the 1940s, provides a mathematical framework for quantifying information and understanding the fundamental limits of data compression and transmission. This revolutionary framework bridges mathematics, physics, and computer science.</p>\n<p>Key concepts in information theory include:</p>\n<ul>\n<li><strong>Information and Uncertainty</strong>: Information resolves uncertainty; the more uncertain an outcome, the more information is gained when learning it</li>\n<li><strong>Probability Distributions</strong>: The likelihood of different messages or symbols appearing in a communication stream</li>\n<li><strong>Surprise Value</strong>: Rare events carry more information than common ones</li>\n</ul>\n<p>We\'ll explore these concepts from first principles, deriving the mathematical relationships rather than accepting them as given, building a strong foundation for understanding how information can be measured, stored, and communicated efficiently.</p>\n\n<h3>2. Measuring Information: Entropy</h3>\n<p>Entropy is the fundamental measure of information content, quantifying the average amount of uncertainty in a random variable or data source. It establishes theoretical limits on data compression and transmission.</p>\n<p>We\'ll explore several key measures:</p>\n<ul>\n<li><strong>Shannon Entropy</strong>: The average information content per symbol in a source, measured in bits</li>\n<li><strong>Joint Entropy</strong>: The total entropy of two or more random variables considered together</li>\n<li><strong>Conditional Entropy</strong>: The remaining uncertainty in one variable when the other is known</li>\n<li><strong>Relative Entropy (KL Divergence)</strong>: A measure of the difference between two probability distributions</li>\n<li><strong>Mutual Information</strong>: The information shared between two variables, indicating their dependence</li>\n</ul>\n<p>By implementing these measures from scratch, we\'ll develop a deep understanding of how to quantify information in any system, from text documents to quantum states, without relying on existing information theory libraries or abstractions.</p>\n\n<h3>3. Binary Representation & Coding</h3>\n<p>All information in digital systems must ultimately be represented as sequences of binary digits (bits). This section explores how various types of information are encoded in binary and the fundamental trade-offs in different coding schemes.</p>\n<p>We\'ll examine various coding systems:</p>\n<ul>\n<li><strong>Fixed-Length Codes</strong>: Each symbol uses the same number of bits (e.g., ASCII, Unicode)</li>\n<li><strong>Variable-Length Codes</strong>: Different symbols use different numbers of bits based on their probability (e.g., Morse code, Huffman coding)</li>\n<li><strong>Prefix Codes</strong>: No codeword is a prefix of another, enabling unambiguous decoding</li>\n<li><strong>Source Coding</strong>: Techniques to represent information using fewer bits while preserving meaning</li>\n</ul>\n<p>We\'ll implement these coding schemes from scratch, building encoders and decoders that transform information between human-readable forms and efficient binary representations, developing the skills to create custom encoding systems for any information type.</p>\n\n<h3>4. Data Compression Algorithms</h3>\n<p>Data compression reduces the size of information for efficient storage and transmission, applying information theory principles to practical systems. This section focuses on lossless compression techniques that allow perfect reconstruction of the original data.</p>\n<p>We\'ll implement several key compression algorithms from scratch:</p>\n<ul>\n<li><strong>Run-Length Encoding</strong>: Compressing sequences of repeated values</li>\n<li><strong>Huffman Coding</strong>: Creating optimal variable-length prefix codes based on symbol frequencies</li>\n<li><strong>Arithmetic Coding</strong>: Encoding entire messages as fractional numbers for near-optimal compression</li>\n<li><strong>Dictionary Methods</strong>: LZ77, LZ78, and LZW algorithms that build dictionaries of repeated patterns</li>\n<li><strong>Context Modeling</strong>: Using previous symbols to predict and efficiently encode the next symbol</li>\n</ul>\n<p>By building these algorithms from their mathematical foundations rather than using existing libraries, we\'ll understand exactly how each technique works, their computational complexity, and how they approach the theoretical limits established by information theory.</p>\n\n<h3>5. Digital Media Representation</h3>\n<p>This section explores how complex forms of information like text, images, audio, and video are represented in digital systems, applying information theory principles to real-world media formats.</p>\n<p>We\'ll examine representation schemes for various media types:</p>\n<ul>\n<li><strong>Text Encoding</strong>: Character sets (ASCII, Unicode), text compression, and search structures</li>\n<li><strong>Image Representation</strong>: Bitmap formats, color spaces, spatial/frequency domain representations</li>\n<li><strong>Audio Encoding</strong>: Sampling, quantization, time and frequency domain representations</li>\n<li><strong>Video Formats</strong>: Frame-based representation, motion compensation, temporal compression</li>\n</ul>\n<p>For each media type, we\'ll implement basic encoders and decoders from scratch, understanding how information theory principles lead to efficient representations. This approach avoids relying on existing media libraries, instead building the fundamental algorithms that underlie all digital media systems.</p>',
        parentId: 'cs_foundations'
    },
    {
        id: 'computation_models',
        title: 'Models of Computation',
        description: 'Theoretical frameworks that define computation',
        content: '<h3>1. Foundations of Computation Theory</h3>\n<p>Computation theory examines what problems can be solved algorithmically and how efficiently they can be solved. This foundation is essential for understanding the fundamental capabilities and limitations of computing systems.</p>\n<p>Key concepts in computation theory include:</p>\n<ul>\n<li><strong>Algorithms</strong>: Step-by-step procedures for solving problems</li>\n<li><strong>Decidability</strong>: Whether a problem has an algorithmic solution</li>\n<li><strong>Tractability</strong>: Whether a problem can be solved efficiently</li>\n<li><strong>Reduction</strong>: Transforming one problem into another to relate their complexity</li>\n</ul>\n<p>We\'ll explore these concepts from first principles, examining the nature of algorithms and computation before introducing formal models. This approach provides a philosophical and intuitive foundation for the more rigorous mathematical structures that follow.</p>\n\n<h3>2. Finite Automata & Regular Languages</h3>\n<p>Finite automata are the simplest models of computation, capable of recognizing regular languages. They provide a foundation for understanding more complex computational models and are widely used in lexical analysis, pattern matching, and digital circuit design.</p>\n<p>We\'ll explore several types of finite automata:</p>\n<ul>\n<li><strong>Deterministic Finite Automata (DFA)</strong>: Machines where each state has exactly one transition for each input symbol</li>\n<li><strong>Nondeterministic Finite Automata (NFA)</strong>: Machines that can have multiple possible transitions for a single input</li>\n<li><strong>Regular Expressions</strong>: A compact notation for describing regular languages</li>\n<li><strong>State Minimization</strong>: Techniques for finding the smallest equivalent automaton</li>\n</ul>\n<p>We\'ll implement simulators for these machines from scratch, building a library that can define, visualize, and execute finite automata on arbitrary inputs. This implementation will avoid existing automata libraries, instead developing the algorithms and data structures directly from their mathematical definitions.</p>\n\n<h3>3. Context-Free Languages & Pushdown Automata</h3>\n<p>Context-free languages extend regular languages with recursive structures, making them appropriate for modeling programming languages, nested expressions, and natural language syntax. Pushdown automata add a stack to finite automata, providing the memory needed to recognize these languages.</p>\n<p>Key aspects we\'ll explore include:</p>\n<ul>\n<li><strong>Context-Free Grammars (CFG)</strong>: Formal systems for generating languages with recursive structure</li>\n<li><strong>Derivations and Parse Trees</strong>: Representations of how strings are generated by a grammar</li>\n<li><strong>Pushdown Automata (PDA)</strong>: Finite automata augmented with an infinite stack</li>\n<li><strong>Parsing Algorithms</strong>: Top-down (recursive descent, LL) and bottom-up (LR) approaches</li>\n</ul>\n<p>We\'ll implement parsers and pushdown automata simulators from scratch, building both theoretical models and practical parsing tools without relying on parser generators or existing libraries. This approach provides deep insight into the structure of programming languages and compilers.</p>\n\n<h3>4. Turing Machines & Computability</h3>\n<p>Turing machines represent the most powerful general model of computation, capturing the full range of algorithmic processes. They define the boundary between computable and uncomputable problems and form the theoretical foundation of modern computers.</p>\n<p>We\'ll explore several aspects of Turing machines and computability:</p>\n<ul>\n<li><strong>Turing Machine Definition</strong>: Formal structure with unlimited memory tape and finite control</li>\n<li><strong>Universal Turing Machines</strong>: Machines that can simulate any other Turing machine</li>\n<li><strong>The Church-Turing Thesis</strong>: The hypothesis that Turing machines capture all effective computation</li>\n<li><strong>Undecidable Problems</strong>: The Halting Problem and other problems with no algorithmic solution</li>\n<li><strong>Reductions</strong>: Techniques for proving problems undecidable</li>\n</ul>\n<p>We\'ll implement Turing machine simulators from scratch, building systems that can define, visualize, and execute these theoretical machines on arbitrary inputs. This implementation will provide concrete insight into these abstract models, making their theoretical properties tangible through direct experimentation.</p>\n\n<h3>5. Computational Complexity</h3>\n<p>Computational complexity theory classifies problems based on the resources (time, space) required to solve them, establishing a hierarchy of complexity classes that organizes problems by their inherent difficulty.</p>\n<p>Key concepts in complexity theory include:</p>\n<ul>\n<li><strong>Time and Space Complexity</strong>: How resource requirements scale with input size</li>\n<li><strong>Complexity Classes</strong>: P, NP, PSPACE, and their relationships</li>\n<li><strong>NP-Completeness</strong>: Problems that are as hard as any in NP</li>\n<li><strong>Polynomial-Time Reductions</strong>: Transformations that preserve complexity</li>\n<li><strong>Approximation Algorithms</strong>: Efficient approaches for intractable problems</li>\n</ul>\n<p>We\'ll implement algorithms for classic problems from different complexity classes, analyzing their performance and understanding the fundamental reasons why some problems require exponentially more resources than others. This approach grounds abstract complexity theory in concrete implementations, providing insight into the practical implications of theoretical complexity barriers.</p>',
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
        content: '<h3>1. Semiconductor Physics Fundamentals</h3>\n<p>At the heart of all modern computing lies semiconductor physics, which enables the creation of transistors. This section explores the physical principles that make computing possible at the atomic level.</p>\n<p>Key concepts in semiconductor physics include:</p>\n<ul>\n<li><strong>Atomic Structure</strong>: Electron shells, valence electrons, and how atoms bond together</li>\n<li><strong>Band Theory</strong>: Energy bands in solids, conduction bands, valence bands, and band gaps</li>\n<li><strong>Semiconductor Materials</strong>: Silicon, germanium, and compound semiconductors</li>\n<li><strong>Doping</strong>: Adding impurities to create n-type and p-type semiconductors</li>\n<li><strong>Carrier Transport</strong>: How electrons and holes move through semiconductor materials</li>\n</ul>\n<p>We\'ll explore these concepts from first principles, starting with quantum mechanics and atomic theory, building up to practical semiconductor behavior. This approach provides a strong foundation for understanding the physical layer of computing without relying on simplified abstractions.</p>\n\n<h3>2. Diodes and PN Junctions</h3>\n<p>Before understanding transistors, we must understand the PN junction, which forms the basis of semiconductor diodes and is a crucial component of transistors.</p>\n<p>Key aspects of PN junctions include:</p>\n<ul>\n<li><strong>Junction Formation</strong>: How p-type and n-type semiconductors interact when placed together</li>\n<li><strong>Depletion Region</strong>: The zone where free carriers are removed through diffusion</li>\n<li><strong>Forward and Reverse Bias</strong>: How applied voltage affects current flow through the junction</li>\n<li><strong>IV Characteristics</strong>: The nonlinear relationship between current and voltage</li>\n<li><strong>Junction Capacitance</strong>: How the junction stores charge and responds to changing voltages</li>\n</ul>\n<p>We\'ll analyze these junctions with mathematical models and build simple circuits to observe their behavior firsthand, understanding them from the atomic level up rather than as idealized components.</p>\n\n<h3>3. Transistor Types and Operation</h3>\n<p>Transistors are semiconductor devices that can amplify signals and act as electronic switches, forming the fundamental building blocks of all computing systems.</p>\n<p>We\'ll explore different transistor types and their operational principles:</p>\n<ul>\n<li><strong>Bipolar Junction Transistors (BJTs)</strong>: NPN and PNP structures, current amplification, operating regions</li>\n<li><strong>Field-Effect Transistors (FETs)</strong>: JFETs and MOSFETs, voltage control, channel formation</li>\n<li><strong>CMOS Technology</strong>: Complementary MOSFET pairs that form the basis of modern digital ICs</li>\n<li><strong>Transistor Parameters</strong>: Gain, frequency response, switching speed, power dissipation</li>\n<li><strong>Small-Signal Models</strong>: Mathematical representations for analyzing transistor behavior</li>\n</ul>\n<p>We\'ll implement circuits with discrete transistors, measuring their characteristics and understanding how their physical properties determine their electronic behavior, rather than simply using them as black-box components.</p>\n\n<h3>4. Digital Logic Implementation</h3>\n<p>This section explores how transistors are arranged to implement Boolean logic functions, creating the fundamental gates that form the basis of all digital systems.</p>\n<p>We\'ll examine different logic families and their implementations:</p>\n<ul>\n<li><strong>Resistor-Transistor Logic (RTL)</strong>: Simple but inefficient early implementation</li>\n<li><strong>Diode-Transistor Logic (DTL)</strong>: Improved speed with diodes for input processing</li>\n<li><strong>Transistor-Transistor Logic (TTL)</strong>: Faster switching with multiple transistors</li>\n<li><strong>CMOS Logic</strong>: Low power, high density implementation dominating modern design</li>\n<li><strong>Logic Levels and Noise Margins</strong>: How voltage ranges represent binary values reliably</li>\n</ul>\n<p>For each logic family, we\'ll build actual gates from individual transistors, measuring their performance characteristics and understanding the trade-offs between speed, power, and complexity, without relying on integrated circuits.</p>\n\n<h3>5. From Transistors to Integrated Circuits</h3>\n<p>Modern computing depends on the ability to integrate billions of transistors onto a single chip. This section explores how individual transistors evolved into large-scale integrated circuits.</p>\n<p>Key aspects of IC technology include:</p>\n<ul>\n<li><strong>Fabrication Processes</strong>: Photolithography, etching, doping, and metallization</li>\n<li><strong>Process Scaling</strong>: How transistors have shrunk from micrometers to nanometers</li>\n<li><strong>Moore\'s Law</strong>: The historical trend and physical limits of transistor scaling</li>\n<li><strong>Design Rules</strong>: Constraints that determine what can be physically manufactured</li>\n<li><strong>Packaging and Interconnects</strong>: How chips are connected to the outside world</li>\n</ul>\n<p>We\'ll examine detailed fabrication steps and design simple integrated circuits at the transistor level, understanding the physical and economic factors that shape modern chips rather than treating ICs as mysterious black boxes.</p>',
        parentId: 'hardware'
    },
    {
        id: 'digital_circuits',
        title: 'Digital Circuits & Components',
        description: 'Building useful circuits from basic logic gates',
        content: '<h3>1. Fundamentals of Digital Circuit Design</h3>\n<p>Digital circuit design is the process of creating electronic circuits that operate on binary signals, forming the foundation of all computing hardware. This section covers the essential principles and methodologies for designing reliable digital systems.</p>\n<p>Key concepts in digital design include:</p>\n<ul>\n<li><strong>Boolean Algebra in Practice</strong>: Applying Boolean algebra to simplify and optimize circuit designs</li>\n<li><strong>Circuit Minimization</strong>: Karnaugh maps and Quine-McCluskey algorithm for logic simplification</li>\n<li><strong>Timing Analysis</strong>: Propagation delay, setup/hold times, and critical paths</li>\n<li><strong>Noise and Interference</strong>: Design techniques to ensure signal integrity</li>\n<li><strong>Power Considerations</strong>: Static and dynamic power consumption optimization</li>\n</ul>\n<p>We\'ll apply these concepts by designing circuits on paper and then implementing them with physical components, focusing on understanding both theoretical and practical aspects of digital design from first principles.</p>\n\n<h3>2. Combinational Logic Circuits</h3>\n<p>Combinational circuits produce outputs that depend only on the current inputs, with no memory of past states. These circuits perform the fundamental data processing operations in a computer.</p>\n<p>We\'ll design and build key combinational components:</p>\n<ul>\n<li><strong>Adders</strong>: Half adders, full adders, and ripple-carry adders for binary arithmetic</li>\n<li><strong>Multiplexers (MUX)</strong>: Circuits that select one output from multiple inputs based on control signals</li>\n<li><strong>Demultiplexers (DEMUX)</strong>: Circuits that route a single input to one of multiple outputs</li>\n<li><strong>Encoders and Decoders</strong>: Circuits that convert between binary codes and one-hot representations</li>\n<li><strong>Comparators</strong>: Circuits that compare binary numbers and indicate relationships (equal, greater, less)</li>\n</ul>\n<p>For each component, we\'ll implement multiple design approaches using only basic gates (AND, OR, NOT) rather than using integrated circuit packages, understanding the trade-offs between design complexity, performance, and resource usage.</p>\n\n<h3>3. Sequential Logic Elements</h3>\n<p>Sequential circuits contain memory elements that store information over time, allowing systems to maintain state. These elements are essential for creating computers that can execute multi-step operations.</p>\n<p>We\'ll explore the fundamental sequential components:</p>\n<ul>\n<li><strong>Latches</strong>: SR, gated D, and other basic storage elements</li>\n<li><strong>Flip-flops</strong>: Edge-triggered storage devices (D, JK, T types)</li>\n<li><strong>Registers</strong>: Arrays of flip-flops that store multiple bits of information</li>\n<li><strong>Shift Registers</strong>: Serial-to-parallel and parallel-to-serial conversion</li>\n<li><strong>Master-Slave Designs</strong>: Preventing race conditions in sequential circuits</li>\n</ul>\n<p>We\'ll build each of these components from scratch using only basic gates, analyzing their timing behavior, metastability issues, and how their physical implementation affects their performance characteristics.</p>\n\n<h3>4. Synchronous Sequential Circuits</h3>\n<p>Synchronous sequential circuits use clock signals to coordinate state changes, enabling complex, deterministic behavior essential for computing systems. These circuits form the core of control units and data paths in processors.</p>\n<p>Key synchronous circuit types we\'ll implement include:</p>\n<ul>\n<li><strong>Counters</strong>: Asynchronous and synchronous designs (binary, decade, Johnson, etc.)</li>\n<li><strong>State Machines</strong>: Moore and Mealy machine implementations</li>\n<li><strong>Sequencers</strong>: Programmable circuits that generate control signals in sequence</li>\n<li><strong>Pulse Generators</strong>: Circuits for creating precisely timed control signals</li>\n<li><strong>Clock Distribution</strong>: Techniques for delivering reliable clock signals throughout a system</li>\n</ul>\n<p>Our implementations will focus on understanding timing requirements, hazard avoidance, and the relationship between state diagrams, state tables, and actual circuit implementations, all built from basic gates rather than using specialized ICs.</p>\n\n<h3>5. Advanced Digital Design Techniques</h3>\n<p>Beyond basic components, modern digital systems employ sophisticated techniques to improve performance, reliability, and functionality. This section explores design approaches used in complex digital systems.</p>\n<p>Advanced techniques we\'ll explore include:</p>\n<ul>\n<li><strong>Pipelining</strong>: Breaking operations into stages to increase throughput</li>\n<li><strong>Asynchronous Design</strong>: Creating systems without global clock signals</li>\n<li><strong>Hardware Description Languages</strong>: Using VHDL or Verilog to describe complex circuits</li>\n<li><strong>Fault-Tolerant Design</strong>: Creating circuits that can detect and correct errors</li>\n<li><strong>Testability</strong>: Designing circuits for ease of testing and verification</li>\n</ul>\n<p>We\'ll implement examples of these techniques with discrete components where possible and use hardware description languages for more complex designs, maintaining our focus on understanding principles rather than using pre-built components. This approach provides the foundation needed to design sophisticated digital systems from first principles.</p>',
        parentId: 'hardware'
    },
    {
        id: 'cpu_design',
        title: 'CPU Design & Architecture',
        description: 'Designing a functional CPU from basic components',
        content: '<h3>1. CPU Architecture Fundamentals</h3>\n<p>CPU architecture defines the organizational structure and operational principles of a processor. Understanding these foundational concepts is essential for designing functional processors from basic components.</p>\n<p>Key architectural concepts include:</p>\n<ul>\n<li><strong>Von Neumann Architecture</strong>: The classic stored-program computer with shared memory for instructions and data</li>\n<li><strong>Harvard Architecture</strong>: Systems with separate instruction and data memories for improved performance</li>\n<li><strong>CISC vs. RISC Designs</strong>: Trade-offs between complex and reduced instruction sets</li>\n<li><strong>Word Size and Address Space</strong>: How bit width affects addressable memory and processing capabilities</li>\n<li><strong>Execution Models</strong>: Sequential, pipelined, superscalar, and out-of-order execution approaches</li>\n</ul>\n<p>We\'ll explore these architectures by designing simple versions of each, comparing their characteristics and understanding the historical and technical factors that influenced their development, focusing on first principles rather than existing commercial architectures.</p>\n\n<h3>2. Instruction Set Architecture (ISA)</h3>\n<p>The instruction set architecture is the interface between hardware and software, defining the processor\'s capabilities from the programmer\'s perspective. Designing an effective ISA involves carefully balancing expressiveness, efficiency, and implementability.</p>\n<p>Our ISA design process will cover:</p>\n<ul>\n<li><strong>Instruction Formats</strong>: Designing fixed and variable-length encoding schemas</li>\n<li><strong>Addressing Modes</strong>: Methods for specifying operand locations (immediate, direct, indirect, indexed)</li>\n<li><strong>Operation Categories</strong>: Arithmetic, logical, data movement, control flow, and special instructions</li>\n<li><strong>Condition Codes</strong>: Status flags and their role in conditional operations</li>\n<li><strong>ISA Extensions</strong>: Specialized instructions for enhanced functionality (SIMD, crypto, etc.)</li>\n</ul>\n<p>Rather than copying existing instruction sets, we\'ll design our own minimal but complete ISA from first principles, carefully considering the trade-offs of each design decision and how it affects both hardware implementation and software development.</p>\n\n<h3>3. Arithmetic Logic Units (ALUs)</h3>\n<p>The ALU is the computational heart of a CPU, performing mathematical and logical operations on data. Creating an efficient ALU requires understanding how to implement various operations in digital logic.</p>\n<p>We\'ll design and implement ALU components including:</p>\n<ul>\n<li><strong>Integer Arithmetic</strong>: Adders, subtractors, and multipliers with various speed/area trade-offs</li>\n<li><strong>Logical Operations</strong>: AND, OR, XOR, and NOT circuits with bit-parallel processing</li>\n<li><strong>Shifters and Rotators</strong>: Barrel shifters and logic for bit manipulation operations</li>\n<li><strong>Comparators</strong>: Circuits for equality and magnitude comparison</li>\n<li><strong>Flags Generation</strong>: Circuits to detect zero, negative, carry, overflow, and parity conditions</li>\n</ul>\n<p>We\'ll build our ALU entirely from the digital components previously studied, avoiding pre-built ALU modules and understanding the trade-offs between different implementations in terms of speed, area, and power consumption.</p>\n\n<h3>4. Control Unit Design</h3>\n<p>The control unit orchestrates the operation of the CPU, generating the precise sequence of control signals needed to execute instructions. This component translates the ISA into the actual hardware behavior.</p>\n<p>We\'ll explore two main approaches to control unit design:</p>\n<ul>\n<li><strong>Hardwired Control</strong>: Implementing control logic directly with combinational circuits</li>\n<li><strong>Microprogrammed Control</strong>: Using a microcode ROM to store control sequences</li>\n<li><strong>Instruction Fetch and Decode</strong>: Circuits for retrieving and interpreting instructions</li>\n<li><strong>Pipeline Control</strong>: Managing the flow of instructions through multiple pipeline stages</li>\n<li><strong>Hazard Detection and Handling</strong>: Addressing data, control, and structural hazards</li>\n</ul>\n<p>Our implementation will include complete control units using both approaches, comparing their advantages and disadvantages, and understanding how they generate the precise timing and control signals required for correct CPU operation.</p>\n\n<h3>5. Building a Complete CPU</h3>\n<p>Bringing all components together to create a working CPU requires careful integration and validation. This final section focuses on system integration, testing, and validation of a complete processor.</p>\n<p>Key aspects of CPU integration include:</p>\n<ul>\n<li><strong>Data Path Design</strong>: Connecting ALU, registers, and memory interfaces</li>\n<li><strong>Register File Implementation</strong>: Creating efficient multi-port register storage</li>\n<li><strong>Memory Interfacing</strong>: Designing address decoders and data buses</li>\n<li><strong>System Timing</strong>: Ensuring proper clock distribution and signal synchronization</li>\n<li><strong>CPU Verification</strong>: Testing strategies to validate correctness at various abstraction levels</li>\n</ul>\n<p>We\'ll implement our complete CPU design using a hardware description language (HDL), following a systematic process from specification to simulation to synthesis. Unlike typical courses that use pre-designed CPUs, we\'ll build everything from the logic gates up, gaining deep insight into every aspect of processor operation.</p>',
        parentId: 'hardware'
    },
    {
        id: 'memory_systems',
        title: 'Memory Systems',
        description: 'From individual bits to complex memory hierarchies',
        content: '<h3>1. Memory Cell Technologies</h3>\n<p>At the heart of computer memory are the physical mechanisms for storing binary information. Different memory technologies offer various trade-offs in terms of speed, density, volatility, and cost.</p>\n<p>We\'ll explore several fundamental memory cell technologies:</p>\n<ul>\n<li><strong>Static RAM (SRAM)</strong>: Six-transistor cells that maintain state without refresh</li>\n<li><strong>Dynamic RAM (DRAM)</strong>: Single-transistor-capacitor cells requiring periodic refresh</li>\n<li><strong>Non-volatile Memories</strong>: Flash, EEPROM, and emerging technologies (MRAM, ReRAM, etc.)</li>\n<li><strong>Magnetic Storage</strong>: Hard disk drive technology and principles</li>\n<li><strong>Optical Storage</strong>: CD, DVD, and Blu-ray recording and reading mechanisms</li>\n</ul>\n<p>For each technology, we\'ll examine the physics of operation at the transistor or material level, implementing simple versions where possible and understanding their fundamental characteristics, limitations, and manufacturing processes rather than treating them as abstract components.</p>\n\n<h3>2. Memory Organization and Addressing</h3>\n<p>Memory organization determines how individual cells are arranged into addressable units and accessed by the processor. Effective organization balances capacity, speed, and power consumption.</p>\n<p>Key aspects of memory organization include:</p>\n<ul>\n<li><strong>Memory Arrays</strong>: Row and column decoders, sense amplifiers, and timing circuits</li>\n<li><strong>Address Mapping</strong>: How logical addresses translate to physical memory locations</li>\n<li><strong>Word Size and Alignment</strong>: Data organization and access restrictions</li>\n<li><strong>Error Detection and Correction</strong>: Parity, ECC, and other techniques</li>\n<li><strong>Multi-bank Organizations</strong>: Interleaved access for improved performance</li>\n</ul>\n<p>We\'ll design and implement memory subsystems from basic components, including address decoders, data buffers, and control logic, avoiding pre-built memory modules and understanding the detailed operation of memory arrays and their surrounding circuitry.</p>\n\n<h3>3. Memory Hierarchy and Caching</h3>\n<p>Memory hierarchies exploit locality of reference to bridge the speed gap between fast processors and slower main memory. Caching is the key technique that makes this hierarchy effective.</p>\n<p>Our implementation of memory hierarchies will cover:</p>\n<ul>\n<li><strong>Register Files</strong>: Processor-integrated multi-port memory systems</li>\n<li><strong>Cache Architectures</strong>: Direct-mapped, set-associative, and fully-associative designs</li>\n<li><strong>Cache Replacement Policies</strong>: LRU, FIFO, random, and other algorithms</li>\n<li><strong>Write Policies</strong>: Write-through vs. write-back strategies</li>\n<li><strong>Coherence Protocols</strong>: Maintaining consistency in multi-cache systems</li>\n</ul>\n<p>We\'ll implement complete cache controllers from digital logic components, simulating their behavior with realistic memory access patterns and measuring performance metrics like hit rate and average access time, building an intuitive understanding of locality and its exploitation.</p>\n\n<h3>4. Virtual Memory Systems</h3>\n<p>Virtual memory extends the memory hierarchy to disk storage, providing the illusion of a larger memory space than physically available and isolating processes from each other.</p>\n<p>Key aspects of virtual memory include:</p>\n<ul>\n<li><strong>Address Translation</strong>: Page tables, TLBs, and translation mechanisms</li>\n<li><strong>Page Replacement Algorithms</strong>: LRU, clock, working set, and other approaches</li>\n<li><strong>Memory Protection</strong>: Access rights enforcement and process isolation</li>\n<li><strong>Demand Paging</strong>: Loading pages only when needed</li>\n<li><strong>Memory-Mapped Files</strong>: Integrating file I/O with memory access</li>\n</ul>\n<p>We\'ll implement virtual memory controllers and memory management units (MMUs) from basic components, understanding the hardware-software interaction in modern memory systems and how operating systems use the hardware capabilities to provide protected, virtualized memory environments.</p>\n\n<h3>5. Memory Controllers and Interfaces</h3>\n<p>Memory controllers bridge the gap between processors and memory devices, handling the complex timing and protocol requirements of modern memory systems.</p>\n<p>Our exploration of memory interfaces will include:</p>\n<ul>\n<li><strong>DRAM Timing</strong>: RAS/CAS protocols, refresh scheduling, and timing parameters</li>\n<li><strong>Memory Bus Architectures</strong>: Parallel and serial interfaces (DDR, LPDDR, HBM)</li>\n<li><strong>DMA Controllers</strong>: Offloading memory transfers from the CPU</li>\n<li><strong>Memory-Mapped I/O</strong>: Interfacing with peripherals through memory addressing</li>\n<li><strong>Storage Controllers</strong>: Interfaces to persistent storage systems</li>\n</ul>\n<p>We\'ll implement memory controllers from digital logic, understanding the detailed timing requirements of various memory technologies and the complex trade-offs involved in modern memory system design. This hands-on approach reveals the challenges in bridging the speed gap between processors and memory while managing power, reliability, and cost constraints.</p>',
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
    {
        id: 'crypto_fundamentals',
        title: 'Cryptographic Fundamentals',
        description: 'Mathematical foundations of secure communication',
        content: 'Cryptography provides the mathematical tools to secure digital information and communications. This topic covers the fundamental concepts and algorithms that enable secure systems. You\'ll learn about number theory, modular arithmetic, and information theory that form the foundation of cryptography. We\'ll implement classical ciphers (substitution, transposition) and modern symmetric algorithms (AES) from scratch, understanding their mathematical properties and security guarantees. Rather than using existing cryptographic libraries, you\'ll build your own implementations, gaining insight into how security primitives work at a fundamental level and why they\'re secure against various attacks.',
        parentId: 'security'
    },
    {
        id: 'public_key_crypto',
        title: 'Public Key Cryptography',
        description: 'Building asymmetric encryption systems',
        content: 'Public key cryptography enables secure communication without a shared secret key. This topic covers the mathematics and algorithms of asymmetric encryption. You\'ll implement essential public key systems like RSA and elliptic curve cryptography from scratch, building on number theory principles such as modular exponentiation and the difficulty of factoring large numbers. We\'ll develop digital signature algorithms and key exchange protocols, understanding their security properties. Rather than using existing libraries, you\'ll build these systems yourself, gaining deep insight into the mathematical foundations that enable secure internet communication, from HTTPS to cryptocurrency.',
        parentId: 'security'
    },
    {
        id: 'secure_systems',
        title: 'Secure Systems Design',
        description: 'Building systems with security from the ground up',
        content: 'Secure systems design applies security principles throughout the architecture and implementation of software and hardware. This topic covers methodologies for creating systems that are secure by design, not as an afterthought. You\'ll learn about threat modeling, principle of least privilege, defense in depth, and secure coding practices. We\'ll implement security mechanisms like access control systems, authentication frameworks, and secure communication channels from scratch. Rather than using existing solutions, you\'ll build your own security controls, developing a deep understanding of how to translate security requirements into concrete implementations that protect against real-world threats.',
        parentId: 'security'
    },
    {
        id: 'security_analysis',
        title: 'Security Analysis & Penetration Testing',
        description: 'Finding and exploiting vulnerabilities',
        content: 'Security analysis examines systems to identify and address vulnerabilities before they can be exploited. This topic covers techniques for analyzing systems from an attacker\'s perspective. You\'ll learn about common vulnerability classes (buffer overflows, SQL injection, XSS) and how to find them through static analysis, fuzzing, and penetration testing. We\'ll implement our own analysis tools from scratch, including simple static analyzers and fuzzers. Rather than using existing security scanners, you\'ll develop your own testing methodologies and tools, gaining insight into how attackers think and how to build more resilient systems that can withstand sophisticated attacks.',
        parentId: 'security'
    },
    {
        id: 'network_security',
        title: 'Network Security',
        description: 'Protecting communications and network infrastructure',
        content: 'Network security focuses on protecting data in transit and securing network infrastructure. This topic explores threats to networks and the mechanisms to defend against them. You\'ll learn about secure protocols, firewalls, intrusion detection systems, and virtual private networks. We\'ll implement our own network security tools from scratch, including packet filters, simple intrusion detection systems, and VPN protocols based on the cryptographic primitives you\'ve already built. Rather than using existing security appliances or software, you\'ll develop your own network security solutions, gaining deep insight into how attacks propagate through networks and how defenses can be structured to prevent unauthorized access and protect data confidentiality and integrity.',
        parentId: 'security'
    },
    
    // AI & Machine Learning
    {
        id: 'ai_ml',
        title: 'AI & Machine Learning',
        description: 'Building intelligent systems from mathematical foundations',
        content: 'Artificial Intelligence enables machines to simulate human intelligence, while Machine Learning allows systems to learn from data without explicit programming. Our "Build from Scratch" approach means implementing AI algorithms and ML models yourself, starting from their mathematical foundations. Rather than using existing frameworks and libraries, you\'ll gain the knowledge to design, train, and evaluate intelligent systems from first principles.',
        parentId: null
    },
    {
        id: 'ml_fundamentals',
        title: 'Machine Learning Fundamentals',
        description: 'Mathematical foundations of learning from data',
        content: 'Machine learning fundamentals establish the mathematical and statistical principles that enable computers to learn from data. This topic covers the core concepts and techniques that form the basis of ML. You\'ll learn about linear algebra, probability theory, and optimization methods essential for machine learning. We\'ll implement fundamental algorithms from scratch, including linear regression, logistic regression, and k-means clustering, understanding their mathematical derivations and properties. Rather than using existing ML libraries, you\'ll build your own implementations, developing a deep understanding of how learning algorithms extract patterns from data and make predictions or decisions based on those patterns.',
        parentId: 'ai_ml'
    },
    {
        id: 'neural_networks',
        title: 'Neural Networks From Scratch',
        description: 'Building brain-inspired learning systems',
        content: 'Neural networks are computational models inspired by the human brain that can learn complex patterns from data. This topic explores the mathematics, architecture, and training of neural networks. You\'ll implement feed-forward networks from scratch, starting with neurons as simple computational units and building up to multi-layer networks. We\'ll develop backpropagation and gradient descent algorithms to train these networks, understanding their mathematical foundations. Rather than using existing frameworks like TensorFlow or PyTorch, you\'ll build your own neural network library, gaining insight into every aspect of how these powerful models learn and make predictions.',
        parentId: 'ai_ml'
    },
    {
        id: 'deep_learning',
        title: 'Deep Learning Architectures',
        description: 'Advanced neural network structures and algorithms',
        content: 'Deep learning extends neural networks with advanced architectures that can learn highly complex patterns. This topic covers specialized network structures for different types of data and problems. You\'ll implement convolutional neural networks (CNNs) for image processing, recurrent neural networks (RNNs) and transformers for sequential data, and generative adversarial networks (GANs) for generating new content. We\'ll build these architectures from scratch, understanding their mathematical foundations and training algorithms. Rather than using existing deep learning libraries, you\'ll implement your own versions of these cutting-edge models, developing insight into how they achieve state-of-the-art performance on complex tasks like image recognition, natural language processing, and content generation.',
        parentId: 'ai_ml'
    },
    {
        id: 'reinforcement_learning',
        title: 'Reinforcement Learning',
        description: 'Building systems that learn through interaction',
        content: 'Reinforcement learning is a paradigm where agents learn to make decisions by interacting with an environment. This topic explores how systems can learn optimal behavior through trial, error, and reward. You\'ll implement fundamental RL algorithms from scratch, including dynamic programming methods, Monte Carlo methods, and temporal-difference learning (Q-learning). We\'ll develop more advanced techniques like policy gradients and deep Q-networks, understanding their mathematical foundations. Rather than using existing RL libraries, you\'ll build your own implementations, gaining insight into how agents can learn complex behaviors without explicit programming, from game playing to robotic control to resource allocation.',
        parentId: 'ai_ml'
    },
    {
        id: 'ml_systems',
        title: 'Machine Learning Systems',
        description: 'Building complete ML pipelines and applications',
        content: 'Machine learning systems integrate ML models into larger software systems to solve real-world problems. This topic explores the architecture and engineering of complete ML applications. You\'ll learn about data pipelines, feature engineering, model selection, evaluation metrics, and deployment strategies. We\'ll implement a complete ML system from scratch, from data collection and preprocessing to model training, evaluation, and serving. Rather than using existing ML platforms, you\'ll build your own infrastructure for managing the ML lifecycle, gaining insight into the challenges and solutions for creating reliable, scalable, and maintainable intelligent systems that can operate in production environments.',
        parentId: 'ai_ml'
    },
    
    // Theory of Computation
    {
        id: 'theory',
        title: 'Theory of Computation',
        description: 'Mathematical foundation of computation and algorithms',
        content: 'Theory of Computation is the mathematical study of the capabilities and limitations of computing systems. Our "Build from Scratch" approach means learning the formal models and mathematical proofs that define computation, then implementing these models yourself. This deep theoretical understanding provides insight into what can and cannot be computed, and forms the foundation for practical algorithm design and analysis.',
        parentId: null
    },
    {
        id: 'automata_theory',
        title: 'Automata Theory',
        description: 'Formal models of computation',
        content: 'Automata theory studies abstract mathematical models of computation. This topic explores different classes of automata and their computational power. You\'ll learn about finite automata, pushdown automata, and Turing machines, understanding their formal definitions and properties. We\'ll implement these models from scratch, building simulators that can execute automata on given inputs and determine whether they accept or reject. Rather than using existing libraries, you\'ll develop your own representations and algorithms for these fundamental computational models, gaining insight into the theoretical foundation of what computers can and cannot compute and how computational problems can be classified based on the simplest machine that can solve them.',
        parentId: 'theory'
    },
    {
        id: 'formal_languages',
        title: 'Formal Languages & Grammars',
        description: 'Mathematical systems for describing languages',
        content: 'Formal languages and grammars provide mathematical frameworks for defining sets of strings (languages) and the rules that generate them. This topic explores the Chomsky hierarchy of grammars and their corresponding automata. You\'ll learn about regular grammars, context-free grammars, context-sensitive grammars, and unrestricted grammars. We\'ll implement parsers and generators for these grammar types from scratch, understanding their computational properties. Rather than using existing parsing tools, you\'ll build your own implementations of regular expressions, context-free parsers, and other language processing tools, gaining insight into the theoretical foundation of programming languages, compilers, and text processing systems.',
        parentId: 'theory'
    },
    {
        id: 'computability',
        title: 'Computability Theory',
        description: 'The limits of what can be computed',
        content: 'Computability theory investigates which problems can be solved algorithmically and which cannot. This topic explores the boundary between computability and non-computability. You\'ll learn about the Church-Turing thesis, decidable and undecidable problems, reductions, and the halting problem. We\'ll implement simulations of Universal Turing Machines from scratch, demonstrating their ability to compute any computable function. Rather than accepting computability results as abstract concepts, you\'ll develop concrete implementations that illustrate these fundamental limits, gaining insight into why certain problems cannot be solved by any algorithm regardless of computational resources, with implications for program verification, automated reasoning, and artificial intelligence.',
        parentId: 'theory'
    },
    {
        id: 'complexity_theory',
        title: 'Complexity Theory',
        description: 'Measuring and classifying computational efficiency',
        content: 'Complexity theory studies the resources (time, space) required to solve computational problems. This topic explores how to classify problems based on their inherent difficulty. You\'ll learn about complexity classes (P, NP, NP-complete, PSPACE), reduction techniques, and the relationships between different classes. We\'ll implement algorithms for classic problems in various complexity classes from scratch, understanding their time and space requirements. Rather than treating complexity results as theoretical abstractions, you\'ll develop concrete implementations that demonstrate why some problems are fundamentally harder than others, gaining insight into the P vs. NP question and its implications for algorithm design, cryptography, and optimization.',
        parentId: 'theory'
    },
    {
        id: 'information_theory_cs',
        title: 'Information Theory & Coding',
        description: 'Mathematical foundations of data compression and transmission',
        content: 'Information theory quantifies the amount of information in data and establishes fundamental limits on data compression and transmission. This topic explores the mathematical principles that govern how information can be efficiently represented and communicated. You\'ll learn about entropy, mutual information, channel capacity, and error-correcting codes. We\'ll implement compression algorithms and error-correction schemes from scratch, understanding their theoretical foundations. Rather than using existing libraries, you\'ll build your own implementations of Huffman coding, Hamming codes, and other information-theoretic algorithms, gaining insight into the fundamental limits of data storage and communication and how systems can approach these theoretical limits in practice.',
        parentId: 'theory'
    },
    
    // Software Engineering
    {
        id: 'software_eng',
        title: 'Software Engineering',
        description: 'Building quality software systems from first principles',
        content: 'Software Engineering is the systematic application of engineering approaches to software development. Our "Build from Scratch" approach means designing and implementing software systems yourself, understanding every component rather than relying on existing frameworks. You\'ll learn methodologies for building reliable, maintainable, and efficient software, with an emphasis on understanding why certain practices work rather than just following established processes.',
        parentId: null
    },
    {
        id: 'system_design',
        title: 'System Architecture & Design',
        description: 'Designing software systems from first principles',
        content: 'System architecture and design establish the overall structure and behavior of software systems. This topic explores methodologies for designing complex software from first principles. You\'ll learn about architectural patterns (layered, microservices, event-driven), design principles (SOLID, DRY, KISS), and modeling techniques. We\'ll implement architectural patterns from scratch, building simple but functional systems that demonstrate each approach. Rather than using existing frameworks that enforce specific architectures, you\'ll develop your own implementations, gaining insight into the tradeoffs between different architectural choices and how to design systems that meet both functional and non-functional requirements while remaining flexible enough to evolve over time.',
        parentId: 'software_eng'
    },
    {
        id: 'software_construction',
        title: 'Software Construction',
        description: 'Building robust software components and systems',
        content: 'Software construction covers the practical techniques for implementing reliable, maintainable code. This topic explores how to turn designs into working software through thoughtful construction practices. You\'ll learn about code organization, defensive programming, error handling, and program correctness. We\'ll implement common design patterns and programming idioms from scratch, understanding their benefits and appropriate use. Rather than relying on existing implementations or frameworks, you\'ll build your own versions of these patterns, gaining insight into how well-structured code supports maintainability, reliability, and efficiency. This approach emphasizes understanding why certain practices lead to better software, not just following conventions.',
        parentId: 'software_eng'
    },
    {
        id: 'testing_verification',
        title: 'Testing & Verification',
        description: 'Ensuring software correctness systematically',
        content: 'Testing and verification provide systematic approaches to ensuring that software behaves as expected. This topic explores different techniques for validating software behavior. You\'ll learn about unit testing, integration testing, system testing, and formal verification methods. We\'ll implement testing frameworks and verification tools from scratch, understanding their theoretical foundations. Rather than using existing testing libraries, you\'ll build your own test runners, assertion mechanisms, mocking frameworks, and simple formal verification tools. This approach provides deep insight into how testing and verification can discover different kinds of defects, the tradeoffs between different approaches, and how to design software that is inherently more testable and verifiable.',
        parentId: 'software_eng'
    },
    {
        id: 'performance_engineering',
        title: 'Performance Engineering',
        description: 'Building efficient software through measurement and optimization',
        content: 'Performance engineering focuses on making software systems faster, more efficient, and more scalable. This topic explores methodologies for understanding and improving system performance. You\'ll learn about profiling, benchmarking, bottleneck analysis, and optimization techniques. We\'ll implement performance measurement tools from scratch, developing profilers, memory analyzers, and benchmarking frameworks. Rather than using existing performance tools, you\'ll build your own instruments for understanding where time and resources are spent in a system. This approach provides deep insight into how algorithms, data structures, and system interactions affect performance, and how to make principled optimizations that improve efficiency without sacrificing maintainability.',
        parentId: 'software_eng'
    },
    {
        id: 'software_processes',
        title: 'Software Development Processes',
        description: 'Methodologies for effective software development',
        content: 'Software development processes provide structured approaches to building software in teams. This topic explores different methodologies for organizing software development activities. You\'ll learn about various process models (waterfall, iterative, agile) and practices (version control, code reviews, continuous integration). We\'ll implement simple tools that support these processes from scratch, including basic version control systems and continuous integration pipelines. Rather than just following established processes or using existing tools, you\'ll develop your own implementations, gaining insight into why certain approaches are effective for different kinds of projects and teams. This understanding allows you to adapt processes to specific contexts rather than applying them dogmatically.',
        parentId: 'software_eng'
    }
];

// Helper functions to work with topics
function getTopicsByParentId(parentId) {
    console.log(`getTopicsByParentId called with parentId: ${parentId}`);
    const result = topics.filter(topic => topic.parentId === parentId);
    console.log(`Found ${result.length} topics with parentId ${parentId}:`, result);
    return result;
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