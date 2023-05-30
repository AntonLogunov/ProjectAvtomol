'use strict'
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function createElementWithClass(elemType,className){
    let elem = document.createElement(elemType);
    elem.classList.add(className);
    return elem;
}
function gatherInf(service,valueP,valueT,add = "+"){
    if(add === "+"){
        choiceInf.services.push(service["Name"]);
        choiceInf.price += valueP;
        choiceInf.time += valueT;
        priceValue += valueP;
        timeValue += valueT; 
        price.innerHTML = priceValue;
        time.innerHTML = timeValue;
    }
    if(add=== "-"){
        choiceInf.services.splice(choiceInf.services.findIndex(el => el == service["Name"]),1);
        choiceInf.price -= valueP;
        choiceInf.time -= valueT;
        priceValue -= valueP;
        timeValue -= valueT; 
        price.innerHTML = priceValue;
        time.innerHTML = timeValue;
    }
}
function createMenu(isMenuCreated){
    isMenuCreated = true
    let menu = createElementWithClass("div","section-form__menu");
    let meniItems = createElementWithClass("div","section-form__menuItems");
    let meniItemsArray = ["Наименовние работ","Цена","Время"];
    let firstItem = true;   
    meniItemsArray.forEach(itemName =>{
        let classForP = "section-form__menuItemName";
        if(firstItem) {classForP += "-first";}
        let item = createElementWithClass("p",classForP);
        firstItem = false;
        item.innerHTML = itemName;
        meniItems.append(item);
    })
    menu.append(meniItems);
    return menu;
}
function createItem(service,carType){
    let itemClass = (service.isActive == true)? "section-form__item-chosen":"section-form__item";
    let item = createElementWithClass("button",itemClass);
    for(const txt in service){
        let itemTxt = createElementWithClass("p","section-form__itemTxt");
        if(service[txt] === service["isActive"]){// remowes isActive
            continue;
        }
        if(txt == "NativeCar" && carType != "Отечественный"){
            continue;
        }
        if(txt == "ForeignCar" && carType != "Иномарка"){
            continue;
        }
        if(service[txt] == service["NativeCar"] || service[txt] == service["ForeignCar"]){
            itemTxt.innerHTML= service[txt] + " &#8381";
        }
        else{
            itemTxt.innerHTML= service[txt];
        }
        item.append(itemTxt);
    }
    return item;
}
function eventListener(item,service,carType,form) {
    let selectedServicesDiv = document.querySelector(".selected--services");
    item.classList = "section-form__item-chosen";
    service.isActive = true;
    let chosenItem = createElementWithClass("div","section-form__chosenItem");

    let chosenItemTxt = createElementWithClass("p","section-form__chosenItemTxt");
    chosenItemTxt.innerHTML = service["Name"];
    chosenItem.append(chosenItemTxt);

    let valueT = 0;
    if(service["LeadTime"].includes("час")){
        valueT = parseInt(service["LeadTime"].replace(/\D/g, ''))*60;
    }
    else if(service["LeadTime"].includes("мин")){
        valueT = parseInt(service["LeadTime"].replace(/\D/g, ''));
    }
    let valueP = 0;
    if(isNaN(service[carTypeEqual[carType]])){
        valueP = parseInt(service[carTypeEqual[carType]].replace(/\D/g, '')) + 0;
    }else{
        valueP = service[carTypeEqual[carType]];
    }
    gatherInf(service,valueP,valueT);

    let closeButton = createElementWithClass("button","section-form__closeButton");
    closeButton.innerHTML = "X";
    chosenItem.append(closeButton);
    closeButton.addEventListener("click",(event)=>{
        service.isActive = false;
        item.classList = "section-form__item";

        event.currentTarget.parentNode.remove();
        addListener(item,service,carType,form);

        gatherInf(service,valueP,valueT,"-");
    });
    selectedServicesDiv.append(chosenItem);
}
function addListener(item,service,carType,form) {
    item.addEventListener("click",function(){
        eventListener(item,service,carType,form);
    },{
        passive: true,
        once: true,
    });
}
function createBlock(nameGroup){
    let block = createElementWithClass("button","section-form__block");
    block.classList.add("section-form__active");

    let p = document.createElement("p");
    p.innerHTML = nameGroup["NameGroup"];

    // let arrow = createElementWithClass("p","section-form__arrow");
    // arrow.innerHTML = "V";

    let arrow = arrowImgTemplate.cloneNode(true)
    //arrowImgTemplate

    block.append(p);
    block.append(arrow);
    
    return block;
}
function createForm(json){
    let form = document.querySelector(".section-form__form");
    json.forEach(nameGroup => {
        let block = createBlock(nameGroup)
        form.append(block);
        let isMenuCreated = false;
        block.addEventListener("click",(event) => {
            if(!event.currentTarget.classList.contains("section-form__active")){
                //event.currentTarget.querySelector(".section-form__arrow").innerHTML = "V";
                event.currentTarget.querySelector(".deployment__img").style.rotate = "0deg";
                event.currentTarget.classList.add("section-form__active");
                event.currentTarget.nextSibling.classList.add("section-form-hidden");
            }
            else{
                //event.currentTarget.querySelector(".section-form__arrow").innerHTML = "^";
                event.currentTarget.querySelector(".deployment__img").style.rotate = "180deg";
                event.currentTarget.classList.remove("section-form__active");
                if(isMenuCreated){
                    event.currentTarget.nextSibling.classList.remove("section-form-hidden");
                }
                else{
                    let carType = document.querySelector(".castom__current").innerHTML
                    let menu = createMenu(isMenuCreated);
                    let items = createElementWithClass("div","section-form__items");
                    nameGroup["service"].forEach(service => {
                        let item = createItem(service,carType);
                        items.append(item);
                        if(!service.isActive){
                            addListener(item,service,carType,form);
                        }
                    });
                    menu.append(items);
                    insertAfter(event.currentTarget,menu);
                }
            }
        });
    });
    return form;
}
function jsonRefreshActiveServices(json){
    json.forEach(nameGroup => {
        nameGroup.service.forEach(item => {
            item["isActive"] = false;
        });
    });
}
let priceValue = 0;
let timeValue = 0;
const choiceInf = {
    "services": [],
    "price": priceValue,
    "time": timeValue
}
const carTypeEqual = {
    "Отечественный": "NativeCar",
    "Иномарка": "ForeignCar" 
}

const price = document.querySelector(".section-form__price");
const time = document.querySelector(".section-form__time");
const arrowImgTemplate = document.querySelector(".deployment__img").cloneNode(true);
price.innerHTML = priceValue;
time.innerHTML = timeValue;
fetch('src/js/services.json')
    .then((response) => response.json())
    .then((json) => {
        let form = createForm(json);
        let selectedServicesDiv = document.querySelector(".selected--services");
        let section = document.querySelector(".choose-service-form");

        let carTypeMenu = document.querySelector(".castom__body--auto");
        carTypeMenu.addEventListener("click",(event)=>{
            priceValue = 0;
            timeValue = 0;
            choiceInf["services"] = [];
            choiceInf["price"] = priceValue;
            choiceInf["time"] = timeValue;
            price.innerHTML = priceValue;
            time.innerHTML = timeValue;
            selectedServicesDiv.innerHTML ="";
            form.innerHTML = "";
            jsonRefreshActiveServices(json);
            form = createForm(json);
            section.style.display = "block";

        });
    });
