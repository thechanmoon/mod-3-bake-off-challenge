class BakeController {
    static BASE_URL = 'http://localhost:3000/bakes';

    static init() {
        // Adapter.getData('http://localhost:3000/bakes')
        Adapter.getData(BakeController.BASE_URL)
            .then(BakeController.renderData)
            // console.log('init called')
            // const form = document.querySelector('#bakes-container');
            // form.addEventListener('submit', BakeController.handleSubmit);
    }

    static renderData(array) {
        // const table = document.querySelector('#table-body');
        // table.innerHTML = ''
        array.forEach(BakeController.render);
    }

    static render(element) {
        const container = document.querySelector('#bakes-container')
        const bake = new Bake(element)
        const name_element = bake.name_element();
        // item.addEventListener("mouseenter", BakeController.handleMouseEnter, false)
        name_element.addEventListener("mouseover", BakeController.handleMouseOver, false)
        name_element.addEventListener("mouseout", BakeController.handleMouseOut, false)
        name_element.addEventListener("click", BakeController.handleClick, false)
        container.append(name_element)
    }

    // static handleMouseEnter(event) {
    //     event.target.style.color = "purple";

    //     // reset the color after a short delay
    //     setTimeout(function() {
    //         event.target.style.color = "";
    //     }, 500);
    // }

    static handleMouseOver(event) {
        event.target.style.color = "orange";

        // reset the color after a short delay
        // setTimeout(function() {
        //     event.target.style.color = "";
        // }, 500);
    }

    static handleMouseOut(event) {
        event.target.style.color = "";
    }

    static handleClick(event) {
        const id = event.target.dataset.id
        Adapter.getData(BakeController.BASE_URL, id)
            .then(BakeController.populateForm)
            // let data = Adapter.getData(BakeController.BASE_URL, id);
            // debugger
            // BakeController.populateForm(data);
    }

    static populateForm(bake) {
        const newBake = new Bake(bake)
        const detail = document.querySelector('#detail')

        while (detail.firstChild) {
            detail.firstChild.remove();
        }
        detail.append(newBake.img_element())
    }

    static handleSubmit(e) {
        e.preventDefault()
        const data = {
            id: e.target.dataset.id,
            name: e.target.name.value,
            breed: e.target.breed.value,
            sex: e.target.sex.value
        }
        Adapter.editData(BakeController.BASE_URL, data)
            .then(Adapter.getData(BakeController.BASE_URL))
            .then(BakeController.renderBakes)
        e.target.reset()
        e.target.dataset.id = ''
    }
}