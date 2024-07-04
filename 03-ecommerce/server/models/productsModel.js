const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    orders: [{}],
    cart: [{}],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("product", productSchema);

module.exports = Products;
