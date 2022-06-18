let newarrival = [
  {
    img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjMxXC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Mens Spining Wheel Watch",
    rating: "3.6/5 ★",
    price: "₹9,499",
    price2: 9499,
    offer: "UPTO 37% OFF",
  },
];
// console.log(newarrival);
display(newarrival);
function display(newarrival) {
  newarrival.forEach(function (elem) {
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.img);
    let name = document.createElement("p");
    name.innerText = elem.name;
    let ratings = document.createElement("p");
    ratings.innerText = elem.rating;
    let box2 = document.createElement("div");
    let price = document.createElement("h2");
    price.innerText = elem.price;
    let discount = document.createElement("h3");
    discount.innerText = elem.discount;
  
    box.append(img, name, ratings);
    img.addEventListener("click",function(){
      localStorage.setItem("product",JSON.stringify(elem));
      window.location.href="pr.html"
     })
    box2.append(price, discount);
    box3 = document.createElement("div");
    box3.append(box, box2);
    document.querySelector("#main").append(box3);
  });
}
