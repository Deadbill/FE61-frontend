const Footer = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="container-footer">
        <div class="brand-footer">
            <a href="" class="footer-link">
                <div class="left">
                    Vadim Pankov
                    <i class="far fa-copyright"></i>
                </div>
            </a>
            <div class="right">
                <div class="social-icons">
                    <ul>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-flickr"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
  container.classList.add('footer-wrapper');

  return container;
};

export default Footer;
