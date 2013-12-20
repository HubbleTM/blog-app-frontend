/**
 * TODO: Finish submitNewPost function to submit form data to the API 
 */

const API_URL = "https://pwj-drakosi-blog-app.herokuapp.com/api/posts";

const submitNewPost = () => {
    // HINT: Use FormData to store data to send over
    // HINT: Redirect the user to home page after successful submission
    const postTitle = document.getElementById('form-post-title').value
    const postContent = document.getElementById('form-post-content').value
    const postTSSTring = Date.now()
    const postImageInput = document.getElementById('form-post-image')

    let data = new FormData();
    data.append('post-image', postImageInput.files[0])
    data.append('title', postTitle)
    data.append('content', postContent)

    const submitPost = fetch(API_URL, {
        method: 'POST',
        body: data
    }).then(() => {
        alert('Success!')

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 1000)
    })
}