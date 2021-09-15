function aleatorio(menor,mayor) {
    let posibilidades = mayor - menor;
    let aleatorio = Math.random() * (posibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return menor + aleatorio;
}





class Armas{
    constructor (nombre,dañoMin,dañoMax){
        this.nombre = nombre
        this.dañoMin = dañoMin
        this.dañoMax = dañoMax
    }
}

class Personaje{
    constructor (nombre,contraseña,raza,clase){

        this.nombre = nombre
        this.contraseña = contraseña
        this.raza = raza
        this.clase = clase
        this.nivel = 20
        this.vida = 100
        this.daño=0
        this.dañoFinal = 0

        this.fuerza = ""
        if(raza=="humano"){
            this.fuerza=aleatorio(4,10)+3
        }else if(raza=="elfo"){
            this.fuerza=aleatorio(4,10)+1
        }else{
            this.fuerza=aleatorio(4,10)+8
        }

        this.agilidad = ""
        if(raza=="humano"){
            this.agilidad=aleatorio(4,10)+5
        }else if(raza=="elfo"){
            this.agilidad=aleatorio(4,10)+3
        }else{
            this.agilidad=aleatorio(4,10)+2
        }

        this.inteligencia = ""
        if(raza=="humano"){
            this.inteligencia=aleatorio(4,10)+3
        }else if(raza=="elfo"){
            this.inteligencia=aleatorio(4,10)+7
        }else{
            this.inteligencia=aleatorio(4,10)+1
        }
        

       
    }
     
    

    atacar() {
        this.daño=((aleatorio(this.nivel,(this.nivel*2)))+(this.fuerza*2))
        
        

    }
}


class Monstruo{
    constructor (nombre,nivel,vida){

        this.nombre = nombre
        this.nivel = nivel
        this.vida = vida
        this.daño=0
    }
     

    atacar() {
        this.daño=aleatorio(this.nivel*4,this.nivel*8)
        console.log("La criatura te golpea por " + this.daño)
    }
}




    let nombrep1 = prompt("Elige el nombre de tu personaje")
    let contraseñap1 = prompt("elige tu contraseña")
    let razap1 = (prompt("elige tu raza \n Humano \n Elfo \ Orco")).toLowerCase()
    let clasep1 = (prompt("elige tu clase \n Guerrero  \n Mago \n Cazador")).toLowerCase()

    


    let personaje1 = new Personaje (nombrep1,contraseñap1,razap1,clasep1)
    let arma1 = new Armas("Daga",3,9)
    let arma2 = new Armas("Espada",5,7)
    let arma3 = new Armas("Hacha",6,6)
    let charName =document.getElementById("charName")
    charName.textContent= personaje1.nombre

    const mochila = [""]

    mochila.push(arma1,arma2,arma3)



    alert("Personaje creado exitosamente! \n \n Nombre: "+personaje1.nombre+ "\n Contraseña: "+personaje1.contraseña+"\n Raza: "+personaje1.raza+"\n Clase: "+personaje1.clase+"\n nivel: "+personaje1.nivel+"\n Fuerza: "+personaje1.fuerza+"\n Agilidad: "+personaje1.agilidad+"\n Inteligencia: "+personaje1.inteligencia)




    let enfrentar = confirm("Te encuentras con una criatura hostil en el bosque, deseas enfrentarte a ella?")

    let monstruo1 = new Monstruo ("Beholder",3,100)
    let escapar =0
    let pelear = true
    let monsName = document.getElementById("monsName")
    monsName.textContent = monstruo1.nombre

    const consejos = ["El daño causado depende del arma que uses","Cada raza tiene diferentes estadisticas","Puedes huir de una batalla si te niegas a luchar"]

    let consejoAleatorio = document.getElementById("consejo")
    consejoAleatorio.textContent = consejos[aleatorio(0,2)]




  

    if(enfrentar==true){
        alert("te enfrenta a "+monstruo1.nombre)
        while(monstruo1.vida>=0 && personaje1.vida>=0 && pelear==true){
            pelear = confirm("Deseas atacar?")
            if (pelear==true){
            let equip = mochila[prompt("Que arma deseas usar? \n 1."+mochila[1].nombre+ "        Daño: "+ mochila[1].dañoMin+ " / "+ mochila[1].dañoMax +"\n 2."+mochila[2].nombre+ "        Daño: "+ mochila[2].dañoMin+ " / "+ mochila[2].dañoMax+ "\n 3."+mochila[3].nombre+ "        Daño: "+ mochila[3].dañoMin+ " / "+ mochila[3].dañoMax )]
            personaje1.atacar()
            personaje1.dañoFinal= personaje1.daño+aleatorio(equip.dañoMin,equip.dañoMax)
            console.log("el daño basico es de: "+personaje1.daño)
            console.log("Das un golpe con tu arma por " + personaje1.dañoFinal)
            
            monstruo1.vida = monstruo1.vida-personaje1.dañoFinal
            console.log("La vida de la criatura ahora es de "+monstruo1.vida)
            monstruo1.atacar()
            personaje1.vida=personaje1.vida-monstruo1.daño
            console.log("Ahora tu salud es de "+personaje1.vida)


            }
            else{
                alert("Escapas")
            }
            
        }
    }
    else{
        alert("Escapas del combate")
    }

    function curar(){
        personaje1.vida = personaje1.vida+35
        charHp.textContent=personaje1.vida+"/100"
        console.log("te curas ")
        let itemSlot = document.getElementById("pota").parentNode,
            potionImg = document.getElementById("pota") ;
        itemSlot.removeChild(potionImg)

    }
     
    let pocion = document.getElementById("pota")
    pocion.addEventListener("click",curar )


    



    function botonAtk() {
        let equip = mochila[prompt("Que arma deseas usar? \n 1."+mochila[1].nombre+ "        Daño: "+ mochila[1].dañoMin+ " / "+ mochila[1].dañoMax +"\n 2."+mochila[2].nombre+ "        Daño: "+ mochila[2].dañoMin+ " / "+ mochila[2].dañoMax+ "\n 3."+mochila[3].nombre+ "        Daño: "+ mochila[3].dañoMin+ " / "+ mochila[3].dañoMax )]
            personaje1.atacar()
            personaje1.dañoFinal= personaje1.daño+aleatorio(equip.dañoMin,equip.dañoMax)
            console.log("el daño basico es de: "+personaje1.daño)
            console.log("Das un golpe con tu arma por " + personaje1.dañoFinal)
            monstruo1.vida = monstruo1.vida-personaje1.dañoFinal
            let monsHp = document.getElementById("vm")
            monsHp.textContent =  monstruo1.vida+"/100"
        
            let charHp = document.getElementById("vc")
            charHp.textContent = personaje1.vida+"/100"

    }


    
   
    

  

    let botonRun = document.getElementById("run")
    botonRun.addEventListener("click",botonAtk)

    let monsHp = document.getElementById("vm")
    monsHp.textContent =  monstruo1.vida+"/100"

    let charHp = document.getElementById("vc")
    charHp.textContent = personaje1.vida+"/100"


  

    


    let itemsMochila = document.createElement("div")
    itemsMochila.className = "backpack"
    let backpackx = document.getElementById("mochila")
    let mochilaParent = backpackx.parentNode 
    let pocion2 = document.createElement("img")
    pocion2.src = "potion.png"
    pocion2.className = "pocion"
    let pocion3 = document.createElement("img")
    pocion3.src = "potion2.png"
    pocion3.className = "pocion"

    let pociones = [pocion2,pocion3]

    function abrirMochila(){
        backpackx.setAttribute("background-color","red")
        mochilaParent.insertBefore(itemsMochila,backpackx.nextSibling)
        for(let i = 0 ; i<pociones.length ; i++){
            itemsMochila.appendChild(pociones[i])
        }
    }


    backpackx.addEventListener("click",abrirMochila)



