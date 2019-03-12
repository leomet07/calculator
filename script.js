//on clicks for each number
var current = []
var number = [];
var op = [];
var compundnum = "";
var secondnum;
var out = 0;
var count = 0;
var a_s = [];
var d_m = [];
var newop = [];
var is_first_time_after_reset = true;
window.onkeyup = function(e) {

  switch(e.keyCode){
    case 48:
      zero_onclick();
      break;

    case 49:
      one_onclick();
      break;

    case 50:
      two_onclick();
      break;
    case 51:
      three_onclick();
      break;
    case 52:
      four_onclick();
      break;
    case 53:
      five_onclick();
      break;
    case 54:
      six_onclick();
      break;
    case 55:
      seven_onclick();
      break;
    case 56:
      eight_onclick();
      break;



    case 57:
      nine_onclick();
      break;
    case 80:
      //press p for plus
      plus_onclick();
      break;

    case 69:
      //e for equals
      equals_onclick();
      break;
    case 83:
      //s for subtract
      minus_onclick();
      break;
    case 77:
      // m for multiply
      multiply_onclick();
      break;
    case 68:
      // d for divide
      divide_onclick();
      break;







  }


}
function one_onclick(){
  document.getElementById("full_output").innerHTML += "1 "
  current.push("1")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "1"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "1"

  }

}
function two_onclick(){
  document.getElementById("full_output").innerHTML += "2 "
  current.push("2")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "2"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "2"

  }

}
function three_onclick(){
  document.getElementById("full_output").innerHTML += "3 "
  current.push("3")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "3"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "3"

  }

}
function four_onclick(){
  document.getElementById("full_output").innerHTML += "4 "
  current.push("4")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "4"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "4"

  }

}
function five_onclick(){
  document.getElementById("full_output").innerHTML += "5 "
  current.push("5")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "5"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "5"

  }

}
function six_onclick(){
  document.getElementById("full_output").innerHTML += "6 "
  current.push("6")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "6"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "6"

  }

}
function seven_onclick(){
  document.getElementById("full_output").innerHTML += "7 "
  current.push("7")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "7"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "7"

  }

}
function eight_onclick(){
  document.getElementById("full_output").innerHTML += "8 "
  current.push("8")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "8"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "8"

  }

}
function nine_onclick(){
  document.getElementById("full_output").innerHTML += "9 "
  current.push("9")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "9"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "9"

  }

}
function zero_onclick(){
  document.getElementById("full_output").innerHTML += "0 "
  current.push("0")
  console.log(current)
  if(is_first_time_after_reset){
    document.getElementById("output").innerHTML = "0"
    is_first_time_after_reset = false

  }
  else{
    document.getElementById("output").innerHTML += "0"

  }

}
function plus_onclick(){
  document.getElementById("full_output").innerHTML += "+ "
  is_first_time_after_reset = true
  current.push("plus")
  console.log(current)
  document.getElementById("output").innerHTML = "+"

}
function decimal_onclick(){
  document.getElementById("full_output").innerHTML += "."
  current.push(".")
  console.log(current)
  document.getElementById("output").innerHTML += "."
}
function minus_onclick(){
  document.getElementById("full_output").innerHTML += "- "
  is_first_time_after_reset = true
  current.push("minus")
  console.log(current)
  document.getElementById("output").innerHTML = "-"

}

function multiply_onclick(){
  document.getElementById("full_output").innerHTML += "* "
  is_first_time_after_reset = true
  current.push("multiply")
  console.log(current)
  document.getElementById("output").innerHTML = "*"
}
function divide_onclick(){
  document.getElementById("full_output").innerHTML += "/ "
  is_first_time_after_reset = true
  current.push("divide")
  console.log(current)
  document.getElementById("output").innerHTML = "/"
}








function equals_onclick(){
  document.getElementById("full_output").innerHTML += "= "

  //re-order
  for (var i = 0;i<current.length;i++){
      switch (current[i]) {
        case "1":
          compundnum += "1"

          break;

        case "2":
          compundnum += "2"
          break;

        case "3":
          compundnum += "3"
          break;

        case "4":
          compundnum += "4"
          break;

        case "5":
          compundnum += "5"
          break;

        case "6":
          compundnum += "6"
          break;

        case "7":
          compundnum += "7"
          break;

        case "8":
          compundnum += "8"
          break;

        case "9":
          compundnum += "9"
          break;
        case "0":
          compundnum += "0"
          break;

        case ".":
          compundnum += "."
          break;






        case "plus":

          number.push(compundnum)
          op.push("plus")
          compundnum  = ""
          secondnum = true
          break;

        case "minus":

          number.push(compundnum)
          op.push("minus")
          compundnum  = ""
          secondnum = true
          break;

        case "multiply":

          number.push(compundnum)
          op.push("multiply")
          compundnum  = ""
          secondnum = true
          break;

        case "divide":

          number.push(compundnum)
          op.push("divide")
          compundnum  = ""
          secondnum = true
          break;




      }
  }

  number.push(compundnum)
  compundnum = ""

  re_order_for_pemdas();
  out = number[0]
  for(var i = 0;i<op.length;i++){
    if (op[i] == "plus"){
        console.log(Number(number[i + 1]))

        if (i ==0){
          out = Number(number[i+ count]) + Number(number[i +1+ count])
          console.log(number[i + count] + " "+ number[i + 1+ count])
          count++;
        }
        else{
          out += Number(number[i+ count])

        }


        console.log(out)
    }
    else if (op[i] == "minus"){
      console.log(number[i+ count] + " "+ number[i + 1+ count])
      if (i ==0){
        out = Number(number[i+ count]) - Number(number[i +1+ count])
        console.log(number[i + count] + " "+ number[i + 1+ count])
        count++;
      }
      else{
        out -= Number(number[i+ count])

      }

      console.log(out)

    }
    else if (op[i] == "multiply"){

      if(i == 0){
          out = Number(number[i+ count]) *  Number(number[ i + 1+ count])
          count++;
      }
      else{
        out = out * Number(number[i+ count])
      }

      console.log(out)

    }
    else if (op[i] == "divide"){

      console.log(number[i+ count] + " "+ number[i + 1+ count])
      if (Number(number[i+ 1+ count]) != 0){

        if (count ==0){

          out = Number(number[i+ count]) /  Number(number[i + 1+ count])
          count++;
        }
        else{
          out = out / Number(number[i+ count])
        }

      }

      else{
        out = "You cannot divide by zero"
      }

      console.log(out)


    }


  }

  document.getElementById("output").innerHTML = "Answer: " + out
  document.getElementById("full_output").innerHTML += out + " "
}
function re_order_for_pemdas(){
  //re-order for pemdas

  for(var j = 0;j<op.length;j++){
    for(var i = 0;i<op.length;i++){
      if(op[i] == "multiply" || op[i] == "divide"){

        if (op[i - 1] == "plus" || op[i - 1] == "minus"){

            arraymove(op,i-1,i)



            arraymove(number,i-1,i)
            arraymove(number,i,i+1)



        }
      }

    }


  }
}
function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);


}
function reset_onclick(){
  document.getElementById("output").innerHTML = "-"
  document.getElementById("full_output").innerHTML = ""
  console.log("reset")
  current = []
  number = []
  out = ""
  op = [];
  count = 0;

}
