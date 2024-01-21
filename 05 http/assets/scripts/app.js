const listEl = document.querySelector(".posts");
const postTemplate = document.querySelector("#single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");

function _sendHttpRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error(`Something went wrong: CODE ${xhr.status}`));
            }
        };
        xhr.onerror = () => reject(xhr.response);

        xhr.send(JSON.stringify(data));
    });
}

function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method,
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }

        return response.json().then((errorData) => {
            console.log(errorData);
            throw new Error(`Something went wrong: CODE ${response.status}`);
        });
    });
}

async function fetchPosts() {
    let response;
    try {
        response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response);
    } catch (error) {
        alert(error.message);
        return;
    }
    const listOfPosts = response.data;

    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector("li").id = post.id;
        listEl.append(postEl);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId,
    };

    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        post
    );
    console.log(response);
}

fetchButton.addEventListener("click", () => {
    listEl.innerHTML = "";
    fetchPosts();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector("#title").value;
    const enteredContent = event.currentTarget.querySelector("#content").value;

    createPost(enteredTitle, enteredContent);
    form.reset();
});

listEl.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const post = event.target.closest("li");
        const postId = post.id;

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        post.remove();
    }
});
