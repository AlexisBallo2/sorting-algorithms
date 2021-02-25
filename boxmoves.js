var list_of_numbers = [50,40,120,140,70,130,90,20,10,100,80,110,30,60]
var j=1
var stoppingPoint = 2
function myFunction() {
    if(isArraySorted(list_of_numbers)){
        console.log('sorted')
        done()
    }
    var str2 = "px"
    var width_of_box = document.getElementById("box1").clientWidth
    var ul = document.getElementById("menu");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        // do something with items[i], which is a <li> element
        //console.log(items[i]);
        var value = (width_of_box/items.length).toString();
       // items[i].style.paddingRight = [value/2, 'px'].join("");
       // items[i].style.paddingLeft = [value/2, 'px'].join("");
        items[i].style.paddingTop = [list_of_numbers[i], 'px'].join("");
        
    }
    console.log(items)
}

function go() {
    var str2 = "px"
    var width_of_box = document.getElementById("box1").clientWidth
    var ul = document.getElementById("menu");
    var items = ul.getElementsByTagName("li");


    items.forEach(function(entry) {
        if(list_of_numbers[entry]<list_of_numbers[entry-1]){ 
            var a = list_of_numbers[entry];
            var b = list_of_numbers[entry-1];
            list_of_numbers[entry]=b;
            list_of_numbers[entry-1] = a;

            //change the heights
            items[items.data.toString().indexOf(a)].style.paddingRight = [list_of_numbers[b], 'px'].join("");
            items[items.indexOf(b)].style.paddingRight = [list_of_numbers[a], 'px'].join("");
            //ctx.clearRect(0, 0, c.width, c.height);
            setTimeout(function() {
                draw_all()       
            }, delayInMilliseconds);   
        
        }
    });
}

function done() {
    console.log('sorted')
}
function isArraySorted(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] && (arr[i+1] > arr[i])){
            continue;
        } else if(arr[i+1] && (arr[i+1] < arr[i])){
            return false;
        }
    }
    return true;
}


function go1() {
    //for (var i = 2; i < list_of_numbers.length; ++i) {
        var ul = document.getElementById("menu");
        var items = ul.getElementsByTagName("li");
        iteration()
        if(j>list_of_numbers.length-stoppingPoint){
            stoppingPoint++;
            //items[list_of_numbers.length-stoppingPoint2 +1].style.backgroundColor = "yellow"
            j=1;
        } else {
            j=j+1;
        }
    //}
}

function iteration(){
    var ul = document.getElementById("menu");
    var items = ul.getElementsByTagName("li");
    console.log(items)
    for (var i = 0; i < items.length; ++i){
        if(i>list_of_numbers.length-stoppingPoint+1){
            //items[list_of_numbers.length-stoppingPoint2 +1].style.backgroundColor = "yellow"
            items[i].style.backgroundColor = "yellow"
        } else{
            items[i].style.backgroundColor = "black"
        }
        
    }
    var str2 = "px"
    var width_of_box = document.getElementById("box1").clientWidth
    var ul = document.getElementById("menu");
    var items = ul.getElementsByTagName("li");
    //items[j-1].style.backgroundColor = 'black'
    var place = j
    var placeminus1 = j-1
    items[placeminus1].style.backgroundColor = "blue"
    items[place].style.backgroundColor = "green"
    if(list_of_numbers[place]<list_of_numbers[placeminus1]){ 
        //get the values of the two boxes
        var a = list_of_numbers[place];
        var b = list_of_numbers[placeminus1];

        //switch the values of the numbers in the list
        list_of_numbers[place]=b;
        list_of_numbers[placeminus1] = a;

        //switch the heights
        //console.log("j")
        //console.log(items[j])
        //console.log("j+1")
        //console.log(items[j+1])
        items[place].style.paddingTop = [list_of_numbers[b], 'px'].join("");
        items[placeminus1].style.paddingTop = [list_of_numbers[a], 'px'].join(""); 
        console.log("swapped")
        console.log(list_of_numbers)
        }
        myFunction()

}