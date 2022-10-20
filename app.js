
function signup(){

    var uname=document.getElementById("username").value;
   
    var pass=document.getElementById("pass").value;
    
    var comp=uname.charCodeAt(0); 
    if(((comp>=65&&comp<=90)||(comp>=97&&comp<=122))&&comp!=""){
      localStorage.setItem("usernamee",uname);
    }
    else{
        var para=document.getElementById("userpara");
       
        para.classList.add("para_css");
    }
    
    if(pass.length>=8){
        localStorage.setItem("userpassword",pass);
    }
    else{
        var para=document.getElementById("passpara");
        para.classList.add("para_css");
    
    
    }
    }
    
    
    
    console.log("local storage se username ly kr araha hy",localStorage.getItem("usernamee"));
    
    console.log("local storage se password ly kr araha hy",localStorage.getItem("userpassword"));
    
    
    function signin(){
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("pass").value;
    
    if(uname==localStorage.getItem("usernamee"))
    {
        alert("Correct Username")
    }
    else{
        alert("Incorrect Username")  
    }
    if(pass==localStorage.getItem("userpassword"))
    {
        alert("Correct password")
    }
    
    else{
        alert("Incorrect password") 
    }
    }