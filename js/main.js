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
  {
    title: "弯道超车",
    id: "x002",
    TimeRanges: "04/21/2023",
    content: [
      `看别人骑摩托车或电动车时会发生一个现象。在骑车过弯时会发生"压弯"（hanging off 贴地飞行），通过改变主体的重心来控制车辆的方向，其目的是用更快的速度过弯。然而，没有正确的掌握这种技术，或者在不适当的路况下使用，其风险是很大的——会失去平衡 ，轮胎打滑。`,
      `我认为是否压弯是一种取舍，效率和危险性是成正比的，而成功压弯的一个重要因素即是否够胆；这是一种对自我信任的体现，即自信。其次是大量的练习，从认知进化到肌肉记忆。我是不太会压弯的，倒不是不敢（我在装），只是我想慢慢骑。`,
      `在生活中我们也会遇到类似压弯的情况，即提高效率，也提升了危险性。这是一个软技能——没有人会因为你过弯速度很快而给你饭吃。但结合硬技能，或者在生活中合理的运用，可以很轻松的超过许多人。虽然我很讨厌排名这种形式，但不得不说我们确实有享受过高名次给我们带来的资源和优越感。`,
      `我认为会压弯的人或多或少都会比常人更敢于尝试，更想主动挑战，也可能是骑车骑多了比较够胆。生活中同样的存在很多机遇，够胆的人会压弯，胆小的就看别人走在前面，甚至楞在原地。不得不承认这种品质是好的，过程和结果都是好的，但要是压弯压得翻车了，胆小的人就有话可以讲了。`
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
