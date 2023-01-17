// TODO - define routes

const router = require('express').Router();
const {
    //  getAllusers,
    //  createAuser,
    //  etc...
} = require("../../controllers/userController")


router.route('/').get(getAllusers).post()



module.exports = router;
