

function userFn(){
//userArr
const userArr = [];

   const userData= ' https://api.github.com/users';
    //get button
   const button = document.querySelector('#user--button');

   function getData(e) {
       e.preventDefault();

       

       //fetch data
       fetch(userData).then(blob=>blob.json()).then(data=>{
          //get container
      const container = document.querySelector('.container');
     const html = data.map(users=>{

        return`
          
          <section class="card">
          <section class="img--section">
              <img src="${users.avatar_url}" alt="">
        
          </section>
          <article>
              <h2 class="name">${users.login}</h2>
        
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed reprehenderit repudiandae deserunt, harum a omnis rerum fugiat numquam blanditiis, est porro recusandae maxime officia iusto. Maiores aliquam magni odit.</p>
        
          </article>
        
        </section>
          
          
          
          
          
          
          `









     }).join('');

     container.innerHTML = html





       })
          
    
     
 
      
  



     
    
   
   
   
   
   
   
   
    }






//events
button.addEventListener('click', getData);   

}







//window event

window.addEventListener('DOMContentLoaded', userFn);