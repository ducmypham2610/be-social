const Type = require("../models/typeModel");

exports.createType = async (req,res) => {
    const type = await Type.create(req.body);
    return res.status(200).json({
        status:"success",
        type
    })
}

exports.getAllTypes = async (req,res) => {
    const types = await Type.find({});
    return res.status(200).json({
        status:"success",
        types
    })
}

exports.getTypeById = async (req,res) => {
    const id = req.params.id;
    const type = await Type.findById(id);
    if(!type) {
        return res.status(204).json({
            status:"No type found",
        })
    }
    return res.status(200).json({
        status:"Type found",
        type
    })
}