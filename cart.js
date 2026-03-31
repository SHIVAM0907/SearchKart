export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
        cart=[{
        productId:"15b6fc6j-327a-4ec4-896f-486349e85a3d",
        quantity:1,
        image:"kids.png",
        deliveryOptionsId:'2',

    },
    {
        productId:"978-3-16-148410-0",
        quantity:1,
        image:"kids.png",
        deliveryOptionsId:'1',
    }];

}

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
let matchingItem;

    cart.forEach((item)=>{
      if (productId === item.productId){
        matchingItem = item;

      }
    });
    if(matchingItem){
      matchingItem.quantity+=1;
    }
    else{
      cart.push({
      productId : productId,
      quantity:1,
      deliveryOptionsId:'1'
    });
    }

    saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();

}