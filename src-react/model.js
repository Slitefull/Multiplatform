
export default class Model {

    constructor () {
        this.containerBodyPaint = '<div class="container-body__paint" id="containerBodyPaint" >\n' +
            '                <div class="main-headline">\n' +
            '                    <h2 class="main-headline__tittle">Paint</h2>\n' +
            '                </div>\n' +
            '                <section id="content">\n' +
            '                    <ul id="tool">\n' +
            '                        <li>\n' +
            '                            <ul id="image">\n' +
            '                                <li id="saveimg">\n' +
            '                                        <input type="hidden" id="imgsave" name="dataImg" value="">\n' +
            '                                        <button class="hide"></button>\n' +
            '                                    </form>\n' +
            '                                </li>\n' +
            '                                <li id="clearimg">\n' +
            '                                    <button class="hide"></button>\n' +
            '                                </li>\n' +
            '                            </ul>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <h3>Tools</h3><hr>\n' +
            '                            <ul id="tools">\n' +
            '                                <li id="means_brush"><img src="dist/img/Brush.png" alt="Кісточка" title="Кісточка"></li>\n' +
            '                                <li id="means_eraser"><img src="dist/img/Eraser.png" alt="" title="Стирачка"></li>\n' +
            '                                <li id="means_paint"><img src="dist/img/bucket.png" alt="" title="Заливка"></li>\n' +
            '                                <li class="" id="means_straw"><img src="dist/img/8.png" alt="" title="Видалити все"></li>\n' +
            '                                <li class="hide" id="means_text"><img src="dist/img/text.png" alt="" title="Пошук"></li>\n' +
            '                                <li class="" id="means_magnifier"><img src="dist/img/Magnifier.png" alt="" title=""></li>\n' +
            '                            </ul>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <h3>Shapes</h3>\n' +
            '                            <ul id="shape">\n' +
            '                                <li id="means_line"><img src="dist/img/3.png" /></li>\n' +
            '                                <li id="means_arc"><img src="dist/img/4.png" /></li>\n' +
            '                                <li id="means_rect"><img src="dist/img/7.png" /></li>\n' +
            '                                <li id="means_poly"><img src="dist/img/2.png" /></li>\n' +
            '                                <li id="means_arcfill"><img src="dist/img/5.png" /></li>\n' +
            '                                <li id="means_rectfill"><img src="dist/img/6.png" /></li>\n' +
            '                                <li id="vertLine"><img src="dist/img/1.png" /></li>\n' +
            '                            </ul>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <h3>Line thickness</h3>\n' +
            '                            <ul id="size">\n' +
            '                                <li class="size-height" id="width_1"><img src="dist/img/line1px.png" /></li>\n' +
            '                                <li class="size-height" id="width_3"><img src="dist/img/line3px.png" /></li>\n' +
            '                                <li class="size-height" id="width_5"><img src="dist/img/line5px.png" /></li>\n' +
            '                                <li class="size-height" id="width_7"><img src="dist/img/line7px.png" /></li>\n' +
            '                            </ul>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <h3>Colors</h3>\n' +
            '                            <ul id="color">\n' +
            '                                <li id="pink"></li>\n' +
            '                                <li id="white"></li>\n' +
            '                                <li id="red"></li>\n' +
            '                                <li id="yellow"></li>\n' +
            '                                <li id="gray"></li>\n' +
            '                                <li id="orange"></li>\n' +
            '                                <li id="green"></li>\n' +
            '                                <li id="blue"></li>\n' +
            '                                <li id="maroon"></li>\n' +
            '                                <li id="navy"></li>\n' +
            '                                <li id="purple"></li>\n' +
            '                                <li id="black"></li>\n' +
            '                            </ul>\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                    <canvas id="canvas" width="880" height="350"></canvas>\n' +
            '                </section>\n' +
            '                </div>';

        this.containerBodyMain = '<div class="container-body__main" id="containerBodyMain">\n' +
            '                <div class="main-headline">\n' +
            '                    <h2 class="main-headline__tittle">Home</h2>\n' +
            '                </div>\n' +
            '                <div class="main-tiles" id="mainTiles">\n' +
            '                    <div class="main-tiles__paint" id="mainTilesPaint">\n' +
            '                        <div class="paint-description">\n' +
            '                            <div class="paint-description__headline">Paint</div>\n' +
            '                            <p class="paint-description__text">Paint allows you to draw a pucture using the tools: line, square, circle and eraser</p>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="main-tiles__dkbank" id="mainTilesDkBank">\n' +
            '                        <div class="dkbank-description">\n' +
            '                            <div class="dkbank-description__headline">Registration</div>\n' +
            '                            <p class="dkbank-description__text">Register  the account in DK Bank to take ample ability to manage your savings</p>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="main-tiles__crud" id="mainTilesCrud">\n' +
            '                        <div class="crud-description">\n' +
            '                            <div class="crud-description__headline">Crud</div>\n' +
            '                            <p class="crud-description__text">Copy, Read, Update, Delete user information in database simply and fast</p>\n' +
            '                        </div>    \n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';

        this.containerBodyLogin = '<div class="container-body__login" id="containerBodyLogin">\n' +
            '                <div class="main-headline">\n' +
            '                    <h2 class="main-headline__tittle">System login</h2>\n' +
            '                </div>\n' +
            '                <div class="login-container">\n' +
            '                    <div class="login-container__inputs">\n' +
            '                        <input class="input-login" placeholder="Login" type="text" id="crudLoginInput">\n' +
            '                        <input class="input-login" placeholder="Password" type="text" id="crudPasswordInput">\n' +
            '                    </div>\n' +
            '                    <div class="login-container__button">\n' +
            '                        <button class="button-login" id="btnCrudLogin">Login</button>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';

        this.containerBodyCrud = ' <div class="container-body__crud" id="containerBodyCrud" >\n' +
            '                <div class="main-headline">\n' +
            '                    <h2 class="main-headline__tittle">CRUD</h2>\n' +
            '                </div>\n' +
            '                <div class="crud-container" id =\'crudMain\'>\n' +
            '                    <div class="crud-container__header">\n' +
            '                        <div class="header-inputs">\n' +
            '                            <input type="text" class="header-inputs__input" id=\'inputJson\'  placeholder="     Enter text in JSON format">\n' +
            '                        </div>\n' +
            '\n' +
            '                        <div class="header-headlines">\'\n' +
            '                            <table class=\'footer__text-area text-area\' id="myTable" cellspacing="0">\n' +
            '                                <tr class=\'header-headlines__headline\'>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>id</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>L.Name</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>F.Name</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>M.Name</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>Pass.Num</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>Pass.Date</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>RNTRC</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>PhysOrEnt</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>PhoneNum</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>CardNum</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>EMail</td>\n' +
            '                                    <td class=\'header-headlines__headline-td\'>Password</td>\n' +
            '                                </tr>\n' +
            '                                <tbody class=\'text-area__main\' id=\'tbody\'></tbody>\n' +
            '                            </table>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="crud-container__body">\n' +
            '                        <div class="crud-cupboard">\n' +
            '                            <!--<div class="crud-cupboard__shelf"></div>-->\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="crud-container__footer">\n' +
            '                        <div class="crud-buttons">\n' +
            '                            <button class="crud-buttons__button" id=\'create\'>Create</button>\n' +
            '                            <button class="crud-buttons__button" id=\'read\'>Read</button>\n' +
            '                            <button class="crud-buttons__button" id=\'update\'>Update</button>\n' +
            '                            <button class="crud-buttons__button" id=\'delete\'>Delete</button>\n' +
            '                            <button class="crud-buttons__button" id=\'addStart\'>Add Top</button>\n' +
            '                            <button class="crud-buttons__button" id=\'addMiddle\'>Add Mid</button>\n' +
            '                            <button class="crud-buttons__button" id=\'addEnd\'>Add End</button>\n' +
            '                            <button class="crud-buttons__button" id=\'save\'>Save</button>\n' +
            '                            <button class="crud-buttons__button" id=\'restore\'>Restore</button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div >';

        this.containerBodyRegistrationDk = '<div class="container-body__registration-dk" id="containerBodyRegistrationDk">\n' +
            '                <div class="main-headline">\n' +
            '                    <h2 class="main-headline__tittle">Registration</h2>\n' +
            '                </div>\n' +
            '                <div class="registration-container">\n' +
            '                    <div class="registration-container__left">\n' +
            '                        <div class="registration-inputs">\n' +
            '                            <div class="registration-inputs__FirstLast" id="_Name_klient">\n' +
            '                                <input class="registration-input" id="name_and_Firstname" placeholder="Last name, first name and patronymic *">\n' +
            '                                <p class="message_inn"></p>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__passport" id="_id_passport">\n' +
            '                                <input class="registration-input" id="pasportNameForTranslate" placeholder="Document № *">\n' +
            '                                <p class="message_inn"></p>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__passportDate" id="_date_passport">\n' +
            '                                <input class="registration-input" id="placeOfBirth" type="date" placeholder="Passport issue date *">\n' +
            '                                <p class="message_inn"></p>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__rntrc" id="_Identification_number">\n' +
            '                                <input class="registration-input" id="inn" placeholder="RNTRC *">\n' +
            '                                <p class="message_inn"></p>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__face" id="_face">\n' +
            '                                <select class="registration-input" id="_select_face">\n' +
            '                                    <option selected disabled hidden="" class="registration-input" value="Physical person / Legal entity" id="option_face">Physical person / Legal entity*\n' +
            '                                    </option>\n' +
            '                                    <option class="registration-select" value="Physical person" id="_select_face_value1">Physical person</option>\n' +
            '                                    <option class="registration-select" value="Legal entity" id="_select_face_value2">Legal entity</option>\n' +
            '                                </select>\n' +
            '                                <p id="message_face"></p>\n' +
            '                            </div>\n' +
            '                            <div class="registration-container__phone" id="_phone_number">\n' +
            '                                <input class="registration-input" id="phone" placeholder="Phone number *">\n' +
            '                                <p id="message_phone"></p>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__card" id="_card_number">\n' +
            '                                <input class="registration-input" id="cardNumber" placeholder="Card number *">\n' +
            '                                <span class="text"></span>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__email" id="_email_value">\n' +
            '                                <input class="registration-input" id="email" placeholder="Enter email *">\n' +
            '                                <span class="text"></span>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__password" id="password_value">\n' +
            '                                <input class="registration-input" id="password_length" placeholder="Password *">\n' +
            '                                <span class="text"></span>\n' +
            '                            </div>\n' +
            '                            <div class="registration-inputs__checkPassword" id="check_password_value">\n' +
            '                                <input class="registration-input" id="check_Password" placeholder="Confirm password *">\n' +
            '                                <span class="text"></span>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="registration-buttons">\n' +
            '                            <button class="registration-button" id="_register_button">Registration</button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="registration-container__right">\n' +
            '                        <div class="registration-info-dk">\n' +
            '                            <div class="registration-info-dk__stability">\n' +
            '                                <img class="info-img" src="dist/img/security.png">\n' +
            '                                <div class="info-text">\n' +
            '                                    <h1 class="info-text__headline">Stability</h1>\n' +
            '                                    <p class="info-text__text">We have been working in the Ukrainian market for over 17 years.</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="registration-info-dk__stability">\n' +
            '                                <img class="info-img" src="dist/img/piggy-bank.png">\n' +
            '                                <div class="info-text">\n' +
            '                                    <h1 class="info-text__headline">Investment security</h1>\n' +
            '                                    <p class="info-text__text">Secure withdrawal of investments when you need it.</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="registration-info-dk__stability">\n' +
            '                                <img class="info-img" src="dist/img/graph.png">\n' +
            '                                <div class="info-text">\n' +
            '                                    <h1 class="info-text__headline">High rates up to 19%</h1>\n' +
            '                                    <p class="info-text__text">Highest interest rates in the market</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="registration-info-dk__stability">\n' +
            '                                <img class="info-img" src="dist/img/mobile-app.png">\n' +
            '                                <div class="info-text">\n' +
            '                                    <h1 class="info-text__headline">Maintenance</h1>\n' +
            '                                    <p class="info-text__text">Convenient client-bank application is always at hand.</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '\n' +
            '                        </div>\n' +
            '                        <div class="registration-acceptance">\n' +
            '                            <input class="registration-acceptance__checkbox" type="checkbox" id="checkbox">\n' +
            '                            <p class="registration-acceptance__text">When registering, you agree to the <a>TERMs</a> of the Bank</p>\n' +
            '                            <p style="color: rgb(255,37,22);" hidden id="errorCheckbox">Do you agree to the terms of the bank? </p>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';
    }

}