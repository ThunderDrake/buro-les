document.addEventListener('DOMContentLoaded', () => {
  const targetInput = document.querySelectorAll('[data-target]'),
        calcDescr = document.querySelectorAll('.calculator__descr');

  targetInput.forEach(el => {
    el.addEventListener('change', () => {
      let currentDescr = 'variant0';
      const descrChange = () => {
        if (el.dataset.target === 'selector') {
          currentDescr = el.value;
          return currentDescr;
        } else {
          currentDescr = el.dataset.target;
          return currentDescr;
        }
      };
      descrChange();
      calcDescr.forEach(el => {
        if (el.id === currentDescr) {
          el.classList.add('descr-active');
        } else {
          el.classList.remove('descr-active');
        }
      });
    });
  });
});