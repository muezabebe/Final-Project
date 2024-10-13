import express from 'express'
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrder,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminauth.js'
import authUser from '../middleware/auth.js'
const orderRouter=express.Router();

//Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//user features
orderRouter.post('/userorders',authUser,userOrder)

export default orderRouter