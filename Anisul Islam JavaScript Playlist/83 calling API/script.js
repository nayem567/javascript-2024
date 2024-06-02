
// 2nd June , 2024


console.clear();

// Calling API
fetch('https://jsonplaceholder.typicode.com/posts')
    // Converting API to JSON Format
    .then((res) => res.json())
    .then((res) => console.log(res)
    );

// ------------------------------------------------

// Catching Error
// fetch('https://jsonplaceholder.typicode.com/post')
//     .then((res) => {
//         if (!res.ok) {
//             const message = `Error is on : ${res.status}`;
//             throw new Error(message);
//         }
//         return res.json()
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// ------------------------------------------------

// Creating A New Resource in API using POST

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
})
.then((res) => res.json())
.then((err) => console.log(err));

// Updating Resource in API using PUT method

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        id: 1,
        title:'foomaa',
        body: 'barmaa',
        userId: 1
    })
})
.then((res) => res.json())
.then((res) => console.log(res));

// Deleting a resosurce

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then((res) => res.json())
.then((res) => console.log(res));

// ============================================
// ============================================

