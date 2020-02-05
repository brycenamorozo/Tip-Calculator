let bill;
let percentage;

function presets(num) {
  bill = document.getElementById("input").value;
  percentage = num;
  if (bill >= 0) {
    total.innerHTML = "Total Tip: $" + (bill * percentage);
  }else if(bill < 0){
    total.innerHTML = "Bruh";
  } else {
    total.innerHTML = "Total Tip: $0.00";
  }
  
}


function custom() {
  bill = document.getElementById("input").value;
  percentage = document.getElementById("c").value /100;
  total.innerHTML = "Tip Total: $" + (bill * percentage);
  if (bill >= 0 && percentage >= 0 && percentage < 1) {
    total.innerHTML = "Total Tip: $" + (bill * percentage);
  }else if(bill < 0 || percentage < 0 || percentage >= 1){
    total.innerHTML = "Bruh";
  } else {
    total.innerHTML = "Total Tip: $0.00";
  }
  
}