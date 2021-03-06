module.exports = function (stockRepository) {
    return {
        stockUp: function (req, res, next) {
            stockRepository.
                stockUp(req.body.isbn, req.body.count).
                then(function () {
                    res.json({isbn: req.body.isbn, count: req.body.count});
                }).
                catch(next);
        },
        findAll: function (req, res, next) {
            stockRepository.
                findAll().
                then(function (results) {
                    res.json(results);
                }).
                catch(next);
        },
        getCount: function (req, res, next) {
            stockRepository.
                getCount(req.params.isbn).
                then(function (result) {
                    if (result) {

                        res.format({
                   
                        'text/html': function(){
                            res.send('<div>Copies left:' + result +'</div>');
                        },

                        'application/json': function(){
                            res.send({count: result});
                        },

                        'default': function() {
                            // log the request and respond with 406
                            res.status(406).send('Not Acceptable');
                        }
                        });


                        //res.json({count: result});
                    } else {
                        next();
                    }
                }).
                catch(next);
        },
        hello: function (req, res) {
            res.send('Hello world!');
        }
    };
};