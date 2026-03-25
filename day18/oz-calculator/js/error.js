// 에러 처리 함수
const showError = (message) => {
  const resultElement = document.getElementById("result");
  // 기능 구현
  resultElement.classList.remove("d-none", "alert-info");
  resultElement.classList.add("alert-danger");
  resultElement.textContent = `에러: ${message}`;
};

const removeError = () => {
  const resultElement = document.getElementById("result");
  // 기능 구현
  resultElement.classList.remove("alert-danger", "alert-info");
  resultElement.classList.add("d-none");
  resultElement.textContent = "";
};

export { showError, removeError };
