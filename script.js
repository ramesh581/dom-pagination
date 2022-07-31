let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');

xhr.onload = function() {

if(xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
    function displayData(data) {
        let tableBody = document.querySelector('#table-body');
        let tableRow = "";
        for (let employee of data) {
            tableRow += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                
            </tr>`;
            tableBody.innerHTML = tableRow;
        }
        
        activeButton = this.id;
        this.setAttribute('class', 'active');
        console.log(activeButton);
    };

    var activeButton;

    document.addEventListener('onload', function() {
        displayData(data);
    });

    let b1 = document.getElementById('1');
    b1.addEventListener('click', function() {
        let data1 = data.filter(function(x){
            return x.id>=1 && x.id<=10
            });
            console.log(data1);
            displayData(data1);
    });

    let b2 = document.getElementById('2');
    b2.addEventListener('click', function() {
        let data2 = data.filter(function(x){
            return x.id>=11 && x.id<=20
            });
            console.log(data2);
            displayData(data2);
    });
    
    let b3 = document.getElementById('3');
    b3.addEventListener('click', function() {
        let data3 = data.filter(function(x){
            return x.id>=21 && x.id<=30
            });
            console.log(data3);
            displayData(data3);
    });
    
    let b4 = document.getElementById('4');
    b4.addEventListener('click', function() {
        let data4 = data.filter(function(x){
            return x.id>=31 && x.id<=40
            });
            console.log(data4);
            displayData(data4);
    });
    
    let b5 = document.getElementById('5');
    b5.addEventListener('click', function() {
        let data5 = data.filter(function(x){
            return x.id>=41 && x.id<=50
            });
            console.log(data5);
            displayData(data5);
    });
    
    let b6 = document.getElementById('6');
    b6.addEventListener('click', function() {
        let data6 = data.filter(function(x){
            return x.id>=51 && x.id<=60
            });
            console.log(data6);
            displayData(data6);
    });
    
    let b7 = document.getElementById('7');
    b7.addEventListener('click', function() {
        let data7 = data.filter(function(x){
            return x.id>=61 && x.id<=70
            });
            console.log(data7);
            displayData(data7);
    });
    
    let b8 = document.getElementById('8');
    b8.addEventListener('click', function() {
        let data8 = data.filter(function(x){
            return x.id>=71 && x.id<=80
            });
            console.log(data8);
            displayData(data8);
    });
    
    let b9 = document.getElementById('9');
    b9.addEventListener('click', function() {
        let data9 = data.filter(function(x){
            return x.id>=81 && x.id<=90
            });
            console.log(data9);
            displayData(data9);
    });
    
    let b10 = document.getElementById('10');
    b10.addEventListener('click', function() {
        let data10 = data.filter(function(x){
            return x.id>=91 && x.id<=100
            });
            console.log(data10);
            displayData(data10);
    });

    let previous = document.querySelector('#prev');
    previous.addEventListener('click', function() {
        

    });
    
};
}

xhr.send();