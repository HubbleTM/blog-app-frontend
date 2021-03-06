

const API_BASE_URL = "https://pwj-drakosi-blog-app.herokuapp.com";
const API_URL = `${API_BASE_URL}/api/posts`;

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((res) => {
        return res.json()
    }).then((data) => {
        buildPosts(data)
    })
}   

const buildPosts = (blogPosts) => {
    console.log(blogPosts)

    let blogPostContent = ''

    blogPosts.map((post) => {
        const postDate = new Date(parseInt(post.added_date)).toDateString()
        const postImage = `${API_BASE_URL}${post.post_image}`
        const postLink = `/post.html?id=${post.id}`
        blogPostContent += `
        <a class="post-link" href="${postLink}">
            <div class="post">
                <div class="post-image" style="background-image: url(${postImage})"></div>
                <div class="post-content">
                    <div class="post-date">${postDate}</div>
                    <div class="post-title">
                        <h4>${post.title}</h4>
                    </div>
                    <div class="post-text">${post.content}</div>
                </div>
            </div>
        </a>
        `
    })
    document.querySelector('.blog-posts-container').innerHTML = blogPostContent
}