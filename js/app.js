$(function(){

    let searchIcon = $(`.searchIcon`)
    let searchArea = $(`.searchArea`)
    let cancelIcon = $(`.cancelIcon`)
    let darkBtn = $(`.darkBtn`)
    let lightBtn = $(`.lightBtn`)
    let menuBtn = $(`.menuBtn`)
    let menu = $(`.menu`)
    let active = $(`.active`)
    let body = $(`body`)
    let darkmood = $(`.darkmood`)
    searchIcon.click(function(){
    
    searchArea.fadeIn(1)        

    })

    searchIcon.click(function(){
        searchIcon.hide()
        cancelIcon.show()
    })
    cancelIcon.click(function(){
        searchArea.fadeOut(1)
        searchIcon.show()
        cancelIcon.hide()
    })

    darkBtn.click(function(){
        darkBtn.hide()
        lightBtn.show()
        body.toggleClass(`darkmood`)
    })

    lightBtn.click(function(){
        darkBtn.show()
        lightBtn.hide()
        body.toggleClass(`darkmood`)
    })

    menuBtn.click(function(){
        menu.toggleClass(`active`);
        

    })

})