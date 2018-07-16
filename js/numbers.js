
function checkPrime(){
    num=getUserInput();
    flag = true;
    if(num<2)
        flag=false;
    for(var i = 2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            flag=false;
            break;
        }
    }
    if(flag){
     showresult("Entered number is : "+num+" prime ");  
    }
    else{
     showresult("Entered number is : "+num+" not a prime "); 
    }
    
}

function factorial(){
  num=getUserInput();
    var res=1;
    for(var i=2; i <= num; i++){
        res *= i;
    }
    showresult("factorial of " +num+ " is :" +res);
    
}
function factors(){
  num=getUserInput();
    var output="";
    for(var i=1;i<=num;i++){
        if(num%i==0){
            output +=i+" ";
        }
    }
     showresult("Factors of  "+num+ " is :" +output);   
}
function fibonacci(){
   var num=getUserInput();
    var output= "";
    if(num == 1){
        output +="0";
    }
    else if(num==2){
        output +="0 1";
    }
    else{
        var a=0,b=1;
        output +="0 1";
        for(var i=3;i<=num;i++){
            c=a+b;
            output += " "+c;
            a=b;
            b=c;
        }
    }
    showresult("Fibonocci series "+num+ " is " +output);  
}
function reverse(){
    num=getUserInput();
    num2=num;
    var rev = 0;
    while(num != 0){
        r = num % 10;
        rev =( rev * 10) + r;
        num = num / 10;
    }
    showresult("Reverse of  "+num2+ " is " +rev);
}
function reverse(){
    num=getUserInput();
    num2=num;
    var rev = 0;
    while(num != 0){
        r = parseInt(num % 10);
        rev = rev * 10 + r;
        num = parseInt(num / 10);
    }
    showresult("Reverse of  "+num2+ " is " +rev);
}
function palindrome(){
    num=getUserInput();
     num2 = num;
    var rev = 0;
    while(num != 0){
        r = parseInt(num % 10);
        rev = rev * 10 + r;
        num = parseInt(num / 10);
    }
    if(num2==rev){
       showresult("Palindrome"); 
    }
    else{
        showresult("Not a Palindrome");
    }
}

function sumofdigit(){
    num=getUserInput();
     num2 = num;
      var sum=0;
     while(num!=0){
     sum += parseInt(num % 10);
     num = parseInt(num / 10);
     }
    showresult("Sum of digit of "+num2+ " is " +sum); 
 }

 function sumgetsingledigit(){
    num=getUserInput();
     sum=num;
     while(num>9){
         sum = parseInt(num %10 + num / 10);
         num = sum;
     }
     showresult("Sum of digit of is " +sum);
 }



function getUserInput(){
    num=document.getElementById("num").value;
    return num;
}
function showresult(message){
    document.getElementById("res").innerHTML="<h4>"+message+"</h4>";
} 