// Cabeçalho

verificarComponentes();

function verificarComponentes() {
    var cabecalhos = document.getElementsByClassName('header');

    if (cabecalhos.length > 0) {
        cabecalho(cabecalhos);
    }
}

function cabecalho(cabecalhos) {
    for (const c of cabecalhos) {
        var header = document.createElement('header');
        var h1 = document.createElement('h1');
        h1.innerHTML = 'Nome do Site';

        var nav = document.createElement('nav');
        var ul1 = document.createElement('ul');
        var ul2 = document.createElement('ul');

        var li1 = document.createElement('li');
        var li2 = document.createElement('li');
        var li3 = document.createElement('li');

        var li4 = document.createElement('li');
        var li5 = document.createElement('li');
        var li6 = document.createElement('li');

        var a1 = document.createElement('a');
        var a2 = document.createElement('a');
        var a3 = document.createElement('a');

        var a4 = document.createElement('a');
        var a5 = document.createElement('a');
        var a6 = document.createElement('a');

        var img1 = document.createElement('img');
        var img2 = document.createElement('img');
        var img3 = document.createElement('img');

        a1.innerHTML = 'home';
        if(window.location.pathname === '/' || window.location.pathname === '/Blog-teuslucas/' || window.location.pathname.endsWith('/index.html')) {
            a1.href = 'index.html';
        } else {
            a1.href = '../index.html';
        }
        
        a2.innerHTML = 'conteudo';
        a2.href = '#';
        
        a3.innerHTML = 'sobre';
        if(window.location.pathname.endsWith('/sobre.html')) {
            a3.href = '#';
            
        } else{
            if (!window.location.pathname.endsWith('/Paginas/')){
                a3.href ='sobre.html';
                document.write('verdadeiro');
            } if(window.location.pathname === '/' || window.location.pathname === '/Blog-teuslucas/' || window.location.pathname.endsWith('/index.html')){
                a3.href = 'Paginas/sobre.html';
            }
        }
        
        



        a4.href = 'https://www.instagram.com/mateus_msx?igsh=MXRxd2x2OXlldDl4Nw==';
        img1.src = "../Imagens/instagram.png";
        img1.alt = 'Logo do Instagram';
        setImageFallback(img1, './Imagens/instagram.png');

        a5.href = '#'; // Link vazio, atualizar conforme necessário
        img2.src = "../Imagens/x.png";
        img2.alt = 'Ícone de Fechar';
        setImageFallback(img2, './Imagens/x.png');

        a6.href = '#'; // Link vazio, atualizar conforme necessário
        img3.src = "../Imagens/youtube.png";
        img3.alt = 'Logo do YouTube';
        setImageFallback(img3, './Imagens/youtube.png');

        a4.appendChild(img1);
        a5.appendChild(img2);
        a6.appendChild(img3);

        li1.appendChild(a1);
        li2.appendChild(a2);
        li3.appendChild(a3);

        li4.appendChild(a4);
        li5.appendChild(a5);
        li6.appendChild(a6);

        ul1.appendChild(li1);
        ul1.appendChild(li2);
        ul1.appendChild(li3);

        ul2.appendChild(li4);
        ul2.appendChild(li5);
        ul2.appendChild(li6);

        nav.appendChild(ul1);
        nav.appendChild(ul2);

        header.classList.add('cabecalho');
        ul1.classList.add('paginas');
        ul2.classList.add('rede-social');
        a1.classList.add('home');
        a4.classList.add('instagram');
        a5.classList.add('x');
        a6.classList.add('youtube');
        header.appendChild(h1);
        header.appendChild(nav);

        c.appendChild(header);
    }
}

// Função para configurar o fallback das imagens
function setImageFallback(imgElement, fallbackSrc) {
    imgElement.onerror = function () {
        imgElement.src = fallbackSrc;
    };
}
