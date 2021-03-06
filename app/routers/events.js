var mariasql= require('mariasql');
new mariasql.Database({
    "hostname": "localhost",
    "user": "user",
    "password": "password",
    "database": "wastadb"
}).connect(function(error) {
    if (error) {
        return console.log("CONNECTION error: " + error);
    });
 

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving event: ' + id);
    db.collection('events', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('events', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addEvent = function(req, res) {
    var event = req.body;
    console.log('Adding event: ' + JSON.stringify(wine));
    db.collection('events', function(err, collection) {
        collection.insert(event, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateEvent = function(req, res) {
    var id = req.params.id;
    var event = req.body;
    delete event._id;
    console.log('Updating event: ' + id);
    console.log(JSON.stringify(wine));
    db.collection('events', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating event: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(event);
            }
        });
    });
}

exports.deleteEvent = function(req, res) {
    var id = req.params.id;
    console.log('Deleting event: ' + id);
    db.collection('events', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}


};