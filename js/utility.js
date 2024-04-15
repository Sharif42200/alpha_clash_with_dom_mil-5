function addClassById(elementId) {
    const getElement = document.getElementById(elementId);
    getElement.classList.add('hidden');
}

function removeClassById(elementId) {
    const getElement = document.getElementById(elementId);
    getElement.classList.remove('hidden');
}


function setBgColorById(elementId)
{
    const element = document.getElementById(elementId);
    // element.style.backgroundColor = 'orange';
    // or
    element.classList.add('bg-orange-500');
}


function removeBgColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}


function getElementValueById(elementId)
{

    const element = document.getElementById(elementId);
    const elementInnerText = element.innerText;
    const elementInNumber = parseInt(elementInnerText);
    return elementInNumber;
    
}

function setNewValue(elementId , value)
{
    const element = document.getElementById(elementId);
    element.innerText = value;
}



function getARandomAlphabet() {
    // const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    // const alphabetsArray = alphabetsString.split('');

    // or 
    const alphabetsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    

    // generate a random number index between 0-25
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);
    // console.log(random);

    const alphabet = alphabetsArray[randomIndex];
    return alphabet;


}