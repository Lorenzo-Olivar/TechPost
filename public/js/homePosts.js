const openCommentSection = () => {
    const renderHTML = `
    <div class="input-group mb-3">
        <button class="btn commentBtn btn-outline-secondary">Post Comment</button>
        <input type="text" class="form-control comment" placeholder=". . ." aria-label="Example text with button addon"
            aria-describedby="button-addon1">
    </div>
    `;

    document.querySelector('.commentSection').innerHTML = renderHTML;
    const postComment = () => {
        const postDate = new Date().toLocaleDateString();
        const comment = document.querySelector('.comment').value;
        const renderHTML = `
        <div class="card">
            <div class="card-header">
                Posted on ${postDate}
            </div>
            <div class="card-body">
                <p class="card-text">
                ${comment}</p>
            </div>
        </div>
        `;
    
        document.querySelector('.commentSection').innerHTML = renderHTML;
    };
    document.querySelector('.commentBtn').addEventListener('click', postComment);
};
document.querySelector('.clickable').addEventListener('click', openCommentSection);
