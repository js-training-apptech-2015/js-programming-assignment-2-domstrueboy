var app = function(){

	$('#solution1-idA').keyup(function(){
   		$("#solution1-result").text(
   			solution1(
   				$("#solution1-idA").val()
   			)
   		);
	});

	$('#solution2-idS').keyup(function(){
   		$("#solution2-result").text(
   			solution2(
   				$("#solution2-idS").val()
   			)
   		);
	});

	$('#solution3-idA, #solution3-idF').keyup(function(){
   		$("#solution3-result").text(
   			solution3(
   				$("#solution3-idA").val(),
					$("#solution3-idF").val()
   			)
   		);
	});

}

$(document).ready(app);
