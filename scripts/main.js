//MIT License

//Copyright(c) 2021 Heber Leonard
//Copyright(c) 2022 Derek Amsterdam

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files(the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

const app = document.getElementById("app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal() {
    
    createText("status : waking up the server & connection establishment in progress... connected successfully!");
    await delay(1500);

    createText("{[=>token->{@ handshake @}] push_to [192.168.0.1]}");
    await delay(550);

    createText("[Post-COVID Public health measures] {server_has_gloves:true} {server_has_mask:true} =>ready for handshake");
    await delay(1500);

    createText("successfull handshake! 192.168.0.1 replied back with a big smile!");    
    await delay(700);

    createText("[reversing 192.168.0.1 DNS] [Derek Amsterdam] ['GET / HTTP/1.1' 200 21296- 0500][GET /root/index]");
    await delay(700);

    createText("status : Bienvenue, votre session est maintenant active");
    
    createCode("?&nbsp;&nbsp; ->", "Affiche les commandes disponibles");
    createCode("whoami ->", "A propos de moi");    
    createCode("social ->", "Liens vers mes réseaux sociaux");
    createCode("clear&nbsp;->", "Efface l'écran du terminal");

    new_line();
}


function new_line() {
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    p.setAttribute("class", "path")
    p.textContent = "# visiteur";
    span1.textContent = " =>";
    span2.textContent = " ~/root/Derek-Amsterdam";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);

    const div = document.createElement("div");
    div.setAttribute("class", "type")
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone")
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
    if (value === "?") {
        trueValue(value);

        createCode("?&nbsp;&nbsp; ->", "Affiche les commandes disponibles");
        createCode("whoami ->", "A propos de moi");
        createCode("social ->", "Liens vers mes réseaux sociaux");        
        createCode("clear&nbsp;->", "Efface l'écran du terminal");
    
  }
  else if (value === "profil") {
      trueValue(value);
        createText("<a href='https://www.linkedin.com/in/derekamsterdam/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn/in/derekamsterdam</a>")
  }
  else if(value === "whoami"){
        trueValue(value);
        createText("Mon nom est Derek Amsterdam. Je suis un développeur 'Old School' qui code des trucs de 'New School' :)<br>")
        createText("J'ai obtenu un AEC à l'institut Demers en tant que Programmeur-Analyste en 1998.</br>");
        createText("Développeur <span style='font-style:italic;color:#6495ed;'>Progress / OpenEdge</span> expérimenté, j'ai été initié à ce langage de 4e génération dès le début de ma carrière en participant au développement de PGI (progiciel de gestion intégré ou ERP, Enterprise Ressource Planning en anglais).");        
        createText("J'ai acquis une solide expérience des secteurs manufacturiers et financiers précisément en ce qui concerne la planification des ressources, l’inventaire, les achats, les commandes, l’automatisation des processus, la distribution, les comptes payables et recevables");        
        createText("Continuellement à l'affût des nouvelles technologies je complète actuellement (2022-23) un 2e AEC de Programmeur-Analyste");
        createText("en développement d'applications Web & Mobile au collège Multihexa."); 
        
  }
  else if (value === "social") {
      trueValue(value);
      createText("<a href='https://www.linkedin.com/in/derekamsterdam/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/derekamsterdam/</a>")
      createText("<a href='https://github.com/derekamsterdam'           target='_blank'><i class='fab fa-github      white'></i> github.com/derekamsterdam</a>")
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`Erreur : commande invalide: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
    const p = document.createElement("p");
    if (classname != undefined) { p.setAttribute("class", classname); }
    p.innerHTML = text;
    app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <span class='text'> ${text} </span>`;
  app.appendChild(p);
}


function createConnectionText(text, classname) {
    const p = document.createElement("p");

    p.innerHTML = text;
    app.appendChild(p);
}

open_terminal();