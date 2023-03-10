let btn = document.querySelector('#btn');
let div = document.querySelector('#quote');

btn.addEventListener('click', myFunc);

async function myFunc(){
   const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'caa13812a9msh52abc25e0430024p1a2b7cjsn3235412aff85',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
let response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
let quoteRes = await response.json();
    console.log(quoteRes);
    div.innerHTML = quoteRes.content;
}


