//on clicks for each number
var current = []
var number = [];
var op = [];
var compundnum = "";
var secondnum;
var out = 0;
var count = 0;

function one_onclick(){
  current.push("1")
  console.log(current)
}
function two_onclick(){
  current.push("2")
  console.log(current)

}
function three_onclick(){
  current.push("3")
  console.log(current)

}
function four_onclick(){
  current.push("4")
  console.log(current)

}
function five_onclick(){
  current.push("5")
  console.log(current)

}
function six_onclick(){
  current.push("6")
  console.log(current)

}
function seven_onclick(){
  current.push("7")
  console.log(current)

}
function eight_onclick(){
  current.push("8")
  console.log(current)

}
function nine_onclick(){
  current.push("9")
  console.log(current)

}
function zero_onclick(){
  current.push("0")
  console.log(current)

}
function plus_onclick(){
  current.push("plus")
  console.log(current)

}
function decimal_onclick(){
  current.push(".")
  console.log(current)
}
function minus_onclick(){
  current.push("minus")
  console.log(current)

}

function multiply_onclick(){
  current.push("multiply")
  console.log(current)
}
function divide_onclick(){
  current.push("divide")
  console.log(current)
}








function equals_onclick(){
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
  for(var i = 0;i<op.length;i++){
    if (op[i] == "plus"){
        console.log(Number(number[i + 1]))

        if (i ==0){
          out += Number(number[i+ count]) + Number(number[i +1+ count])
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
        out += Number(number[i+ count]) - Number(number[i +1+ count])
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
          out += Number(number[i+ count]) *  Number(number[ i + 1+ count])
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

          out += Number(number[i+ count]) /  Number(number[i + 1+ count])
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

  document.getElementById("output").innerHTML = out
}
function re_order_for_pemdas(){
  //re-order
}
function reset_onclick(){
  current = []
  number = []
  out = null
  op = [];

}
