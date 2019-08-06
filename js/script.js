$(document).ready(function(){
   $("button").click(function(event){
     event.preventDefault();
       $("#form1").append(
        '<label for="size">Size</label><br>'+
        '<select id="size">'+
           '<option value="none"></option>'+
         '<option value="1">Large</option>'+
         '<option value="2">Medium</option>'+
         '<option value="3">Small</option>'+
         '</select>'+
         '<label for="flavour">Flavour</label>'+
         ' <select id="flaour">'+
         '<option value="none"></option>'+
         '<option value="one1">Berry, Arugula and Prosciutto Pizza</option>'+
         '<option value="two1">Macaroni And Cheese Pizza</option>'+
         '<option value="three1">Butternut Squash and Crispy Sage Pizza</option>'+
         '<option value="four1">Buffalo Chicken Pizza Sticks</option>'+
         '<option value="five1">Brown Butter Lobster and Spinach Pizza with Bacon + Fontina</option>'+
       '</select>'+
       '<label for="crust">Crust</label>'+
       '<select id="cruts">'+
       ' <option value="none"></option>'+
       '<option value="one2">Thin</option>'+
       '<option value="two2">Thick</option>'+
       ' <option value="three2">Flatbread</option>'+
       '<option value="four2">Focaccia</option>'+
       '<option value="five2">Custom</option>'+
       '</select>'+
       '<label for="top">Toppings</label> <br>'+
       '<select id="toppings">'+
       '<option value="none"></option>'+
       ' <option value="one3">Sausage and pineapple</option>'+
       '<option value="two3">Buffalo chicken and blue cheese</option>'+
       '<option value="three3">Gorgonzola, artichoke hearts, prosciutto, red onion, and tomato</option>'+
       '<option value="four3">Figs, prosciutto, and caramelized onions</option>'+
       '<option value="five3">Roasted Brussels sprouts and bacon or pancetta</option>'+
       ' </select>')
   });
   var Piz = function(size,topping,crust,flavour){
     this.size = size;
     this.topping = topping;
     this.crust = crust;
     this.flavour = flavour;
   }
   $("form#form").submit(function(event){
     event.preventDefault();
     var p = 0;
     var s = $("select#size").val();
     var t = $("select#toppings").val();
     var f = $("select#flavour").val();
     var c = $("select#crust").val();
     var newPizza = new Piz(s,t,f,c);  
     $("span#first").text(newPizza.size);
     $("span#fourth").text(newPizza.topping);
     $("span#first1").text(newPizza.crust);
     $("span#price").text(newPizza.price);
   });

  if( newPiz.size == 'small'){
    p = 2000;
    $("span#price").text(p + 'frw');
}
else if( newPiz.size == 'medium'){
    p = 4000;
    $("span#price").text(p + 'frw');
}
else if( newPiz.size == 'large'){
    p = 6000;
    $("span#price").text(p + 'frw');
}
});































  // $("div.col-md-4").append( 
  //    ' <h4>YOUR PIZZA ORDER IS:</h4>' +
  //               '<P>Size: <span id="first"></span></P>' +
  //               '<P>Toppings: <span id="fourth"></span></P>' +
  //               '<P>Crust: <span id="first1"></span></P>' +
  //              ' <p>Total price: <span id="price"></span></p>' 
                
  // );
//   $("form#form").submit(function(event){
//       event.preventDefault();
//       var p=0;
//       var s = $("select#size").val().toLowerCase();
//       var f =$("select#toppings").val().toLowerCase();
//       var c =$("#third").val().toLowerCase();
//       var t =$("#fourth").val().toLowerCase();
//       var newPizza = new Pizza(s,f,c,t);
//       $("spanselect#size").text(newPizza.size);
//       $("span#second2").text(newPizza.flavour);
//       $("span#third2").text(newPizza.crust);
//       $("span#fourth2").text(newPizza.topping);
//       $("#size").val("");
//       $("#flavour").val("");
//       $("#crust").val("");
//       $("#top").val("");
//           if( newPizza.size == 'large'){
//               p = 15000;
//               $("span#price").text(p + 'frw');
//           }
//           else if( newPizza.size == 'medium'){
//               p = 10000;
//               $("span#price").text(p + 'frw');
//           }
//           else if( newPizza.size == 'small'){
//               p = 8000;
//               $("span#price").text(p + 'frw');
//           }
//   });
//   $("button#yes").click(function(){
//       prompt("enter your address");
//       alert("YOUR PIZZA WILL BE DELIVERD SOON");
//   });
//   $("button#no").click(function(){
//       alert("thank you for choosing our service!");
//   });
//   });
  