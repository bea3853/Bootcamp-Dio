/*receba um array e retorne ele 

casos contrario o erro será lançado.


Todo try precisa ter um catch*/



function validaArray(arr, num){
try{

if(!arr && !num) throw new ReferenceError("Enviei os parametros");

if(typeof arr !== 'object') throw new TypeError ("Array precisa ser do tipo object");

if(typeof num !== "number") throw new TypeError ("Array precisa ser do tipo Number");

if(arr.length !== num ) throw new RangeError ("Tamanho invalido");

return arr;

}

catch (e){
if(e instanceof ReferenceError){
console.log("Este erro é um Reference Error")
console.log(e.message)
}else if(e instanceof TypeError){
    console.log("Este erro é um TypeError ")
    console.log(e.message)
    }else if(e instanceof RangeError){
        console.log("Este erro é um RangerError")
        console.log(e.message)
        }else {
console.log (" Ocorreu um erro inesperado:" + e)

        }
     }

   }


console.log(validaArray([2,3,3,5,2],5))



