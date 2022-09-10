

const api_key = "AIzaSyAiot2IUbH1BZqaQIeB-u1q86pFAs3UvSM";


let PopularInRegion = async () => {
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=40&key=${api_key}`;
  let res = await fetch(url);
  let data = await res.json();
  let items = data.items;
  append2(items);
  console.log(items);
};
let search = async () => {
  let query = document.querySelector("#query").value;

  let data = await getData(query);
  console.log("data:", data);
  append(data);
};

let getData = async (query) => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
  let res = await fetch(url);
  let data = await res.json();
  let items = data.items;

  return items;

};

let append = (data) => {
  let cont = document.querySelector("#container");
  cont.innerHTML = "";
  data.forEach(
    ({
      snippet: {
        title,
        channelTitle,
        thumbnails: {
          medium: { url },
        },
      },
      id: { videoId },
    }) => {
    

      let thumbnail = document.createElement("img");
      thumbnail.setAttribute("class", "thumbnail");
      thumbnail.src = url;

      let image_box = document.createElement("div");
      image_box.setAttribute("class", "image_box");
      image_box.append(thumbnail);

      let h3 = document.createElement("h4");
      h3.setAttribute("class", "videoTitle");
      h3.innerText = title;

      let title_box = document.createElement("div");
      title_box.setAttribute("class", "title_box");
      title_box.append(h3);

      let channelName = document.createElement("p");
      channelName.setAttribute("class", "videoChannel");
      channelName.innerText = channelTitle;

      let desc_box = document.createElement("div");
      desc_box.setAttribute("class", "desc_box");
      desc_box.append(title_box, channelName);

     

      let card = document.createElement("div");
      card.setAttribute("class", "video");
      card.onclick = () => {
        saveVideo(videoId);
      };

      card.append(image_box, desc_box);
      cont.append(card);
    }
  );
};
let append2 = (data) => {
  let cont = document.querySelector("#container");
  cont.innerHTML = "";
  data.forEach(
    ({
      snippet: {
        title,
        channelTitle,
        thumbnails: {
          medium: { url },
        },
      },
      id,
    }) => {
      

      let thumbnail = document.createElement("img");
      thumbnail.setAttribute("class", "thumbnail");
      thumbnail.src = url;

      let image_box = document.createElement("div");
      image_box.setAttribute("class", "image_box");
      image_box.append(thumbnail);

      let h3 = document.createElement("h4");
      h3.setAttribute("class", "videoTitle");
      h3.innerText = title;

      let title_box = document.createElement("div");
      title_box.setAttribute("class", "title_box");
      title_box.append(h3);

      let channelName = document.createElement("p");
      channelName.setAttribute("class", "videoChannel");
      channelName.innerText = channelTitle;

      let desc_box = document.createElement("div");
      desc_box.setAttribute("class", "desc_box");
      desc_box.append(title_box, channelName);

  

      let card = document.createElement("div");
      card.setAttribute("class", "video");
      card.onclick = () => {
        saveVideo(id);
      };

      card.append(image_box, desc_box);
      cont.append(card);
    }
  );
};

let saveVideo = (data, id) => {
  localStorage.setItem("video", JSON.stringify(data));
  localStorage.setItem("video2", JSON.stringify(id));
  window.location.href = "PlayVideo.html";
};

document.querySelector(".logo").addEventListener("click", reloadIndex);

function reloadIndex() {
  console.log('"hiya":', "hiya");
  window.location.href = "index.html";
}
