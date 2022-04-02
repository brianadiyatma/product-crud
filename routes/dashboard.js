const express = require("express");
const dashboardCont = require("../controllers/dashboard");

const router = express.Router();

router.get("/", dashboardCont.getIndexPage);

router.get("/input", dashboardCont.getInputForm);

router.post("/submit-product", dashboardCont.postSubmitProduct);

router.post("/delete-product", dashboardCont.postDeleteProduct);

router.get("/edit-product/:idProduct", dashboardCont.getEditProduct);

router.post("/edit-product/",dashboardCont.postEditProduct);

module.exports = router;
