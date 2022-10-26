
export class Media {

    baseImage = 'assets/images'

    constructor(media) {

        this.id = media.id
        this.photographerId = media.photographerId
        this.title = media.title
        this.image = media.image
        this.video = media.video
        this.likes = media.likes
        this.date = media.date
        this.price = media.price

    }

    /**
     * 
     * @param {*} property 
     * @returns this[property]
     */
    get(property) {
        if (isset(this[property])) {
            return this[property]
        }
    }

    /**
     * 
     * @returns mediaTemplate
     */
    getAllMedia() {

        const imageTemplate = `<img id='${this.id}' class='picture' data-id='${this.id}' width='400px' height='350px' alt='photographie ${this.title}' src='${this.baseImage}/${this.photographerId}/${this.image}' tabindex="0">`
        const videoTemplate = `<video  id='${this.id}' class='picture' data-id='${this.id}' width='400px' height='350px' tabindex="0">
                                 <source alt='${this.title}' src='${this.baseImage}/${this.photographerId}/${this.video}' type="video/mp4" >
                               </video>
                               `
        let media = ''
        if (this.image) {
            media = imageTemplate
        } else {
            media = videoTemplate
        }

        const mediaTemplate = `
            <div  class='card-image' >
                <a data-id='${this.id}' data-date='${this.date}' data-title='${this.title}' data-likes='${this.likes}'>${media}</a>
                <div class='img-info'>
                    <h2 tabindex="0">${this.title}</h2>
                    <label title='nombre de favoris' tabindex="0" for'${this.id}' aria-label='favori' class='likes'><p class='likes-value'>${this.likes}</p>
                        <input aria-describedby='favori'  title='nombre de favoris' id='${this.id}' type="checkbox" name="fav" aria-label='${this.likes} favoris'  aria-describedby='${this.likes} favoris' aria-labelledby="fav"/>
                        <i title='nombre de favoris'   class="fa-solid fa-heart" tabindex="0"></i>
                    </label>
                 </div>
            </div>     
        `
        return mediaTemplate

    }

}


