
let products= ["Orange","Watermelon","Watermelon","Ice-cream","Egg"]
// let oldArr =[1,2,3,4]

// let addfunc = array=>{
// let newArr=[];
// for(i=0;i<array.length;i++){
//   newArr.push(array[i]+1)
  
// }
//   return newArr;
  
// }
// console.log(addfunc(oldArr));

let productLongFive = array=>
{
let listToPrint=[];
array.forEach(item=>
  {
 if (item.split("").length>5)
 {                     
     listToPrint.push(item)
 }
    
  });
  
  
  return listToPrint;
  
}
console.log(productLongFive(products));

let productStartWith = array=>
{
let startWith=["A","E","I","O","U"]
let listToprint=[];
  
array.forEach(item=>{
  
 if (startWith.includes(item.split("")[0]))
 {                     
     listToprint.push(item)
 }
                    });
  
  
  return listToprint;
  
}
console.log(productStartWith(products));