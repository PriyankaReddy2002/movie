function getReview(){
    var request =new XMLHttpRequest();
   var url='https://imdb-api.com/en/API/Top250Movies/k_pwwak3ty';
   request.open('GET',url,true);
   request.onload=function(){
       var result= JSON.parse(this.response);
       console.log(result.items[6].title);
   }
   request.send();
}