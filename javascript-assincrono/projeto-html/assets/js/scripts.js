const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //  API  de c=gatos atribuida a BASE_URL

const catBtn = document.getElementById('change-cat')
const catImg = document.getElementById ('cat');

const getCats = async () => {  //  função assincrona assync 
	try {
		const data = await fetch(BASE_URL); // o método fetch retona uma promisse
		const json = await data.json();
		return json.webpurl;  // a imagem é comprimida 
	} catch (e) { // mostrando a mensagem do erro o console
		console.log(e.message);
	}
};


// a função do await tem a função de pausar e esperar pelo retorno da Promise , 
//e resume a execução da função async quando o valor da Promise é resolvido

const loadImg = async () => {
catImg.src = await getCats();
};


catBtn.addEventListener('click', loadImg);

loadImg();