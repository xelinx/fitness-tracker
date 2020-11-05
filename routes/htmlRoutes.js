const path = require("path");

module.exports = function(app) {
    //Index
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });
    
      //Exercise
      app.get('/exercise', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
      });
    
      //Stats
      app.get('/stats', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
      });
};