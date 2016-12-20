angular.module("hangmanApp")
.controller('HangmanController',HangmanController);



function HangmanController(){
	var vm = this;
	vm.game= new HangmanGame('elephant');
	
	vm.guessLetter = function(){
		vm.game.guess(vm.guess);
		vm.guess = "";
	};

}