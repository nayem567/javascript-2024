
// 2nd June, 2024
// fetching API using Async Await

const makeRequest = async(url) =>{
    const res = await fetch(url);
    if(!res.ok){
        const message = `Error thrown by me : ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

getData();


// 'https://jsonplaceholder.typicode.com/posts'
