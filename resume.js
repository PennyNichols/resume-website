console.log("It's working")

let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('white')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
            let mode = this.dataset.mode
            console.log('Option clicked:', mode)
            setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'white'){
        document.getElementById('theme-style').href = 'resume.css'
    }

    if(mode == 'red'){
        document.getElementById('theme-style').href = 'red.css'
    }

    if(mode == 'orange'){
        document.getElementById('theme-style').href = 'orange.css'
    }

    if(mode == 'yellow'){
        document.getElementById('theme-style').href = 'yellow.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    if(mode == 'pink'){
        document.getElementById('theme-style').href = 'pink.css'
    }

    localStorage.setItem('theme', mode)
}