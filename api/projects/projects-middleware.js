// projects ara yazılımları buraya
const projectModel = require("./projects-model");

async function checkProjectId(req, res, next) {
  try {
    const project = await projectModel.get(req.params.id);
    if (project) {
      // req.project = project; yapıp diğer tarafta json a bunu yazıyor
      next();
    } else {
      res.status(404).json({ message: "İstenen proje bulunamadı" });
    }
  } catch (err) {
    next(err);
  }
}

async function checkProject(req, res, next) {
  try {
    //   let {name,description} = req.body; olarak da alabilirim
    const project = req.body;
    if (project.name) {
    } else {
      return res.status(400).json({ message: "Lütfen proje ismini giriniz" });
    }
    if (project.description) {
      //req.payloadProject={name:name,description:description,completed:req.body.completed};
      //yapılabilirdi
      next();
    } else {
      return res
        .status(400)
        .json({ message: "Lütfen proje açıklamasını giriniz" });
    }
  } catch (err) {
    next(err);
  }
}

async function checkProjectNameUnique(req, res, next) {
  try {
    let projects = await projectModel.get();
    let project = req.body;
    for (let i = 0; i < projects.length; i++) {
      let namesorun = projects[i].name;
      if (project.name !== namesorun) {
        next();
      } else {
        return res.status(400).json({
          message:
            "Bu isme sahip bir proje bulunmakta, lütfen farklı bir isim giriniz",
        });
      }
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { checkProjectId, checkProject, checkProjectNameUnique };
