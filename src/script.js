console.log('Hello, world!');

fetch('/sample-data/last-30-days.json')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
});
