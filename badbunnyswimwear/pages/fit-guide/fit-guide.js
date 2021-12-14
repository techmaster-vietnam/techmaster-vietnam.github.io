let showItem = $('#showItem')
let tops = $('#tops')
let bottoms = $('#bottoms')
let onePieces = $('#one-pieces')

showItem.append(`
<div id="carouselExampleCrossfade" class="carousel slide carousel-fade tops" data-mdb-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"> <img src="../../img/fit-guide/Cabo-San-Lucas.jpeg" class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="1" aria-label="Slide 2"> <img src="../../img/fit-guide/ClovellyTop_2270cb7b-8684-44cb-800b-826881e8a4f1.jpeg" class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="2" aria-label="Slide 3"> <img src="../../img/fit-guide/Costa_Rica_Top_1_694ce5fa-e250-4876-a045-a52a7f44ea20.jpeg" class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="3" aria-label="Slide 4"> <img src="../../img/fit-guide/Formentera-Top-Fit-Guide-1.jpeg"class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="4" aria-label="Slide 5"> <img src="../../img/fit-guide/Hanalei-Top---Black-1.jpeg"  class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="5" aria-label="Slide 6"> <img src="../../img/fit-guide/Isla-Mujeres-Top-1.jpeg"  class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="6" aria-label="Slide 7"> <img src="../../img/fit-guide/Jamaica-Top-1.jpeg"  class="d-block w-100" alt="..." /></button>
</div>

<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="../../img/fit-guide/fit des/fit1.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/fit des/fit2.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/fit des/fit3.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/fit des/fit5.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/fit des/fit6.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/fit des/fit7.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/fit des/fit8.png" class="d-block w-100" alt="..." />
    </div>
</div>
</div>`)


bottoms.click((event) => {
    showItem.html('');
    showItem.append(`<div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"> <img src="../../img/fit-guide/bottoms/Argentina_Bottom.jpeg" class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="1" aria-label="Slide 2"> <img src="../../img/fit-guide/bottoms/Barbados-Bottom_94388065-8d3f-4cbb-a10a-8b0583d6c363.jpeg" class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="2" aria-label="Slide 3"> <img src="../../img/fit-guide/bottoms/Byron-Bottom-1_441358b1-f341-4a8c-a467-32554d593731.jpeg" class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="3" aria-label="Slide 4"> <img src="../../img/fit-guide/bottoms/Clovelly-1.jpeg"class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="4" aria-label="Slide 5"> <img src="../../img/fit-guide/bottoms/Le-Marais-Bottom-1_27f4ffb9-031d-4f56-87df-85c3fbea41c2.jpeg"  class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="5" aria-label="Slide 6"> <img src="../../img/fit-guide/bottoms/Palma-Bottom-1_6faf0efe-f47b-4515-9e0d-36aa9ea85608.jpeg"  class="d-block w-100" alt="..." /></button>
    <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="6" aria-label="Slide 7"> <img src="../../img/fit-guide/bottoms/Sorrento-Bottom.jpeg"  class="d-block w-100" alt="..." /></button>
</div>

<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="../../img/fit-guide/bottoms//Argentina.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/bottoms/Barrados.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/bottoms/Byron.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/bottoms/Clovelly.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/bottoms/LeMarais.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/bottoms/Palma.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
        <img src="../../img/fit-guide/bottoms/Sorrento.png" class="d-block w-100" alt="..." />
    </div>
</div>
</div>
`)
    bottoms.addClass("active");
    tops.removeClass("active");
    onePieces.removeClass("active");
})


tops.click((event) => {
    showItem.html('');
    showItem.append(`
    <div id="carouselExampleCrossfade" class="carousel slide carousel-fade tops" data-mdb-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"> <img src="../../img/fit-guide/Cabo-San-Lucas.jpeg" class="d-block w-100" alt="..." /></button>
                            <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="1" aria-label="Slide 2"> <img src="../../img/fit-guide/ClovellyTop_2270cb7b-8684-44cb-800b-826881e8a4f1.jpeg" class="d-block w-100" alt="..." /></button>
                            <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="2" aria-label="Slide 3"> <img src="../../img/fit-guide/Costa_Rica_Top_1_694ce5fa-e250-4876-a045-a52a7f44ea20.jpeg" class="d-block w-100" alt="..." /></button>
                            <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="3" aria-label="Slide 4"> <img src="../../img/fit-guide/Formentera-Top-Fit-Guide-1.jpeg"class="d-block w-100" alt="..." /></button>
                            <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="4" aria-label="Slide 5"> <img src="../../img/fit-guide/Hanalei-Top---Black-1.jpeg"  class="d-block w-100" alt="..." /></button>
                            <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="5" aria-label="Slide 6"> <img src="../../img/fit-guide/Isla-Mujeres-Top-1.jpeg"  class="d-block w-100" alt="..." /></button>
                            <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="6" aria-label="Slide 7"> <img src="../../img/fit-guide/Jamaica-Top-1.jpeg"  class="d-block w-100" alt="..." /></button>
                        </div>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../../img/fit-guide/fit des/fit1.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../../img/fit-guide/fit des/fit2.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../../img/fit-guide/fit des/fit3.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../../img/fit-guide/fit des/fit5.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../../img/fit-guide/fit des/fit6.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../../img/fit-guide/fit des/fit7.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../../img/fit-guide/fit des/fit8.png" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
    `)
    tops.addClass("active");
    bottoms.removeClass("active");
    onePieces.removeClass("active");
})


onePieces.click((event) => {
    showItem.html('');
    showItem.append(`
    <div id="carouselExampleCrossfade" class="carousel slide carousel-fade one-pieces" data-mdb-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"> <img src="../../img/fit-guide/one-pieces/ArubaOnePiece_25a7bf5a-bec3-499f-9a0f-7227fdae3e92.jpeg" class="d-block w-100" alt="..." /></button>
        <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="1" aria-label="Slide 2"> <img src="../../img/fit-guide/one-pieces/BahamasOnePiece_426a7c21-55f8-45bd-8df6-1b69040290d4.jpeg" class="d-block w-100" alt="..." /></button>
        <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="2" aria-label="Slide 3"> <img src="../../img/fit-guide/one-pieces/CorsicaOnePiece_05ff7ca3-b770-4e3e-9050-1ac6ac4885ea.jpeg" class="d-block w-100" alt="..." /></button>
        <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="3" aria-label="Slide 4"> <img src="../../img/fit-guide/one-pieces/Maui-OP-1.jpeg"class="d-block w-100" alt="..." /></button>
        <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="4" aria-label="Slide 5"> <img src="../../img/fit-guide/one-pieces/PortofinoOnePiece_8b269c43-e97b-4a2c-9f91-0a0199ddbd9f.jpeg"  class="d-block w-100" alt="..." /></button>
        <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="5" aria-label="Slide 6"> <img src="../../img/fit-guide/one-pieces/SARDINIA-FIT-GUIDE-1.jpeg"  class="d-block w-100" alt="..." /></button>
    </div>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../../img/fit-guide/one-pieces/Aruba.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../../img/fit-guide/one-pieces/Bahamas.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../../img/fit-guide/one-pieces/Corsica.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../../img/fit-guide/one-pieces/Maui.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../../img/fit-guide/one-pieces/Portofino.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../../img/fit-guide/one-pieces/Sardinia.png" class="d-block w-100" alt="..." />
        </div>
    </div>
</div>

`)
    onePieces.addClass("active");
    tops.removeClass("active");
    bottoms.removeClass("active");
})