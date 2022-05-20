$(function () {
    $.ajax({
      url: 'https://newsapi.org/v2/everything?q=covid-19&sortBy=popularity&apiKey=4bf97956ba344f62b27c04b93108130e',
      method: "get",
    })
      .done(function (data) {
        data.articles.forEach(function (news) {
          $(".news").append(`
          <div class="row">
          <div class="col ">
              <div class="card horizontal">
                <div class="card-image">
                  <img src="${news.urlToImage}">
                </div>
                <div class="card-stacked">
                <span class="card-title">${news.title}</span>
                  <div class="card-content">
                  <p>${news.description}</p>
                  </div>
                  <div class="card-action">
                  <a href="${news.url}" target="_blank">Read More</a>
                  </div>
                </div>
              </div>
          </div>   
      </div> 
                      `);          
        });
      })
      .fail(function (err) {
        console.log(err.responseText);
      });
  });