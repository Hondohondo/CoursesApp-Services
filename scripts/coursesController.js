//nodefile system is needed to read and write to disk

var fs = require('fs');

module.exports.get = function (req, res) {
    var course = fs.readFileSync('app/data/course/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(course);
};

module.exports.save = function (req, res) {
    var course = req.body;
    fs.writeFileSync('app/data/course' + req.params.id + '.json', JSON.stringify(course));
    res.send(course);
};