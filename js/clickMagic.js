/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
   $("body").click(function(e) {
       var a = new Array("湖北","河南","湖南","浙江","重庆");
       var $i = $("<span/>").text(a[a_idx]);
       a_idx = (a_idx + 1) % a.length;
       var x = e.pageX,
       y = e.pageY;
       $i.css({
           "z-index": 9999,
           "top": y - 25,
           "left": x,
           "position": "absolute",
           "font-weight": "bold",
           "color": "#ff6651"
       });
       $("body").append($i);
       $i.animate({
           "top": y - 280,
           "opacity": 0
       },
       1500,
       function() {
           $i.remove();
       });
   });
});