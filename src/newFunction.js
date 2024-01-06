newFunction();
function newFunction() {
  document.addEventListener("alpine:init", () => {
    Alpine.data("produts", () => {
      items: [
        { id: 1, name: "Meja Bundar", img: "Produk 1.jpg", price: 800000 },
        { id: 1, name: "Meja Bundar", img: "Produk 1.jpg", price: 800000 },
        { id: 1, name: "Meja Bundar", img: "Produk 1.jpg", price: 800000 },
        { id: 1, name: "Meja Bundar", img: "Produk 1.jpg", price: 800000 },
      ];
    });
  });
}
