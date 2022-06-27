const data = require('../mockData.json')

module.exports = {
    users: (req, res) => {
        res.json({
            Status: 200,
            Success: true,
            Message: "Success",
            Data: data
        })
    },
    user: (req, res) => {
    const {email} = req.params
    const singleUser = data.find((person) => person.email === email) 
    if(singleUser){
        res.status(200).json({
            Status: 200,
            Success: true,
            Message: "Success",
            Data: singleUser
        })
    }else{
        res.status(404).json({
            Status: 400,
            Success: false,
            Message: "Failed",
            Data: []
        })
    }
    }
}