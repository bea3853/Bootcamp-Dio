// função usando this -  metodo map 



function fthis(array){



return array.map ((i) =>  item * this.value)
}



// função map sem this


function mapSemThis(arr){

return arr.map (function(item){
return item * 2;
});
}

const  nums = [2,6,35,5,4]

console.log (mapSemThis(nums))



// ----