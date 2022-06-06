console.log("connected")
var datarr =  JSON.parse(localStorage.getItem("user"))||[]
function myfunction()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let amount = document.getElementById("amount").value

    var obj = {
        name: name,

        email :email,

        address: address,
        wallet: amount,

    }
    datarr.push(obj)
    localStorage.setItem("user",JSON.stringify(datarr))
}