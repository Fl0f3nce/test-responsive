/* Alexander Grober */
/* Version 0.9 2019-03-23 12:00 */
"use strict";
function ielm_scroll_spy_mode()
{
  var CNT = [0, 0, 0, 0, 0, 0];
  var $nav = $("<nav>").addClass("bs-docs-sidebar");
  var $ul = $("<ul>").prop("id", "sidebar").addClass("nav nav-stacked fixed");
  var $appendix, $lastLI;
  $('._ielm_common_inside_content_navigation > section, ._ielm_common_inside_content_navigation > section > div:not(._ielm_common_inside_content_navigation_section_text)').each(function (k, v)
  {
    var $li = $("<li>");
    if ($(v).is("section"))
    {
      CNT[0]++;
      CNT[1] = 0;
      $(v).addClass("group");
      $appendix = $ul;
      $lastLI = $li;
    } else
    {
      CNT[1]++;
      $(v).addClass("subgroup");
      $appendix = $("<ul>").addClass("nav nav-stacked");
      $lastLI.append($appendix);
    }
    var id = "grundlagen-" + CNT[0] + "-" + CNT[1];
    var title = ($(v).find("h1, h2").is("h1")) ? CNT[0] + ". " : CNT[0] + "." + CNT[1] + ". ";
    title += $(v).find("h1, h2").html();
    $(v).prop("id", id);
    var $a = $("<a>").prop("href", "#" + id).html(title);
    $li.append($a);
    $appendix.append($li);
  });
  $("body").prepend($nav.append($ul));
  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 100
  });
  if ($("#sidebar li.active").length === 0)
  {
    $("#sidebar li").eq(0).addClass("active");
  }
}
$(document).ready(function ()
{
  ielm_scroll_spy_mode();
  var offset = 90;
  $('#sidebar li a').click(function (event)
  {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
    $("html").scrollLeft(0);
  });
});
