const data=[ 
    { 
        name: 'Tata Nexon', 
        manufacturer: 'Tata', 
        fuelType: 'diesel', 
        bodyType: 'SUV', 
        seatingCapacity: 5, 
        price: 7000 
    }, 
    { 
        name: 'Mahindra XUV700', 
        manufacturer: 'Mahindra', 
        fuelType: 'petrol', 
        bodyType: 'SUV', 
        seatingCapacity: 5, 
        price: 7500 
    }, 
    { 
        name: 'MG ZS EV', 
        manufacturer: 'Mahindra', 
        fuelType: 'Electric', 
        bodyType: 'SUV', 
        seatingCapacity: 5, 
        price: 25000 
    }, 
    { 
        name: 'Volvo XC90', 
        manufacturer: 'Volvo', 
        fuelType: 'petrol', 
        bodyType: 'hybrid', 
        seatingCapacity: 7, 
        price: 35000 
    }, 
    { 
        name: 'Tata Tiago', 
        manufacturer: 'Tata', 
        fuelType: 'petrol', 
        bodyType: 'hatchback', 
        seatingCapacity: 5, 
        price: 5000 
    } 
    ]
  
  function maxPrice(data){
    maxPrice=0;
    let priceList=data.map((obj)=>obj.price);
    console.log(priceList);
    for(let eachPrice of priceList){
        if(eachPrice>maxPrice){
            maxPrice=eachPrice;
        }
    }
    return maxPrice;
    
  }

  console.log(maxPrice(data));