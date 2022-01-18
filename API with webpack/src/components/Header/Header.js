const Header = () => {
  const container = document.createElement('div');
  container.innerHTML = `<i class="fas fa-paw"></i>
    <p class="header-title">Cat Breeds</p>
    <i class="fas fa-paw"></i>`;
  container.classList.add('header-wrapper');

  return container;
};

export default Header;
