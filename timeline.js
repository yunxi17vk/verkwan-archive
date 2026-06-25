fetch("data/timeline.json")
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById("timeline");

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${item.date}</h3>
        <p>${item.text}</p>
      `;
      box.appendChild(div);
    });
  });
