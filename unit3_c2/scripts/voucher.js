const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
//console.log(url)
 async function me()
{
   try{ const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
    let res =  await fetch(url)
    let data = await res.json();
    let realdata = data.vouchers;
    append(realdata);
}
catch(error)
{
    console.log(error)
}
}
me();


function append(data)
{
    data.forEach(function(elem,index){
       var image =  document.createElement("img")
       image.src = elem.image

       var name = document.createElement("p")
       name.innerText = elem.name
          
       var price = document.createElement("p")
       price.innerText = elem.price

       var button = document.createElement("button")
       button.innerText = "buy"
       button.setAttribute("class","buy_voucher")
       var div = document.createElement("div")
       div.setAttribute("class","voucher")
      var box =  div.append(image,name,price,button)
      document.querySelector("#voucher_list").append(box)
      
    })
    
}
document.querySelector(".buy_voucher").addEventListener("click",clickme)

function clickme(){
    window.location = "purchase.html"

}