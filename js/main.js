let icon =
  document.querySelector(".icon-suno") || document.querySelector(".icon-moono");

// true = light, false = dark
function changeStyle(isLight) {
  if (!isLight) {
    document.getElementById("style").href = "css/light.css";
    icon.classList.remove("icon-suno");
    icon.classList.add("icon-moono");
  } else {
    document.getElementById("style").href = "css/dark.css";
    icon.classList.remove("icon-moono");
    icon.classList.add("icon-suno");
  }
}

icon.addEventListener("click", () => {
  if (icon.classList.contains("icon-suno")) {
    changeStyle(false);
  } else {
    changeStyle(true);
  }
});


let blogData = [
    {
        title: "Hello World！",
        id: 'x001',
        TimeRanges: "04/15/2023",
        content:[
            "终于有勇气提笔，主要原因也是个人情绪，想破头也想不出以何种方式缓解，只能写点什么，也许能让自己心情好一点吧。",
            "很抱歉是以这样的方式开始写博客的，但好在有行动，起码结果是好的，有了一个真正属于我的地方，也能给世界留下些什么。",
        ]
    },
].reverse()


function runderBlogList(data){
    let str = ''
    data.forEach((item) => {
        str += `<div class="blog-item" id="${item.id}">${item.TimeRanges} ${item.title}</div>`
    })
    document.querySelector("#blogpage").innerHTML = str

    document.querySelectorAll(".blog-item").forEach(item=>{
        item.addEventListener("click", (e) => {
            let id = e.target.id
            let blogDetail = blogData.filter(item => item.id === id)
            runderBlogDetail(blogDetail[0])
        })
    })
}

function runderBlogDetail(data){
    let str = ''
    str += `<h2>${data.title}</h2>`
    str += `<span class='time'>${data.TimeRanges}</span>`
    data.content.forEach((item) => {
        str += `<p>${item}</p>`
    })
    document.querySelector("#blogpage").innerHTML = str
}


function init(){
    runderBlogList(blogData)
    document.querySelector(".home").addEventListener("click", () => {
        document.querySelector("#homepage").style.display = "block";
        document.querySelector("#blogpage").style.display = "none";
    
    })
    document.querySelector(".blog").addEventListener("click", () => {
        document.querySelector("#homepage").style.display = "none";
        document.querySelector("#blogpage").style.display = "block";
        runderBlogList(blogData)
    })
}

init()






