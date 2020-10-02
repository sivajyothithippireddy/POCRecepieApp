let recepieLists = [];
let recTotalList = [];
const recepie = {
    name: '',
    description: '',
    ingridients: []
}
let recipesAll = "";
let count = 0;
let count1=0;
let btnId = 0;
let btn2Id =1;
let deleteingridient=2;
function addingridient() {
    removeData1();
    if(count1 == 0){
    let ingriform = document.getElementById('ingredientform')
    if (ingriform.value == 0) {
      recepie.ingridients = "No Ingridient";
    }
    else {
        recepie.ingridients.push(ingriform.value);
    }
    let formdivision = document.getElementById('ingredientformdiv');
    let ingri = document.createElement('span');
    ingri.id = deleteingridient;

    const lineBreak = document.createElement('br');
    ingri.appendChild(lineBreak);
    let ingredientData = document.createTextNode(recepie.ingridients);
    ingri.appendChild(ingredientData);
    formdivision.appendChild(ingri);

    
    let button2 = document.createElement('button')
    button2.id=btn2Id;
    button2.style.backgroundColor='green'
    button2.style.color='white'
    let buttonvalue1 = document.createTextNode('delete')
    button2.appendChild(buttonvalue1);
    formdivision.appendChild(button2);
    button2.addEventListener("click", function(){
        let button3 = document.getElementById(btn2Id);
        let inId = document.getElementById(deleteingridient);
        button3.remove();
        inId.remove();
        count =0;
    });
}
count1 ++;
    recepieLists = [];
}
function addnewRecepie() {
    let recepiename = document.getElementById('recepiename');
    let recepiesteps = document.getElementById('recepiesteps');
    let ingriendientsform = document.getElementById('ingredientformdiv');
    console.log(ingriendientsform.value)
    if (recepiename.value.length === 0) {
        recepie.name = "Unnamed Recepie";
    }
    else {
        recepie.name = recepiename.value;
    }
    recepie.description = recepiesteps.value;
    recepieLists.push(recepie);
    const recipesStringified = JSON.stringify(recepieLists)
    localStorage.setItem('Recipe', recipesStringified)
    const recipesJSON = localStorage.getItem('Recipe');
    if (recipesJSON === null) {
        recipesAll = [];
    } else {
        const recipesJSON = localStorage.getItem('Recipe')
        recipesAll = JSON.parse(recipesJSON)
    }

    for (const res of recipesAll) {
        recTotalList.push(res); 
    }
   

    const recData = JSON.stringify(recTotalList);
    localStorage.setItem('RecipeData', recData)

    for (let i of recipesAll) {
        let division = document.getElementById('display');
        let name = document.createElement('p');
        name.id = i.description;
        let nameAtt = document.createTextNode(i.name);
        name.appendChild(nameAtt);
        division.appendChild(name);
        name.innerHTML = "Recepie Name : " + i.name


        let steps = document.createElement('p');
        steps.id = i.ingridients;
        let stepsData = document.createTextNode(i.description);
        steps.appendChild(stepsData);
        division.appendChild(steps);
        steps.innerHTML = "Recepie Steps : " + i.description

        let ingriData = document.createElement('li');
        ingriData.id = i.name;
        let ingriDatastepsData = document.createTextNode(i.ingridients);
        ingriData.appendChild(ingriDatastepsData);
        division.appendChild(ingriData);
        ingriData.innerHTML = "Ingriedients : " + i.ingridients

    }
   
    recepieLists = [];
}

function removeData1(){
    if(count1 > 0){
        for (let i of recipesAll) {
            let ingridatadelete = document.getElementById(deleteingridient);
            let buttondelete = document.getElementById(btn2Id);
           if( ingridatadelete != null){
            ingridatadelete.remove();
           }
           if(buttondelete != null){
            buttondelete.remove();
           }

        }
        count1 = 0;
    }
}

// Search
function searchfunction(){
    let input = document.getElementById("searchbar").value;
    const recipesJSON = localStorage.getItem('Recipe');
    const recipesJSON1 = localStorage.getItem('RecipeData');
   let dataToshow =  JSON.parse(recipesJSON1)
      let filteredList = dataToshow.filter(value => {
            return value.name == input 
          });
        let data =   filteredList ;
        let receivedDable = document.getElementById('receivedDataList');
        for (const receivedList of data) {
          let tablerow = document.createElement('tr');
          tablerow.id = receivedList.name;
          let tableData1 = document.createElement('td');
          let tableData2 = document.createElement('td');
          let tableData3 = document.createElement('td');
          let text1 = document.createTextNode(receivedList.name);
          let text2 = document.createTextNode(receivedList.description);
          let text3 = document.createTextNode(receivedList.ingridients);
          tableData1.appendChild(text1);
          tableData2.appendChild(text2);
          tableData3.appendChild(text3);
          tablerow.appendChild(tableData1);
          tablerow.appendChild(tableData2);
          tablerow.appendChild(tableData3);
         
          receivedDable.appendChild(tablerow);

        }

}

function myFunction() {
    var x = document.getElementById("addReceipeshow");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

