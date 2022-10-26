// ------------------------ //
// ---> Ici appel Api


class Api {
    /**
     * 
     * @param {*} url 
     */
    constructor(url) {
        this.url = url
    }
    /**
     * 
     * @returns response.json()
     */
    async get() {
        return fetch(this.url)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export class PhotographersApi extends Api {
    /**
     * 
     * @param {*} url 
     */
    constructor(url) {
        super(url)
    }
    /**
     * 
     * @returns tout les photographes
     */
    async getAllPhotgraphers() {
        const data = await this.get()
        return data.photographers
    }
    /**
     * 
     * @param {*} id 
     * @returns un photographe
     */
    async getOnePhotographer(id) {
        const data = await this.get()
        return data.photographers.find(photographer => photographer.id === id)
    }
    /**
     * 
     * @param {*} photographerId 
     * @returns tout les medias d'un photographe
     */
    async getMediaOnePhotographer(photographerId) {
        const data = await this.get()
        console.log(data);
        return data.media.filter(media => media.photographerId === photographerId)
    }
}

