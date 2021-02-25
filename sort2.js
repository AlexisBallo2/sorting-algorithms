var list_of_numbers2 = [50,40,120,140,70,130,90,20,10,100,80,110,30,60]
var j1=0
var stoppingPoint2 = 2
var current_max = 0
function myFunction2() {
    if(isArraySorted(list_of_numbers2)){
        console.log('sorted')
        done()
    }
    var width_of_box2 = document.getElementById("box2").clientWidth
    var ul1 = document.getElementById("menu2");
    var items1 = ul1.getElementsByTagName("li");
    for (var i = 0; i < items1.length; ++i) {
        // do something with items1[i], which is a <li> element
        //console.log(items1[i]);
        var value = (width_of_box2/(items1.length)).toString();
        //items1[i].style.paddingRight = [value, 'px'].join("");
        //items1[i].style.paddingLeft = [value, 'px'].join("");
        items1[i].style.paddingTop = [list_of_numbers2[i], 'px'].join("");
        
    }
    console.log(items1)
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
function go2() {
    console.log(j1 + " j1")
    var ul1 = document.getElementById("menu2");
    var items1 = ul1.getElementsByTagName("li");
    if(list_of_numbers2[j1]>current_max){
        console.log(list_of_numbers2[j1] + ' is grater  than ' + current_max)
        current_max = list_of_numbers2[j1]
    } else {
        console.log('dont do anything')
    }
    try{
        items1[j1-1].style.backgroundColor = 'black'
    }
    catch(err) {
        console.log('a')
    }
    items1[j1].style.backgroundColor = "yellow"

    //go back and do it again
    if(j1>list_of_numbers2.length-stoppingPoint2){
        console.log('max is ' + current_max)
        var swapval = list_of_numbers2[list_of_numbers2.length-stoppingPoint2+1]
        var posofmax = list_of_numbers2.indexOf(current_max);
        //items1[posofmax].style.backgroundColor = 'green';
        console.log(swapval + "< swap val /// pos of max -> "+ posofmax)
        list_of_numbers2[list_of_numbers2.indexOf(swapval)]= list_of_numbers2[posofmax]
        list_of_numbers2[posofmax] = swapval;
        stoppingPoint2++;
        j1 = 0
        current_max = 0
        console.log("greater")
        myFunction2()
    } else{
        j1=j1+1;
    }

} 

/* origional funcion2
function iteration2(){
    var ul1 = document.getElementById("menu2");
    var items1 = ul1.getElementsByTagName("li");
    console.log(items1)
    for (var i = 0; i < items1.length; ++i){
        items1[i].style.backgroundColor = "black"
    }
    var str2 = "px"
    var width_of_box = document.getElementById("box2").clientWidth
    var ul1 = document.getElementById("menu2");
    var items1 = ul1.getElementsByTagName("li");
    //items1[j1-1].style.backgroundColor = 'black'
    var place1 = j1
    var onespotbefore1 = j1-1
    items1[onespotbefore1].style.backgroundColor = "yellow"
    items1[place1].style.backgroundColor = "green"
    if(list_of_numbers2[place1]<list_of_numbers2[onespotbefore1]){ 
        //get the values of the two boxes
        var a = list_of_numbers2[place1];
        var b = list_of_numbers2[onespotbefore1];

        //switch the values of the numbers in the list
        list_of_numbers2[place1]=b;
        list_of_numbers2[onespotbefore1] = a;

        //switch the heights
        //console.log("j1")
        //console.log(items1[j1])
        //console.log("j1+1")
        //console.log(items1[j1+1])
        items1[place1].style.paddingTop = [list_of_numbers2[b], 'px'].join("");
        items1[onespotbefore1].style.paddingTop = [list_of_numbers2[a], 'px'].join(""); 
        console.log("swapped")
        console.log(list_of_numbers2)
        } 
        myFunction2()

}
*/

function iteration2(){
    var ul1 = document.getElementById("menu2");
    var items1 = ul1.getElementsByTagName("li");
}

function bothgo(){
    go1()
    go2()
}