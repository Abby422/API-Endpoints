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
    },
    login: (req, res) =>{
        const {email, Password} = req.body
        const loggedUser = data.find((person) => person.email == email) 
        // const loggedUserPassword = data.find((person) => person.Password == password)

        if(loggedUser && loggedUser.Password == Password){
            res.json({
                Status: 200,
                Success: true,
                Message: "Successful login",
                Data: loggedUser
            })
        }else{
            res.status(404).json({
                Status: 400,
                Success: false,
                Message: "Failed, Try Again",
                Data: []
            })
        }
    }
}