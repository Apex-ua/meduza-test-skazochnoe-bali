var names = ['Полноводная Миссисипи','Промышленный Тольятти', 'Знаменитое Ватерлоо', 'Солнечные Салоники', 'Загадочное Марокко', 'Восстановленное Сараево',
	'Опасная Лимпопо', 'Труднодоступная Юнгфрау'];
	
var labelName = document.getElementById('answerLabel'),
	inputVal = document.getElementById('answer'),
	checkButton = document.getElementById('checkAnswer'),
	nextButton = document.getElementById('next')
	questionDiv = document.getElementById('question'),
	sumPoints = document.getElementById('summary'),
	n = 0,
	points = 0;
	
var startButton = document.getElementById('startButton'),
	startText = document.getElementById('start');


startButton.onclick = function() {
	start.style.display = "none";
	questionDiv.style.display = "block";
	inputVal.focus();
}	
	
	
function hide(input){
	var firstWord = input.split(' ')[0],
		secondWord = input.split(' ')[1],
		hiddenEnding = firstWord.slice(0,firstWord.length-2),
		hiddenLetters = firstWord.slice(firstWord.length-2,firstWord.length)
		show = hiddenEnding + '** ' + secondWord;
	return [show,hiddenLetters];
}	

nextButton.disabled = true;



function summary (points){
	if(points <= 3)
		return('Твоя моя.. Не понимаю!!! Вы ничего не понимаете в окончаний');
	else if (points > 3 &&  points < 8){
		return('Тольятти - он, а Лимпопо - она. Наверное');
	}else if (points == 8){
		return('Розенталь вами гордится!');
	}
}

function fill(){
	labelName.innerHTML = hide(names[n])[0];
	inputVal.value = '';
	labelName.style.color = 'black';
};
fill();

checkButton.onclick = function() {
	var rightValue = hide(names[n])[1];
	if (inputVal.value == rightValue){
		console.log('yeeep!')
		questionDiv.style.borderColor = "green";
		points++;
	}
	else{
		console.log('nooo!')
		questionDiv.style.borderColor = "red";
	}
	labelName.innerHTML = names[n];
	nextButton.disabled = false;
	checkButton.disabled = true;
	
};

nextButton.onclick = function() {
	if(n < names.length-1){
		n++;
		fill()
		nextButton.disabled = true;
		checkButton.disabled = false;
		questionDiv.style.borderColor = "black";
		inputVal.focus();
	}else{
		inputVal.style.display = "none";
		nextButton.style.display = "none";
		checkButton.style.display = "none";
		questionDiv.style.borderColor = "black";
		labelName.innerHTML = summary(points);
		sumPoints.style.display = "block";
		sumPoints.innerHTML = points + '/' + names.length;
	}
};
