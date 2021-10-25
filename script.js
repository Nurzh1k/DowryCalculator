/* Saving all needed elements */

const educationValue = document.getElementById("education");
const familyValue = document.getElementById("family");
const skillsValue = document.getElementsByName("skills");
const ageValue = document.getElementsByName("radio");
const casteValue = document.getElementById("caste");

/* ES6 arrow function */
const calculate = () => {
    /* declare of price variable */
    let price = document.getElementById("bid").value;
    /* checking name and price for non empty */
    if(price != 0){
        price = price * Number(educationValue.value);
        price = price * Number(familyValue.value);
        price = getSkillsValue(skillsValue, price);
        price = getAgeValue(ageValue, price);
        price = price + Number(casteValue.value);
           
        
        if(document.reputation.option[0].checked == true){
            price *= document.reputation.option[0].value;
        }
        if(document.reputation.option[1].checked == true){
            price *= document.reputation.option[1].value;
        }
        if(document.reputation.option[2].checked == true){
            price -= document.reputation.option[2].value;
        }

    /* Saving everything in object*/

    let person = {
        bride_price: price,
    }

    document.getElementById("result").innerHTML = "The price is " + person.bride_price + "$.";
    
    }
    /* in case of empty, display a alert */
    else{
        alert("Please, enter starting price");
    }
}

/* Using of forEach method for multiplying price number with selected age coefficient */
const getAgeValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value);
        }
    })
    return price;
}

const getSkillsValue = (node_list, price) => {
    node_list.forEach(item => {
        if (item.checked) {
            price = price + Number(item.value);
        }
    })
    return price;
}

/* Add Event Listener*/

document.getElementById("calculate").addEventListener("click", function() {
    calculate();
});