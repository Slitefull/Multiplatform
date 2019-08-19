
import UserManager from "./UserManager";

const CREATE = 'create';
const ADDSTART = 'addstart';
const ADDMIDDLE = 'addmiddle';
const ADDEND = 'addend';
const UPDATE = 'update';
const DELETE = 'delete';
const READ = 'read';

export default class ControllerCrud {
    initCrud() {

        this.manager = new UserManager();
        // this.manager.init();
        this.btnCreate = document.getElementById('create');
        this.btnRead = document.getElementById('read');
        this.btnUpdate = document.getElementById('update');
        this.btnDelete = document.getElementById('delete');
        this.btnAddStart = document.getElementById('addStart');
        this.btnAddMiddle = document.getElementById('addMiddle');
        this.btnAddEnd = document.getElementById('addEnd');
        this.btnSave = document.getElementById('save');
        this.btnRestore = document.getElementById('restore');
        this.btnLog = document.getElementById('btnLog');

        this.inputJson = document.getElementById('inputJson');
        this.tbody = document.getElementById('tbody');

        // this.crudMain = document.getElementById('crudMain');
        // this.loginPage = document.getElementById('loginPage');
        // this.login = document.getElementById('login');
        // this.pass = document.getElementById('pass');

        this.parse = function (value) {
            return JSON.parse(value);
        };

        this.makeRequestToServer = function (e) {
            return e.detail && e.detail.makeAction;
        };

        this.renderUsers = () => {
            let content = '';
            let users = this.manager.getUsers();
            users = Object.values(users);
            users.sort(function (user1, user2) {
                return user1.order - user2.order;
            });
            for (let id in users) {
                let user = users[id];
                content += `<tr>
                        <td>${user.id}</td>
                         <td>${user.last_name}</td>
                         <td>${user.first_name}</td>
                         <td>${user.middle_name}</td>
                         <td>${user.passport_num}</td>
                         <td>${user.passport_date}</td>
                         <td>${user.rntrc}</td>
                         <td>${user.phys_or_ent}</td>
                         <td>${user.phone_num}</td>
                         <td>${user.card_num}</td>
                         <td>${user.e_mail}</td>
                         <td>${user.password}</td>
                   </tr>`
            }
            this.tbody.innerHTML = content;
        };

            this.btnCreate.addEventListener('click', async (e) => {

                let user = this.parse(this.inputJson.value);
                if (this.makeRequestToServer(e)) {
                    // let user = {};
                    await this.manager.addUser(user);
                } else {
                    user.order = 100000;
                    this.manager.addToLocalUsers(user);
                    ControllerCrud.action = {name: CREATE};
                    console.log("hi crud deeper!");
                }

                this.renderUsers();
            });

            this.btnAddStart.addEventListener('click', async (e) => {
                let user = this.parse(this.inputJson.value);
                // let user = {};
                if (this.makeRequestToServer(e)) {
                    await this.manager.insertInBegin(user);
                } else {
                    // user.order = 100000;
                    user.order = 1;
                    let users = this.manager.getUsers();
                    users = Object.values(users);
                    for (let oldUser of users) {
                        oldUser.order += 1;
                    }
                    this.manager.addToLocalUsers(user);
                    ControllerCrud.action = {name: ADDSTART};
                }
                this.renderUsers();
            });

            this.btnAddMiddle.addEventListener('click', async (e) => {
                let user = this.parse(this.inputJson.value);
                // let user = {};
                if (this.makeRequestToServer(e)) {
                    await this.manager.insertInMiddle(user);
                } else {
                    // user.order = 100000;
                    let users = this.manager.getUsers();
                    users = Object.values(users);
                    let order = Math.round(users.length / 2) + 1;
                    user.order = order;
                    for (let oldUser of users) {
                        if (oldUser.order >= order) {
                            oldUser.order += 1;
                        }
                    }
                    this.manager.addToLocalUsers(user);
                    ControllerCrud.action = {name: ADDMIDDLE};
                }
                this.renderUsers();
            });

            this.btnAddEnd.addEventListener('click', async (e) => {
                let user = this.parse(this.inputJson.value);
                // let user = {};
                if (this.makeRequestToServer(e)) {
                    await this.manager.insertInEnd(user);
                } else {
                    user.order = 1000000;
                    this.manager.addToLocalUsers(user);
                    ControllerCrud.action = {name: ADDEND};
                }
                this.renderUsers();
            });

            this.btnRead.addEventListener('click', async (e) => {
                let id = this.inputJson.value;
                let user;
                if (this.makeRequestToServer(e)) {
                    user = await this.manager.read(id);
                } else {
                    for (let localUser of Object.values(this.manager.getUsers())) {
                        if (localUser.id == id) {
                            user = localUser;
                        }
                    }
                    // this.manager.addToLocalUsers(user);
                    ControllerCrud.action = {name: READ};
                }
                if (user) {
                    this.inputJson.value = `{"id":${user.id}, "last_name": "${user.last_name}", "first_name": "${user.first_name}", "middle_name": "${user.middle_name}", "passport_num": "${user.passport_num}", "passport_date": "${user.passport_date}", "rntrc": ${user.rntrc}, "phys_or_ent": "${user.phys_or_ent}", "phone_num": "${user.phone_num}", "card_num": ${user.card_num}, "e_mail": "${user.e_mail}", "password": "${user.password}"}`;
                }
                this.renderUsers();
            });

            this.btnUpdate.addEventListener('click', async (e) => {

                let user = this.parse(this.inputJson.value);
                if (this.makeRequestToServer(e)) {
                    await this.manager.updateUser(user);
                } else {
                    this.manager.addToLocalUsers(user);
                    ControllerCrud.action = {name: UPDATE};
                }
                this.renderUsers();
            });

            this.btnDelete.addEventListener('click', async (e) => {
                let id = this.inputJson.value;
                let user;
                if (this.makeRequestToServer(e)) {
                    user = await this.manager.deleteById(id);
                } else {
                    this.manager.deleteLocalUser(id);
                    // this.manager.addToLocalUsers(user);
                    ControllerCrud.action = {name: DELETE};
                }

                this.renderUsers();
            });

            this.btnRestore.addEventListener('click', async (e) => {
                let id = this.inputJson.value;
                await this.manager.restore();
                this.renderUsers();
            });


            this.btnSave.addEventListener('click', async (e) => {
                if (ControllerCrud.action && ControllerCrud.action.name === CREATE) {
                    this.btnCreate.dispatchEvent(
                        new CustomEvent(
                            'click',
                            {detail: {makeAction: 1}}
                        )
                    );
                }

                if (ControllerCrud.action && ControllerCrud.action.name === ADDSTART) {
                    this.btnAddStart.dispatchEvent(
                        new CustomEvent(
                            'click',
                            {detail: {makeAction: 1}}
                        )
                    );
                }

                if (ControllerCrud.action && ControllerCrud.action.name === UPDATE) {
                    this.btnUpdate.dispatchEvent(
                        new CustomEvent(
                            'click',
                            {detail: {makeAction: 1}}
                        )
                    );
                }

                if (ControllerCrud.action && ControllerCrud.action.name === ADDMIDDLE) {
                    this.btnAddMiddle.dispatchEvent(
                        new CustomEvent(
                            'click',
                            {detail: {makeAction: 1}}
                        )
                    );
                }

                if (ControllerCrud.action && ControllerCrud.action.name === ADDEND) {
                    this.btnAddEnd.dispatchEvent(
                        new CustomEvent(
                            'click',
                            {detail: {makeAction: 1}}
                        )
                    );
                }

                if (ControllerCrud.action && ControllerCrud.action.name === DELETE) {
                    this.btnDelete.dispatchEvent(
                        new CustomEvent(
                            'click',
                            {detail: {makeAction: 1}}
                        )
                    );
                }

                ControllerCrud.action = {};
            });

            // this.btnLog.addEventListener('click',  () => {
            //     if(this.login.value === 'admin' && this.pass.value === 'admin'){
            //         this.crudMain.style.display = "flex";
            //         this.loginPage.style.display = "none";
            //     }
            // }, false);
        };
}