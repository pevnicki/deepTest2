const bcrypt = require('bcrypt');
const _ = require('lodash');
const {Settings} = require('../model/settings');
const express = require('express');
const router = express.Router();


//settings
router.post('/', async (req, res) => {

    const encData = req.body;
    const decData = aesjs.utils.utf8.fromBytes(encData);
    const json = JSON.parse(decData)

    const {id, role, flore, room} = json

    try {
        const settings = Settings.findById(json.id)
        if (settings) res.send('User exists')

        const setting = new Settings({
            _id: id,
            role: role,
            position: {
                building: {
                    flore: flore,
                    room: room,
                }
            }
        })

        setting.save()
        res.send(settings)
    } catch (e) {
        res.status(400).send(e)

    }

});

router.get('/', async (req, res) => {



})

module.exports = router;
