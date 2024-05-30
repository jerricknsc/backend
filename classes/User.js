class User {
    userID;
    name;
    hashed_password;
    level;

    constructor(userID, name, hashed_password, level){
        this.userID = userID;
        this.name = name;
        this.hashed_password = hashed_password;
        this.level = level;
    }

    getUserID(){
        return this.userID;
    }

    getName(){
        return this.name;
    }

    getHashedPassword(){
        return this.hashed_password;
    }

    getLevel(){
        return this.level;
    }
}

module.exports = User;

// const user = new User(1, 'John Doe', 'hashed_password123', 'admin');

// const ID = user.getUserID();

// console.log(user);