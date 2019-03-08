module.exports = app => {
    // OUR MOCK ARRAY OF PROJECTS
    let readmes = [
        { "URL": "https://github.com/heroku/heroku-repo/blob/master/README.md",
        "description": "This plugin adds some commands to the heroku gem to interact with the app's repo",
        "publication": "https://medium.com/@nicolaisafai/how-to-deploy-your-node-js-mongodb-app-to-the-web-using-heroku-63d4bccf2675",
        "createdAt": "03/04/19"},
        { "URL": "https://github.com/pallets/flask/blob/master/README.rst",
          "description": "Flask is a lightweight WSGI web application framework. ",
          "publication": "https://medium.com/@jasmine.yhumbert/how-to-get-your-flask-app-running-on-heroku-892030811c0f",
          "createdAt": "03/04/19"}
    ]
    // ROOT ROUTE
    app.get('/', (req, res) => {
        // res.json({readmes:readmes});
        res.render('home', { msg: 'Handlebars are Cool!' });
    })
};
