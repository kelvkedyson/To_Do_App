//body-parser module
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//todo list array data..
var data = [{ item: 'Make bed' }, { item: 'Take shower' }, { item: 'Have breakfast' }];

module.exports = function(app) {

    //handling the routes
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    //handling POST requests
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    //handling DELETE requests
    app.delete('/todo/:item', (req, res) => {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
};