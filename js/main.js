window.onload = function () {
  const now = new Date();

  // 日付の初期値を今日に設定（yyyy-mm-dd形式）
  const dateInput = document.getElementById("date");
  dateInput.value = now.toISOString().split("T")[0];

  // 時・分のプルダウンを生成
  generateOptions("bedHour", 0, 23);
  generateOptions("bedMinute", 0, 59);
  generateOptions("wakeHour", 0, 23);
  generateOptions("wakeMinute", 0, 59);
  generateOptions("sleepLatency", 0, 60, 5);

  // 就寝時間に現在時刻をセット
  document.getElementById("bedHour").value = now.getHours();
  document.getElementById("bedMinute").value = now.getMinutes();
};

// 時刻や入眠時間用のプルダウン生成関数
function generateOptions(selectId, start, end, step = 1) {
  const select = document.getElementById(selectId);
  for (let i = start; i <= end; i += step) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = String(i).padStart(2, "0");
    select.appendChild(option);
  }
}
