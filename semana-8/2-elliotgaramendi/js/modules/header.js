const header = () => {
  const buttonTheme = document.getElementById('buttonTheme');

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--light');
    buttonTheme.classList.toggle('button-theme--active');
  };

  buttonTheme.addEventListener('click', toggleTheme);
};

export default header;