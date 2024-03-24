//when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    //get booking buttons found in service pages
    let bookingbuttons = document.querySelectorAll(".booking");

    //nodelist, so apply eventlistener to each element
    bookingbuttons.forEach(function(bookNow){
        bookNow.addEventListener('click', function(){
            //create popup form when button clicked
            const dataForm = document.createElement("div");
            //give a class name
            dataForm.classList.add("data-form");
            //style into simple white block
            dataForm.style.height = "500px";
            dataForm.style.width = "600px";
            dataForm.style.backgroundColor = "azure";
            dataForm.style.border = "2px solid"
            dataForm.style.position = "fixed";
            dataForm.style.zIndex = "100";
            dataForm.style.transform = "translate(0%, -30%)";
            dataForm.style.borderRadius = "2%";
            dataForm.style.overflow = "auto";
            //if the dataform isn't create yet, insert ontop of the button + load data
            if(!bookNow.parentNode.contains(document.querySelector(".data-form"))){
                bookNow.parentNode.insertBefore(dataForm, bookNow);
                loadData('data/data.html');
            };
            //temporary resolution to exit out of form
            dataForm.addEventListener('click', function(){
                bookNow.parentNode.removeChild(dataForm);
            });
        });
    })



    function loadData(filepath){
        //newxmlhttprequest taken from lab/inclass
        let xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    //populate with data
                    document.querySelector(".data-form").innerHTML = xhr.responseText;
                } else{
                    console.error("Error:", xhr.statusText);
                }
            }
        };
        xhr.open('GET', filepath, true);
        xhr.send();
    }
});