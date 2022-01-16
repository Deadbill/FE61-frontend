const Header = () => {
    const container = document.createElement('div');
    container.innerHTML = `
    <div class="container">
        <div class="brand">
            <a href="" class="header-link">
                <img src="https://www.fbi.gov/++theme++fbigov.theme/images/fbi_seal_new.png" class="logo" title="Federal Bureau of Investigation">
                <div>
                    <span class="initials" aria-hidden="true">FBI</span>
                    <span class="fullname">Federal Bureau of Investigation</span>
                </div>
            </a>
        </div>
    </div>
    `;
    container.classList.add('header-wrapper');

    // const imgCont = querySelector('.img-cont');
    // const logo = document.createElement('img');
    // logo.src = './src/images/fbi_seal_new.png';
    // // link.add.before(logo);
    // imgCont.appand(logo);
    

    return container;
};

export default Header;