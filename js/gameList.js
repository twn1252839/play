for (let i = 1; i < 8; i++) {
  $(".gameList" + [i] + "img").click(function () {
    $(this).attr(
      "src",
      "./img/桌機index_img/GAME/gameList/List" + [i] + ".png"
    );
    $(".gameList" + [i] + "img").attr(
      "src",
      "./img/桌機index_img/GAME/gameList/" + [i] + ".png"
    );
  });
}
