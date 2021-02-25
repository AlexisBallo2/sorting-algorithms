var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var sorted = true;

// Create gradient
var numbers = [5,4,12,14,7,13,9,2,1,10,8,11,3,6];

function draw_all(){
    ctx.clearRect(0, 0, c.width, c.height);
    numbers.forEach(function(entry) {
        console.log(entry);
        ctx.beginPath();
        //rect(bottom left x, bottom left y , -width, -height )
        console.log("box val" ,entry, ((numbers.indexOf(entry))*((c.width/numbers.length))))
        ctx.rect(((numbers.indexOf(entry))*((c.width/numbers.length))),c.height,c.width/numbers.length,-entry*5);
        ctx.stroke();
    });
    
}

function draw_all_colors(hilight){
    ctx.clearRect(0, 0, c.width, c.height);
    numbers.forEach(function(entry) {
        console.log(entry);
        ctx.beginPath();
        //rect(bottom left x, bottom left y , -width, -height )
        console.log("box val" ,entry, ((numbers.indexOf(entry))*((c.width/numbers.length))))
        if(numbers.indexOf(entry)==hilight){
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(((numbers.indexOf(entry))*((c.width/numbers.length))),c.height,c.width/numbers.length,-entry*5);
        }
        else{
            ctx.fillStyle = "#AFF000"
            ctx.rect(((numbers.indexOf(entry))*((c.width/numbers.length))),c.height,c.width/numbers.length,-entry*5);
        }
    
        ctx.stroke();
    });  
    
}
draw_all()

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


console.log(isArraySorted(numbers))

var delayInMilliseconds = 000; //1 second


function swap(){


    numbers.forEach(function(entry) {
        if(numbers[entry]<numbers[entry-1]){ 
            var a = numbers[entry];
            var b = numbers[entry-1];
            numbers[entry]=b;
            numbers[entry-1] = a;
            //ctx.clearRect(0, 0, c.width, c.height);
            setTimeout(function() {
                draw_all()       
            }, delayInMilliseconds);   
        
        }
    });
 
    

}
 

function go(){
    swap()
}

function myFunction(){
    go()
}

var entry=0
function atatime(){
    draw_all_colors(entry)
    console.log('pressed')
    if(numbers[entry]<numbers[entry-1]){ 
        var a = numbers[entry];
        var b = numbers[entry-1];
        numbers[entry]=b;
        numbers[entry-1] = a;
        ctx.clearRect(0, 0, c.width, c.height);
        draw_all_colors(entry)  
    }
    entry=entry+1;
    if(entry>numbers.length){
        entry = 0
    }
}
function reset() {
    numbers = [5,4,12,14,7,13,9,2,1,10,8,11,3,6];
    go()
}