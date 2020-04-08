class Bake {
    constructor(bake) {
        this.name = bake.name;
        this.description = bake.description;
        this.image_url = bake.image_url;
        this.id = bake.id;
    }

    name_element() {
        const li = document.createElement('li');
        li.innerText = this.name
        li.dataset.id = this.id;
        return li
    }

    img_element() {
        const img = document.createElement('img');
        // debugger
        // console.log('imgage url  = ' + this.image_url)
        img.src = this.image_url

        img.dataset.id = this.id;
        return img
    }
}