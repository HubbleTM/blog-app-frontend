/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_BASE_URL = "https://pwj-drakosi-blog-app.herokuapp.com";
const API_URL = `${API_BASE_URL}/api/posts/`;

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id')
}

const getPost = () => {
    // CODE GOES HERE
    const fullUrl = `${API_URL}${getPostIdParam()}`

    fetch(fullUrl, {
        method: 'GET'
    }).then((res) => {
        return res.json()
    }).then((data) => {
        buildPost(data)
    })

}

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string 
    const postDate = new Date(parseInt(data.added_date)).toDateString()
    const postImage = `${API_BASE_URL}${data.post_image}`

    const postHtml = `
        <div class="post-container">
            <div id="individual-post-title">${data.title}</div>
            <div id="individual-post-date">Published on ${postDate}</div>
            <div id="individual-post-content">${data.content}</div>
        </div>
    `
    document.getElementById('individual-post-container').innerHTML = postHtml

    document.querySelector('header').style.backgroundImage = `url(${postImage})`
}

