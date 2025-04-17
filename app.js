const select = document.getElementById("friend-select");
const image = document.getElementById("friend-image");
const quote = document.getElementById("quote");

const quotes = [
  "تو خیلی باارزشی، حتی اگه دیگران نفهمن!",
  "اشکالی نداره گاهی ناراحت باشی، قوی بودن یعنی ادامه دادن.",
  "مرز داشتن نشونه احترام به خودته.",
  "تو حق داری بگی «نه» وقتی راحت نیستی."
];

select.addEventListener("change", () => {
  image.src = select.value;
});

quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
