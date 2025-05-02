const ItemModel = require("../model/ItemModel"); // Replace with your actual model

const searchItems = async (req, res) => {
    try {
        const query = req.query.q; // Get the search term from the query string
        if (!query) {
            return res.status(400).json({ message: "Search term is required" });
        }

        // Perform a case-insensitive search in the database
        const results = await ItemModel.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
            ],
        });

        res.status(200).json({ results });
    } catch (error) {
        console.error("Error during search:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { searchItems };