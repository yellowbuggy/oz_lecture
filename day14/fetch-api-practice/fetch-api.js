async function createPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "새 게시물", body: "내용", userId: 1 })
    });
    let data = await response.json();
    console.log("생성된 게시물:", data);
  } catch (error) {
    console.log("에러:", error);
  }
} 
createPost();