document.querySelectorAll('.image').forEach(img => {
  img.addEventListener('click', function () {
    window.location.href = 'next.html'; // مسیر صفحه بعدی
  });
});
