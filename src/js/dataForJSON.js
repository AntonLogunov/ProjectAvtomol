'use strict'

function checkInButtonPress(){
    let chosenAdress = document.querySelector(".map-current").innerHTML;
    let serviceData = choiceInf;
    let chosenDate = document.getElementById("date").value;
    let chosenTime = document.getElementById("time_select_btn").innerHTML;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let carModel = document.getElementById("mark").value;
    const data = {
        "adress": chosenAdress,
        "serviceData" : serviceData,
        "date": chosenDate,
        "time": chosenTime,
        "name": name,
        "phone": phone,
        "carModel": carModel
    }
    
    let result = JSON.stringify(data);
    // console.log(data);
    // console.log(result);
    // console.log(JSON.parse(result));
    return result
}
//checkInButtonPress()
