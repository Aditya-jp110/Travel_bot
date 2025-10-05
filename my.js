let currentPage = 1;
let uploadedPhoto = null;
let skipTimerInterval;

function startJourney() {
  goToPage(2);
  startSkipTimer();
}

function goToPage(pageNumber) {
  if (skipTimerInterval) clearInterval(skipTimerInterval);

  const currentPageElement = document.querySelector('.page.active');
  if (currentPageElement) {
    currentPageElement.style.opacity = '0';
    setTimeout(() => {
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
      });
      const newPage = document.getElementById(`page${pageNumber}`);
      newPage.style.display = 'block';
      newPage.classList.add('active');
      setTimeout(() => newPage.style.opacity = '1', 50);
    }, 200);
  } else {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');
  }

  currentPage = pageNumber;

  if (pageNumber === 2) {
    setTimeout(() => startSkipTimer(), 300);
  }
}

function startSkipTimer() {
  let timeLeft = 10;
  document.getElementById('skipTimer').textContent = timeLeft;
  document.getElementById('progressBar2').style.width = '0%';
  setTimeout(() => {
    document.getElementById('progressBar2').style.width = '100%';
  }, 100);

  skipTimerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('skipTimer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(skipTimerInterval);
      goToPage(3);
    }
  }, 1000);
}

function handleGalleryUpload() {
  clearInterval(skipTimerInterval);
  document.getElementById('galleryInput').click();
}

function handleCameraUpload() {
  clearInterval(skipTimerInterval);
  document.getElementById('cameraInput').click();
}

function processUpload(input, source) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      uploadedPhoto = { data: e.target.result, name: file.name, source: source, analyzed: false };
      const uploadSection = document.querySelector('#page2 .max-w-md');
      uploadSection.innerHTML = `
        <div class="text-center">
          <div class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-6 text-white">
            <div class="flex items-center justify-center space-x-3 mb-4">
              <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span class="text-lg font-medium">Analyzing your photo...</span>
            </div>
            <div class="w-48 mx-auto">
              <div class="bg-white/20 rounded-full h-2">
                <div class="bg-white rounded-full h-2 w-full transition-all duration-2000"></div>
              </div>
            </div>
          </div>
        </div>`;
      setTimeout(() => {
        analyzePhotoAndRespond(file.name);
        goToPage(3);
      }, 2500);
    };
    reader.readAsDataURL(file);
  }
}

function analyzePhotoAndRespond(fileName) {
  const lowerName = fileName.toLowerCase();
  let response = "";

  if (lowerName.includes('beach')) {
    response = "🏖️ This looks like a beautiful coastal destination!";
    uploadedPhoto.type = "coastal";
  } else if (lowerName.includes('mountain')) {
    response = "🏔️ A stunning mountain landscape!";
    uploadedPhoto.type = "mountain";
  } else {
    response = "🌍 What a fantastic travel photo!";
    uploadedPhoto.type = "general";
  }

  uploadedPhoto.analyzed = true;
  addChatMessage(response, 'bot');
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (message) {
    addChatMessage(message, 'user');
    input.value = '';
    setTimeout(() => {
      const responses = [
        "That sounds amazing! I'd recommend visiting in spring.",
        "Great idea! Make sure to pack comfortable shoes.",
        "Would you like recommendations for restaurants nearby?",
        "Upload a photo for more personalized advice!"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addChatMessage(randomResponse, 'bot');
    }, 1000);
  }
}

function addChatMessage(message, sender) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  if (sender === 'user') {
    messageDiv.className = 'bg-white/30 backdrop-blur-sm border-2 border-blue-300/60 rounded-2xl p-4 max-w-md ml-auto';
  } else {
    messageDiv.className = 'bg-white/20 backdrop-blur-sm border-2 border-purple-400/60 rounded-2xl p-4 max-w-md';
  }
  messageDiv.innerHTML = `<p class="text-white">${message}</p>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById('chatInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});
