(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/*! exports provided: plus, minus, showDropdown_visiters, apply, clears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDropdown_visiters", function() { return showDropdown_visiters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clears", function() { return clears; });
//dropdown visiters
function plus(b) {
		var a = document.getElementsByClassName("tablo")[b].innerHTML;
		a++;
		if(a == 1){
			document.getElementsByClassName("minus")[b].style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementsByClassName("minus")[b].style.border = '1px solid rgba(31, 32, 65, 0.5)';
			
			if(b < 2){
				document.getElementsByClassName("button__reset")[0].style.display = 'inline-block';
			}else{
				document.getElementsByClassName("button__reset")[1].style.display = 'inline-block';
			}
		}
		document.getElementsByClassName("tablo")[b].innerHTML= a;
	}

function minus(b) {
		var a = document.getElementsByClassName("tablo")[b].innerHTML;
		if(a > 0){
			a--;
		}
		if(a == 0){
			document.getElementsByClassName("minus")[b].style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementsByClassName("minus")[b].style.border = '1px solid rgba(31, 32, 65, 0.25)';
			if(b < 2){
				document.getElementsByClassName("button__reset")[0].style.display = 'none';
			}else{
				document.getElementsByClassName("button__reset")[1].style.display = 'none';
			}

		}
		document.getElementsByClassName("tablo")[b].innerHTML= a;
	}

function showDropdown_visiters(){
		var item = document.getElementsByClassName('input__list_visiters')[0];
		if (item.style.display == "none"){
			item.style.display = "inline-block";
		}else{
			item.style.display = "none";
		}
	}

function apply(){
	var num_one = Number(document.getElementsByClassName('tablo')[0].innerHTML);
	var num_two = Number(document.getElementsByClassName('tablo')[1].innerHTML);
	var num_three = Number(document.getElementsByClassName('tablo')[2].innerHTML);
	var name;
	var number = num_one + num_two + num_three;
	if (number == 0){
		name = "гостей"
	}else if(number == 1){
		name = "гость"
	}else{
		name = "гостя"
	}
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = number + " " + name;
}

function clears(){
	document.getElementsByClassName('tablo')[0].innerHTML = "0";
	document.getElementsByClassName('tablo')[1].innerHTML = "0";
	document.getElementsByClassName('tablo')[2].innerHTML = "0";
	document.getElementsByClassName('dropdown__list_visiters')[0].innerHTML = "0";
}



/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map