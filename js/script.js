$(document).ready(function(){
    var Piz = function(size,topping,crust,flavour){
        Piz.size = size;
        Piz.topping = topping;
        Piz.crust = crust;
        Piz.flavour = flavour;
    }
    $("#form").submit(function(event){
        event.preventDefaut();
        var p=0;
        var s = $("#size").val();
        var c = $("#crust").val();
        var f = $("#flavour").val();
        var t = $("#top").val();
        var newPiz = new Pizz(s,c,f,t);
        if(newPiz.s=="small" && newPiz.c=="Thin" && newPiz.f=="Berry, Arugula and Prosciutto Pizza" && newPiz.t=="Sausage and pineapple"){
            alert("this cost: 2500rwf")
        }
        else if(newPiz.s=="small" && newPiz.c=="Thin" && newPiz.f=="Berry, Arugula and Prosciutto Pizza" && newPiz.t=="Buffalo chicken and blue cheese"){
            alert("this cost: 1500rwf")
        }
        else if(newPiz.s=="small" && newPiz.c=="Thin" && newPiz.f=="Berry, Arugula and Prosciutto Pizza" && newPiz.t=="Gorgonzola, artichoke hearts, prosciutto, red onion, and tomato"){
            alert("this cost: 1200rwf")
        }
        else if(newPiz.s=="small" && newPiz.c=="Thin" && newPiz.f=="Berry, Arugula and Prosciutto Pizza" && newPiz.t=="Figs, prosciutto, and caramelized onions"){
            alert("this cost: 2200rwf")
        }

    })
});
    