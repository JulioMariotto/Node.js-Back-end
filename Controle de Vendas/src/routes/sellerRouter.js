const express = require("express");
const sellerRouter = express.Router();
const sellerController = require("../controllers/sellerController");
const auth = require("../middlewares/auth");
const validator = require("../middlewares/schemaValidator");

sellerRouter.post("/authentication", validator, sellerController.Authentication);
sellerRouter.get("/listAllSellers", auth, sellerController.listAllSellers);
sellerRouter.post("/searchSellerByName", auth, validator, sellerController.searchSellerByName);
sellerRouter.post("/newSeller", auth, validator, sellerController.newSeller);
sellerRouter.delete("/deleteSeller/:id", auth, sellerController.deleteSeller);
sellerRouter.put("/updateSeller", auth, validator, sellerController.updateSeller);

module.exports = sellerRouter;
