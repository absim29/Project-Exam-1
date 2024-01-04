const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const singlePost = 'http://sweet-treats.local/wp-json/wp/v2/posts/' + id + '?_embed';



export async function getSinglePost() {
    try {
        const answer = await fetch(singlePost);
        const result = await answer.json();
        return result;
    }
    catch (error) {
        console.error({ error: 'An error has occurred in the fetch api' })
    }

}
getSinglePost();



async function createHtml() {
    const post = await getSinglePost();
    const singlePost = document.querySelector(".single-wrapper");

    document.title = "Sweet Treats | " + post.title.rendered;

    singlePost.innerHTML = '';
    singlePost.innerHTML +=
        `<h1>${post.title.rendered}</h1>
            <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post.title.rendered}" id="singleimg">
            <div id="myModal" class="modal">
                <img class="modal-content" id="img" alt="${post.title.rendered}>
                <div id="caption"></div>
            </div>
            <div id="singletext">${post.content.rendered}</div>`;


    var modal = document.getElementById("myModal");
    var img = document.getElementById("singleimg");
    var modalImg = document.getElementById("img")
    var captionText = document.getElementById("caption");

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerText = this.alt;
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
createHtml();


