import {cart,addToCart} from './cart.js';
import {product} from './product.js';
import {formatCurrency} from './product-price.js';

let productsHTML = '';
product.forEach((product)=>{
  productsHTML += `
      <div class="wid-25 arrange-left">
                <div class="cart">
                    <div>
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="cart-details">
                        <h6>${product.name} </h6>  
                        <div class="Cart-price">
                            <h7 class="price" >${formatCurrency(product.priceCent)}</h7> 


                        </div>      
                    </div>
                    
                    <div class="Cart-footer">
                       <div class="product-quantity-container">
                        <select>
                          <option selected value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>

                            <button class = "js-add-to-cart"
                            data-product-id ="${product.id}" 
                            href="#"><i class="fa-solid fa-cart-shopping"></i>
                            Add to Cart </button>
                    </div>
                </div>
            </div>
             
  `;
 
});

document.querySelector('.js-product-grid').
innerHTML = productsHTML;

function updateCartQuantity(){
  // Adding Quantity
    let cartQuantity=0;
    cart.forEach((cartItem)=>{
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {

  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();

    
    

  });
});










