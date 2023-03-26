// projects ara yazılımları buraya
const actionModel = require("./actions-model");

async function checkActionId(req, res, next) {
  try {
    const action = await actionModel.get(req.params.id);
    if (action) {
      // req.project = project; yapıp diğer tarafta json a bunu yazıyor
      next();
    } else {
      res.status(404).json({ message: "İstenen eylem bulunamadı" });
    }
  } catch (err) {
    next(err);
  }
}

async function checkAction(req, res, next) {
  //   try {
  //     //   let {name,description} = req.body; olarak da alabilirim
  //     const action = req.body;
  //     if (project.name) {
  //     } else {
  //       return res.status(400).json({ message: "Lütfen proje ismini giriniz" });
  //     }
  //     if (project.description) {
  //       //req.payloadProject={name:name,description:description,completed:req.body.completed};
  //       //yapılabilirdi
  //       next();
  //     } else {
  //       return res
  //         .status(400)
  //         .json({ message: "Lütfen proje açıklamasını giriniz" });
  //     }
  //   } catch (err) {
  //     next(err);
  //   }
}

module.exports = { checkActionId };
