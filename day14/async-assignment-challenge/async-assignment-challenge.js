const output = document.querySelector("#output"); // div
const btnFetchPosts = document.querySelector("#fetchPosts"); // button
const inputPostIds = document.querySelector("#postIds"); // input

const clearOutput = () => {
  output.innerHTML = `<div id="output"></div>`;
};

const fetchPost = async (postId) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    if (!response.ok) throw new Error("에러 처리 동작 여부 확인")
    let post = await response.json();
    return post;
  } catch (error) {
    document.getElementById("output").innerHTML =
      `<p>에러: ${error.message}</p>`;
    return null;
  }
};

const fetchMultiplePosts = async (postIds) => {
  const posts = [];
  for (const postId of postIds) {
    const post = await fetchPost(postId);
    posts.push(post);
  }
  // posts 배열을 순회하며 post 정보 출력
  for (let i = 0; i < posts.length; i++) { // for in 사용시 index가 문자열로 나옴. => i+1 사용 번잡.

    // post element 생성
    const pEl = document.createElement("p");
    output.appendChild(pEl);
    pEl.classList.add("post");
    
    // success/error 에 따른 문구 생성
    if (posts[i] === null) {
      var postMessage = "유효한 ID(1-100)를 입력하세요!"; // let으로 선언할 경우 지역변수로 간주
      pEl.classList.add("error");
    } else {
      let title = posts[i].title;
      var postMessage = `post${i+1}: ${title}`;
    }

    // post element에 문구 추가
    pEl.textContent = postMessage;
  }
};

const handleClickSearch = async () => {
  btnFetchPosts.disabled = true;
  clearOutput();
  // inputPostIds에서 postIds 가져오기
  const postIds = inputPostIds.value.split(",").map(Number);
  await fetchMultiplePosts(postIds);
  btnFetchPosts.disabled = false;
};

btnFetchPosts.addEventListener("click", handleClickSearch);
