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
    {
        id: 'theory_computation',
        title: 'Theory of Computation',
        description: 'Theoretical foundations of computer science',
        content: 'The theory of computation is the branch of computer science that deals with how problems can be solved using algorithms. It explores what can and cannot be computed, and with what resources (like time and memory). This field provides the theoretical underpinnings for practical computer science and is essential for understanding computational limits and possibilities.',
        parentId: null
    },
    {
        id: 'software_engineering',
        title: 'Software Engineering',
        description: 'Principles and practices of software development',
        content: 'Software engineering is the systematic application of engineering approaches to the development of software. It encompasses methodologies, tools, and practices for designing, developing, testing, and maintaining complex software systems. Software engineering focuses on creating reliable, efficient, maintainable, and scalable software solutions to real-world problems.',
        parentId: null
    },

    // Topics under CS Foundations
    {
        id: 'boolean_logic',
        title: 'Boolean Logic',
        description: 'The foundation of digital circuit design and computer operations',
        content: `<h3>Boolean Logic: The Mathematical Foundation of Computing</h3>
        
<p>Boolean logic, developed by mathematician George Boole in the mid-19th century, is a form of mathematical logic that serves as the theoretical foundation for all digital circuits and computer operations. Unlike traditional algebra that deals with continuous numerical values, Boolean algebra operates on binary variables that can have only two possible states: true/false, 1/0, on/off, or high/low.</p>

<h4>Historical Context</h4>
<p>George Boole published "An Investigation of the Laws of Thought" in 1854, establishing a formal system of logical reasoning. Nearly a century later, Claude Shannon demonstrated how Boolean algebra could be applied to electronic circuits in his 1938 MIT master's thesis, establishing the theoretical foundation for digital circuit design and modern computing.</p>

<h4>Fundamental Boolean Operations</h4>
<p>The core operations in Boolean logic are:</p>
<ul>
  <li><strong>NOT (¬):</strong> Negation or inversion. If x is true, then NOT x is false, and vice versa.</li>
  <li><strong>AND (∧):</strong> Conjunction. AND returns true only when both inputs are true.</li>
  <li><strong>OR (∨):</strong> Disjunction. OR returns true if at least one input is true.</li>
  <li><strong>XOR (⊕):</strong> Exclusive OR. XOR returns true if exactly one input is true (but not both).</li>
</ul>

<h4>Truth Tables</h4>
<p>Truth tables exhaustively list all possible combinations of input values and their corresponding outputs for a Boolean function. For example:</p>

<p><strong>AND Operation:</strong></p>
<table border="1" style="border-collapse: collapse; width: 50%;">
  <tr><th>Input A</th><th>Input B</th><th>A AND B</th></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
</table>

<p><strong>OR Operation:</strong></p>
<table border="1" style="border-collapse: collapse; width: 50%;">
  <tr><th>Input A</th><th>Input B</th><th>A OR B</th></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
</table>

<p><strong>NOT Operation:</strong></p>
<table border="1" style="border-collapse: collapse; width: 50%;">
  <tr><th>Input A</th><th>NOT A</th></tr>
  <tr><td>0</td><td>1</td></tr>
  <tr><td>1</td><td>0</td></tr>
</table>

<p><strong>XOR Operation:</strong></p>
<table border="1" style="border-collapse: collapse; width: 50%;">
  <tr><th>Input A</th><th>Input B</th><th>A XOR B</th></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>1</td><td>1</td><td>0</td></tr>
</table>

<h4>Boolean Laws and Properties</h4>
<p>Boolean algebra follows several laws and properties that enable simplification of complex expressions:</p>

<ul>
  <li><strong>Commutative Laws:</strong> A ∧ B = B ∧ A and A ∨ B = B ∨ A</li>
  <li><strong>Associative Laws:</strong> (A ∧ B) ∧ C = A ∧ (B ∧ C) and (A ∨ B) ∨ C = A ∨ (B ∨ C)</li>
  <li><strong>Distributive Laws:</strong> A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C) and A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C)</li>
  <li><strong>Identity Laws:</strong> A ∧ 1 = A and A ∨ 0 = A</li>
  <li><strong>Negation Laws:</strong> A ∧ ¬A = 0 and A ∨ ¬A = 1</li>
  <li><strong>Idempotent Laws:</strong> A ∧ A = A and A ∨ A = A</li>
  <li><strong>Absorption Laws:</strong> A ∧ (A ∨ B) = A and A ∨ (A ∧ B) = A</li>
  <li><strong>De Morgan's Laws:</strong> ¬(A ∧ B) = ¬A ∨ ¬B and ¬(A ∨ B) = ¬A ∧ ¬B</li>
</ul>

<h4>Boolean Expression Simplification</h4>
<p>Complex Boolean expressions can be simplified using:</p>
<ul>
  <li><strong>Algebraic Manipulation:</strong> Applying Boolean laws to rewrite expressions in simpler forms</li>
  <li><strong>Karnaugh Maps (K-maps):</strong> A graphical method for simplifying Boolean expressions by identifying adjacent terms</li>
  <li><strong>Quine-McCluskey Algorithm:</strong> A tabular method for minimizing Boolean functions, more systematic than K-maps for complex expressions</li>
  <li><strong>Espresso Algorithm:</strong> A more advanced computational method for complex expressions with many variables</li>
</ul>

<h4>Logic Gates</h4>
<p>Logic gates are the physical implementations of Boolean operations in electronic circuits:</p>
<ul>
  <li><strong>NOT Gate (Inverter):</strong> Implements the NOT operation</li>
  <li><strong>AND Gate:</strong> Implements the AND operation</li>
  <li><strong>OR Gate:</strong> Implements the OR operation</li>
  <li><strong>XOR Gate:</strong> Implements the XOR operation</li>
  <li><strong>NAND Gate:</strong> Combination of AND followed by NOT (A ∧ B)</li>
  <li><strong>NOR Gate:</strong> Combination of OR followed by NOT (A ∨ B)</li>
  <li><strong>XNOR Gate:</strong> Combination of XOR followed by NOT (A ⊕ B)</li>
</ul>

<p>NAND and NOR gates are considered "universal" gates because any Boolean function can be implemented using only NAND gates or only NOR gates.</p>

<h4>Practical Applications</h4>
<p>Boolean logic has numerous applications in computing:</p>
<ul>
  <li><strong>Digital Circuit Design:</strong> All digital circuits are designed using Boolean logic principles</li>
  <li><strong>Computer Arithmetic:</strong> Binary addition, subtraction, multiplication, and division are implemented using Boolean operations</li>
  <li><strong>Memory Systems:</strong> Storage cells use logic gates to maintain and modify states</li>
  <li><strong>Conditional Processing:</strong> If-then-else structures in programming are Boolean operations</li>
  <li><strong>Database Queries:</strong> SQL WHERE clauses use Boolean expressions to filter data</li>
  <li><strong>Search Engines:</strong> Boolean operators refine search results (AND, OR, NOT)</li>
  <li><strong>Hardware Security:</strong> Cryptographic systems rely heavily on Boolean operations</li>
</ul>

<h4>Boolean Logic in Modern Computing</h4>
<p>Though transistors have replaced vacuum tubes and relays, the Boolean logic principles governing their operation remain unchanged. Every calculation performed by modern computers, from simple addition to complex neural network operations, ultimately reduces to sequences of Boolean operations executed by logic gates at the hardware level.</p>

<h4>Advanced Concepts</h4>
<p><strong>Multi-valued Logic:</strong> Extensions of Boolean logic that use more than two truth values, such as fuzzy logic, which allows for degrees of truth between 0 and 1, or ternary logic with true, false, and unknown states.</p>

<p><strong>Quantum Logic:</strong> In quantum computing, quantum bits (qubits) can exist in superpositions of states, requiring a different mathematical framework that extends Boolean logic.</p>`,
        parentId: 'foundations',
        completed: false
    },
    {
        id: 'information_theory',
        title: 'Information Theory',
        description: 'Quantifying information and its transmission',
        content: `<h3>Information Theory: The Science of Quantifying and Communicating Information</h3>

<p>Information theory is a mathematical framework for quantifying, storing, and communicating information. Pioneered by Claude Shannon in 1948 with his landmark paper "A Mathematical Theory of Communication," this field serves as the theoretical foundation for modern digital communications, data compression, cryptography, and many aspects of computer science.</p>

<h4>Historical Development</h4>
<p>Claude Shannon, often called "the father of information theory," developed the field while working at Bell Labs. His groundbreaking work addressed fundamental problems in efficiently transmitting information through noisy communication channels. Shannon's contributions established the theoretical limits of data compression and reliable communication, concepts that underpin virtually all modern digital systems.</p>

<h4>Fundamental Concepts</h4>

<p><strong>Information and Entropy</strong></p>
<p>Shannon defined information in terms of uncertainty. The more uncertain or unpredictable a message is, the more information it contains when received. This led to the concept of entropy, which quantifies the amount of information or uncertainty in a random variable.</p>

<p>For a discrete random variable X with possible values {x₁, x₂, ..., xₙ} and probability mass function P(X), the entropy H(X) is defined as:</p>

<p style="text-align:center;">H(X) = -∑P(xᵢ) log₂ P(xᵢ)</p>

<p>Where:</p>
<ul>
  <li>H(X) is measured in bits when using log base 2</li>
  <li>P(xᵢ) is the probability of occurrence of value xᵢ</li>
</ul>

<p>Key properties of entropy:</p>
<ul>
  <li>Entropy is maximum when all outcomes are equally likely</li>
  <li>Entropy is minimum (zero) when the outcome is certain</li>
  <li>For a fair coin toss (p = 0.5 for heads, p = 0.5 for tails), H(X) = 1 bit</li>
  <li>For a biased coin (e.g., p = 0.9 for heads, p = 0.1 for tails), H(X) < 1 bit</li>
</ul>

<p><strong>Channel Capacity</strong></p>
<p>Channel capacity represents the maximum rate at which information can be reliably transmitted over a communication channel with an arbitrarily small error probability. For a discrete memoryless channel, the capacity C is given by:</p>

<p style="text-align:center;">C = max[I(X;Y)]</p>

<p>Where I(X;Y) is the mutual information between input X and output Y, representing the reduction in uncertainty about X given knowledge of Y.</p>

<p>Shannon's noisy-channel coding theorem established that:</p>
<ul>
  <li>If the information rate is less than the channel capacity, data can be transmitted with arbitrarily small error probability</li>
  <li>If the information rate exceeds the channel capacity, reliable transmission is impossible regardless of the coding scheme</li>
</ul>

<p><strong>Source Coding and Data Compression</strong></p>
<p>Source coding addresses how to efficiently represent information with minimal redundancy. Shannon's source coding theorem establishes the theoretical limits of lossless data compression.</p>

<p>For a source with entropy H(X), the theorem states:</p>
<ul>
  <li>It is impossible to compress data losslessly below H(X) bits per symbol on average</li>
  <li>It is possible to compress data to approximately H(X) bits per symbol with negligible information loss</li>
</ul>

<p>Common source coding techniques include:</p>
<ul>
  <li><strong>Huffman Coding:</strong> A variable-length prefix code that assigns shorter codes to more frequent symbols</li>
  <li><strong>Arithmetic Coding:</strong> Encodes entire messages into a single number, approaching the theoretical entropy limit</li>
  <li><strong>Lempel-Ziv Algorithms (LZ77, LZ78, LZW):</strong> Dictionary-based methods that form the basis for many compression formats (ZIP, GIF, PNG)</li>
  <li><strong>Run-Length Encoding:</strong> Replaces sequences of identical symbols with a count and the symbol</li>
</ul>

<h4>Information Theory in Computing</h4>

<p><strong>Data Compression</strong></p>
<p>Information theory establishes the theoretical limits for data compression:</p>
<ul>
  <li><strong>Lossless Compression:</strong> Reconstructs the original data exactly (ZIP, PNG, FLAC)</li>
  <li><strong>Lossy Compression:</strong> Removes less perceptually important information to achieve higher compression ratios (JPEG, MP3, MP4)</li>
</ul>

<p><strong>Error Detection and Correction</strong></p>
<p>Information theory underpins techniques for reliable communication:</p>
<ul>
  <li><strong>Parity Bits:</strong> Simple error detection by adding bits to ensure even or odd parity</li>
  <li><strong>Checksum:</strong> Mathematical summaries that detect data corruption</li>
  <li><strong>Cyclic Redundancy Check (CRC):</strong> Polynomial division-based error detection used in networks and storage</li>
  <li><strong>Hamming Codes:</strong> Allow detection and correction of single-bit errors</li>
  <li><strong>Reed-Solomon Codes:</strong> Block codes used in CDs, DVDs, QR codes, and deep-space communications</li>
  <li><strong>Low-Density Parity-Check (LDPC) Codes:</strong> High-performance codes used in 5G, Wi-Fi, and satellite communications</li>
  <li><strong>Turbo Codes:</strong> Parallel concatenated codes that approach Shannon's theoretical limit</li>
</ul>

<p><strong>Cryptography</strong></p>
<p>Information theory provides frameworks for understanding:</p>
<ul>
  <li><strong>Perfect Secrecy:</strong> Shannon's concept requiring that ciphertext reveals no information about the plaintext</li>
  <li><strong>One-Time Pad:</strong> The only provably secure encryption method, requiring a random key as long as the message</li>
  <li><strong>Information-Theoretic Security:</strong> Security guarantees that don't depend on computational hardness assumptions</li>
</ul>

<h4>Applications in Other Fields</h4>

<p><strong>Machine Learning and AI</strong></p>
<ul>
  <li><strong>Maximum Entropy Models:</strong> Statistical models that make minimal assumptions beyond observed data</li>
  <li><strong>Information Gain:</strong> Used in decision tree algorithms to select optimal splitting features</li>
  <li><strong>Mutual Information:</strong> Measures relationships between variables in feature selection</li>
  <li><strong>Cross-Entropy:</strong> Common loss function in neural networks</li>
</ul>

<p><strong>Quantum Information Theory</strong></p>
<ul>
  <li><strong>Quantum Entropy:</strong> Generalizes classical entropy for quantum systems</li>
  <li><strong>Quantum Channels:</strong> Models information transmission through quantum systems</li>
  <li><strong>Quantum Error Correction:</strong> Protects quantum information from decoherence</li>
</ul>

<p><strong>Biology and Genetics</strong></p>
<ul>
  <li><strong>DNA Sequence Analysis:</strong> Information theory helps analyze genetic code and mutations</li>
  <li><strong>Neural Coding:</strong> Quantifies how neurons encode and transmit information</li>
  <li><strong>Biological Network Analysis:</strong> Measures information flow in cellular and ecological networks</li>
</ul>

<h4>Advanced Concepts</h4>

<p><strong>Kolmogorov Complexity</strong></p>
<p>Kolmogorov complexity measures the computational resources needed to specify an object. It's defined as the length of the shortest computer program that produces the object as output. This concept provides a different perspective on information content, focusing on algorithmic complexity rather than statistical properties.</p>

<p><strong>Algorithmic Information Theory</strong></p>
<p>Extends information theory to incorporate computational aspects, establishing connections between information theory, computability theory, and statistical inference.</p>

<p><strong>Network Information Theory</strong></p>
<p>Extends Shannon's theory to multi-terminal communication systems, addressing problems like multiple access channels, broadcast channels, and relay networks.</p>

<h4>Contemporary Significance</h4>
<p>Information theory remains fundamental to the digital age, providing the theoretical foundation for:</p>
<ul>
  <li>The internet and all digital communications</li>
  <li>Data storage and compression technologies</li>
  <li>Modern cryptographic systems</li>
  <li>Aspects of artificial intelligence and machine learning</li>
  <li>Quantum computing and communications</li>
</ul>

<p>Shannon's insights about quantifying, transmitting, and securing information have proven remarkably durable and continue to guide advances in computing, communications, and beyond.</p>`,
        parentId: 'foundations',
        completed: false
    },
    {
        id: 'data_representation',
        title: 'Data Representation',
        description: 'How computers store and represent different types of data',
        content: `<h3>Data Representation: How Computers Encode and Store Information</h3>

<p>Data representation refers to the methods computers use to encode, store, and manipulate various types of information. Understanding these representations is fundamental to computer science, as they form the foundation for how computers process and store all information.</p>

<h4>Number Systems</h4>

<p><strong>Binary (Base-2)</strong></p>
<p>The binary number system uses only two symbols (0 and 1) and forms the foundation of all digital computing. Each binary digit (bit) represents a power of 2.</p>

<p>For example, the binary number 10110 represents:</p>
<p style="text-align:center;">1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰ = 16 + 0 + 4 + 2 + 0 = 22 in decimal</p>

<p><strong>Octal (Base-8) and Hexadecimal (Base-16)</strong></p>
<p>These number systems are commonly used as shorthand for binary:</p>
<ul>
  <li><strong>Octal:</strong> Uses digits 0-7, where each octal digit represents 3 bits</li>
  <li><strong>Hexadecimal:</strong> Uses digits 0-9 and letters A-F (representing values 10-15), where each hex digit represents 4 bits</li>
</ul>

<p>Conversion example:</p>
<p>Binary: 1010 1101</p>
<p>Hexadecimal: AD (A = 1010, D = 1101)</p>
<p>Decimal: 173</p>

<h4>Integer Representation</h4>

<p><strong>Unsigned Integers</strong></p>
<p>Unsigned integers represent non-negative whole numbers. For n-bit representation, values range from 0 to 2ⁿ-1.</p>

<p><strong>Signed Integers</strong></p>
<p>Several methods exist for representing positive and negative integers:</p>

<ul>
  <li><strong>Sign-Magnitude:</strong> The most significant bit indicates sign (0 for positive, 1 for negative), and remaining bits represent magnitude. This representation has two zeros (+0 and -0).</li>
  
  <li><strong>One's Complement:</strong> Negative numbers are represented by inverting all bits of the positive number. Still has two representations of zero.</li>
  
  <li><strong>Two's Complement:</strong> The most common method in modern computers. To find the negative of a number:
    <ol>
      <li>Invert all bits (one's complement)</li>
      <li>Add 1 to the result</li>
    </ol>
    
    <p>For an n-bit representation, values range from -2^(n-1) to 2^(n-1)-1.</p>
    
    <p>Example with 8 bits:</p>
    <p>+43 = 00101011</p>
    <p>-43 = 11010101 (invert) + 1 = 11010101 + 1 = 11010110</p>
  </li>
</ul>

<h4>Floating-Point Representation</h4>

<p>Floating-point representation allows computers to represent real numbers (including fractions and very large or small numbers). The IEEE 754 standard defines the most commonly used formats.</p>

<p><strong>Components of IEEE 754 Format</strong></p>
<ul>
  <li><strong>Sign bit:</strong> 0 for positive, 1 for negative</li>
  <li><strong>Exponent:</strong> Stored with a bias to represent both positive and negative exponents</li>
  <li><strong>Mantissa (Fraction):</strong> Represents the significant digits of the number</li>
</ul>

<p><strong>Single Precision (32-bit)</strong></p>
<ul>
  <li>1 bit for sign</li>
  <li>8 bits for exponent (bias of 127)</li>
  <li>23 bits for mantissa (with implied leading 1)</li>
</ul>

<p><strong>Double Precision (64-bit)</strong></p>
<ul>
  <li>1 bit for sign</li>
  <li>11 bits for exponent (bias of 1023)</li>
  <li>52 bits for mantissa (with implied leading 1)</li>
</ul>

<p>A floating-point number is represented as:</p>
<p style="text-align:center;">(-1)ˢ × 1.mantissa × 2^(exponent-bias)</p>

<p><strong>Special Values</strong></p>
<ul>
  <li><strong>Zero:</strong> Exponent and mantissa all zeros</li>
  <li><strong>Infinity:</strong> Exponent all ones, mantissa all zeros</li>
  <li><strong>NaN (Not a Number):</strong> Exponent all ones, non-zero mantissa</li>
  <li><strong>Denormalized Numbers:</strong> For very small numbers near zero</li>
</ul>

<p><strong>Limitations</strong></p>
<ul>
  <li><strong>Precision:</strong> Limited number of significant digits</li>
  <li><strong>Range:</strong> Limited by exponent bits</li>
  <li><strong>Rounding Errors:</strong> Some decimal numbers cannot be exactly represented in binary</li>
  <li><strong>Catastrophic Cancellation:</strong> Subtracting nearly equal numbers can lose significant digits</li>
</ul>

<h4>Character Encoding</h4>

<p><strong>ASCII (American Standard Code for Information Interchange)</strong></p>
<p>An early 7-bit encoding standard representing 128 characters:</p>
<ul>
  <li>0-31: Control characters (non-printable)</li>
  <li>32-126: Printable characters (letters, digits, punctuation)</li>
  <li>127: DEL character</li>
</ul>

<p><strong>Extended ASCII</strong></p>
<p>8-bit extensions to ASCII that use the additional 128 code points (128-255) for accented characters, graphic symbols, and other characters specific to various languages and systems.</p>

<p><strong>Unicode and UTF Encodings</strong></p>
<p>Unicode provides a unique number for every character, regardless of platform, program, or language. Key Unicode encodings include:</p>

<ul>
  <li><strong>UTF-8:</strong> Variable-width encoding (1-4 bytes) that is backward compatible with ASCII. The most common encoding on the web.</li>
  <li><strong>UTF-16:</strong> Variable-width encoding (2 or 4 bytes) used in Windows, Java, and JavaScript.</li>
  <li><strong>UTF-32:</strong> Fixed-width encoding (4 bytes) that directly represents Unicode code points.</li>
</ul>

<h4>Multimedia Data Representation</h4>

<p><strong>Image Representation</strong></p>
<ul>
  <li><strong>Bitmap (Raster) Images:</strong> Represented as a grid of pixels, each with color information
    <ul>
      <li><strong>RGB:</strong> Each pixel represented by red, green, and blue intensity values</li>
      <li><strong>RGBA:</strong> RGB with an additional alpha channel for transparency</li>
      <li><strong>Grayscale:</strong> Each pixel represented by a single intensity value</li>
      <li><strong>Indexed Color:</strong> Pixels reference entries in a color palette</li>
    </ul>
  </li>
  <li><strong>Vector Images:</strong> Represented as mathematical formulas describing shapes and paths</li>
</ul>

<p><strong>Audio Representation</strong></p>
<ul>
  <li><strong>Pulse Code Modulation (PCM):</strong> Raw audio represented by sampling the amplitude of the sound wave at regular intervals
    <ul>
      <li><strong>Sample Rate:</strong> Number of samples per second (e.g., 44.1 kHz for CD quality)</li>
      <li><strong>Bit Depth:</strong> Number of bits per sample (e.g., 16-bit for CD quality)</li>
      <li><strong>Channels:</strong> Mono (1 channel), stereo (2 channels), or more for surround sound</li>
    </ul>
  </li>
</ul>

<p><strong>Video Representation</strong></p>
<ul>
  <li>Sequence of image frames with timing information</li>
  <li>Often includes synchronized audio</li>
  <li>Key parameters:
    <ul>
      <li><strong>Resolution:</strong> Frame dimensions in pixels (e.g., 1920×1080)</li>
      <li><strong>Frame Rate:</strong> Frames per second (e.g., 24, 30, 60 fps)</li>
      <li><strong>Bit Depth:</strong> Color depth per pixel</li>
      <li><strong>Chroma Subsampling:</strong> Technique to reduce color information (e.g., 4:2:0, 4:2:2)</li>
    </ul>
  </li>
</ul>

<h4>Data Compression</h4>

<p><strong>Lossless Compression</strong></p>
<p>Reduces data size while preserving all original information:</p>
<ul>
  <li><strong>Run-Length Encoding (RLE):</strong> Replaces sequences of identical values with a count and value</li>
  <li><strong>Dictionary Coding:</strong> Replaces repeated sequences with references to a dictionary (e.g., LZ77, LZ78, LZW)</li>
  <li><strong>Huffman Coding:</strong> Assigns variable-length codes based on frequency</li>
  <li><strong>Arithmetic Coding:</strong> Encodes entire messages as a single number</li>
  <li><strong>Common Formats:</strong> ZIP, GZIP, PNG, FLAC</li>
</ul>

<p><strong>Lossy Compression</strong></p>
<p>Achieves higher compression ratios by discarding less perceptually important information:</p>
<ul>
  <li><strong>Transform Coding:</strong> Converts data to a frequency domain and discards less significant components (e.g., DCT in JPEG)</li>
  <li><strong>Psychoacoustic Modeling:</strong> Removes sounds that humans can't perceive (MP3)</li>
  <li><strong>Motion Compensation:</strong> Stores only differences between video frames</li>
  <li><strong>Common Formats:</strong> JPEG, MP3, MP4, WebP</li>
</ul>

<h4>Error Detection and Correction</h4>

<p><strong>Parity Bit</strong></p>
<p>A simple error detection method that adds an extra bit to ensure the number of 1s is even (even parity) or odd (odd parity). Can detect single-bit errors but not their location.</p>

<p><strong>Checksum</strong></p>
<p>A value computed from a block of data to detect errors. Simple checksums add all bytes and use the result for verification.</p>

<p><strong>Cyclic Redundancy Check (CRC)</strong></p>
<p>A more sophisticated error-detection code based on polynomial division, widely used in networking and storage.</p>

<p><strong>Error Correction Codes</strong></p>
<ul>
  <li><strong>Hamming Codes:</strong> Can detect and correct single-bit errors</li>
  <li><strong>Reed-Solomon Codes:</strong> Can correct multiple errors, used in CDs, DVDs, QR codes</li>
  <li><strong>LDPC and Turbo Codes:</strong> Advanced codes used in modern communications</li>
</ul>

<h4>Practical Implications</h4>

<p><strong>Data Type Sizes and Ranges</strong></p>
<p>Common data type sizes in programming languages:</p>
<ul>
  <li><strong>Byte/Char:</strong> 8 bits</li>
  <li><strong>Short:</strong> 16 bits (range: -32,768 to 32,767 signed)</li>
  <li><strong>Int:</strong> 32 bits (range: -2,147,483,648 to 2,147,483,647 signed)</li>
  <li><strong>Long:</strong> 32 or 64 bits depending on the system</li>
  <li><strong>Float:</strong> 32 bits (about 7 decimal digits precision)</li>
  <li><strong>Double:</strong> 64 bits (about 15-17 decimal digits precision)</li>
</ul>

<p><strong>Endianness</strong></p>
<p>The order in which bytes are stored in memory:</p>
<ul>
  <li><strong>Little-endian:</strong> Least significant byte first (x86, x86-64)</li>
  <li><strong>Big-endian:</strong> Most significant byte first (historically SPARC, PowerPC)</li>
  <li><strong>Network Byte Order:</strong> Big-endian, used in network protocols</li>
</ul>

<p><strong>Alignment and Padding</strong></p>
<p>Most computer architectures access memory more efficiently when data is aligned at addresses that are multiples of their size. This leads to padding in data structures, where extra bytes are inserted to ensure proper alignment.</p>

<h4>Emerging Concepts</h4>

<p><strong>Quantum Bits (Qubits)</strong></p>
<p>Unlike classical bits, qubits can exist in superpositions of states, allowing quantum computers to represent and process information in fundamentally different ways.</p>

<p><strong>DNA Storage</strong></p>
<p>Using DNA molecules to store digital data, potentially offering extremely high density and longevity.</p>

<p>Understanding data representation is crucial for:</p>
<ul>
  <li>Efficient algorithm design</li>
  <li>Debugging low-level issues</li>
  <li>Optimizing memory usage and performance</li>
  <li>Interoperability between different systems</li>
  <li>Data security and encryption</li>
</ul>`,
        parentId: 'foundations',
        completed: false
    },
    {
        id: 'number_systems',
        title: 'Number Systems & Numeric Representation',
        description: 'Understanding various number systems and their computer implementations',
        content: `<h3>Number Systems and Numeric Representation in Computing</h3>

<p>Number systems form the foundation of how computers represent and manipulate numeric information. Understanding these systems is essential for computer scientists, as they underpin everything from memory addressing to arithmetic operations.</p>

<h4>Positional Number Systems</h4>

<p>In positional number systems, the value of a digit depends on its position in the number. The general formula for representing a number in base-b is:</p>

<p style="text-align:center;">N = d₍ₙ₎ × b^n + d₍ₙ₋₁₎ × b^(n-1) + ... + d₍₁₎ × b^1 + d₍₀₎ × b^0 + d₍₋₁₎ × b^(-1) + ...</p>

<p>Where:</p>
<ul>
  <li>N is the number being represented</li>
  <li>d₍ᵢ₎ represents the digit at position i</li>
  <li>b is the base (radix) of the number system</li>
</ul>

<h4>Fundamental Number Systems in Computing</h4>

<p><strong>Decimal (Base-10)</strong></p>
<p>The familiar system using digits 0-9. Each position represents a power of 10.</p>
<p>Example: 429₍₁₀₎ = 4×10² + 2×10¹ + 9×10⁰ = 400 + 20 + 9</p>

<p><strong>Binary (Base-2)</strong></p>
<p>The foundation of digital computing using only digits 0 and 1 (bits). Each position represents a power of 2.</p>
<p>Example: 1011₍₂₎ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₍₁₀₎</p>

<p><strong>Octal (Base-8)</strong></p>
<p>Uses digits 0-7. Each position represents a power of 8.</p>
<p>Example: 375₍₈₎ = 3×8² + 7×8¹ + 5×8⁰ = 192 + 56 + 5 = 253₍₁₀₎</p>

<p><strong>Hexadecimal (Base-16)</strong></p>
<p>Uses digits 0-9 and letters A-F (representing values 10-15). Each position represents a power of 16.</p>
<p>Example: 2AF₍₁₆₎ = 2×16² + 10×16¹ + 15×16⁰ = 512 + 160 + 15 = 687₍₁₀₎</p>

<h4>Conversion Between Number Systems</h4>

<p><strong>Decimal to Other Bases</strong></p>
<p>To convert a decimal number to another base:</p>
<ol>
  <li>Divide the decimal number by the target base</li>
  <li>Record the remainder</li>
  <li>Continue dividing the quotient by the base until the quotient becomes 0</li>
  <li>Read the remainders in reverse order</li>
</ol>

<p>Example: Decimal 75 to binary</p>
<pre>
75 ÷ 2 = 37 remainder 1
37 ÷ 2 = 18 remainder 1
18 ÷ 2 = 9  remainder 0
9  ÷ 2 = 4  remainder 1
4  ÷ 2 = 2  remainder 0
2  ÷ 2 = 1  remainder 0
1  ÷ 2 = 0  remainder 1
</pre>
<p>Reading remainders from bottom to top: 75₍₁₀₎ = 1001011₍₂₎</p>

<p><strong>Binary to Octal and Hexadecimal</strong></p>
<p>Group binary digits in sets of 3 (for octal) or 4 (for hexadecimal):</p>

<p>Binary to octal example:</p>
<pre>
Binary:    1 0 1 1 0 1 1 1
Groups:   001 011 011 001
Octal:      1   3   3   1
</pre>
<p>Therefore, 10110111₍₂₎ = 1331₍₈₎</p>

<p>Binary to hexadecimal example:</p>
<pre>
Binary:    1 0 1 1 0 1 1 1
Groups:     0101    1011
Hex:          5       B
</pre>
<p>Therefore, 10110111₍₂₎ = 5B₍₁₆₎</p>

<p><strong>Octal and Hexadecimal to Binary</strong></p>
<p>Convert each digit to its 3-bit (octal) or 4-bit (hexadecimal) binary equivalent.</p>

<p>Octal to binary example:</p>
<pre>
Octal:      2   7   5
Binary:    010 111 101
</pre>
<p>Therefore, 275₍₈₎ = 010111101₍₂₎ = 10111101₍₂₎ (leading zeros removed)</p>

<p>Hexadecimal to binary example:</p>
<pre>
Hex:        A    F    3
Binary:    1010 1111 0011
</pre>
<p>Therefore, AF3₍₁₆₎ = 101011110011₍₂₎</p>

<h4>Integer Representation in Computing</h4>

<p><strong>Fixed-Width Representation</strong></p>
<p>Computers allocate fixed-width fields for integers (e.g., 8, 16, 32, or 64 bits).</p>

<p><strong>Unsigned Integers</strong></p>
<p>For an n-bit unsigned integer:</p>
<ul>
  <li>Range: 0 to 2^n - 1</li>
  <li>Example: 8-bit unsigned integer range: 0 to 255</li>
</ul>

<p><strong>Sign-Magnitude Representation</strong></p>
<p>The most significant bit (MSB) represents the sign (0 for positive, 1 for negative), and the remaining bits represent the magnitude.</p>
<ul>
  <li>Range: -(2^(n-1) - 1) to +(2^(n-1) - 1)</li>
  <li>Example: 8-bit sign-magnitude range: -127 to +127</li>
  <li>Has two representations for zero: +0 (00000000) and -0 (10000000)</li>
</ul>

<p><strong>One's Complement</strong></p>
<p>Negative numbers are represented by inverting all bits of the corresponding positive number.</p>
<ul>
  <li>Range: -(2^(n-1) - 1) to +(2^(n-1) - 1)</li>
  <li>Still has two zeros: +0 (00000000) and -0 (11111111 for 8-bit)</li>
  <li>To negate a number, invert all bits</li>
</ul>

<p><strong>Two's Complement</strong></p>
<p>The most common representation in modern computers. Negative numbers are represented by taking the one's complement and adding 1.</p>
<ul>
  <li>Range: -2^(n-1) to 2^(n-1) - 1</li>
  <li>Example: 8-bit two's complement range: -128 to +127</li>
  <li>Single representation for zero</li>
  <li>To negate a number: invert all bits and add 1</li>
</ul>

<p>Example: Representing -43 in 8-bit two's complement:</p>
<ol>
  <li>Positive 43 in binary: 00101011</li>
  <li>Invert all bits: 11010100</li>
  <li>Add 1: 11010101</li>
  <li>Result: -43 = 11010101₍₂₎</li>
</ol>

<p><strong>Biased Representation</strong></p>
<p>A value is represented as the unsigned binary number of the actual value plus a bias.</p>
<ul>
  <li>Common in floating-point exponents</li>
  <li>Example: With 8 bits and bias of 127, the value -10 is represented as -10 + 127 = 117 = 01110101₍₂₎</li>
</ul>

<h4>Arithmetic Operations on Binary Numbers</h4>

<p><strong>Binary Addition</strong></p>
<pre>
  0 + 0 = 0
  0 + 1 = 1
  1 + 0 = 1
  1 + 1 = 0 with carry 1
</pre>

<p>Example:</p>
<pre>
    1 1 1 1  (carries)
    1 0 1 1
  + 0 1 0 1
  ---------
    1 0 0 0 0
</pre>

<p><strong>Binary Subtraction</strong></p>
<p>Often implemented using two's complement addition:</p>
<ol>
  <li>Convert subtrahend to its two's complement</li>
  <li>Add to the minuend</li>
  <li>Discard any carry beyond the word size</li>
</ol>

<p><strong>Binary Multiplication</strong></p>
<p>Similar to decimal multiplication but simpler:</p>
<ul>
  <li>If multiplier bit is 0, write down 0</li>
  <li>If multiplier bit is 1, write down the multiplicand</li>
  <li>Shift each successive result one position left</li>
  <li>Add all rows</li>
</ul>

<p>Example:</p>
<pre>
      1 0 1  (5)
    × 1 1 0  (6)
    -------
      0 0 0  (× 0)
    1 0 1    (× 1, shifted)
  1 0 1      (× 1, shifted twice)
  ---------
  1 1 1 1 0  (30)
</pre>

<p><strong>Binary Division</strong></p>
<p>Similar to long division but with binary operations.</p>

<h4>Bitwise Operations</h4>

<p><strong>AND (&)</strong></p>
<p>Returns 1 if both bits are 1; otherwise 0.</p>
<pre>
  0 & 0 = 0
  0 & 1 = 0
  1 & 0 = 0
  1 & 1 = 1
</pre>

<p><strong>OR (|)</strong></p>
<p>Returns 1 if at least one bit is 1; otherwise 0.</p>
<pre>
  0 | 0 = 0
  0 | 1 = 1
  1 | 0 = 1
  1 | 1 = 1
</pre>

<p><strong>XOR (^)</strong></p>
<p>Returns 1 if exactly one bit is 1; otherwise 0.</p>
<pre>
  0 ^ 0 = 0
  0 ^ 1 = 1
  1 ^ 0 = 1
  1 ^ 1 = 0
</pre>

<p><strong>NOT (~)</strong></p>
<p>Inverts each bit.</p>
<pre>
  ~0 = 1
  ~1 = 0
</pre>

<p><strong>Shift Operations</strong></p>
<ul>
  <li><strong>Left Shift (<<):</strong> Shifts bits to the left, filling with 0s</li>
  <li><strong>Logical Right Shift (>>>):</strong> Shifts bits to the right, filling with 0s</li>
  <li><strong>Arithmetic Right Shift (>>):</strong> Shifts bits to the right, preserving the sign bit</li>
</ul>

<h4>Common Applications in Computing</h4>

<p><strong>Binary Representation Advantages</strong></p>
<ul>
  <li>Directly maps to electronic states (on/off)</li>
  <li>Simplifies circuit design</li>
  <li>Facilitates error detection and correction</li>
</ul>

<p><strong>Hexadecimal Usage</strong></p>
<ul>
  <li>Memory addresses (0x400000)</li>
  <li>Color representation (e.g., #FF5733 in HTML)</li>
  <li>Machine code representation</li>
  <li>Network addresses (MAC, IPv6)</li>
</ul>

<p><strong>Bitwise Operations Applications</strong></p>
<ul>
  <li>Setting/clearing/toggling flags</li>
  <li>Bit masks for permissions (read/write/execute)</li>
  <li>Hardware register manipulation</li>
  <li>Implementing cryptographic algorithms</li>
  <li>Optimizing certain calculations</li>
</ul>

<p><strong>Performance Optimizations</strong></p>
<ul>
  <li>Multiplication/division by powers of 2 using shifts (×2 is << 1, ÷2 is >> 1)</li>
  <li>Fast modulo for powers of 2 (n % 8 is equivalent to n & 7)</li>
  <li>Fast average of two numbers: (a + b) >> 1</li>
  <li>Determining if a number is even/odd (n & 1 == 0 means even)</li>
</ul>

<h4>Special Number Representations</h4>

<p><strong>Binary-Coded Decimal (BCD)</strong></p>
<p>Each decimal digit is encoded using 4 bits.</p>
<ul>
  <li>Example: Decimal 429 in BCD is 0100 0010 1001</li>
  <li>Used in financial applications and systems where decimal precision is critical</li>
</ul>

<p><strong>Excess-3 Code</strong></p>
<p>Each decimal digit is represented by its binary value plus 3.</p>

<p><strong>Gray Code</strong></p>
<p>A binary numeral system where two successive values differ by only one bit.</p>
<ul>
  <li>Used in error correction and hardware implementations</li>
  <li>Example sequence: 000, 001, 011, 010, 110, 111, 101, 100</li>
</ul>

<h4>Challenges and Limitations</h4>

<p><strong>Overflow and Underflow</strong></p>
<p>Occur when the result of an operation exceeds the representable range.</p>
<ul>
  <li>Example: Adding 1 to 01111111 (127) in 8-bit two's complement gives 10000000 (-128)</li>
</ul>

<p><strong>Carry and Borrow</strong></p>
<p>In multi-byte arithmetic, carries and borrows must be propagated between bytes.</p>

<p><strong>Precision Limitations</strong></p>
<p>Fixed-width representation limits the range of representable values.</p>

<h4>Advanced Topics</h4>

<p><strong>Arbitrary-Precision Arithmetic</strong></p>
<p>Software implementations that overcome fixed-width limitations by using dynamic memory allocation.</p>

<p><strong>Residue Number Systems</strong></p>
<p>Represent numbers as remainders with respect to a set of moduli, enabling parallel arithmetic operations.</p>

<p><strong>Redundant Number Systems</strong></p>
<p>Use more digits than necessary to avoid carry propagation and speed up arithmetic operations.</p>

<p><strong>Quantum Computation</strong></p>
<p>Qubits can represent superpositions of 0 and 1, enabling new computational models.</p>

<h4>Historical Perspective</h4>

<p>The binary number system was formalized by Gottfried Wilhelm Leibniz in the 17th century. Claude Shannon's 1937 master's thesis demonstrated how Boolean algebra could implement any logical numerical relationship, leading to modern digital computing. Early computers used various number systems, including decimal and binary-coded decimal, before binary representation became standard due to its simplicity in electronic implementation.</p>

<p>Understanding number systems and their representations is foundational to computer science, influencing everything from hardware design to algorithm optimization and software development.</p>`,
        parentId: 'foundations',
        completed: false
    },
    {
        id: 'algorithms',
        title: 'Algorithms & Complexity',
        description: 'Algorithms, efficiency, and computational complexity',
        content: 'Algorithms are step-by-step procedures for solving problems or performing computations. Computational complexity measures the resources (like time and space) required by an algorithm.\n\nImportant topics include:\n- Algorithm design techniques\n- Searching and sorting algorithms\n- Recursive algorithms\n- Time and space complexity\n- Big O notation\n- Tractable vs. intractable problems\n- P vs. NP problem',
        parentId: 'foundations',
        completed: false
    },
    {
        id: 'data_structures',
        title: 'Data Structures',
        description: 'Ways to organize and store data for efficient operations',
        content: 'Data structures are specialized formats for organizing, processing, retrieving, and storing data. They enable efficient access and modification of information.\n\nCommon data structures include:\n- Arrays and linked lists\n- Stacks and queues\n- Trees (binary trees, BSTs, AVL trees)\n- Heaps\n- Hash tables\n- Graphs\n- Tries',
        parentId: 'foundations',
        completed: false
    },

    // Topics under Computer Hardware
    {
    {
        id: 'digital_logic',
        title: 'Digital Logic & Gates',
        description: 'The building blocks of digital circuits from transistors up',
        content: `<h3>Digital Logic: Building Computational Systems from Transistors</h3>

<p>Digital logic forms the foundation for all computational systems, enabling us to build everything from simple calculators to complex supercomputers. This topic explores how to construct digital systems from the ground up, starting with the basic physics of transistors.</p>

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
</ul>

<p><strong>Building NOT Gates (Inverters)</strong></p>
<p>The simplest logical operation—negation—can be constructed with:</p>
<ul>
  <li><strong>Single Transistor Inverter:</strong> Using an NMOS transistor with a pull-up resistor</li>
  <li><strong>CMOS Inverter:</strong> Using complementary PMOS and NMOS transistors for more efficient operation</li>
  <li><strong>Voltage Transfer Characteristics:</strong> Understanding the relationship between input and output voltages</li>
  <li><strong>Noise Margins:</strong> How inverters reject electrical noise and maintain signal integrity</li>
</ul>

<p><strong>Constructing Basic Logic Gates</strong></p>
<p>All other gates can be built using specific arrangements of transistors:</p>
<ul>
  <li><strong>NAND Gate:</strong> Two NMOS transistors in series and two PMOS in parallel (4 transistors)</li>
  <li><strong>NOR Gate:</strong> Two NMOS transistors in parallel and two PMOS in series (4 transistors)</li>
  <li><strong>AND Gate:</strong> A NAND gate followed by an inverter (6 transistors)</li>
  <li><strong>OR Gate:</strong> A NOR gate followed by an inverter (6 transistors)</li>
  <li><strong>XOR Gate:</strong> Constructed using combinations of other gates (up to 12 transistors)</li>
  <li><strong>Transmission Gates:</strong> Using transistor pairs as controlled switches for certain logic operations</li>
</ul>

<h4>Combinational Logic Systems</h4>

<p><strong>Building Arithmetic Circuits</strong></p>
<p>Using logic gates to perform mathematical operations:</p>
<ul>
  <li><strong>Half Adder:</strong> Combining XOR (for sum) and AND (for carry)</li>
  <li><strong>Full Adder:</strong> Combining half adders to handle input carries</li>
  <li><strong>Ripple Carry Adder:</strong> Chaining full adders for multi-bit addition</li>
  <li><strong>Carry-Lookahead Adder:</strong> Optimizing for speed by computing carries in advance</li>
  <li><strong>Multipliers:</strong> Using combinations of shifters and adders</li>
  <li><strong>ALU Construction:</strong> Combining adders with logic operations to build a complete Arithmetic Logic Unit</li>
</ul>

<p><strong>Data Routing and Selection</strong></p>
<p>Controlling the flow of digital information:</p>
<ul>
  <li><strong>Multiplexers (MUX):</strong> Selecting one of multiple input signals based on control lines</li>
  <li><strong>Demultiplexers (DEMUX):</strong> Routing a single input to one of multiple outputs</li>
  <li><strong>Encoders:</strong> Converting multiple input lines to a binary code</li>
  <li><strong>Decoders:</strong> Translating binary codes to multiple output lines</li>
  <li><strong>Bus Architectures:</strong> Using these components to create efficient data pathways</li>
</ul>

<h4>Sequential Logic and Memory</h4>

<p><strong>Building Flip-Flops from Gates</strong></p>
<p>Creating circuits that remember state:</p>
<ul>
  <li><strong>SR Latch:</strong> The most basic memory element built from cross-coupled NOR or NAND gates</li>
  <li><strong>Gated Latches:</strong> Adding control signals to basic latches</li>
  <li><strong>D Flip-Flop:</strong> Capturing data at precise clock edges</li>
  <li><strong>JK and T Flip-Flops:</strong> More versatile sequential elements</li>
  <li><strong>Master-Slave Arrangements:</strong> Preventing unwanted signal transitions</li>
</ul>

<p><strong>Memory Arrays</strong></p>
<p>Organizing flip-flops into useful storage systems:</p>
<ul>
  <li><strong>Registers:</strong> Groups of flip-flops that store multi-bit values</li>
  <li><strong>Register Files:</strong> Collections of registers with selection mechanisms</li>
  <li><strong>SRAM Cells:</strong> Six-transistor arrangements that store a bit</li>
  <li><strong>SRAM Arrays:</strong> Organizing cells into addressable memory with row and column decoders</li>
  <li><strong>DRAM Fundamentals:</strong> Using capacitors and transistors for higher density storage</li>
</ul>

<h4>Complex Digital Systems</h4>

<p><strong>State Machines</strong></p>
<p>Creating systems that progress through defined states:</p>
<ul>
  <li><strong>Finite State Machines (FSMs):</strong> Combining sequential elements with combinational logic</li>
  <li><strong>Mealy vs. Moore Machines:</strong> Different approaches to generating outputs</li>
  <li><strong>State Encoding:</strong> Optimizing state representation for efficiency and reliability</li>
  <li><strong>Building Controllers:</strong> Using FSMs to control complex systems</li>
</ul>

<p><strong>Digital Design Methodology</strong></p>
<p>Approaches to building complex digital systems:</p>
<ul>
  <li><strong>Hierarchical Design:</strong> Breaking systems into logical blocks</li>
  <li><strong>Structural vs. Behavioral Descriptions:</strong> Different ways to specify digital systems</li>
  <li><strong>Hardware Description Languages:</strong> Using Verilog or VHDL to design complex systems</li>
  <li><strong>Synthesis:</strong> Converting high-level descriptions to gate-level implementations</li>
  <li><strong>Timing Analysis:</strong> Ensuring signals propagate correctly through the system</li>
</ul>

<h4>Building a Simple CPU</h4>

<p>Applying digital logic principles to create a functional processor:</p>
<ul>
  <li><strong>Instruction Fetch:</strong> Program counter and instruction memory access</li>
  <li><strong>Instruction Decode:</strong> Breaking down instructions into control signals</li>
  <li><strong>Register File Access:</strong> Reading and writing to CPU registers</li>
  <li><strong>ALU Operation:</strong> Performing arithmetic and logical operations</li>
  <li><strong>Memory Access:</strong> Reading and writing to system memory</li>
  <li><strong>Write Back:</strong> Storing results back to registers</li>
  <li><strong>Control Unit:</strong> Coordinating all CPU operations</li>
</ul>

<p><strong>From Logic to Computer</strong></p>
<p>The journey from transistors to a functional computational system:</p>
<ul>
  <li><strong>Clock Generation:</strong> Creating reliable timing signals</li>
  <li><strong>Reset Circuitry:</strong> Ensuring consistent startup states</li>
  <li><strong>Memory Hierarchy:</strong> Registers, caches, and main memory</li>
  <li><strong>I/O Interfaces:</strong> Connecting to the outside world</li>
  <li><strong>System Integration:</strong> Bringing everything together into a coherent whole</li>
</ul>

<p>By understanding digital logic from transistors up, you gain the knowledge to design and build any digital system from first principles, rather than relying on pre-built components or high-level abstractions.</p>`,
        parentId: 'hardware',
        completed: false
    },

<p><strong>Transistor Physics</strong></p>
<p>The modern digital age is built upon the semiconductor transistor, which acts as an electronically controlled switch:</p>
<ul>
  <li><strong>P-N Junctions:</strong> Understanding how doped silicon creates regions where electrons and "holes" can flow</li>
  <li><strong>Field Effect:</strong> How voltage applied to the gate terminal controls current flow between source and drain</li>
  <li><strong>MOSFET Operation:</strong> The most common transistor type used in modern digital circuits</li>
  <li><strong>Complementary Pairs:</strong> PMOS and NMOS transistors work together in CMOS technology to create efficient digital logic</li>
</ul>

<p><strong>Building NOT Gates (Inverters)</strong></p>
<p>The simplest logical operation—negation—can be constructed with:</p>
<ul>
  <li><strong>Single Transistor Inverter:</strong> Using an NMOS transistor with a pull-up resistor</li>
  <li><strong>CMOS Inverter:</strong> Using complementary PMOS and NMOS transistors for more efficient operation</li>
  <li><strong>Voltage Transfer Characteristics:</strong> Understanding the relationship between input and output voltages</li>
  <li><strong>Noise Margins:</strong> How inverters reject electrical noise and maintain signal integrity</li>
</ul>

<p><strong>Constructing Basic Logic Gates</strong></p>
<p>All other gates can be built using specific arrangements of transistors:</p>
<ul>
  <li><strong>NAND Gate:</strong> Two NMOS transistors in series and two PMOS in parallel (4 transistors)</li>
  <li><strong>NOR Gate:</strong> Two NMOS transistors in parallel and two PMOS in series (4 transistors)</li>
  <li><strong>AND Gate:</strong> A NAND gate followed by an inverter (6 transistors)</li>
  <li><strong>OR Gate:</strong> A NOR gate followed by an inverter (6 transistors)</li>
  <li><strong>XOR Gate:</strong> Constructed using combinations of other gates (up to 12 transistors)</li>
  <li><strong>Transmission Gates:</strong> Using transistor pairs as controlled switches for certain logic operations</li>
</ul>

<h4>Combinational Logic Systems</h4>

<p><strong>Building Arithmetic Circuits</strong></p>
<p>Using logic gates to perform mathematical operations:</p>
<ul>
  <li><strong>Half Adder:</strong> Combining XOR (for sum) and AND (for carry)</li>
  <li><strong>Full Adder:</strong> Combining half adders to handle input carries</li>
  <li><strong>Ripple Carry Adder:</strong> Chaining full adders for multi-bit addition</li>
  <li><strong>Carry-Lookahead Adder:</strong> Optimizing for speed by computing carries in advance</li>
  <li><strong>Multipliers:</strong> Using combinations of shifters and adders</li>
  <li><strong>ALU Construction:</strong> Combining adders with logic operations to build a complete Arithmetic Logic Unit</li>
</ul>

<p><strong>Data Routing and Selection</strong></p>
<p>Controlling the flow of digital information:</p>
<ul>
  <li><strong>Multiplexers (MUX):</strong> Selecting one of multiple input signals based on control lines</li>
  <li><strong>Demultiplexers (DEMUX):</strong> Routing a single input to one of multiple outputs</li>
  <li><strong>Encoders:</strong> Converting multiple input lines to a binary code</li>
  <li><strong>Decoders:</strong> Translating binary codes to multiple output lines</li>
  <li><strong>Bus Architectures:</strong> Using these components to create efficient data pathways</li>
</ul>

<h4>Sequential Logic and Memory</h4>

<p><strong>Building Flip-Flops from Gates</strong></p>
<p>Creating circuits that remember state:</p>
<ul>
  <li><strong>SR Latch:</strong> The most basic memory element built from cross-coupled NOR or NAND gates</li>
  <li><strong>Gated Latches:</strong> Adding control signals to basic latches</li>
  <li><strong>D Flip-Flop:</strong> Capturing data at precise clock edges</li>
  <li><strong>JK and T Flip-Flops:</strong> More versatile sequential elements</li>
  <li><strong>Master-Slave Arrangements:</strong> Preventing unwanted signal transitions</li>
</ul>

<p><strong>Memory Arrays</strong></p>
<p>Organizing flip-flops into useful storage systems:</p>
<ul>
  <li><strong>Registers:</strong> Groups of flip-flops that store multi-bit values</li>
  <li><strong>Register Files:</strong> Collections of registers with selection mechanisms</li>
  <li><strong>SRAM Cells:</strong> Six-transistor arrangements that store a bit</li>
  <li><strong>SRAM Arrays:</strong> Organizing cells into addressable memory with row and column decoders</li>
  <li><strong>DRAM Fundamentals:</strong> Using capacitors and transistors for higher density storage</li>
</ul>

<h4>Complex Digital Systems</h4>

<p><strong>State Machines</strong></p>
<p>Creating systems that progress through defined states:</p>
<ul>
  <li><strong>Finite State Machines (FSMs):</strong> Combining sequential elements with combinational logic</li>
  <li><strong>Mealy vs. Moore Machines:</strong> Different approaches to generating outputs</li>
  <li><strong>State Encoding:</strong> Optimizing state representation for efficiency and reliability</li>
  <li><strong>Building Controllers:</strong> Using FSMs to control complex systems</li>
</ul>

<p><strong>Digital Design Methodology</strong></p>
<p>Approaches to building complex digital systems:</p>
<ul>
  <li><strong>Hierarchical Design:</strong> Breaking systems into logical blocks</li>
  <li><strong>Structural vs. Behavioral Descriptions:</strong> Different ways to specify digital systems</li>
  <li><strong>Hardware Description Languages:</strong> Using Verilog or VHDL to design complex systems</li>
  <li><strong>Synthesis:</strong> Converting high-level descriptions to gate-level implementations</li>
  <li><strong>Timing Analysis:</strong> Ensuring signals propagate correctly through the system</li>
</ul>

<h4>Building a Simple CPU</h4>

<p>Applying digital logic principles to create a functional processor:</p>
<ul>
  <li><strong>Instruction Fetch:</strong> Program counter and instruction memory access</li>
  <li><strong>Instruction Decode:</strong> Breaking down instructions into control signals</li>
  <li><strong>Register File Access:</strong> Reading and writing to CPU registers</li>
  <li><strong>ALU Operation:</strong> Performing arithmetic and logical operations</li>
  <li><strong>Memory Access:</strong> Reading and writing to system memory</li>
  <li><strong>Write Back:</strong> Storing results back to registers</li>
  <li><strong>Control Unit:</strong> Coordinating all CPU operations</li>
</ul>

<p><strong>From Logic to Computer</strong></p>
<p>The journey from transistors to a functional computational system:</p>
<ul>
  <li><strong>Clock Generation:</strong> Creating reliable timing signals</li>
  <li><strong>Reset Circuitry:</strong> Ensuring consistent startup states</li>
  <li><strong>Memory Hierarchy:</strong> Registers, caches, and main memory</li>
  <li><strong>I/O Interfaces:</strong> Connecting to the outside world</li>
  <li><strong>System Integration:</strong> Bringing everything together into a coherent whole</li>
</ul>

<p>By understanding digital logic from transistors up, you gain the knowledge to design and build any digital system from first principles, rather than relying on pre-built components or high-level abstractions.</p>`,
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'computer_architecture',
        title: 'Computer Architecture',
        description: 'Design and organization of computer systems',
        content: 'Computer architecture refers to the design and organization of computer systems at both hardware and software levels.\n\nImportant aspects include:\n- Von Neumann architecture\n- Harvard architecture\n- Instruction set architectures (CISC vs. RISC)\n- Pipelining and parallelism\n- Memory hierarchy\n- Cache organization\n- I/O systems\n- Multiprocessor systems',
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'processors',
        title: 'Processors & CPUs',
        description: 'Central processing units and their operation',
        content: 'Processors (CPUs) are the primary components that execute instructions in a computer.\n\nKey topics include:\n- CPU components (ALU, control unit, registers)\n- Instruction cycle (fetch, decode, execute)\n- CPU performance factors\n- Pipelining and superscalar execution\n- Branch prediction\n- Out-of-order execution\n- Multicore processors\n- CPU caching\n- Specialized processors (GPUs, TPUs, etc.)',
        parentId: 'hardware',
        completed: false
    },
    {
        id: 'memory_systems',
        title: 'Memory Systems',
        description: 'Computer memory technologies and hierarchy',
        content: 'Memory systems store data and instructions for immediate and long-term use by the CPU.\n\nTopics include:\n- Memory hierarchy\n- Registers\n- Cache memory (L1, L2, L3)\n- Main memory (RAM)\n- Virtual memory\n- Storage technologies (HDD, SSD, etc.)\n- Memory addressing\n- Memory management techniques',
        parentId: 'hardware',
        completed: false
    },

    // Topics under Programming & Languages
    {
        id: 'programming_basics',
        title: 'Programming Fundamentals',
        description: 'Core concepts in programming',
        content: 'Programming fundamentals cover the basic concepts and principles that apply across most programming languages.\n\nCore concepts include:\n- Variables and data types\n- Operators and expressions\n- Control structures (conditionals, loops)\n- Functions and methods\n- Parameters and return values\n- Scope and lifetime\n- Error handling\n- Basic I/O operations',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'language_paradigms',
        title: 'Programming Paradigms',
        description: 'Different approaches to programming',
        content: 'Programming paradigms are ways of thinking about and structuring code to solve problems.\n\nMajor paradigms include:\n- Imperative programming\n- Procedural programming\n- Object-oriented programming\n- Functional programming\n- Declarative programming\n- Logic programming\n- Event-driven programming\n- Concurrent programming',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'popular_languages',
        title: 'Popular Programming Languages',
        description: 'Overview of widely-used programming languages',
        content: 'Different programming languages are designed for various purposes and have distinct characteristics.\n\nPopular languages include:\n- Python (general-purpose, data science)\n- JavaScript (web development)\n- Java (enterprise, Android)\n- C/C++ (systems, performance-critical)\n- C# (.NET ecosystem)\n- Go (systems, concurrency)\n- Rust (systems, memory safety)\n- Swift (iOS, macOS)\n- PHP (web development)\n- Ruby (web, scripting)',
        parentId: 'programming',
        completed: false
    },
    {
        id: 'software_development',
        title: 'Software Development',
        description: 'Processes and practices for creating software',
        content: 'Software development encompasses the processes and practices used to create, design, deploy, and maintain software.\n\nKey aspects include:\n- Software development lifecycle\n- Requirements gathering\n- Software design principles\n- Version control systems\n- Testing methodologies\n- Debugging techniques\n- Development methodologies (Agile, Waterfall, etc.)\n- Continuous Integration/Continuous Deployment\n- Code quality and review',
        parentId: 'programming',
        completed: false
    },

    // Topics under Operating Systems
    {
        id: 'os_basics',
        title: 'OS Fundamentals',
        description: 'Core concepts and functions of operating systems',
        content: 'Operating system fundamentals cover the basic functions and concepts that apply to all operating systems.\n\nKey concepts include:\n- OS structures and components\n- Kernel and user modes\n- System calls\n- Processes and threads\n- CPU scheduling\n- Memory management\n- File systems\n- I/O management\n- Protection and security',
        parentId: 'systems',
        completed: false
    },
    {
        id: 'process_management',
        title: 'Process Management',
        description: 'How operating systems handle processes and threads',
        content: 'Process management involves creating, scheduling, and terminating processes and managing their resources.\n\nImportant topics include:\n- Process states and transitions\n- Process control blocks\n- Threads and multithreading\n- CPU scheduling algorithms\n- Process synchronization\n- Deadlocks and their prevention\n- Inter-process communication\n- Context switching',
        parentId: 'systems',
        completed: false
    },
    {
        id: 'memory_management',
        title: 'Memory Management',
        description: 'How operating systems manage computer memory',
        content: 'Memory management involves organizing and controlling computer memory, allocating portions to programs, and ensuring efficient use.\n\nKey concepts include:\n- Physical and virtual memory\n- Memory allocation techniques\n- Paging and segmentation\n- Page replacement algorithms\n- Virtual memory management\n- Memory protection\n- Garbage collection\n- Memory hierarchies and caching',
        parentId: 'systems',
        completed: false
    },
    {
        id: 'file_systems',
        title: 'File Systems',
        description: 'Organization and management of files',
        content: 'File systems control how data is stored and retrieved in an operating system.\n\nImportant aspects include:\n- File concepts and attributes\n- File operations and access methods\n- Directory structures\n- File system implementation\n- Allocation methods\n- Free-space management\n- Journaling and recovery\n- Common file systems (FAT, NTFS, ext4, etc.)',
        parentId: 'systems',
        completed: false
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

// Function to mark a topic as completed
function markTopicAsCompleted(id, isCompleted = true) {
    const topic = getTopicById(id);
    if (topic) {
        topic.completed = isCompleted;
        return true;
    }
    return false;
}
