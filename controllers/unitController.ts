const Vendor = require("../models/vendor");
const Unit = require("../models/unit");

const getAllUnits = async (req: any, res: any) => {
  try {
    const units = await Unit.findAll();

    res.status(200).json({ units });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const createUnit = async (req: any, res: any) => {
  try {
    const { name } = req.body;

    const unit = await Unit.findOne({ where: { name: name } });

    if (unit) {
      throw { status: 409, message: "Unit has already exist" };
    }

    const newUnit = await Unit.create({ name });

    res
      .status(201)
      .json({ message: "Unit created successfully", unit: newUnit });
  } catch (error: any) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Something went wrong" });
  }
};

module.exports = { getAllUnits, createUnit };
