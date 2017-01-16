var currentStudent = 0;

$(document).ready(function(){

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);

        data.forEach(function(upsilon) {

        });//forEach function

          appendDom(data[currentStudent]);


          //Next button
          $('.next').on('click', function () {
            if (currentStudent == data.length - 1) {
              currentStudent = 0;
            } else {
              currentStudent++;
            }
            changeStudent(data, currentStudent);
            console.log(currentStudent);
          });

          //Prev button
          $('.prev').on('click', function () {
            if (currentStudent == 0) {
              currentStudent = data.length-1;
            } else {
              currentStudent--;
            }
            changeStudent(data, currentStudent);
            console.log(currentStudent);
          });

      }//Success Function
    });//AJAX
  }); //Document Ready function

  //Removes old student div and switches to current student div
  function changeStudent (data, currentStudent) {
      $('.ajax-stuff').children('div').remove();
      appendDOM(data[currentStudent]);
  };

  //Appends dom with student information
  function appendDom(upsilon) {
    var $upsilonDiv = $('<div class="upsilon"></div>');

    // $upsilonDiv.append('img')
    $upsilonDiv.append('<h2>'+ upsilon.name +'</h>')
    $upsilonDiv.append('<p>'+ upsilon.githubUserName +'</p>')
    $upsilonDiv.append('<p>'+ upsilon.shoutout +'</p>')

    $('.ajax-stuff').append($upsilonDiv);
  };
