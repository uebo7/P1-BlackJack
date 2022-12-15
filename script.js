$.ajax('https://type.fit/api/quotes').then(function(data) {console.log(data)})

$(document).ready(function() {
    
    $("button").on("click", function() {
        let $num = 1 + Math.floor(Math.random() * 221347)
        const $div = $("div")
        $div.empty()
        $div.append($num)
    })



})

// 221347 = amount of quotes