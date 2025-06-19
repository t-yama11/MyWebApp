// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // 日付の初期値を今日に設定
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("date").value = today;

  // 時刻（時・分）のセレクトボックスに値を設定
  populateTimeOptions("bedtimeHour", 0, 23);
  populateTimeOptions("bedtimeMinute", 0, 59, 1);
  populateTimeOptions("wakeHour", 0, 23);
  populateTimeOptions("wakeMinute", 0, 59, 1);

  // 入眠までの時間（0〜60分、5分刻み）
  populateTimeOptions("sleepLatency", 0, 60, 5);

  // ラジオボタンの生成（満足度と気分：1〜5）
  createRadioButtons("satisfaction", "satisfaction", 1, 5);
  createRadioButtons("mood", "mood", 1, 5);
});

// 時間用のセレクトボックスの生成関数
function populateTimeOptions(id, start, end, step = 1) {
  const select = document.getElementById(id);
  for (let i = start; i <= end; i += step) {
    const option = document.createElement("option");
    option.value = i.toString().padStart(2, "0");
    option.textContent = i.toString().padStart(2, "0");
    select.appendChild(option);
  }
}

// ラジオボタンの生成関数
function createRadioButtons(containerId, name, start, end) {
  const container = document.getElementById(containerId);
  for (let i = start; i <= end; i++) {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = i;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(i.toString()));
    container.appendChild(label);
  }
}
