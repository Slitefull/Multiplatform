import Model from "./model";
import ControllerCrud from "./controller/controllerCrud"
import { initPaint } from "./controller/controllerPaint"
import DKBankController from "./controller/controllerDkBank"
export default class Controller {

    model = new Model();
    controllerCrud = new ControllerCrud();
    controllerDKBank = new DKBankController();

    insertToBodyBlock = (where, block) => {
        return where.innerHTML = block;
    };

    isInputAdmin = (value) => {
        return value === 'admin';
    };

    activateLogin = () => {
        const crudLoginInput = document.getElementById('crudLoginInput');
        const crudPasswordInput = document.getElementById('crudPasswordInput');
        const btnCrudLogin = document.getElementById('btnCrudLogin');
        let containerBody = document.getElementById('containerBody');
        btnCrudLogin.addEventListener('click', (e)=> {
            if ((this.isInputAdmin(crudLoginInput.value) === true) && (this.isInputAdmin(crudPasswordInput.value) === true)) {
                 this.insertToBodyBlock(containerBody, this.model.containerBodyCrud);
                return this.activateCrud();

            } else {
                console.log("show tip here")
            }
        })

    };

    activateDKbank = () => {
        this.controllerDKBank.init();
    };

    activateCrud = () => {
        this.controllerCrud.initCrud();
    };

    activatePaint = () => {
        initPaint();
    }

}