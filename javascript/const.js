const allPosts = 'https://cors.noroff.dev/www.sweet-treats.no/wp-json/wp/v2/posts';


export async function getPosts() {
    try {
        const response = await fetch(allPosts + "?per_page=16&_embed");
        const blogposts = await response.json();
        return blogposts;
    }
    catch (error) {
        console.error({ error: 'An error has occured in the fetch api' })
    }
}
getPosts();