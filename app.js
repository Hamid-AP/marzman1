const listenerImage = document.getElementById("listener-image");
const listenerSelect = document.getElementById("listener-select");

const images = {
  jenabkhan: "img/jenabkhan.png",
  kolahghermezi: "img/kolahghermezi.png",
  elsa: "img/elsa.png",
  ladybug: "img/ladybug.png"
};

listenerSelect.addEventListener("change", () => {
  const val = listenerSelect.value;
  listenerImage.innerHTML = `<img src="${images[val]}" alt="${val}" />`;
});