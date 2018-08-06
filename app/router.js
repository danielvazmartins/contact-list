module.exports = function(app) {

	// Página principal
	var index = require('./routes/index');
	app.use('/', index);

    // Permitar acesso via front do Angular
    app.use(function (req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Methods', 'DELETE,PUT');
    	next();
    });
    
    // Rota para as APIs REST
    var people = require('./routes/people');
    app.use('/people', people);
    
	var contacts = require('./routes/contacts');
	app.use('/contacts', contacts);
}