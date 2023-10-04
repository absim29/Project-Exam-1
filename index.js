import { getPosts } from "./const.js";


async function renderPostsList() {
    const posts = await getPosts();
    const postsList = document.querySelector(".carousel-wrapper");

    postsList.innerHTML = '';
    posts.forEach(post => {
        postsList.innerHTML +=
            `<div class="post">
                    <a href="../singlepost.html?id=${post.id}">
                        <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="Image of dessert" id="carousel-image">
                        <h2>${post.title.rendered}</h2>
                    </a>
                </div>`;

    });

}
renderPostsList();



const carouselContainer = document.querySelectorAll('.carousel-wrapper');
const nextButton = document.querySelectorAll('.next');
const prevButton = document.querySelectorAll('.prev');

carouselContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    prevButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});
