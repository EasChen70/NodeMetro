//Object with img src, and alt caption properties
class BannerItem {
    constructor(src, caption) {
        this.src = src;
        this.caption = caption;
    }
}

class ServiceItem{
    constructor(service, href){
        this.service = service;
        this.href = href;
    }
}

//array of objects with properties
const BannerItemsData = [
    { src: "assets/service-mani.jpg", caption: "Free To Use Image 1, from Pexel.com" },
    { src: "assets/service-pedi.jpg", caption: "Free To Use Image 2, from Pexel.com" },
    { src: "assets/service-spa.jpg", caption: "Free To Use Image 3, from Pexel.com" }
];

const BannerTextData = [
    {service: "Manicure", href: "manicure"},
    {service: "Pedicure", href: "pedicure"},
    {service: "Spa Combo", href: "spacombo"}
];

// Loop through holders and append images
$(".service:not(.holder-services)").each(function(index){
    const img = $("<img>");
    const currentBannerItem = BannerItemsData[index];
    img.attr("src", currentBannerItem.src)
       .attr("alt", currentBannerItem.caption)
       .css({
            "width": "70%",
            "height": "70%",
            "border-radius": "5%",
            "margin": "5px",
            "min-height": "140px",
            "min-width": "380px"
       });

    $('.hlink').each(function(index){
        $(this).on('click', function(){
            window.location.href = BannerTextData[index].href;
        });
    });

    let transformValue;
    let linkTransform;
    let linkWidth;
    if (index === 0) {
        transformValue = "translate(-163%, 130%)";
        linkTransform = "translate(-322%, 200%)";
        linkWidth = "120px";
    } else if (index === 1) {
        transformValue = "translate(-177%, 130%)";
        linkTransform = "translate(-360%, 205%)";
        linkWidth = "110px"; 
    } else {
        transformValue = "translate(-142%, 130%)";
        linkTransform = "translate(-262%, 210%)";
        linkWidth = "141px";
    }


    const bannerText = $("<h2>");
    const currentTextItem = BannerTextData[index];
    bannerText.text(currentTextItem.service)
              .css({
                    "position": "absolute",
                    "left": "50%",
                    "transform": transformValue,
                    "background-color": "transparent",
                    "font-family": "Georgia, sans-serif",
                    "color": "azure",
                    "text-shadow": "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"
              });

    const link = $("<a>");
    link.attr("href", currentTextItem.href)
        .css({
            "display": "block",
            "width": linkWidth,
            "height": "27px",
            "transform": linkTransform,
            "position": "absolute",
            "opacity": 0
        });
    link.on('click', function(event){
        event.preventDefault();
        window.location.href = $(this).attr("href");
    });      

    $(this).append(img).append(bannerText).append(link);
});


