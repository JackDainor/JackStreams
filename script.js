 
// ---------------------------
// 🔵 PAGINACIÓN REAL
// ---------------------------
let currentPage = 1;
const itemsPerPage = 10;
let filteredProducts = [...products]; // por defecto todos

const grid = document.getElementById("productGrid");
const pageInfo = document.getElementById("pageInfo");

// ➤ Reparar tu función actual de tarjetas:
function loadProducts(list) {
  grid.innerHTML = "";
  list.forEach((product, index) => {
    const card = createProductCard(product, index);
    grid.appendChild(card);
  });
}

// ➤ Nueva función con paginación:
function renderPaginated() {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageItems = filteredProducts.slice(start, end);

  loadProducts(pageItems);

  pageInfo.textContent = `${currentPage} / ${totalPages}`;
}

// Botones
document.getElementById("prevPage").addEventListener("click", () => {
  currentPage--;
  renderPaginated();
});

document.getElementById("nextPage").addEventListener("click", () => {
  currentPage++;
  renderPaginated();
});

// Buscador
document.getElementById("searchInput").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(q)
  );
  currentPage = 1;
  renderPaginated();
});

// Inicio
renderPaginated();



  // Create product cards dynamically
  const productGrid = document.getElementById("productGrid");

  function createProductCard(product, index) {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-name", product.name.toLowerCase());

    // product name badge
    const nameTag = document.createElement("div");
    nameTag.className = "product-name";
    nameTag.textContent = product.name;
    card.appendChild(nameTag);

    // p// price yellow tag
const priceTag = document.createElement("div");
priceTag.className = "price-tag";
let convertedPrice;
switch (selectedCurrency) {
  case 'bs':
    convertedPrice = (product.price * exchangeRates['bs']).toFixed(2);
    priceTag.textContent = `Bs/.${convertedPrice}`;
    break;
  case 'br':
    convertedPrice = (product.price * exchangeRates['br']).toFixed(2);
    priceTag.textContent = `R$${convertedPrice}`;
    break;
  case 'usdt':
    convertedPrice = product.price.toFixed(2);
    priceTag.textContent = `USDT ${convertedPrice}`;
    break;
  case 'usd':
  default:
    convertedPrice = product.price.toFixed(2);
    priceTag.textContent = `$${convertedPrice}`;
    break;
}
card.appendChild(priceTag);

    // image container and image
    const imgContainer = document.createElement("div");
    imgContainer.className = "image-container";
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = `${product.name} logo`;
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    // info text
    const infoText = document.createElement("div");
    infoText.className = "info-text";
    infoText.textContent = product.info;
    card.appendChild(infoText);

const info1Text = document.createElement("div");
info1Text.className = "info-text";
info1Text.textContent = product.info1;
card.appendChild(info1Text);



    // Proveedor
    const renewText = document.createElement("div");
    renewText.className = "renewal";
    renewText.textContent = `ID: ${product.renewal}`;
    card.appendChild(renewText);

const banderaText = document.createElement("div");
banderaText.className = "info-text";
banderaText.textContent = product.bandera;
card.appendChild(banderaText);


    // Button container and button
    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    const btn = document.createElement("button");
    btn.type = "button";
    if(product.stock > 0) {
      btn.className = "buy-btn";
      btn.textContent = "Comprar";
      btn.addEventListener("click", () => openForm(product));
    } else {
      btn.className = "disabled-btn";
      btn.textContent = "Agotado";
      btn.disabled = true;
    }
    btnContainer.appendChild(btn);
    card.appendChild(btnContainer);

    return card;
  }

  function renderProducts(productsList) {
    productGrid.innerHTML = "";
    if(productsList.length === 0) {
      productGrid.innerHTML = "<p style='text-align:center; color:#777;'>No products found.</p>";
      return;
    }
    productsList.forEach((product, index) => {
      productGrid.appendChild(createProductCard(product, index));
    });
  }

  renderProducts(products);

  // Search functionality real-time
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    
    renderProducts(filtered);
  });

  // Dropdown toggle
  const dropdown = document.getElementById("dropdownMenu");
  const dropdownToggle = document.getElementById("dropdownToggle");

  dropdownToggle.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    const expanded = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", String(!expanded));
    if (!expanded) {
      document.getElementById("dropdown-content").focus();
    }
  });

  // Close dropdown if clicking outside
  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Buy form modal logic
  const buyModal = document.getElementById("buyModal");
  const closeBtn = buyModal.querySelector(".close");
  const purchaseForm = document.getElementById("purchaseForm");

  function openForm(product) {
    document.getElementById("productName").value = product.name;
    document.getElementById("productInfo").value = product.info;
    document.getElementById("productRenewal").value = product.renewal;
    document.getElementById("productPrice").value = product.price.toFixed(2);
    

    buyModal.style.display = "block";
    // Reset form fields
    purchaseForm.reset();
    // Focus first input (Name)
    document.getElementById("customerName").focus();
  }

  // Close modal function
  function closeForm() {
    buyModal.style.display = "none";
  }

  closeBtn.addEventListener("click", closeForm);

  // Close modal on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && buyModal.style.display === "block") {
      closeForm();
    }
  });

  // Close modal when clicking outside modal-content
  buyModal.addEventListener("click", (e) => {
    if (e.target === buyModal) {
      closeForm();
    }
  });

  // Form submission handler
  purchaseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const productName = document.getElementById("productName").value;
    const productInfo = document.getElementById("productInfo").value;
    const productRenewal = document.getElementById("productRenewal").value;
    const productPrice = document.getElementById("productPrice").value;
    const customerName = document.getElementById("customerName").value.trim();
    const whatsappNumber = document.getElementById("whatsappNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const paymentMethod = document.getElementById("paymentMethod").value;

    // Validate WhatsApp number format loosely (already pattern in input)
    if (!customerName || !whatsappNumber || !email || !paymentMethod) {
      alert("Please fill all required fields");
      return;
    }
    

    const encodedMessage = encodeURIComponent(
      `Hola, *JackStreams* ✨🍿 \n` +
      `estoy interesado en adquirir la plataforma:\n` +
      `*Plataforma:* ${productName} ${productInfo}\n` +
      `*ID:* ${productRenewal}\n` +
      `*Nombre:* ${customerName}\n` +
      `*Número de WhatsApp:* ${whatsappNumber}\n` +
      `*Email:* ${email}\n` +
      `*Método de pago:* ${paymentMethod}\n` +
      `Por favor, envíeme los datos para el pago. ¡Gracias!`
    );
    const whatsappNumberTo = "5511966019490"; // Your WhatsApp number without plus, country code included
    const whatsappUrl = `https://wa.me/${whatsappNumberTo}?text=${encodedMessage}`;
    
    // Open WhatsApp with message in new tab
    window.open(whatsappUrl, "_blank");

    closeForm();
  });
  
  // La lista a mostrar
