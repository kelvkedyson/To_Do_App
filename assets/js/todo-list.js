$(document).ready(function(){
    $('input').css('border-color','blue');

    $('form').on('submit', function(){
        var item = $('#addItem');
        var todo = {item: item.val()};

        $.ajax({
            type: "POST",
            url: "/todo",
            data: todo,
            success: function (data) {
                //do something with the data via a front-end framework
                location.reload();   
            }
        });

        return false;
    });

    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, '-');
        $.ajax({
            type: "DELETE",
            url: "/todo/" + item,
            success: function (data) {
                //do something with a fron-end framework
                location.reload();
            }
        });
    });
});