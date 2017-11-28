var request = new XMLHttpRequest();
request.open("GET", "assets/js/data/repos.json", false);
request.send(null);
var my_JSON_object = JSON.parse(request.responseText);

my_JSON_object.forEach(function(element) {
  console.log(element);
  $('.list').append("" +
      "<li class='list__item'>" +
    "<div class='name'>" + element.name + "</div>" + "<div class='avatar'><img src='" + element.owner.avatar_url + "' alt=''></div>" + "<div class='repos_name'>" + element.owner.login + "</div>" + "<div class='repos_url'>" + element.owner.url + "</div>" + "</li>");
});
