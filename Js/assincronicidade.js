/*
assincrono - algo que não ocorre ao mesmo tempo.

sincrono - ocorre em um momento especifico.

no JS:

sincrono -  corre um de cada vez

assincrono  -  ocorre varias coisas em momentos diferentes e ao mesmo tempo

-------------------//---------------------------


Promisses
Objeto de processamento assincrono

inicialmente seu valor é desconhcido. ela pode 
então ser resolvida ou rejeitada 


A promisse tem 3  estados 

1 - Peding - pendente 
2 - Fulfilled - resolvido
3 - Rejected - rejeitado 



Estrutura de uma promisse 

const myPromisse =  new Promisse((resolve, reject)=>{
window.setTimeout(()=>{
    resolve(console.log("Resolvida!"));
},2000 )
});

// quando receber a promisse, depois de 2 segundos(2000), é que vou receber o log de resolvida



Para pegaro resultado precisa utilizar a palavra await 

await myPromisse 
.then((result)=> result +'Passando pelo then')
.then((result)=> result +'E agora acabou')
.catch((err) => console.log(err.message)); 

await -  foi criado para lidar com promisses
"espera essa promisse resolver, é isso que ela faz"
Sempre que uilizamos uma promisses precisamos utilizar um await
com o await é possivel utilizar a função assync - assincronicidade 


"o resultado de uma promisse vai ser outra promisse"

try - o resultado que espera que aconteça

catch -  vai mostrar o erro








*/