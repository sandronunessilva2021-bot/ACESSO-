const CLIENT_URL="https://clientefinal.com/";
const TEST_URL="https://testeagora.tv/c4430a597cd6e4cbd4b65725aa31014ade";

const movies=[
{id:1,title:"Aventura de Ação",category:"Ação",year:"2026",duration:"1h 58min",quality:"FHD",image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",synopsis:"Uma aventura cheia de ação, desafios e grandes acontecimentos.",video:""},
{id:2,title:"A Grande Comédia",category:"Comédia",year:"2026",duration:"1h 42min",quality:"FHD",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",synopsis:"Uma divertida história cheia de situações inesperadas.",video:""},
{id:3,title:"Uma História de Drama",category:"Drama",year:"2025",duration:"2h 05min",quality:"FHD",image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",synopsis:"Uma história emocionante sobre escolhas, família e superação.",video:""},
{id:4,title:"A Noite Sombria",category:"Terror",year:"2025",duration:"1h 50min",quality:"FHD",image:"https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&w=600&q=80",synopsis:"Uma noite assustadora onde nada é o que parece.",video:""},
{id:5,title:"Além do Universo",category:"Ficção",year:"2026",duration:"2h 10min",quality:"FHD",image:"https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=600&q=80",synopsis:"Uma viagem extraordinária para além dos limites conhecidos.",video:""},
{id:6,title:"Mundo Encantado",category:"Animação",year:"2026",duration:"1h 35min",quality:"FHD",image:"https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",synopsis:"Uma aventura divertida em um mundo cheio de magia.",video:""},
{id:7,title:"Operação Especial",category:"Ação",year:"2025",duration:"2h 01min",quality:"FHD",image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",synopsis:"Uma equipe precisa cumprir uma missão quase impossível.",video:""},
{id:8,title:"O Último Caminho",category:"Drama",year:"2025",duration:"1h 55min",quality:"FHD",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",synopsis:"Uma jornada que muda completamente a vida de seus personagens.",video:""},
{id:9,title:"Risadas da Cidade",category:"Comédia",year:"2025",duration:"1h 40min",quality:"FHD",image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",synopsis:"Uma comédia leve e divertida.",video:""},
{id:10,title:"A Casa Sombria",category:"Terror",year:"2024",duration:"1h 47min",quality:"FHD",image:"https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&w=600&q=80",synopsis:"Uma antiga casa guarda segredos.",video:""},
{id:11,title:"Galáxia Perdida",category:"Ficção",year:"2026",duration:"2h 15min",quality:"FHD",image:"https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=600&q=80",synopsis:"Uma expedição parte em busca de uma galáxia desconhecida.",video:""},
{id:12,title:"Aventura Animada",category:"Animação",year:"2025",duration:"1h 30min",quality:"FHD",image:"https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",synopsis:"Uma aventura animada cheia de diversão.",video:""}
];

function renderShell(){
  const h=document.getElementById("site-header");
  if(h) h.innerHTML=`<header class="header"><div class="header-inner">
    <a class="logo" href="index.html">GUIA<span>FILMES</span></a>
    <form class="search" onsubmit="goSearch(event)"><input id="globalSearch" placeholder="🔎 Pesquisar filme..." autocomplete="off"></form>
    <nav class="menu"><a href="index.html">Início</a><a href="categoria.html?cat=Ação">Categorias</a><a href="contato.html">Contato</a></nav>
  </div></header>
  <div class="actions"><a class="action client" href="${CLIENT_URL}" target="_blank" rel="noopener">🔐 ACESSAR ÁREA DO CLIENTE</a><a class="action test" href="${TEST_URL}" target="_blank" rel="noopener">🎁 CRIE SEU TESTE GRÁTIS POR 4 HORAS</a></div>`;
  const f=document.getElementById("site-footer");
  if(f) f.innerHTML=`<footer class="footer">© 2026 Guia Filmes<div class="footer-links"><a href="index.html">Início</a><a href="contato.html">Contato</a><a href="${CLIENT_URL}" target="_blank" rel="noopener">Área do cliente</a></div></footer>`;
}
renderShell();

function goSearch(e){e.preventDefault();const q=document.getElementById("globalSearch").value.trim();if(q) location.href="busca.html?q="+encodeURIComponent(q);}

function card(m){
 return `<article class="card"><div class="poster">${m.id<=4?'<span class="badge">NOVO</span>':''}<img src="${m.image}" alt="${m.title}" loading="lazy"></div><div class="card-body"><div class="title">${m.title}</div><div class="meta"><span class="quality">${m.quality}</span><span class="genre">${m.category}</span></div><a class="watch" href="filme.html?id=${m.id}">▶ ASSISTIR</a></div></article>`;
}
function renderCards(list, target="movies"){const el=document.getElementById(target),empty=document.getElementById("empty");if(!el)return;el.innerHTML=list.map(card).join("");if(empty)empty.style.display=list.length?"none":"block";}

function initCatalog(){
 const cats=["Todos",...new Set(movies.map(m=>m.category))];
 document.getElementById("categories").innerHTML=cats.map((c,i)=>`<button class="category ${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");
 let page=1,per=8,cat="Todos",q="";
 const draw=()=>{let list=movies.filter(m=>(cat==="Todos"||m.category===cat)&&m.title.toLowerCase().includes(q.toLowerCase()));document.getElementById("count").textContent=list.length+" filmes";renderCards(list.slice((page-1)*per,page*per));let total=Math.ceil(list.length/per);document.getElementById("pagination").innerHTML=Array.from({length:total},(_,i)=>`<button class="page ${i+1===page?"active":""}" onclick="window.catalogPage(${i+1})">${i+1}</button>`).join("");window.catalogPage=n=>{page=n;draw();scrollTo({top:0,behavior:"smooth"})};};
 document.querySelectorAll(".category").forEach(b=>b.onclick=()=>{document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));b.classList.add("active");cat=b.dataset.cat;page=1;draw()});
 const s=document.getElementById("globalSearch"); if(s)s.oninput=()=>{q=s.value;page=1;draw()}; draw();
}

function initMoviePage(){
 const id=Number(new URLSearchParams(location.search).get("id")),m=movies.find(x=>x.id===id),el=document.getElementById("moviePage");
 if(!m){el.innerHTML='<div class="empty" style="display:block">Filme não encontrado.<br><br><a class="watch" href="index.html" style="max-width:220px;margin:auto">← Voltar</a></div>';return}
 document.title=m.title+" - GUIA FILMES";
 el.innerHTML=`<article class="detail"><div class="detail-inner"><img class="detail-poster" src="${m.image}" alt="${m.title}"><div><h1>${m.title}</h1><p class="line"><strong>Categoria:</strong> ${m.category}</p><p class="line"><strong>Ano:</strong> ${m.year}</p><p class="line"><strong>Duração:</strong> ${m.duration}</p><p class="line"><strong>Qualidade:</strong> ${m.quality}</p><div class="synopsis"><strong>Sinopse</strong><p>${m.synopsis}</p></div></div></div><div class="player">${m.video?`<video controls playsinline src="${m.video}"></video>`:`<div class="player-note">O player está pronto. Para disponibilizar um vídeo, informe no campo <b>video</b> deste filme um arquivo/URL de vídeo que você tenha autorização para usar.</div>`}</div></article>`;
 renderCards(movies.filter(x=>x.category===m.category&&x.id!==m.id).slice(0,6),"related");
}

function initCategoryPage(){
 const cat=new URLSearchParams(location.search).get("cat")||"Todos";document.getElementById("categoryTitle").textContent=cat;renderCards(cat==="Todos"?movies:movies.filter(m=>m.category.toLowerCase()===cat.toLowerCase()));
}

function initSearchPage(){
 const q=new URLSearchParams(location.search).get("q")||"";document.getElementById("searchInfo").textContent=q?`Pesquisa por: "${q}"`:"Digite um termo de pesquisa.";renderCards(movies.filter(m=>m.title.toLowerCase().includes(q.toLowerCase())));
}
