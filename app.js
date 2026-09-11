/* ==========================================================================
   GRUPO AAA S.A.S — LÓGICA E INTERACTIVIDAD DE LA LANDING PAGE
   Inmobiliaria de Propiedades Frente al Mar
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. BASE DE DATOS DE PROPIEDADES FRENTE AL MAR (CON MÚLTIPLES FOTOS POR CARD)
// --------------------------------------------------------------------------
const PROPERTIES_DATA = [
  {
    id: "prop-1",
    title: "Villa Solsticio Acantilado",
    category: "villa",
    location: "Bahía Esmeralda",
    priceNum: 8900000,
    priceFormatted: "$8,900,000 USD",
    tag: "Frente al Mar",
    tagClass: "gold",
    area: "1,150 m²",
    beds: 6,
    baths: 7,
    waterfront: "90 m frente al mar",
    lat: 11.2408,
    lng: -74.2110,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
    ],
    desc: "Majestuosa residencia contemporánea sobre acantilado con acceso privado a caleta de arena blanca. Voladizos en mármol travertino, piscina infinity volada y spa con ventanal submarino.",
    amenities: ["Piscina Infinity", "Muelle Privado", "Cava Climatizada", "Domótica Integral", "Seguridad 24/7", "Helipuerto"]
  },
  {
    id: "prop-2",
    title: "Sky Penthouse Bahía Blanca",
    category: "penthouse",
    location: "Riviera Marina",
    priceNum: 5850000,
    priceFormatted: "$5,850,000 USD",
    tag: "Piso 32 • Vista 360°",
    tagClass: "",
    area: "620 m²",
    beds: 4,
    baths: 5,
    waterfront: "Amarre 70ft en Marina",
    lat: 11.2315,
    lng: -74.2012,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
    ],
    desc: "Mirador panorámico de doble altura con jacuzzi suspendido sobre el océano. Finos acabados en mármol blanco Thassos, ascensor directo con tarjeta biométrica y amarre para yate.",
    amenities: ["Amarre para Yate", "Jacuzzi Privado", "Elevador Biométrico", "Solárium 360°", "Cocina Italiana Boffi"]
  },
  {
    id: "prop-3",
    title: "Villa Cayo Coral Sanctuary",
    category: "isla",
    location: "Cayo Coral",
    priceNum: 16200000,
    priceFormatted: "$16,200,000 USD",
    tag: "Isla Exclusiva",
    tagClass: "gold",
    area: "18,000 m²",
    beds: 8,
    baths: 9,
    waterfront: "Playa 100% Privada",
    lat: 11.2650,
    lng: -74.1850,
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    ],
    desc: "Santuario privado totalmente autosustentable con energía solar de última generación, planta desalinizadora de agua dulce y laguna interior protegida ideal para fondeo de embarcaciones.",
    amenities: ["100% Autosustentable", "Arrecife de Coral Privado", "Pista de Aterrizaje", "Casa de Huéspedes", "Planta Desalinizadora"]
  },
  {
    id: "prop-4",
    title: "Residencia Brisa Marina",
    category: "villa",
    location: "Playa Paraíso",
    priceNum: 3950000,
    priceFormatted: "$3,950,000 USD",
    tag: "Entrega Inmediata",
    tagClass: "",
    area: "540 m²",
    beds: 4,
    baths: 4,
    waterfront: "45 m de arena blanca",
    lat: 11.2220,
    lng: -74.2250,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
    ],
    desc: "Arquitectura orgánica en piedra caliza y maderas curadas. Salida directa a la playa sin obstáculos, pérgolas bioclimáticas y piscina con deck de teca.",
    amenities: ["Acceso Directo al Mar", "Piscina y Jacuzzi", "Pérgolas Bioclimáticas", "Cuarto de Servicio", "Garaje para 4 Autos"]
  },
  {
    id: "prop-5",
    title: "Apartamento Costero Azure Bay",
    category: "apartamento",
    location: "Costa Dorada",
    priceNum: 1850000,
    priceFormatted: "$1,850,000 USD",
    tag: "Preventa VIP",
    tagClass: "gold",
    area: "285 m²",
    beds: 3,
    baths: 3,
    waterfront: "Terraza Frente al Mar",
    lat: 11.2380,
    lng: -74.2180,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
    ],
    desc: "Lujoso apartamento con amplia terraza perimetral orientada a los mejores atardeceres costeros. Club de playa privado con cabañas, gimnasio frente al mar y restaurante exclusivo.",
    amenities: ["Club de Playa Privado", "Gimnasio con Vista al Mar", "Restaurante Exclusivo", "Seguridad 24 Horas", "Cabañas en Playa"]
  },
  {
    id: "prop-6",
    title: "Villa Grand Horizonte",
    category: "villa",
    location: "Bahía Esmeralda",
    priceNum: 7200000,
    priceFormatted: "$7,200,000 USD",
    tag: "Lujo Absoluto",
    tagClass: "gold",
    area: "890 m²",
    beds: 5,
    baths: 6,
    waterfront: "70 m frente a la playa",
    lat: 11.2480,
    lng: -74.2050,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
    ],
    desc: "Líneas geométricas puras en yeso blanco brillante y piedra marina. Muelle privado para lanchas rápidas, cine al aire libre y jardín tropical con palmeras adultas.",
    amenities: ["Cine al Aire Libre", "Muelle Deportivo", "Piscina Climatizada", "Cava Subterránea", "Casa de Seguridad"]
  }
];

// Estado global de imágenes activas en micro-carruseles
const cardImageIndices = {};

// --------------------------------------------------------------------------
// 2. HERO CAROUSEL: AUTOMÁTICO, PARALLAX, BARRA DE PROGRESO Y CONTROLES
// --------------------------------------------------------------------------
let heroCurrentIndex = 0;
let heroSlideTimer = null;
let heroProgressTimer = null;
const HERO_INTERVAL = 6000; // 6 segundos por diapositiva
let heroProgress = 0;

function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#hero-dots .dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  const carouselEl = document.getElementById('hero');

  if (!slides.length) return;

  function goToSlide(index) {
    slides[heroCurrentIndex].classList.remove('active');
    if (dots[heroCurrentIndex]) dots[heroCurrentIndex].classList.remove('active');

    heroCurrentIndex = (index + slides.length) % slides.length;

    slides[heroCurrentIndex].classList.add('active');
    if (dots[heroCurrentIndex]) dots[heroCurrentIndex].classList.add('active');

    resetProgressBar();
  }

  function nextSlide() {
    goToSlide(heroCurrentIndex + 1);
  }

  function prevSlide() {
    goToSlide(heroCurrentIndex - 1);
  }

  function resetProgressBar() {
    heroProgress = 0;
    const bar = document.getElementById('carousel-progress-fill');
    if (bar) bar.style.width = '0%';
  }

  function startAutoPlay() {
    stopAutoPlay();
    heroSlideTimer = setInterval(nextSlide, HERO_INTERVAL);

    // Progreso suave cada 100ms
    heroProgressTimer = setInterval(() => {
      heroProgress += (100 / (HERO_INTERVAL / 100));
      if (heroProgress > 100) heroProgress = 100;
      const bar = document.getElementById('carousel-progress-fill');
      if (bar) bar.style.width = `${heroProgress}%`;
    }, 100);
  }

  function stopAutoPlay() {
    if (heroSlideTimer) clearInterval(heroSlideTimer);
    if (heroProgressTimer) clearInterval(heroProgressTimer);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      startAutoPlay();
    });
  });

  // Pausar en hover sobre el carrusel
  if (carouselEl) {
    carouselEl.addEventListener('mouseenter', stopAutoPlay);
    carouselEl.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

// --------------------------------------------------------------------------
// 3. RENDERIZADO DE LA GALERÍA CON MICRO-CARRUSELES INDIVIDUALES
// --------------------------------------------------------------------------
function renderPropertiesList(properties) {
  const container = document.getElementById('properties-grid');
  const emptyState = document.getElementById('empty-properties');
  const resultsBadge = document.getElementById('results-count');

  if (!container) return;

  if (resultsBadge) {
    resultsBadge.textContent = `${properties.length} Propiedad${properties.length === 1 ? '' : 'es'} Disponible${properties.length === 1 ? '' : 's'}`;
  }

  if (properties.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = properties.map(prop => {
    // Inicializar índice de imagen si no existe
    if (cardImageIndices[prop.id] === undefined) {
      cardImageIndices[prop.id] = 0;
    }
    const activeImgIndex = cardImageIndices[prop.id];

    return `
      <article class="property-card" data-id="${prop.id}">
        <!-- Micro-carrusel dentro de la tarjeta -->
        <div class="card-carousel-wrapper">
          <div class="card-carousel-slides" id="carousel-slides-${prop.id}">
            ${prop.images.map((imgUrl, i) => `
              <img src="${imgUrl}" 
                   alt="${prop.title} - Foto ${i + 1}" 
                   class="card-carousel-img ${i === activeImgIndex ? 'active' : ''}" 
                   loading="lazy">
            `).join('')}
          </div>

          <!-- Badge sobre la foto -->
          <span class="card-badge ${prop.tagClass}">${prop.tag}</span>

          <!-- Botón de favoritos -->
          <button class="card-save-btn" title="Guardar propiedad" onclick="toggleSaveProp('${prop.id}', this)">
            <i data-feather="heart"></i>
          </button>

          <!-- Flechas micro-carrusel -->
          <button class="card-nav-btn card-nav-prev" onclick="changeCardImage('${prop.id}', -1, event)" aria-label="Foto anterior">
            <i data-feather="chevron-left"></i>
          </button>
          <button class="card-nav-btn card-nav-next" onclick="changeCardImage('${prop.id}', 1, event)" aria-label="Foto siguiente">
            <i data-feather="chevron-right"></i>
          </button>

          <!-- Micro dots -->
          <div class="card-dots" id="carousel-dots-${prop.id}">
            ${prop.images.map((_, i) => `
              <button class="card-dot ${i === activeImgIndex ? 'active' : ''}" 
                      onclick="setCardImage('${prop.id}', ${i}, event)" 
                      aria-label="Ir a foto ${i + 1}"></button>
            `).join('')}
          </div>
        </div>

        <!-- Cuerpo de la tarjeta -->
        <div class="property-card-body">
          <div class="card-location">
            <i data-feather="map-pin"></i>
            <span>${prop.location}</span>
          </div>

          <h3 class="card-title">${prop.title}</h3>
          <p class="card-desc">${prop.desc}</p>

          <!-- Ficha de características -->
          <div class="card-specs">
            <div class="spec-item" title="Área construida">
              <i data-feather="maximize"></i>
              <span>${prop.area}</span>
            </div>
            <div class="spec-item" title="Habitaciones">
              <i data-feather="moon"></i>
              <span>${prop.beds} Hab</span>
            </div>
            <div class="spec-item" title="Baños">
              <i data-feather="droplet"></i>
              <span>${prop.baths} Baños</span>
            </div>
          </div>

          <!-- Footer con Precio Destacado en Azul #0066CC -->
          <div class="card-footer">
            <div class="card-price-block">
              <span class="price-label">Inversión Desde</span>
              <span class="card-price">${prop.priceFormatted}</span>
            </div>
            <button class="btn-details" onclick="openPropertyModal('${prop.id}')">
              <span>Ver Detalles</span>
              <i data-feather="arrow-up-right"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.feather) feather.replace();
}

// Control del micro-carrusel de cada tarjeta
function changeCardImage(propId, direction, event) {
  if (event) event.stopPropagation();
  const prop = PROPERTIES_DATA.find(p => p.id === propId);
  if (!prop) return;

  const currentIdx = cardImageIndices[propId] || 0;
  const newIdx = (currentIdx + direction + prop.images.length) % prop.images.length;
  setCardImage(propId, newIdx);
}

function setCardImage(propId, targetIndex, event) {
  if (event) event.stopPropagation();
  cardImageIndices[propId] = targetIndex;

  const slidesWrap = document.getElementById(`carousel-slides-${propId}`);
  const dotsWrap = document.getElementById(`carousel-dots-${propId}`);

  if (slidesWrap) {
    const images = slidesWrap.querySelectorAll('.card-carousel-img');
    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === targetIndex);
    });
  }

  if (dotsWrap) {
    const dots = dotsWrap.querySelectorAll('.card-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === targetIndex);
    });
  }
}

function toggleSaveProp(propId, btn) {
  const icon = btn.querySelector('svg');
  btn.classList.toggle('saved');
  if (btn.classList.contains('saved')) {
    btn.style.color = '#E11D48';
    alert('Propiedad agregada a tu lista de favoritos de Grupo AAA S.A.S');
  } else {
    btn.style.color = '';
  }
}

// --------------------------------------------------------------------------
// 4. MOTOR DE FILTRADO Y BÚSQUEDA INTUITIVA EN TIEMPO REAL
// --------------------------------------------------------------------------
let activeCategoryFilter = 'all';

function applyFilters() {
  const locVal = document.getElementById('filter-location')?.value || 'all';
  const typeVal = document.getElementById('filter-type')?.value || 'all';
  const bedsVal = document.getElementById('filter-beds')?.value || 'all';
  const priceVal = document.getElementById('filter-price')?.value || 'all';

  const filtered = PROPERTIES_DATA.filter(item => {
    // Filtro Categoría por Tabs
    if (activeCategoryFilter !== 'all' && item.category !== activeCategoryFilter) {
      return false;
    }

    // Filtro Ubicación
    if (locVal !== 'all' && item.location !== locVal) {
      return false;
    }

    // Filtro Tipo
    if (typeVal !== 'all' && item.category !== typeVal) {
      return false;
    }

    // Filtro Habitaciones
    if (bedsVal !== 'all' && item.beds < parseInt(bedsVal, 10)) {
      return false;
    }

    // Filtro Precio
    if (priceVal !== 'all') {
      const maxPrice = parseInt(priceVal, 10);
      if (item.priceNum > maxPrice) return false;
    }

    return true;
  });

  renderPropertiesList(filtered);
}

function filterCategory(category, btnEl) {
  activeCategoryFilter = category;
  
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  // Sincronizar select si existe
  const typeSelect = document.getElementById('filter-type');
  if (typeSelect && category !== 'all') {
    typeSelect.value = category;
  } else if (typeSelect && category === 'all') {
    typeSelect.value = 'all';
  }

  applyFilters();
}

function resetFilters() {
  const form = document.getElementById('property-filter-form');
  if (form) form.reset();

  activeCategoryFilter = 'all';
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach((p, idx) => p.classList.toggle('active', idx === 0));

  renderPropertiesList(PROPERTIES_DATA);
}

// --------------------------------------------------------------------------
// 5. MAPA INTERACTIVO DE UBICACIONES COSTERAS (LEAFLET.JS)
// --------------------------------------------------------------------------
let mapInstance = null;

function initLeafletMap() {
  const mapEl = document.getElementById('interactive-map');
  if (!mapEl || typeof L === 'undefined') return;

  // Centro en la costa caribeña
  mapInstance = L.map('interactive-map', {
    scrollWheelZoom: false
  }).setView([11.238, -74.205], 13);

  // Azulejos limpios estilo océano
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a> &copy; OpenStreetMap',
    maxZoom: 18
  }).addTo(mapInstance);

  // Icono personalizado costero
  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `<div style="
      background: linear-gradient(135deg, #0066CC 0%, #1E90FF 100%);
      width: 32px; height: 32px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 16px; border: 2.5px solid white;
      box-shadow: 0 4px 15px rgba(0,102,204,0.5);
    ">🌊</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  PROPERTIES_DATA.forEach(prop => {
    const marker = L.marker([prop.lat, prop.lng], { icon: customIcon }).addTo(mapInstance);

    const popupHtml = `
      <div class="map-popup-card">
        <img src="${prop.images[0]}" alt="${prop.title}" class="map-popup-img">
        <div class="map-popup-body">
          <h4 class="map-popup-title">${prop.title}</h4>
          <div class="map-popup-price">${prop.priceFormatted}</div>
          <button class="map-popup-btn" onclick="openPropertyModal('${prop.id}')">Ver Ficha Completa</button>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml);
  });
}

// --------------------------------------------------------------------------
// 6. MODAL DE DETALLES Y CONTACTO INTEGRADO
// --------------------------------------------------------------------------
function openPropertyModal(propId) {
  const prop = PROPERTIES_DATA.find(p => p.id === propId);
  if (!prop) return;

  const modal = document.getElementById('property-modal');
  const contentArea = document.getElementById('modal-content-area');
  if (!modal || !contentArea) return;

  contentArea.innerHTML = `
    <div class="modal-prop-grid">
      <!-- Columna Galería -->
      <div>
        <img src="${prop.images[0]}" id="modal-main-image" class="modal-gallery-main" alt="${prop.title}">
        
        <div class="modal-thumbs-row">
          ${prop.images.map((img, i) => `
            <img src="${img}" 
                 class="modal-thumb-img ${i === 0 ? 'active' : ''}" 
                 onclick="switchModalThumb('${img}', this)" 
                 alt="Miniatura ${i + 1}">
          `).join('')}
        </div>

        <div style="margin-top: 24px;">
          <h4 style="font-size: 1.1rem; margin-bottom: 8px;">Amenidades Exclusivas</h4>
          <div class="modal-amenities">
            ${prop.amenities.map(a => `<span class="amenity-chip">✓ ${a}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Columna Datos y Formulario -->
      <div>
        <span class="pill-badge" style="margin-bottom: 8px;">${prop.location}</span>
        <h2 style="font-size: 1.8rem; margin-bottom: 8px;">${prop.title}</h2>
        <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-primary); margin-bottom: 16px;">
          ${prop.priceFormatted}
        </div>

        <p style="font-size: 0.92rem; color: var(--color-text-body); margin-bottom: 20px; line-height: 1.6;">
          ${prop.desc}
        </p>

        <div style="background-color: var(--color-bg-surface); padding: 14px; border-radius: var(--radius-md); margin-bottom: 24px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.85rem;">
            <div><strong>Área Total:</strong> ${prop.area}</div>
            <div><strong>Frente al Mar:</strong> ${prop.waterfront}</div>
            <div><strong>Habitaciones:</strong> ${prop.beds} Suites</div>
            <div><strong>Baños:</strong> ${prop.baths} Completos</div>
          </div>
        </div>

        <!-- Formulario Rápido -->
        <form onsubmit="handleModalInquiry(event, '${prop.title}')">
          <div class="modal-form-group">
            <label>Nombre y Apellido</label>
            <input type="text" id="modal-client-name" placeholder="Ej. Roberto Gómez" required>
          </div>
          <div class="modal-form-group">
            <label>Teléfono / WhatsApp</label>
            <input type="tel" id="modal-client-phone" placeholder="+57 300 123 4567" required>
          </div>
          <div class="modal-form-group">
            <label>Mensaje o Pregunta</label>
            <textarea id="modal-client-msg" rows="2" placeholder="Deseo coordinar un recorrido privado..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-full" style="margin-bottom: 10px;">
            <i data-feather="send"></i>
            <span>Solicitar Dossier Confidencial</span>
          </button>

          <button type="button" class="btn btn-outline-primary w-full" onclick="contactPropertyWhatsApp('${prop.title}')">
            <i data-feather="message-circle"></i>
            <span>Consultar por WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.feather) feather.replace();
}

function openContactModal(subject) {
  const modal = document.getElementById('property-modal');
  const contentArea = document.getElementById('modal-content-area');
  if (!modal || !contentArea) return;

  contentArea.innerHTML = `
    <div style="max-width: 540px; margin: 0 auto; text-align: center; padding: 10px 0;">
      <div class="pill-badge">GRUPO AAA S.A.S • ASESORÍA</div>
      <h2 style="font-size: 1.8rem; margin-bottom: 10px;">Agendar Asesoría Personalizada</h2>
      <p style="color: var(--color-text-muted); margin-bottom: 24px; font-size: 0.95rem;">
        Un director de inversiones inmobiliarias se comunicará de manera confidencial para presentarle las mejores opciones frente al mar.
      </p>

      <form onsubmit="handleModalInquiry(event, '${subject || 'Asesoría General'}')" style="text-align: left;">
        <div class="modal-form-group">
          <label>Nombre Completo</label>
          <input type="text" id="modal-client-name" placeholder="Ej. Mariana Echeverry" required>
        </div>
        <div class="modal-form-group">
          <label>Teléfono Móvil o WhatsApp</label>
          <input type="tel" id="modal-client-phone" placeholder="+57 315 889 0012" required>
        </div>
        <div class="modal-form-group">
          <label>Correo Electrónico</label>
          <input type="email" id="modal-client-email" placeholder="mariana@empresa.com" required>
        </div>
        <div class="modal-form-group">
          <label>Tipo de Interés</label>
          <input type="text" value="${subject || 'Inversión Frente al Mar'}" readonly style="background-color: var(--color-bg-surface);">
        </div>

        <button type="submit" class="btn btn-primary w-full mt-3">
          <i data-feather="calendar"></i>
          <span>Confirmar Cita Privada</span>
        </button>
      </form>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.feather) feather.replace();
}

function closePropertyModal() {
  const modal = document.getElementById('property-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function switchModalThumb(imgSrc, thumbEl) {
  const main = document.getElementById('modal-main-image');
  if (main) main.src = imgSrc;

  const thumbs = document.querySelectorAll('.modal-thumb-img');
  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function handleModalInquiry(e, propTitle) {
  e.preventDefault();
  const name = document.getElementById('modal-client-name')?.value || 'Apreciado Cliente';
  const phone = document.getElementById('modal-client-phone')?.value || '';

  alert(`¡Gracias ${name}! Hemos recibido su solicitud para "${propTitle}". Un asesor senior de Grupo AAA S.A.S se comunicará con usted al ${phone} en menos de 2 horas.`);
  closePropertyModal();
}

function contactPropertyWhatsApp(propTitle) {
  const name = document.getElementById('modal-client-name')?.value || 'Interesado';
  const msg = `Hola Grupo AAA S.A.S, mi nombre es ${name} y me gustaría recibir la ficha técnica y disponibilidad de "${propTitle}".`;
  openWhatsApp(msg);
  closePropertyModal();
}

// --------------------------------------------------------------------------
// 7. INTEGRACIÓN WHATSAPP CONCIERGE
// --------------------------------------------------------------------------
function openWhatsApp(msg) {
  const phone = "573109876543"; // Número de Grupo AAA S.A.S
  const encodedMsg = encodeURIComponent(msg);
  window.open(`https://wa.me/${phone}?text=${encodedMsg}`, '_blank');
}

// --------------------------------------------------------------------------
// 8. FORMULARIO NEWSLETTER
// --------------------------------------------------------------------------
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('news-email');
  const email = emailInput ? emailInput.value : '';

  if (email) {
    alert(`¡Gracias por suscribirte a Grupo AAA S.A.S!\nHemos registrado el correo ${email}. Recibirás en primicia nuestras oportunidades off-market frente al mar.`);
    if (emailInput) emailInput.value = '';
  }
}

// --------------------------------------------------------------------------
// 9. AMBIENTE SONORO DE OLAS (WEB AUDIO API SINTETIZADO)
// --------------------------------------------------------------------------
let waveAudioCtx = null;
let isWavePlaying = false;
let oceanGain = null;

function toggleOceanSound() {
  const btn = document.getElementById('sound-toggle-btn');
  const icon = document.getElementById('sound-icon');

  if (!waveAudioCtx) {
    waveAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    setupOceanSoundSynth();
  }

  if (waveAudioCtx.state === 'suspended') {
    waveAudioCtx.resume();
  }

  isWavePlaying = !isWavePlaying;

  if (isWavePlaying) {
    oceanGain.gain.setTargetAtTime(0.28, waveAudioCtx.currentTime, 1.5);
    if (btn) btn.classList.add('playing');
    if (icon) icon.setAttribute('data-feather', 'volume-2');
  } else {
    oceanGain.gain.setTargetAtTime(0, waveAudioCtx.currentTime, 1.0);
    if (btn) btn.classList.remove('playing');
    if (icon) icon.setAttribute('data-feather', 'volume-x');
  }

  if (window.feather) feather.replace();
}

function setupOceanSoundSynth() {
  const bufferLength = waveAudioCtx.sampleRate * 4;
  const buffer = waveAudioCtx.createBuffer(1, bufferLength, waveAudioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  // Generar ruido rosa para sonido de marea
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferLength; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.1;
    b6 = white * 0.115926;
  }

  const noise = waveAudioCtx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;

  const filter = waveAudioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(320, waveAudioCtx.currentTime);

  // LFO para emular el flujo y reflujo de las olas
  const lfo = waveAudioCtx.createOscillator();
  lfo.frequency.setValueAtTime(0.12, waveAudioCtx.currentTime);

  const lfoGain = waveAudioCtx.createGain();
  lfoGain.gain.setValueAtTime(240, waveAudioCtx.currentTime);

  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);

  oceanGain = waveAudioCtx.createGain();
  oceanGain.gain.setValueAtTime(0, waveAudioCtx.currentTime);

  noise.connect(filter);
  filter.connect(oceanGain);
  oceanGain.connect(waveAudioCtx.destination);

  noise.start();
  lfo.start();
}

// --------------------------------------------------------------------------
// 10. MENÚ MÓVIL Y SCROLL DEL HEADER
// --------------------------------------------------------------------------
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) drawer.classList.toggle('active');
}

// --------------------------------------------------------------------------
// 11. INICIALIZACIÓN GENERAL
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderizar propiedades
  renderPropertiesList(PROPERTIES_DATA);

  // 2. Iniciar carrusel hero
  initHeroCarousel();

  // 3. Iniciar mapa interactivo
  initLeafletMap();

  // 4. Sonido de olas
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', toggleOceanSound);
  }

  // 5. Menú móvil
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
  }

  // 6. Header scroll effect & spy
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // 7. Cerrar modal con clic afuera o ESC
  const modalBackdrop = document.getElementById('property-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closePropertyModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePropertyModal();
  });

  // 8. Iniciar Feather Icons
  if (window.feather) feather.replace();
});
