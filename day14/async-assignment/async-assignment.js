const timerInput = document.querySelector("#timerInput"); // input
const startTimer = document.querySelector("#startTimer"); // button
const timerDisplay = document.querySelector("#timerDisplay"); // div
const endingMessage = "타이머 종료!";
const errorMessage = "유효한 숫자(1-10)를 입력하세요!";

const resetTimerInput = () => {
  // timerInput 초기화
  timerInput.value = "";
};

const resetTimerDisp = () => {
  // timerDisplay 초기화
  timerDisplay.innerHTML = "";
  timerDisplay.classList.remove("error");
  // timerDisplay.replaceChildren();
};

const showTimerSec = (sec) => {
  resetTimerDisp();
  // timerDisplay에 sec 표시
  timerDisplay.textContent = `타이머: ${sec} 초`;
};

const showTimerComplete = () => {
  resetTimerDisp();
  // timerDisplay에 타이머 종료 메세지 표시
  timerDisplay.textContent = endingMessage;
};

const showTimerError = (message) => {
  // timerDisplay에 오류 메세지 표시
  timerDisplay.textContent = message;
  timerDisplay.classList.add("error");
};

const processTimer = (sec) => {
  resetTimerInput();
  showTimerSec(sec);
  // 1초마다 반복되는 함수
  const timer = setInterval(() => {
    // 1초마다 sec 감소,
    sec -= 1;
    showTimerSec(sec);
    // sec이 0보다 크면 sec 표시
    if (sec === 0) {
      clearInterval(timer);
      // 타이머 종료 메세지 표시
      showTimerComplete();
    }
  }, 1000);
};

// 타이머 시작
function handleClickTimer() {
  try {
    // timer input에서 sec 가져오기
    let time = Number(timerInput.value.trim());
    if (isNaN(time) || time < 1 || time > 10) {
      throw new Error(errorMessage);
    }
    processTimer(time);
  } catch (error) {
    // 오류 메세지 출력
    showTimerError(error.message);
    resetTimerInput();
  }
}

// 이벤트
startTimer.addEventListener("click", handleClickTimer);
timerInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") handleClickTimer();
});