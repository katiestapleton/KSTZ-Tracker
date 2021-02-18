// project module
const router = require('express').Router();
const project = require('../models/projects.model')

// create project
router.route('/').post((req, res) => {
  const projectName = req.body.name;
  const newProject = new project({
    projectName,
  })
  newProject.save()
    .then(() => res.json('Project ' + projectName + ' now created.'))
    .catch(err => res.status(400).json('Unable to create project. Error: ' + err))
});

// read project
router.route('/').get((req, res) => {
  project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Unable to load project. Error: ' + err));
});

// delete project
router.route('/:id').delete((req, res) => {
  project.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Unable to delete project. Error: ' + err));
});

module.exports = router;
