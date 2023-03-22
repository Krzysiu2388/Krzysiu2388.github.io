import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazkow

loadSprite("tlo","choooinka.png")
loadSprite("krolik","krolik.png")
loadSound("muzyka","do szopy hej pasterze.mp3")


onKeyRelease("space",()=>{
    play("muzyka")
})




add([
    sprite("tlo"),
    pos(0,0)
])

const krolik = add([
    sprite("krolik"),
pos(100,300)
])

add([
    play("muzyka")
    ])

var xMinus =1;
onUpdate(()=>{
    if(krolik.pos.x ==100)
    {
         xMinus = 1;
    }
    if(krolik.pos.x == 400)
    {
    xMinus = -1;   
    }   
krolik.pos.x += xMinus;

}
)

