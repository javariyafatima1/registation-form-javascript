
                
                function Adrow()
                {
                
                    
                    let table = document.getElementById("show");
                    let row = table.insertRow();
                    let registation = row.insertCell(0);                    
                    let  name = row.insertCell(1);
                    let  fathername = row.insertCell(2);
                    let subject = row.insertCell(3);  

                    
                    name.innerHTML = document.getElementById("name").value;
                    fathername.innerHTML = document.getElementById("fathername").value;
                    subject.innerHTML = document.getElementById("subject").value;
                    registation.innerHTML = document.getElementById("registation").value;
    
                    
                clear();
                }
                function clear(){

                 
                 document.getElementById("name").value = "";
                           
                 document.getElementById("fathername").value = "";
                           
                 document.getElementById("subject").value = "";
                           
                 document.getElementById("registation").value = "";
              

                }
            
     
