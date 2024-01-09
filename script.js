console.log("123");
/* https://api.nasa.gov/ */

async function myAsync(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
const body = document.querySelector('body');
const url = 'https://dog.ceo/api/breeds/image/random';
let myData = [];

try {
    for (let i = 0; i < 10; i++) {
        myData.push(await myAsync(url));
    };
    console.log(myData);
    for (let i = 0; i < 10; i++) {
        setTimeout(draw, i * 3000, myData[i].message);
    };
    
} catch (error) {
	console.log(error.message);
}

function draw(data){
    body.insertAdjacentHTML(
        'beforeend',
        `
            <figure>
                <img src="${data}" />
            </figure>
        `
    );
}

