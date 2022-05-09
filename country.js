function countries(){
    var request=new XMLHttpRequest();
    var country=document.getElementById("temp").value;
var url="https://restcountries.com/v3.1/name/"+country+"?fullText=true"
request.open('GET',url)
request.onload=function(){
    var result=JSON.parse(this.response)
    console.log(result);
   document.getElementById("result").value=result[0].currencies.CNY.name;
   document.getElementById("result2").value=result[0].borders;
}
request.send();
}
