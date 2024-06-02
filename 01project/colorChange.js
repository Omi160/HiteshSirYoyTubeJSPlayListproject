const buttons = document.querySelectorAll(`.button`)               // button select kela
    // console.log(`button`);

const body = document.querySelector(`body`)                        // body select kela

buttons.forEach(function (butt) {
    console.log(butt);                                             // (buttons) waprun for Each mule saglya button war jata alla (butt) mule
    butt.addEventListener(`click`, function (e) {                  // ((butt) addEventListener madhe waprun function create kela ani jene karun click kelaya war button ID bhetla
        console.log(e);
        console.log(e.target);
            if(e.target.id === `grey`){                            // ID match karun style lawli
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === `white`){
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === `blue`){
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === `yellow`){
                body.style.backgroundColor = e.target.id
            }
            
            
    })
})


