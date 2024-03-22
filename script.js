
$(document).ready(function(){

    // $(".hero-page .ap1").waypoint(function(){
    //     $(".hero-page .ap1").addClass(
    //         "animate__animated animate__zoomIn"
    //     )
    // }, {offset: "100%"})
    
    $(".hero-page .ap1").waypoint(function(){
        $(".hero-page .ap1").addClass(
            "animate__animated animate__zoomIn"
        )
    }, {offset: "100%"})

    $(".hero-page input").waypoint(function(){
        $(".hero-page input").addClass(
            "animate__animated animate__rotateInUpLeft"
        )
    }, {offset: "100%"})

    $(".hero-page .ap2").waypoint(function(){
        $(".hero-page .ap2").addClass(
            "animate__animated animate__zoomIn"
        )
    }, {offset: "100%"})


    $(".headline p, .headline h1").waypoint(function(){
        $(".headline p, .headline h1").addClass(
            "animate__animated animate__bounceIn"
        )
    }, {offset: "70%"})
    
    $(".cetegory .box").waypoint(function(){
        $(".cetegory .box").addClass(
            "animate__animated animate__slideInUp"
        )
    }, {offset: "60%"})
    

    $(".headline2 p, .headline2 h1").waypoint(function(){
        $(".headline2 p, .headline2 h1").addClass(
            "animate__animated animate__bounceIn"
        )
    }, {offset: "70%"})
    
    $(".boxes2 .box2-1").waypoint(function(){
        $(".boxes2 .box2-1").addClass(
            "animate__animated animate__slideInUp"
        )
    }, {offset: "60%"})

    $(".boxes2 .box2-2").waypoint(function(){
        $(".boxes2 .box2-2").addClass(
            "animate__animated animate__slideInUp"
        )
    }, {offset: "60%"})

    $(".boxes2 .box2-3").waypoint(function(){
        $(".boxes2 .box2-3").addClass(
            "animate__animated animate__slideInUp"
        )
    }, {offset: "60%"})


    $(".topics .b1").waypoint(function(){
        $(".topics .b1").addClass(
            "animate__animated animate__flipInY"
        )
    }, {offset: "60%"})


    $(".form .headline3").waypoint(function(){
        $(".form .headline3").addClass(
            "animate__animated animate__bounceIn"
        )
    }, {offset: "60%"})

    // $(".hero-page p:nth-child(1)").waypoint(function(){
    //     console.log("Top")
    // })
   
    //Drop-Down//
    $(".menu-item i").click(function(){
        $(".menu-item i ul").toggle()
    }) 

});