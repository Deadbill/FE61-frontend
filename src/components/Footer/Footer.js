const Footer = () => {
    const container = document.createElement('div');
    container.innerHTML = `
    <div class="container-footer">
        <div class="brand-footer">
            <a href="" class="header-link">
                <img src="https://www.fbi.gov/++theme++fbigov.theme/images/fbi_seal_new.png" class="logo" title="Federal Bureau of Investigation">
                <div>
                    <span class="initials" aria-hidden="true">FBI</span>
                    <span class="fullname">Federal Bureau of Investigation</span>
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
                <div class="agency-contact">
                    <h3>
                        FBI.gov Contact Center
                    </h3>
                </div>
            </div>
        </div>
    </div>
    `;
    container.classList.add('footer-wrapper');

    return container;
};

export default Footer;