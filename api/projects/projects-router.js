const express = require("express");
const projectModel = require("./projects-model");
const router = express.Router();
const projectMd = require("./projects-middleware");

router.get("/", async (req, res, next) => {
  try {
    const projects = await projectModel.get();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", projectMd.checkProjectId, async (req, res, next) => {
  try {
    const project = await projectModel.get(req.params.id);
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  projectMd.checkProject,
  // projectMd.checkProjectNameUnique,
  async (req, res, next) => {
    try {
      let project = req.body;
      const nebakalim = await projectModel.insert(project);
      res.status(201).json(nebakalim);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
