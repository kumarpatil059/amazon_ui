export const cart=[
    
]

export function addToCart(productId){
    let matchingItem;
      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
        }
      });
      if (matchingItem) {  // if item is already in the cart matchingItem has truthy value
        matchingItem.quantity+=1;
      } else{
        cart.push({
          productId:productId,
          quantity:1
        })
      }
  }