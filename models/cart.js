// const mercadopago = require ('mercadopago');



module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty= oldCart.totalQty || 0;
    this.subTotalPrice=oldCart.subTotalPrice || 0;
    this.totalPrice=oldCart.totalPrice || 0;

    this.add= function(item, id){
        var storedItem = this.items[id];
        if(!storedItem){
            storedItem = this.items[id] = {item: item, qty:0, price:0};

        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
        this.subTotalPrice = storedItem.price;
       
    };
    this.generateArray = function(){
         var arr =[];
         for(var id in this.items){
             arr.push(this.items[id]);
         }
         return arr;
    };

// let preference = {
//     items: [
//       {
//         title: this.item,
//         unit_price: this.price,
//         quantity: this.qty,
//       }
//     ]
//   };
  
//   mercadopago.preferences.create(preference)
//   .then(function(response){
//   // Este valor reemplazará el string "$$init_point$$" en tu HTML
//     global.init_point = response.body.init_point;
//   }).catch(function(error){
//     console.log(error);
//   });
 
 };