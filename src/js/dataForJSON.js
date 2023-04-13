'use strict'
require("vitaiy2.js");
require("kalendar.js");
require("mapscript.js");

let adress = text;
let serviceData = choiceInf;
let date = dateValue;
let time = textTime;
let name = nameInfo;
let phone = phoneInfo;
let carModel = markInfo;
const data = {
    "adress": adress,
    "serviceData" : serviceData,
    "date": date,
    "time": time,
    "name": name,
    "phone": phone,
    "carModel": carModel
}
function checkInButtonPress(){
    JSON.stringify(data);
}

