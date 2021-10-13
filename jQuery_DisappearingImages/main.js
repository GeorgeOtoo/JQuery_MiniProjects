// $(function(){
//     $(".image").click(function(){
//         $(this).hide();
//     });

//     $("button").click(function() {
//         $("img").show();
//     });

// });
    //another way to about this problem

    var insideElement = "";

    for(var i=0; i<8; i++){
        insideElement += '<img class="image" src="https://st.depositphotos.com/1724125/4382/v/950/depositphotos_43829729-stock-illustration-cartoon-ninja.jpg" alt="image 1">';
    }
    insideElement += '<button id="restore"> Restore</button>';

    $(function(){
        $("#main-content").append(insideElement);

        $(".image").click(function(){
            $(this).hide("slow");
        });

        $("button").click(function() {
            $("img").show();
        });
    });





