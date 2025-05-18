const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    embedLink: { type: String, required: true },
    title: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);

const UrlModel = mongoose.model("darkweb_url", urlSchema);

module.exports = { UrlModel };
