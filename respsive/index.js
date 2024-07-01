function user(){
   
   const a = document.getElementById("text1").value;
   const b = document.getElementById("age1").value;
     
      if(a == ""){
        alert("Name is empty")
      }
      else if(b == ""){
        alert("Name is empty and can be numeric values")
      }
      else{
        alert(a + " " + b);
        a.value="";
        b.value="";
      }
   
    }
