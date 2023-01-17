const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllUsers= async  (req, res, next) => {
    const users = await prisma.user.findMany()
    if(res.status(200)){
        console.log(users);
       return res.json(users);
      
    }else{
        return res.send(console.error());
    }
}

const createUser = async (req, res) => {
    const newUser = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            posts: {
                create: {
                    title: req.body.title,
                    content: req.body.content,
                }
            }
        }
    })

    if(res.status(200)){
        return res.status(200).send(newUser)
    }
}

const updateUser =async (req, res) => {
    const updateUser = await prisma.user.update({
        where: {
            id: parseInt(req.body.id),
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            
        }

    })
    return res.send(updateUser)
}

const deleteUser = async (req, res) => {
    console.log(req.params.id);
    const deletedUser = await prisma.user.delete({
        where: {
            id: parseInt(req.params.id),
        }
    })

    return res.send(deletedUser.name)
}



module.exports = {getAllUsers, createUser, updateUser, deleteUser}