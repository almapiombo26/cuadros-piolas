// ================= CONFIG =================
const WHATSAPP_DAMIAN = "5491122616091";


const DATOS_DAMIAN = {
  nombre: "Damián Guido Basualdo",
  alias: "damibas24",
  cbu: "0000003100024559601156"
};

let metodoPago = "";


// ================= STORAGE =================
function getCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

// ================= DOM =================
const contenedorLista = document.getElementById("carrito-lista");
const totalHTML = document.getElementById("carrito-total");
const btnVaciar = document.getElementById("btn-vaciar");
const btnFinalizar = document.getElementById("btn-finalizar");
const mediosPago = document.getElementById("medios-pago");
const btnTransferencia = document.getElementById("btn-transferencia");
const btnEfectivo = document.getElementById("btn-efectivo");
const datosTransferencia = document.getElementById("datos-transferencia");

const retiroRadio = document.getElementById("retiro");
const domicilioRadio = document.getElementById("domicilio");
const inputDireccion = document.getElementById("direccion");

const btnWhatsappFinal = document.getElementById("btn-whatsapp-final");


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
    mediosPago.style.display = "none";
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
  if (getCarrito().length === 0) return;
  mediosPago.style.display = "block";
});




btnTransferencia.addEventListener("click", () => {
  metodoPago = "Transferencia bancaria";

  // Estado seleccionado (persistente)
  btnTransferencia.classList.add("activo");
  btnEfectivo.classList.remove("activo");

  const total = getCarrito().reduce(
    (acc, item) => acc + item.precioUnitario * item.cantidad,
    0
  );

  datosTransferencia.style.display = "block";
  datosTransferencia.innerHTML = `
    <p><strong>Total a pagar:</strong> $${total.toLocaleString("es-AR")}</p>
    <p><strong>Alias:</strong> ${DATOS_DAMIAN.alias}</p>
    <p><strong>CBU:</strong> ${DATOS_DAMIAN.cbu}</p>
    <p><strong>Titular:</strong> ${DATOS_DAMIAN.nombre}</p>
    <p class="mb-0">Luego enviá el comprobante por WhatsApp.</p>
  `;
});





btnEfectivo.addEventListener("click", () => {
  metodoPago = "Pago en efectivo";

  // Estado seleccionado (persistente)
  btnEfectivo.classList.add("activo");
  btnTransferencia.classList.remove("activo");

  datosTransferencia.style.display = "none";
});






domicilioRadio.addEventListener("change", () => {
  inputDireccion.style.display = "block";
});

retiroRadio.addEventListener("change", () => {
  inputDireccion.style.display = "none";
});


btnWhatsappFinal.addEventListener("click", () => {
  const carrito = getCarrito();

  // Validaciones
  if (!metodoPago) {
    alert("Por favor elegí una forma de pago");
    return;
  }

  if (!retiroRadio.checked && !domicilioRadio.checked) {
    alert("Por favor elegí una forma de entrega");
    return;
  }

  if (domicilioRadio.checked && inputDireccion.value.trim() === "") {
    alert("Ingresá tu dirección completa");
    return;
  }

  // Mensaje
  let mensaje = "Hola Damián! Vengo desde la web de Cuadros Piolas.\n\n";
  mensaje += "*Pedido:*\n\n";

  let total = 0;

  carrito.forEach(item => {
    const subtotal = item.precioUnitario * item.cantidad;
    total += subtotal;

    mensaje += `• ${item.producto}\n`;
    mensaje += `  Medida: ${item.medida}\n`;
    mensaje += `  LED: ${item.led ? "Sí" : "No"}\n`;
    mensaje += `  Cantidad: ${item.cantidad}\n`;
    mensaje += `  Subtotal: $${subtotal.toLocaleString("es-AR")}\n\n`;
  });

  mensaje += `*TOTAL DEL PEDIDO:* $${total.toLocaleString("es-AR")}\n`;
  mensaje += `*Forma de pago:* ${metodoPago}\n`;

  if (domicilioRadio.checked) {
    mensaje += "*Forma de entrega:* Envío a domicilio\n";
    mensaje += "*Costo de envío:* A cotizar por WhatsApp\n";
    mensaje += `*Dirección:* ${inputDireccion.value}\n`;
  } else {
    mensaje += "*Forma de entrega:* Retiro en taller (Gratis)\n";
    mensaje += "📍 Dirección: 30 de septiembre 4708, San José, Temperley. Buenos Aires\n";
  }



  if (metodoPago === "Transferencia") {
    mensaje += "\nAdjunto comprobante de transferencia.";
  }

  window.open(
    `https://wa.me/${WHATSAPP_DAMIAN}?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );
});



contenedorLista.addEventListener("click", (e) => {
  if (e.target.closest(".btn-eliminar")) {
    eliminarItem(e.target.closest(".btn-eliminar").dataset.index);
  }
});

// ================= INIT =================
renderCarrito();
actualizarCartCount();


