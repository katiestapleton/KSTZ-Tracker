// ticket model
const router = require('express').Router();
const ticket = require('../model/tickets.model');

// create ticket
router.route('/create').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const projectName = req.body.projectName;
  const assignee = req.body.assignee;
  const priority = req.body.priority;
  const status = req.body.status;
  const type = req.body.type;

  const newTicket = new ticket({
    title,
    description,
    projectName,
    assignee,
    priority,
    status,
    type,
  })

newTicket.save()
  .then(()=> res.json('Ticket creation successful.'))
  .catch(error => res.status(400).json('Unable to create ticket. Error: ' + err));
});

// read ticket
router.route('/id').get((req, res) => {
  ticket.findById(req.params.id)
    .then(tickets => res.json(tickets))
    .catch(err => res.status(400).json('Unable to load ticket. Error: ' + err));
});

// update ticket
router.route('/update/:id').post((req,res) => {
  ticket.findById(req.params.id)
    .then(ticket => {
      ticket.title = req.body.title;
      ticket.description = req.body.description;
      ticket.projectName = req.body.projectName;
      ticket.assignee = req.body.assignee;
      ticket.priority = req.body.priority;
      ticket.status = req.body.status;
      ticket.type = req.body.type;
        
      ticket.save()
        .then(() => res.json('Ticket updated.'))
        .catch(err=> res.status(400).json('Unable to update ticket. Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete ticket
router.route('/:id').delete((req, res) => {
  ticket.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('Ticket deleted.'))
    .catch(err => res.status(400).json('Unable to delete ticket. Error: ' + err));
});

module.exports = router;