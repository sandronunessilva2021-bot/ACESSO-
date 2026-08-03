<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>🍕 Pizza Play</title>

<meta name="theme-color" content="#111111">

<link rel="manifest" href="manifest.json">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html,body{
width:100%;
height:100%;
overflow-x:hidden;
background:#000;
color:#fff;
}

#bg-video{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
z-index:-3;
}

.overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:
linear-gradient(
180deg,
rgba(0,0,0,.25),
rgba(0,0,0,.78)
);
z-index:-2;
}

.container{
max-width:460px;
margin:auto;
padding:25px;
text-align:center;
animation:fade .9s ease;
}

@keyframes fade{

from{
opacity:0;
transform:translateY(40px);
}

to{
opacity:1;
transform:translateY(0);
}

}

.logo{

width:170px;
height:170px;
border-radius:40px;
margin-top:20px;
object-fit:cover;

box-shadow:

0 0 20px rgba(255,120,0,.6),

0 0 60px rgba(255,90,0,.4);

animation:logo 3s infinite alternate;

}

@keyframes logo{

from{

transform:scale(1);

}

to{

transform:scale(1.04);

}

}

h1{

font-size:48px;
font-weight:800;
margin-top:18px;

text-shadow:

0 0 12px rgba(255,120,0,.7);

}

.sub{

margin-top:8px;
font-size:19px;
color:#e8e8e8;

}
</head>

<body>

<!-- Vídeo de fundo -->
<video autoplay muted loop playsinline id="bg-video">
    <source src="6e0435cdf73692771097c0abcf882e37.mp4" type="video/mp4">
</video>

<!-- Camada escura -->
<div class="overlay"></div>

<!-- Conteúdo -->
<div class="container">

    <!-- Logo -->
    <img src="logo.png" class="logo" alt="Pizza Play">

    <!-- Título -->
    <h1>🍕 Pizza Play</h1>

    <p class="sub">
        Filmes • Séries • Esportes • TV Ao Vivo
    </p>

    <!-- Botão Teste -->
    <a class="btn teste"
       href="https://testeagora.tv/c4430a597cd6e4cbd4b65725aa31014a"
       target="_blank">

        🎁 TESTE GRÁTIS

        <small>
            Crie seu login e aproveite 4 horas grátis
        </small>

    </a>

    <!-- Botão Painel -->
    <a class="btn painel"
       href="https://clientefinal.com/"
       target="_blank">

        🔐 PAINEL DO CLIENTE

        <small>
            Entre com seu login e senha
        </small>

    </a>

    <!-- Informações -->
    <div class="cards">

        <div class="card">
            <span>🎬</span>
            <h3>Filmes</h3>
            <p>Milhares de lançamentos em HD, Full HD e 4K.</p>
        </div>

        <div class="card">
            <span>📺</span>
            <h3>Séries</h3>
            <p>As séries mais populares sempre atualizadas.</p>
        </div>

        <div class="card">
            <span>⚽</span>
            <h3>Esportes</h3>
            <p>Futebol, UFC, Fórmula 1 e muito mais ao vivo.</p>
        </div>

    </div>
<!-- Recursos -->

<div class="cards" style="margin-top:30px;">

    <div class="card">
        <span>🚀</span>
        <h3>Rápido</h3>
        <p>
            Acesso imediato após a ativação.
        </p>
    </div>

    <div class="card">
        <span>💎</span>
        <h3>Qualidade</h3>
        <p>
            Canais em HD, Full HD e 4K.
        </p>
    </div>

    <div class="card">
        <span>📱</span>
        <h3>Compatível</h3>
        <p>
            Smart TV, TV Box, Android, iPhone e PC.
        </p>
    </div>

</div>

<!-- Estatísticas -->

<div style="margin-top:40px;">

<h2 style="
font-size:28px;
margin-bottom:25px;
text-shadow:0 0 10px rgba(255,140,0,.5);
">

Por que escolher a Pizza Play?

</h2>

<div class="cards">

<div class="card">

<span>⭐</span>

<h2 style="font-size:34px;">+10.000</h2>

<p>Clientes ativos</p>

</div>

<div class="card">

<span>🎞️</span>

<h2 style="font-size:34px;">+50.000</h2>

<p>Filmes e Séries</p>

</div>

<div class="card">

<span>📡</span>

<h2 style="font-size:34px;">+1.500</h2>

<p>Canais Ao Vivo</p>

</div>

</div>

</div>

<!-- Aviso -->

<div style="
margin-top:40px;
padding:20px;
border-radius:20px;
background:rgba(255,255,255,.08);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,.12);
">

<h2 style="color:#ff9d00;">
🔥 Oferta Especial
</h2>

<p style="
margin-top:12px;
line-height:1.7;
font-size:17px;
color:#f2f2f2;
">

Faça um teste gratuito e descubra a qualidade da Pizza Play.

