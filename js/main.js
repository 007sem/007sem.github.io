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
  {
    title: "致幻艺术",
    id: "x003",
    TimeRanges: "05/29/2023",
    content: [
      `赫胥黎的《知觉之门》一书影响并催生了20世纪60年代末的迷幻摇滚乐队，例如Pink Floyd，The Doors，地下丝绒等。其中大门乐队The Doors所指的Door其实就是《知觉之门》。`,
      `书中根据作者服用麦司卡林（mescaline，一种产自美洲的仙人掌提取物，具有强致幻效果）后的感受，言语以及行为做了详细的记录。作者认为麦司卡林是一种对人体无害，但可以使人放大感官的提取物。服用者会感到身边一切的事物都变得有趣起来，在大量的信息中来不及筛选从而出现幻觉。`,
      `作者认为致幻后并非罪恶至极，反而可以在致幻的状态中感受到更多信息，并结合当时的脑科学，教育学等学科认为这种致幻效果在一定情况是对人有利的，而生活哲学家罗素在《幸福之路》一书中也有提及“幸福的秘诀是：让你的兴趣尽量扩大，让你对人对物的反应尽量趋于友善”。而致幻剂可以使大脑处于愉悦放松的状态，并且很安静不会惹事。并且描述了他在致幻状态下观看梵高，克劳德·莫奈等画家的作品时的感受，他认为有些观念是在未致幻时永远不能感受到的，用拉康（著名心理学家）的术语来说就是能指和所指。我们所写的说的的永远是人类定义的符号，而我们真正想传达的是概念的东西，但我们在传达概念的时候又必须需要一个介质，可以是符号（文字），或者声音（语言），通过简单的媒介来传达概念是极其复杂的，而其重点是终点是否能理解“概念”。`,
      `所谓艺术也是通过媒介来传递概念，但媒介换成了音乐或者油画之类的东西。例如我想说“我很难受”不能准确的传达概念，其含糊的地方在于你不知道我是心情压抑还是我的身体不舒服，当然我们可以把语言描述的详细一些，但这仍旧只是个“能指”，你无法准确感受到我想传达的概念，无法深入其中。但艺术可以做到这一点，艺术家们花费几个小时，十几个小时创作出来的作品，其核心只有一个概念，但这种概念在很多情况下只能达到能指，并没有真正传递到概念。其问题所在就是人的感受太浅薄。`,
      `从未有人教过你如何去感受，提高你的感知力。这个社会将这类教育扔给那些鄙弃为怪的人、冒牌货、江湖骗子和业余菜鸟之辈去打理。`,
      `人的心智有两个世界——内在世界和外部世界，而进入内在世界的方式有两种，一种是依赖外界物品酒精或药品等；而第二种则是催眠，他人给我们的催眠或是自我催眠（这个过程有点不知不觉，有点类似精神内耗）。在内在世界当中，人们的感知力提升，迷障将被破除，知觉之门将开，万物显出本相：如期所是，绵延无止。`,
      `但切记，通过第一种方法进入的内在世界会在药效结束的时候醒来，返回外部世界，而第二种则需要一定的自制力，心理学管那些不能返回外部世界的情况称为精神分裂症。`,
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
