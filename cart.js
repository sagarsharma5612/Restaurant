let basket = JSON.parse(localStorage.getItem('data')) || []
     
    const cartAmount = () =>{
        let cartIcon = document.getElementById('cart_icon')
    
        let cart_icon = basket.length;
    
        cartIcon.innerHTML= basket.length;
    }
    
    let generateShoppingCart = (id,) =>{
        const shopping_Cart = document.getElementById('shopping')
        return (shopping_Cart.innerHTML = basket.map((value) =>{

            const {id,name,price,img} = value;
            
            return `
            <div class="shop-container">
            <div class="id">${id}</div>
            <img src="${img}" alt="" class="img" />
            <div class="name">${name}</div>
            <div class="price">${price}</div>
            <div class="increment add">+</div>
            <div class="number">0</div>
            <div class="decrement add">-</div>
            <button class="delete" onclick="remove_to_cart('${id}')">Remove</button>
            </div>
            `
        })
    )
    }
    
    generateShoppingCart()

    cartAmount()


    const remove_to_cart = (id) =>{
           basket = basket.filter((value) =>value.id != id)

           localStorage.setItem('data', JSON.stringify(basket))
           alert('item removed')

           cartAmount()
           generateShoppingCart()
    }
