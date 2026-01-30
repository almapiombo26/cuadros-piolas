// ================= CONFIG =================
const WHATSAPP_DAMIAN = "5491122616091";

// ================= STORAGE =================
function getCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

// ================= DOM =================
const contenedorLista = document.getElementById("carrito-lista");
const totalHTML = document.getElementById("carrito-total");
const btnVaciar = document.getElementById("btn-vaciar");
const btnFinalizar = document.getElementById("btn-finalizar");

// ================= FUNCIONES =================
function actualizarCartCount() {
  const carritos = document.querySelectorAll("#cart-count");
  const carrito = getCarrito();
  const totalCantidad = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  carritos.forEach(c => c.textContent = totalCantidad);
}

function actualizarTotal() {
  const carrito = getCarrito();
  const total = carrito.reduce(
    (acc, item) => acc + item.precioUnitario * item.cantidad,
    0
  );
  totalHTML.textContent = `$${total.toLocaleString("es-AR")}`;
}

function eliminarItem(index) {
  const carrito = getCarrito();
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

function renderCarrito() {
  const carrito = getCarrito();
  contenedorLista.innerHTML = "";

  if (carrito.length === 0) {
    contenedorLista.innerHTML = `<p class="text-muted">Tu carrito está vacío.</p>`;
    totalHTML.textContent = "$0";
    btnVaciar.style.display = "none";
    btnFinalizar.style.display = "none";
    actualizarCartCount();
    return;
  } else {
    btnVaciar.style.display = "inline-block";
    btnFinalizar.style.display = "inline-block";
  }

  carrito.forEach((item, index) => {
    const subtotal = item.precioUnitario * item.cantidad;

    const div = document.createElement("div");
    div.className =
      "border rounded p-3 mb-3 d-flex justify-content-between align-items-start flex-wrap";

    div.innerHTML = `
      <div>
        <h5 class="fw-bold">${item.producto}</h5>
        <p class="mb-1">Medida: <strong>${item.medida}</strong></p>
        <p class="mb-1">LED: <strong>${item.led ? "Sí" : "No"}</strong></p>
        <p class="mb-1">Cantidad: <strong>${item.cantidad}</strong></p>
        <p class="fw-bold text-success">$${subtotal.toLocaleString("es-AR")}</p>
      </div>

      <button
        class="btn btn-outline-danger btn-sm btn-eliminar"
        data-index="${index}"
        title="Eliminar producto"
      >
        <i class="bi bi-trash"></i>
      </button>
    `;

    contenedorLista.appendChild(div);
  });

  actualizarTotal();
  actualizarCartCount();
}

// ================= EVENTOS =================
btnVaciar.addEventListener("click", () => {
  if (!confirm("¿Querés vaciar el carrito?")) return;
  localStorage.removeItem("carrito");
  renderCarrito();
});

btnFinalizar.addEventListener("click", () => {
  const carrito = getCarrito();

  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola!  Vengo desde la página web de Cuadros Piolas.\nQuisiera realizar el pago de este pedido y consultar por el envío.\n\n *Pedido Cuadros Piolas*\n\n";


  carrito.forEach(item => {
    const subtotal = item.precioUnitario * item.cantidad;
    mensaje += `• ${item.producto}\n`;
    mensaje += `  Medida: ${item.medida}\n`;
    mensaje += `  LED: ${item.led ? "Sí" : "No"}\n`;
    mensaje += `  Cantidad: ${item.cantidad}\n`;
    mensaje += `  Subtotal: $${subtotal.toLocaleString("es-AR")}\n\n`;
  });

  const total = carrito.reduce(
    (acc, item) => acc + item.precioUnitario * item.cantidad,
    0
  );

  mensaje += `*TOTAL: $${total.toLocaleString("es-AR")}*`;

  const url = `https://wa.me/${WHATSAPP_DAMIAN}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});

contenedorLista.addEventListener("click", (e) => {
  if (e.target.closest(".btn-eliminar")) {
    const index = e.target.closest(".btn-eliminar").dataset.index;
    eliminarItem(index);
  }
});

// ================= INIT =================
renderCarrito();
actualizarCartCount();


