//CALLBACK

const fs = require("fs");
let x = "Algum texto";

//Callback Hell
fs.writeFile("teste.txt", x, () => {
	fs.writeFile("teste2.txt", x, () => {
		console.log("Escrita no arquivo 2 de " + x + " foi realizada com sucesso!");
	});
	console.log("Escrita no arquivo 1 de " + x + " foi realizada com sucesso!");
});

//Promisses
fs.writeFile("teste.txt", x)
	.then(() => {
		console.log("Escrita no arquivo 1 de " + x + " foi realizada com sucesso!");
		return fs.writeFile("teste2.txt", x);
	})
	.then(() => {
		console.log("Escrita no arquivo 2 de " + x + " foi realizada com sucesso!");
	})
	.catch((error) => {
		console.log(error);
	});

//Async/await

async function fAssinc() {
	try {
		await fs.writeFile("teste.txt", x);
		console.log("Escrita no arquivo 1 de " + x + " foi realizada com sucesso!");
		await fs.writeFile("teste2.txt", x);
		console.log("Escrita no arquivo 2 de " + x + " foi realizada com sucesso!");
	} catch (error) {
		console.log(error);
	}
}
