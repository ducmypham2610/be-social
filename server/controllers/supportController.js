const Support = require("../models/supportModel");

exports.createSupport = async (req, res) => {
  console.log(req.body)
  const support = await Support.create(req.body);
  return res.status(200).json({
    status: "Order created",
    support,
  });
};

exports.getAllSupports = async (req,res) => {
    const supports = await Support.find({});
    if(!supports) {
        return res.status(204).json({
            status: "No supports found"
        })
    }
    return res.status(200).json({
        status:"success",
        supports
    })
}