// hoverList
let hoverListIItem = document.querySelectorAll(".hoverListIItem");
let hoverList = document.querySelectorAll(".hoverList");
// console.log(hoverListIItem);
for (let i = 0; i < hoverList.length; i++) {
  $(hoverListIItem).hide();
  $(hoverList[i]).hover(function () {
    $(hoverListIItem).hide();
    $(hoverListIItem[i]).show();
  });
  $(hoverListIItem[i]).hover(
    function () {
      $(this).show();
    },
    function () {
      $(this).hide();
    }
  ); // $(".hoverListIItem .col").hover(function () {
  //   $(this).addClass('uk-animation-shake');
  // }
  // );
}
