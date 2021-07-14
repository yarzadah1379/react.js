const router =require('express').Router()

const User=require('../models/user')



router.post('/user' , async (req, res) => {
    try {
        const user = new User()
        
        user.name = req.body.name
        user.lname = req.body.lname 
        user.email = req.body.email 
        user.password = req.body.password

        await user.save()

        res.json({
            status: true,
            message: "successfuly saved"
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})


//get api

router.get('/user', async (req, res) => {
    try {
        let user = await User.find()
        res.json({
            status: true,
            category: category
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})

// get request - get a category by id
router.get('/user/:id', async (req, res) => {
    try {
        let user = await User.findOne({_id: req.params.id})
        res.json({
            status: true,
            user: user
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// put request - update category
router.put('/user/:id', async (req, res) => {
    try {
        let updateUser= await User.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: {
                name: req.body.name,
                lname: req.body.lname,
                email: req.body.email,
                password: req.body.password,

            }},
            {upsert: true}
        )
        res.json({
            status: true,
            updateUser: updateUser
        })
    }
    catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})

//delete category
router.delete('/user/:id' , async (req, res) => {
    try {
        let user = await User.findByIdAndDelete({_id: req.params.id})        
            res.json({
            status: true,
            deletedUser: user
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})


module.exports = router