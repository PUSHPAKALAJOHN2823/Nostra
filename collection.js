var sidenav = document.getElementById("sidenav")
var closeSidebar = document.getElementById("close-sidebar")
var menu = document.getElementById("menu")

closeSidebar.addEventListener("click", function(){
    sidenav.style.display = "none"
})

menu.addEventListener("click",function(){
    sidenav.style.display="block"
})

    // Search
    const searchInput = document.getElementById("sarch");
    const productCards = document.querySelectorAll(".product");

    searchInput.addEventListener("keyup", (e) => {
      const value = e.target.value.toLowerCase();
      productCards.forEach(card => {
        const title = card.querySelector("h1").textContent.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
      });
    });

    // Filter checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(cb => {
      cb.addEventListener("change", filterProducts);
    });

    function filterProducts() {
      const selected = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.toLowerCase());

      productCards.forEach(card => {
        const tags = [
          card.dataset.occasion,
          card.dataset.color,
          card.dataset.arrival
        ];
        const match = selected.every(val => tags.includes(val));
        card.style.display = selected.length === 0 || match ? "block" : "none";
      });
    }