let a = document.getElementsByClassName('news_1')

for (i = 0; i < a.length; i++) {

    let news_1 = `<div class="col-sm-6 a">
<div id="image">
    <img src="../img/tintuc1.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>
<div class="col-sm-6 a">
<div id="image">
    <img src="../img/tintuc2.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>
`;


    a[i].innerHTML = news_1;
}







let b = document.getElementsByClassName('news_2')

for (i = 0; i < b.length; i++) {
    let news_2 = `<div class="col-sm-4 a">
<div id="image1">
    <img src="../img/tintuc3.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>
<div class="col-sm-4 a">
<div id="image1">
    <img src="../img/tintuc4.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>

<div class="col-sm-4 a">
<div id="image1">
    <img src="../img/tintuc5.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum
        has
        been the industry's standard dummy text ever since the 1500s, when an unknown
        printer
        took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>`

    b[i].innerHTML = news_2;

}






let news_3 = `<div class="col-sm-4 a">
<div id="image1">
    <img src="../img/tintuc3.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>
<div class="col-sm-4 a">
<div id="image1">
    <img src="../img/tintuc4.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>

<div class="col-sm-4 a">
<div id="image1">
    <img src="../img/tintuc5.jpg" alt="">
</div>
<div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum
        has
        been the industry's standard dummy text ever since the 1500s, when an unknown
        printer
        took a
        galley of type and scrambled it to make a type specimen book. </p>
</div>
</div>`


function loadImages() {
    document.getElementById("other_item").innerHTML = news_3;

    $("#e").remove();
}