export {};
const Vendor = require("../models/vendor");
const Unit = require("../models/unit");

const getAllVendors = async (req: any, res: any) => {
  try {
    const condition: any = {};
    const { unit_id } = req.query;

    if (unit_id) {
      condition.unit_id = unit_id;
    }

    const vendors = await Vendor.findAll({
      where: condition,
      include: {
        model: Unit,
        as: "units",
      },
    });

    res.status(200).json({ vendors });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const createVendor = async (req: any, res: any) => {
  try {
    const { unit_id, name, address } = req.body;

    const unit = await Unit.findByPk(unit_id);

    if (name === "" || address === "") {
      throw { status: 500, message: "Field can't be blank" };
    }

    if (!unit) {
      throw { status: 404, message: `Cannot find unit with id ${unit_id}` };
    }

    const vendor = await Vendor.findOne({ where: { name: name } });

    if (vendor) {
      throw { status: 409, message: "Vendor name can't be the same" };
    }

    const newVendor = await Vendor.create({ unit_id, name, address });

    res.status(201).json({
      success: true,
      message: "Vendor created successfully",
      vendor: newVendor,
    });
  } catch (error: any) {
    res
      .status(error.status || 500)
      .json({ success: false, error: error.message || "Something went wrong" });
  }
};

const updateVendor = async (req: any, res: any) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);

    if (!vendor) {
      throw { status: 404, message: "Vendor not found" };
    }

    const {name, address, unit_id} = req.body

    res.status(200).json({ success: true, data: vendor });
  } catch (error: any) {
    res
      .status(error.status || 500)
      .json({ success: false, error: error.message || "Something went wrong" });
  }
};

module.exports = { getAllVendors, createVendor, updateVendor };
