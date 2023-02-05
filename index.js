console.log("welcome to my calculator");
let string= "";
let button =document.querySelectorAll('.nums');

Array.from(button).forEach(element => {
    element.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML == '='){
            string = eval(string);   // this eval help to solve the mathematics operation
            document.querySelector('input').value= string;
            
        }
       else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value= string;
        }
        // to make "X" multiply * sign
        else if(e.target.innerHTML == 'X'){
            string = string + (e.target.innerHTML='*');
            e.target.innerHTML="X";
            document.querySelector('input').value= string;
        }
        
        // end  || Also for that

       /* else if(e.target.innerHTML== 'X')
            {
            string= string +'*';
            document.querySelector('input').value= string;
           }*/


        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value= string;
        }
       
    })
});
/* let screen =document.getElementById('us')
let screenvalue="";
let buttons = Array.from(document.querySelectorAll('.nums'));
// let screenvalue = "";
for (item of buttons){
    item.addEventListener('click', (e)=>{
        buttontext=e.target.innerHTML;
        if(e.target.innerHTML== '=')
            {
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue +=buttontext;
            screen.value = screenvalue;
            
        }
    })
}*/