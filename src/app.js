document.addEventListener("alpine:init", () => {
  Alpine.data("produts", () => {
    items: [
      { id: 1, name: "Meja Bundar", img: "1.jpg.jpg", price: 800000 },
      { id: 2, name: "Meja Bundar", img: "Produk 1.jpg", price: 800000 },
      { id: 3, name: "Meja Bundar", img: "Produk 1.jpg", price: 800000 },
      { id: 4, name: "Meja Bundar", img: "Produk 1.jpg", price: 800000 },
    ];
  });
});
