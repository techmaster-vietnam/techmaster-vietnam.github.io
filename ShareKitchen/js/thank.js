var storedTools= localStorage.getItem('tools');
var storedLocations= localStorage.getItem('locations');
var storedMoneyDonator= localStorage.getItem('moneydonator');
var storedMoneyPartner= localStorage.getItem('moneypartner');
var tools=[];
var locations=[];
var moneydonator;
var moneypartner;
    if(storedTools){
        tools = JSON.parse(storedTools);
        console.log(tools);
    }else{
        console.log("null");
    }
    if(storedLocations){
        locations = JSON.parse(storedLocations);
        console.log(locations);
    }else{
        console.log("null");
    }
    if(storedMoneyDonator==="undefined"|| storedMoneyDonator===null){
        console.log(null);
    }else{
        moneydonator = JSON.parse(storedMoneyDonator);
        console.log(moneydonator);
    }
    if(storedMoneyPartner==="undefined" || storedMoneyPartner===null){
        console.log(null);
    }else{
        moneypartner = JSON.parse(storedMoneyPartner);
        console.log(moneypartner);
    }


displayValue();
function displayValue(){
    for(let i=0;i < tools.length;i++){
        console.log(tools[i].id);
    }
}
render();
function render(){
    if(tools===null){
        console.log('null');
    }else{
        renderTools();
    }
    if(locations===null){
        console.log('null');
    }else{
        renderLocations();
    }
    if(moneydonator===undefined || moneydonator==='0' || moneydonator===null || moneydonator===""){
        console.log('null');
    }else{
        renderMoneyDonator();
    }
    if(moneypartner===undefined || moneypartner==='0' || moneypartner===null || moneypartner===""){
        console.log('null');
    }else{
        renderMoneyPartner();
    }
}
function renderTools(){
    $('.form-thank-content-1').css('height','100%');
    for(let i=0;i<tools.length;i++){
        $('.table-tools-desktop').append(
        '<tr>'
        +'<th class="image-1">'+tools[i].imageURL+'</th>'
        +'<th>'+'x'+'</th>'
        +'<th>'+tools[i].amount+'</th>'
        +'</tr>'
        );
    }
}
function renderLocations(){
    $('.form-locations-content-1').css('height','100%');
    for(let i=0;i<locations.length;i++){
        $('.table-locations-desktop').append(
        '<tr>'
        +'<th class="address-1">'+locations[i].address+'</th>'
        +'<th>'+locations[i].time+'</th>'
        +'<th>'+locations[i].price+'</th>'
        +'</tr>'
        );
    }
}
function renderMoneyDonator(){
    $('.form-locations-content-1').css('height','100%');
    $('.money-thank').append(
    '<label class="partner-word-1">'+'TÀI TRỢ'+'</label>'
    +'<label class="money-1">'
    +parseInt(moneydonator).toLocaleString('de-DE')+ ' đ'
    +'</label>'
    );
}
function renderMoneyPartner(){
    $('.form-locations-content-1').css('height','100%');
    $('.money-thank').append(
    '<label class="partner-word-1">'+'ĐỐI TÁC'+'</label>'
    +'<label class="money-1">'
    +parseInt(moneypartner).toLocaleString('de-DE')+' đ'
    +'</label>'
    );
}
