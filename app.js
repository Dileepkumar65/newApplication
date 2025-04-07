// CS Learning Guide - Main Application Script

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    loadMainTopics();
    setupEventListeners();
});

// Load main topics (parentId = 0)
function loadMainTopics() {
    const topicsContainer = document.getElementById('topics-container');
    const mainTopics = getTopicsByParentId(0);
    
    topicsContainer.innerHTML = '';
    
    mainTopics.forEach(topic => {
        const topicCard = createTopicCard(topic);
        topicsContainer.appendChild(topicCard);
    });
}

// Create a topic card element
function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.dataset.id = topic.id;
    
    const title = document.createElement('h2');
    title.className = 'topic-title';
    title.textContent = topic.title;
    
    const description = document.createElement('p');
    description.className = 'topic-description';
    description.textContent = topic.description;
    
    card.appendChild(title);
    card.appendChild(description);
    
    // Add click event to view topic details
    card.addEventListener('click', () => {
        showTopicDetails(topic.id);
    });
    
    return card;
}

// Show details for a specific topic
function showTopicDetails(topicId) {
    const topic = getTopicById(topicId);
    if (!topic) return;
    
    // Hide topics list and show topic details
    document.getElementById('topics-container').style.display = 'none';
    document.getElementById('search-results').style.display = 'none';
    document.getElementById('topic-details').style.display = 'block';
    
    // Set topic content
    document.getElementById('topic-content').innerHTML = topic.content;
    
    // Load subtopics
    loadSubtopics(topicId);
}

// Load subtopics for a parent topic
function loadSubtopics(parentId) {
    const subtopicsContainer = document.getElementById('subtopics-container');
    const subtopics = getTopicsByParentId(parentId);
    
    subtopicsContainer.innerHTML = '';
    
    if (subtopics.length === 0) {
        subtopicsContainer.innerHTML = '<p>No related topics available.</p>';
        return;
    }
    
    subtopics.forEach(subtopic => {
        const subtopicCard = createSubtopicCard(subtopic);
        subtopicsContainer.appendChild(subtopicCard);
    });
}

// Create a subtopic card element
function createSubtopicCard(subtopic) {
    const card = document.createElement('div');
    card.className = 'subtopic-card';
    card.dataset.id = subtopic.id;
    
    const title = document.createElement('h3');
    title.className = 'subtopic-title';
    title.textContent = subtopic.title;
    
    const description = document.createElement('p');
    description.className = 'subtopic-description';
    description.textContent = subtopic.description;
    
    card.appendChild(title);
    card.appendChild(description);
    
    // Add click event to view subtopic details
    card.addEventListener('click', () => {
        showTopicDetails(subtopic.id);
    });
    
    return card;
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query.length < 3) {
        alert('Please enter at least 3 characters to search');
        return;
    }
    
    const results = searchTopics(query);
    displaySearchResults(results);
}

// Display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('results-container');
    const noResults = document.getElementById('no-results');
    
    // Hide main content and show search results
    document.getElementById('topics-container').style.display = 'none';
    document.getElementById('topic-details').style.display = 'none';
    document.getElementById('search-results').style.display = 'block';
    
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    results.forEach(result => {
        const resultCard = createTopicCard(result);
        resultsContainer.appendChild(resultCard);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Back button from topic details
    document.getElementById('back-button').addEventListener('click', () => {
        document.getElementById('topic-details').style.display = 'none';
        document.getElementById('topics-container').style.display = 'block';
    });
    
    // Back button from search results
    document.getElementById('back-from-search-button').addEventListener('click', () => {
        document.getElementById('search-results').style.display = 'none';
        document.getElementById('topics-container').style.display = 'block';
    });
    
    // Search button
    document.getElementById('search-button').addEventListener('click', performSearch);
    
    // Search input enter key
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // About button
    document.getElementById('about-button').addEventListener('click', toggleAboutModal);
    
    // Close about modal
    document.querySelector('.close-button').addEventListener('click', toggleAboutModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('about-modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Toggle about modal
function toggleAboutModal() {
    const modal = document.getElementById('about-modal');
    
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}