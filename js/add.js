
var product_name =document.getElementById("pn");
 var product_price =document.getElementById("pp");
 var product_category =document.getElementById("pc");

 var allproduct;
 if(localStorage.getItem("allproduct")==null){
     allproduct=[];
 }
 else{
   allproduct =JSON.parse(localStorage.getItem("allproduct"))
   display(allproduct);
 }

function add(){
var product=
      {
   name:product_name.value,
  price:product_price.value,
  category:product_category.value 
    }
   allproduct.push(product);
   console.log(allproduct);
   localStorage.setItem("allproduct",JSON.stringify(allproduct));
   display(allproduct);
   clear();
}  
    

 function display(list){
    var rows="";
for(var i=0;i<list.length;i++){
 rows +=`<tr>
 <td> ${i+1}</td>
    <td>${list[i].name}</td>
    <td >${list[i].price}</td>   
    <td>${list[i].category}</td>
<td><button onclick="update(${i})">update</button></td>
<td><button onclick="delate(${i})">delate</button></td>
</tr>`
}

            document.getElementById("tablebody").innerHTML=rows;
            



 }
function clear(){
     product_name.value="";
     product_price.value="";
     product_category.value="";
 }

 function delate(x){
     
     allproduct.splice(x,1);
     localStorage.setItem("allproduct",JSON.stringify(allproduct));
     display(allproduct);

}
function search(searchtrerm){
    var rows="";
    for(var i=0;i<allproduct.length;i++){
        if(  allproduct[i].name.toLowerCase().includes (searchtrerm.toLowerCase() )   == true  ){

            
            rows +=`<tr>
            <td> ${i}</td>
               <td>${allproduct[i].name}</td>
               <td >${allproduct[i].price}</td>   
               <td>${allproduct[i].category}</td>
           <td><button onclick="update(${i})">update</button></td>
           <td><button onclick="delate(${i})">delate</button></td>
           </tr>`
           
console.log(rows);
}
}    
console.log(rows);

document.getElementById("tablebody").innerHTML= rows;

}
    
function update(){




}




























