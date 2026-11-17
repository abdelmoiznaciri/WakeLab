import axios from "./node_modules/axios/dist/esm/axios.js"
const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: { "Content-Type": "application/json" },
});

const chargerActivites = async () => {
    try {
        const response = await api.get("/activites");
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message ?? "API inaccessible");
        return [];
    }
};

const data = await chargerActivites()
console.log(data)
const activitiesContainer = document.getElementById('activitiesContainer')

function affichageDesActivites(data) {
    activitiesContainer.replaceChildren()
    data.forEach(activitie => {
        const article = document.createElement('article')
        article.classList = "h-fit bg-white rounded-xl border border-gray-200 shadow-sm p-4 max-w-sm"
        activitiesContainer.appendChild(article)

        const div = document.createElement('div')
        div.classList = "flex items-center justify-between mb-4"
        article.appendChild(div)

        const span = document.createElement('span')
        span.textContent = `${activitie.theme}`

        switch (`${activitie.theme}`) {
            case 'jeu':
                span.classList = "bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                break;
            case 'apprentissage':
                span.classList = "bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                break;
            case 'exercice':
                span.classList = "bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full"
                break;
            default:
                span.classList = "bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full"
        }

        div.appendChild(span)

        const div2 = document.createElement('div')
        div2.classList = 'flex gap-4'

        const imageDiv2 = document.createElement('img')
        imageDiv2.src = 'assets/image.jpg'
        imageDiv2.classList = "w-24 h-40 object-cover rounded-lg"

        div2.appendChild(imageDiv2)
        article.appendChild(div2)

        const div2Div = document.createElement('div')
        div2Div.classList = 'flex flex-col gap-2'

        const div2DivActivitieTitre = document.createElement('h2')
        div2DivActivitieTitre.classList = 'text-lg font-semibold text-gray-800'
        div2DivActivitieTitre.textContent = `${activitie.titre}`

        div2Div.appendChild(div2DivActivitieTitre)
        div2.appendChild(div2Div)

        const div2DivActivitieAutheur = document.createElement('p')
        div2DivActivitieAutheur.classList = 'text-sm text-gray-500'
        div2DivActivitieAutheur.textContent = `${activitie.auteur}`
        div2Div.appendChild(div2DivActivitieAutheur)

        const div2DivActivitieDescription = document.createElement('p')
        div2DivActivitieDescription.classList = 'text-sm text-gray-600'
        div2DivActivitieDescription.textContent = `${activitie.description}`
        div2Div.appendChild(div2DivActivitieDescription)

        const div2DivActivitieDure = document.createElement('p')
        div2DivActivitieDure.classList = 'w-fit w-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded'
        div2DivActivitieDure.textContent = `${activitie.duree} Min`
        div2Div.appendChild(div2DivActivitieDure)

        const div3 = document.createElement('div')
        div3.classList = 'border-t border-gray-100 mt-4 pt-3'
        article.appendChild(div3)

        const div3Objectifs = document.createElement('p')
        div3Objectifs.classList = 'text-sm text-gray-500 mb-3'
        div3Objectifs.textContent = `${activitie.objectifs}`
        div3.appendChild(div3Objectifs)

        const div3Div = document.createElement('div')
        div3Div.classList = 'flex gap-3'
        div3.appendChild(div3Div)
        const ModifierButton = document.createElement('button')
        ModifierButton.classList = 'w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition'
        ModifierButton.textContent = 'Modifier'
        div3Div.appendChild(ModifierButton)

        const SupprimerButton = document.createElement('button')
        SupprimerButton.classList = 'w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition'
        SupprimerButton.textContent = 'Supprimer'
        div3Div.appendChild(SupprimerButton)


        console.log(article)
    })
}

affichageDesActivites(data)

