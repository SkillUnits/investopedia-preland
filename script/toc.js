document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#toc a");
  const sections = Array.from(links).map(link => document.querySelector(link.getAttribute("href")));
  const offset = 80;

  // Додавання класу active при кліку на посилання
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Додавання класу active, коли секція доходить до певної відстані від верхньої частини екрану
  window.addEventListener("scroll", () => {
    let currentActive = null;

    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;

      // Перевіряємо, чи секція знаходиться на відстані offset або ближче до верхньої частини екрану
      if (sectionTop <= offset) {
        currentActive = links[index];
      }
    });

    // Оновлення класу active
    links.forEach(link => link.classList.remove("active"));
    if (currentActive) {
      currentActive.classList.add("active");
    }
  });
});
