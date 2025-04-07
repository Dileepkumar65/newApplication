document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    setupEventListeners();
    loadMainModules();
});

// Load main modules in the sidebar
function loadMainModules() {
    const modules = getTopicsByParentId(null);
    const sidebarModules = document.getElementById('sidebar-modules');
    
    sidebarModules.innerHTML = '';
    
    modules.forEach(module => {
        const moduleElement = document.createElement('div');
        moduleElement.className = 'sidebar-module';
        moduleElement.setAttribute('data-id', module.id);
        moduleElement.textContent = module.title;
        
        moduleElement.addEventListener('click', function() {
            // Mark the clicked module as active
            document.querySelectorAll('.sidebar-module').forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            
            // Load topics dropdown for this module
            loadTopicsDropdown(module.id);
            
            // Display the first topic in this module automatically
            const topics = getTopicsByParentId(module.id);
            if (topics.length > 0) {
                showTopicDetails(topics[0].id);
            }
        });
        
        sidebarModules.appendChild(moduleElement);
    });
}

// Load topics dropdown for the selected module
function loadTopicsDropdown(moduleId) {
    const topics = getTopicsByParentId(moduleId);
    const dropdown = document.getElementById('topic-dropdown');
    const dropdownContainer = document.getElementById('topic-dropdown-container');
    
    dropdown.innerHTML = '';
    
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic.id;
        option.textContent = topic.title;
        dropdown.appendChild(option);
    });
    
    dropdown.style.display = 'block';
    dropdownContainer.style.display = 'block';
    
    // Show the dropdown
    dropdown.addEventListener('change', function() {
        showTopicDetails(this.value);
    });
}

// Display topic details
function showTopicDetails(topicId) {
    const topic = getTopicById(topicId);
    const contentArea = document.getElementById('content-area');
    const topicContent = document.getElementById('topic-content');
    const searchResults = document.getElementById('search-results');
    
    // Hide search results if visible
    searchResults.style.display = 'none';
    contentArea.style.display = 'block';
    
    // Update topic dropdown selection if it exists
    const dropdown = document.getElementById('topic-dropdown');
    if (dropdown.style.display !== 'none') {
        dropdown.value = topicId;
    }
    
    // Display topic content
    topicContent.innerHTML = `
        <h2>${topic.title}</h2>
        <p>${topic.content}</p>
    `;
    
    // Load related subtopics
    loadSubtopics(topicId);
}

// Load subtopics for a parent topic
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
    
    const title = document.createElement('div');
    title.className = 'subtopic-title';
    title.textContent = subtopic.title;
    
    const description = document.createElement('div');
    description.className = 'subtopic-description';
    description.textContent = subtopic.description || 'Click to explore this topic';
    
    card.appendChild(title);
    card.appendChild(description);
    
    card.addEventListener('click', function() {
        showTopicDetails(subtopic.id);
    });
    
    return card;
}

// Perform search
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
    const contentArea = document.getElementById('content-area');
    const searchResults = document.getElementById('search-results');
    const resultsContainer = document.getElementById('results-container');
    const noResults = document.getElementById('no-results');
    
    contentArea.style.display = 'none';
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
    // Search button
    document.getElementById('search-button').addEventListener('click', performSearch);
    
    // Enter key in search input
    document.getElementById('search-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // Back from search button
    document.getElementById('back-from-search-button').addEventListener('click', function() {
        document.getElementById('search-results').style.display = 'none';
        document.getElementById('content-area').style.display = 'block';
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
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Web scraper form submission
    document.getElementById('scraper-form').addEventListener('submit', handleWebScraping);
}
