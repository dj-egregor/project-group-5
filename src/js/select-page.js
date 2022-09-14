onload = function () {
  for (var lnk = document.links, j = 0; j < lnk.length; j++)
    if (lnk[j].href == document.URL)
      lnk[j].style.cssText = "-webkit-text-stroke: 1px #487996; -webkit-text-fill-color: transparent"
};