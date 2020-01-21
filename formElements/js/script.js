	//Button plus, sub

	function plus_0() { 
		var a = document.getElementById("quantityBadroom_0").innerHTML;
		a++;
		document.getElementById("quantityBadroom_0").innerHTML= a;
		if(a == 1){
				document.getElementById("minus_0").style.color = 'rgba(31, 32, 65, 0.5)';
				document.getElementById("minus_0").style.border = '1px solid rgba(31, 32, 65, 0.5)';
			}
		 bedroom(a);
		 
	}

	function plus_1() { 
		var b = document.getElementById("quantityBadroom_1").innerHTML;
		b++;
		document.getElementById("quantityBadroom_1").innerHTML= b;
		if(b == 1){
			document.getElementById("minus_1").style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementById("minus_1").style.border = '1px solid rgba(31, 32, 65, 0.5)';
		}
		bed(b);
	}

	function plus_2() { 
		var c = document.getElementById("quantityBadroom_2").innerHTML;
		c++;
		document.getElementById("quantityBadroom_2").innerHTML= c;
		if(c == 1){
			document.getElementById("minus_2").style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementById("minus_2").style.border = '1px solid rgba(31, 32, 65, 0.5)';
		}	
		document.getElementById('costil_3').innerHTML= c + " ВК";
	}    

	function minus_0() { 
		var a = document.getElementById("quantityBadroom_0").innerHTML;
		if(a == 1) {
			document.getElementById("minus_0").style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementById("minus_0").style.border = '1px solid rgba(31, 32, 65, 0.25)';
		}
		if(a > 0){
			a--;
		}
		document.getElementById("quantityBadroom_0").innerHTML= a;
		bedroom(a);
	}

	function minus_1() { 
		var b = document.getElementById("quantityBadroom_1").innerHTML;
		if(b == 1) {
			document.getElementById("minus_1").style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementById("minus_1").style.border = '1px solid rgba(31, 32, 65, 0.25)';
		}		
		if(b > 0){
			b--;
		}
		document.getElementById("quantityBadroom_1").innerHTML= b;
		bed(b);
	}

	function minus_2() { 
		var c = document.getElementById("quantityBadroom_2").innerHTML;
		if(c == 1) {
			document.getElementById("minus_2").style.color = 'rgba(31, 32, 65, 0.25)';
			document.getElementById("minus_2").style.border = '1px solid rgba(31, 32, 65, 0.25)';
		}		
		if(c > 0){
			c--;
		}
		document.getElementById("quantityBadroom_2").innerHTML= c;
		document.getElementById('costil_3').innerHTML= c + " ВК";
	}
// other

	function showDropdown(){
		var item = document.getElementsByClassName('input__list')[0];
		if (item.style.display == "none"){
			item.style.display = "inline-block";
		}else{
			item.style.display = "none";
		}
	}

	function bedroom(a){
		var a_text;
		switch(a){
			case 0:
				a = "";
				a_text = a + " ";
				break;
			case 1:
				a_text = a + " спальня,";
				break;
			case 2:
			case 3:
			case 4:
				a_text = a + " спальни,";
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				a_text =a + " спален,";
				break
			case 10:
				a_text = "нет комнат";

		}
		document.getElementById('costil_1').innerHTML= a_text;
	}

	function bed(a){
		var b_text;
		switch(a){
			case 0:
				a = "";
				b_text =a + " ";
				break;
			case 1:
				b_text = a + " кровать,";
				break;
			case 2:
			case 3:
			case 4:
				b_text = a +" кровати,";
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				b_text = a + " кроватей,";
				break;
		}
			document.getElementById('costil_2').innerHTML= b_text;
	}
