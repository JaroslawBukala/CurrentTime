//get the display element from the html file
const timeDisplay = document.getElementById('time')

//use set interval
setInterval(()=>{
  let newTime = new Date()
  newTime = newTime.toString()
  //change display of innerHTML every 1000ms
//   let fullYear = seconds.getFullYear()
  timeDisplay.innerHTML = newTime
},1000)