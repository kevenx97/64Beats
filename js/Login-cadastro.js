	
	function usuario(){

		var email = flogin.tlemail.value;
		var senha = flogin.tlsenha.value;

		if(email == "keven@engsolutions.com.br" && senha == "12345678"){
			window.location = "home64.html";
		} 
		else{
			document.getElementById('usuarioError').style.display = 'block';
		}
	}	

	$(document).ready(function(){

		$('#fcadastro').validate({

			//modal aviso
			submitHandler: function(form){
				$('.fundo').fadeIn(500);

				$('.fundo').click(function(event){
				if(event.target !== this){	
					return;								
				}
				$('.fundo').fadeOut(500)});
				$('#fcadastro').fadeOut(1);
				$('#flogin').slideDown(500);
    		},	
    		//validação form
			rules:{
				tNome:{
					required: true,
					minlength: 5
				},
				temail:{
					required: true,
					email: true
				},
				temail2:{
					required: true,
					equalTo: "#email"
				},
				tSenha:{
					required: true,
					minlength: 8
				},
				tSenha2:{
					required: true,
					equalTo: "#senha"
				}
			},
			messages:{
				tNome:{
					required: "Preencha este campo.",
					minlength: "Este campo deve conter no mínimo 5 caracteres."
				},
				temail:{
					required: "Preencha este campo.",
					email: "Insira um endereço de email válido."
				},
				temail2:{
					required: "Preencha este campo.",
					equalTo: "Os emails não correspondem."
				},
				tSenha:{
					required: "Preencha este campo.",
					minlength: "As senhas devem conter no mínimo 8 caracteres."
				},
				tSenha2:{
					required: "Preencha este campo.",
					equalTo: "As senhas não correspondem."
				}
			}
		});

		//validação senha?
		$('#fsenha').validate({
			rules:{
				tlemail:{
					required: true,
					email: true
				}
			},
			messages:{
				tlemail:{
					required: "Preencha este campo.",
					email: "Insira um endereço de email válido."
				}
			}
		});

		//login e cadastro
		$(".btn-insc").click(function(){
			$("#flogin").fadeOut(10);
			$("#fcadastro").slideDown(700);
		});
		$(".btn-login").click(function(){
			$("#fcadastro").fadeOut(10);
			$("#fsenha").fadeOut(10);
			$("#flogin").slideDown(700);
		});

		$("#linkS").click(function(){
			$("#flogin").fadeOut(10);
			$("#fsenha").slideDown(700);
		});

		//Limpar form
		$('.btn-insc').click(function(){
			$('#fcadastro').each(function(){
				(this).reset();
			});
			$("input").removeClass("error");
			$("label").remove();
		});
		$('.btn-login').click(function(){
			$('#fsenha').each(function(){
				(this).reset();
			});
			$("input").removeClass("error");
			$("label").remove();
		});
		$("#btn-cancel").click(function(){
			$('#fcadastro').each(function(){
				(this).reset();
			});
			$("input").removeClass("error");
			$("label").remove();
		});
	});