// let btn = document.querySelector('#btn');
// let div = document.querySelector('#quote');

// btn.addEventListener('click', myFunc);

// async function myFunc() {
//     fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
// }

// let btn = document.querySelector('#btn');
// let div = document.querySelector('#joke');
// btn.addEventListener('click', myFunc);
// async function myFunc() {
//     let category = 'animal'; 
//     let response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`); 
//      let parsedRes = await response.json(); 
//     console.log(parsedRes);
//     div.innerHTML = parsedRes.value;
// }



let div = document.querySelector('#joke');
btn.addEventListener('click', myFunc);


async function myFunc(){
    let response = await fetch('https://type.fit/api/quotes');
    let parsedRes = await response.json();
    console.log(parsedRes);
    div.innerHTML = parsedRes.body;
}

	





























// // fetch('https://instagram47.p.rapidapi.com/hashtag_search?hashtag=programming')
// //     .then(res => res.json())
// //     .then(data => console.log(data))

// let btn = document.querySelector("#btn");
// let randomnum = document.querySelector("#randomnum")

// btn.addEventListener ("click", myFunc);


// async function myFunc() {
//     // let options = 'ethiopian traditional cloth';
//     let response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/')
//     let parsedRes = await response.json();
//     randomnum.innerHTML = parsedRes.value;
// }




// // fetch('https://instagram47.p.rapidapi.com/hashtag_search?hashtag=programming', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err));

// fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
    
// //     `http://www.randomnumberapi.com/api/v1.0/randomstring = ${category}`







// //     const options = {
// //         method: 'GET',
// //         headers: {
// //             'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// //             'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
// //         }
// //     };
    
// //     fetch('https://instagram47.p.rapidapi.com/hashtag_search?hashtag=programming', options)
// //         .then(response => response.json())
// //         .then(response => console.log(response))
// //         .catch(err => console.error(err));