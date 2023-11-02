const { Sunscreen } = require('../models')

module.exports = {
    // ดึงข้อมูลครีมกันแดดทั้งหมด
    async index(req, res) {
        try {
            const sunscreens = await Sunscreen.findAll()
            res.send(sunscreens)
        } catch (err) {
            res.status(500).send({
                error: 'ข้อมูลครีมกันแดดไม่ถูกต้อง'
            })
        }
    },

    // สร้างข้อมูลครีมกันแดด
    async create(req, res) {
        try {
            const sunscreen = await Sunscreen.create(req.body)
            res.send(sunscreen.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'ไม่สามารถสร้างข้อมูลครีมกันแดดได้'
            })
        }
    },

    // แก้ไขข้อมูลครีมกันแดด, ระงับ, เปิดใช้งาน
    async put(req, res) {
        try {
            await Sunscreen.update(req.body, {
                where: {
                    id: req.params.sunscreenId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'ไม่สามารถแก้ไขข้อมูลครีมกันแดดได้'
            })
        }
    },

    // ลบข้อมูลครีมกันแดด
    async remove(req, res) {
        try {
            const sunscreen = await Sunscreen.findOne({
                where: {
                    id: req.params.sunscreenId
                }
            })
            if (!sunscreen) {
                return res.status(403).send({
                    error: 'ข้อมูลครีมกันแดดไม่ถูกต้อง'
                })
            }
            await sunscreen.destroy()
            res.send(sunscreen)
        } catch (err) {
            res.status(500).send({
                error: 'ข้อมูลครีมกันแดดไม่ถูกต้อง'
            })
        }
    },

    // ดึงข้อมูลครีมกันแดดด้วย ID
    async show(req, res) {
        try {
            const sunscreen = await Sunscreen.findByPk(req.params.sunscreenId)
            res.send(sunscreen)
        } catch (err) {
            res.status(500).send({
                error: 'ข้อมูลครีมกันแดดไม่ถูกต้อง'
            })
        }
    },
}
