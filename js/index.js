function mostrarValor() {
  var valor = 'El valor que quieres mostrar';
  document.getElementById('resultado').textContent = valor;
}

function calcularTotal() {
  let cantidad = parseFloat(document.getElementById('cantidad').value);
  console.log(cantidad);
  let categoria = document.getElementById('categoria').value;
  let precioUnitario = 200;
  let descuento = 0;

  if (categoria === 'Estudiante') {
    descuento = 0.8; // 80% de descuento
  } else if (categoria === 'Trainee') {
    descuento = 0.5; // 50% de descuento
  } else if (categoria === 'Junior') {
    descuento = 0.15; // 15% de descuento
  }
  let total = cantidad * precioUnitario * (1 - descuento);
  document.getElementById('resultado').textContent = 'Total a pagar $: ' + total.toFixed(2);
}

function borrar() {
  document.getElementById('resultado').textContent = 'Total a pagar $:';
}

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('myCarousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const items = document.querySelectorAll('.carousel-item');
  let currentSlide = 0;

  function showSlide(index) {
    items[currentSlide].classList.remove('active');
    items[index].classList.add('active');
    currentSlide = index;
  }

  prevBtn.addEventListener('click', function () {
    const newIndex = currentSlide - 1 < 0 ? items.length - 1 : currentSlide - 1;
    showSlide(newIndex);
  });

  nextBtn.addEventListener('click', function () {
    const newIndex = (currentSlide + 1) % items.length;
    showSlide(newIndex);
  });
});
