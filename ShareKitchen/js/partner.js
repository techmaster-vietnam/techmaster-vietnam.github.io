var tools=[];
var locations=[];
$('.type-image').click(function(){
    $('.type-box').toggle();
});
function changeTable1(){
    $('.table-tools-desktop').hide();
    $('.one').hide();
    $('.table-location-desktop').show();
    $('.two').show();
}

function changeTable2(){
    $('.table-tools-desktop').show();
    $('.one').show();
    $('.table-location-desktop').hide();
    $('.two').hide();
}

function toggle_1(source) {
    checkboxes = document.getElementsByName('tick');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}
function toggle_2(source) {
    checkboxes = document.getElementsByName('tick0');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}

function GetSelected_1() {
    //Reference the Table.
    var grid = document.getElementsByClassName('table-tools-desktop')[0];

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("input");

    //Loop through the CheckBoxes.
    for (var i = 1; i < checkBoxes.length; i++) {
        let object={
            id:"",
            imageURL:"",
            amount:"",
            price:"",
            totalPrice:"",
        };
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
           
            object.id=row.cells[0].innerHTML;
            
            object.imageURL=row.cells[1].innerHTML;
           
            object.amount=row.cells[4].innerHTML;
            
            object.price=row.cells[5].innerHTML;
           
            object.totalPrice=row.cells[6].innerHTML;
          
            tools.push(object);
        }
    }
    localStorage.setItem("tools", JSON.stringify(tools));
    
}

function GetSelected_2() {
    //Reference the Table.
    var grid = document.getElementsByClassName('table-location-desktop')[0];

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("input");

    //Loop through the CheckBoxes.
    for (var i = 1; i < checkBoxes.length; i++) {
        let object={
            id:"",
            address:"",
            time:"",
            price:"",
        };
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            
            object.id=row.cells[0].innerHTML;
            
            object.address=row.cells[3].innerHTML;
           
            object.time=row.cells[4].innerHTML;
           
            object.price=row.cells[5].innerHTML;
        
            locations.push(object);
        }
    }
    localStorage.setItem("locations", JSON.stringify(locations));
}