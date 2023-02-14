
function setIdInnerText(id , setText){
   document.getElementById(id).innerText= setText;
}


function getValu(inputIdValu){
const quantity = document.getElementById(inputIdValu).value;
const QuantityNumber = parseInt(quantity);
return QuantityNumber;
}


function getInnerText(InnerTextId){
    const quintityPrise = document.getElementById(InnerTextId).innerText;
    const quintityPriseNumber = parseInt(quintityPrise);
    return quintityPriseNumber;
   }



 document.getElementById("kitkat-buy-btn").addEventListener("click",function(){
    const kitkatQuantityNumber =  getValu("kitkat-quantity");
    const kitkatPriceNumber= getInnerText("kitkat-price") 
    const chockletCost = getMultiply(kitkatQuantityNumber, kitkatPriceNumber)
    setIdInnerText("chocolate" , chockletCost)
    document.getElementById("kitkat-quantity").value = "";
    totalCost()
   
   
})

document.getElementById("rose-buy-btn").addEventListener("click",function(){
    
    const roseQuantityNumber = getValu("rose-quantity")    
    const rosePriceNumber = getInnerText("rose-price")
    const roseCost = getMultiply(roseQuantityNumber, rosePriceNumber)
    setIdInnerText( "rose", roseCost )
    document.getElementById("rose-quantity").value = "";
    totalCost()
   
    

   
})

function getMultiply(quintity, prize){
   const mulpliy = quintity * prize;
   return mulpliy;
}

 document.getElementById("diary-buy-btn").addEventListener("click" , function(){
    
    const diaryQuantityNumber =  getValu("diary-quantity");
    const diaryPriceNumber =  getInnerText("diary-price");
    const  dairyCost =  getMultiply( diaryQuantityNumber, diaryPriceNumber)
     setIdInnerText("diary", dairyCost )
     document.getElementById("diary-quantity").value = "";
     totalCost()   

 })

 

function totalCost(){
    const rosePrise= stringToNumberConvert("rose");   
    const dairyPrise = stringToNumberConvert("diary")
    const chokletPrise = stringToNumberConvert("chocolate")
    const totalValentinCost = rosePrise + dairyPrise + chokletPrise;
    setIdInnerText("total", totalValentinCost);
   
   
 }
 function stringToNumberConvert(id){
  const convert =  document.getElementById(id).innerText; 
  const convertNumber = parseInt(convert);
  return convertNumber;
    
 }


 document.getElementById("apply_btn").addEventListener("click",function(){

      const budget = getInnerText("budget");
    const promoCodeNumber = getValu("promo-code");
    const total = getInnerText("total");

    if(promoCodeNumber === 101){
       const discount = total - (total*0.1);
       setIdInnerText("all-total", discount)   
       document.getElementById("promo-code").value = ""
    }else{
        alert("your promocode is wrong,,plese provide a valid promocode")
    }

    if(budget <total){
        alert("single life is best")
     }
    
 });



 

 