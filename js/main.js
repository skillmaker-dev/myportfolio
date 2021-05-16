const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--checked");
  })
);

const card = document.querySelectorAll(".skill-card");
const movingcard = document.querySelectorAll(".skill__description");


card.forEach((item) => item.addEventListener('mouseover' || 'click', () => {

  movingcard.forEach((item) => item.style.backgroundColor = colors());
  console.log(colors());


}));

function colors() {
  let colorArray = ["#0E6BA8","#5B1865","#6A8EAE","#474935","#D00000"];    
  return colorArray[Math.floor(Math.random() * colorArray.length)]
}