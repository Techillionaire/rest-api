const User = require("../models/userModel")

exports.getAllUsers = (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({message: "Error fetching users"})
    })
    
}

exports.getSingleUser = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        
        res.status(200).json(user);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching user" });
    });
}


exports.createAUser = (req, res) => {
    if(!req.body.name){
        res.status(400).json({message: "Please enter your name"})
    }
    if(!req.body.email){
        res.status(400).json({message: "Please enter your email"})
    }
    if(!req.body.phone){
        res.status(400).json({message: "Please enter your password"})
    }

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone 
    });

    newUser.save()
        .then(user => {
            res.status(201).json(user);
            console.log("User created successfully");
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: "Error creating user" });
        }); 
}


exports.updateUser = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
       if (!user) {
          res.status(400).json({ message: "User not found" });
          return;
       }
 
       return User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    })
    .then(updatedUser => {
       if (updatedUser) {
          res.status(200).json(updatedUser);
          console.log("User updated successfully");
       }
    })
    .catch(error => {
       console.error("Error updating user:", error);
       res.status(500).json({ message: "Internal server error" });
    });
 }
 

 exports.deleteUser = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }
 
        return User.findByIdAndDelete(req.params.id);
    })
    .then(deletedUser => {
        if (deletedUser) {
            res.status(200).json({ message: "User deleted successfully" });
            console.log("User deleted successfully");
        }
    })
    .catch(error => {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    });
}

