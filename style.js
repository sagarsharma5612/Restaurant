// console.log(Products);

const Shopping = document.querySelector('.container-shopping')


let basket = JSON.parse(localStorage.getItem('data')) || []


const ShoppingProducts = () =>{ 
Shopping.innerHTML = Products.map((value) =>{
    const {id, desc, name, img, price } = value;

    return `
    <div class="shop">
    <div class="desc">${desc}</div>
    <img src="${img}" alt="" class="img" />
    <div class="shop-data">
    <div class="name">${name}</div>
    <div class="price">${price}</div>
    <div class="quantity">
    <div class="increment">+</div>
    <div class="number">0</div>
    <div class="decrement">-</div>
    </div>
    <button onclick="add_to_cart('${id}','${name}','${desc}','${price}','${img}')" class="add_to_cart">Add to Cart</button>
    </div>
    </div>
    `
})
}

ShoppingProducts()




const add_to_cart = (id,name, desc, price, img) =>{

basket.push({
    id:id,
    name:name,
    desc:desc,
    price:price,
    img:img,
})

localStorage.setItem('data',JSON.stringify(basket))

alert('item Added')

cartAmount()
  
}


const cartAmount = () =>{
    let cartIcon = document.getElementById('cart_icon')

    let cart_icon = basket.length;

    cartIcon.innerHTML= cart_icon;
}

cartAmount()