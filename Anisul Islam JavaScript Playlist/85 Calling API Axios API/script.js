
// 3rd June, 2024

// https://jsonplaceholder.typicode.com/posts/1
console.clear();

// using AXIOS API with GET method
axios
    .get(' https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

//  Using AXIOS API to get all data 

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res.data));


// Using AXIOS API to create new data resource - POST

axios
    .post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foofoo',
            body: 'barmar',
            userId: 1,
        })
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

// Using AXIOS API to PATCH Data - Patch

axios
    .patch('https://jsonplaceholder.typicode.com/posts/1', {
        body: JSON.stringify({
            title: 'Patched API Data'
        })
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

// Using AXIOS API to Delete a Data - Delete

axios
    .delete('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

//   =================================

// Using AXIOS API with Async Await to get data

console.clear();

const makeRequest = async (config) => {
    return await axios(config)
}

// 
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res.data))
}

getData();

//   =================================

// Using AXIOS API with Async Await to Create New Data Data - POST

const createData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'post',
        data: JSON.stringify({
            title: 'New Data Using Asyn Await',
            body: 'bar',
            userId: 1,
        })
    })
        .then((res) => console.log(res.data))
}
createData();




