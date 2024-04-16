let seccionChatVertical = document.getElementById("seccion-chat-vertical")
let seccionChatHorizontal = document.getElementById("seccion-chat-horizontal")

const baseUrl = "https://gkfibffviwvmphzqvuqe.supabase.co/storage/v1/object/public/fci-personal"
let historias = []
let historiash = []

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
               console.log(res)
             for (let i = 0; i < res.length; i++) {
                  
                  historias.push(                     
                     {profile_name: res[i].profile_name,
                     profile_image: res[i].profile_image,
                     is_up_to_date: res[i].is_up_to_date}                    
                  )
                  historiash.push(                     
                     {profile_name: res[i].profile_name,
                     profile_image: res[i].profile_image,
                     live: res[i].live}                    
                  )
               }  
               console.log(historias)
               for (let i = 0; i < historias.length; i++) {
                  seccionChatVertical.innerHTML += ` 
                  <div class="chat">
                  <div class="nombre-foto-vertical"> 
                  <img src="${baseUrl + historias[i].profile_image}" alt="profile_photo_usuario" class="profile-vertical" style="${historias[i].is_up_to_date ? "border: 2px solid red": "border:none"}"/>
                  <p>${historias[i].profile_name}</p>
              </div>              
              <div>
              <img src="./img/camara.jpg" alt="icono de cámara fotográfica" class="camara">
          </div>
          </div>
          ` }   
               
            for (let i = 0; i < historiash.length; i++) {
                  seccionChatHorizontal.innerHTML += `        
                  <div class="seccion-chat-horizontal">                  
                  <div>    
        <img src="${baseUrl + historiash[i].profile_image}" alt="profile_photo_usuario" class="profile" style="${historiash[i].live ? "border: 2px solid green": "border:none"}"/>  
      
        <p>${historiash[i].profile_name}</p>
    </div>
    </div>               
          ` } 

            })
            .catch(() => { })
      })
      .catch(() => { })  
}

getStories()
