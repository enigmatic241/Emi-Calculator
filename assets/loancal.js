document.getElementById("loan-form").addEventListener("submit" , calculateresult);

    function calculateresult(e){

            const amount = document.getElementById("amount");
            const interest =document.getElementById("interest");
            const year =document.getElementById("time");

            const monthlypayment = document.getElementById("monthly-payment");
            const totalinterest= document.getElementById("total-interest");
            const totalpayment = document.getElementById("total-payment");
        
            const principle=  parseFloat(amount.value);
            const calculatedinterest= parseFloat(interest.value) / 100 / 12;
            const calculatedpayment= parseFloat(year.value)*12;
        
            const x = Math.pow(1+calculatedinterest , calculatedpayment);
            const monthly = (principle*x*calculatedinterest)/(x-1);
        
            if(isFinite(monthly)){
                monthlypayment.value= monthly.toFixed(2);
                totalpayment.value= (monthly*calculatedpayment).toFixed(2);
                totalinterest.value= ((monthly*calculatedpayment)-principle).toFixed(2);
                //console.log(monthly);
                document.getElementById("result").style.display="block";
            
            }else{
                swal({
                    title: "oops!",
                    text: "Kindly Checked Your Number!",
                    icon: "error",
                  });
            }
             e.preventDefault();  

}

   































