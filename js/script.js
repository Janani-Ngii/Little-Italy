$(document).ready(function(){}

function Order(Size, Crust, Toppings){
    this.Size= Size;
    this.Crust = Crust;
    this.Toppings = Toppings;
    this. number = number;
}

var size = document.getElementById("size").val
var Toppings= document.getElementById("Toppings").val
var Crust = document.getElementById("Crust").val
var number =document.getElementById("number").val

$("#checkout").click(function){
    function mySize(){
        var size = document.getElementById("size").val
    }
    function myCrust(){
        var Crust = document.getElementById("Crust").val
    }
    function myToppings(){
        var Toppings= document.getElementById("Toppings").val
    }
    function myNumber(){
        var number =document.getElementById("number").val
    }

var person=new Order(myCrust(), myNumber(), mySize(), myToppings())
alert(total);
});

})




   
        
    
    



  
})