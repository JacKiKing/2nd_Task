//dropdown visiters
plus_old.onclick = function plus() {

		var a = document.getElementsByClassName("tablo")[0].innerHTML;
		a++;
		if(a == 1){
			document.getElementsByClassName("minus")[0].style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementsByClassName("minus")[0].style.border = '1px solid rgba(31, 32, 65, 0.5)';
			
		}
		document.getElementsByClassName("tablo")[0].innerHTML= a;
	}

plus_child.onclick = function plus1() {
	var a = document.getElementsByClassName("tablo")[1].innerHTML;
	a++;
	if(a == 1){
		document.getElementsByClassName("minus")[1].style.color = 'rgba(31, 32, 65, 0.5)';
		document.getElementsByClassName("minus")[1].style.border = '1px solid rgba(31, 32, 65, 0.5)';
		
	}
	document.getElementsByClassName("tablo")[1].innerHTML= a;
}

plus_baby.onclick = function plus2() {
	var a = document.getElementsByClassName("tablo")[2].innerHTML;
	a++;
	if(a == 1){
		document.getElementsByClassName("minus")[2].style.color = 'rgba(31, 32, 65, 0.5)';
		document.getElementsByClassName("minus")[2].style.border = '1px solid rgba(31, 32, 65, 0.5)';
		
	}
	document.getElementsByClassName("tablo")[2].innerHTML= a;
}

minus_old.onclick = function minus() {
	var a = document.getElementsByClassName("tablo")[0].innerHTML;
	if(a > 0){
		a--;
	}
	if(a == 0){
		document.getElementsByClassName("minus")[0].style.color = 'rgba(31, 32, 65, 0.25)';
		document.getElementsByClassName("minus")[0].style.border = '1px solid rgba(31, 32, 65, 0.25)';
	}else{
		document.getElementsByClassName("minus")[0].style.color = 'rgba(31, 32, 65, 0.5)';
		document.getElementsByClassName("minus")[0].style.border = '1px solid rgba(31, 32, 65, 0.5)';
	}
	document.getElementsByClassName("tablo")[0].innerHTML= a;
}

minus_child.onclick = function minus1() {
	var a = document.getElementsByClassName("tablo")[1].innerHTML;
	if(a > 0){
		a--;
	}
	if(a == 0){
		document.getElementsByClassName("minus")[1].style.color = 'rgba(31, 32, 65, 0.25)';
		document.getElementsByClassName("minus")[1].style.border = '1px solid rgba(31, 32, 65, 0.25)';
	}else{
		document.getElementsByClassName("minus")[1].style.color = 'rgba(31, 32, 65, 0.5)';
		document.getElementsByClassName("minus")[1].style.border = '1px solid rgba(31, 32, 65, 0.5)';
	}
	document.getElementsByClassName("tablo")[1].innerHTML= a;
}

minus_baby.onclick = function minus2() {
	var a = document.getElementsByClassName("tablo")[2].innerHTML;
	if(a > 0){
		a--;
	}
	if(a == 0){
		document.getElementsByClassName("minus")[2].style.color = 'rgba(31, 32, 65, 0.25)';
		document.getElementsByClassName("minus")[2].style.border = '1px solid rgba(31, 32, 65, 0.25)';
	}else{
		document.getElementsByClassName("minus")[2].style.color = 'rgba(31, 32, 65, 0.5)';
		document.getElementsByClassName("minus")[2].style.border = '1px solid rgba(31, 32, 65, 0.5)';
	}
	document.getElementsByClassName("tablo")[2].innerHTML= a;
}

elem.onclick = function Show_dropbox(){
		var item = document.getElementsByClassName('input__list_visiters')[0];
		var pickcher = document.getElementsByClassName('dropdown__list-container-viewButton')[0];
		if (item.style.display == "none"){
			item.style.display = "inline-block";
			pickcher.style.rotate = "180deg";
		}else{
			item.style.display = "none";
			pickcher.style.rotate = "360deg";
		}
	}

ok.onclick = function apply(){
	var num_one = Number(document.getElementsByClassName('tablo')[0].innerHTML);
	var num_two = Number(document.getElementsByClassName('tablo')[1].innerHTML);
	var num_three = Number(document.getElementsByClassName('tablo')[2].innerHTML);
	var name;
	var number = num_one + num_two + num_three;
	if (number == 0){
		name = "гостей"
	}else if(number == 1 ){
		name = "гость"
	}else if(number > 1 && number < 5){
		name = "гостя"
	}else{
		name = "гостей"
	}
	if (number > 0){document.getElementsByClassName('button__reset')[0].style.display = "inline"}
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = number + " " + name;
}

reset.onclick =function clears(){
	document.getElementsByClassName('tablo')[0].innerHTML = "0";
	document.getElementsByClassName('tablo')[1].innerHTML = "0";
	document.getElementsByClassName('tablo')[2].innerHTML = "0";
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = "Введите количество гостей";
}

