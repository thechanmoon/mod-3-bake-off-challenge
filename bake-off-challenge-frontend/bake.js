class Bake {
    constructor(bake) {
        this.name = bake.name;
        this.description = bake.description;
        this.image_url = bake.image_url;
        this.id = bake.id;
    }

    name_element() {
        const li = document.createElement('li');
        // li.innerText = this.name;
        li.textContent = this.name;
        li.dataset.id = this.id;
        li.className = "item";
        return li
    }

    img_element() {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const form = document.createElement('form');
        let inputNumber = document.createElement("input");
        let inputSubmit = document.createElement("input");

        inputNumber.value = 10;
        inputNumber.type = "number";
        inputNumber.name = "score";
        inputNumber.min = 0;
        inputNumber.max = 10;
        inputNumber.step = 1;
        
        inputSubmit.type = "submit";
        inputSubmit.value = "Rate";
        inputSubmit.name = "submit";
        // inputSubmit.id = "rate-submit";
        // debugger
        // console.log('imgage url  = ' + this.image_url)
        img.src = this.image_url;
        h1.innerText = this.name;
        p.innerText = this.description;
        form.dataset.id = this.id;
        form.append(inputNumber,inputSubmit);
        div.append(img,h1,p,form);
        
        return div
    }
}