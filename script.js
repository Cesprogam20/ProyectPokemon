//Usando Jquery for the loading
window.onload = function(){
    $("#element1").fadeOut()
    $("body").removeClass("scroll")
}
//******************************************** */
const input = document.getElementById("search-input")
const btn1 = document.getElementById("search-button")
const namePokemon = document.getElementById("pokemon-name")
const id = document.getElementById("pokemon-id")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const types = document.getElementById("types")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("special-attack")
const specialDefense = document.getElementById("special-defense")
const speed = document.getElementById("speed")
const image = document.getElementById("sprite")
const activate = async function () {
    try{
        let input1 = input.value.toLowerCase()
        const info = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input1}`);
        const data = await info.json()
        namePokemon.textContent = `${data.name.toUpperCase()}`
        id.textContent = "#"+`${data.id}`
        weight.textContent = `Weight: ${data.weight}`
        height.textContent = `Height: ${data.height}`
        image.src = `${data.sprites.front_default}`
        types.innerHTML= data.types.map((item)=>`<span class="${item.type.name}">${item.type.name.toUpperCase()}</span>`).join("")
        hp.textContent = `${data.stats[0].base_stat}`
        attack.textContent = `${data.stats[1].base_stat}`
        defense.textContent = `${data.stats[2].base_stat}`
        specialAttack.textContent = `${data.stats[3].base_stat}`
        specialDefense.textContent = `${data.stats[4].base_stat}`
        speed.textContent = `${data.stats[5].base_stat}`
    }
    catch(err){
        reset()
        alert("Pokémon not found")
    }
}
function reset(){
    types.removeAttribute("style")
    namePokemon.textContent = ""
    id.textContent = ""
    weight.textContent = ""
    height.textContent = ""
    image.src = ""
    types.textContent= ""
    hp.textContent = ""
    attack.textContent = ""
    defense.textContent = ""
    specialAttack.textContent = ""
    specialDefense.textContent = ""
    speed.textContent =""
}
btn1.addEventListener("click",activate)