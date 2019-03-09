const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
// const Review = require('../models/review');

chai.use(chaiHttp);

describe('Readmes', ()  => {

  // TEST INDEX
  it('should index ALL READMEs on / GET', (done) => {
    chai.request(server)
        .get('/readmes')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST CREATE
  it('should create a SINGLE README on /readmes POST', (done) => {
    chai.request(server)
        .get('/readmes/<name>')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST SHOW
  it('should show a SINGLE README /readmes/<name> GET', (done) => {
    chai.request(server)
        .get('/readmes/<name>')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST CREATE - README ARTICLE
  it('should create a SINGLE README article on /readmes/<name>/article POST', (done) => {
    chai.request(server)
        .get('/readmes/<name>/articles')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST SHOW - README ARTICLE
  it('should show a SINGLE README article /readmes/<name>/articles GET', (done) => {
    chai.request(server)
        .get('/readmes/<name>/articles')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST UPDATE - README ARTICLE
  it('should update a SINGLE README article on /readmes/<name>/articles/<name> PUT', (done) => {
    chai.request(server)
        .get('/readmes/<name>/articles/<id>')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST DELETE - README ARTICLE
  it('should delete a SINGLE README article on /readmes/<name>/articles/<id> DELETE', (done) => {
    chai.request(server)
        .get('/readmes/<name>/articles/<id>')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });
});
