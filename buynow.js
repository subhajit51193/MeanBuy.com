let cartArr=JSON.parse(localStorage.getItem("cart-data"))||[];
console.log(cartArr);
let carttotal=localStorage.getItem("carttotal")||0;
console.log(carttotal);
// console.log("hii...");
display(cartArr);
function display(cartArr){
    cartArr.forEach(element => {
        let tr=document.createElement("tr");
        tr.setAttribute("class","trrowprod");
        let td=document.createElement("td");
        td.setAttribute("class","itemcontent");
        let p1=document.createElement("p");
        p1.innerText=element.name;
        let p2=document.createElement("p");
        let span1=document.createElement("span");
        span1.innerText="Delivery Date:";
        span1.style.color="orange";
        let span2=document.createElement("span");
        span2.setAttribute("class","shipdate");
        span2.innerText="July 13,2022"
        span2.style.color="black";
        let span3=document.createElement("span");
        span3.innerText=element.price;
        let div=document.createElement("div");
        div.setAttribute("class","prodextras")
        span1.append(span2);
        p2.append(span1,span3);
        div.append(p2);
        td.append(p1,div);
        tr.append(td);
        document.querySelector("tbody").append(tr);
     });
     document.querySelector(".now>p>span").innerText=carttotal;
     document.querySelector(".now+p>span").innerText=carttotal;
     document.querySelector(".simplepay_amount").innerText=carttotal-1000;

}