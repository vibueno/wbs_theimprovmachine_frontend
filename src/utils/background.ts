const setBackground = (cssClass: string) => {
  document.body.className = '';
  document.body.classList.add(cssClass);
};

export { setBackground };
