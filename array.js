

// //Listado horizontal de chats
// const listadosChat = [
//     {
//     id: "1",
//     fotoPerfil: "./img/foto1.jpg",
//     userName: "xxx",
//     enLínea: false, // sin punto verde 
// },
//  {
//     id: "2",
//     fotoPerfil: "./img/foto2.jpg",
//     userName: "xxy",
//     enLínea: true // punto verde 
//  },
//  {
//     id: "3",
//     fotoPerfil: "./img/foto3.jpg",
//     userName: "xyy",
//     enLínea: true // punto verde 
//  },
//  {
//     id: "4",
//     fotoPerfil: "./img/foto4.jpg",
//     userName: "yyy",
//     enLínea: false // sin punto verde 
//  }

// ]




//Listado vertical de chats
//isUpToDate: true // aro rosa indicador de historia sin visualizar
// cantidad de mensajes nuevos

let seccionHistoria = document.getElementById("seccionHistoria")
let historias = []

 function getStories() {
    fetch("https://gkfibffviwvmphzqvuqe.supabase.co/rest/v1/stories?select=*", {
      method: "GET",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZmliZmZ2aXd2bXBoenF2dXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5ODQ5NTgsImV4cCI6MjAyNjU2MDk1OH0.M--1JO0f0zos59CcBc8oCPKZmz2su3qx0Z2hOqQK9c0",
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZmliZmZ2aXd2bXBoenF2dXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5ODQ5NTgsImV4cCI6MjAyNjU2MDk1OH0.M--1JO0f0zos59CcBc8oCPKZmz2su3qx0Z2hOqQK9c0"

      }
   })
      
 .then( (response) => {
        response.json()
            .then((res) => {
             for (let i = 0; i < res.length; i++) {
                  // response.map(historia => 
                  historias.push(                     
                     {profile_name: res[i].profile_name,
                     profile_image: res[i].profile_image,
                     is_up_to_date: res[i].is_up_to_date}                    
                  )
               }  

               for (let i = 0; i < historias.length; i++) {
                  seccionHistoria.innerHTML += `<div>${historias[i].profile_name}</div>`
               }      

            })
            .catch(() => { })
      })
      .catch(() => { })  
}

getStories()
