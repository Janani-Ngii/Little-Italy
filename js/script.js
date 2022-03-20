$(document).ready(function(){}

function Order(Size, Crust, Toppings){
    this.size= size;
    this.crust = crust;
    this.toppings = toppings;
    this. number = number;
}

var size = document.getElementById("size").val
var toppings= document.getElementById("Toppings").val
var crust = document.getElementById("Crust").val
var number =document.getElementById("number").val

$("#checkout").click(function)();{
    function mySize(){
        var size = document.getElementById("size").val
        parseInt(size)
    }
    function myCrust(){
        var crust = document.getElementById("crust").val
        parseInt(crust)
    }
    function myToppings(){
        var toppings= document.getElementById("toppings").val
        parseInt(toppings)
    }
    function myNumber(){
        var number =document.getElementById("number").val
    }

var person=new Order(myCrust(), myNumber(), mySize(), myToppings())
total = (myCrust+mysize+myToppings) * myNumber;
var total =(person.size+person.toppings+person.crust)*(person.number);
alert(total);
});

})




   
        
    
    



  
