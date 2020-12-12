const apiKey = "Ye1NSj9RrqHmp1cp1a9F0rbxkQwC7Urn";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
