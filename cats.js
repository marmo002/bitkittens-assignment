document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('button.summon-cats');

  var ulTag = document.getElementById('list');
  var visitors = document.querySelectorAll('li');
  var list = []
  for (var i = 0; i < visitors.length; i++) {
    list.push(visitors[i].innerText);
  }

  button.addEventListener('click', function(){

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON',
      data: {
        number: 5
      }
    }).done(function(response){
      var catBoxes = document.querySelectorAll('.cat-box');
      var numb = 0;
      response.cats.forEach(function(cat){
        var catBox = catBoxes[numb];
        numb ++;
        catBox.innerHTML = ""
        var imgTag = document.createElement('img');
        imgTag.src = cat.photo;
        imgTag.alt = 'Photo of ' + cat.name;
        catBox.append(imgTag);

        if (list.includes(cat.name)) {

        } else {
          list.push(cat.name);
          var li = document.createElement('li');
          li.innerText = cat.name;
          ulTag.append(li);
        }

      });
    });

  });

});
