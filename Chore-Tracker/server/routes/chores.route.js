const ChoresController = require("../controllers/chores.controller")


module.exports = (app) => {
    app.get('/api/allChores', ChoresController.allChores)
    app.get('/api/findById/:id', ChoresController.findById)
    app.post('/api/addChores', ChoresController.addChore)
    app.put('/api/update/:id', ChoresController.updateById)
    app.delete('/api/delete/:id', ChoresController.deleteById)
}