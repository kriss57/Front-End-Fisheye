// POINTER DOM
let lightboxModal = document.querySelector('.lightbox')
let lightboxModalClose = document.querySelector('.close-lightbox')

let lightboxContain = document.querySelector(".lightbox-container")
let lightboxTitle = document.querySelector(".lightbox-media-title")

let prev = document.querySelector('.left-arrow')
let next = document.querySelector('.right-arrow')

let titleContain = document.querySelector('.title-image')
let mainContain = document.querySelector('#main')

let all = []
let position = 0

/**
 * Ouvre la lightbox
 * @param {*} event 
 */
const openLightbox = (e) => {
    // accéssibilité clavier ouvert
    mainContain.setAttribute('aria-hidden', 'true')
    lightboxModal.setAttribute('aria-hidden', 'false')
    lightboxModalClose.focus()
    // affiche lightbox
    lightboxModal.style.display = 'block'
    window.scrollTo(0, 0)
    // défini media
    let media = e.target.parentNode.parentNode
    // défini position
    position = [...media.parentNode.children].indexOf(media)

    setVideoCtrl()

    setMedia()

}

/**
 * Ajoute le lecteur vidéo
 */
const setVideoCtrl = () => {
    all = document.querySelectorAll('.card-image')
    for (let m of all) {
        let videoElt = m.childNodes[1].children[0]

        if (videoElt.nodeName === 'VIDEO') {
            videoElt.setAttribute('controls', "")
            console.log('dans video');
        }

    }

}
/**
 * supprime le lecteur video
 */
const removeVideoCtrl = () => {
    all = document.querySelectorAll('.card-image')
    for (let m of all) {
        let videoElt = m.childNodes[1].children[0]

        if (videoElt.nodeName === 'VIDEO') {
            videoElt.removeAttribute('controls')

        }

    }
}
/**
 * Affiche le media et affiche le titre
 */
const setMedia = () => {
    // affiche le media
    lightboxContain.innerHTML = all[position].childNodes[1].innerHTML

    // insertion du titre
    let titleImg = all[position].childNodes[1].dataset.title
    let eltTitle = `<h3>${titleImg}</h3>`
    lightboxContain.insertAdjacentHTML('beforeend', eltTitle)


}
/**
 * Ferme la lightbox
 */
const closeLightbox = () => {
    // accéssibilité clavier fermer
    mainContain.setAttribute('aria-hidden', 'false')
    lightboxModal.setAttribute('aria-hidden', 'true')
    lightboxModal.focus()
    removeVideoCtrl()
    // close modal
    lightboxModal.style.display = 'none'

}
/**
 * Affiche le media suivant
 */
const prevMedia = () => {
    position--
    if (position == -1) {
        position = all.length - 1
    }
    setMedia()
}
/**
 * Affiche le media précédent
 */
const nextMedia = () => {
    position++
    if (position == all.length) {
        position = 0
    }
    setMedia()
}
/**
 * Rafraichit la position des medias
 */
const refreshCardPosition = () => {
    all = document.querySelectorAll('.card-image')
    console.log('refresh' + all);

}
/**
 * lanceur Lightbox
 */
const startLightboxListener = () => {
    all = document.querySelectorAll('.card-image')

    for (let m of all) {
        m.childNodes[1].addEventListener('click', openLightbox)
        //commande clavier
        m.childNodes[1].addEventListener('keypress', openLightbox)
    }

    // ---- EventListener CLose lightbox
    lightboxModalClose.addEventListener('click', closeLightbox)
    //commande clavier
    lightboxModalClose.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            closeLightbox()
        }
    })
    // ---- EventListener prevMedia lightbox
    prev.addEventListener('click', prevMedia)
    //commande clavier
    prev.addEventListener("keypress", (e) => {
        if (e.key == 'Enter') {
            prevMedia()
        }
    })
    // ---- EventListener nextMedia lightbox
    next.addEventListener('click', nextMedia)
    //commande clavier
    next.addEventListener("keypress", (e) => {
        if (e.key == 'Enter') {
            nextMedia()
        }
    })

    // ---- Navigation fleche directionnel
    document.addEventListener('keydown', (e) => { arrowKeyNavigation(e) })
}

/**
 * Navigation fleche directionnel
 * @param {*} event 
 */
const arrowKeyNavigation = (e) => {
    e = e || window.e

    if (e.keyCode == '37') {
        nextMedia()
    }
    if (e.keyCode == '39') {
        prevMedia()
    }

    if (e.keyCode == '27') {
        closeLightbox(e)
    }
}