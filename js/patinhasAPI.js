console.log("start");

const BASE_API_URL = "https://api.thedogapi.com/v1";
const API_KEY = "live_UtLclYNNi7hv5g9Za1c1lm35R28eAJAh8AohswvLS723aCWEGPZNhJVlfTWXyo9T";

const fetchDogBreeds = async () => {
  const response = await fetch(`${BASE_API_URL}/breeds`);
  const dogBreeds = await response.json();
  populateDogSelect(dogBreeds);
};

const populateDogSelect = (breeds) => {
  const select = document.querySelector(".breed-select");
  const breedOptions = breeds.map(breed => {
    const option = document.createElement("option");
    option.text = breed.name;
    option.value = breed.id;
    return option;
  });

  breedOptions.forEach(breedOption => {
    select.appendChild(breedOption);
  });
};

const fillDogImage = (imageUrl) => {
  document.querySelector("#dog-image").setAttribute("src", imageUrl);
}

const createDescriptionEntry = ({label, value}) => {
  const descriptionTerm = document.createElement("dt");
  descriptionTerm.textContent = label;
  const descriptionValue = document.createElement("dd");
  descriptionValue.textContent = value;
  const parentElement = document.querySelector("#dog-description");
  parentElement.appendChild(descriptionTerm);
  parentElement.appendChild(descriptionValue);
}

const fillDogDescrption = ({name, temperament, life_span: lifeSpan, origin, height, weight}) => {
  createDescriptionEntry({
    label: "Nome",
    value: name
  })

  createDescriptionEntry({
    label: "Temperament",
    value:temperament
  })

  createDescriptionEntry({
    label: "Tempo de vida",
    value: lifeSpan
  })

  createDescriptionEntry({
    label: "Origem",
    value: origin
  })

  createDescriptionEntry({
    label: "Altura [cm]",
    value: height.metric
  })

  createDescriptionEntry({
    label: "Peso [kg]",
    value: weight.metric
  })
}

const getDogByBreed = async (breedId) => {

  const [ data ] = await fetch(`${BASE_API_URL}/images/search?include_breed=1&breed_ids=${breedId}&api_key=${API_KEY}`).then((data) => data.json());
  const {url: imageUrl, breeds} = data;
  fillDogImage(imageUrl);
  fillDogDescrption(breeds[0]);
}

const changeDog = () => {
  window.addEventListener('click', event => {
    console.log(event.target.value);
    getDogByBreed(event.target.value);
  })
}

fetchDogBreeds();
