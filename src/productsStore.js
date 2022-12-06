   

//Blue Hoodie: price_1MBadjHkxKmcowOHQpOxsNop

// Grey Beanie: price_1MBb0rHkxKmcowOHO5fnLTdw

//Truck Hat: price_1MBb6FHkxKmcowOH9yrDp5pY



import IMAGES from "./img";

const productsArray = [

{
 id: "price_1MBadjHkxKmcowOHQpOxsNop",
 title: "Blue Hoodie",
 price: "25.00",
 image: IMAGES.bluehoodie

},


{
    id: "price_1MBb0rHkxKmcowOHO5fnLTdw",
    title: "Grey Beanie",
    price: "15.00",
    image: IMAGES.greybeanie
   
   },


   {
    id: "price_1MBb6FHkxKmcowOH9yrDp5pY",
    title: "Truck Hat",
    price: "20.00",
    image: IMAGES.truckhat
   
   }, 
   

]

function getProductData(id) {
 let productData = productsArray.find(product => product.id === id)   

 if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
 }

 return productData;
}

export { productsArray, getProductData };