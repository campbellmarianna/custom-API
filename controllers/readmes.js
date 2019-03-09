const Readme = require('../models/readme.js')
module.exports = app => {
    // OUR MOCK ARRAY OF PROJECTS
    // let readmes = [
    //     { name: "Heroku",
    //     URL: "https://github.com/heroku/heroku-repo/blob/master/README.md",
    //     description: "This plugin adds some commands to the heroku gem to interact with the app's repo",
    //     publication: "https://medium.com/@nicolaisafai/how-to-deploy-your-node-js-mongodb-app-to-the-web-using-heroku-63d4bccf2675",
    //     createdAt: "03/04/19"},
    //     { name: "Flask",
    //       URL: "https://github.com/pallets/flask/blob/master/README.rst",
    //       description: "Flask is a lightweight WSGI web application framework. ",
    //       publication: "https://medium.com/@jasmine.yhumbert/how-to-get-your-flask-app-running-on-heroku-892030811c0f",
    //       createdAt: "03/04/19"}
    // ]

    // INDEX
    app.get('/readmes/index', (req, res) => {
        Readme.find({})
          .then(readmes => {
            res.render("readmes-index", { readmes });
          })
          .catch(err => {
            console.log(err.message);
          });
    });

    // New
    app.get('/readmes/new', (req, res) => {
      res.render('readmes-new');
    })

    // CREATE
    app.post("/readmes/new", (req, res) => {
        console.log(req.body)
        // INSTANTIATE INSTANCE OF POST MODEL
       const readme = new Readme(req.body);

       // SAVE INSTANCE OF Readme MODEL TO DB
       readme.save((err, post) => {
         // REDIRECT TO THE ROOT
         return res.redirect(`/readmes`);
      });
    });

    // SHOW
    app.get("/readmes/:id", function(req, res) {
      // LOOK UP THE README
      Readme.findById(req.params.id)
        .then(readme => {
          res.render("readmes-show", { readme });
        })
        .catch(err => {
          console.log(err.message);
        });
    });

    // EDIT
    app.get('/readmes/:id/edit', (req, res) => {
      Readme.findById(req.params.id, function(err, readme) {
        res.render('readmes-edit', {readme: readme});
      })
    })

    // UPDATE
    app.put('/readmes/:id', (req, res) => {
      Readme.findByIdAndUpdate(req.params.id, req.body)
        .then(readme => {
          res.redirect(`/readmes/${readme._id}`)
        })
        .catch(err => {
          console.log(err.message)
        })
    })

    // DELETE
    app.delete('/readmes/:id', function (req,res) {
        Readme.findByIdAndRemove(req.params.id).then((readme) => {
            res.redirect('/readmes/index');
        }).catch((err) => {
            console.log(err.message);
        });
    });



};
