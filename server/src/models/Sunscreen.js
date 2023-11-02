module.exports = (sequelize, DataTypes) => {
    const Sunscreen = sequelize.define('Sunscreen', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        SPF: DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        volume: DataTypes.STRING,
        type: DataTypes.STRING,
        image: DataTypes.STRING, // เพิ่มฟิลด์เพื่อเก็บ URL ของรูปภาพ
    });
    return Sunscreen;
};
