$(document).ready(function () {
  $("#div1").click(function () {
    $(this).css({
      background:
        "url('https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/26071254/mengenal-fakta-menarik-seputar-kucing-anggora-turki-halodoc.jpg.webp')",
    });
    document.getElementById("audioKucing").play();
  });

  $("#div2").click(function () {
    $(this).css({
      background:
        "url('https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2019/02/05/1874366312.jpg')",
    });
    document.getElementById("audioSerigala").play();
  });

  $("#div3").click(function () {
    $(this).css({
      background:
        "url('https://www.poultryindonesia.com/wp-content/uploads/2021/03/ayam-6.jpg')",
    });
    document.getElementById("audioAyam").play();
  });

  $("div").mouseout(function () {
    $(this).css({
      background: "green",
    });
  });
});
