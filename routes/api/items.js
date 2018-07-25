const express = require('express');
const router = express.Router();//router is a part of express object

//Item Model
const Item = require('../../models/Item.js');

// @route GET reguest of api/items
// @desc what it does is Get All Items
// @access Public


router.get('/', (req, res) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => res.json(items))
});
// @route POST reguest of api/items
// @desc what it does is Create an Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});
// @route DELETE reguest of api/items
// @desc what it does is Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});


module.exports = router;
