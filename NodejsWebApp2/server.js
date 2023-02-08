'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const fs = require('fs');
let student = {
    FirstName: "Tom",
    LastName: "Jhonson",
    Otchestvo: "Otch",
    Bithsday: 2003,
    class: 5,
    lessons: ["Math", "Language", "QualityMath"],
    srokObucheniya: 9,
    upClass: function () {
        if (this.class > this.srokObucheniya) {
            alert("Максимальный класс достигнут");
        }
        else {
            this.class = this.class + 1;
        }
    },
    Display: function () {
        /*
        console.log(student.lessons);
        console.log(student.class);
        console.log(student.LastName);
        console.log(student.propiska.city);
        console.log(student.projivanie.region);
        */
        alert(JSON.stringify(student));
    },
    propiska: {
        country: "russia",
        city: "kemerovo",
        idHoume: "54",
        idKvarti: "545"
    },
    projivanie: {
        region: "tyva",
        punct: "kyzyl",
        street: "Moskow 44"
    }
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8 '});
    const stream = fs.createReadStream('./index.html')
    stream.pipe(res)
}).listen(port);
