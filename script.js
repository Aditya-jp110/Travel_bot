// Travel Bot JavaScript

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Travel bot responses database
const responses = {
    destinations: [
        "I recommend checking out Paris for its iconic Eiffel Tower and world-class museums!",
        "How about exploring Tokyo? It offers a perfect blend of traditional and modern culture!",
        "Consider visiting Barcelona for its stunning architecture and beautiful beaches!",
        "Bali is a great choice for tropical paradise and rich cultural experiences!",
        "New York City offers endless entertainment, dining, and cultural attractions!"
    ],
    hotels: [
        "For luxury stays, I recommend checking Marriott, Hilton, or Four Seasons properties.",
        "Budget-friendly options include Holiday Inn, Best Western, or local boutique hotels.",
        "For unique experiences, try Airbnb or boutique hotels in the area you're visiting."
    ],
    flights: [
        "I suggest checking flight comparison sites like Skyscanner, Google Flights, or Kayak.",
        "Booking 6-8 weeks in advance typically gives you the best prices!",
        "Consider flying mid-week (Tuesday or Wednesday) for better deals."
    ],
    tips: [
        "Always keep digital and physical copies of important documents!",
        "Research local customs and basic phrases in the local language.",
        "Pack light and bring a universal adapter for your electronics.",
        "Get travel insurance for peace of mind during your trip.",
        "Stay hydrated and be aware of your surroundings at all times."
    ],
    weather: [
        "I recommend checking Weather.com or local weather services for accurate forecasts.",
        "Consider the season when planning your trip - research the best time to visit your destination!",
        "Pack layers to be prepared for varying temperatures throughout the day."
    ]
};

// Greeting responses
const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];

// Initialize the chat
function init() {
    sendButton.addEventListener('click', handleSendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
}

// Handle sending messages
function handleSendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    
    // Generate and add bot response
    setTimeout(() => {
        const botResponse = generateResponse(message);
        addMessage(botResponse, 'bot');
    }, 500);
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate bot response based on user input
function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (greetings.some(greeting => lowerMessage.includes(greeting))) {
        return "Hello! How can I help you with your travel plans today?";
    }
    
    // Check for destinations
    if (lowerMessage.includes('destination') || lowerMessage.includes('place') || 
        lowerMessage.includes('where') || lowerMessage.includes('visit') ||
        lowerMessage.includes('travel to')) {
        return getRandomResponse(responses.destinations);
    }
    
    // Check for hotels
    if (lowerMessage.includes('hotel') || lowerMessage.includes('stay') || 
        lowerMessage.includes('accommodation') || lowerMessage.includes('lodge')) {
        return getRandomResponse(responses.hotels);
    }
    
    // Check for flights
    if (lowerMessage.includes('flight') || lowerMessage.includes('fly') || 
        lowerMessage.includes('airline') || lowerMessage.includes('ticket')) {
        return getRandomResponse(responses.flights);
    }
    
    // Check for tips
    if (lowerMessage.includes('tip') || lowerMessage.includes('advice') || 
        lowerMessage.includes('suggest') || lowerMessage.includes('recommend')) {
        return getRandomResponse(responses.tips);
    }
    
    // Check for weather
    if (lowerMessage.includes('weather') || lowerMessage.includes('temperature') || 
        lowerMessage.includes('climate') || lowerMessage.includes('forecast')) {
        return getRandomResponse(responses.weather);
    }
    
    // Check for help
    if (lowerMessage.includes('help')) {
        return "I can help you with destinations, hotels, flights, travel tips, and weather information. What would you like to know?";
    }
    
    // Check for thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        return "You're welcome! Feel free to ask if you need any more travel assistance!";
    }
    
    // Default response
    return "I'm here to help with your travel plans! You can ask me about destinations, hotels, flights, travel tips, or weather. What would you like to know?";
}

// Get random response from array
function getRandomResponse(responseArray) {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
}

// Initialize the application
init();
