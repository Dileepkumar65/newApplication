// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    // Initialize the app by setting up event handlers and loading content
    setupEventListeners();
    loadMainModules();
    
    // Force the sidebar to be visible on larger screens
    if (window.innerWidth > 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.add('active');
    }
});

// Load main modules in the sidebar
function loadMainModules() {
    console.log("Loading main modules to sidebar");
    const modules = getTopicsByParentId(null);
    console.log("Modules:", modules);
    
    const modulesList = document.getElementById('modules-list');
    
    // Clear the modules list before adding new ones
    modulesList.innerHTML = '';
    
    // Add each module to the sidebar
    modules.forEach(module => {
        const moduleItem = document.createElement('li');
        moduleItem.setAttribute('data-id', module.id);
        moduleItem.textContent = module.title;
        
        moduleItem.addEventListener('click', function() {
            // Mark this module as active
            document.querySelectorAll('.module-list li').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            // Load topics for this module
            loadModuleTopics(module.id);
            
            // Show the first topic automatically
            const topics = getTopicsByParentId(module.id);
            if (topics.length > 0) {
                // Mark the first topic as active
                setTimeout(() => {
                    const firstTopicItem = document.querySelector(`.topic-list li[data-id="${topics[0].id}"]`);
                    if (firstTopicItem) {
                        firstTopicItem.classList.add('active');
                    }
                }, 50);
                
                // Show topic details and check if we need to collapse the sidebar
                showTopicDetails(topics[0].id);
                
                // Collapse sidebar for first topic view if not completed and on mobile
                if (window.innerWidth <= 768 && !topics[0].completed) {
                    toggleSidebar();
                }
            }
        });
        
        modulesList.appendChild(moduleItem);
    });
}

// Load topics for the selected module
function loadModuleTopics(moduleId) {
    const topics = getTopicsByParentId(moduleId);
    console.log(`Loading topics for module ${moduleId}:`, topics);
    const topicsList = document.getElementById('topics-list');
    const topicsSection = document.getElementById('topics-section');
    
    // Clear the topics list before adding new ones
    topicsList.innerHTML = '';
    
    // Add each topic to the sidebar
    topics.forEach(topic => {
        const topicItem = document.createElement('li');
        topicItem.setAttribute('data-id', topic.id);
        
        // Create the topic item with completed status indicator if needed
        if (topic.completed) {
            topicItem.innerHTML = `<span class="completion-indicator completed">✓</span> ${topic.title}`;
        } else {
            topicItem.innerHTML = `<span class="completion-indicator">○</span> ${topic.title}`;
        }
        
        topicItem.addEventListener('click', function() {
            // Mark this topic as active
            document.querySelectorAll('.topic-list li').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            // Show topic details
            showTopicDetails(topic.id);
            
            // Collapse sidebar on mobile when a topic is selected
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });
        
        topicsList.appendChild(topicItem);
    });
    
    // Display the topics section
    topicsSection.style.display = 'block';
}

// Display the details of a topic
function showTopicDetails(topicId) {
    const topic = getTopicById(topicId);
    const welcomeScreen = document.getElementById('welcome-screen');
    const topicView = document.getElementById('topic-view');
    const topicContent = document.getElementById('topic-content');
    const searchResults = document.getElementById('search-results');
    const roadmapView = document.getElementById('roadmap-view');
    
    // Hide other content sections
    welcomeScreen.style.display = 'none';
    searchResults.style.display = 'none';
    roadmapView.style.display = 'none';
    
    // Display topic view
    topicView.style.display = 'block';
    
    // Create completed checkbox
    const completedCheckbox = document.createElement('div');
    completedCheckbox.className = 'topic-completed-checkbox';
    completedCheckbox.innerHTML = `
        <label class="checkbox-container">
            <input type="checkbox" id="topic-completed" ${topic.completed ? 'checked' : ''}>
            <span class="checkmark"></span>
            Mark as completed
        </label>
    `;
    
    // Display topic content with completion checkbox
    topicContent.innerHTML = `
        <h2>${topic.title}</h2>
        <p>${topic.content}</p>
    `;
    topicContent.appendChild(completedCheckbox);
    
    // Add event listener to the checkbox
    document.getElementById('topic-completed').addEventListener('change', function() {
        markTopicAsCompleted(topicId, this.checked);
        
        // Update the topic item in the sidebar
        const topicItem = document.querySelector(`.topic-list li[data-id="${topicId}"]`);
        if (topicItem) {
            const indicator = topicItem.querySelector('.completion-indicator');
            if (indicator) {
                if (this.checked) {
                    indicator.textContent = '✓';
                    indicator.classList.add('completed');
                } else {
                    indicator.textContent = '○';
                    indicator.classList.remove('completed');
                }
            }
        }
    });
    
    // Load subtopics
    loadSubtopics(topicId);
}

