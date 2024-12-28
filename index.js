const {app,BrowserWindow} = require("electron")

 
app.on('ready',()=>{
    
    mainWindows = new BrowserWindow({})

    mainWindows.loadURL(`File://${__dirname}/index.html`)
    
})