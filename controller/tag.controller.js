import TagModel from "../models/tag.model.js";



const createTag = async (req, res) => {
    try {
        const { tagName } = req.body;
        const tagResponse = await createTagService(tagName);
        return res.status(201).json({ message: "Tag saved successfully", data: tagResponse });
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
};


const createTagService = async (tagName) => {

    if (!tagName) {
        return res.status(400).json({message : "Tag Name can't be empty"})
    }

    let tagObject = await TagModel.findOne({ tagName: tagName });
    if (!tagObject) {
        tagObject = new TagModel({ tagName });
        tagObject = await tagObject.save();
    }

    return tagObject;
};



const getAllTag = async (req, res) => {
    try {
        const tagList = await TagModel.find();

        res.status(200).json({ message: "Tag List fetched successfully", data: tagList });

    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
};


// Export functions for use in other files
export { getAllTag, createTag, createTagService };
