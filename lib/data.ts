type Post = {
    id: string
    title: string
    desc: string
    date: string
}

// let posts: Post[] = 
// [
//     {
//         "id": "1",
//         "title": "string",
//         "desc": "string",
//         "date": "2024-04-02"
//     },
//     {
//         "id": "2",
//         "title": "string",
//         "desc": "string",
//         "date": "2024-04-02"
//     }
// ];

export const users = "https://jsonplaceholder.typicode.com/users";
export const posts = "https://jsonplaceholder.typicode.com/posts"

//handlers
export const getPosts = () => posts;

// export const addPost = (post: Post) => {
//     posts.push(post);
// }

// export const deletePost = (id: string) => {
//     posts = posts.filter((post) => post.id !== id);
// }

// export const updatePost = (id: string, title: string, desc: string) => {
//     const post = posts.find((post) => post.id === id);

//     if (post) {
//         post.title = title;
//         post.desc = desc;
//     }else{
//         throw new Error("POST Not found");
//     }
// }

// export const getPostById = (id: string) => {
//     return posts.find((post) => post.id === id);
// }