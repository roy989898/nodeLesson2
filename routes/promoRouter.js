/**
 * Created by User on 17/8/2016.
 */
module.exports=function () {
    var express = require('express');
    var bodyParser = require('body-parser');
    var promoRouter = express.Router();

    promoRouter.use(bodyParser.json());

    promoRouter.route('/')
        .all(function (req, res, next) {
            res.writeHead(200, {'Content-type': 'text/html'});
            next();

        })
        .get(function (req, res, next) {
            res.end('Will send all the leader to you!');

        })
        .post(function (req, res, next) {
            res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);

        })
        .delete(function (req, res, next) {
            res.end('Deleting all leadership');
        });

    promoRouter.route('/:leaderID')
        .all(function (req, res, next) {
            res.writeHead(200, {'Content-type': 'text/html'});
            next();

        })
        .get(function (req, res, next) {
            res.end('Will get the leader: ' + req.params.leaderID + 'to You!');
        })
        .put(function (req, res, next) {
            res.write('Updating the leader: ' + req.params.leaderID + '\n');
            res.end('Will update the leader: ' + req.body.name +
                ' with details: ' + req.body.description);
        })

        .delete(function (req, res, next) {
            res.end('Deleting leader: ' + req.params.leaderID);
        });

    return promoRouter;


}
