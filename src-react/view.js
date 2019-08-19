
import Controller from "./controller";
import Model from "./model";

export default class View {

    controller = new Controller();
    model = new Model();

    btnHome = document.getElementById('btnHome');
    containerBody = document.getElementById('containerBody');

    mainTilesPaint = document.getElementById('mainTilesPaint');
    mainTilesDkBank = document.getElementById('mainTilesDkBank');
    mainTilesCrud = document.getElementById('mainTilesCrud');

    containerBodyPaint = document.getElementById('containerBodyPaint');
    containerBodyMain = document.getElementById('containerBodyMain');
    containerBodyLogin = document.getElementById('containerBodyLogin');
    containerBodyCrud = document.getElementById('containerBodyCrud');
    containerBodyRegistrationDk = document.getElementById('containerBodyRegistrationDk');

    crudLoginInput = document.getElementById('crudLoginInput');
    crudPasswordInput = document.getElementById('crudPasswordInput');
    btnCrudLogin = document.getElementById('btnCrudLogin');

    init() {
        this.btnHome.addEventListener('click', (e)=> {
            location.reload()
        });

        this.mainTilesDkBank.addEventListener('click', (e)=> {
            this.controller.insertToBodyBlock(this.containerBody, this.model.containerBodyRegistrationDk);
            this.controller.activateDKbank();
        });

        this.mainTilesCrud.addEventListener('click', (e)=> {
            this.controller.insertToBodyBlock(this.containerBody, this.model.containerBodyLogin);
            this.controller.activateLogin();
        });

        this.mainTilesPaint.addEventListener('click', (e)=> {
            this.controller.insertToBodyBlock(this.containerBody, this.model.containerBodyPaint);
            this.controller.activatePaint();
        });

    }
}



