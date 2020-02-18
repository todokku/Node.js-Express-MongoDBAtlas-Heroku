const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");

//查询数据库所有数据
router.get("/", async (req, res) => {
  try {
    const fineCoupons = await Coupon.find();
    res.json(fineCoupons);
  } catch (err) {
    res.json({ message: err });
  }
});
//添加数据
router.post("/", async (req, res) => {
  const coupon = new Coupon({
    title: req.body.title,
    code: req.body.code,
    due_date: req.body.due_date,
    percent: req.body.percent,
    is_enabled: req.body.is_enabled
  });
  try {
    const saveCoupon = await coupon.save();
    res.json(saveCoupon);
  } catch (err) {
    res.json({ message: err });
  }
});
//查找对应id的数据
router.get("/:couponId", async (req, res) => {
  try {
    const findCoupon = await Coupon.findById(req.params.couponId);
    res.json(findCoupon);
  } catch (err) {
    res.json({ message: err });
  }
});
//删除数据
router.delete("/:couponId", async (req, res) => {
  try {
    const removeCoupon = await Coupon.remove({ _id: req.params.couponId });
    res.json(removeCoupon);
  } catch (err) {
    res.json({ message: err });
  }
});
//修改数据
router.patch("/:couponId", async (req, res) => {
  try {
    const updateCoupon = await Coupon.updateOne(
      { _id: req.params.couponId },
      {
        $set: {
          title: req.body.title,
          code: req.body.code,
          due_date: req.body.due_date,
          percent: req.body.percent,
          is_enabled: req.body.is_enabled
        }
      }
    );
    res.json(updateCoupon);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
