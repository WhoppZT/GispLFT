
var teamMembers = [
    {
        name: "Willian Santiago Calderon Torres",
        role: "Lider del Grupo",
        photo: "../src/img/integrantes/William.jpeg",
        description: "Lider"
    },
    {
        name: "Erwin David Soto Baez",
        role: "Diseñador UX",
        photo: "../src/img/integrantes/Erwin.jpeg",
        description: "Sub Lider"
    },
    {
        name: "Breyner Joseph Alarcon Villamizar",
        role: "Diseñador UX",
        photo: "../src/img/integrantes/Breiner.jpeg",
        description: "Integrante"
    },
    {
        name: "Elihu Daniel Rueda Cera",
        role: "Diseñador UI",
        photo: "../src/img/integrantes/elihu.jpeg",
        description: "Integrante"
    },
    {
        name: "Ivan Daniel Rueda Pérez",
        role: "Diseñador UI",
        photo: "../src/img/integrantes/Ivan.jpg",
        description: "Integrante"
    },
    {
        name: "Juan Andrés Rivera Guerrero",
        role: "Diseñador UI",
        photo: "../src/img/integrantes/Andres (1).jpg",
        description: "Integrante"
    },
    {
        name: "Diana Marcela Ricardo Gómez",
        role: "Diseñadora UI",
        photo: "../src/img/integrantes/Diana.jpeg",
        description: "Integrante"
    },
    {
        name: "Jhon Alexander Florez Caicedo",
        role: "Diseñador UI",
        photo: "../src/img/integrantes/jhon.jpeg",
        description: "Integrante"
    },

];

var teamContainer = document.getElementById("team-members");

teamMembers.forEach(function (member) {
    var memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");

    var memberName = document.createElement("h3");
    memberName.textContent = member.name;

    var memberRole = document.createElement("p");
    memberRole.textContent = member.role;

    var memberDescription = document.createElement("p");
    memberDescription.textContent = member.description;

    var memberPhoto = document.createElement("img");
    memberPhoto.src = member.photo;
    memberPhoto.alt = member.name;
    memberPhoto.classList.add("team-member-photo");

    memberDiv.appendChild(memberPhoto);
    memberDiv.appendChild(memberName);
    memberDiv.appendChild(memberRole);
    memberDiv.appendChild(memberDescription);
    teamContainer.appendChild(memberDiv);
});