//Neste exercicio estamos fazendo a multiplicação de uma array com o map, sendo assim, estamos criando um objeto e neste objeto vamamos criar um map com onde assim vamos pegar este item e multiplicar."

const maca = {
	value: 2,
}

const laranja = {
	value: 3
}

function mapComThis(arr, thisArg){
	return arr.map(function(item){
		return item * this.value;
	}, thisArg);
}

const nums = [1,2];

console.log('this -> maça', mapComThis(nums, maca));

console.log('this -> maça', mapComThis(nums, laranja));


