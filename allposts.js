import { getPosts } from "./const.js";


async function renderList() {
    const list = await getPosts();
    const listAll = document.querySelector(".posts");
    const posts = list.slice(0, 10);
    const extra = list.slice(10, list.length);

    listAll.innerHTML = ``;

    for (let i = 0; i < posts.length; i++) {

        listAll.innerHTML +=
            `<a href="../singlepost.html?id=${posts[i].id}" id="link">
                    <div class="post-wrapper">
                        <img src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="Image of dessert" id="postimg">
                        <div id="post-text">
                            <h2>${posts[i].title.rendered}</h2>
                            <p>${posts[i].excerpt.rendered}</p>
                        </div>
                    </div>
                </a>`;

    }


    const loadMoreButton = document.querySelector('#load-more');
    const totalCount = list.length;

    loadMoreButton.addEventListener('click', () => {
        for (let i = 0; i < extra.length; i++) {

            if (posts.length < totalCount) {
                listAll.innerHTML +=
                    `<a href="../singlepost.html?id=${extra[i].id}">
                        <div class="post-wrapper">
                            <img src="${extra[i]._embedded["wp:featuredmedia"][0].source_url}" alt="Image of dessert" id="postimg">
                            <div id="post-text">
                                <h2>${extra[i].title.rendered}</h2>
                                <p>${extra[i].excerpt.rendered}</p>
                            </div>
                        </div>
                    </a>`;
            }

            if (totalCount) {
                loadMoreButton.style.display = "none";
            }

        }
    });

}
renderList();
