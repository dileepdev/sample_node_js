/**
 * Created by Dileep
 */
var express = require('express');
var UserModel = require('../model/user');

var router = express.Router();

router.route('/')

    // GET ALL DATA
    .get(function (req, res){
            const user = new UserModel();
            return user.find(function (err, users) {
                if (!err) {
                    return res.send({status : true, users : users});
                } else {
                    console.log(err);
                    return res.send({status : false, errorDesc : "Failed get data from DB."});
                }
            });
    })

router.route('/:id')

    // GET BY ID
    .get(function (req, res){
        const user = new UserModel();
        return user.findById(req.params.id, function (err, user) {
            if (!err) {
                console.log('get user '+ req.params.id);
                return res.send({status : true, user : user});
            } else {
                console.log(err);
                return res.send({status : false, errorDesc : 'error when get user '+ req.params.id});
            }
        });
    })



module.exports = router;