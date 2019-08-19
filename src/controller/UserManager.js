
function UserManager() {
    this.users = {};
}

UserManager.prototype.addUser= async function(user){
    // let user1 = {"id": 33, "firstName": "John", "lastName": "Silver", "age": 52};
    let response = await fetch('/create', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();
    console.log(data);
    for (let user of data['results']) {
        this.users[user.id] = user;
    }
};

UserManager.prototype.updateUser= async function(user){

    let response = await fetch('/update', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();
    let id = user.id;
    // let oldUser = this.users[id];
    for (let user of data['results']) {
        this.users[user.id] = user;
    }
};

UserManager.prototype.deleteById = async function(id){
    let user = {id: id};
    let response = await fetch('/delete', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();

    this.users = {};

    for (let user of data['results']) {
        this.users[user.id] = user;
    }

};

UserManager.prototype.read = async function(id){
    let user = {id: id};
    let response = await fetch('/read', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();

    for (let user of data['results']) {
        this.users[user.id] = user;
    }

    return this.users[id];
};

UserManager.prototype.getUsers = function(){
    return this.users;
};

UserManager.prototype.byId = function(id){
    return this.users[id];
};

UserManager.prototype.deleteLocalUser = function (id) {
    for (let index in this.users) {
        let localUser = this.users[index];
        if (localUser.id == id) {
            delete this.users[id];
        }
    }
};

UserManager.prototype.addToLocalUsers = function(user){
    return this.users[user.id] = user;
};

UserManager.prototype.insertInBegin = async function(user){

    let response = await fetch('/insert-begin', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();
    let id = user.id;
    // let oldUser = this.users[id];
    for (let user of data['results']) {
        this.users[user.id] = user;
    }
    // this.users = data[0];
};

UserManager.prototype.insertInMiddle = async function(user){

    let response = await fetch('/insert-middle', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();
    // let oldUser = this.users[id];
    for (let user of data['results']) {
        this.users[user.id] = user;
    }
    // this.users = data['results'];
};

UserManager.prototype.insertInEnd = async function(user){

    let response = await fetch('/insert-end', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();
    // let oldUser = this.users[id];
    for (let user of data['results']) {
        this.users[user.id] = user;
    }
    // this.users = data['results'];
};

UserManager.prototype.restore = async function(){

    let response = await fetch('/restore', {
        method: "POST",
        // body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();
    // let oldUser = this.users[id];
    for (let user of data['results']) {
        this.users[user.id] = user;
    }
    // this.users = data['results'];
};
module.exports = UserManager;