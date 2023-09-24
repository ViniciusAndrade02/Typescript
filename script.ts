const nav = document.querySelector('nav');

function ativar(event: MouseEvent){
  
  nav?.classList.toggle('active')
  const botao = document.querySelector('button')

  if(nav?.classList.contains('active')){
    botao?.setAttribute('aria-expanded', 'false');
    botao?.setAttribute('aria-label', 'Abrir Menu');
  }else{
    botao?.setAttribute('aria-expanded', 'true');
    botao?.setAttribute('aria-label', 'Fechar Menu');
  }


  if (event.currentTarget instanceof HTMLElement) {
    const menu = document.getElementById('hamburger');
    if(menu){
      menu.innerText = 'LEITE';
    }
  }

  console.log(botao)
}


nav?.addEventListener('click',ativar)