
function selectFeeling(feeling, emoji) {
  document.getElementById("feeling-text").value = emoji + " " + feeling;
}

function submitFeeling() {
  const feeling = document.getElementById("feeling-text").value;
  const responseBox = document.getElementById("response");

  if (!feeling) {
    alert("لطفاً ابتدا احساست را انتخاب یا وارد کن!");
    return;
  }

  const now = new Date();
  const timeStamp = now.toLocaleString("fa-IR");
  const stored = JSON.parse(localStorage.getItem("feelings") || "[]");
  stored.push({ feeling, timeStamp });
  localStorage.setItem("feelings", JSON.stringify(stored));

  const responses = [
    "ای جان! چطوری رفیق جون‌جون؟",
    "بگو ببینم چی شده گل من؟",
    "الهی! بیا بغلت کنم از غصه‌هات کم شه.",
    "آفرین به خودت که احساساتت رو بیان می‌کنی!",
    "تو همیشه قهرمان قصه‌ی خودتی!",
    "من همیشه اینجام، حتی وقتی دلت گرفته باشه.",
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  responseBox.innerText = `جناب‌خان: ${randomResponse}`;
  responseBox.style.display = "block";
}

function goToHistory() {
  window.location.href = "history.html";
}
