//https://restcountries.com/v2/all
var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function()
{
    var res = JSON.parse(request.response)
    console.log(res)
    for(var i=0; i<res.length;i++)
        {
            console.log("Name :",res[i].name+" "+"Region :",res[i].region+" "+"Sub Region :",res[i].subregion)
            console.log("Country Name :",res[i].name+" "+"Population :",res[i].population)
            console.log(res[i].flag)
        }
    
}