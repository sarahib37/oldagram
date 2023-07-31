const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

// define a variable for rendering of post linking it to the html main element

const mainSection = document.getElementById("main-section")

// define a function to load as soon as the window opens
window.addEventListener('load', renderPosts());

// the renderPosts function adds the html of the current post to the main section of the html
function renderPosts(){
    let currentPost = "";

    for (let i = 0; i < posts.length; i++){
        currentPost += htmlCode(posts[i]);
    }

    mainSection.innerHTML = currentPost;
}

const heartIcon = document.getElementById("heart-icon");
const likesAmount = document.getElementById("likes");
const imgPost = document.getElementById("img-post");
let likeNumber = likesAmount.textContent;
let likesNumber = Number(likeNumber);
let liked = false;


// this function contains the html to be posted in the main which is then rendered using the renderPosts() function
function htmlCode(post){
    const codeHTML = `
            <section class="user-info">
                <img src="${post.avatar}" class="render-avatar post-avatar">
                <div class="user-info2">
                    <h2>${post.name}</h2>
                    <p>${post.location}</p>
                </div>
            </section>
            <section class="post-section">
                <img src="${post.post}" class="img-post" id="img-post">
            </section>
            <section class="icon-section">
                <img src="images/icon-heart.png" alt="heart-icon" class="icon" onclick="likeImage()" id="heart-icon">
                <img src="images/icon-comment.png" alt="comment-icon" class="icon">
                <img src="images/icon-dm.png" alt="dm-icon" class="icon">
            </section>
            <section class="post-interaction">
                <h3> <span id="likes">${post.likes}</span> likes</h3>
                <div class="comment">
                    <h3>${post.username}</h3></h3>
                    <p id="comment">${post.comment}</p>
                </div>
            </section>
    `
    
    return codeHTML;
}

function likeCheck(currentPost) {

    if(heartIcon.src.includes("images/icon-heart.png")) {
        isLiked = false;
    } else {
        isLiked = true;
    }
}

function likesRender() {
    likesAmount.textContent = likesNumber;
}

function likeImage(currentPost){
    let likeStatus = currentPost.isLiked;
    if (likeStatus) {
        heartIcon.src = "images/icon-heart.png";
        currentPost.likes--
    } else {
        currentPost.likes++
        heartIcon.src = "images/index.png"
    }
    likeCheck();
    likesRender()
}

heartIcon.addEventListener("click", likeImage);
imgPost.addEventListener("dblclick", likeImage);