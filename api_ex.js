
// const baseURL = "https://jsonplaceholder.typicode.com/";
// const endpoint = "todo";
// const endpointUsers = "users";
// const fullURLEndpoint = baseURL + endpoint;
// //https://jsonplaceholder.typicode.com/users

// function fetchData(_endpointResource) {
//     const endpointResource = _endpointResource;
//     const baseURL = "https://jsonplaceholder.typicode.com/";
//     fetch(baseURL + endpointResource)
//     .then((response) => response.json()
//     .then((data) => displayData(data))
//     );
//     const displayData = _data => {
//         _data.forEach(todos => {
//             console.log(todos.title)
//         });;
//     }
// }

// fetchData('todos')

//A better method; more readable :
const BASE_URL = "https://freetestapi.com/api/v1/"; 
const fetchData = async (endpointResource) => { 
    try { const response = await fetch(`${BASE_URL}${endpointResource}`); 
    if (!response.ok) { throw new Error(`Network response was not ok: ${response.statusText}`); } 
    const data = await response.json();
    displayData(data); } 
    catch (error) { console.error(`Error fetching data from ${endpointResource}:`, error); } }; 
    const displayData = (data) => { 
        data.forEach(cat => {
            console.log(cat.name + cat.description)
        });
       console.log(data)
}; 
//fetchData("albums"); 
fetchData("cats"); //fetchData("todos/1"); //fetchData("albums"); fetchData("comments");