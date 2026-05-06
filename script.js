document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll("[data-reveal]");
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 120}ms`;
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealItems.forEach((item) => observer.observe(item));

  const glowButton = document.querySelector(".glow-pulse");
  if (glowButton) {
    setInterval(() => {
      glowButton.classList.toggle("glow-active");
    }, 1800);
  }
});
