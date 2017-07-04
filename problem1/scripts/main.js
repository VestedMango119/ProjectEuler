
function start(){
}

$(document).ready(start);
//hides the answers box when the page is loaded.
$('.answers').hide();
$('.another').hide();

var input;
var threes; 
var fives;
var threefive;
var sequence;
var totalcount;
var totalmultiple;
//when the submit button is clicked, the value entered 
//in the input box is stored as the variable 'input'
$('.submit').on('click', function(){
	input = $(".input").val();
	$('.submit').hide();
	$('.input').hide();
	$('.another').show();

	//displays in 'Your number:'
	multipleCount(input);
	makeSequence();
	sumSequence();
	display();
	$('.answers').show();
});

$('.another').on('click',function(){
	$('.answers').hide();
	$('.submit').show();
	$('.input').show();
	$('.another').hide();
	delete input, threes, fives, threefive, sequence, totalcount, totalmultiple;


});

function display(){
	$('.number-orig').html('<p> Your number: </p>' + input);
	$('.multiple-count').html('<p> Number of multiples: </p>' + totalcount);
	$('.sequence').html('<p> Sequence of multiples: </p>' + sequence.join(", "));
	$('.sum').html('<p> Sum of multiples: </p>' + totalmultiple);
	}

function multipleCount(){
	threes = (input-(input%3))/3;
	fives = (input-(input%5))/5;
	threefive = (input - (input%15))/15;
	totalcount = threes+fives - threefive;
}

function makeSequence(){
	sequence =[];
	
	/*
	//find an array for each group, fives, threes and fifteens. Then remove extra fifteens
	//Follows similar logic to multipleCount()

	//var threeadd = [];
	//var fiveadd = [];
	//var tfadd=[];
	for(var i1 = 1; i1<=threes; i1++ ){
		threeadd.push(i1*3);
		sequence.push(i1*3);
	}
	for (var j1 = 1; j1<=fives; j1++){
		fiveadd.push(j1*5);
		var indexfive = sequence.indexOf(j1*5);
		if(indexfive<0){sequence.push(j1*5);}


	}
	for (var k1=1; k1<=threefive; k1++){
		tfadd.push(k1*15);
		var indextf = sequence.indexOf(k1*15);
		if(indextf<0){sequence.push(k1*15);}
	}
	sequence.sort(sortSequence);
	var last = sequence[sequence.length-1];
	if(parseInt(last)===parseInt(input)){
		sequence.pop();
	}*/

	/*
	//below doesn't work

	if(tfadd.length){
		for(i=1;i<=threes; i++ ){
			for(j=1;j<=fives; j++){
				if(threeadd[i] ===fiveadd[j]){
					var index = sequence.indexOf(fiveadd[j]);
					sequence.splice(index,1);
				}
			}
		}
	}*/
	for (var i=1; i<input; i++){
		if(i%3===0||i%5===0){
			sequence.push(i);
		}
	}
}

function sortSequence(a, b){
	return a- b;
}

function sumSequence(){
	totalmultiple=0;
	for(var i=0; i<=sequence.length-1; i++){
		totalmultiple += parseInt(sequence[i]);
	}
}

