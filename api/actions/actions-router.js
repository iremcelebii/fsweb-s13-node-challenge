const express = require("express");
const actionsModel = require("./actions-model");
const router = express.Router();
const actionMd = require("./actions-middlware");

router.get("/", async (req, res, next) => {
  try {
    const actions = await actionsModel.get();
    res.json(actions);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", actionMd.checkActionId, async (req, res, next) => {
  try {
    const action = await actionsModel.get(req.params.id);
    res.json(action);
  } catch (err) {
    next(err);
  }
});

// router.post(
//   "/",
//   projectMd.checkProject,
//   // projectMd.checkProjectNameUnique,
//   async (req, res, next) => {
//     try {
//       let project = req.body;
//       const nebakalim = await projectModel.insert(project);
//       res.status(201).json(nebakalim);
//     } catch (err) {
//       next(err);
//     }
//   }
// );

// router.put(
//   "/:id",
//   projectMd.checkProjectId,
//   projectMd.checkProject,
//   async (req, res, next) => {
//     try {
//       let project = req.body;
//       const nebakalim = await projectModel.update(req.params.id, project);
//       res.status(201).json(nebakalim);
//     } catch (err) {
//       next(err);
//     }
//   }
// );

// router.delete("/:id", projectMd.checkProjectId, async (req, res, next) => {
//   try {
//     await projectModel.remove(req.params.id);
//     //!hiçbir şey yazmayınca hata verdi
//     res.status(201).json({ message: "Silme işlemi başarılı" });
//   } catch (err) {
//     next(err);
//   }
// });

// router.get("/:id/actions", projectMd.checkProjectId, async (req, res, next) => {
//   try {
//     let nebakalim = await projectModel.getProjectActions(req.params.id);
//     res.status(201).json(nebakalim);
//   } catch (err) {
//     next(err);
//   }
// });
module.exports = router;
