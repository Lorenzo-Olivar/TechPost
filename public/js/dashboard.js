const createPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#newPostTitle").value;
    const content = document.querySelector("#newPostContent").value;

    if (title && content) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to create post.");
        }
    }
}

document.querySelector('.dashForm').addEventListener('submit', createPost);