var tituloBs = "Métodos de pago: Bolivia 🇧🇴";
var elemento1 = "Yape, Altoke";
var elemento2 = "transferencia bancaria";
var tituloBr = "Métodos de pago: Brasil 🇧🇷";
var elemento3 = "Pix (QR 5 minutos)";
var tituloEEUU = "Métodos de pago EEUU 🇺🇸";
var elemento4 = "tranferencia bancaria ACH";
var titulodivisas = "Otras divisas 🇨🇱🇧🇷🇧🇴🇪🇦🇱🇷🇵🇪🇳🇮";
var elemento5 = "Binance";
var elemento6 = "Airtm";
var elemento7 = "PayPal";

// ESTA ES LA PARTE CLAVE: Asegúrate de que los \n y los + estén correctos
var listaCompleta =
    tituloBs + "\n" +
    "  - " + elemento1 + "\n" +
    "  - " + elemento2 + "\n\n" + // Doble \n para espacio

    tituloBr + "\n" +
    "  - " + elemento3 + "\n\n" +

    tituloEEUU + "\n" +
    "  - " + elemento4 + "\n\n" +

    titulodivisas + "\n" +
    "  - " + elemento5 + "\n" +
    "  - " + elemento6 + "\n" +
    "  - " + elemento7;



  window.addEventListener("load", function() {
  document.getElementById("alerta").addEventListener("click", function() {
    alert(listaCompleta);
  })
})
