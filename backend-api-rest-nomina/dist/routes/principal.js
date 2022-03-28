"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const principal_controller_1 = require("../controllers/principal.controller");
const principal_controller_2 = require("../controllers/principal.controller");
const principal_controller_3 = require("../controllers/principal.controller");
const router = (0, express_1.Router)();
router.route("/").get(principal_controller_1.menuPrincipal);
router.route("/dpto").get(principal_controller_2.principal3);
router.route("/empl").get(principal_controller_3.principal4);
exports.default = router;