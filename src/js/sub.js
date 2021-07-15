export function showAlert() {
  const alertButton = document.getElementById("js-alert-button");
  alertButton.addEventListener("click", () => {
    alert("ボタンがクリックされた");
  });
}