$(document).ready(function(){
    //jquery select button + add event listener
    $("#bookingbutton").on('click', function(){
        //this makes sure that there is only one instance of a data form at a time
        if ($(".data-form").length === 0){
        //create dataform div
        const dataForm = $("<div>");
        //add class
        dataForm.addClass("data-form");
        //css styling taken from the htmlajax.js
        dataForm.css({
            "height": "500px",
            "width": "600px",
            "background-color": "azure",
            "border-width": "2px",
            "border-style": "solid",
            "position": "fixed",
            "zIndex": "100",
            "transform": "translate(0%, -30%)",
            "border-radius": "2%",
            "overflow": "auto"
        }).on('click', function(){
            //click on dataform to exit
            $(this).remove();
        });
        //insert
        $(this).before(dataForm);
        //loaddata
        loadData('data/data2.html');
    }
    
});

    function loadData(filepath){
        //provide filepath, type of request, and what to do with successful response, got help from w3 schools
        $.ajax({url: filepath, type: 'GET', success: function(response){
            $('.data-form').html(response);
        }})
    }
})
