document.addEventListener("DOMContentLoaded", () => {
  // ▼ ヘルパー関数
  function appendOptions(selectElem, values, suffix = '', zeroPad = false) {
    values.forEach(val => {
      const option = document.createElement("option");
      option.value = val;
      option.textContent = zeroPad ? String(val).padStart(2, '0') + suffix : val + suffix;
      selectElem.appendChild(option);
    });
  }

  // ▼ 時間（時: 0〜23）・分（0〜55, 5分刻み）
  appendOptions(document.getElementById("bedtimeHour"), [...Array(24).keys()], "時");
  appendOptions(document.getElementById("bedtimeMinute"), [...Array(12).keys()].map(i => i * 5), "分", true);

  appendOptions(document.getElementById("wakeHour"), [...Array(24).keys()], "時");
  appendOptions(document.getElementById("wakeMinute"), [...Array(12).keys()].map(i => i * 5), "分", true);

  // ▼ 入眠までの時間（0〜60分を5分刻み）
  appendOptions(document.getElementById("sleepLatency"), [...Array(13).keys()].map(i => i * 5), "分");

  // ▼ 現在の日付を初期値に設定（yyyy-mm-dd）
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  document.getElementById("date").value = `${yyyy}-${mm}-${dd}`;

  // ▼ ラジオボタンの生成関数
  function createRadioButtons(containerId, name, range) {
    const container = document.getElementById(containerId);
    range.forEach(val => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = name;
      input.value = val;
      label.appendChild(input);
      label.append(` ${val}`);
      container.appendChild(label);
    });
  }

  // ▼ 満足度・気分（1〜5）
  createRadioButtons("satisfaction", "satisfaction", [1, 2, 3, 4, 5]);
  createRadioButtons("mood", "mood", [1, 2, 3, 4, 5]);

  // ▼ 時刻（就寝）初期値を現在時刻に設定
  document.getElementById("bedtimeHour").value = today.getHours();
  const roundedMinutes = Math.floor(today.getMinutes() / 5) * 5;
  document.getElementById("bedtimeMinute").value = roundedMinutes;
});
