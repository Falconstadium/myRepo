const form = document.getElementById('generate-form');
const qrcode = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
  e.preventDefault();
  clearUI();

  const url= document.getElementById('url').value;
  const size = document.getElementById('size').value; 

  console.log(url, size);

  if (url === ''){
    alert ('please enter a valid URL');
  } else {
    showSpinner();
    setTimeout( () => {

      hideSpinner();

      generateQRCode(url, size);

      setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        createSaveBtn(saveUrl);
      }, 50);

    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qr = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size
  });
}


const showSpinner = () =>{
  document.getElementById('spinner').style.display = 'block'; 
};

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
};

const clearUI = () => {
  qrcode.innerHTML = '';
  const saveBtn = document.getElementById('save-link');
  if (saveBtn) 
    saveBtn.remove();
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.style.backgroundColor = 'red';
  link.style.color = 'white';
  link.style.margin = 'auto';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Save Image';
  document.getElementById('generated').appendChild(link);
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);