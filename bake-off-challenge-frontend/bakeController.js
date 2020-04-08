class BakeController {
    static BASE_URL = 'http://localhost:3000/bakes';

    static init() {
        const newBakeForm = document.querySelector("#new-bake-form")
        newBakeForm.addEventListener("submit",BakeController.handleSubmit)

        Adapter.getData(BakeController.BASE_URL)
            .then(BakeController.renderData)

    }
    static renderData(array) {
        array.forEach(BakeController.render);
        if(array.length>0)
        {
            BakeController.populateForm(array[0]);
        }
    }

    static render(element) {
        const container = document.querySelector('#bakes-container')
        const bake = new Bake(element)
        const name_element = bake.name_element();
        // item.addEventListener("mouseenter", BakeController.handleMouseEnter, false)
        name_element.addEventListener("mouseover", BakeController.handleMouseOver, false)
        name_element.addEventListener("mouseout", BakeController.handleMouseOut, false)
        // name_element.addEventListener("click", BakeController.handleClick, false)
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

        const id = event.target.dataset.id
        Adapter.getData(BakeController.BASE_URL, id)
            .then(BakeController.populateForm)
    }

    static handleMouseOut(event) {
        event.target.style.color = "";
    }

    // static handleClick(event) {
    //     const id = event.target.dataset.id
    //     Adapter.getData(BakeController.BASE_URL, id)
    //         .then(BakeController.populateForm)
    // }

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
            name: e.target.name.value,
            image_url: e.target.image_url.value,
            description: e.target.description.value
        }

        Adapter.createData(BakeController.BASE_URL, data)
            .then(Adapter.getData(BakeController.BASE_URL))
            .then(BakeController.render)
        e.target.reset()
        e.target.dataset.id = ''
    }
}