// Add the following JavaScript for a simple comment section

document.addEventListener('DOMContentLoaded', function () {
    const commentSection = document.getElementById('comments');

    // Function to add a new comment
    function addComment(username, comment) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const userPara = document.createElement('p');
        userPara.textContent = `User: ${username}`;

        const commentPara = document.createElement('p');
        commentPara.textContent = comment;

        commentDiv.appendChild(userPara);
        commentDiv.appendChild(commentPara);

        commentSection.appendChild(commentDiv);
    }

    // Example comments
    addComment('JohnDoe', 'This transistor radio changed my life!');
    addComment('RadioFanatic', 'Fantastic product!');

    // Function to handle the comment submission
    document.getElementById('commentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const comment = document.getElementById('commentText').value;

        if (username && comment) {
            addComment(username, comment);
            // Clear the form after submission
            document.getElementById('commentForm').reset();
        }
    });
});
