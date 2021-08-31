		var socket = io.connect()
		socket.on('message',function(response){
			var parse_response = JSON.parse(response)
			$('#msg').append(
			'<li id="new_message"  class="card rounded shadow my-5">' +
				'<div class = "container-fluid">'+
					'<p>' + '<span class="fw-bold">' + parse_response["sender"] + '</span>'  + ' : '
					+ marked(parse_response["msg"]) + '</p>' +
					'<p>'+
					parse_response["date"]+'</p>' +
				'</div> </li>').show();
				$("#msg").scrollTop($("#msg")[0].scrollHeight);
				$("#none").remove()
					}
				);
					$('#send').on('click',function(){
							let date_ob = new Date();
							// adjust 0 before single digit date
							let date = ("0" + date_ob.getDate()).slice(-2);
							// current month
							let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
							// current year
							let year = date_ob.getFullYear();
							// current hours
							let hours = date_ob.getHours();
							// current minutes
							let minutes = date_ob.getMinutes();
							// current seconds
							let seconds = date_ob.getSeconds();
							console.log(Math.round(seconds))
							var message_string = JSON.stringify({
													sender: $("#username").html(),
													msg: $("#message").val(),
													date:year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + Math.round(seconds)
												})
							if ($("#sender").val() === "" || $("#message").val() === "") {
								alert("empty value")
							}
							else{
								socket.send(message_string)
								$("#message").val('');
							}
						});
				$('#textbox').on('keypress', function (e) {
				});
				$('#msg').keypress(function(event){
					if(event.keyCode == 13){
					console.log("s")
					}
				});
				/*
				$(window).on('load', function() {
					$("#msg").scrollTop($("#msg")[1].scrollHeight);
				});
				*/