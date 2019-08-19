const fs = require("fs");
const express = require('express');
let connection = require('./mysqlDB');
const router = express.Router();

const selectfromUsers = 'SELECT * FROM users ORDER BY `order` ASC';


router.post('/create', function (req, res) {

    // console.log(req.body);
    // let user = JSON.parse(req.body);
    let user = req.body;


    let maxOrderQuery = 'SELECT MAX(`order`) as maxOrder FROM users';

    connection.query(maxOrderQuery, [],  function (err, result) {
        if (err) throw err;
        let nextOrder = result[0]['maxOrder'] + 1;

        console.log(user);

        let sql = "INSERT INTO users (id, last_name, first_name, middle_name, `order`, passport_num, passport_date, rntrc, phys_or_ent, phone_num, card_num, e_mail, password) VALUES ?";
        let values = [
            [
                user.id,
                user.last_name,
                user.first_name,
                user.middle_name,
                nextOrder,
                user.passport_num,
                user.passport_date,
                user.rntrc,
                user.phys_or_ent,
                user.phone_num,
                user.card_num,
                user.e_mail,
                user.password
            ]
        ];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("New user" + result.affectedRows);

            connection.query(selectfromUsers, function (error, results, fields) {
                res.send({results});
            });
        });

    });

});

router.post('/read', function (req, res) {

    console.log(req.body);
    // let user = JSON.parse(req.body);
    let user = req.body;

    // let fileContent = fs.readFileSync("candle.txt", "utf8");
    // res.send({fileContent});

    let sql = "SELECT * FROM users WHERE ?";

    let values = [
        {
            id: user.id
        }
    ];

    // connection.query(sql, values, function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records deleted: " + result.affectedRows);
    // });

    connection.query(selectfromUsers, values, function (error, results, fields) {
        res.send({results});
    });

});


router.post('/update', function (req, res) {

    console.log(req.body);
    // let user = JSON.parse(req.body);
    let user = req.body;

    // let fileContent = fs.readFileSync("candle.txt", "utf8");
    // res.send({fileContent});

    let sql = "UPDATE users  SET ? WHERE ?";
    let values = [
        {
            last_name: user.last_name,
            first_name: user.first_name,
            middle_name: user.middle_name,
            passport_num: user.passport_num,
            passport_date: user.passport_date,
            rntrc: user.rntrc,
            phys_or_ent: user.phys_or_ent,
            phone_num: user.phone_num,
            card_num: user.card_num,
            e_mail: user.e_mail,
            password: user.password
        },
        {
            id: user.id
        }
    ];
    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("New user" + result.affectedRows);
    });

    connection.query(selectfromUsers, function (error, results, fields) {
        console.log(results);
        res.send({results});
    });

});

router.post('/delete', function (req, res) {

    console.log(req.body);
    // let user = JSON.parse(req.body);
    let user = req.body;

    // let fileContent = fs.readFileSync("candle.txt", "utf8");
    // res.send({fileContent});

    let sql = "DELETE FROM users  WHERE ?";

    let values = [
        {
            id: user.id
        }
    ];

    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });

    connection.query(selectfromUsers, function (error, results, fields) {
        res.send({results});
    });

});

router.post('/insert-begin', function (req, res) {

    // console.log(req.body);
    // let user = JSON.parse(req.body);
    let user = req.body;

    let updateOrder = "UPDATE users  SET `order`=`order`+ 1";

    connection.query(updateOrder, [], function (err, result) {
        if (err) throw err;
        console.log("New user" + result.affectedRows);
    });

    let sql = "INSERT INTO users (id, last_name, first_name, middle_name, `order`, passport_num, passport_date, rntrc, phys_or_ent, phone_num, card_num, e_mail, password) VALUES ?";
    let values = [
        [
            user.id,
            user.last_name,
            user.first_name,
            user.middle_name,
            1,
            user.passport_num,
            user.passport_date,
            user.rntrc,
            user.phys_or_ent,
            user.phone_num,
            user.card_num,
            user.e_mail,
            user.password
        ]
    ];
    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("New user" + result.affectedRows);

        connection.query(selectfromUsers, function (error, results, fields) {
            res.send({results});
        });
    });
});

router.post('/insert-middle', function (req, res) {

    // console.log(req.body);
    // let user = JSON.parse(req.body);
    let user = req.body;


    let maxOrderQuery = 'SELECT MAX(`order`) as maxOrder FROM users';

    connection.query(maxOrderQuery, [],  function (err, result) {
        if (err) throw err;
        let middleOrder = Math.round(result[0]['maxOrder']/2) + 1;

        let updateOrder = "UPDATE users  SET `order`=`order`+ 1 WHERE `order`>= ?";

        connection.query(updateOrder, [middleOrder], function (err, result) {
            if (err) throw err;
            console.log("New user" + result.affectedRows);

            let sql = "INSERT INTO users (id, last_name, first_name, middle_name, `order`, passport_num, passport_date, rntrc, phys_or_ent, phone_num, card_num, e_mail, password) VALUES ?";
            let values = [
                [
                    user.id,
                    user.last_name,
                    user.first_name,
                    user.middle_name,
                    middleOrder,
                    user.passport_num,
                    user.passport_date,
                    user.rntrc,
                    user.phys_or_ent,
                    user.phone_num,
                    user.card_num,
                    user.e_mail,
                    user.password
                ]
            ];
            connection.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log("New user" + result.affectedRows);

                connection.query(selectfromUsers, function (error, results, fields) {
                    res.send({results});
                });
            });
        });

    });

});

router.post('/insert-end', function (req, res) {

    let user = req.body;

    let maxOrderQuery = 'SELECT MAX(`order`) as maxOrder FROM users';

    connection.query(maxOrderQuery, [],  function (err, result) {
        if (err) throw err;
        let endOrder = (result[0]['maxOrder'] + 1);

        let updateOrder = "UPDATE users  SET `order`=`order`+ 1 WHERE `order`>= ?;";

        connection.query(updateOrder, [endOrder], function (err, result) {
            if (err) throw err;
            console.log("New user" + result.affectedRows);


            let sql = "INSERT INTO users (id, last_name, first_name, middle_name, `order`, passport_num, passport_date, rntrc, phys_or_ent, phone_num, card_num, e_mail, password) VALUES ?";
            let values = [
                [
                    user.id,
                    user.last_name,
                    user.first_name,
                    user.middle_name,
                    endOrder,
                    user.passport_num,
                    user.passport_date,
                    user.rntrc,
                    user.phys_or_ent,
                    user.phone_num,
                    user.card_num,
                    user.e_mail,
                    user.password
                ]
            ];
            connection.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log("New user" + result.affectedRows);

                connection.query(selectfromUsers, function (error, results, fields) {
                    res.send({results});
                });
            });
        });

    });

});

router.post('/restore', function (req, res) {

    console.log(req.body);
    // let user = JSON.parse(req.body);
    let user = req.body;

    // let fileContent = fs.readFileSync("candle.txt", "utf8");
    // res.send({fileContent});

    let sql = "SELECT * FROM users ";

    // connection.query(sql, values, function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records deleted: " + result.affectedRows);
    // });

    connection.query(sql, function (error, results, fields) {
        res.send({results});
    });

});

module.exports = router;