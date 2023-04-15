let icon = document.querySelector(".icon-suno") || document.querySelector(".icon-moono");
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

let blogData = [
  {
    title: "Hello World！",
    id: "x001",
    TimeRanges: "04/15/2023",
    content: [
      "这个世界似乎充满了虚伪和冷漠，人与人之间的关系变得越来越脆弱。我开始怀疑友谊的真实性，开始对人们的行为和动机产生怀疑。或许我只是一个无法入局的人。",
      "尽管如此，我还是在试图寻找一丝希望和意义。我尽量让自己坚强，尽量去理解他人，尽量去寻找那些真诚的人和温暖的时刻。虽然我时常感到伤心和失望，但我不愿放弃对真理和人性的探求。",
      "或许，我需要重新审视自己，重新认识自己的价值和存在。我应该变得独立和坚韧。我要自我肯定和自我关爱。",
      "很抱歉我的第一篇博客或许有些沉重，但这是我内心真实的感受。我希望将这些情感记录下来，从中找到一些启示和答案。",
    ],
  },
].reverse();

function runderBlogList(data) {
  let str = "";
  data.forEach((item) => {
    str += `<div class="blog-item" id="${item.id}">${item.TimeRanges} ${item.title}</div>`;
  });
  document.querySelector("#blogpage").innerHTML = str;

  document.querySelectorAll(".blog-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      let id = e.target.id;
      let blogDetail = blogData.filter((item) => item.id === id);
      runderBlogDetail(blogDetail[0]);
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

function init() {
  runderBlogList(blogData);

  changeStyle(isLight);

  document.querySelector(".home").addEventListener("click", () => {
    document.querySelector("#homepage").style.display = "block";
    document.querySelector("#blogpage").style.display = "none";
  });
  document.querySelectorAll(".blog").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector("#homepage").style.display = "none";
      document.querySelector("#blogpage").style.display = "block";
      runderBlogList(blogData);
    });
  });

}

init();
