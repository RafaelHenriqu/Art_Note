document.getElementById("Imagen").addEventListener('change',(e)=>{
    const Img = document.getElementById("Img")
    localStorage.Set_Image = URL.createObjectURL(e.target.files[0])
    Img.style.backgroundImage = `url(${localStorage.Set_Image})`
    Img.innerHTML = ""
})

