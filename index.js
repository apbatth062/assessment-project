var query;
window.onload = function () {
    $.get(`https://newsapi.org/v2/top-headlines?country=CA&category=business&apiKey=40f75048a7984d86bcbf8feadfadbcb5`,
        function (data, status) {


            for (let i = 0; i < 8; i++) {
                $('ul').append('<li class="title">' + '<h3>' + data.articles[i].title + '</h3>' + '</li>')
                $('ul').append('<li class="list-group-item">' + data.articles[i].description + '</li>')
                $('ul').append('<li class="list-group-item"> <img src=' + data.articles[i].urlToImage+'  height="400px" width="620px" alt="No image found"> </img> </li>')
                $('ul').append('<hr>')
                
            }
        });

}

//for searching country news

$(document).ready(function () {
    $("#searchC").click(function () {
    
        query = $("#query").val();


        $.get(`https://newsapi.org/v2/top-headlines?country=${query}&category=business&apiKey=40f75048a7984d86bcbf8feadfadbcb5`,
            function (data, status) {
               $('ul').remove();
                $('.ResultNews').append('<ul> </ul>')
                for (let i = 0; i < 8; i++) {
                    $('ul').append('<li class="title">' + '<h3>' + data.articles[i].title +'</h3>' + '</li>')
                    $('ul').append('<li class="list-group-item">' + data.articles[i].description +'</li>')
                        $('ul').append('<li class="list-group-item"> <img src=' + data.articles[i].urlToImage+'  height="400px" width="620px" alt="No image found"> </img> </li>')
                    $('ul').append('<hr>')
                    
                }
            });
    });
});

//for printing articles

$(document).ready(function () {
    $("#Articles").click(function () {
       $.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=40f75048a7984d86bcbf8feadfadbcb5`,
            function (data, status) {
               $('ul').remove();
                $('.ResultNews').append('<ul> </ul>')
                for (let i = 0; i < 8; i++) {
                    $('ul').append('<li class="title">' + '<h3>' + data.articles[i].title + '</h3>' + '</li>')
                    $('ul').append('<li class="list-group-item">' + data.articles[i].description +  '</li>')
                        $('ul').append('<li class="list-group-item">'+"publishedAt : " + data.articles[i].publishedAt +'</li>')
                        $('ul').append('<li class="list-group-item"> <img src=' + data.articles[i].urlToImage+'  height="400px" width="620px" alt="No image found"> </img> </li>')
                    $('ul').append('<hr>') 
                    
                }
            });
    });
});

// bit coin news

$(document).ready(function () {
    $("#bitcoin").click(function () {
       $.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=40f75048a7984d86bcbf8feadfadbcb5`,
            function (data, status) {
               $('ul').remove();
                $('.ResultNews').append('<ul> </ul>')
                for (let i = 0; i < 8; i++) {
                    $('ul').append('<li class="title">' + '<h3>' + data.articles[i].title + '</h3>' + '</li>')
                    $('ul').append('<li class="list-group-item">' + data.articles[i].description +  '</li>')
                        $('ul').append('<li class="list-group-item"> <img src=' + data.articles[i].urlToImage+'  height="400px" width="620px" alt="No image found"> </img> </li>')
                    $('ul').append('<hr>') 
                    
                }
            });
    });
});
