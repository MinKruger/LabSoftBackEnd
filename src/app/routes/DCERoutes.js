const { Router } = require("express");
const {
  createDCEControllerFactory,
} = require("../factories/controllers/dce/create-dce-controller");
const {
  deleteDCEControllerFactory,
} = require("../factories/controllers/dce/delete-dce-controller");
const {
  getAllDCEsControllerFactory,
} = require("../factories/controllers/dce/get-all-dces-controller");
const {
  getDCEByIdControllerFactory,
} = require("../factories/controllers/dce/get-dce-by-id-controller");
const {
  updateDCEControllerFactory,
} = require("../factories/controllers/dce/update-dce-controller");

const router = Router();

const createDCEController = createDCEControllerFactory();
const getDCEByIdController = getDCEByIdControllerFactory();
const getAllDCEsController = getAllDCEsControllerFactory();
const updateDCEController = updateDCEControllerFactory();
const deleteDCEController = deleteDCEControllerFactory();

router.get("/", (req, res) => getAllDCEsController.handle(req, res));
router.get("/:id", (req, res) => getDCEByIdController.handle(req, res));
router.post("/create", (req, res) => createDCEController.handle(req, res));
router.put("/update/:id", (req, res) =>
  updateDCEController.handle(req, res)
);
router.delete("/delete/:id", (req, res) =>
  deleteDCEController.handle(req, res)
);

exports.DCERouter = router;
