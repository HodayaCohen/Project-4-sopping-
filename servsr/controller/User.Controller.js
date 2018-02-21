//Routes
app.get('/', function (req, res) {
    res.send('Happy to see u');
    });
    
    app.get('/members', function (req, res) {
    console.log('getting all members');
    Member.find({})
        .exec(function (err, Members) {
            if (err) {
                res.send(404, 'Error has occurred!')
            } else {
                console.log(Members);
                res.json(Members);
            }
        });
    });
    
    // get one Member
    app.get('/members/:id', function (req, res) {
    console.log('getting on Member');
    Member.findOne({
        _id: req.params.id // body-parser did it !!!!
    }).exec(function (err, Member) {
        if (err) {
            console.log(err);
            res.send(404, 'Error Occurred!')
        } else {
            console.log(Member);
            res.json(Member);
        }
    });
    });
    
    // Create document I 
    app.post('/member' , function(req,res) {
    var newMember = new Member();
    newMember.name =    req.body.name;
    newMember.age =   req.body.age;
    
    newMember.save(function(err,member) {
        if (err) {
            console.log(err);
            res.send('Error saving member!')
        } else {
            console.log(member);
            res.json(member);
        }
    })
    });
    
    app.put('/member/:id', function(req,res) {
    console.log(1);
    Member.findOneAndUpdate(
       {
           _id: req.params.id // [query]
       },
       {
           $set: {
               title: req.body.name // [doc]
           }
        },
        {
            upsert: true      // [options] if this document has no title create one
        },
        function(err,newMember) {
            if (err) { console.log('error occured');
            } else {
                console.log(newMember);
                res.status(204).send(newMember);
            } 
        });
    });
    
    app.delete('/member/:id' , function(req,res) {
    Member.findOneAndRemove(
         {
            _id: req.params.id
        }, function(err, member) {
            if (err) {
                res.send('error deleting')
            }else {
                console.log(member);
                res.status(204).send(member);
            }
        });
    });