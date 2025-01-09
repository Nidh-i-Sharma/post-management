import TagModel from "../models/tag.model.js";
import PostModel from "../models/post.model.js";
import s3FileUpload from '../utils/s3.imageupload.js';
import { createTagService } from './tag.controller.js';

const getPosts = async (req, res) => {
    try {
       const { page, limit, sort, searchQuery, tag } = req.query;


        // Prepare query object
        const query = {};
        if (searchQuery) {
            query.$or = [
                { title: new RegExp(searchQuery, 'i') },
                { descrption: new RegExp(searchQuery, 'i') },
            ];
        }

        if (tag) {
            const tagObj = await TagModel.findOne({ tagName: tag });
            if (tagObj) query.tags = tagObj._id;
        }

        
        const posts = await PostModel.find(query)
            .sort({ createdAt: sort === 'asc' ? 1 : -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .populate('tags', 'tagName');

        res.status(200).json({message :"Post fetched successfully", data:posts});
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
};

const createPost = async (req, res) => {
    try {
        const file = req.file;

        const { title, descrption, tags = [] } = req.body;

        if(!title || !descrption || !file){
           return res.status(400).json({message :"Kindly send the required information"})
        }

        
        let s3FIleLocation;
        if (file && file.buffer && file.originalname) {
            s3FIleLocation = await s3FileUpload(file.buffer, file.originalname);
        }

       
        
        const tagIds = [];

        for (const tagName of tags) {
            const tagData = await createTagService(tagName);
            tagIds.push(tagData._id);
        }
        // Create and save the post
        const newPost = new PostModel({ title, descrption, image : s3FIleLocation, tags: tagIds });

        const savedPost = await newPost.save();

        return res.status(201).json({message :"Post created successfully", data : savedPost});
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
};


// Export functions for use in other files
export { getPosts, createPost };
