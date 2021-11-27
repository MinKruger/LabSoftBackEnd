const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  addParceiroControllerFactory,
} = require("../factories/controllers/parceiro/add-parceiro-controller");
const {
  deleteParceiroControllerFactory,
} = require("../factories/controllers/parceiro/delete-parceiro-controller");
const {
  getAllParceirosControllerFactory,
} = require("../factories/controllers/parceiro/get-all-parceiros-controller");
const {
  updateParceiroControllerFactory,
} = require("../factories/controllers/parceiro/update-parceiro-controller");

const router = Router();

const addParceiroController = addParceiroControllerFactory();
const getAllParceirosController = getAllParceirosControllerFactory();
const deleteParceiroController = deleteParceiroControllerFactory();
const updateParceiroController = updateParceiroControllerFactory();

router.use(middlewareAuthentication);

router.post("/", (req, res) => addParceiroController.handle(req, res));
router.get("/", (req, res) => getAllParceirosController.handle(req, res));
router.delete("/:id", (req, res) => deleteParceiroController.handle(req, res));
router.put("/:id", (req, res) => updateParceiroController.handle(req, res));

exports.ParceiroRouter = router;
