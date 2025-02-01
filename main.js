// Variables


const $list = document.querySelector("#list");
const $form = document.getElementById("myForm");
const $nameUserInput = document.querySelector("#name");
const $emailUserInput = document.querySelector("#email");
const $companyUserInput = document.querySelector("#company");
const $upDateButton = document.getElementById("update");
const $searchInput = document.querySelector("#searchInput");
const $searchButton = document.querySelector("#searchButton");

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
let currentUserId = null;

// API
async function getUsers() {
  const response = await fetch(URL_USERS);
  return await response.json();
}

// Layout

function userLayout(user) {
  return `<li data-id="${user.id}"> ${user.name} - ${user.email} - ${user.company.name} - ${deleteButtonLayout(user.id)} - ${editButtonLayout(user.id)}</li>`;

}

function deleteButtonLayout(userId) {
  return `<button class="deleteButton" data-id="${userId}">Delete</button>`;
}
function editButtonLayout(userId){
  return `<button class="editButtonLayout" data-id="${userId}">Edit</button>`
}

// Utils(funcionalities)

function createList(usersList) {
  const listMap = usersList.map((user) => userLayout(user)).join("");
  $list.innerHTML = listMap;

  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData($form);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues)
    const emptyFields = Object.values(formValues).every((element) => element !== '')
    console.log(emptyFields)
    if (!emptyFields){
      return
    }
    createUser(usersList, formValues);
    $form.reset()
  });
}

function loadUsertoForm(userId , usersList){
  const user = usersList.find((u) => u.id === userId);
  if (user) {
    currentUserId = userId; 
    $nameUserInput.value = user.name;
    $emailUserInput.value = user.email;
    $companyUserInput.value = user.company.name;
  }
};





// CRUD

function createUser(usersList, userData) {
  const newUserId = usersList.length
    ? usersList[usersList.length - 1].id + 1
    : 1;
  const newUser = {
    id: newUserId,
    name: userData.name,
    email: userData.email,
    company: {
      name: userData.company,
    },
  };

  usersList.push(newUser);
  const $tempDiv = document.createElement("div");
  $tempDiv.innerHTML = userLayout(newUser);
  const userItem = $tempDiv.firstElementChild;
  $list.appendChild(userItem);
}


function removeUserList(userId) {
  const $userItem = document.querySelector(`li[data-id="${userId}"]`);
  if ($userItem) {
    $userItem.remove();
  }
}


async function main() {
  const userApi = await getUsers();
  createList(userApi);
 


    $searchButton.addEventListener("click" , (event)=> {
      event.preventDefault();
      console.log(event)
      const searchString = $searchInput.value.toLocaleLowerCase();
      console.log(searchString);
      const filterdUsers = userApi.filter((user) => 
        user.name.toLocaleLowerCase().includes(searchString) ||
        user.email.toLocaleLowerCase().includes(searchString) ||
        user.company.name.toLocaleLowerCase().includes(searchString)
      );
      console.log(filterdUsers)
      
      if (filterdUsers.length > 0) {
        $list.innerHTML= filterdUsers.map(user => userLayout(user)).join("");
        } else {
          $list.innerHTML = "<li>No se encontraron usuarios</li>";
      }
  
      $searchInput.addEventListener("input", () => {
        if ($searchInput.value.trim() === "") {
          createList(userApi);
        }
      })
    });


  $list.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteButton")) {
      const userDeleteId = Number(event.target.dataset.id);
      removeUserList(userDeleteId);
      
    }
  });
  
  $list.addEventListener("click", function (event) {
    if (event.target.classList.contains("editButtonLayout")) {
      const userEditId = Number(event.target.dataset.id);
      loadUsertoForm(userEditId, userApi);
      
    }
  });
  
  $upDateButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    if (currentUserId !== null) {
      const userIndex = userApi.findIndex((userElement) => userElement.id === currentUserId);
      console.log(userIndex)
      if (userIndex > -1) {
        userApi[userIndex] = {
          ...userApi[userIndex],
          name: $nameUserInput.value,
          email: $emailUserInput.value,
          company: { name: $companyUserInput.value },
        };
  
        createList(userApi);
    
        $form.reset(); 
        currentUserId = null;
      }
    } else {
      alert("No se ha seleccionado un usuario para actualizar.");
    }
  });

};
main();