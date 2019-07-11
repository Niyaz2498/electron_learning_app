var xhr =new XMLHttpRequest();
xhr.onreadystatechange = function (){
    if (this.readyState==4 && this.status == 200){
        console.log('hi');
    }
}
xhr.open('GET','https://www.w3schools.com/images/w3schools_green.jpg');
xhr.send();