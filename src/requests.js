export async function all(){
    let data = await makeRequest('https://simpleblogapi.herokuapp.com/posts');
    return data;
 }
  
 export async function one(id){
     let data = await makeRequest(`https://simpleblogapi.herokuapp.com/posts/${id}?_embed=comments`);
     return data;
 }
 
 export async function remove(id){  
     
 }
 
 export async function add(article){
     
 
      
 }
 
 export async function edit(id, article){
     
    
 }
 
 function makeRequest(url, options = {}) {
     return fetch(url, options).then((response) => {
         if(response.status !== 200){
             return response.text.then((text) => {
                 throw new Error(text);
             })
         }
         return response.json();
     });
 }