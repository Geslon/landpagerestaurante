/**
 * Função principal que é executada quando o documento HTML é carregado.
 * Responsável por configurar os eventos de clique e de rolagem, bem como as animações de revelação.
 */
$(document).ready(function () {
  // Seleciona os elementos do botão móvel, do menu móvel, do cabeçalho, das seções e dos itens de navegação.
  const mobileBtn = $("#mobile_btn");
  const mobileMenu = $("#mobile_menu");
  const header = $("header");
  const sections = $("section");
  const navItems = $(".nav-item");

  /**
   * Configura o evento de clique para alternar a classe "active" no menu móvel e no ícone do botão móvel.
   */
  mobileBtn.on("click", function () {
    mobileMenu.toggleClass("active");
    mobileBtn.find("i").toggleClass("fa-x");
  });

  /**
   * Configura o evento de rolagem para atualizar o cabeçalho e destacar o item de navegação da seção atual.
   */
  $(window).on("scroll", function () {
    // Calcula a posição de rolagem ajustada pela altura do cabeçalho.
    const scrollPosition = $(window).scrollTop() - header.outerHeight();
    // Adiciona ou remove a sombra do cabeçalho com base na posição de rolagem.

    // Itera sobre cada seção para determinar a seção ativa com base na posição de rolagem.
    let activeSectionIndex = 0;
    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      // Verifica se a posição de rolagem está dentro dos limites da seção atual.
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false; // Interrompe a iteração quando a seção é encontrada.
      }
    });

    // Remove a classe "active" de todos os itens de navegação e adiciona à seção atual.
    navItems.removeClass("active").eq(activeSectionIndex).addClass("active");
  });

  // Opções para as animações de revelação.
  const revealOptions = {
    origin: "left", // Origem da animação
    duration: 1000, // Duração da animação em milissegundos
    distance: "20%", // Distância de movimento
    easing: "ease-in-out", // Tipo de easing
    interval: 200, // Intervalo entre a revelação de cada elemento
  };

  // Aplica as animações de revelação aos elementos selecionados.
  ScrollReveal().reveal("#cta", revealOptions);
  ScrollReveal().reveal(".dish", revealOptions);
  ScrollReveal().reveal("#testimonial_chef", revealOptions);
  ScrollReveal().reveal(".feedback", revealOptions);
});
