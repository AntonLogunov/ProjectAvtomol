'use strict'
//import data from './services.json' assert { type: 'JSON' };
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function createElementWithClass(elemType,className){
    let elem = document.createElement(elemType);
    elem.classList.add(className);
    return elem;
}

let priceValue = 0;
let timeValue = 0;
const choiceInf = {
    "services": [],
    "price": priceValue,
    "time": timeValue
}
const price = document.querySelector(".section-form__price");
const time = document.querySelector(".section-form__time");
price.innerHTML = priceValue;
time.innerHTML = timeValue;
fetch('src/js/services.json')
    .then((response) => response.json())
    .then((json) => {
        const form = document.querySelector(".section-form__form");
        
        json.forEach(nameGroup => {
            let block = createElementWithClass("button","section-form__block");
            block.classList.add("section-form__active");

            let p = document.createElement("p");
            p.innerHTML = nameGroup["NameGroup"];

            let arrow = createElementWithClass("p","section-form__arrow");
            arrow.innerHTML = "V";

            block.append(p);
            block.append(arrow);
            form.append(block);

            block.addEventListener("click",(event) => {
                if(!event.currentTarget.classList.contains("section-form__active")){
                    event.currentTarget.querySelector(".section-form__arrow").innerHTML = "V";
                    event.currentTarget.classList.add("section-form__active");
                    event.currentTarget.nextSibling.remove();
                }
                else{
                    event.currentTarget.querySelector(".section-form__arrow").innerHTML = "^";
                    event.currentTarget.classList.remove("section-form__active");

                    let menu = createElementWithClass("div","section-form__menu");

                    let meniItems = createElementWithClass("div","section-form__menuItems");

                    let meniItemsArray = ["Наименовние работ","Отечественный","Иномарка","Время"];
                    meniItemsArray.forEach(itemName =>{
                        let item = createElementWithClass("p","section-form__menuItemName");
                        item.innerHTML = itemName;
                        meniItems.append(item);
                    })
                    menu.append(meniItems);

                    let items = createElementWithClass("div","section-form__items");
                    nameGroup["service"].forEach(service => {
                        let item = createElementWithClass("button","section-form__item");
                        for(const txt in service){
                            if(service[txt] != "+"){// remowes +
                                let itemTxt = createElementWithClass("p","section-form__itemTxt");
                                if(service[txt] == service["NativeCar"] || service[txt] == service["ForeignCar"]){
                                    itemTxt.innerHTML= service[txt] + " &#8381";
                                }
                                else{
                                    itemTxt.innerHTML= service[txt];
                                }
                                item.append(itemTxt);
                                const targetTxt = service["Name"];
                            }
                        }
                        items.append(item);

                        function eventListener() {
                            item.classList = "section-form__item-chosen";
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
                            if(isNaN(service["NativeCar"])){
                                valueP = parseInt(service["NativeCar"].replace(/\D/g, ''));
                            }else{
                                valueP = service["NativeCar"];
                            }

                            choiceInf.services.push(service["Name"]);
                            choiceInf.price += valueP;
                            choiceInf.time += valueT;

                            priceValue += valueP;
                            timeValue += valueT;
                            price.innerHTML = priceValue;
                            time.innerHTML = timeValue;

                            let closeButton = createElementWithClass("button","section-form__closeButton");
                            closeButton.innerHTML = "X";
                            chosenItem.append(closeButton);
                            closeButton.addEventListener("click",(event)=>{
                                item.classList = "section-form__item";
                                addListener();
                                event.currentTarget.parentNode.remove();
                                
                                choiceInf.services.push(service["Name"]);
                                choiceInf.price -= valueP;
                                choiceInf.time -= valueT;

                                priceValue -= valueP;
                                timeValue -= valueT; 
                                price.innerHTML = priceValue;
                                time.innerHTML = timeValue;
                                
                            });

                            form.append(chosenItem);
                        }
                        function addListener() {
                            item.addEventListener("click", eventListener, {
                                passive: true,
                                once: true,
                            });
                        }
                        
                        addListener();
                    })
                    menu.append(items);
                    insertAfter(event.currentTarget,menu);
                }
            })
        });
    });
