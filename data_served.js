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
    },
    {
        id: 'boolean_logic',
        title: 'Boolean Logic',
        description: 'Fundamental logic operations and principles',
        content: `<h3>Boolean Logic: Building Computing from Basic Truth Values</h3>

<p>Boolean logic, developed by George Boole in the mid-19th century, forms the mathematical foundation for all digital computing. Rather than using abstract mathematical systems, we will build computing capabilities from first principles by understanding how to physically implement these logical operations.</p>

<h4>Fundamentals of Boolean Logic</h4>

<p><strong>Building Truth from Physical States</strong></p>
<p>In the physical world, Boolean logic is represented through electrical states:</p>
<ul>
  <li><strong>TRUE (1)</strong>: Represented by the presence of voltage (typically 3.3V or 5V in modern circuits)</li>
  <li><strong>FALSE (0)</strong>: Represented by the absence of voltage (typically 0V or ground)</li>
</ul>

<p><strong>Transistor-Level Implementation of Basic Operations</strong></p>
<p>At the most fundamental level, Boolean operations are constructed from transistors:</p>

<ul>
  <li><strong>NOT Gate (Inverter)</strong>: Built using a single transistor with a pull-up resistor. When the input is high, the transistor connects the output to ground (LOW). When the input is low, the transistor is off and the pull-up resistor makes the output HIGH.</li>
  <li><strong>AND Gate</strong>: Constructed using two transistors in series, requiring both inputs to be HIGH to produce a HIGH output.</li>
  <li><strong>OR Gate</strong>: Constructed using two transistors in parallel, requiring only one input to be HIGH to produce a HIGH output.</li>
</ul>

<p><strong>Deriving Complex Operations</strong></p>
<p>From these basic building blocks, we can construct all other logical operations:</p>
<ul>
  <li><strong>NAND (NOT-AND)</strong>: A universal gate from which all other logic can be built</li>
  <li><strong>NOR (NOT-OR)</strong>: Another universal gate, allowing construction of any logical function</li>
  <li><strong>XOR (Exclusive OR)</strong>: True when inputs differ, implemented using combinations of AND, OR, and NOT</li>
  <li><strong>XNOR (Exclusive NOR)</strong>: True when inputs are the same, the complement of XOR</li>
</ul>

<h4>Boolean Algebra: The Mathematical Foundation</h4>

<p><strong>Core Axioms and Properties</strong></p>
<p>Boolean algebra provides the mathematical framework for manipulating logical expressions:</p>
<ul>
  <li><strong>Commutative Property</strong>: A · B = B · A and A + B = B + A</li>
  <li><strong>Associative Property</strong>: A · (B · C) = (A · B) · C and A + (B + C) = (A + B) + C</li>
  <li><strong>Distributive Property</strong>: A · (B + C) = A · B + A · C and A + (B · C) = (A + B) · (A + C)</li>
  <li><strong>Identity Property</strong>: A · 1 = A and A + 0 = A</li>
  <li><strong>Complement Property</strong>: A · Ā = 0 and A + Ā = 1</li>
</ul>

<p><strong>Simplification Techniques</strong></p>
<p>Optimizing logical expressions is essential for efficient circuit design:</p>
<ul>
  <li><strong>Boolean Algebra Manipulations</strong>: Using algebraic rules to simplify expressions</li>
  <li><strong>Karnaugh Maps (K-maps)</strong>: A visual method for simplifying Boolean expressions</li>
  <li><strong>Quine-McCluskey Algorithm</strong>: A systematic method for finding the minimal form of a Boolean function</li>
</ul>

<h4>From Logic to Computation</h4>

<p><strong>Building Memory Elements</strong></p>
<p>Creating circuits that can store information:</p>
<ul>
  <li><strong>SR Latch</strong>: The simplest form of memory, built from cross-coupled NOR or NAND gates</li>
  <li><strong>D Latch and D Flip-Flop</strong>: Storage elements that capture data at specific times</li>
  <li><strong>JK and T Flip-Flops</strong>: More sophisticated memory elements with additional capabilities</li>
</ul>

<p><strong>Constructing Computational Building Blocks</strong></p>
<p>Creating the fundamental components of processors:</p>
<ul>
  <li><strong>Multiplexers and Demultiplexers</strong>: Controlling data flow through selection</li>
  <li><strong>Encoders and Decoders</strong>: Converting between data formats</li>
  <li><strong>Adders and Subtractors</strong>: Performing basic arithmetic operations</li>
  <li><strong>Counters and Registers</strong>: Tracking and storing numerical values</li>
</ul>

<p><strong>From Logic to Programmable Systems</strong></p>
<p>Combining elements to create programmable machines:</p>
<ul>
  <li><strong>Arithmetic Logic Units (ALU)</strong>: Performing mathematical and logical operations</li>
  <li><strong>Control Units</strong>: Coordinating the operation of different system components</li>
  <li><strong>Finite State Machines</strong>: Creating systems with defined states and transitions</li>
  <li><strong>Central Processing Units (CPU)</strong>: The complete computational heart of a computer</li>
</ul>

<h4>Practical Applications</h4>

<p><strong>Physical Implementation Technologies</strong></p>
<p>The evolution of Boolean logic in hardware:</p>
<ul>
  <li><strong>Relay-Based Logic</strong>: Early electromechanical implementations</li>
  <li><strong>Vacuum Tube Computers</strong>: The first electronic digital systems</li>
  <li><strong>Transistor-Based Logic Families</strong>: TTL, CMOS, ECL, and others</li>
  <li><strong>Integrated Circuits</strong>: From SSI to VLSI technology</li>
  <li><strong>Programmable Logic</strong>: PALs, GALs, FPGAs, and CPLDs</li>
</ul>

<p><strong>Real-World Design Considerations</strong></p>
<p>Practical aspects of implementing Boolean logic:</p>
<ul>
  <li><strong>Propagation Delay</strong>: The time required for signals to travel through gates</li>
  <li><strong>Fan-In and Fan-Out</strong>: Limitations on connecting multiple gates</li>
  <li><strong>Noise Margins</strong>: Ensuring reliable operation in the presence of electrical noise</li>
  <li><strong>Power Consumption</strong>: Managing the energy requirements of logic circuits</li>
  <li><strong>Testability</strong>: Designing circuits that can be effectively tested</li>
</ul>

<p>By understanding Boolean logic from first principles, you gain the foundation to build any computational system, from the simplest logic gate to the most complex processor. This knowledge allows you to analyze, design, and optimize digital systems at their most fundamental level.</p>`,
        parentId: 'cs_foundations',
        completed: false
    },
    {
        id: 'information_theory',
        title: 'Information Theory',
        description: 'Study of quantification, storage, and communication of information',
        content: `<h3>Information Theory: Understanding and Measuring Information from First Principles</h3>

<p>Information theory, developed by Claude Shannon in the 1940s, provides a mathematical framework for understanding how information can be quantified, stored, and communicated. Rather than accepting high-level abstractions, this exploration focuses on building a thorough understanding from fundamental principles.</p>

<h4>Quantifying Information</h4>

<p><strong>The Fundamental Unit: Surprise and Uncertainty</strong></p>
<p>Information is fundamentally linked to uncertainty and surprise:</p>
<ul>
  <li><strong>Self-Information</strong>: The amount of surprise associated with a single event, measured as \(I(x) = -\log_2 p(x)\) bits</li>
  <li><strong>Physical Interpretation</strong>: Each bit represents a binary decision or question that halves the uncertainty</li>
  <li><strong>Building Information Measures</strong>: Creating meaningful metrics from basic probability concepts</li>
</ul>

<p><strong>Entropy: Measuring Information Content</strong></p>
<p>Entropy quantifies the average information content or uncertainty in a distribution:</p>
<ul>
  <li><strong>Shannon Entropy</strong>: \(H(X) = -\sum_{x \in X} p(x) \log_2 p(x)\) bits</li>
  <li><strong>Maximum Entropy Principle</strong>: The distribution that maximizes entropy given constraints</li>
  <li><strong>Source Coding Theorem</strong>: The theoretical lower bound on lossless data compression</li>
</ul>

<p><strong>Extensions of Entropy</strong></p>
<p>Building on the basic entropy concept:</p>
<ul>
  <li><strong>Joint Entropy</strong>: Measuring information in multiple random variables together</li>
  <li><strong>Conditional Entropy</strong>: The uncertainty remaining in one variable given another</li>
  <li><strong>Relative Entropy (KL Divergence)</strong>: Measuring the difference between probability distributions</li>
  <li><strong>Mutual Information</strong>: Quantifying the shared information between variables</li>
</ul>

<h4>Information Storage and Representation</h4>

<p><strong>Optimal Coding Theory</strong></p>
<p>Representing information efficiently without loss:</p>
<ul>
  <li><strong>Prefix Codes</strong>: Ensuring unambiguous decoding without delimiters</li>
  <li><strong>Kraft-McMillan Inequality</strong>: The mathematical constraint on efficient code design</li>
  <li><strong>Huffman Coding</strong>: Constructing optimal prefix codes based on symbol probabilities</li>
  <li><strong>Arithmetic Coding</strong>: Approaching the entropy limit through numerical interval subdivision</li>
</ul>

<p><strong>From Theory to Practice: Building Data Structures</strong></p>
<p>Implementing theoretical concepts in actual systems:</p>
<ul>
  <li><strong>Trie Structure Implementation</strong>: Efficient storage and retrieval of variable-length keys</li>
  <li><strong>Suffix Trees and Arrays</strong>: Advanced structures for text processing and search</li>
  <li><strong>Bloom Filters</strong>: Space-efficient probabilistic set membership testing</li>
  <li><strong>Succinct Data Structures</strong>: Representing data using space close to the information-theoretic minimum</li>
</ul>

<h4>Information Transmission</h4>

<p><strong>Channel Capacity and Reliable Communication</strong></p>
<p>Understanding the limits of information transfer:</p>
<ul>
  <li><strong>Channel Models</strong>: Binary Symmetric Channel, Binary Erasure Channel, and Gaussian Channel</li>
  <li><strong>Shannon's Channel Capacity Theorem</strong>: \(C = B \log_2(1 + S/N)\) bits/second</li>
  <li><strong>The Noisy Channel Coding Theorem</strong>: Proving the existence of codes that approach capacity</li>
  <li><strong>Error Detection and Correction</strong>: Hamming distance, parity checks, and beyond</li>
</ul>

<p><strong>Building Error-Correcting Codes</strong></p>
<p>Implementing techniques for reliable communication:</p>
<ul>
  <li><strong>Hamming Codes</strong>: Simple codes that can correct single-bit errors</li>
  <li><strong>Reed-Solomon Codes</strong>: Powerful block codes used in storage and communication</li>
  <li><strong>Convolutional Codes</strong>: Continuous encoding with memory</li>
  <li><strong>Turbo Codes and LDPC</strong>: Modern codes approaching the Shannon limit</li>
  <li><strong>Polar Codes</strong>: The first codes provably achieving channel capacity</li>
</ul>

<h4>Information and Computation</h4>

<p><strong>Kolmogorov Complexity</strong></p>
<p>Quantifying information content through computation:</p>
<ul>
  <li><strong>Algorithmic Information Theory</strong>: Information as program length</li>
  <li><strong>Minimum Description Length</strong>: Balancing model complexity and data fit</li>
  <li><strong>Uncomputability</strong>: The fundamental limits of algorithmic information</li>
  <li><strong>Approximation Methods</strong>: Practical approaches to estimating Kolmogorov complexity</li>
</ul>

<p><strong>Information and Computational Complexity</strong></p>
<p>The relationship between information and computation:</p>
<ul>
  <li><strong>Communication Complexity</strong>: Measuring information exchange needed to solve problems</li>
  <li><strong>Information Complexity</strong>: The information revealed during a computation</li>
  <li><strong>Time-Space Tradeoffs</strong>: Balancing computational resources using information concepts</li>
</ul>

<h4>Information in Physical Systems</h4>

<p><strong>Thermodynamics and Information</strong></p>
<p>The physical embodiment of information:</p>
<ul>
  <li><strong>Maxwell's Demon</strong>: The thought experiment connecting information and entropy</li>
  <li><strong>Landauer's Principle</strong>: The minimum energy cost of erasing information (\(kT\ln 2\) per bit)</li>
  <li><strong>Reversible Computing</strong>: Avoiding the thermodynamic cost of information erasure</li>
  <li><strong>The Physics of Information Processing</strong>: Fundamental limits on computation</li>
</ul>

<p><strong>Quantum Information Theory</strong></p>
<p>Information in quantum systems:</p>
<ul>
  <li><strong>Quantum Bits (Qubits)</strong>: Information units that exist in superposition</li>
  <li><strong>Quantum Entanglement</strong>: Correlation beyond classical probability</li>
  <li><strong>Quantum Shannon Theory</strong>: The capacity of quantum channels</li>
  <li><strong>Quantum Error Correction</strong>: Protecting quantum information from decoherence</li>
</ul>

<h4>Applications in Modern Systems</h4>

<p><strong>Compression Systems</strong></p>
<p>Applied information theory in data reduction:</p>
<ul>
  <li><strong>Lossless Compression</strong>: ZIP, GZIP, LZMA, and other algorithms</li>
  <li><strong>Lossy Compression</strong>: JPEG, MP3, H.265, and perceptual coding</li>
  <li><strong>Compressive Sensing</strong>: Acquiring and reconstructing sparse signals below the Nyquist rate</li>
</ul>

<p><strong>Cryptography and Security</strong></p>
<p>Securing information through theoretical principles:</p>
<ul>
  <li><strong>Perfect Secrecy and One-Time Pads</strong>: Information-theoretic security</li>
  <li><strong>Computational Security</strong>: Practical cryptosystems and their information-theoretic analysis</li>
  <li><strong>Quantum Cryptography</strong>: Security based on the laws of quantum physics</li>
  <li><strong>Steganography and Information Hiding</strong>: Concealing the existence of information</li>
</ul>

<p><strong>Machine Learning and Inference</strong></p>
<p>Information theory in learning systems:</p>
<ul>
  <li><strong>Maximum Entropy Models</strong>: Making minimal assumptions beyond known constraints</li>
  <li><strong>Information Bottleneck Method</strong>: Compressing data while preserving relevant information</li>
  <li><strong>Mutual Information Neural Estimation</strong>: Modern approaches to estimating information measures</li>
  <li><strong>PAC-Bayes Bounds</strong>: Theoretical guarantees on generalization performance</li>
</ul>

<p>By understanding information theory from first principles, you gain deep insights into how information behaves across all computational and communication systems, enabling you to analyze, optimize, and design systems that approach theoretical limits.</p>`,
        parentId: 'cs_foundations',
        completed: false
    },
    {
        id: 'data_representation',
        title: 'Data Representation',
        description: 'How data is encoded and represented in computing systems',
        content: `<h3>Data Representation: Encoding Information from First Principles</h3>

<p>Data representation is the foundation of all computing, defining how information is encoded, stored, and manipulated. This topic explores how to build data representation systems from the most fundamental principles, without relying on pre-existing standards or abstractions.</p>

<h4>Binary Representation Fundamentals</h4>

<p><strong>Physical Foundations of Binary</strong></p>
<p>Understanding how binary is implemented at the physical level:</p>
<ul>
  <li><strong>Voltage Levels</strong>: How electrical signals represent binary values (typically 0V for 0, 3.3V/5V for 1)</li>
  <li><strong>Magnetic Storage</strong>: Polarization direction representing binary on storage media</li>
  <li><strong>Optical Storage</strong>: Pits and lands on optical media representing binary values</li>
  <li><strong>Quantum Bits</strong>: Superposition states in quantum computing extending beyond binary</li>
</ul>

<p><strong>Building Numerical Systems</strong></p>
<p>Constructing different ways to represent numbers:</p>
<ul>
  <li><strong>Positional Number Systems</strong>: Binary, octal, decimal, hexadecimal, and arbitrary bases</li>
  <li><strong>Base Conversion Algorithms</strong>: Efficient methods for converting between number systems</li>
  <li><strong>Non-positional Systems</strong>: Roman numerals, unary, and other historical representations</li>
</ul>

<h4>Integer Representation</h4>

<p><strong>Unsigned Integers</strong></p>
<p>Representing natural numbers and zero:</p>
<ul>
  <li><strong>Direct Binary Mapping</strong>: The simplest form of integer representation</li>
  <li><strong>Range Limitations</strong>: Understanding the bounds for n-bit representations (0 to 2^n-1)</li>
  <li><strong>Arithmetic Operations</strong>: Implementing addition, subtraction, multiplication, and division</li>
  <li><strong>Overflow Handling</strong>: Detecting and managing arithmetic beyond representable ranges</li>
</ul>

<p><strong>Signed Integers</strong></p>
<p>Extending representation to include negative numbers:</p>
<ul>
  <li><strong>Sign-Magnitude Representation</strong>: Dedicating one bit to indicate sign</li>
  <li><strong>One's Complement</strong>: Inverting bits to represent negation</li>
  <li><strong>Two's Complement</strong>: The standard method for modern computers</li>
  <li><strong>Excess Notation</strong>: Offsetting the entire range by a bias value</li>
  <li><strong>Arithmetic Implementations</strong>: How each representation affects computational operations</li>
</ul>

<p><strong>Beyond Standard Integers</strong></p>
<p>Advanced integer representations:</p>
<ul>
  <li><strong>Arbitrary-Precision Integers</strong>: Implementing "BigInt" functionality from scratch</li>
  <li><strong>Residue Number Systems</strong>: Parallel representation based on the Chinese remainder theorem</li>
  <li><strong>Binary-coded Decimal (BCD)</strong>: Representing each decimal digit in binary</li>
</ul>

<h4>Floating-Point Representation</h4>

<p><strong>Building Floating-Point From Scratch</strong></p>
<p>Understanding the components of floating-point numbers:</p>
<ul>
  <li><strong>Scientific Notation in Binary</strong>: Separating significant digits from exponent</li>
  <li><strong>IEEE 754 Standard</strong>: Sign bit, exponent field, and mantissa field</li>
  <li><strong>Special Values</strong>: Representing infinity, NaN, denormalized numbers</li>
  <li><strong>Alternative Formats</strong>: Half-precision, single-precision, double-precision, quad-precision</li>
</ul>

<p><strong>Floating-Point Arithmetic</strong></p>
<p>Implementing operations on floating-point values:</p>
<ul>
  <li><strong>Addition and Subtraction Algorithms</strong>: Aligning exponents and managing precision</li>
  <li><strong>Multiplication and Division</strong>: Operating on mantissas and combining exponents</li>
  <li><strong>Rounding Modes</strong>: Nearest, toward zero, toward infinity, toward negative infinity</li>
  <li><strong>Error Analysis</strong>: Understanding and mitigating accumulated errors</li>
</ul>

<p><strong>Alternative Real Number Representations</strong></p>
<p>Beyond standard floating-point:</p>
<ul>
  <li><strong>Fixed-point Representation</strong>: Allocating fixed bits for integer and fractional parts</li>
  <li><strong>Logarithmic Number Systems</strong>: Representing numbers as logarithms for efficient multiplication</li>
  <li><strong>Posit Numbers</strong>: A modern alternative offering higher accuracy than IEEE floating-point</li>
  <li><strong>Continued Fraction Representation</strong>: Representing real numbers as sequences of integers</li>
</ul>

<h4>Character and Text Representation</h4>

<p><strong>Building Character Encodings</strong></p>
<p>Representing textual information:</p>
<ul>
  <li><strong>ASCII</strong>: The fundamental 7-bit encoding for Latin characters</li>
  <li><strong>Extended ASCII and ISO-8859</strong>: 8-bit extensions for additional characters</li>
  <li><strong>Unicode</strong>: Comprehensive character representation across all writing systems</li>
  <li><strong>UTF Encodings</strong>: UTF-8, UTF-16, UTF-32 implementations and trade-offs</li>
</ul>

<p><strong>Text Processing Fundamentals</strong></p>
<p>Operating on encoded text:</p>
<ul>
  <li><strong>String Operations</strong>: Traversal, comparison, concatenation, and substring extraction</li>
  <li><strong>Normalization Forms</strong>: Canonical and compatibility normalization in Unicode</li>
  <li><strong>Collation</strong>: Culture-specific string comparison and sorting</li>
  <li><strong>Regular Expression Engines</strong>: Building pattern matching from first principles</li>
</ul>

<h4>Structured Data Representation</h4>

<p><strong>Composite Data Types</strong></p>
<p>Building higher-level data structures:</p>
<ul>
  <li><strong>Arrays</strong>: Contiguous memory allocation with constant-time indexing</li>
  <li><strong>Records/Structs</strong>: Named fields with heterogeneous types</li>
  <li><strong>Unions</strong>: Shared memory for alternative interpretations</li>
  <li><strong>Memory Layout Optimization</strong>: Alignment, padding, and packing considerations</li>
</ul>

<p><strong>Data Serialization</strong></p>
<p>Converting structured data to transmissible formats:</p>
<ul>
  <li><strong>Binary Serialization</strong>: Custom formats, Protocol Buffers, MessagePack</li>
  <li><strong>Text-based Formats</strong>: JSON, XML, YAML implementations</li>
  <li><strong>Self-describing Data</strong>: Incorporating metadata in serialized formats</li>
  <li><strong>Versioning Strategies</strong>: Ensuring forward and backward compatibility</li>
</ul>

<h4>Specialized Data Types</h4>

<p><strong>Date and Time Representation</strong></p>
<p>Encoding temporal information:</p>
<ul>
  <li><strong>Epoch-based Time</strong>: Counting intervals from a fixed reference point</li>
  <li><strong>Calendar Systems</strong>: Gregorian, Julian, lunar, and other date representations</li>
  <li><strong>Time Zones and DST</strong>: Handling geographical time differences</li>
  <li><strong>High-precision Timing</strong>: Nanosecond and beyond time measurement</li>
</ul>

<p><strong>Multimedia Representation</strong></p>
<p>Encoding sensory information:</p>
<ul>
  <li><strong>Image Formats</strong>: Raster (bitmap) and vector representations</li>
  <li><strong>Color Spaces</strong>: RGB, CMYK, HSV, CIE Lab, and their conversions</li>
  <li><strong>Audio Encoding</strong>: PCM, frequency domain representations, compression</li>
  <li><strong>Video Representation</strong>: Frame-based and motion compensation approaches</li>
</ul>

<p><strong>Specialized Scientific Data</strong></p>
<p>Representing domain-specific information:</p>
<ul>
  <li><strong>Geographic Information</strong>: Coordinate systems, projections, and spatial indexing</li>
  <li><strong>Scientific Units</strong>: Dimensional analysis and unit conversion systems</li>
  <li><strong>Graph and Network Data</strong>: Adjacency matrices, edge lists, and specialized formats</li>
  <li><strong>Sparse Data Structures</strong>: Compressed formats for data with many default values</li>
</ul>

<h4>Data Integrity and Security</h4>

<p><strong>Error Detection and Correction</strong></p>
<p>Ensuring data accuracy:</p>
<ul>
  <li><strong>Parity Bits</strong>: Simple error detection through bit counting</li>
  <li><strong>Checksums</strong>: Sum-based verification of data integrity</li>
  <li><strong>CRC (Cyclic Redundancy Check)</strong>: Polynomial-based error detection</li>
  <li><strong>ECC (Error-Correcting Codes)</strong>: Hamming, Reed-Solomon, and other correction systems</li>
</ul>

<p><strong>Cryptographic Representation</strong></p>
<p>Securing data through encoding:</p>
<ul>
  <li><strong>Hashing Functions</strong>: MD5, SHA family, and cryptographic properties</li>
  <li><strong>Symmetric Encryption</strong>: AES, Blowfish, and block cipher modes</li>
  <li><strong>Public Key Systems</strong>: RSA, ECC, key formats and encoding</li>
  <li><strong>Digital Signatures</strong>: Combining hashing and asymmetric encryption</li>
</ul>

<p>By understanding data representation from first principles, you gain the ability to design, analyze, and optimize how information is encoded in any computational system, rather than being limited to existing encoding standards and conventions.</p>`,
        parentId: 'cs_foundations',
        completed: false
    },
    {
        id: 'digital_logic',
        title: 'Digital Logic & Gates',
        description: 'Logic gates and digital circuit design',
        content: `<h3>Digital Logic & Gates: Building Computational Systems from Transistors</h3>

<p>Digital logic is the foundation of all computing systems, transforming electrical signals into meaningful computational operations. This exploration focuses on building digital systems from the transistor level up, understanding each component rather than relying on pre-built abstractions.</p>

<h4>Transistor-Level Foundations</h4>

<p><strong>From Electrons to Switches</strong></p>
<p>The physical basis of digital logic:</p>
<ul>
  <li><strong>Semiconductor Physics</strong>: Understanding P-type and N-type materials and their junction behavior</li>
  <li><strong>Bipolar Junction Transistors (BJT)</strong>: Building current-controlled switches</li>
  <li><strong>Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFET)</strong>: Creating voltage-controlled switches</li>
  <li><strong>Transistor Operating Regions</strong>: Cut-off, linear, and saturation regions and their digital significance</li>
</ul>

<p><strong>Building Basic Gates from Transistors</strong></p>
<p>Implementing fundamental logic functions with active devices:</p>
<ul>
  <li><strong>NOT Gate (Inverter)</strong>: Single-transistor implementation with pull-up resistor</li>
  <li><strong>NAND and NOR Gates</strong>: Universal gates that can implement any logic function</li>
  <li><strong>CMOS Implementation</strong>: Complementary pairs of MOSFETs for energy-efficient gates</li>
  <li><strong>Logic Families</strong>: TTL, CMOS, ECL, and their characteristics, advantages, and limitations</li>
</ul>

<h4>Combining Gates into Functional Blocks</h4>

<p><strong>Combinational Logic Circuits</strong></p>
<p>Building blocks that transform inputs to outputs without state:</p>
<ul>
  <li><strong>Boolean Algebra Implementation</strong>: Translating logical expressions into circuit designs</li>
  <li><strong>Sum-of-Products and Product-of-Sums</strong>: Standard forms for logic implementation</li>
  <li><strong>Multiplexers (MUX)</strong>: Building data selectors from basic gates</li>
  <li><strong>Demultiplexers (DEMUX)</strong>: Creating data distributors from logical primitives</li>
  <li><strong>Encoders and Decoders</strong>: Converting between data formats at the circuit level</li>
</ul>

<p><strong>Arithmetic Circuits</strong></p>
<p>Implementing mathematical operations with logical components:</p>
<ul>
  <li><strong>Half Adder</strong>: Building the basic addition circuit from XOR and AND gates</li>
  <li><strong>Full Adder</strong>: Extending to handle carry inputs</li>
  <li><strong>Ripple Carry Adder</strong>: Chaining full adders for multi-bit operation</li>
  <li><strong>Carry-Lookahead Adders</strong>: Optimizing for speed by reducing carry propagation</li>
  <li><strong>Subtractors</strong>: Using complement techniques for binary subtraction</li>
  <li><strong>Multipliers</strong>: Sequential shift-and-add or combinational array multiplication</li>
</ul>

<h4>Sequential Logic: Adding Memory to Circuits</h4>

<p><strong>Building Latches and Flip-Flops</strong></p>
<p>Creating memory elements from feedback circuits:</p>
<ul>
  <li><strong>SR Latch</strong>: The fundamental bistable circuit using cross-coupled NOR or NAND gates</li>
  <li><strong>D Latch</strong>: Eliminating the invalid state of the SR latch</li>
  <li><strong>Edge-Triggered D Flip-Flop</strong>: Controlling state changes with clock transitions</li>
  <li><strong>JK and T Flip-Flops</strong>: Additional functionality with toggle capabilities</li>
  <li><strong>Master-Slave Configuration</strong>: Preventing race conditions in sequential circuits</li>
</ul>

<p><strong>Registers and Counters</strong></p>
<p>Combining flip-flops for data storage and sequencing:</p>
<ul>
  <li><strong>Data Registers</strong>: Parallel storage for multi-bit values</li>
  <li><strong>Shift Registers</strong>: Serial-in/serial-out, parallel-in/serial-out configurations</li>
  <li><strong>Ripple Counters</strong>: Simple cascaded flip-flop counters</li>
  <li><strong>Synchronous Counters</strong>: Clock-coordinated state transitions</li>
  <li><strong>Ring and Johnson Counters</strong>: Specialized sequence generators</li>
</ul>

<h4>Memory Systems</h4>

<p><strong>Static and Dynamic Memory</strong></p>
<p>Building memory arrays from basic storage elements:</p>
<ul>
  <li><strong>SRAM Cell Design</strong>: Six-transistor bistable circuit for static storage</li>
  <li><strong>DRAM Cell Design</strong>: Single-transistor-capacitor storage with refresh requirements</li>
  <li><strong>Memory Addressing</strong>: Row and column decoder implementation</li>
  <li><strong>Sense Amplifiers</strong>: Detecting small voltage differences in memory cells</li>
  <li><strong>Memory Timing</strong>: Controlling read and write operations with precise timing</li>
</ul>

<p><strong>Advanced Memory Architectures</strong></p>
<p>Specialized memory designs for specific needs:</p>
<ul>
  <li><strong>Content-Addressable Memory (CAM)</strong>: Parallel searching by content rather than address</li>
  <li><strong>Multi-Port Memory</strong>: Allowing simultaneous access from multiple sources</li>
  <li><strong>FIFO and LIFO Memories</strong>: Specialized structures for queue and stack operations</li>
  <li><strong>Non-Volatile Memory</strong>: EEPROM, Flash, and emerging technologies for persistent storage</li>
</ul>

<h4>Control Systems and State Machines</h4>

<p><strong>Finite State Machines</strong></p>
<p>Implementing decision-making circuits:</p>
<ul>
  <li><strong>Moore Machines</strong>: Outputs dependent only on current state</li>
  <li><strong>Mealy Machines</strong>: Outputs dependent on both state and inputs</li>
  <li><strong>State Encoding</strong>: Binary, Gray code, one-hot, and other encoding strategies</li>
  <li><strong>State Transition Logic</strong>: Implementing the next-state logic with combinational circuits</li>
  <li><strong>State Minimization</strong>: Optimizing machines for hardware efficiency</li>
</ul>

<p><strong>Control Unit Design</strong></p>
<p>Orchestrating complex digital systems:</p>
<ul>
  <li><strong>Hardwired Control</strong>: Fixed logic for predefined operation sequences</li>
  <li><strong>Microprogrammed Control</strong>: Flexible, ROM-based operation sequencing</li>
  <li><strong>Instruction Decoders</strong>: Translating operation codes into control signals</li>
  <li><strong>Pipeline Control</strong>: Managing overlapped instruction execution</li>
</ul>

<h4>Interfacing with the Physical World</h4>

<p><strong>Signal Conversion</strong></p>
<p>Bridging digital and analog domains:</p>
<ul>
  <li><strong>Digital-to-Analog Converters (DAC)</strong>: Implementing weighted resistor and R-2R ladder networks</li>
  <li><strong>Analog-to-Digital Converters (ADC)</strong>: Successive approximation, flash, and delta-sigma designs</li>
  <li><strong>Sampling Theory</strong>: Nyquist rate and implications for signal conversion</li>
  <li><strong>Signal Conditioning</strong>: Filtering, amplification, and isolation for reliable conversion</li>
</ul>

<p><strong>I/O Interfaces</strong></p>
<p>Connecting digital systems to external devices:</p>
<ul>
  <li><strong>Parallel Interfaces</strong>: Data, address, and control bus implementations</li>
  <li><strong>Serial Protocols</strong>: UART, SPI, I2C circuit-level implementation</li>
  <li><strong>Timing and Synchronization</strong>: Clock recovery, handshaking mechanisms</li>
  <li><strong>Buffers and Transceivers</strong>: Bidirectional signal management and voltage level translation</li>
</ul>

<h4>Advanced Topics in Digital Design</h4>

<p><strong>Timing Analysis and Constraints</strong></p>
<p>Ensuring reliable operation across conditions:</p>
<ul>
  <li><strong>Propagation Delay</strong>: Calculating signal travel time through circuits</li>
  <li><strong>Setup and Hold Times</strong>: Ensuring stable data for sequential elements</li>
  <li><strong>Clock Skew</strong>: Managing clock distribution across complex systems</li>
  <li><strong>Metastability</strong>: Understanding and mitigating synchronization failures</li>
  <li><strong>Critical Path Analysis</strong>: Identifying and optimizing timing bottlenecks</li>
</ul>

<p><strong>Low-Power Design Techniques</strong></p>
<p>Minimizing energy consumption in digital circuits:</p>
<ul>
  <li><strong>Dynamic Power Reduction</strong>: Clock gating, voltage scaling, power domains</li>
  <li><strong>Static Power Management</strong>: Leakage current reduction techniques</li>
  <li><strong>Asynchronous Logic</strong>: Clock-less design for power efficiency</li>
  <li><strong>Sleep Modes</strong>: Implementing various power-saving states</li>
</ul>

<p><strong>Programmable Logic</strong></p>
<p>Flexible hardware implementation platforms:</p>
<ul>
  <li><strong>Programmable Logic Array (PLA)</strong>: AND-OR structure for sum-of-products implementation</li>
  <li><strong>Field-Programmable Gate Array (FPGA)</strong>: Architecture and programming from first principles</li>
  <li><strong>Complex Programmable Logic Device (CPLD)</strong>: Macrocell-based programmable logic</li>
  <li><strong>Hardware Description Languages</strong>: VHDL and Verilog implementation concepts</li>
</ul>

<p>By understanding digital logic from the transistor level up, you gain the ability to design, analyze, and optimize any digital system, from simple gates to complex processors, rather than being limited to existing components and architectures.</p>`,
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'computer_architecture',
        title: 'Computer Architecture',
        description: 'Design and organization of computer systems from first principles',
        content: `<h3>Computer Architecture: Designing Computational Systems from First Principles</h3>

<p>Computer architecture is the blueprint for how computing systems are designed and built. Rather than relying on pre-existing components, this exploration focuses on building computer systems from scratch, understanding each design decision and its implications.</p>

<h4>Fundamental Architectural Decisions</h4>

<p><strong>From Transistors to Computer Organization</strong></p>
<p>Examining the journey from basic components to complete systems:</p>
<ul>
  <li><strong>Transistor-Level Implementation:</strong> How physical devices implement digital logic</li>
  <li><strong>Gate-Level Organization:</strong> Combining logic gates into functional units</li>
  <li><strong>Register Transfer Level (RTL):</strong> Designing data paths between storage elements</li>
  <li><strong>Microarchitecture:</strong> Implementing instruction execution mechanisms</li>
  <li><strong>Instruction Set Architecture (ISA):</strong> Defining the programmer-visible interface</li>
  <li><strong>System Architecture:</strong> Organizing complete computing systems</li>
</ul>

<p><strong>Building from Von Neumann to Modern Architectures</strong></p>
<p>Understanding the evolution of architectural principles:</p>
<ul>
  <li><strong>Von Neumann Architecture:</strong> The foundational stored-program computer design</li>
  <li><strong>Harvard Architecture:</strong> Separating instruction and data paths for improved performance</li>
  <li><strong>Modified Harvard Architectures:</strong> Modern systems that blend both approaches</li>
  <li><strong>Trade-offs:</strong> Understanding when and why to choose different architectural models</li>
</ul>

<h4>Instruction Set Design</h4>

<p><strong>Creating an Instruction Set from Scratch</strong></p>
<p>Designing the fundamental language of the processor:</p>
<ul>
  <li><strong>Instruction Format:</strong> Fixed vs. variable length, fields and encoding</li>
  <li><strong>Addressing Modes:</strong> Methods to specify operand locations</li>
  <li><strong>Operation Types:</strong> Data movement, arithmetic/logic, control flow, system</li>
  <li><strong>CISC vs. RISC Philosophies:</strong> Trade-offs in instruction complexity vs. simplicity</li>
  <li><strong>Minimalist vs. Complete:</strong> Determining the essential instructions needed</li>
</ul>

<p><strong>Implementing Instructions in Hardware</strong></p>
<p>Bridging the gap from ISA to physical circuits:</p>
<ul>
  <li><strong>Instruction Fetch:</strong> Building a program counter and instruction memory interface</li>
  <li><strong>Instruction Decode:</strong> Creating circuitry to interpret and route instruction fields</li>
  <li><strong>Register File Design:</strong> Constructing multi-port memory for high-speed operand access</li>
  <li><strong>Execution Units:</strong> Building arithmetic, logic, and address calculation circuitry</li>
  <li><strong>Control Signal Generation:</strong> Coordinating all components based on instruction type</li>
</ul>

<h4>Processor Implementation</h4>

<p><strong>Single-Cycle Processor Architecture</strong></p>
<p>Building the simplest form of a complete CPU:</p>
<ul>
  <li><strong>Datapath Construction:</strong> Creating the complete pipeline of functional units</li>
  <li><strong>Control Logic:</strong> Generating all necessary control signals from instruction opcode</li>
  <li><strong>Instruction Timing:</strong> Ensuring all operations complete within one clock cycle</li>
  <li><strong>Performance Analysis:</strong> Understanding the limitations of single-cycle execution</li>
</ul>

<p><strong>Multi-Cycle Processor Design</strong></p>
<p>Breaking operations into stages for improved efficiency:</p>
<ul>
  <li><strong>Stage Definition:</strong> Dividing instructions into logical steps</li>
  <li><strong>Resource Sharing:</strong> Reusing hardware components across stages</li>
  <li><strong>State Machine Control:</strong> Building the controller as a finite state machine</li>
  <li><strong>Performance Improvements:</strong> Analyzing cycle time vs. instruction throughput</li>
</ul>

<p><strong>Pipelined Processor Implementation</strong></p>
<p>Overlapping instruction execution for higher throughput:</p>
<ul>
  <li><strong>Pipeline Stage Design:</strong> Creating balanced stages with similar delays</li>
  <li><strong>Pipeline Registers:</strong> Building the storage elements between stages</li>
  <li><strong>Hazard Detection:</strong> Identifying data, control, and structural conflicts</li>
  <li><strong>Forwarding Logic:</strong> Creating paths to resolve data dependencies</li>
  <li><strong>Branch Prediction:</strong> Building mechanisms to handle control flow uncertainty</li>
  <li><strong>Pipeline Control:</strong> Designing the distributed control system for pipelined execution</li>
</ul>

<h4>Memory Hierarchy Design</h4>

<p><strong>Caches from First Principles</strong></p>
<p>Building high-speed memory systems:</p>
<ul>
  <li><strong>Cache Cell Design:</strong> Combining SRAM technology with control logic</li>
  <li><strong>Organization Schemes:</strong> Direct-mapped, set-associative, and fully-associative designs</li>
  <li><strong>Replacement Policies:</strong> Implementing LRU, FIFO, and random replacement</li>
  <li><strong>Write Policies:</strong> Building write-through and write-back mechanisms</li>
  <li><strong>Coherence Protocols:</strong> Ensuring consistency in multi-cache systems</li>
</ul>

<p><strong>Main Memory Systems</strong></p>
<p>Creating larger, cost-effective storage:</p>
<ul>
  <li><strong>DRAM Cell Design:</strong> Understanding the capacitor-based storage mechanism</li>
  <li><strong>Memory Controllers:</strong> Building interfaces to manage DRAM timing and refresh</li>
  <li><strong>Error Detection and Correction:</strong> Implementing parity and ECC</li>
  <li><strong>Interleaving:</strong> Designing systems to improve memory bandwidth</li>
  <li><strong>Physical Address Mapping:</strong> Converting logical addresses to DRAM coordinates</li>
</ul>

<p><strong>Virtual Memory Implementation</strong></p>
<p>Creating the illusion of unlimited memory:</p>
<ul>
  <li><strong>Page Tables:</strong> Building data structures to map virtual to physical addresses</li>
  <li><strong>Translation Lookaside Buffers (TLBs):</strong> Designing specialized caches for translations</li>
  <li><strong>Protection Mechanisms:</strong> Implementing access controls at the page level</li>
  <li><strong>Page Replacement:</strong> Creating algorithms to manage limited physical memory</li>
</ul>

<h4>Advanced Architectural Features</h4>

<p><strong>Superscalar Execution</strong></p>
<p>Executing multiple instructions simultaneously:</p>
<ul>
  <li><strong>Instruction Scheduling:</strong> Dynamically analyzing dependencies</li>
  <li><strong>Multiple Execution Units:</strong> Duplicating functional hardware</li>
  <li><strong>Out-of-Order Execution:</strong> Implementing Tomasulo's algorithm and reorder buffers</li>
  <li><strong>Speculative Execution:</strong> Building systems that predict and execute beyond branches</li>
</ul>

<p><strong>Multiprocessor Systems</strong></p>
<p>Combining multiple processors coherently:</p>
<ul>
  <li><strong>Cache Coherence Protocols:</strong> Implementing MESI or similar systems</li>
  <li><strong>Memory Consistency Models:</strong> Defining rules for memory operation ordering</li>
  <li><strong>Interconnection Networks:</strong> Building communication pathways between processors</li>
  <li><strong>Synchronization Primitives:</strong> Implementing atomic operations and barriers</li>
</ul>

<p><strong>Special-Purpose Architectures</strong></p>
<p>Designing for specific computational domains:</p>
<ul>
  <li><strong>Vector Processors:</strong> Building hardware for efficient array operations</li>
  <li><strong>Graphics Processing Units:</strong> Implementing massively parallel SIMD architectures</li>
  <li><strong>Neural Network Accelerators:</strong> Designing systems optimized for matrix operations</li>
  <li><strong>Domain-Specific Languages:</strong> Creating specialized instruction sets for targeted workloads</li>
</ul>

<p>By understanding computer architecture from first principles, you gain the ability to design and implement computing systems optimized for specific needs, rather than being constrained by existing architectures and their limitations.</p>`,
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'processors_cpu',
        title: 'Processors (CPU)',
        description: 'Central processing units and microprocessors',
        content: 'Central Processing Units (CPUs) are the primary components in computers that execute instructions of computer programs. They perform basic arithmetic, logic, controlling, and input/output operations specified by the instructions in the program.',
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'memory_systems',
        title: 'Memory Systems',
        description: 'Types and hierarchy of computer memory',
        content: 'Memory systems in computers include various types of memory with different characteristics in terms of speed, capacity, and volatility. The memory hierarchy ranges from fast, small cache memory to slower, larger secondary storage.',
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'input_output',
        title: 'I/O Systems',
        description: 'Input/output mechanisms and devices',
        content: 'Input/output (I/O) systems enable the computer to interact with the outside world. These systems manage the flow of data between the CPU and peripheral devices such as keyboards, displays, disks, and network interfaces.',
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'programming_fundamentals',
        title: 'Programming Fundamentals',
        description: 'Core concepts and principles of programming',
        content: 'Programming fundamentals cover the essential concepts that serve as the building blocks for programming languages. This includes variables, data types, control structures, functions, and basic syntax rules that form the foundation of coding.',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'procedural_languages',
        title: 'Procedural Languages',
        description: 'Languages focusing on procedure calls and routines',
        content: 'Procedural programming languages are based on the concept of the procedure call, which contains a series of computational steps to be carried out. Any given procedure can be called at any point during program execution, including by other procedures or itself.',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'object_oriented',
        title: 'Object-Oriented Languages',
        description: 'Languages based on the concept of objects',
        content: 'Object-oriented programming (OOP) languages are based on the concept of "objects," which can contain data and code. The data is in the form of fields (attributes or properties), and the code is in the form of procedures (methods or functions).',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'functional_languages',
        title: 'Functional Languages',
        description: 'Languages treating computation as mathematical functions',
        content: 'Functional programming languages treat computation as the evaluation of mathematical functions and avoid changing state and mutable data. They emphasize the application of functions, in contrast to procedural programming, which emphasizes changes in state.',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'compiler_design',
        title: 'Compiler Design',
        description: 'Translating code from one language to another',
        content: 'Compiler design involves creating programs that translate source code from one programming language into another, usually into machine code that can be executed directly. The process involves lexical analysis, parsing, semantic analysis, optimization, and code generation.',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'kernel',
        title: 'Kernel Architecture',
        description: 'Core of operating systems',
        content: 'The kernel is the central component of an operating system that manages operations of the computer and the hardware - most notably memory and CPU time. It provides the lowest-level abstraction layer for system resources that application software must control to perform functions.',
        parentId: 'systems',
        completed: false
    },
    {
        id: 'process_management',
        title: 'Process Management',
        description: 'Managing execution of processes',
        content: 'Process management involves various tasks like creation, scheduling, termination of processes, and a deadlock. The operating system must allocate resources to processes, enable processes to share and exchange information, and protect resources from inappropriate use.',
        parentId: 'systems',
        completed: false
    },
    {
        id: 'memory_management',
        title: 'Memory Management',
        description: 'Controlling and coordinating computer memory',
        content: 'Memory management is the functionality of an operating system which handles or manages primary memory. It keeps track of each and every memory location, whether it is allocated to some process or free. It also determines how much memory to allocate to processes and when to reclaim memory when processes no longer need it.',
        parentId: 'systems',
        completed: false
    },
    {
        id: 'file_systems',
        title: 'File Systems',
        description: 'Organization of stored data',
        content: 'File systems specify the way that files are named, stored, organized, and accessed on storage devices. They define formats for file names, directory structures, access control, and metadata. Examples include FAT, NTFS, ext4, and HFS+.',
        parentId: 'systems',
        completed: false
    },
    {
        id: 'network_protocols',
        title: 'Network Protocols',
        description: 'Rules for network communication',
        content: 'Network protocols are established rules that dictate how data is transmitted between different devices on the same network. They define the format, timing, sequencing, and error control of data transmission, allowing different types of devices to communicate with each other.',
        parentId: 'networks',
        completed: false
    },
    {
        id: 'network_architecture',
        title: 'Network Architecture',
        description: 'Structure and design of computer networks',
        content: 'Network architecture refers to the overall design of a computer network, including both physical and logical aspects. It defines the arrangement of resources, services, and connectivity to ensure efficient communication between network components.',
        parentId: 'networks',
        completed: false
    },
    {
        id: 'internet_protocols',
        title: 'Internet Protocols',
        description: 'Protocols specific to the Internet',
        content: 'Internet protocols are a set of rules that govern the communication and exchange of data over the Internet. The most fundamental are TCP/IP (Transmission Control Protocol/Internet Protocol) which form the basis for data communication on the Internet.',
        parentId: 'networks',
        completed: false
    },
    {
        id: 'wireless_networking',
        title: 'Wireless Networking',
        description: 'Networks without physical connections',
        content: 'Wireless networking enables devices to communicate without physical cable connections. It uses radio waves, microwaves, or infrared signals to transmit data. Common wireless technologies include Wi-Fi, Bluetooth, cellular networks, and satellite communication.',
        parentId: 'networks',
        completed: false
    },
    {
        id: 'sorting_algorithms',
        title: 'Sorting Algorithms',
        description: 'Methods to arrange data in a specific order',
        content: 'Sorting algorithms are methods to rearrange data items in a specific order, usually ascending or descending. Common sorting algorithms include bubble sort, insertion sort, selection sort, merge sort, quicksort, and heapsort, each with different time and space complexity characteristics.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'search_algorithms',
        title: 'Search Algorithms',
        description: 'Algorithms to find data within a structure',
        content: 'Search algorithms are designed to check for an element or retrieve an element from a data structure. Examples include linear search, binary search, depth-first search, breadth-first search, and various specialized algorithms optimized for specific data structures.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'graph_algorithms',
        title: 'Graph Algorithms',
        description: 'Algorithms for working with graphs',
        content: 'Graph algorithms are designed to solve problems related to graph structures. They include algorithms for traversal (DFS, BFS), shortest path finding (Dijkstra\'s, Bellman-Ford), minimum spanning tree (Prim\'s, Kruskal\'s), and many others for specific graph-related problems.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'dynamic_programming',
        title: 'Dynamic Programming',
        description: 'Optimization by breaking down into simpler subproblems',
        content: 'Dynamic Programming is both a mathematical optimization method and a computer programming method that simplifies complex problems by breaking them down into simpler overlapping subproblems. It is applicable to problems that exhibit optimal substructure and overlapping subproblems.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'arrays_and_strings',
        title: 'Arrays and Strings',
        description: 'Fundamental data structures for storing sequential data',
        content: 'Arrays and strings are fundamental data structures for storing collections of elements. Arrays store elements of the same type in contiguous memory locations, while strings are specialized arrays typically used to store character sequences with specific operations for text manipulation.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'linked_lists',
        title: 'Linked Lists',
        description: 'Linear data structures with nodes connected by pointers',
        content: 'Linked lists are linear data structures where elements are stored in nodes, and each node contains a reference to the next node in the sequence. Variations include singly linked lists, doubly linked lists, and circular linked lists, each with different characteristics and use cases.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'stacks_and_queues',
        title: 'Stacks and Queues',
        description: 'Abstract data types with specific access patterns',
        content: 'Stacks and queues are abstract data types with specific access patterns. Stacks follow Last-In-First-Out (LIFO) order, while queues follow First-In-First-Out (FIFO) order. They are used for managing temporary data in algorithms and system processes.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'trees',
        title: 'Trees',
        description: 'Hierarchical data structures with nodes and edges',
        content: 'Trees are hierarchical data structures consisting of nodes connected by edges, with one node designated as the root. Common tree types include binary trees, binary search trees, AVL trees, red-black trees, B-trees, and tries, each optimized for specific operations and use cases.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'hash_tables',
        title: 'Hash Tables',
        description: 'Data structures that map keys to values',
        content: 'Hash tables are data structures that implement an associative array, mapping keys to values using a hash function. They provide average-case constant time complexity for insertions, deletions, and lookups. Collision resolution techniques include chaining and open addressing.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'heaps',
        title: 'Heaps',
        description: 'Specialized tree structures',
        content: 'Heaps are specialized tree-based data structures that satisfy the heap property. In a max heap, the parent node's key is greater than or equal to its children's keys; in a min heap, the parent's key is less than or equal to its children's. Heaps are commonly used to implement priority queues.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'graphs',
        title: 'Graphs',
        description: 'Collections of nodes connected by edges',
        content: 'Graphs are collections of nodes (vertices) connected by edges. They can be directed or undirected, weighted or unweighted, and cyclic or acyclic. Graph representations include adjacency matrices, adjacency lists, and edge lists. Graphs are used to model many types of relations and processes.',
        parentId: 'algorithms',
        completed: false
    },
    {
        id: 'relational_databases',
        title: 'Relational Databases',
        description: 'Databases based on the relational model',
        content: 'Relational databases organize data into tables with rows and columns, using the relational model. They employ SQL (Structured Query Language) for data manipulation and querying. Key concepts include primary and foreign keys, normalization, transactions, and ACID properties.',
        parentId: 'databases',
        completed: false
    },
    {
        id: 'nosql_databases',
        title: 'NoSQL Databases',
        description: 'Non-relational database technologies',
        content: 'NoSQL databases provide storage and retrieval mechanisms with fewer constraints than traditional relational databases. They are designed for distributed data stores with large-scale data needs. Types include document stores, key-value stores, wide-column stores, and graph databases.',
        parentId: 'databases',
        completed: false
    },
    {
        id: 'database_design',
        title: 'Database Design',
        description: 'Principles for organizing database systems',
        content: 'Database design is the process of creating a structured data model to support database applications. It involves defining entities, relationships, attributes, and constraints. Good database design ensures data integrity, minimizes redundancy, and optimizes performance.',
        parentId: 'databases',
        completed: false
    },
    {
        id: 'query_optimization',
        title: 'Query Optimization',
        description: 'Improving database query performance',
        content: 'Query optimization is the process of choosing the most efficient way to execute a database query. It involves analyzing query execution plans, indexing strategies, join methods, and other techniques to minimize resource usage and response time, particularly for complex queries on large datasets.',
        parentId: 'databases',
        completed: false
    },
    {
        id: 'data_warehousing',
        title: 'Data Warehousing',
        description: 'Large-scale data storage for analysis',
        content: 'Data warehousing involves consolidating data from multiple sources into a central repository for reporting and analysis. Data warehouses are optimized for query performance rather than transaction processing, employing dimensional modeling, ETL processes, and analytical tools.',
        parentId: 'databases',
        completed: false
    },
    {
        id: 'database_transactions',
        title: 'Database Transactions',
        description: 'Atomic operations in databases',
        content: 'Database transactions are units of work performed within a database management system that are treated as a single, indivisible operation. They adhere to ACID properties—Atomicity, Consistency, Isolation, and Durability—to ensure reliable database operations even in cases of system failures.',
        parentId: 'databases',
        completed: false
    },
    {
        id: 'cryptography',
        title: 'Cryptography',
        description: 'Secure communication and data protection',
        content: 'Cryptography is the practice of secure communication in the presence of adversaries. It involves creating and analyzing protocols that prevent unauthorized access to information. Modern cryptography includes symmetric and asymmetric encryption, hash functions, digital signatures, and cryptographic protocols.',
        parentId: 'security',
        completed: false
    },
    {
        id: 'network_security',
        title: 'Network Security',
        description: 'Protection of network infrastructure',
        content: 'Network security consists of policies and practices to prevent and monitor unauthorized access, misuse, modification, or denial of network resources. It includes firewalls, intrusion detection/prevention systems, VPNs, access controls, and network monitoring to protect against various threats.',
        parentId: 'security',
        completed: false
    },
    {
        id: 'web_security',
        title: 'Web Security',
        description: 'Security specific to web applications',
        content: 'Web security focuses on protecting websites and web applications from security threats. It addresses vulnerabilities like cross-site scripting (XSS), SQL injection, cross-site request forgery (CSRF), broken authentication, and other risks outlined in the OWASP Top Ten.',
        parentId: 'security',
        completed: false
    },
    {
        id: 'malware_analysis',
        title: 'Malware Analysis',
        description: 'Study of malicious software',
        content: 'Malware analysis is the process of studying the components and behavior of malicious software to understand its functionality, origin, and potential impact. It involves static analysis (examining the code without execution) and dynamic analysis (observing runtime behavior in a controlled environment).',
        parentId: 'security',
        completed: false
    },
    {
        id: 'security_policies',
        title: 'Security Policies',
        description: 'Guidelines for information security',
        content: 'Security policies are formal statements of rules and guidelines that users must follow to ensure the protection of information assets. They cover areas such as acceptable use, access control, incident response, disaster recovery, and compliance with legal and regulatory requirements.',
        parentId: 'security',
        completed: false
    },
    {
        id: 'neural_networks',
        title: 'Neural Networks',
        description: 'Computing systems inspired by biological neural networks',
        content: 'Neural networks are computational models inspired by the human brain. They consist of interconnected nodes (neurons) organized in layers that can learn patterns from data. Types include feedforward, convolutional, recurrent, and deep neural networks, each suited for different problem domains.',
        parentId: 'ai_ml',
        completed: false
    },
    {
        id: 'supervised_learning',
        title: 'Supervised Learning',
        description: 'Learning from labeled training data',
        content: 'Supervised learning is a machine learning approach where algorithms learn to map input data to target output values using a labeled training dataset. The model is "supervised" by being shown the correct answers during training. Common techniques include regression, classification, and ensemble methods.',
        parentId: 'ai_ml',
        completed: false
    },
    {
        id: 'unsupervised_learning',
        title: 'Unsupervised Learning',
        description: 'Learning from unlabeled data',
        content: 'Unsupervised learning involves training models on data without labeled responses. The algorithm learns patterns and structures without explicit guidance. Primary tasks include clustering, dimensionality reduction, anomaly detection, and association rule learning.',
        parentId: 'ai_ml',
        completed: false
    },
    {
        id: 'reinforcement_learning',
        title: 'Reinforcement Learning',
        description: 'Learning through interaction with an environment',
        content: 'Reinforcement learning is a type of machine learning where agents learn to make decisions by taking actions in an environment to maximize cumulative rewards. It involves a trial-and-error approach, where the agent learns from the consequences of its actions rather than from explicit training examples.',
        parentId: 'ai_ml',
        completed: false
    },
    {
        id: 'natural_language_processing',
        title: 'Natural Language Processing',
        description: 'AI for human language understanding',
        content: 'Natural Language Processing (NLP) combines linguistics and computer science to enable computers to understand, interpret, and generate human language. Applications include speech recognition, machine translation, sentiment analysis, text classification, question answering, and conversational AI.',
        parentId: 'ai_ml',
        completed: false
    },
    {
        id: 'computer_vision',
        title: 'Computer Vision',
        description: 'AI for visual information understanding',
        content: 'Computer vision enables machines to gain high-level understanding from digital images or videos. It includes tasks like image classification, object detection, segmentation, tracking, and scene reconstruction. Modern approaches primarily use deep learning techniques, especially convolutional neural networks.',
        parentId: 'ai_ml',
        completed: false
    },
    {
        id: 'automata_theory',
        title: 'Automata Theory',
        description: 'Study of abstract machines and problems',
        content: 'Automata theory is the study of abstract machines and the problems they can solve. It deals with finite automata, pushdown automata, and Turing machines, which are mathematical models of computation. It provides the theoretical foundation for compilers, programming languages, and computability.',
        parentId: 'theory',
        completed: false
    },
    {
        id: 'computability_theory',
        title: 'Computability Theory',
        description: 'What problems can be solved algorithmically',
        content: 'Computability theory explores which problems can be solved algorithmically. It establishes the concept of undecidability, showing that some problems cannot be solved by any algorithm. Key concepts include Turing machines, the halting problem, reductions, and recursive and recursively enumerable sets.',
        parentId: 'theory',
        completed: false
    },
    {
        id: 'computational_complexity',
        title: 'Computational Complexity',
        description: 'Resources required by algorithms',
        content: 'Computational complexity theory classifies computational problems according to their resource usage (time, space). It establishes complexity classes like P, NP, NP-complete, and PSPACE, and studies relationships between them. The P vs. NP problem is a central open question in the field.',
        parentId: 'theory',
        completed: false
    },
    {
        id: 'formal_languages',
        title: 'Formal Languages',
        description: 'Mathematically defined languages',
        content: 'Formal languages are sets of strings of symbols that follow specific formation rules. They are studied in computer science and linguistics. The Chomsky hierarchy classifies formal languages into four types based on their grammar: regular, context-free, context-sensitive, and recursively enumerable.',
        parentId: 'theory',
        completed: false
    },
    {
        id: 'software_development_lifecycle',
        title: 'Software Development Lifecycle',
        description: 'Phases in software development',
        content: 'The Software Development Lifecycle (SDLC) is a process for planning, creating, testing, and deploying software. Common models include Waterfall, Agile, Spiral, and DevOps. Each phase (requirements, design, implementation, testing, deployment, maintenance) has specific deliverables and activities.',
        parentId: 'software_eng',
        completed: false
    },
    {
        id: 'design_patterns',
        title: 'Design Patterns',
        description: 'Reusable solutions to common problems',
        content: 'Design patterns are reusable solutions to common problems in software design. They represent best practices evolved over time. Categories include creational patterns (object creation), structural patterns (object composition), and behavioral patterns (object interaction and responsibility distribution).',
        parentId: 'software_eng',
        completed: false
    },
    {
        id: 'software_testing',
        title: 'Software Testing',
        description: 'Verifying that software meets requirements',
        content: 'Software testing is the process of evaluating a system to verify that it satisfies specified requirements and detect defects. It includes various levels (unit, integration, system, acceptance) and types (functional, non-functional, regression, security) of testing, along with test design techniques and automation.',
        parentId: 'software_eng',
        completed: false
    },
    {
        id: 'software_architecture',
        title: 'Software Architecture',
        description: 'High-level structure of software systems',
        content: 'Software architecture refers to the high-level structure of a software system, the discipline of creating such structures, and the documentation of these structures. It encompasses design decisions, architectural styles (e.g., microservices, layered, event-driven), and quality attributes (scalability, security, performance).',
        parentId: 'software_eng',
        completed: false
    },
    {
        id: 'version_control',
        title: 'Version Control',
        description: 'Tracking and managing changes to software code',
        content: 'Version control systems track and manage changes to source code and other files. They enable multiple developers to work concurrently, maintain history, facilitate branching and merging, and support rollback capabilities. Popular systems include Git, Subversion (SVN), and Mercurial.',
        parentId: 'software_eng',
        completed: false
    },
    {
        id: 'os_roadmap',
        title: 'Operating System',
        description: 'Build your own operating system from scratch',
        content: `<h3>Building an Operating System from First Principles</h3>

<p>This roadmap guides you through creating your own operating system, starting from the bare metal and avoiding high-level abstractions. By following this path, you'll understand not just how operating systems work, but how to build one yourself from the most fundamental components.</p>

<h4>1. Bare Metal Programming</h4>
<ul>
  <li><strong>Assembly Language Fundamentals</strong> - Learn processor-specific assembly language (x86, ARM, RISC-V)</li>
  <li><strong>Bootloader Creation</strong> - Write a simple bootloader to initialize hardware and load your kernel</li>
  <li><strong>Memory Management Units</strong> - Understand physical memory layout and setup</li>
  <li><strong>Interrupt Handling</strong> - Implement low-level interrupt service routines</li>
</ul>

<h4>2. Kernel Development</h4>
<ul>
  <li><strong>Protected Mode Implementation</strong> - Switch from real mode to protected mode (x86) or equivalent</li>
  <li><strong>Memory Segmentation</strong> - Set up memory segments and descriptors</li>
  <li><strong>Virtual Memory</strong> - Implement paging structures and page fault handling</li>
  <li><strong>Kernel Space vs. User Space</strong> - Establish separation between privileged and unprivileged code</li>
</ul>

<h4>3. Process Management</h4>
<ul>
  <li><strong>Process Structure</strong> - Define process control blocks and manage process states</li>
  <li><strong>Context Switching</strong> - Implement saving and restoring CPU context</li>
  <li><strong>Scheduling Algorithms</strong> - Build various schedulers (round-robin, priority-based, etc.)</li>
  <li><strong>System Calls</strong> - Create the interface between user programs and kernel services</li>
</ul>

<h4>4. Memory Management</h4>
<ul>
  <li><strong>Physical Memory Allocator</strong> - Implement frame allocation strategies</li>
  <li><strong>Virtual Memory Manager</strong> - Create page tables and translation mechanisms</li>
  <li><strong>Heap Management</strong> - Build malloc/free implementations</li>
  <li><strong>Memory Protection</strong> - Enforce memory access controls</li>
</ul>

<h4>5. File Systems</h4>
<ul>
  <li><strong>Disk I/O</strong> - Write drivers for disk access</li>
  <li><strong>File System Structure</strong> - Design on-disk formats (inodes, directory entries, etc.)</li>
  <li><strong>File Operations</strong> - Implement open, read, write, close functionality</li>
  <li><strong>Buffer Cache</strong> - Create caching mechanisms for file system performance</li>
</ul>

<h4>6. Device Drivers</h4>
<ul>
  <li><strong>Driver Framework</strong> - Build a driver model and abstraction layer</li>
  <li><strong>Character Devices</strong> - Implement console, keyboard drivers</li>
  <li><strong>Block Devices</strong> - Create disk and storage drivers</li>
  <li><strong>Network Devices</strong> - Develop network interface card drivers</li>
</ul>

<h4>7. Inter-process Communication</h4>
<ul>
  <li><strong>Signals</strong> - Implement asynchronous notification mechanisms</li>
  <li><strong>Pipes</strong> - Create unidirectional communication channels</li>
  <li><strong>Shared Memory</strong> - Enable processes to access common memory regions</li>
  <li><strong>Message Queues</strong> - Build message passing infrastructure</li>
</ul>

<h4>8. Synchronization Primitives</h4>
<ul>
  <li><strong>Atomic Operations</strong> - Implement hardware-supported atomic instructions</li>
  <li><strong>Spinlocks</strong> - Create busy-waiting synchronization mechanisms</li>
  <li><strong>Semaphores</strong> - Build counting and binary semaphores</li>
  <li><strong>Mutexes</strong> - Implement mutual exclusion primitives</li>
  <li><strong>Condition Variables</strong> - Enable threads to wait for conditions</li>
</ul>

<h4>9. Networking Stack</h4>
<ul>
  <li><strong>Network Protocols</strong> - Implement Ethernet, IP, TCP, UDP from scratch</li>
  <li><strong>Socket API</strong> - Create POSIX-like socket interface</li>
  <li><strong>Network File Systems</strong> - Build remote file access capabilities</li>
</ul>

<h4>10. System Security</h4>
<ul>
  <li><strong>Access Control</strong> - Implement permission models</li>
  <li><strong>User Authentication</strong> - Create user identification mechanisms</li>
  <li><strong>Capability Systems</strong> - Build privilege management</li>
  <li><strong>Security Isolation</strong> - Implement process and resource isolation</li>
</ul>

<p>By building these components from scratch, you'll gain a deep understanding of how modern operating systems work at the most fundamental level. This knowledge allows you to innovate beyond existing paradigms and potentially create more efficient, secure operating systems for specific domains.</p>`,
        parentId: null,
        completed: false
    },
    {
        id: 'compiler_roadmap',
        title: 'Compiler',
        description: 'Build your own compiler from scratch',
        content: `<h3>Building a Compiler from First Principles</h3>

<p>This roadmap guides you through creating your own compiler, starting from fundamental components and avoiding high-level libraries or parser generators. By following this path, you'll understand not just how compilers work, but how to build one yourself from the most basic building blocks.</p>

<h4>1. Lexical Analysis</h4>
<ul>
  <li><strong>Character Stream Processing</strong> - Implement direct stream reading without lexer generators</li>
  <li><strong>Token Classification</strong> - Build recognition systems for identifiers, literals, and operators</li>
  <li><strong>Regular Language Implementation</strong> - Create finite automata for pattern matching</li>
  <li><strong>Lexer State Management</strong> - Design state transitions for complex token recognition</li>
</ul>

<h4>2. Syntax Analysis</h4>
<ul>
  <li><strong>Grammar Representation</strong> - Define formal grammar and production rules</li>
  <li><strong>Recursive Descent Parsing</strong> - Implement top-down parsing without generator tools</li>
  <li><strong>Shift-Reduce Parsing</strong> - Build bottom-up parsers like LR(0), SLR, LALR</li>
  <li><strong>Abstract Syntax Tree Construction</strong> - Create data structures to represent program structure</li>
</ul>

<h4>3. Semantic Analysis</h4>
<ul>
  <li><strong>Symbol Table Design</strong> - Implement scope-aware symbol management</li>
  <li><strong>Type System Construction</strong> - Build type checking and inference mechanisms</li>
  <li><strong>Static Analysis</strong> - Create systems to detect potential runtime errors</li>
  <li><strong>Semantic Error Handling</strong> - Design meaningful error reporting</li>
</ul>

<h4>4. Intermediate Representation</h4>
<ul>
  <li><strong>IR Design</strong> - Create an instruction format that balances abstraction and low-level details</li>
  <li><strong>Three-Address Code</strong> - Implement a representation with at most three operands per instruction</li>
  <li><strong>Static Single Assignment</strong> - Build an IR where each variable is assigned exactly once</li>
  <li><strong>Control Flow Graph</strong> - Construct graph representations of program flow</li>
</ul>

<h4>5. Code Optimization</h4>
<ul>
  <li><strong>Local Optimizations</strong> - Implement basic block optimizations</li>
  <li><strong>Global Optimizations</strong> - Build data flow analysis frameworks</li>
  <li><strong>Loop Optimizations</strong> - Create transformation techniques for loops</li>
  <li><strong>Instruction Scheduling</strong> - Implement dependency-aware instruction ordering</li>
</ul>

<h4>6. Code Generation</h4>
<ul>
  <li><strong>Instruction Selection</strong> - Match IR to target architecture instructions</li>
  <li><strong>Register Allocation</strong> - Build graph coloring or linear scan allocators</li>
  <li><strong>Calling Conventions</strong> - Implement function call mechanisms</li>
  <li><strong>Binary Format Generation</strong> - Create executable output in appropriate formats</li>
</ul>

<h4>7. Runtime System</h4>
<ul>
  <li><strong>Memory Management</strong> - Implement stack and heap allocation</li>
  <li><strong>Garbage Collection</strong> - Build mark-sweep, reference counting, or generational collectors</li>
  <li><strong>Exception Handling</strong> - Create stack unwinding mechanisms</li>
  <li><strong>Runtime Type Information</strong> - Implement dynamic type checking</li>
</ul>

<h4>8. Advanced Compiler Features</h4>
<ul>
  <li><strong>Function Inlining</strong> - Build heuristic-based inlining decision systems</li>
  <li><strong>Constant Propagation</strong> - Implement compile-time evaluation</li>
  <li><strong>Dead Code Elimination</strong> - Create reachability analysis</li>
  <li><strong>Tail Call Optimization</strong> - Implement recursive call optimization</li>
</ul>

<h4>9. Target-Specific Optimizations</h4>
<ul>
  <li><strong>Instruction Pipelining</strong> - Optimize for processor pipeline characteristics</li>
  <li><strong>SIMD Vectorization</strong> - Implement parallel instruction generation</li>
  <li><strong>Branch Prediction Hints</strong> - Add architecture-specific branch optimization</li>
  <li><strong>Cache Optimizations</strong> - Create memory access patterns for better cache usage</li>
</ul>

<h4>10. Compiler Testing and Validation</h4>
<ul>
  <li><strong>Test Suite Design</strong> - Build comprehensive test cases</li>
  <li><strong>Correctness Verification</strong> - Implement output validation</li>
  <li><strong>Performance Benchmarking</strong> - Create measurement frameworks</li>
  <li><strong>Compiler Bootstrapping</strong> - Use your compiler to compile itself</li>
</ul>

<p>By building these components from scratch, you'll gain a deep understanding of how modern compilers transform high-level code into machine instructions. This knowledge will enable you to design new programming languages, create specialized compilers for specific domains, and optimize code generation for maximum performance.</p>`,
        parentId: null,
        completed: false
    },
    {
        id: 'ai_roadmap',
        title: 'AI System',
        description: 'Build your own AI system from scratch',
        content: `<h3>Building an AI System from First Principles</h3>

<p>This roadmap guides you through creating your own AI system, starting from mathematical foundations and avoiding high-level frameworks. By following this path, you'll understand not just how AI works, but how to build intelligently learning systems from the most fundamental components.</p>

<h4>1. Mathematical Foundations</h4>
<ul>
  <li><strong>Linear Algebra Implementation</strong> - Build vector, matrix operations from scratch</li>
  <li><strong>Calculus Primitives</strong> - Implement gradient calculation and differentiation</li>
  <li><strong>Probability Theory</strong> - Create distributions and sampling mechanisms</li>
  <li><strong>Information Theory</strong> - Implement entropy and mutual information calculations</li>
</ul>

<h4>2. Optimization Algorithms</h4>
<ul>
  <li><strong>Gradient Descent</strong> - Implement basic, stochastic, and mini-batch variants</li>
  <li><strong>Conjugate Gradient Methods</strong> - Build momentum-based optimization</li>
  <li><strong>Newton Methods</strong> - Create second-order optimization techniques</li>
  <li><strong>Evolutionary Algorithms</strong> - Implement genetic algorithms, evolution strategies</li>
</ul>

<h4>3. Neural Network Fundamentals</h4>
<ul>
  <li><strong>Neuron Models</strong> - Build perceptrons and activation functions</li>
  <li><strong>Backpropagation</strong> - Implement the chain rule for neural networks</li>
  <li><strong>Weight Initialization</strong> - Create various initialization strategies</li>
  <li><strong>Regularization Techniques</strong> - Build dropout, weight decay, batch normalization</li>
</ul>

<h4>4. Neural Network Architectures</h4>
<ul>
  <li><strong>Feedforward Networks</strong> - Implement multi-layer perceptrons</li>
  <li><strong>Convolutional Networks</strong> - Build convolution, pooling operations</li>
  <li><strong>Recurrent Networks</strong> - Create RNN, LSTM, GRU cells</li>
  <li><strong>Attention Mechanisms</strong> - Implement self-attention and transformers</li>
</ul>

<h4>5. Unsupervised Learning</h4>
<ul>
  <li><strong>Clustering Algorithms</strong> - Build K-means, hierarchical clustering</li>
  <li><strong>Dimensionality Reduction</strong> - Implement PCA, t-SNE, UMAP</li>
  <li><strong>Autoencoders</strong> - Create various autoencoder architectures</li>
  <li><strong>Generative Models</strong> - Build VAEs, GANs from first principles</li>
</ul>

<h4>6. Reinforcement Learning</h4>
<ul>
  <li><strong>Value Functions</strong> - Implement Q-learning, SARSA</li>
  <li><strong>Policy Gradients</strong> - Build REINFORCE, Actor-Critic methods</li>
  <li><strong>Model-Based RL</strong> - Create environment models and planning algorithms</li>
  <li><strong>Multi-Agent Systems</strong> - Implement competitive and cooperative RL</li>
</ul>

<h4>7. Natural Language Processing</h4>
<ul>
  <li><strong>Text Processing</strong> - Build tokenization, stemming, lemmatization</li>
  <li><strong>Word Embeddings</strong> - Implement Word2Vec, GloVe from scratch</li>
  <li><strong>Language Models</strong> - Create N-gram and neural language models</li>
  <li><strong>Sequence-to-Sequence Models</strong> - Build translation and summarization systems</li>
</ul>

<h4>8. Computer Vision</h4>
<ul>
  <li><strong>Image Processing</strong> - Implement filters, edge detection, feature extraction</li>
  <li><strong>Object Detection</strong> - Build region proposal and single-shot detectors</li>
  <li><strong>Image Segmentation</strong> - Create semantic and instance segmentation</li>
  <li><strong>Image Generation</strong> - Implement style transfer and image synthesis</li>
</ul>

<h4>9. Probabilistic Models</h4>
<ul>
  <li><strong>Bayesian Networks</strong> - Build directed graphical models</li>
  <li><strong>Markov Models</strong> - Implement HMMs and Markov Random Fields</li>
  <li><strong>Probabilistic Programming</strong> - Create inference engines for Bayesian methods</li>
  <li><strong>Gaussian Processes</strong> - Build non-parametric regression models</li>
</ul>

<h4>10. AI System Integration</h4>
<ul>
  <li><strong>Data Pipeline Construction</strong> - Implement efficient data loading and processing</li>
  <li><strong>Distributed Training</strong> - Build parameter server or all-reduce implementations</li>
  <li><strong>Model Deployment</strong> - Create inference servers and optimization techniques</li>
  <li><strong>Monitoring and Maintenance</strong> - Implement drift detection and continual learning</li>
</ul>

<p>By building these components from scratch, you'll gain a deep understanding of how modern AI systems learn and make decisions. This knowledge will enable you to design new learning algorithms, create specialized AI for specific domains, and potentially advance the field beyond current limitations.</p>`,
        parentId: null,
        completed: false
    },
    {
        id: 'network_roadmap',
        title: 'Computer Network',
        description: 'Build your own computer network from scratch',
        content: `<h3>Building a Computer Network from First Principles</h3>

<p>This roadmap guides you through creating your own computer network, starting from physical transmission and avoiding pre-built protocols. By following this path, you'll understand not just how networks work, but how to build communication systems from the most fundamental components.</p>

<h4>1. Physical Layer Fundamentals</h4>
<ul>
  <li><strong>Signal Encoding</strong> - Implement baseband and passband modulation techniques</li>
  <li><strong>Transmission Media</strong> - Build wired (copper, fiber) and wireless transmission</li>
  <li><strong>Error Detection</strong> - Create parity bits, checksums, CRC implementations</li>
  <li><strong>Line Coding</strong> - Implement NRZ, Manchester, and other coding schemes</li>
</ul>

<h4>2. Data Link Layer</h4>
<ul>
  <li><strong>Framing</strong> - Build character and bit-oriented framing mechanisms</li>
  <li><strong>Flow Control</strong> - Implement stop-and-wait, sliding window protocols</li>
  <li><strong>Error Control</strong> - Create ARQ protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)</li>
  <li><strong>Medium Access Control</strong> - Build CSMA/CD, CSMA/CA, token passing</li>
</ul>

<h4>3. Network Layer</h4>
<ul>
  <li><strong>Addressing</strong> - Implement hierarchical addressing schemes</li>
  <li><strong>Routing Algorithms</strong> - Build distance vector and link state protocols</li>
  <li><strong>Packet Forwarding</strong> - Create longest prefix matching algorithms</li>
  <li><strong>Fragmentation/Reassembly</strong> - Implement packet segmentation and reconstruction</li>
</ul>

<h4>4. Transport Layer</h4>
<ul>
  <li><strong>Connection Management</strong> - Build three-way handshake mechanisms</li>
  <li><strong>Reliable Transfer</strong> - Implement acknowledgment and retransmission</li>
  <li><strong>Flow Control</strong> - Create window-based flow regulation</li>
  <li><strong>Congestion Control</strong> - Build AIMD and other congestion management algorithms</li>
</ul>

<h4>5. Application Layer Protocols</h4>
<ul>
  <li><strong>Client-Server Model</strong> - Implement request-response patterns</li>
  <li><strong>Domain Name System</strong> - Build name resolution from scratch</li>
  <li><strong>File Transfer Protocol</strong> - Create reliable file transmission</li>
  <li><strong>Email Protocols</strong> - Implement message transfer and access protocols</li>
</ul>

<h4>6. Network Security</h4>
<ul>
  <li><strong>Encryption</strong> - Build symmetric and asymmetric encryption systems</li>
  <li><strong>Authentication</strong> - Implement challenge-response mechanisms</li>
  <li><strong>Digital Signatures</strong> - Create message signing and verification</li>
  <li><strong>Public Key Infrastructure</strong> - Build certificate management systems</li>
</ul>

<h4>7. Advanced Routing</h4>
<ul>
  <li><strong>Autonomous Systems</strong> - Implement inter-domain routing</li>
  <li><strong>Policy-Based Routing</strong> - Create path selection based on policies</li>
  <li><strong>Multicast Routing</strong> - Build group communication mechanisms</li>
  <li><strong>Quality of Service</strong> - Implement traffic classification and prioritization</li>
</ul>

<h4>8. Network Management</h4>
<ul>
  <li><strong>Performance Monitoring</strong> - Build traffic measurement systems</li>
  <li><strong>Configuration Management</strong> - Create network device configuration protocols</li>
  <li><strong>Fault Management</strong> - Implement failure detection and recovery</li>
  <li><strong>Security Management</strong> - Build access control and threat detection</li>
</ul>

<h4>9. Wireless Networking</h4>
<ul>
  <li><strong>Wireless MAC Protocols</strong> - Implement collision avoidance for shared medium</li>
  <li><strong>Mobility Management</strong> - Build handover mechanisms</li>
  <li><strong>Power Management</strong> - Create energy-efficient protocols</li>
  <li><strong>Wireless Security</strong> - Implement encryption and authentication for wireless</li>
</ul>

<h4>10. Software-Defined Networking</h4>
<ul>
  <li><strong>Control Plane Design</strong> - Build centralized network controllers</li>
  <li><strong>Data Plane Programming</strong> - Implement programmable forwarding engines</li>
  <li><strong>Network Function Virtualization</strong> - Create virtualized network services</li>
  <li><strong>Intent-Based Networking</strong> - Build declarative network configuration systems</li>
</ul>

<p>By building these components from scratch, you'll gain a deep understanding of how modern networks enable communication between devices. This knowledge will allow you to design specialized networks for specific applications, optimize performance for different requirements, and potentially develop next-generation networking technologies.</p>`,
        parentId: null,
        completed: false
    },
    {
        id: 'database_roadmap',
        title: 'Database System',
        description: 'Build your own database system from scratch',
        content: `<h3>Building a Database System from First Principles</h3>

<p>This roadmap guides you through creating your own database management system, starting from basic storage structures and avoiding pre-built database libraries. By following this path, you'll understand not just how databases work, but how to build efficient data storage and retrieval systems from the most fundamental components.</p>

<h4>1. Storage Engine Fundamentals</h4>
<ul>
  <li><strong>Disk I/O Management</strong> - Implement efficient reading and writing to persistent storage</li>
  <li><strong>Page Structure</strong> - Design fixed-size storage units for data and indexes</li>
  <li><strong>Buffer Pool Management</strong> - Build caching mechanism for disk pages in memory</li>
  <li><strong>Record Organization</strong> - Create fixed and variable-length record storage</li>
</ul>

<h4>2. File Structures</h4>
<ul>
  <li><strong>Sequential Files</strong> - Implement ordered data file organization</li>
  <li><strong>Heap Files</strong> - Build unordered collection of records</li>
  <li><strong>Hash-Based Files</strong> - Create direct-access file structures</li>
  <li><strong>Log-Structured Storage</strong> - Implement append-only storage design</li>
</ul>

<h4>3. Indexing Structures</h4>
<ul>
  <li><strong>B-Tree Implementation</strong> - Build balanced search trees for disk access</li>
  <li><strong>B+ Tree Variations</strong> - Create leaf-linked trees for range queries</li>
  <li><strong>Hash Indexes</strong> - Implement static and dynamic hashing schemes</li>
  <li><strong>Multi-dimensional Indexes</strong> - Build R-trees, quad trees for spatial data</li>
</ul>

<h4>4. Query Processing</h4>
<ul>
  <li><strong>Parser Implementation</strong> - Build SQL syntax analyzer</li>
  <li><strong>Query Plan Representation</strong> - Create algebraic operator trees</li>
  <li><strong>Execution Engine</strong> - Implement plan interpretation and execution</li>
  <li><strong>Result Management</strong> - Build result set handling and client communication</li>
</ul>

<h4>5. Query Optimization</h4>
<ul>
  <li><strong>Statistics Collection</strong> - Implement data distribution tracking</li>
  <li><strong>Cost Estimation</strong> - Build I/O and CPU models for query execution</li>
  <li><strong>Join Algorithms</strong> - Create nested loop, merge, and hash join implementations</li>
  <li><strong>Plan Enumeration</strong> - Implement dynamic programming or genetic algorithm approaches</li>
</ul>

<h4>6. Transaction Management</h4>
<ul>
  <li><strong>Concurrency Control</strong> - Build locking, timestamp, and multi-version protocols</li>
  <li><strong>Recovery System</strong> - Implement WAL (Write-Ahead Logging) and checkpointing</li>
  <li><strong>Isolation Levels</strong> - Create different consistency guarantees</li>
  <li><strong>Deadlock Handling</strong> - Build detection and prevention mechanisms</li>
</ul>

<h4>7. Distributed Database Concepts</h4>
<ul>
  <li><strong>Data Partitioning</strong> - Implement horizontal and vertical sharding</li>
  <li><strong>Distributed Query Processing</strong> - Build query execution across nodes</li>
  <li><strong>Distributed Transactions</strong> - Create two-phase commit protocol</li>
  <li><strong>Replication Strategies</strong> - Implement master-slave and multi-master replication</li>
</ul>

<h4>8. Storage Optimizations</h4>
<ul>
  <li><strong>Compression Techniques</strong> - Build dictionary, delta, and run-length encoding</li>
  <li><strong>Columnar Storage</strong> - Implement column-oriented organization</li>
  <li><strong>Materialized Views</strong> - Create automatic view maintenance</li>
  <li><strong>Partitioning Schemes</strong> - Build range, hash, and composite partitioning</li>
</ul>

<h4>9. Advanced Database Features</h4>
<ul>
  <li><strong>Full-Text Search</strong> - Implement inverted indexes and relevance scoring</li>
  <li><strong>Time-Series Optimization</strong> - Build specialized storage for temporal data</li>
  <li><strong>Graph Operations</strong> - Create adjacency list representations and traversal algorithms</li>
  <li><strong>JSON/Document Storage</strong> - Implement schemaless data organization</li>
</ul>

<h4>10. Database Security and Administration</h4>
<ul>
  <li><strong>Access Control</strong> - Build role-based permission systems</li>
  <li><strong>Encryption Layer</strong> - Implement transparent data encryption</li>
  <li><strong>Auditing System</strong> - Create comprehensive activity logging</li>
  <li><strong>Backup and Restore</strong> - Build consistent backup mechanisms</li>
</ul>

<p>By building these components from scratch, you'll gain a deep understanding of how modern databases store, retrieve, and manage data. This knowledge will enable you to design specialized database systems for specific workloads, optimize performance for different access patterns, and potentially develop new database paradigms.</p>`,
        parentId: null,
        completed: false
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
        topic.content.toLowerCase().includes(query)
    );
}