// Load subtopics for a selected topic
function loadSubtopics(parentId) {
    const subtopics = getTopicsByParentId(parentId);
    const subtopicsContainer = document.getElementById('subtopics-container');
    const subtopicsSection = document.getElementById('subtopics-section');
    
    if (subtopics.length === 0) {
        subtopicsSection.style.display = 'none';
        return;
    }
    
    subtopicsSection.style.display = 'block';
    subtopicsContainer.innerHTML = '';
    
    subtopics.forEach(subtopic => {
        const subtopicCard = createSubtopicCard(subtopic);
        subtopicsContainer.appendChild(subtopicCard);
    });
}

// Create a card for a subtopic
function createSubtopicCard(subtopic) {
    const card = document.createElement('div');
    card.className = 'subtopic-card';
    card.setAttribute('data-id', subtopic.id);
    
    // Show completion status on card if applicable
    let completionIndicator = '';
    if (subtopic.completed) {
        completionIndicator = '<span class="completion-indicator-card completed">✓</span>';
    }
    
    const title = document.createElement('div');
    title.className = 'subtopic-title';
    title.innerHTML = `${completionIndicator} ${subtopic.title}`;
    
    const description = document.createElement('div');
    description.className = 'subtopic-description';
    description.textContent = subtopic.description || 'Click to explore this topic';
    
    card.appendChild(title);
    card.appendChild(description);
    
    card.addEventListener('click', function() {
        // Update topic selection in the sidebar if it exists
        const topicItem = document.querySelector(`.topic-list li[data-id="${subtopic.id}"]`);
        if (topicItem) {
            document.querySelectorAll('.topic-list li').forEach(item => {
                item.classList.remove('active');
            });
            topicItem.classList.add('active');
        }
        
        // Show the topic details
        showTopicDetails(subtopic.id);
        
        // Collapse sidebar on mobile when a subtopic is selected
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
    
    return card;
}

// Perform a search
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query === '') {
        return;
    }
    
    const results = searchTopics(query);
    displaySearchResults(results);
}

// Perform search from modal
function performSearchFromModal() {
    const searchInput = document.getElementById('search-modal-input');
    const query = searchInput.value.trim();
    
    if (query === '') {
        return;
    }
    
    const results = searchTopics(query);
    
    // Hide the modal
    document.getElementById('search-modal').style.display = 'none';
    
    displaySearchResults(results);
}

// Display search results
function displaySearchResults(results) {
    const welcomeScreen = document.getElementById('welcome-screen');
    const topicView = document.getElementById('topic-view');
    const searchResults = document.getElementById('search-results');
    const resultsContainer = document.getElementById('results-container');
    const noResults = document.getElementById('no-results');
    const roadmapView = document.getElementById('roadmap-view');
    
    // Hide other content sections
    welcomeScreen.style.display = 'none';
    topicView.style.display = 'none';
    roadmapView.style.display = 'none';
    
    // Display search results
    searchResults.style.display = 'block';
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    results.forEach(result => {
        const resultCard = createSubtopicCard(result);
        resultsContainer.appendChild(resultCard);
    });
}

// Toggle about modal
function toggleAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}

// Toggle web scraper modal
function toggleWebScraperModal() {
    const modal = document.getElementById('web-scraper-modal');
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}

// Toggle roadmap modals
function toggleRoadmapModal(roadmapId) {
    const modal = document.getElementById(`${roadmapId}-roadmap-modal`);
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
    
    // Load roadmap content if it's being displayed
    if (modal.style.display === 'flex') {
        loadRoadmapContent(roadmapId);
    }
}

