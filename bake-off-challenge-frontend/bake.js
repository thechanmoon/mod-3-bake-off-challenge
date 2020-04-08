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
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        let inputNumber = document.createElement("input")
        inputNumber.value = 10
        inputNumber.type = "number"
        inputNumber.name = "score"
        inputNumber.min = 0
        inputNumber.max = 10
        inputNumber.step = 1
        let inputSubmit = document.createElement("input")
        inputSubmit.type = "submit"
        inputSubmit.value = "Rate" 
        // debugger
        // console.log('imgage url  = ' + this.image_url)
        img.src = this.image_url;
        h1.innerText = this.name;
        p.innerText = this.description;
        div.dataset.id = this.id;
        div.append(img,h1,p,inputNumber, inputSubmit)
        return div
    }
}