const getImage = async () => {
  try {
    const apiKey = "Ye1NSj9RrqHmp1cp1a9F0rbxkQwC7Urn";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

getImage();
