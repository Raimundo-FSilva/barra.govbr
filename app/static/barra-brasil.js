/** @source http://softwarepublico.gov.br/gitlab/govbr/barra-govbr/ @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt CC0 */  !function(){var a,i,r,t,M='<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="http://brasil.gov.br" class="link-barra">Brasil</a></div><span class="acesso-info"><a href="http://brasil.gov.br/barra#acesso-informacao" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a></span><nav><ul class="list"><li><a href="#" id="menu-icon"></a></li><li class="list-item first"><a href="http://brasil.gov.br/barra#participe" class="link-barra">Participe</a></li><li class="list-item"><a href="http://servicos.gov.br/?pk_campaign=barrabrasil" class="link-barra" id="barra-brasil-orgao">Servi&ccedil;os</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais" class="link-barra">Canais</a></li></ul></nav><nav id="brasil-vlibras"><ul><li><a class="logo-vlibras" href="#"></a><a href="http://www.vlibras.gov.br/" class="link-vlibras">Acess&iacute;vel em Libras</a></li></ul></nav></div>';a=document.getElementById("barra-brasil"),a&&(a.removeAttribute("style"),a.innerHTML=M,r=document.getElementsByTagName("head")[0]),i=function(){var a,i;for(i=document.getElementsByTagName("meta"),a=0;a<i.length;){if("creator.productor"===i[a].getAttribute("property"))return"&orgao="+i[a].getAttribute("content");a++}return""},t=document.getElementById("barra-brasil-orgao"),t.setAttribute("href","http://www.servicos.gov.br/?pk_campaign=barrabrasil"+i()),window._barrabrasil={insere_css:function(a){var i;return i=document.createElement("style"),i.setAttribute("type","text/css"),i.setAttribute("media","all"),i.appendChild(document.createTextNode(a)),r.appendChild(i)}}}(),window._barrabrasil.insere_css('#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;font-size:100%;font-family:inherit;vertical-align:baseline}#barra-brasil ul{list-style:none}@font-face{font-family:"Open Sans";font-style:normal;font-weight:700;src:local("Open Sans Bold"),local("OpenSans-Bold"),url("//barra.brasil.gov.br/static/opensans-bold.woff") format("woff")}#barra-brasil{height:32px;background:#f1f1f1;font-weight:bold;font-size:12px;line-height:32px;font-family:"Open Sans",Arial,Helvetica,sans-serif;border-bottom:1px solid #dfdfdf;box-sizing:content-box}#barra-brasil a{text-decoration:none}body.contraste #barra-brasil,body.contraste .link-vlibras{background:#000 !important}body.contraste #barra-brasil .link-barra,body.contraste #barra-brasil .link-vlibras{color:#FF0 !important;text-decoration:underline}div#wrapper-barra-brasil{position:relative;margin:0 auto;width:100%;max-width:960px;height:100%}#barra-brasil .brasil-flag{float:left;padding:7px 0 6px;width:115px;height:19px;border-right:2px solid #dfdfdf}#barra-brasil .brasil-flag .link-barra{display:block;padding-left:42px;width:43px;background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2219%22%20viewBox%3D%220%200%20100000%2070000%22%3E%3Cpath%20fill%3D%22%2300923F%22%20d%3D%22M0%200h100000v70000H0z%22%2F%3E%3Cpath%20fill%3D%22%23F8C300%22%20d%3D%22M50000%208500L8500%2035000l41500%2026500%2041500-26500L50000%208500z%22%2F%3E%3Ccircle%20fill%3D%22%2328166F%22%20cx%3D%2249963%22%20cy%3D%2235000%22%20r%3D%2217464%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M39537%2029605c10388%200%2019911%203821%2027238%2010127%20242-850%20421-1726%20532-2622-7597-6162-17265-9862-27770-9862-1821%200-3617%20114-5382%20330-377%20805-695%201642-948%202507%202065-316%204179-480%206330-480z%22%2F%3E%3C%2Fsvg%3E") 8px center no-repeat;text-transform:uppercase;line-height:19px}#barra-brasil #brasil-vlibras{position:absolute;top:0;right:0;display:block}#barra-brasil #brasil-vlibras ul{padding-top:32px}#barra-brasil #brasil-vlibras .logo-vlibras{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIyOSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2Ni4yNTAzOCwtMjMxLjY4NTk0KSI+PHBhdGggZD0ibTI5Mi40IDIzNy44Yy0wLjEgMC0wLjItMC4xLTAuMi0wLjIgMC0xLTEuOC0yLjYtNC4xLTIuNmwtMi41IDAtNC44IDMuNi00LjgtMy42LTIuNSAwYy0yLjQgMC00LjEgMS42LTQuMSAyLjYgMCAwLjEtMC4xIDAuMi0wLjIgMC4yLTAuMSAwLTAuMi0wLjEtMC4yLTAuMiAwLTEuNCAyLjEtMy4xIDQuNi0zLjFsMi40IDAgMC42LTAuNmMwLjEtMC4xIDAuMi0wLjEgMC4zIDBsMy45IDQuNiAzLjktNC42YzAuMS0wLjEgMC4yLTAuMSAwLjMgMGwwLjYgMC42IDIuNCAwYzIuNSAwIDQuNiAxLjcgNC42IDMuMSAwIDAuMS0wLjEgMC4yLTAuMiAwLjJ6bS0zIDEwLjRjLTAuMSAwLjctMC4yIDEtMC4zIDEgMCAwLjEtMC4xIDAuMS0wLjIgMC4xLTAuMSAwLTAuMS0wLjEtMC4xLTAuMiAwIDAgMC4xLTAuMyAwLjItMC45IDAuMS0wLjYtMC4yLTEuMS0wLjItMS4xIDAtMC4xIDAtMC4yIDAuMS0wLjIgMC4xIDAgMC4xIDAgMC4yIDAgMCAwIDAgMCAwIDAuMSAwIDAgMC4zIDAuNiAwLjIgMS4zem0tMSAwLjhjMCAwLjEtMC4xIDAuMS0wLjIgMC4xLTAuMSAwLTAuMS0wLjEtMC4xLTAuMiAwIDAgMC4xLTAuMyAwLjEtMC45IDAtMC42LTAuMy0xLjEtMC4zLTEuMSAwLTAuMSAwLTAuMiAwLjEtMC4yIDAuMSAwIDAuMSAwIDAuMiAwIDAgMCAwIDAgMCAwIDAgMCAwLjMgMC42IDAuMyAxLjMgMCAwLjctMC4xIDEtMC4yIDF6bS0wLjctMC40Yy0wLjMgMS4yLTAuOCAyLjItMC45IDIuNi0wLjIgMC40LTAuMyAwLjktMC4yIDIuMiAwIDEuMyAwIDIuMi0wLjEgMi41IDAgMC4yLTAuMiAwLjMtMC40IDAuMy0wLjIgMC0wLjMtMC4xLTAuNC0wLjQtMC4xLTAuNS0wLjMtMi42LTAuMy0yLjkgMC0wLjItMC4yLTAuNC0wLjMtMC40LTAuMSAwLTAuMiAwLjEtMC4zIDAuNS0wLjIgMC45LTAuNSAzLjEtMC42IDMuNi0wLjEgMC41LTAuMyAwLjYtMC40IDAuNi0wLjEgMC0wLjEgMC0wLjEgMCAwIDAgMCAwIDAgMC0wLjEgMC0wLjQgMC0wLjQtMC40IDAtMC41IDAuNC0zLjUgMC40LTMuOCAwLTAuMiAwLTAuMy0wLjEtMC4zLTAuMSAwLTAuMSAwLjEtMC4yIDAuMi0wLjMgMC40LTEuNyAyLjktMi4xIDMuNy0wLjEgMC4yLTAuMiAwLjItMC40IDAuMi0wLjEgMC0wLjIgMC0wLjMtMC4xLTAuMS0wLjEtMC4zLTAuNC0wLjItMC42IDAuMS0wLjIgMS41LTMuNCAxLjctMy44IDAuMS0wLjMgMC4xLTAuNS0wLjEtMC41LTAuMSAwLTAuMiAwLjEtMC40IDAuMi0wLjUgMC41LTIuNCAyLjUtMi43IDIuNy0wLjEgMC4xLTAuMiAwLjItMC4zIDAuMi0wLjEgMC0wLjItMC4xLTAuMy0wLjItMC4yLTAuMi0wLjItMC40LTAuMS0wLjYgMC4yLTAuMiAyLjYtMy4zIDMtNC4xIDAuNC0wLjcgMS0xLjktMC4yLTEuOS0wLjEgMC0wLjEgMC0wLjIgMC0wLjUgMC0wLjggMC4xLTEuMSAwLjEtMC41IDAtMC43LTAuMS0wLjgtMC4xLTAuMi0wLjEtMC42LTAuMy0wLjUtMC42IDAuMS0wLjIgMC43LTAuMSAxLTAuMiAwLjItMC4xIDAuMi0wLjEgMC4yLTAuMSAwIDAgMS4xLTAuMyAxLjgtMC43IDAuNy0wLjQgMi4zLTEuMSAyLjctMS4xIDAuMiAwIDAuNC0wLjEgMC42LTAuMSAwLjMgMCAwLjYgMCAwLjcgMC4xIDAuMyAwLjEgMC42IDAuOSAyIDEuNSAwIDAgMC42IDAuNiAwLjMgMS44em0tMTEuNyAyLjJjLTAuNC0xLjItMC42LTIuMy0wLjYtMi43LTAuMS0wLjQtMC4zLTAuOS0xLTEuOS0wLjctMS0xLjItMS44LTEuMy0yLjEtMC4xLTAuMiAwLjEtMC41IDAuNC0wLjUgMC4xIDAgMC4yIDAgMC4zIDAuMiAwLjQgMC40IDEuNyAyIDEuOSAyLjIgMC4xIDAuMSAwLjMgMC4yIDAuNCAwLjIgMC4yIDAgMC4yLTAuMSAwLjEtMC42LTAuMy0wLjktMS4zLTIuOS0xLjUtMy4zLTAuMy0wLjcgMC4xLTAuNyAwLjEtMC43IDAgMCAwLjEtMC4xIDAuMi0wLjEgMC4xIDAgMC4yIDAgMC4zIDAuMiAwLjIgMC40IDEuNiAzLjIgMS44IDMuNCAwLjEgMC4xIDAuMiAwLjIgMC4zIDAuMiAwLjEgMCAwLjEtMC4xIDAuMS0wLjMgMC0wLjUtMC4yLTMuMy0wLjMtNC4yIDAtMC4zIDAuMy0wLjUgMC41LTAuNSAwIDAgMCAwIDAgMCAwLjIgMCAwLjQgMC4yIDAuNSAwLjQgMC4xIDAuMiAwLjYgMy43IDAuNyA0LjIgMCAwLjIgMC4yIDAuNCAwLjMgMC40IDAuMSAwIDAuMi0wLjEgMC4zLTAuNCAwLjEtMC43IDAuNy0zLjQgMC43LTMuNyAwLTAuMyAwLjItMC40IDAuNC0wLjQgMCAwIDAuMSAwIDAuMSAwIDAuMiAwIDAuNCAwLjIgMC40IDAuNSAwIDAuMy0wLjMgMy43LTAuMiA0LjgtMC41IDAuMi0xIDAuNC0xLjMgMC40bDAgMCAwIDAtMC4yIDAuMWMwIDAtMC4xIDAtMC4yIDAtMC40IDAtMSAwLTEuMyAwLjYtMC4xIDAuMy0wLjIgMC42LTAuMSAwLjggMC4yIDAuNSAwLjggMC44IDAuOSAwLjkgMCAwIDAgMCAwIDAgMC4yIDAuMSAwLjUgMC4yIDEuMSAwLjIgMC4zIDAgMC42IDAgMS4xLTAuMS0wLjEgMC4yLTAuMiAwLjQtMC4zIDAuNmwtMC4xIDAuMWMtMC4yIDAuMy0wLjggMS4yLTEuOCAyLjUtMC4yIDAtMC4zIDAtMC41IDAtMC4zIDAtMC42IDAtMC45IDAuMSAwIDAtMC44LTAuMS0xLjMtMS4zem0wLjggMi4yYzAgMC4xLTAuMSAwLjEtMC4yIDAuMSAwIDAgMCAwLTAuMSAwIDAgMC0wLjYtMC4yLTEtMC44LTAuNC0wLjYtMC41LTAuOS0wLjUtMC45IDAtMC4xIDAtMC4yIDAuMS0wLjIgMC4xIDAgMC4yIDAgMC4yIDAuMSAwIDAgMC4xIDAuMyAwLjQgMC44IDAuNCAwLjUgMC45IDAuNyAwLjkgMC43IDAuMSAwIDAuMSAwLjEgMC4xIDAuMnptLTAuOSAwLjRjMCAwLjEtMC4xIDAuMS0wLjEgMC4xIDAgMC0wLjEgMC0wLjEgMCAwIDAtMC42LTAuMy0wLjktMC45LTAuNC0wLjYtMC40LTAuOS0wLjQtMSAwLTAuMSAwLjEtMC4yIDAuMS0wLjIgMC4xIDAgMC4yIDAuMSAwLjIgMC4xIDAgMCAwIDAuMyAwLjQgMC44IDAuMyAwLjUgMC44IDAuOCAwLjggMC44IDAuMSAwIDAuMSAwLjEgMC4xIDAuMnptMTQuOS0yMS44LTIwLjIgMGMtMi40IDAtNC40IDItNC40IDQuNGwwIDIwLjJjMCAyLjQgMiA0LjQgNC40IDQuNGwyMC4yIDBjMi40IDAgNC40LTIgNC40LTQuNGwwLTIwLjJjMC0yLjQtMi00LjQtNC40LTQuNCIgZmlsbD0iIzFjNGY5YyIvPjwvZz48L3N2Zz4K") 8px center no-repeat;position:absolute;top:0;right:0;width:43px;height:32px;display:block}#barra-brasil #brasil-vlibras .link-vlibras{height:0;transition:0.1s;width:auto;z-index:9;height:0;display:block;border:2px solid #dfdfdf;padding:5px 12px 5px 12px;color:#606060;visibility:hidden}#barra-brasil #brasil-vlibras .logo-vlibras:hover+.link-vlibras,#barra-brasil #brasil-vlibras .logo-vlibras:active+.link-vlibras,#barra-brasil #brasil-vlibras .logo-vlibras:focus+.link-vlibras,#barra-brasil #brasil-vlibras .link-vlibras:hover,#barra-brasil #brasil-vlibras .link-vlibras:active,#barra-brasil #brasil-vlibras .link-vlibras:focus{height:32px;display:block;border:2px solid #dfdfdf;padding:5px 12px 5px 12px;visibility:visible;background:#f1f1f1}#barra-brasil .acesso-info{position:absolute;left:130px}#barra-brasil .list{position:absolute;top:0;right:40px}#barra-brasil .list .first{border-left:2px solid #dfdfdf}#barra-brasil .list-item{display:inline-block;height:32px;line-height:32px;border-right:2px solid #dfdfdf}#barra-brasil .list-item a{padding:8px 15px 8px 13px}#barra-brasil .link-barra{color:#606060}#barra-brasil #menu-icon{position:absolute;top:3px;border-top:15px double #606060;border-bottom:5px solid #606060;display:none;width:20px;right:5px}@media only screen and (max-width: 959px){#barra-brasil #menu-icon{display:inline-block;padding:5px 3px 0px 3px}#barra-brasil .list .first{border-left:1px solid #dfdfdf}#barra-brasil nav:hover #menu-icon,#barra-brasil nav:active #menu-icon,#barra-brasil nav:focus #menu-icon{background-color:#DDD}body.contraste #barra-brasil nav:hover #menu-icon,body.contraste #barra-brasil nav:active #menu-icon,body.contraste #barra-brasil nav:focus #menu-icon{background-color:#606060 !important}#barra-brasil ul.list,#barra-brasil ul.list:active,#barra-brasil ul.list:focus{overflow:hidden;height:0px;transition:0.3s;padding-top:32px;width:auto;position:absolute;z-index:9}#barra-brasil .list-item{display:block;text-align:center;height:30px;background:#EEE;border:1px solid #dfdfdf}#barra-brasil .list-item a{padding:8px 30px 8px 28px}body.contraste #barra-brasil .list-item{background:#000 !important}body.contraste #menu-icon{border-top:15px double #fff !important;border-bottom:5px solid #fff !important}#barra-brasil .list a:active li,#barra-brasil .list a:focus li,#barra-brasil .list a:hover li{background:#DDD}body.contraste #barra-brasil .list a:active li,body.contraste #barra-brasil .list a:focus li,body.contraste #barra-brasil .list a:hover li{background:#606060 !important}#barra-brasil nav:active ul.list,#barra-brasil nav:focus ul.list,#barra-brasil nav:hover ul.list{height:150px;transition:0.5s}div#wrapper-barra-brasil{overflow:visible}}@media screen and (min-width: 960px){#wrapper-barra-brasil{width:960px}}@media print{#barra-brasil .list{display:none}#barra-brasil .acesso-info .link-barra:after{content:" - Barra GovBr"}}'),!function(){var a,i='<div id="wrapper-footer-brasil"><a href="http://www.acessoainformacao.gov.br/"><span class="logo-acesso-footer"></span></a><a href="http://www.brasil.gov.br/"><span class="logo-brasil-footer"></span></a></div>';a=document.getElementById("footer-brasil"),a&&(a.innerHTML=i),window._footerbrasil={insere_css:function(a){var i,r;return r=document.createElement("style"),r.setAttribute("type","text/css"),r.setAttribute("media","all"),r.appendChild(document.createTextNode(a)),i=document.getElementsByTagName("head")[0],i.appendChild(r)}}}(),window._footerbrasil.insere_css('div#wrapper-footer-brasil{position:relative;overflow:hidden;margin:0 auto;width:auto;padding:0 20px;max-width:960px}#wrapper-footer-brasil .logo-acesso-footer{float:left;width:107px;background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2017585%207497%22%20height%3D%2249%22%20width%3D%22107%22%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C%21%5BCDATA%5B.a%20%7Bfont%3A%20normal%20bold%201693px%20Open%20Sans%2C%20sans-serif%3B%7D%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%28-1125%20-10350%29%22%3E%3Ccircle%20cx%3D%224864%22%20cy%3D%2214099%22%20r%3D%223739%22%20fill%3D%22%23f6a800%22%2F%3E%3Cpath%20d%3D%22M1835%2016193.3l-353%201005c-137%20389%2070%20596%20459%20459l1005-353z%22%20class%3D%22fil1%22%20fill%3D%22%23f6a800%22%2F%3E%3Ccircle%20r%3D%22750%22%20cy%3D%2212225%22%20cx%3D%224874%22%20fill%3D%22%2300692c%22%2F%3E%3Cpath%20d%3D%22M4874%2013350c-414%200-750%20336-750%20750v1877c0%20414%20336%20750%20750%20750s750-336%20750-750v-1877c0-414-336-750-750-750z%22%20fill%3D%22%2300692c%22%2F%3E%3Cg%20fill%3D%22%23fff%22%3E%3Ctext%20x%3D%228873%22%20y%3D%2213324%22%3E%3Ctspan%20class%3D%22a%22%20y%3D%2213324%22%3EAcesso%20%C3%A0%3C%2Ftspan%3E%3Ctspan%20class%3D%22a%22%20x%3D%228873%22%20y%3D%2215440%22%3EInforma%C3%A7%C3%A3o%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E") center no-repeat;height:49px}#wrapper-footer-brasil .logo-brasil-footer{float:right;width:153px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAwCAMAAAA1kSiuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFiUExURQAAAP/////////////////////////dAICUGYa2J////////////////////////////////////////////////////////////////////////////6PBH97PCY2fGMDCEFSIKV6EIv/dAP/dACd2OCuHPil+OyqBPCh6OSuKPyqEPSJkMCyTQyyNQS2gSCZwNS2bRiFfLiRtNCRqMy2dRydzNx9bLCNnMi2YRR1UKS2WRCyQQip8OcnIDyBYKiZyNvfZAiyRQvWGHcbADSBioqy7F/////uoFkaFMEiVNpimFztyLJ21HPaPG3GuLiBQjvyxE3GdJ+nUBvmYGTeRPY24JEekPmGJJd7NCFqXMoKbH9TQDtKTJlipN/mgGKKvF7fFF4GvJ0VymbKGRKmaJ/vHCKODJO2nGdrl8N6WKry8EYp0WGSOuoisza7D2nd7JEpYcrWacEN9stekWsTR4lEu4eYAAABIdFJOUwDzBb3oLXhAcHA7EJJUhJ6wRxpg0NrhI2jHbnOpX0hfUd2Nqf///////////////////////////////////////////////nia+rQAAAnqSURBVFjD7ZnXf9tIDoApkdTuSVTvtjZll8kmci+JHSeiQ5sRrWIpkSNbkuMap9dt//9hBphhkXd/93b3cPNiZkAAHzDAUJlREumIFlP4iBqaloryx3gpocQy/DGhaVoRX1C1UjrHn3JaXEkZOFtWI4WkEhgq6Oj8KQ1PKMxrmppFcRwm0bgCto0oadVUeihrbCpd1bNxnIgV9XiJKEt5pZhHCFfXyzhZiOnVFOq6Ws5I02ytXHHLAbLijK6jv4yh6wn+VCnoMxHEzWq6jhEqbjZO5EouQtEousuUI9lyOo261RmgI+6YGo9EiUxVZ4nBSBZmiaymElnOzaGqn6yaIexMSSWLlSq8htpZMEk4bj4ZocSk0iJWJCtWEjMuBqDC8qRriuAxxFMyS7EUipoaJbJEIYJ2Em5ciZaCy1k0KjSRSWezkixaylPOslmRs2qE/ES1YjGS8JHlI0aGJuKRWo3yDSZdXZAZBikX8nGSl92oTmRKSjMKhWiQTIJmVMPA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") center no-repeat;height:48px}body.contraste #footer-brasil{background:#000 !important}@media screen and (min-width: 960px){#wrapper-footer-brasil{width:960px}}@media print{#wrapper-footer-brasil{border-top:2px solid #dfdfdf}#wrapper-footer-brasil:before{content:"Barra GovBr";color:#606060;font-size:12px;font-family:"Open Sans",Arial,Helvetica,sans-serif}}');
/** @license-end */