function search() {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const blogItems = document.getElementById("posts");
    const blog = document.querySelectorAll("#link");
    const blogName = blogItems.getElementsByTagName("h2");

    for (var i = 0; i < blogName.length; i++) {
        let match = blog[i].getElementsByTagName('h2')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML
            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                blog[i].style.display = "";

            } else {
                blog[i].style.display = "none";
            }
        }
    }
}

