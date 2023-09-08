console.log("In the JS file")

if("serviceWorker" in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/TheBestApp/sw.js')
        .then(reg=>{
            console.log("Registerd", reg)
        }).catch(err=>{
            console.log("Failed!!",err)
        })
    })
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    deferredPrompt = e

    btnAdd.style.display = "block"

    btnAdd.addEventListener('click',(e)=>{
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult)=>{
            if(choiceResult.outcome ==='accepted'){
                console.log("User accepted A2SH prompt")
            }
            deferredPrompt = null;
        })
    })
})

window.addEventListener('appinstalled',(evt)=>{
    app.logEvent('a2js','installed')
})
