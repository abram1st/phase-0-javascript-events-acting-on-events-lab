// Your code here
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  }); 

  const dodger = document.getElementById("dodger");

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 





  document.addEventListener("keydown", function(event) {
    if (event.key === "arrowRight") {
      const rightNumbers = dodger.style.left.replace("px", "");
      const right = parseInt(rightNumbers, 10);
  
      dodger.style.left = `${right - 1}px`;
    }
  }); 

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 400) {
      dodger.style.left = `${left + 1}px`;
    }
  } 
  document.addEventListener("keydown", function(event) {
    if (event.key === "arrowRight") {
      moveDodgerRight();
    }
  }); 
 