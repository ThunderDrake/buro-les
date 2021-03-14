document.addEventListener('DOMContentLoaded', () => {
  const mobileButton = document.querySelector('.burger'),
        navigation = document.querySelector('.nav');
        
  const mobileNavShow = () => {
    mobileButton.classList.add('burger--active');
    navigation.classList.add('nav--active');
    document.body.style.overflow = 'hidden';
    document.ontouchmove = function (e) {
      e.preventDefault();
    };
  };

  const mobileNavHide = () => {
    mobileButton.classList.remove('burger--active');
    navigation.classList.remove('nav--active');
    document.body.style.overflow = '';
    document.ontouchmove = function (e) {
      return true;
    };
  };

  mobileButton.addEventListener('click', () => {
    if (mobileButton.classList.contains('burger--active')) {
      mobileNavHide();
    } else {
      mobileNavShow();
    }
  });

  navigation.addEventListener('click', (e) => {
    if (e.target === navigation) {
      mobileNavHide();
    }
  });
  
});