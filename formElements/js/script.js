	function plus_0() { 
		var a = document.getElementById("quantityBadroom_0").innerHTML;
		a++;
		document.getElementById("quantityBadroom_0").innerHTML= a;
		if(a == 1){
				document.getElementById("minus_0").style.color = 'rgba(31, 32, 65, 0.5)';
				document.getElementById("minus_0").style.border = '1px solid rgba(31, 32, 65, 0.5)';
			}
	}

	function plus_1() { 
		var b = document.getElementById("quantityBadroom_1").innerHTML;
		b++;
		document.getElementById("quantityBadroom_1").innerHTML= b;
		if(b == 1){
			document.getElementById("minus_1").style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementById("minus_1").style.border = '1px solid rgba(31, 32, 65, 0.5)';
		}
	}

	function plus_2() { 
		var c = document.getElementById("quantityBadroom_2").innerHTML;
		c++;
		document.getElementById("quantityBadroom_2").innerHTML= c;
		if(c == 1){
			document.getElementById("minus_2").style.color = 'rgba(31, 32, 65, 0.5)';
			document.getElementById("minus_2").style.border = '1px solid rgba(31, 32, 65, 0.5)';
		}	
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
	}