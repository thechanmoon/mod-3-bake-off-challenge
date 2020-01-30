// Leave this here! 
// Show the form
document.querySelector("#make-bake-button").addEventListener("click", () => {
  modal.style.display = "block"
})
// Hide the form
document.querySelector("#modal").addEventListener("click", e => {
  if (e.target.dataset.action === "close") {
    modal.style.display = "none"
  }
})


const form = document.querySelector("#new-bake-form")
const detail = document.querySelector("#detail")
const bakesContainer = document.querySelector("#bakes-container")


const state = {
  bakes: [],
  selectedBakeId: null
}

bakesContainer.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    const bakeId = parseInt(e.target.dataset.id)
    selectedBakeId = bakeId
    const foundBake = state.bakes.find(bake => bake.id === bakeId)
    renderOneBakeDetail(foundBake)
  }
})

form.addEventListener("submit", e => {
  e.preventDefault()

  const newBake = {
    name: e.target.name.value,
    image_url: e.target.image_url.value,
    description: e.target.description.value
  }

  fetch("http://localhost:3000/bakes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newBake)
  })
    .then(r => r.json())
    .then(bake => {
      state.bakes.push(bake)
      renderOneBakeLi(bake)
    })
})

detail.addEventListener("submit", e => {
  e.preventDefault()
  const score = parseInt(e.target.score.value)

  fetch(`http://localhost:3000/bakes/${selectedBakeId}/ratings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
    },
    body: JSON.stringify({
      score: score
    })
  })
})

function renderOneBakeDetail(bake) {
  detail.innerHTML = `
    <img src="${bake.image_url}" alt="${bake.name}">
    <h1>${bake.name}</h1>
    <p class="description">
      ${bake.description}
    </p>
    <form id="score-form">
      <input type="number" name="score" min="0" max="10" step="1">
      <input type="submit" value="Rate">
    </form>
  `
}

function renderOneBakeLi(bake) {
  const li = document.createElement("li")
  li.classList.add("item")
  li.dataset.id = bake.id
  li.textContent = bake.name
  bakesContainer.append(li)
}

function renderAllBakes(bakes) {
  bakes.forEach(renderOneBakeLi)
}

fetch("http://localhost:3000/bakes")
  .then(r => r.json())
  .then(bakes => {
    state.bakes = bakes
    renderAllBakes(state.bakes)
  })