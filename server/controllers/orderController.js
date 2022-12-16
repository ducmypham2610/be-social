const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  const { userId, typeId } = req.body;
  const order = await Order.create({ user: userId, type: typeId });
  return res.status(200).json({
    status: "Order created",
    order,
  });
};

exports.getAllOrder = async (req, res) => {
  const orders = await Order.find({});

  if (!orders) {
    return res.status(204).json({
      status: "No order found",
    });
  }

  return res.status(200).json({
    status: "Success",
    orders,
  });
};

exports.updateOrder = async (req,res) => {
  
}