let icon =
  document.querySelector(".icon-suno") || document.querySelector(".icon-moono");
let isLight = !isNight();

function isNight() {
  let now = new Date();
  let hour = now.getHours();
  if (hour > 18 || hour < 6) {
    return true;
  } else {
    return false;
  }
}

// true = light, false = dark
function changeStyle(isLight) {
  let html = document.querySelector("html");
  if (!isLight) {
    icon.classList.remove("icon-suno");
    icon.classList.add("icon-moono");

    html.classList.remove("light");
    html.classList.add("dark");
  } else {
    icon.classList.remove("icon-moono");
    icon.classList.add("icon-suno");

    html.classList.remove("dark");
    html.classList.add("light");
  }
}

icon.addEventListener("click", () => {
  isLight = !isLight;
  changeStyle(isLight);
});



async function getData() {
  return fetch("./js/log.md")
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      return res.split("\n");
    });
}

function filterData(data) {
  let res = [];
  let temp = { title: "", id: "", TimeRanges: "", content: [] };
  data.forEach((item, index) => {
    if (item.length == 1) return;
    if (item.startsWith("##")) {
      let title = item.replace("##", "").trim();
      temp.title = title;
      return;
    }
    if (item.startsWith("*")) {
      // let TimeRanges = item.replaceAll("*", "").trim();
      // 使用正侧表达式
      let TimeRanges = item.replace(/\*/g, "").trim();

      temp.TimeRanges = TimeRanges;
      return;
    }
    if (item.startsWith("--")) {
      res.push(temp);
      temp = { title: "", id: "", TimeRanges: "", content: [] };
      return;
    }
    temp.content.push(item);
  });
  res.push(temp);
  res.forEach((item, index) => {
    item.id = "x00" + (index + 1);
  });
  return res;
}

function runderBlogList(data) {
  let str = "";
  data.forEach((item) => {
    str += `<div class="blog-item" id="${item.id}">${item.TimeRanges} ${item.title}</div>`;
  });
  document.querySelector("#blogpage").innerHTML = str;

  document.querySelectorAll(".blog-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      let id = e.target.id;
      let find = data.filter((item) => item.id === id)[0];
      runderBlogDetail(find);
    });
  });
}

function runderBlogDetail(data) {
  let str = "";
  str += `<h2>${data.title}</h2>`;
  str += `<span class='time'>${data.TimeRanges}</span>`;
  data.content.forEach((item) => {
    str += `<p>${item}</p>`;
  });
  document.querySelector("#blogpage").innerHTML = str;
}

async function init() {
  let data = await getData();
  data = filterData(data).reverse();
  runderBlogList(data);

  changeStyle(isLight);

  document.querySelector(".home").addEventListener("click", () => {
    document.querySelector("#homepage").style.display = "block";
    document.querySelector("#blogpage").style.display = "none";
  });
  document.querySelectorAll(".blog").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector("#homepage").style.display = "none";
      document.querySelector("#blogpage").style.display = "block";
      runderBlogList(data);
    });
  });
}

init();
