//Object with img src, and alt caption properties
class GalleryItem {
    constructor(src, caption) {
        this.src = src;
        this.caption = caption;
    }
}

//array of objects with properties
const galleryItemsData = [
    { src: "assets/gallerypic1.jpg", caption: "Free To Use Image 1, from Pexel.com" },
    { src: "assets/gallerypic2.jpg", caption: "Free To Use Image 2, from Pexel.com" },
    { src: "assets/gallerypic3.jpg", caption: "Free To Use Image 3, from Pexel.com" },
    { src: "assets/gallerypic4.jpg", caption: "Free To Use Image 4, from Pexel.com" },
    { src: "assets/gallerypic5.jpg", caption: "Free To Use Image 5, from Pexel.com" },
    { src: "assets/gallerypic6.jpg", caption: "Free To Use Image 6, from Pexel.com" }
];

// Loop through each row, populate with image src from the GalleryItem instances
$('.holder').each(function(index){
    const img = $('<img>');
    const currentGalleryItem = galleryItemsData[index % galleryItemsData.length];
    img.attr("src", currentGalleryItem.src)
       .attr("alt", currentGalleryItem.caption) // Set alt attribute to the image caption
       .css({
            "max-width": "100%",
            "height": "auto",
            "display": "block",
            "margin-left": "auto",
            "margin-right": "auto"
       });
    $(this).append(img);   

    const tooltipContainer = $('<div>').addClass("tooltip");
    // Append image to tooltip container
    tooltipContainer.append(img);

    // Create tooltip text   
    const tooltipText = $('<span>').addClass("tooltiptext");
    tooltipText.text(img.attr("alt"));
    // Append tooltip text to tooltip container
    tooltipContainer.append(tooltipText);
    // Append tooltip container to holder
    $(this).append(tooltipContainer);

    img.on('click', function(){
        const zoomedimg = $('<img>');
        zoomedimg.attr("src", img.attr("src"))
                 .attr("alt", img.attr("alt"))
                 .addClass("zoomed-image");

        // add navigation arrows
        const leftArrow = $("<button>").addClass('arrow left').html('&#11164'); // Add left arrow symbol
        const rightArrow = $("<button>").addClass('arrow right').html('&#11166'); // Add right arrow symbol
        $("body").append(leftArrow).append(rightArrow);

        // initialize index for navigating images
        let currentindex = index;

        // event listeners for buttons
        leftArrow.on('click', function(){
            navigate(-1);
        });

        rightArrow.on('click', function(){
            navigate(1);
        });
        
        //navigation function checks for bounds, and iterates index
        function navigate(direction){
            currentindex += direction;
            if(currentindex < 0){
                currentindex = galleryItemsData.length - 1;
            }else if(currentindex >= galleryItemsData.length){
                currentindex = 0;
            }
            zoomedimg.attr("src", galleryItemsData[currentindex].src) 
                     .attr("alt", galleryItemsData[currentindex].caption); // Update alt attribute
        }
        //when user clicks out of zoomed image, remove the appended children
        zoomedimg.on('click', function(){
            zoomedimg.remove()
            leftArrow.remove()
            rightArrow.remove();
        });
        $("body").append(zoomedimg);
    });
});


