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
    
    // Hide other content sections
    welcomeScreen.style.display = 'none';
    searchResults.style.display = 'none';
    
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

// Display search results
function displaySearchResults(results) {
    const welcomeScreen = document.getElementById('welcome-screen');
    const topicView = document.getElementById('topic-view');
    const searchResults = document.getElementById('search-results');
    const resultsContainer = document.getElementById('results-container');
    const noResults = document.getElementById('no-results');
    
    // Hide other content sections
    welcomeScreen.style.display = 'none';
    topicView.style.display = 'none';
    
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
    
    // Search button
    document.getElementById('search-button').addEventListener('click', performSearch);
    
    // Enter key in search input
    document.getElementById('search-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // About button
    document.getElementById('about-button').addEventListener('click', toggleAboutModal);
    
    // Web scraper button
    document.getElementById('web-scraper-button').addEventListener('click', toggleWebScraperModal);
    
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
        
        if (event.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
        
        if (event.target === webScraperModal) {
            webScraperModal.style.display = 'none';
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
