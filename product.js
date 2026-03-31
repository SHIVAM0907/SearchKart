 export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}
 
 export const product = [
  {
    id:"15b6fc6j-327a-4ec4-896f-486349e85a3d",
    image: "model1.png",
    name: "Cargo",
    priceCent:200
    
  },{
    id:"327a-15b6fc6j-486349e85a3d",
    image:'model1.png',
    name:'black and white cargo',
    priceCent:200,


  },
  {
    id:"486349e85a3d-fef34-4331r",
    image:'model1.png',
    name:'cargo',
    priceCent:200,
  }
];