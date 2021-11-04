function validarFormulario(){
    //nome:
    var name = document.formulario1.elements[0].value;
    if (name.length < 10){
      alert("O campo 'Nome' não pode ter menos de 10 caracteres!");
      return false;
    }
  
    // Depois email:
    var email = document.formulario1.elements[1].value;
  
    if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1){
      alert("Email inválido");
      return false;
    }
  
    //comentário:
    var comentario = document.formulario1.elements[2].value;
  
    if (comentario.length < 20){
      alert("O campo 'comnentário' não pode ter menos de 20 caracteres!");
      return false;
    }

    //Primeira vez nesta página?
    if(document.formulario1.elements[3].checked){
        alert("Volte sempre à esta página!");
    }else if(document.formulario1.elements[4].checked){
        alert("Que bom que você voltou a visitar esta página!");
    }        

    return true;
  }


