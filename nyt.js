
// userIn = 'science'
// number = '5'



    $('#searchBtn').on('click', function (e) {
        event.preventDefault(e);
        var userIn = $('#searchTerm').val();
        var number = $('#numRecs').val();
        const eLink = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q' + userIn + '&api-key=oOwAIpv0BiVnY1bd0jOsvBSI5hBmGyc0'

        $.ajax({
            url: eLink,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);
            for (var i = 0; i < number; i++) {
                console.log(response.response.docs[i]);
                const par = $('<h1>');
                par.text(JSON.stringify(response.response.docs[i].headline.main))
                $('#topArt').append(par);
                const par2 = $('<a>');
                par2.text(JSON.stringify(response.response.docs[i].web_url))
                par2.attr('href',response.response.docs[i].web_url)
                par2.attr('target','_blank')
                $('#topArt').append(par2);

            }
        })
        
    })