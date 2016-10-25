var over = 1;

var result;
result = Math.floor(Math.random() * 10) + 1;
console.log("result");

var result2;
result2 = Math.floor(Math.random() * 10) + 1;
console.log("result2");

var result3;
result3 = Math.floor(Math.random() * 10) + 1;
console.log("result3");

var result4;
result4 = Math.floor(Math.random() * 10) + 1;
console.log("result4");

var left;
var right;

function reset(){
	tb.empty();
	
	over = 1;
	
	result = Math.floor(Math.random() * 10) + 1;
	console.log("result");
	
	result2 = Math.floor(Math.random() * 10) + 1;
	console.log("result2");
	
	result3 = Math.floor(Math.random() * 10) + 1;
	console.log("result3");
	
	result4 = Math.floor(Math.random() * 10) + 1;
	console.log("result4");
	
	box.html(result);
	box2.html(result2);
	box3.html(result3);
	box4.html(result4);
}

 var box = $("#box");
    var box2 = $("#box2");
	var box3 = $("#box3");
	var box4 = $("#box4");
    box.append(result);
    box2.append(result2);
	box3.append(result3);
	box4.append(result4);
	
	function ok(){
		if(over == 0)
			return;
		var sel = $(':radio[name="sign"]:checked').val();
		var sel2 = $(':radio[name="sign2"]:checked').val();
		var sel3 = $(':radio[name="sign3"]:checked').val();
		
		
		switch(sel2){
			case "+":
			left = result + result2;
				break;
			case "-":
			left = result - result2;
				break;
			case "*":
			left = result * result2;
				break;
			case "/":
			left = result / result2;
				break;
		}
		console.log(left+sel2);
		
		switch(sel3){
			case "+":
			right = result3 + result4;
				break;
			case "-":
			right = result3 - result4;
				break;
			case "*":
			right = result3 * result4;
				break;
			case "/":
			right = result3 / result4;
				break;
		}
		console.log(right+sel3);
		
		console.log(sel);
		
		switch(sel){
			case ">":
			if(left>right){
				tb.append("정답 ");
				tb.append("다시시작하시려면 초기화버튼을 눌러주세요.<br>");
				over = 0;
		}
				else{
				tb.append("오답<br>");
		}
				break;
			case "<":
				if(left<right){
				tb.append("정답 ");
					tb.append("다시시작하시려면 초기화버튼을 눌러주세요<br>");
					over = 0;
		}
				else{
				tb.append("오답<br>");
		}
				break;
			case "=":
				if(left==right){
				tb.append("정답 ");
					tb.append("다시시작하시려면 초기화버튼을 눌러주세요<br>");
					over = 0;
		}
				else{
					tb.append("오답<br>");
				}
				break;
		}
	}
	var tb = $("#textbox");
	