// Load roadmap content
function loadRoadmapContent(roadmapId) {
    const contentDiv = document.getElementById(`${roadmapId}-roadmap-content`);
    
    // Define roadmap content based on roadmap ID
    let content = '';
    
    switch(roadmapId) {
        case 'os':
            content = `
                <div class="roadmap-section">
                    <h3>Phase 1: Understanding Hardware Fundamentals</h3>
                    <ul>
                        <li><strong>Transistors and Logic Gates:</strong> Understand how transistors work as switches and form the basis of digital logic</li>
                        <li><strong>Digital Logic Circuits:</strong> Study combinational and sequential circuits that form the basis of CPU components</li>
                        <li><strong>Computer Architecture:</strong> Learn about registers, ALU, control unit, and memory hierarchy</li>
                        <li><strong>Assembly Language:</strong> Master low-level programming to understand how instructions directly manipulate hardware</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 2: Boot Process and Kernel Basics</h3>
                    <ul>
                        <li><strong>Bootloaders:</strong> Implement a simple bootloader that initializes hardware and loads your kernel</li>
                        <li><strong>Memory Management:</strong> Develop paging and segmentation mechanisms to manage physical and virtual memory</li>
                        <li><strong>Interrupt Handling:</strong> Create handlers for hardware and software interrupts</li>
                        <li><strong>Device Drivers:</strong> Write drivers for basic devices (keyboard, display, disk)</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 3: Process Management</h3>
                    <ul>
                        <li><strong>Process Structure:</strong> Implement process control blocks and process states</li>
                        <li><strong>CPU Scheduling:</strong> Develop algorithms for process scheduling</li>
                        <li><strong>Context Switching:</strong> Implement mechanism to save and restore CPU state when switching between processes</li>
                        <li><strong>Inter-process Communication:</strong> Create methods for processes to communicate and synchronize</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 4: Memory and Storage Systems</h3>
                    <ul>
                        <li><strong>Virtual Memory:</strong> Implement demand paging, page replacement algorithms, and page tables</li>
                        <li><strong>File System:</strong> Design and implement a simple file system with directories, file allocation, and basic operations</li>
                        <li><strong>Disk Management:</strong> Create systems for disk scheduling and space management</li>
                        <li><strong>Caching:</strong> Implement various caching mechanisms to improve performance</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 5: System Services and Protection</h3>
                    <ul>
                        <li><strong>System Calls:</strong> Implement the interface between user programs and the OS</li>
                        <li><strong>User and Kernel Modes:</strong> Enforce separation between privileged and unprivileged operations</li>
                        <li><strong>Protection Mechanisms:</strong> Implement memory protection and resource isolation</li>
                        <li><strong>Security Features:</strong> Add access control, authentication, and encryption capabilities</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 6: User Space and Applications</h3>
                    <ul>
                        <li><strong>Shell:</strong> Create a command-line interface for user interaction</li>
                        <li><strong>Standard Libraries:</strong> Implement basic libraries for user programs</li>
                        <li><strong>Utilities:</strong> Develop fundamental system utilities (file operations, process management, etc.)</li>
                        <li><strong>Application Execution:</strong> Support loading and running user applications</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Advanced Extensions</h3>
                    <ul>
                        <li><strong>Networking:</strong> Implement network stack and protocols</li>
                        <li><strong>GUI:</strong> Create a graphical user interface and window system</li>
                        <li><strong>Multiprocessor Support:</strong> Extend your OS to utilize multiple processors</li>
                        <li><strong>Virtualization:</strong> Implement hypervisor capabilities to run multiple operating systems</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Essential Knowledge Areas</h3>
                    <ul>
                        <li><strong>Languages:</strong> C, Assembly (x86, ARM, or RISC-V)</li>
                        <li><strong>Tools:</strong> Compiler toolchain, emulators (QEMU), debuggers</li>
                        <li><strong>Documentation:</strong> Hardware manuals, processor specifications</li>
                        <li><strong>Reference Operating Systems:</strong> Study UNIX/Linux, Minix, or other open-source OS implementations</li>
                    </ul>
                </div>
            `;
            break;
            
        case 'compiler':
            content = `
                <div class="roadmap-section">
                    <h3>Phase 1: Foundational Knowledge</h3>
                    <ul>
                        <li><strong>Binary and Machine Code:</strong> Understand how processors execute instructions at the lowest level</li>
                        <li><strong>Assembly Language:</strong> Learn how symbolic representations map to machine instructions</li>
                        <li><strong>Computer Architecture:</strong> Study instruction sets, registers, memory models, and calling conventions</li>
                        <li><strong>Formal Language Theory:</strong> Master regular expressions, context-free grammars, and automata theory</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 2: Lexical Analysis</h3>
                    <ul>
                        <li><strong>Token Definition:</strong> Define the vocabulary of your language (keywords, identifiers, literals, etc.)</li>
                        <li><strong>Regular Expressions:</strong> Use regular expressions to describe token patterns</li>
                        <li><strong>Finite Automata:</strong> Understand how to convert regular expressions to deterministic finite automata</li>
                        <li><strong>Scanner Implementation:</strong> Build a lexical analyzer that converts source code into a stream of tokens</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 3: Syntax Analysis</h3>
                    <ul>
                        <li><strong>Grammar Design:</strong> Create a formal grammar that defines the syntax of your language</li>
                        <li><strong>Parsing Techniques:</strong> Learn recursive descent, LL, and LR parsing methods</li>
                        <li><strong>Abstract Syntax Tree:</strong> Design data structures to represent the syntactic structure of programs</li>
                        <li><strong>Parser Implementation:</strong> Build a parser that converts tokens into an abstract syntax tree</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 4: Semantic Analysis</h3>
                    <ul>
                        <li><strong>Type Systems:</strong> Define the types in your language and rules for type compatibility</li>
                        <li><strong>Symbol Tables:</strong> Create data structures to track identifiers and their attributes</li>
                        <li><strong>Scope Rules:</strong> Implement mechanisms for handling variable scope and visibility</li>
                        <li><strong>Semantic Checking:</strong> Verify semantic correctness (type checking, variable declarations, etc.)</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 5: Intermediate Representation</h3>
                    <ul>
                        <li><strong>IR Design:</strong> Design an intermediate representation that's suitable for optimization</li>
                        <li><strong>Control Flow Graph:</strong> Represent program flow to facilitate analysis and optimization</li>
                        <li><strong>Static Single Assignment (SSA):</strong> Understand advanced IR forms that simplify certain optimizations</li>
                        <li><strong>IR Generation:</strong> Convert the AST to your intermediate representation</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 6: Code Optimization</h3>
                    <ul>
                        <li><strong>Local Optimizations:</strong> Implement basic optimizations like constant folding and common subexpression elimination</li>
                        <li><strong>Global Optimizations:</strong> Add data flow analysis and global optimizations</li>
                        <li><strong>Loop Optimizations:</strong> Implement loop-specific optimizations (unrolling, fusion, etc.)</li>
                        <li><strong>Instruction Scheduling:</strong> Arrange instructions to maximize pipeline efficiency</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 7: Code Generation</h3>
                    <ul>
                        <li><strong>Target Architecture:</strong> Understand the instruction set and features of your target platform</li>
                        <li><strong>Instruction Selection:</strong> Convert IR operations to target machine instructions</li>
                        <li><strong>Register Allocation:</strong> Assign variables to registers or memory locations</li>
                        <li><strong>Assembly Generation:</strong> Output the final assembly code for your target architecture</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 8: Runtime System</h3>
                    <ul>
                        <li><strong>Memory Management:</strong> Implement stack and heap allocation</li>
                        <li><strong>Garbage Collection:</strong> Add automatic memory management if your language requires it</li>
                        <li><strong>Function Calls:</strong> Implement calling conventions and procedure linkage</li>
                        <li><strong>Runtime Libraries:</strong> Create standard libraries and runtime support for your language</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Essential Tools and Knowledge</h3>
                    <ul>
                        <li><strong>Languages:</strong> C/C++ for the compiler itself; your target assembly language</li>
                        <li><strong>Tools:</strong> LLVM framework, yacc/bison, lex/flex, assembler, linker</li>
                        <li><strong>Reference Materials:</strong> "Compilers: Principles, Techniques, and Tools" (Dragon Book), architecture manuals</li>
                        <li><strong>Reference Implementations:</strong> Study GCC, Clang, or other open-source compilers</li>
                    </ul>
                </div>
            `;
            break;
            
        case 'ai':
            content = `
                <div class="roadmap-section">
                    <h3>Phase 1: Mathematical and Computational Foundations</h3>
                    <ul>
                        <li><strong>Boolean Logic:</strong> Understand logical operations as the basis for computational reasoning</li>
                        <li><strong>Information Theory:</strong> Learn how to quantify and process information</li>
                        <li><strong>Linear Algebra:</strong> Master vectors, matrices, and transformations essential for ML algorithms</li>
                        <li><strong>Calculus:</strong> Understand derivatives and gradients for optimization algorithms</li>
                        <li><strong>Probability & Statistics:</strong> Learn statistical methods for handling uncertainty and making inferences</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 2: Classical AI Fundamentals</h3>
                    <ul>
                        <li><strong>Search Algorithms:</strong> Implement breadth-first, depth-first, A*, and other search methods</li>
                        <li><strong>Knowledge Representation:</strong> Design systems to represent facts and relationships</li>
                        <li><strong>Logic Programming:</strong> Build inference engines using propositional and predicate logic</li>
                        <li><strong>Rule-Based Systems:</strong> Create expert systems with forward/backward chaining</li>
                        <li><strong>Planning Systems:</strong> Develop algorithms for automated planning and decision making</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 3: Low-Level Neural Components</h3>
                    <ul>
                        <li><strong>Artificial Neurons:</strong> Implement perceptrons and activation functions from scratch</li>
                        <li><strong>Backpropagation:</strong> Develop the fundamental algorithm for neural network training</li>
                        <li><strong>Gradient Descent:</strong> Build optimization algorithms for parameter updates</li>
                        <li><strong>Loss Functions:</strong> Implement various error measures and understand their applications</li>
                        <li><strong>Matrix Operations:</strong> Create efficient implementations of neural network computations</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 4: Machine Learning Algorithms</h3>
                    <ul>
                        <li><strong>Linear Models:</strong> Implement linear and logistic regression from fundamental principles</li>
                        <li><strong>Decision Trees:</strong> Build tree-based models using information gain and other splitting criteria</li>
                        <li><strong>Support Vector Machines:</strong> Implement kernel methods and margin optimization</li>
                        <li><strong>Clustering:</strong> Create algorithms for unsupervised learning (k-means, hierarchical)</li>
                        <li><strong>Dimensionality Reduction:</strong> Implement PCA and other techniques to handle high-dimensional data</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 5: Neural Network Architectures</h3>
                    <ul>
                        <li><strong>Feedforward Networks:</strong> Build multi-layer perceptrons with vectorized operations</li>
                        <li><strong>Convolutional Networks:</strong> Implement convolution and pooling operations for image processing</li>
                        <li><strong>Recurrent Networks:</strong> Create RNNs, LSTMs, and GRUs for sequential data</li>
                        <li><strong>Autoencoders:</strong> Build networks for unsupervised feature learning</li>
                        <li><strong>Generative Models:</strong> Implement GANs and VAEs for generating new data</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 6: Advanced Training Techniques</h3>
                    <ul>
                        <li><strong>Regularization:</strong> Implement L1/L2 regularization, dropout, and batch normalization</li>
                        <li><strong>Optimization Algorithms:</strong> Build advanced optimizers like Adam, RMSprop, and momentum</li>
                        <li><strong>Transfer Learning:</strong> Develop methods to leverage pre-trained models</li>
                        <li><strong>Distributed Training:</strong> Create systems for parallel and distributed model training</li>
                        <li><strong>Hyperparameter Optimization:</strong> Implement methods for tuning model parameters</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 7: Reinforcement Learning</h3>
                    <ul>
                        <li><strong>Markov Decision Processes:</strong> Implement the mathematical framework for sequential decision making</li>
                        <li><strong>Value Functions:</strong> Build methods to estimate state and action values</li>
                        <li><strong>Policy Gradient Methods:</strong> Implement algorithms that directly optimize policies</li>
                        <li><strong>Q-Learning:</strong> Create temporal difference learning algorithms</li>
                        <li><strong>Deep Reinforcement Learning:</strong> Combine neural networks with RL frameworks</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 8: Natural Language Processing</h3>
                    <ul>
                        <li><strong>Text Processing:</strong> Build tokenizers and text normalization from scratch</li>
                        <li><strong>Word Embeddings:</strong> Implement algorithms like Word2Vec and GloVe</li>
                        <li><strong>Language Models:</strong> Create n-gram and neural language models</li>
                        <li><strong>Sequence-to-Sequence Models:</strong> Build encoder-decoder architectures for translation and summarization</li>
                        <li><strong>Attention Mechanisms:</strong> Implement transformers and self-attention from basic principles</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Essential Tools and Knowledge</h3>
                    <ul>
                        <li><strong>Languages:</strong> Python, C++ for performance-critical components</li>
                        <li><strong>Hardware Understanding:</strong> CPU vectorization, GPU architecture, TPUs</li>
                        <li><strong>Systems Design:</strong> Distributed computing, data pipelines, model serving</li>
                        <li><strong>Ethical Considerations:</strong> Bias, fairness, transparency, and responsible AI development</li>
                    </ul>
                </div>
            `;
            break;
            
        case 'network':
            content = `
                <div class="roadmap-section">
                    <h3>Phase 1: Physical Layer Fundamentals</h3>
                    <ul>
                        <li><strong>Signal Processing:</strong> Understand analog and digital signals, modulation techniques</li>
                        <li><strong>Information Theory:</strong> Learn about channel capacity, noise, and error correction</li>
                        <li><strong>Digital Electronics:</strong> Study the hardware components used in network interfaces</li>
                        <li><strong>Transmission Media:</strong> Understand copper, fiber optic, and wireless transmission</li>
                        <li><strong>Encoding and Signaling:</strong> Implement Manchester encoding, NRZ, NRZI, and other schemes</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 2: Data Link Layer</h3>
                    <ul>
                        <li><strong>Framing:</strong> Implement methods to identify frame boundaries</li>
                        <li><strong>Error Detection:</strong> Build parity checks, checksums, and CRC algorithms</li>
                        <li><strong>Error Correction:</strong> Implement Hamming codes and other forward error correction techniques</li>
                        <li><strong>Flow Control:</strong> Create stop-and-wait and sliding window protocols</li>
                        <li><strong>Media Access Control:</strong> Implement CSMA/CD and other channel access methods</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 3: Network Interface</h3>
                    <ul>
                        <li><strong>Device Drivers:</strong> Develop low-level software to control network hardware</li>
                        <li><strong>Ethernet Implementation:</strong> Build Ethernet frame handling from scratch</li>
                        <li><strong>ARP Protocol:</strong> Implement address resolution between IP and MAC addresses</li>
                        <li><strong>Raw Socket Programming:</strong> Create applications that directly access network interfaces</li>
                        <li><strong>Promiscuous Mode:</strong> Build packet capturing capabilities</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 4: Internet Protocol (IP)</h3>
                    <ul>
                        <li><strong>IP Packet Structure:</strong> Implement IPv4 and IPv6 packet formats</li>
                        <li><strong>Addressing:</strong> Create systems for managing IP addresses, subnetting, and CIDR</li>
                        <li><strong>Routing Algorithms:</strong> Build distance-vector and link-state routing protocols</li>
                        <li><strong>Fragmentation and Reassembly:</strong> Implement handling of oversized packets</li>
                        <li><strong>ICMP:</strong> Build Internet Control Message Protocol for network diagnostics</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 5: Transport Protocols</h3>
                    <ul>
                        <li><strong>UDP:</strong> Implement the User Datagram Protocol for simple message passing</li>
                        <li><strong>TCP:</strong> Build the Transmission Control Protocol with:
                            <ul>
                                <li>Connection establishment (three-way handshake)</li>
                                <li>Flow control and congestion control</li>
                                <li>Reliable delivery with acknowledgments and retransmissions</li>
                                <li>Connection termination</li>
                            </ul>
                        </li>
                        <li><strong>Socket API:</strong> Create a programming interface for applications</li>
                        <li><strong>Port Management:</strong> Implement multiplexing of multiple applications</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 6: Application Protocols</h3>
                    <ul>
                        <li><strong>DNS:</strong> Build a Domain Name System resolver and server</li>
                        <li><strong>DHCP:</strong> Implement Dynamic Host Configuration Protocol</li>
                        <li><strong>HTTP:</strong> Create a Hypertext Transfer Protocol client and server</li>
                        <li><strong>FTP:</strong> Implement a File Transfer Protocol system</li>
                        <li><strong>SMTP/POP3/IMAP:</strong> Build email protocols</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 7: Network Security</h3>
                    <ul>
                        <li><strong>Cryptography:</strong> Implement symmetric and asymmetric encryption algorithms</li>
                        <li><strong>TLS/SSL:</strong> Build secure transport layer protocols</li>
                        <li><strong>Firewalls:</strong> Create packet filtering and stateful inspection systems</li>
                        <li><strong>VPN:</strong> Implement virtual private network tunneling</li>
                        <li><strong>Intrusion Detection:</strong> Build systems to detect and prevent network attacks</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 8: Advanced Networking</h3>
                    <ul>
                        <li><strong>Software-Defined Networking:</strong> Implement control and data plane separation</li>
                        <li><strong>Network Function Virtualization:</strong> Build virtualized network services</li>
                        <li><strong>Quality of Service:</strong> Implement traffic classification and prioritization</li>
                        <li><strong>Multicasting:</strong> Create efficient one-to-many communication</li>
                        <li><strong>IPv6 Transition:</strong> Build dual-stack and tunneling mechanisms</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Essential Tools and Knowledge</h3>
                    <ul>
                        <li><strong>Languages:</strong> C/C++ for performance, Python for prototyping</li>
                        <li><strong>Hardware:</strong> Understanding of NICs, switches, routers, and other network equipment</li>
                        <li><strong>Analysis Tools:</strong> Build or use Wireshark-like packet analyzers</li>
                        <li><strong>Testing Environment:</strong> Create network simulators and virtual test networks</li>
                    </ul>
                </div>
            `;
            break;
            
        case 'database':
            content = `
                <div class="roadmap-section">
                    <h3>Phase 1: Storage Media and Data Access</h3>
                    <ul>
                        <li><strong>Hardware Characteristics:</strong> Understand disk architecture, SSDs, and memory hierarchies</li>
                        <li><strong>File Systems:</strong> Learn how operating systems manage files and blocks</li>
                        <li><strong>Low-Level I/O:</strong> Implement direct disk access and block operations</li>
                        <li><strong>Memory Mapping:</strong> Create memory-mapped file interfaces</li>
                        <li><strong>Data Transfer:</strong> Optimize for sequential and random access patterns</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 2: Data Organization</h3>
                    <ul>
                        <li><strong>Record Formats:</strong> Design fixed and variable-length record structures</li>
                        <li><strong>Page Layouts:</strong> Implement efficient storage of records in pages</li>
                        <li><strong>File Organizations:</strong> Build heap files, sorted files, and hashed organizations</li>
                        <li><strong>Buffer Management:</strong> Create a buffer pool for caching disk pages in memory</li>
                        <li><strong>Recovery Management:</strong> Implement write-ahead logging and checkpointing</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 3: Indexing Structures</h3>
                    <ul>
                        <li><strong>B-Trees:</strong> Implement B+ tree indexes for efficient range queries</li>
                        <li><strong>Hash Indexes:</strong> Build static and dynamic hash structures</li>
                        <li><strong>Bitmap Indexes:</strong> Create compressed bit vectors for low-cardinality attributes</li>
                        <li><strong>Spatial Indexes:</strong> Implement R-trees or quad trees for multidimensional data</li>
                        <li><strong>Inverted Indexes:</strong> Build text search capabilities</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 4: Query Processing</h3>
                    <ul>
                        <li><strong>Parsing and Validation:</strong> Build a SQL parser and semantic analyzer</li>
                        <li><strong>Query Representation:</strong> Create internal representations for queries (parse trees, relational algebra)</li>
                        <li><strong>Execution Operators:</strong> Implement scan, projection, selection, join, and aggregation</li>
                        <li><strong>Expression Evaluation:</strong> Build an expression evaluation engine</li>
                        <li><strong>Result Handling:</strong> Create mechanisms for returning query results</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 5: Query Optimization</h3>
                    <ul>
                        <li><strong>Statistics Collection:</strong> Gather data distribution statistics</li>
                        <li><strong>Cost Estimation:</strong> Build models to predict query execution costs</li>
                        <li><strong>Plan Enumeration:</strong> Create algorithms to generate alternative execution plans</li>
                        <li><strong>Join Ordering:</strong> Implement algorithms for efficient join sequencing</li>
                        <li><strong>Index Selection:</strong> Develop methods to choose optimal indexes for queries</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 6: Transaction Processing</h3>
                    <ul>
                        <li><strong>ACID Properties:</strong> Implement mechanisms for atomicity, consistency, isolation, and durability</li>
                        <li><strong>Concurrency Control:</strong> Build locking, timestamp ordering, or multiversion concurrency control</li>
                        <li><strong>Deadlock Handling:</strong> Create detection and prevention mechanisms</li>
                        <li><strong>Recovery:</strong> Implement crash recovery using logs</li>
                        <li><strong>Isolation Levels:</strong> Support different transaction isolation guarantees</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 7: Distributed Database Systems</h3>
                    <ul>
                        <li><strong>Data Partitioning:</strong> Implement horizontal and vertical partitioning strategies</li>
                        <li><strong>Distributed Query Processing:</strong> Build mechanisms for executing queries across nodes</li>
                        <li><strong>Distributed Transactions:</strong> Implement two-phase commit or other protocols</li>
                        <li><strong>Replication:</strong> Create synchronous and asynchronous replication mechanisms</li>
                        <li><strong>Consistency Models:</strong> Support different consistency guarantees in distributed settings</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 8: Advanced Database Features</h3>
                    <ul>
                        <li><strong>Stored Procedures:</strong> Build a runtime environment for database procedures</li>
                        <li><strong>Triggers:</strong> Implement event-based actions within the database</li>
                        <li><strong>Views:</strong> Create virtual tables and view materialization</li>
                        <li><strong>Security:</strong> Implement authentication, authorization, and access control</li>
                        <li><strong>Schema Evolution:</strong> Support changing data models while preserving data</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Phase 9: Specialized Database Systems</h3>
                    <ul>
                        <li><strong>Column Stores:</strong> Build column-oriented storage for analytical workloads</li>
                        <li><strong>Time-Series Databases:</strong> Optimize for temporal data and queries</li>
                        <li><strong>Document Databases:</strong> Implement schemaless JSON storage and querying</li>
                        <li><strong>Graph Databases:</strong> Create efficient node-edge representations and traversal algorithms</li>
                        <li><strong>Key-Value Stores:</strong> Build high-performance key-value mechanisms</li>
                    </ul>
                </div>
                
                <div class="roadmap-section">
                    <h3>Essential Tools and Knowledge</h3>
                    <ul>
                        <li><strong>Languages:</strong> C/C++ for core engine, higher-level languages for tools</li>
                        <li><strong>Theory:</strong> Relational algebra, data modeling, normalization</li>
                        <li><strong>Systems Design:</strong> Understand consistency, availability, and partition tolerance trade-offs</li>
                        <li><strong>Benchmarking:</strong> Create tools to measure performance and scalability</li>
                    </ul>
                </div>
            `;
            break;
    }
    
    contentDiv.innerHTML = content;
}

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Handle web scraping
async function handleWebScraping(event) {
    event.preventDefault();
    
    const urlInput = document.getElementById('url-input');
    const url = urlInput.value.trim();
    const resultsDiv = document.getElementById('scraper-results');
    const contentDiv = document.getElementById('scraped-content');
    
    if (url === '') {
        return;
    }
    
    // Show loading state
    contentDiv.innerHTML = '<p>Loading...</p>';
    resultsDiv.style.display = 'block';
    
    try {
        // Call the server to scrape the URL
        const response = await fetch('/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        
        if (!response.ok) {
            throw new Error('Error scraping content');
        }
        
        const data = await response.json();
        
        // Display the scraped content
        contentDiv.innerHTML = `<p>${data.content}</p>`;
    } catch (error) {
        contentDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Setup event listeners
function setupEventListeners() {
    console.log("Setting up event listeners");
    
    // Menu toggle for mobile
    document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);
    
    // Search functionality - Open search modal
    document.getElementById('search-button').addEventListener('click', function() {
        document.getElementById('search-modal').style.display = 'flex';
        document.getElementById('search-modal-input').focus();
    });
    
    // Search modal search button
    document.getElementById('search-modal-button').addEventListener('click', function() {
        performSearchFromModal();
    });
    
    // Enter key in search modal input
    document.getElementById('search-modal-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearchFromModal();
        }
    });
    
    // About button - navbar only (removed from sidebar)
    document.getElementById('navbar-about-button').addEventListener('click', toggleAboutModal);
    
    // Web scraper button - navbar only (removed from sidebar)
    document.getElementById('navbar-web-scraper-button').addEventListener('click', toggleWebScraperModal);
    
    // Roadmap buttons
    document.getElementById('os-roadmap-button').addEventListener('click', function() {
        toggleRoadmapModal('os');
    });
    
    document.getElementById('compiler-roadmap-button').addEventListener('click', function() {
        toggleRoadmapModal('compiler');
    });
    
    document.getElementById('ai-roadmap-button').addEventListener('click', function() {
        toggleRoadmapModal('ai');
    });
    
    document.getElementById('network-roadmap-button').addEventListener('click', function() {
        toggleRoadmapModal('network');
    });
    
    document.getElementById('database-roadmap-button').addEventListener('click', function() {
        toggleRoadmapModal('database');
    });
    
    // Close buttons for modals
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const aboutModal = document.getElementById('about-modal');
        const webScraperModal = document.getElementById('web-scraper-modal');
        const searchModal = document.getElementById('search-modal');
        const osRoadmapModal = document.getElementById('os-roadmap-modal');
        const compilerRoadmapModal = document.getElementById('compiler-roadmap-modal');
        const aiRoadmapModal = document.getElementById('ai-roadmap-modal');
        const networkRoadmapModal = document.getElementById('network-roadmap-modal');
        const databaseRoadmapModal = document.getElementById('database-roadmap-modal');
        
        if (event.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
        
        if (event.target === webScraperModal) {
            webScraperModal.style.display = 'none';
        }
        
        if (event.target === searchModal) {
            searchModal.style.display = 'none';
        }
        
        if (event.target === osRoadmapModal) {
            osRoadmapModal.style.display = 'none';
        }
        
        if (event.target === compilerRoadmapModal) {
            compilerRoadmapModal.style.display = 'none';
        }
        
        if (event.target === aiRoadmapModal) {
            aiRoadmapModal.style.display = 'none';
        }
        
        if (event.target === networkRoadmapModal) {
            networkRoadmapModal.style.display = 'none';
        }
        
        if (event.target === databaseRoadmapModal) {
            databaseRoadmapModal.style.display = 'none';
        }
    });
    
    // Web scraper form submission
    document.getElementById('scraper-form').addEventListener('submit', handleWebScraping);
    
    // Make sure sidebar is shown on desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.add('active');
        }
    });
}
