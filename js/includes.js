function includeNavbar() {
  fetch('/navbar.html') // Carrega o conteúdo do arquivo
      .then(response => response.text()) // Converte a resposta para texto
      .then(data => {
          document.getElementById('navbar-inloco').innerHTML = data; // Insere o conteúdo no elemento navbar
      })
      .catch(error => {
          console.error('Erro ao carregar a barra de navegação:', error);
      });
}

// Chama a função para incluir a barra de navegação ao carregar a página
window.addEventListener('DOMContentLoaded', includeNavbar);

function includeFooter() {
  fetch('/footer.html') // Carrega o conteúdo do arquivo
      .then(response => response.text()) // Converte a resposta para texto
      .then(data => {
          document.getElementById('footer-inloco').innerHTML = data; // Insere o conteúdo no elemento footer
      })
      .catch(error => {
          console.error('Erro ao carregar a barra de navegação:', error);
      });
}

// Chama a função para incluir a barra de navegação ao carregar a página
window.addEventListener('DOMContentLoaded', includeFooter);
