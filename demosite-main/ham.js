function hampress(){
    const hamburger = document.getElementById("hambur");
    const aside = document.getElementById("aside");
  
    // Toggle the aside visibility
    hamburger.addEventListener("click", () => {
      aside.classList.toggle("active");
      console.log("toggled");
    });
}