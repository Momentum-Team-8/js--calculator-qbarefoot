
 function cal(val)
 {
     document.getElementById("result").value+=val
 }
   
 function solve()
 {
     let x = document.getElementById("result").value
     let y = eval(x)
     document.getElementById("result").value = y
 }

 function clr()
 {
     document.getElementById("result").value = ""
 }

// when you click on a number button, calculates in to a result screen.

// when you click on the equal button, it will return what results were inputed by the number/cal.