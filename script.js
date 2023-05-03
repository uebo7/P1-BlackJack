

$(document).ready(function() {
    
    $("button").on("click", function() {
        const result = $.ajax('https://type.fit/api/quotes').then(function(data) {
        let $num = 1 + Math.floor(Math.random() * 1643);
        const $div = $("#quote");
        $div.empty();
        $div.append((JSON.parse(data)[$num].text));
})
    })
})

