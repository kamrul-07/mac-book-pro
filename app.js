// first section related function 

function updateMemoryAmount (isIncrease){
    const memoryCost = document.getElementById('memory-cost');
   
    if( isIncrease == true){
        memoryCost.innerText =180;
    }
    else{
        memoryCost.innerText =0;
    }
    
}

// First section 
document.getElementById('lower-btn').addEventListener('click',function(){
    updateMemoryAmount( false);
    TotalAmount();
    
})

document.getElementById('upper-btn').addEventListener('click',function(){
    updateMemoryAmount( true);
    TotalAmount();
    
})

// second section 

document.getElementById('lower-storage').addEventListener('click',function(){
    const storageCost =document.getElementById('storage-cost');
    const storage=storageCost.innerText;
    storageCost.innerText=0;
    TotalAmount();
})
document.getElementById('upper-storage').addEventListener('click',function(){
    const storageCost =document.getElementById('storage-cost');
    const storage=storageCost.innerText;
    storageCost.innerText=100;
    TotalAmount();
})
document.getElementById('cost-storage').addEventListener('click',function(){
    const storageCost =document.getElementById('storage-cost');
    conststorage=storageCost.innerText;
    storageCost.innerText=180;
    TotalAmount();
})

// Third related function 

function deliveryCost (deliveryCost){
    const deleveryCharge =document.getElementById('delivery-cost');
    
    if( deliveryCost == true){
        deleveryCharge.innerText =20;
    }
    else{
        deleveryCharge.innerText =0;
    }
    
}

// Third section 
document.getElementById('lower-charge').addEventListener('click',function(){
    deliveryCost(false)
    TotalAmount()
    
   
})
document.getElementById('upper-charge').addEventListener('click',function(){
    deliveryCost( true);
    TotalAmount();
   
    
})

// substraction 


function TotalAmount (){
    // 1st task 
    const bestPrice =document.getElementById('best-price');
    const bestPriceText=bestPrice.innerText;
    const bestPriceAmount=parseInt(bestPriceText);
    

    // 2nd task 
    const extraMemoryCost = document.getElementById('memory-cost');
    const extraMemoryText = extraMemoryCost.innerText;
    const extraMemoryAmount =parseInt(extraMemoryText);
   
    // 3rd task 
    const extraStorageCost =document.getElementById('storage-cost');
    const extraStorageText =extraStorageCost.innerText;
    const extraStorageAmount = parseInt(extraStorageText);
   

    // 4th task 
    const deliveryCharge = document.getElementById('delivery-cost');
    const deliveryChargeText = deliveryCharge.innerText;
    const deliveryChargeAmount =parseInt(deliveryChargeText);

    // 5th task 
    const total = bestPriceAmount + extraMemoryAmount + extraStorageAmount + deliveryChargeAmount;
    //  6th task 

    const totalPrice =document.getElementById('total-price');
    totalPrice.innerText = total;

    const finalTotal=document.getElementById('Orginal-total');
    finalTotal.innerText=total;
    

}

// final total part
    document.getElementById('apply-btn').addEventListener('click',function(){
    const discountInput =document.getElementById('discount-input');
    const finalTotal=document.getElementById('Orginal-total');
    if(discountInput.value == "stevekaku"){
        finalTotal.innerText=parseInt(finalTotal.innerText) * 0.8;
    }
    discountInput.value='';
})