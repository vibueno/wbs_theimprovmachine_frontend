const changeBackground = (cssClass: string) => {
  document.body.className = '';
  document.body.classList.add(cssClass);
};

export { changeBackground };
