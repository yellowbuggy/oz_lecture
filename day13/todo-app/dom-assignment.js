
// 과제: 
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');
const taskCount = document.getElementById('taskCount');
const priority = document.getElementById('priority');

// 할 일 개수 업데이트 함수
function updateTaskCount() {
    var totalCount = taskList.childElementCount;
    var checkedCount = document.querySelectorAll('#taskList input[type="checkbox"]:checked').length;
    var count = totalCount - checkedCount;
    taskCount.innerText = `현재 할 일: ${count}개`;
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();

    // 입력값이 비어있는지 확인
    if (taskInput.value === "") {
        alert("할 일을 입력해주세요!");
    }
    else {
        // 새로운 리스트 아이템 생성
        const taskItemEl = document.createElement("li");
        taskItemEl.classList.add("task-item");
    
        // 할 일 텍스트 추가
        const taskItemTextEl = document.createElement("span");
        taskItemTextEl.innerText = taskText;
        taskItemTextEl.classList.add("input-text");
        
        // 우선순위 글씨 색 추가
        if (priority.value === "high") {
            taskItemTextEl.style.color = "red";
        }

        // 삭제 버튼 생성
        const deleteButtonEl = document.createElement("button");
        deleteButtonEl.innerText = "삭제";
        deleteButtonEl.classList.add("delete-button");
    
        // 삭제 버튼 이벤트 리스너
        deleteButtonEl.addEventListener("click", function() {
            taskItemEl.remove();
            updateTaskCount();
        })
        // 완료 상태 토글 생성
        const completeCheckboxEl = document.createElement("input");
        completeCheckboxEl.setAttribute("type", "checkbox");
    
        // 완료 상태 토글 이벤트 리스너
        taskItemEl.addEventListener("click", function() {
            taskItemTextEl.classList.toggle("completed");
            completeCheckboxEl.checked = !completeCheckboxEl.checked;
            updateTaskCount();
        });

        // 중복 체크박스 활성화 풀기
        completeCheckboxEl.addEventListener("click", function() {
            completeCheckboxEl.checked = !completeCheckboxEl.checked;
        });

        // 요소 조립
        taskItemEl.appendChild(completeCheckboxEl);
        taskItemEl.appendChild(taskItemTextEl);
        taskItemEl.appendChild(deleteButtonEl);
        taskList.appendChild(taskItemEl);
    
    
        // 입력창 초기화
        taskInput.value = "";

        // 할 일 개수 없데이트
        updateTaskCount();
    }
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    taskList.replaceChildren();
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.isComposing) {
        addTask();
    }
})

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);
clearButton.addEventListener("click", updateTaskCount);
