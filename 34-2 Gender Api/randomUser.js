const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (users) => {
  const nameTag = document.getElementById("name");
  const genderTag = document.getElementById("gender");
  const addressTag = document.getElementById("address");
  genderTag.innerText = users.results[0].gender;
  nameTag.innerText =
    users.results[0].name.title +
    " " +
    users.results[0].name.first +
    " " +
    users.results[0].name.last;

  addressTag.innerHTML =
    users.results[0].location.state +
    ", " +
    users.results[0].location.city +
    " - " +
    users.results[0].location.street.number +
    ", " +
    users.results[0].location.street.name;

  const imageContainer = document.getElementById("image-container");

  const imgDiv = document.createElement("div");

  imgDiv.innerHTML = `
  
  <img src="${users.results[0].picture.large}">

  `;

  imageContainer.appendChild(imgDiv);

  console.log(users.results[0].picture.large);
};

loadUser();
