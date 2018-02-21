mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
   _id: Number,
    fname: String,
    lname: String,
    userName: String,
    email: String,
    password: String,//לבדוק
    street: String,
    city: String,
    role: String,//או לקוח או מנהל
    //cart: [{ type: Schema.type.ObjectId, ref: 'cart'}],
    //order: [{ type: Schema.type.ObjectId, ref: 'order'}],
    //
    
});


var CategorySchema = new Schema({
    _id: Schema.type.ObjectId,
    name: string
   
});


var ProductSchema = new Schema({
    _id: Number,
    name: String,
    category_id: [{ type: Schema.type.ObjectId, ref:'Category'}],
    price: Number,
    image:String
});

var CartSchema = new Schema({
    _id: Schema.type.ObjectId,
    userId: [{type: Schema.type.ObjectId, ref: 'User'}],
    dateCreated: Date
});

var CartItemSchema = new Schema({
    _id: Schema.type.ObjectId,
    productId: [{type: Schema.type.ObjectId, ref: 'Product'}],
    quantity: Number, 
    price: Number,
    cartId:[{type: Schema.type.ObjectId, ref: 'Cart'}]
});

var orderSchema = new Schema({
    _id: Schema.type.ObjectId, 
    userId: [{type: Schema.type.ObjectId, ref: 'User'}],
    cartId: [{ type: Schema.Types.ObjectId, ref: 'Cart' }],
    totalPrice: Number,
    deliveryCity: String,
    deliveryStreet: String,
    deliveryDate: Date,
    orderDate: Date,
    ccLast4Digits: Number
});

module.exports = {
    Member: mongoose.model('User', MemberSchema),
    Category: mongoose.model('Category', CategorySchema),
    Order: mongoose.model('Order', OrderSchema),
    Cart: mongoose.model('Cart', CartSchema),
    Product: mongoose.model('Product', ProductSchema),
    Cart_item: mongoose.model('cartItem', CartItemSchema),
   // City: mongoose.model('city', ShopCity)
//
};