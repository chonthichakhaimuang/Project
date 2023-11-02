const SunscreenController = require('./controllers/SunscreenController')

module.exports = (app) => {
    // สร้างข้อมูลครีมกันแดด
    app.post('/sunscreen', SunscreenController.create);

    // แก้ไขข้อมูลครีมกันแดด, ระงับ, เปิดใช้งาน
    app.put('/sunscreen/:sunscreenId', SunscreenController.put);

    // ลบข้อมูลครีมกันแดด
    app.delete('/sunscreen/:sunscreenId', SunscreenController.remove);

    // ดึงข้อมูลครีมกันแดดด้วย ID
    app.get('/sunscreen/:sunscreenId', SunscreenController.show);

    // ดึงข้อมูลครีมกันแดดทั้งหมด
    app.get('/sunscreens', SunscreenController.index);
}
