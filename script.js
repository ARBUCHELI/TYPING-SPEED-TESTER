var textElement = document.getElementById('text');
var inputField = document.getElementById('input-field');
var characterCountElement = document.getElementById('character-count');
var timerElement = document.getElementById('timer');
var resetButton = document.getElementById('reset-btn');

var timerInterval;
var startTime;
var elapsedTime = 0;
var typingTimer;
var typingDelay = 1000; // 1 second delay

inputField.addEventListener('input', handleTyping);

resetButton.addEventListener('click', resetTimer);

function handleTyping() {
  if (inputField.value === '') {
    stopTimer();
    clearTimeout(typingTimer);
    return;
  }

  if (!timerInterval) {
    if (!startTime) {
      startTime = new Date().getTime();
    }
    
    startTimer();
  }

  updateCharacterCount();
  clearTimeout(typingTimer);
  typingTimer = setTimeout(stopTimer, typingDelay);
}

function startTimer() {
  if (!timerInterval) {
    resetButton.disabled = false;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimer() {
  elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
  timerElement.textContent = 'Seconds: ' + elapsedTime;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timerElement.textContent = 'Seconds: 0';
  inputField.value = '';
  updateCharacterCount();
  startTime = null;
  resetButton.disabled = true;
}

function updateCharacterCount() {
  var inputText = inputField.value;
  var characterCount = inputText.length;
  characterCountElement.textContent = 'Character count: ' + characterCount;
}




