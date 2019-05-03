const uuid = require('uuid');
const membersArr = [
    {
        id: 1,
        name: 'Magnus S',
        email: 'msagher@fds.no',
        status: 'active'
    },
    {
        id: 2,
        name: 'Eimaer',
        email: 'eimear@ouifsd.no',
        status: 'active',
    },
    {
        id: 3,
        name: 'Tore',
        email: 'fsdafsd@dfds.no',
        status: 'incative'
    }
]

exports.members = (req, res) => {
    res.json(membersArr);
}

// from the router we can do this: router.get('/members/:id')
// to access that id value, the controller need to have this : req.params.id. ie. if the user then puts www.website.com/members/lars
// req param.id will then be lars.

exports.member = (req, res) => {
    //return true of false if id excists
    const found = membersArr.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(membersArr.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No member found with the id ${req.params.id}`})
    }
}

exports.createMember = (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'Please enter name or email'})
    }
    membersArr.push(newMember)
    res.status(200).json(membersArr)
    
}
