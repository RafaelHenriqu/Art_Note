
function Start(){
    const Max = 100
    var Nota
    var Resolucao = new Image()
    Resolucao.src = localStorage.Set_Image
    var X = Resolucao.width
    var Y = Resolucao.height
    document.getElementById("Imagen_para_Analisar").style.backgroundImage = `url(${localStorage.Set_Image})`
   switch(localStorage.Nivel){
    case '1':
        Bonus = 10
        break
    case '2':
        Bonus = 5
        break
    case '3': 
        Bonus = 3
        break
    case '4':
        Bonus = 2
        break
    case '5': 
        Bonus = 0
        break
    default: 
        break
   }

   if (X < 1280 && Y < 720) // Abaixo de HD
    {
     Pontos_De_Resolucao = 5
    }else if (X <= 1281 && Y <= 721 && X >= 1280 && Y >= 720){ // HD 
     Pontos_De_Resolucao = 10 
    }else if (X <= 1921 && Y <= 1081 && X >= 1280 && Y >= 720){ // Entre HD e Full HD
     Pontos_De_Resolucao = 20
    }else if (X <= 2049 && Y <= 1081 && X >= 1920 && Y >= 1080){ // Entre Full HD e 2K
     Pontos_De_Resolucao = 30
    }else if (X <= 3841 && Y <= 2161 && X >= 2048 && Y >= 1080){ // Entre 2k e 4K
     Pontos_De_Resolucao = 40
    }else if (X <= 7681  && Y <= 4321 && X >= 3840 && Y >= 2160){// Entre 4k e 8K
     Pontos_De_Resolucao = 45
    }else if (X <= 15241 && Y <= 15241 && X  >= 7680  && Y >= 4320){// Entre 8k e 10K
     Pontos_De_Resolucao = 50
    }else{
     Pontos_De_Resolucao = Math.floor(Math.random(0) * 25)
    }


    

   Nota = Bonus + Pontos_De_Resolucao
    


    document.getElementById("Nota").innerHTML = `Nota: ${Nota}/${Max}`

}

function Nivel_Selecionado(Nivel){
    localStorage.Nivel = Nivel
    location.href = "Insert_Img.html"
}

function Selecionar_Imagen(){
    document.getElementById("Imagen").click()
}



function Iniciar_Analise(){
    location.href = "Analise.html"
}

function Reset(){
    location.href = "index.html"
}