

function getData(dateValue){

  fetch("scheduling_data.json")
    .then(response => 
        response.json())
    .then(data => {
       for(let i=0 ; i< data.length ; i++){
           for( const key in data[i]){
               if( data[i]['item_date'] == dateValue){
               
                retrieveTime(data[i]);
               
                                  
               }
           }
       } 
       printData()  

    })
    .catch(console.error)

    

}


let dateValue
function getDate(){
    dateValue = document.getElementById('dateValue').value;
    // console.log(dateValue);
     retrivedDates = {};
    getData(dateValue);
}

let retrivedDates;
let count;
function retrieveTime(data){ 

    let key = data['schedule_time'].split(" ");

    if(retrivedDates.hasOwnProperty(key[0])){
            
        count = +retrivedDates[key[0]];
        count ++;
        retrivedDates[key[0]] = count;
     }else{
        retrivedDates[key[0]] = 1;
     }  

}


function printData(){
    let dataGrid = document.querySelector('.data-grid');

    dataGrid.innerHTML = "";

    for( let key in retrivedDates){
        let row = document.createElement('div');
        let taskDate = document.createElement('div');
        let tasksCount = document.createElement('div');

        row.classList.add('row');

        taskDate.innerHTML = key;
        tasksCount.innerHTML = retrivedDates[key] + ' Scheduled';

        row.appendChild(taskDate);
        row.appendChild(tasksCount);   
        
        dataGrid.appendChild(row);

    }
   
}





