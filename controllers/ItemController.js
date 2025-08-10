import Item from "../models/Item.js";

export const getItems = async (req, res) =>{
    const items = await Item.find();
    res.status(200).json({
        status : "success",
        message :"Get All Items Success",
        data : items
    });
};

export const createItem = async(req, res) => {
    const { name, quantity } = req.body;
    const newItem = new Item({ name, quantity });
    await newItem.save();
    res.status(200).json({
        status : "success",
        message : "Created Item Successfully!...",
        data : newItem,
        statusCode : 200
    });

}

export const updateItem = async(req, res) => {
        const { id } = req.params;
        const updated = await Item.findByIdAndUpdate(
            id,
            req.body,
             {
                new: true
            });
            res.status(200).json({
                data : updated
            });
}

export const deleteItem = async(req, res)=>{
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.status(200).json({
        status : "success",
        message : "Item Deleted Successfully!..",

    });
};