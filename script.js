

$(document).ready(function() {
    
    $("button").on("click", function() {
        const result = $.ajax('https://type.fit/api/quotes').then(function(data) {
            
            let $num = 1 + Math.floor(Math.random() * 1643)
            console.log(JSON.parse(data).length)
            console.log(JSON.parse(data)[$num].text)
            const $div = $("div")
            $div.empty()
            $div.append((JSON.parse(data)[$num].text))
})
        
    })



})

// 1643 = amount of quotes