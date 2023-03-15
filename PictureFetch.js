document.getElementById("button-fetch").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.getElementById("input-date").value;

  const url = `https://api.nasa.gov/planetary/apod?api_key=nxBVWZpogZtathDo74qBgomSqZcf00gumMcgzJnz&date=${choice}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.media_type === "image") {
        document.getElementById("img-nasa").src = data.url;
      } else if (data.media_type === "video") {
        document.getElementById("video-nasa").src = data.url;
      }
      document.getElementById("nasa-text").innerText = data.explanation;
      console.log(data);
    });
}
