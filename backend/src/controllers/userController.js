const userDetails = require("../models/User");

//add new Vehicle for system
exports.addNewUser= async (req, res) => {
 
    //constant variables for the attributes
    const {
        userID,
      name,
       email,
       contactNumber,
       password,
     } = req.body;
  
  
    userDetails.findOne({userID: userID})
      .then((savedUser) => {
          if(savedUser) {
              return res.status(422).json({error:"User already exists with that no"})
          }
  
          const newUser = new userDetails({
            userID,
            name,
             email,
             contactNumber,
             password,
        })
    
        newUser.save().then(() => {
             res.json("User Added")
    
        }).catch((err) => {
          
        })
      
    }).catch((err) =>{
        
    })
    }

//delete existing one
exports.deleteUser = async (req, res) => {
    let userID = req.params.id;
   
    await userDetails.findByIdAndDelete(userID).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateUser= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {
      name,
       email,
       contactNumber,
       password,
           } = req.body;
  
    const updateUser = {
      name,
       email,
       contactNumber,
       password,
        }
  
  
    const update = await userDetails.findByIdAndUpdate(id, updateUser).then(() => {
      res.status(200).send({status: "User updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating user", error: err.message});
    })   
  }

//view 
exports.viewUser= async (req, res) => { 
 
    //calling  model
    userDetails.find().then((users) => {
      res.json(users)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneUser = async (req, res) => {
    
    let userNumber = req.params.id;
    const user = await userDetails.findById(userNumber).then((user) => {
        res.status(200).send({status: "fetched", user})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }

exports.viewOneUserName = async (req, res) => {
    const userName = req.params.name; // Assuming the name is passed as a parameter

    try {
        const user = await userDetails.findOne({ name: userName });
        if (user) {
            res.status(200).json({ status: "success", user });
        } else {
            res.status(404).json({ status: "error", message: "Person not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};