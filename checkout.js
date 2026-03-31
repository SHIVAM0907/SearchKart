import {cart,removeFromCart} from './cart.js';
import {product} from './product.js';
import {formatCurrency} from './product-price.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from './deliveryoptions.js';



const today = dayjs();
const deliveryDate = today.add(7,'days');
console.log(deliveryDate.format('dddd, MMMMM D'))

let cartsSummaryHTML = '';

cart.forEach((cartItem) =>{
    const productId= cartItem.productId;
    let matchingProduct;

    product.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product;
        }
    });
      if (!matchingProduct) {
    return;
  }

    cartsSummaryHTML  +=
    

`   <tbody class = ".js-order-item-${matchingProduct.id}">
        <tr>
            <td class="align-img ">
            <img src="${matchingProduct.image}" alt="" />
            <span>${matchingProduct.name}</span>
            </td>
            <td><span>${ formatCurrency(matchingProduct.priceCent)}</span></td>
            <td>
            <div class="quality-input">
                <button>-</button>
                <input type="text" value="${cartItem.quantity}" />
                <button>+</button>
            </div>
            </td>
            <td>$150</td>
            <td>
            <i class="fa fa-remove icon custom-delete-button js-delete-link" data-product-id="${matchingProduct.id}"></i>
            </td>
        </tr>
        
        <tr class="delivery-row">
            <td colspan="5">
            <div class="delivery-details">
                <p><strong>Delivery Date:</strong> ${cartItem.deliveryDate || "Within 3-5 days"}</p>
                <p><strong>Delivery Type:</strong> Standard Shipping</p>
                <p><strong>Address:</strong> ${cartItem.address || "Enter your address"}</p>
            </div>
            </td>
        </tr>
    </tbody>
`;
});

function deliveryOptionsHTML(matchingProduct,cartItem){

    let html = ''
    deliveryOptions.forEach((deliveryOptions) =>{
        const today =dayjs();
        const deliveryDate = today.add(
            deliveryOptions.deliveryDays,'dayas'
        );
        const dateString =deliveryDate.fromat(
            'dddd,MMMM D'
        );

        const princString = deliveryOptions.priceCents ===0
        ?'FREE': `$${formateCurrency(deliveryOptions.priceCents)}`
        
        const isChecked = deliveryOptions.id === cartItem.deliveryOptionId;
        
        html += 
        
        `
        ‹div class="delivery-option">
        < input type="radio"
        ${isChecked ? `checked` : ''}
        class="delivery-option-input" name="delivery-option-${matchingProduct.
        id}">
        < div>
        ‹div class="delivery-option-date"›
        Monday, June 13
        I
        </div>
        ‹div class= "delivery-option-price">
        $9.99 - Shipping
        </ div>
        </div>
        </div>
    `
    })
}

document.querySelector('.js-order-summary').innerHTML = cartsSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) =>{
    link.addEventListener('click',() =>{
        const productId =link.dataset.productId;
        removeFromCart(productId);
        

        // const container = document.querySelector(`.js-order-summary-${productId}`);
        // container.remove();

        const container = document.querySelector(`.js-orderx-item-${productId}`);

        if (container) {
        container.remove();
        }

    });
})