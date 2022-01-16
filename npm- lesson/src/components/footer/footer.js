const footer = () => {
  const footer = document.createElement('footer');
  const logoImg = document.createElement('img');
  logoImg.src = 'https://www.fbi.gov/++theme++fbigov.theme/images/fbi-seal-logo.png';
  const title = document.createElement('span');
  title.innerText = 'FBI';
  const reduction = document.createElement('p');
  reduction.innerText = 'FEDERAL BUREAU OF INVESTIGATION';
  const div = document.createElement('div');
  div.append(logoImg, title, reduction);
  const number = document.createElement('p');
  number.innerText = 'Call 1-800-CALL-FBI (225-5324)';
  footer.classList.add('footer');
  div.classList.add('logo');
  footer.append(div, number);
  return footer
}


export default footer;