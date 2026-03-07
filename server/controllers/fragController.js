const Frag = require("../models/frag");

const getFrag = async (req, res) => {
    const frags = await Frag.find();
    res.json(frags);
};

const addCategory = async (req, res) => {
    const { name, description } = req.body;

    const savedCategory = await Frag.create({ name, description });

    res.status(201).json(savedCategory);
};

const deleteCategory = async (req, res) => {
    const deletedCategory = await Frag.findByIdAndDelete(req.params.id);
    res.json(deletedCategory);
};

module.exports = {
    getFrag,
    addCategory,
    deleteCategory
};
