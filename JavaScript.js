function backgroundc() {
    document.body.style.backgroundColor = "Green";
}

function littOmMegButton() {
    Blank();
    document.getElementById('LittOmMegTag').innerHTML = /*HTML*/`
    <div>
        <div class="InnerCard">
            En liten introduksjon om meg
            <ul>
                <li>
                     Hei, jeg heter Aleksander og er 23 år og bor på Gressvik i
                     Fredrikstad 
                </li>
            </ul>
        </div>
    </div> 
    `;
}


function hobbyButton() {
    Blank();
    document.getElementById('hobbyTag').innerHTML = /*HTML*/`
    <div>
        <div class="InnerCard">
        Dette er hobbyene jeg holder på mest med
            <ul>
                <li>Spill</li>
                <li>Anime</li>
                <li>Manga/Manwha</li>
                <li></li>
            </ul>
        </div>
    </div> 
    `;
}

function bildeAvMegButton() {
    Blank();
    document.getElementById('bildeAvMegTagg').innerHTML = /*HTML*/`
    <div class="InnerCard">
        <ul>
        <img src="Images/Meg.png"/>
        </ul>
    </div>
    `;
}

function Blank() {
    document.getElementById('LittOmMegTag').innerHTML = '';
    document.getElementById('hobbyTag').innerHTML = '';
    document.getElementById('bildeAvMegTagg').innerHTML = '';
}
