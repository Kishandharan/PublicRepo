document.getElementById("butt").onclick = function onclick(){
    let num1 = Number(document.getElementById("Text1").value);
    let num2 = Number(document.getElementById("Text2").value);
    let mode = document.getElementById("Mode").value;		
        if(mode == "+")
        {
            document.getElementById("paragraph").innerHTML = num1+"+"+num2+"="+(num1+num2);		
        } 
        if(mode == "-")
    {
    document.getElementById("paragraph").innerHTML = num1+"-"+num2+"="+(num1-num2);	    	
        }
        if(mode == "*")
    {
    document.getElementById("paragraph").innerHTML = num1+"*"+num2+"="+(num1*num2);	    	
        }
        if(mode == "/")
    {
    document.getElementById("paragraph").innerHTML = num1+"/"+num2+"="+(num1/num2);	    	
        }
    }