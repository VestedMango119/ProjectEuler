
function start(){
}

$(document).ready(start);
//hides the answers box when the page is loaded.
$('.answers').hide();
$('.another').hide();

var input;
var sum=0;
var previous=1;
var current=2;
var sequence = [];
//only push even values (from current) to sequence

$('.submit').on('click', function(){
	input = $('.input').val();
	$('.submit').hide();
	$('.input').hide();
	$('.another').show();

	//evenFib();
	fib();
	sumEven();
	display();
	$('.answers').show();
});

$('.submit-two').on('click', function(){
	input = $('.input').val();
	$('.submit').hide();
	$('.input').hide();
	$('.another').show();

	//evenFib();
	fibFull();
	sumEven();
	display();
	$('.answers').show();
});

function fib(){
	sequence = [];
	sequence.push(2);
	var temp;
	current = 2;
	previous = 1;
	do{
		if((temp%2)===0){
			sequence.push(current);
			temp = previous + current;
			previous = current;
			current = temp;
		}else{
			temp = previous + current;
			previous = current;
			current = temp;
		}
	}while(current<input);
	var last = sequence[sequence.length-1];
	if (last > input){
		sequence.pop();
	}
}

function fibFull(){
	sequence = [];
	var temp;
	current = 2;
	previous = 1;
	do{
			sequence.push(current);
			temp = previous + current;
			previous = current;
			current = temp;
	}while(current<input);
	var last = sequence[sequence.length-1];
	if (last > input){
		sequence.pop();
	}
}



function sumEven(){
	sum = 0;
	for(var i =0; i<sequence.length; i++){
		sum = sum + sequence[i];
	}
}

$('.another').on('click', function(){
	$('.another').hide();
	$('.input').show();
	$('.submit').show();
	$('.answers').hide();
	delete sum, current, previous, temp, next;
	sequence = [];


});

function display(){
	$('.limit').html("<p> Your limit: </p>" + input);
	$('.sequence').html("<p>Sequence of even values: </p>" + sequence.join(", "));
	$('.even-sum').html("<p>Sum of even values: </p>" + sum);	
}