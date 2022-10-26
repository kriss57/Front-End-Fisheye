//-------------------------------//
// ----Gestion d'ajout de likes
let allLikes = []

/**
 * listener likes
 * Incrémentations likes
 */
const addLikes = () => {
    console.log('dans addLikes');
    // ---Récup des éléments likes par médias
    let allLikes = document.querySelectorAll('.likes-value')
    // ---Récup de l'élément du total des likes
    let eltsTotalLikes = document.querySelector('.bloc-stat p')
    // ---Récup la valeur de totalLikes
    let totalLikes = parseInt(eltsTotalLikes.innerText)
    // ---Boucle sur toute les checkbox
    const checkbox = document.querySelectorAll('input[name = "fav"]')
    for (let i = 0; i < checkbox.length; i++) {

        checkbox[i].addEventListener('click', () => {
            //--récup des éléments like par média
            let eltLikeByMedia = allLikes[i]
            //--récup la valeur de like par média
            let likeByMedia = parseInt(allLikes[i].innerText)

            // si c liké
            if (checkbox[i].checked == true) {
                checkbox[i].setAttribute('aria-checked', 'true')
                // ---maj des likes par media
                let addLike = likeByMedia + 1
                eltLikeByMedia.innerText = addLike
                // --maj total likes
                let addToTotalLikes = totalLikes += 1
                eltsTotalLikes.innerText = addToTotalLikes

                // --- si disLiké
            } else {
                checkbox[i].setAttribute('aria-checked', 'false')
                // ---maj des likes par media
                let addLike = likeByMedia - 1
                eltLikeByMedia.innerText = addLike
                // --maj total likes
                let addToTotalLikes = totalLikes -= 1
                eltsTotalLikes.innerText = addToTotalLikes

            }

        })
        // Commande clavier
        checkbox[i].addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
            }

            //--récup des éléments like par média
            let eltLikeByMedia = allLikes[i]
            //--récup la valeur de like par média
            let likeByMedia = parseInt(allLikes[i].innerText)

            // si c liké
            if (checkbox[i].checked == true) {
                checkbox[i].setAttribute('aria-checked', 'true')
                // ---maj des likes par media
                let addLike = likeByMedia + 1
                eltLikeByMedia.innerText = addLike
                // --maj total likes
                let addToTotalLikes = totalLikes += 1
                eltsTotalLikes.innerText = addToTotalLikes

                // --- si disLiké
            } else {
                checkbox[i].setAttribute('aria-checked', 'false')
                // ---maj des likes par media
                let addLike = likeByMedia - 1
                eltLikeByMedia.innerText = addLike
                // --maj total likes
                let addToTotalLikes = totalLikes -= 1
                eltsTotalLikes.innerText = addToTotalLikes

            }

        })
    }

}


const refreshLikes = () => {
    allLikes = document.querySelectorAll('.likes-value')

}