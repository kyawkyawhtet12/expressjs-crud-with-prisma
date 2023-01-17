const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const getAllPost = async(req, res, next) => {
    const posts = await prisma.post.findMany();

    return res.send(posts)
}

const createPost = async(req, res) => {
    console.log(req.body);
    const newPost = await prisma.post.create({
        data : {
            title: req.body.title,
            content: req.body.content,
            author: {
                connect: {
                    id: parseInt(req.body.authorId),
                }
            }
        }
    })
    return res.send(newPost);

}

const editPost = async (req, res) => {
    const updatedPost = await prisma.post.update({
        where:{
            id: parseInt(req.body.id),
        },
        data: {
            title: req.body.title,
            content: req.body.content,
            authorId: req.body.author,
        }
    });

    return res.send(updatedPost);
}

module.exports = {getAllPost, createPost,editPost}