Após experimentar, você poderá ativar seu acesso completo em poucos minutos.

</p>

</div>
<!-- Vantagens -->

<section style="margin-top:50px;">

<h2 style="
font-size:30px;
margin-bottom:25px;
text-shadow:0 0 12px rgba(255,120,0,.5);
">
✨ Vantagens
</h2>

<div class="cards">

<div class="card">
<span>⚡</span>
<h3>Ativação Rápida</h3>
<p>Receba seu acesso em poucos minutos.</p>
</div>

<div class="card">
<span>🛡️</span>
<h3>Suporte</h3>
<p>Atendimento rápido sempre que precisar.</p>
</div>

<div class="card">
<span>🌎</span>
<h3>Onde Quiser</h3>
<p>Assista em qualquer lugar com internet.</p>
</div>

</div>

</section>

<!-- Banner -->

<div style="
margin-top:45px;
padding:25px;
border-radius:25px;
background:linear-gradient(135deg,
rgba(255,120,0,.25),
rgba(255,40,0,.20));
backdrop-filter:blur(18px);
border:1px solid rgba(255,255,255,.15);
box-shadow:0 0 35px rgba(255,120,0,.25);
">

<h2 style="
font-size:32px;
color:#fff;
margin-bottom:15px;
">
🎬 Entretenimento sem limites
</h2>

<p style="
font-size:18px;
line-height:1.8;
color:#f0f0f0;
">

Tenha acesso a milhares de filmes, séries, canais ao vivo,
esportes e conteúdos atualizados diariamente.

</p>

</div>

<!-- Informações -->

<div style="margin-top:45px;" class="cards">

<div class="card">
<span>📺</span>
<h3>TV Ao Vivo</h3>
<p>Canais nacionais e internacionais.</p>
</div>

<div class="card">
<span>🎥</span>
<h3>Filmes</h3>
<p>Grandes sucessos e lançamentos.</p>
</div>

<div class="card">
<span>🍿</span>
<h3>Séries</h3>
<p>Catálogo atualizado frequentemente.</p>
</div>

</div>

<!-- Rodapé -->

<footer style="
margin-top:60px;
padding:30px 15px;
border-top:1px solid rgba(255,255,255,.15);
color:#ddd;
text-align:center;
">

<h3 style="
font-size:28px;
margin-bottom:10px;
color:#ff9d00;
">
🍕 Pizza Play
</h3>

<p>
Sua plataforma de entretenimento.
</p>

<p style="
margin-top:18px;
font-size:14px;
color:#aaa;
">

© 2026 Pizza Play — Todos os direitos reservados.

</p>

</footer>
<script>

// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('service-worker.js')
            .then(() => console.log('PWA carregado'))
            .catch(err => console.log(err));
    });
}

// Animação dos botões
document.querySelectorAll('.btn').forEach(btn=>{

    btn.addEventListener('mouseenter',()=>{

        btn.style.transform='translateY(-5px) scale(1.03)';
        btn.style.boxShadow='0 20px 40px rgba(255,120,0,.45)';

    });

    btn.addEventListener('mouseleave',()=>{

        btn.style.transform='translateY(0)';
        btn.style.boxShadow='0 10px 25px rgba(0,0,0,.35)';

    });

    btn.addEventListener('click',()=>{

        btn.style.transform='scale(.96)';

        setTimeout(()=>{

            btn.style.transform='scale(1)';

        },150);

    });

});

// Fade dos Cards

const cards=document.querySelectorAll('.card');

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';

entry.target.style.transform='translateY(0)';

}

});

});

cards.forEach(card=>{

card.style.opacity='0';
card.style.transform='translateY(40px)';
card.style.transition='.7s';

observer.observe(card);

});

// Logo

const logo=document.querySelector('.logo');

setInterval(()=>{

logo.animate([

{
transform:'scale(1)'
},

{
transform:'scale(1.04)'
},

{
transform:'scale(1)'
}

],{

duration:2500

});

},2500);

// Título

const titulo=document.querySelector('h1');

titulo.animate([

{
opacity:.6
},

{
opacity:1
},

{
opacity:.6
}

],{

duration:3000,
iterations:Infinity

});

// Efeito vidro nos cards

cards.forEach(card=>{

card.addEventListener('mouseenter',()=>{

card.style.background='rgba(255,255,255,.14)';
card.style.transform='translateY(-10px)';

});

card.addEventListener('mouseleave',()=>{

card.style.background='rgba(255,255,255,.08)';
card.style.transform='translateY(0)';

});

});

// Rolagem suave

document.documentElement.style.scrollBehavior="smooth";

</script>

</body>
</html>
{
  "name": "Pizza Play",
  "short_name": "PizzaPlay",
  "description": "Filmes, Séries e TV Ao Vivo",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#111111",
  "orientation": "portrait",
  "icons": [
    {
      "src": "logo.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "logo.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
