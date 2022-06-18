let newarrival = [
  {
    img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5L0dyYXlfbl8xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "True Wireless Dynamic Earbuds",
    rating: "4.5/5 ★",
    price: "₹1,999",
    offer: "UP TO 35% OFF",
  },
  {
    img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5L0dyYXlfbl8xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "True Wireless Dynamic Earbuds",
    rating: "4.5/5 ★",
    price: "₹1,999",
    offer: "UP TO 35% OFF",
  },
  {
    img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5L0dyYXlfbl8xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "True Wireless Dynamic Earbuds",
    rating: "4.5/5 ★",
    price: "₹1,999",
    offer: "UP TO 35% OFF",
  },
  {
    img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5L0dyYXlfbl8xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "True Wireless Dynamic Earbuds",
    rating: "4.5/5 ★",
    price: "₹1,999",
    offer: "UP TO 35% OFF",
  },
  {
    img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5L0dyYXlfbl8xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "True Wireless Dynamic Earbuds",
    rating: "4.5/5 ★",
    price: "₹1,999",
    offer: "UP TO 35% OFF",
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
    box2.append(price, discount);
    img.addEventListener("click",function(){
      localStorage.setItem("product",JSON.stringify(elem));
      window.location.href="pr.html"
     })
    box3 = document.createElement("div");
    box3.append(box, box2);
    document.querySelector("#main").append(box3);
  });
}
