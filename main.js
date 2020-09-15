var form=document.querySelector("form");
var inputs=document.querySelectorAll("input");
form.addEventListener("submit" , function(e){
    e.preventDefault();
   inputs.forEach(function (cur){
      if (!cur.value){
          cur.parentElement.classList.add("error");
        
      }else{
          cur.parentElement.classList.remove("error");
        //   console.log("great")
    }
    if(cur.type=="email")
    if(!cur.value || !validateEmail(cur.value)){
       cur.parentElement.classList.add("error");
    } else{
        cur.parentElement.classList.remove("error");
    }
   });

    
});

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
