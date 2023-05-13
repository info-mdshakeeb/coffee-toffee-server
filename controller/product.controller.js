const { getDb } = require("../utilities/mongodb");

module.exports.products = async (req, res) => {
    const db = getDb()
    const Products = await db.collection("products");
    const { limit } = req.query;
    console.log(limit);
    try {
        if (limit.length) {
            result = await Products.find({}).limit(parseInt(limit)).toArray();
            if (result.length === 0) {
                return res.status(404).json({ success: false, data: result });
            } else { res.status(200).json({ success: true, data: result }); }
        } else {
            result = await Products.find({}).toArray();
            if (result.length === 0) {
                return res.status(404).json({ success: false, data: result });
            } else { res.status(200).json({ success: true, data: result }); }
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}