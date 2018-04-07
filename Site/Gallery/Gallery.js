function CreateGallery() {
    var imagePaths = [
        "Image/1.jpg", "Image/2.jpg", "Image/3.jpg", "Image/4.jpg", "Image/5.jpg", "Image/6.jpg", "Image/7.jpg",
        "Image/8.jpg",
        "Image/9.jpg"
    ];
    var gallery = document.createElement("div");
    gallery.id = "gallery";

    var view = document.createElement("div");
    view.id = "view";
   
    for (var i = 0; i < imagePaths.length; i++) {
        var imgPath = imagePaths[i];
        var img = document.createElement("img");
        img.src = imgPath;
        img.className = "small";
        img.addEventListener("mouseover", mouseOverHandler);
        img.addEventListener("mouseout", mouseOutHandler);
        img.addEventListener("click", sizeHandler);
        gallery.appendChild(img);
    }

    document.body.appendChild(view);
    document.body.appendChild(gallery);

    function mouseOverHandler() {
        this.style.opacity = 0.5;
    }

    function mouseOutHandler() {
        this.style.opacity = 1;
    }

    //resize image on click
    function sizeHandler() {
        if (this.className === "small") {
            this.className = "big";
            view.appendChild(this);
            gallery.style.opacity = 0;
            view.style.opacity = 1;
        }

       else  if (this.className === "big") {
            this.className = "small";
            view.removeChild(this);
            gallery.appendChild(this);
            gallery.style.opacity = 1;
            view.style.opacity = 0;

        }

    }
}
  



