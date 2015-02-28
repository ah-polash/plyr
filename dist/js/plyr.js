!function(e){"use strict";function t(e,t){g.debug&&window.console&&console[t?"error":"log"](e)}function n(){var e,t,n,r=navigator.userAgent,a=navigator.appName,s=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(a="IE",s="11;"):-1!==(t=r.indexOf("MSIE"))?(a="IE",s=r.substring(t+5)):-1!==(t=r.indexOf("Chrome"))?(a="Chrome",s=r.substring(t+7)):-1!==(t=r.indexOf("Safari"))?(a="Safari",s=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(s=r.substring(t+8))):-1!==(t=r.indexOf("Firefox"))?(a="Firefox",s=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(a=r.substring(e,t),s=r.substring(t+1),a.toLowerCase()==a.toUpperCase()&&(a=navigator.appName)),-1!==(n=s.indexOf(";"))&&(s=s.substring(0,n)),-1!==(n=s.indexOf(" "))&&(s=s.substring(0,n)),o=parseInt(""+s,10),isNaN(o)&&(s=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),[a,o]}function r(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function a(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,a=e[n],s=a.parentNode,o=a.nextSibling;r.appendChild(a),o?s.insertBefore(r,o):s.appendChild(r)}}function s(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function o(e,t,n,r){t=t.split(" ");for(var a=0;a<t.length;a++)e[r?"addEventListener":"removeEventListener"](t[a],n,!1)}function i(e,t,n){o(e,t,n,!0)}function c(e,t,n){o(e,t,n,!1)}function l(e,t){return Math.floor(e/t*100)}function u(e){var t=f().isFullScreen()?{x:0,y:0}:p(e.currentTarget);return{x:e.clientX-t.x,y:e.clientY-t.y}}function p(e){for(var t=0,n=0;e;)t+=e.offsetLeft-e.scrollLeft+e.clientLeft,n+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent;return{x:t,y:n}}function d(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},d(e[n],t[n])):e[n]=t[n];return e}function f(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++){if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return"webkit"===e.prefix&&navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&(e.supportsFullScreen=!1),e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;case"ms":return null!==document.msFullscreenElement;default:return document[this.prefix+"FullScreen"]}},e.requestFullScreen=function(e){return""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]("webkit"===this.prefix?e.ALLOW_KEYBOARD_INPUT:null)},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),e}function m(){var e={supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}()};return e}function b(e){function o(){for(D.subcount=0;b(D.captions[D.subcount][0])<D.media.currentTime.toFixed(1);)if(D.subcount++,D.subcount>D.captions.length-1){D.subcount=D.captions.length-1;break}}function p(){s(D.container,g.classes.captions.enabled,!0),g.captions.defaultActive&&(s(D.container,g.classes.captions.active,!0),D.buttons.captions.setAttribute("checked","checked"))}function d(e){var t=[];return t=e.split(" --> "),y(t[0])}function b(e){var t=[];return t=e.split(" --> "),y(t[1])}function y(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function h(e){return D.container.querySelectorAll(e)}function x(e){return h(e)[0]}function w(){try{return window.self!==window.top}catch(e){return!0}}function k(){t("Injecting custom controls.");var e=g.html;e=r(e,"{aria-label}",g.playAriaLabel),e=r(e,"{id}",D.random),D.container.insertAdjacentHTML("beforeend",e)}function T(){try{return D.controls=x(g.selectors.controls),D.buttons={},D.buttons.play=x(g.selectors.buttons.play),D.buttons.pause=x(g.selectors.buttons.pause),D.buttons.restart=x(g.selectors.buttons.restart),D.buttons.rewind=x(g.selectors.buttons.rewind),D.buttons.forward=x(g.selectors.buttons.forward),D.buttons.mute=x(g.selectors.buttons.mute),D.buttons.captions=x(g.selectors.buttons.captions),D.buttons.fullscreen=x(g.selectors.buttons.fullscreen),D.progress={},D.progress.container=x(g.selectors.progress.container),D.progress.buffer={},D.progress.buffer.bar=x(g.selectors.progress.buffer),D.progress.buffer.text=D.progress.buffer.bar.getElementsByTagName("span")[0],D.progress.played={},D.progress.played.bar=x(g.selectors.progress.played),D.progress.played.text=D.progress.played.bar.getElementsByTagName("span")[0],D.volume=x(g.selectors.buttons.volume),D.duration=x(g.selectors.duration),D.seekTime=h(g.selectors.seekTime),!0}catch(e){return t("It looks like there's a problem with your controls html. Bailing.",!0),!1}}function S(){if(D.media=D.container.querySelectorAll("audio, video")[0],!D.media)return t("No audio or video element found!",!0),!1;if(D.media.removeAttribute("controls"),D.type="video"==D.media.tagName.toLowerCase()?"video":"audio",s(D.container,g.classes[D.type],!0),s(D.container,g.classes.stopped,null===D.media.getAttribute("autoplay")),"video"===D.type){var e=document.createElement("div");e.setAttribute("class",g.classes.videoWrapper),a(D.media,e),D.videoContainer=e}}function F(){if("video"===D.type){D.videoContainer.insertAdjacentHTML("afterbegin","<div class='"+g.selectors.captions.replace(".","")+"'></div>"),D.captionsContainer=x(g.selectors.captions),D.isTextTracks=!1,D.media.textTracks&&(D.isTextTracks=!0);for(var e,n="",r=D.media.childNodes,a=0;a<r.length;a++)"track"===r[a].nodeName.toLowerCase()&&(e=r[a].getAttribute("kind"),"captions"===e&&(n=r[a].getAttribute("src")));if(D.captionExists=!0,""===n?(D.captionExists=!1,t("No caption track found.")):t("Caption track found; URI: "+n),D.captionExists){for(var o=D.media.textTracks,c=0;c<o.length;c++)o[c].mode="hidden";if(p(D),("IE"===D.browserName&&10===D.browserMajorVersion||"IE"===D.browserName&&11===D.browserMajorVersion||"Firefox"===D.browserName&&D.browserMajorVersion>=31||"Safari"===D.browserName&&D.browserMajorVersion>=7)&&(t("Detected IE 10/11 or Firefox 31+ or Safari 7+."),D.isTextTracks=!1),D.isTextTracks){t("TextTracks supported.");for(var l=0;l<o.length;l++){var u=o[l];"captions"===u.kind&&i(u,"cuechange",function(){this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&(D.captionsContainer.innerHTML=this.activeCues[0].text)})}}else if(t("TextTracks not supported so rendering captions manually."),D.currentCaption="",D.subcount=0,D.captions=[],i(D.media,"timeupdate",function(){D.media.currentTime.toFixed(1)>d(D.captions[D.subcount][0])&&D.media.currentTime.toFixed(1)<b(D.captions[D.subcount][0])&&(D.currentCaption=D.captions[D.subcount][1]),D.media.currentTime.toFixed(1)>b(D.captions[D.subcount][0])&&D.subcount<D.captions.length-1&&D.subcount++,D.captionsContainer.innerHTML=D.currentCaption}),""!==n){var f=new XMLHttpRequest;f.onreadystatechange=function(){if(4===f.readyState)if(200===f.status){var e,n=[],r=f.responseText;n=r.split("\n\n");for(var a=0;a<n.length;a++)e=n[a],D.captions[a]=[],D.captions[a]=e.split("\n");D.captions.shift(),t("Successfully loaded the caption file via AJAX.")}else t("There was a problem loading the caption file via AJAX.",!0)},f.open("get",n,!0),f.send()}if("Safari"===D.browserName&&D.browserMajorVersion>=7){t("Safari 7+ detected; removing track from DOM."),o=D.media.getElementsByTagName("track");for(var m=0;m<o.length;m++)D.media.removeChild(o[m])}}else s(D.container,g.classes.captions.enabled)}}function N(){D.seekTime[0].innerHTML=g.seekInterval,D.seekTime[1].innerHTML=g.seekInterval}function C(){if("video"===D.type&&g.fullscreen.enabled){var e=v.supportsFullScreen;e||g.fullscreen.fallback&&!w()?(t((e?"Native":"Fallback")+" fullscreen enabled."),s(D.container,g.classes.fullscreen.enabled,!0)):t("Fullscreen not supported and fallback disabled.")}}function M(){D.media.play()}function E(){D.media.pause()}function I(){D.media.currentTime=0,D.isTextTracks||(D.subcount=0),M()}function L(e){"number"!=typeof e&&(e=g.seekInterval);var t=D.media.currentTime-e;D.media.currentTime=0>t?0:t,D.isTextTracks||"video"!==D.type||o(D)}function A(e){"number"!=typeof e&&(e=g.seekInterval);var t=D.media.currentTime+e;D.media.currentTime=t>D.media.duration?D.media.duration:t,D.isTextTracks||"video"!==D.type||o(D)}function V(){s(D.container,g.classes.playing,!D.media.paused),s(D.container,g.classes.stopped,D.media.paused)}function O(){var e=v.supportsFullScreen;event.type===v.fullScreenEventName?g.fullscreen.active=v.isFullScreen():e?(v.isFullScreen()?v.cancelFullScreen():v.requestFullScreen(D.container),g.fullscreen.active=v.isFullScreen()):(g.fullscreen.active=!g.fullscreen.active,g.fullscreen.active?(i(document,"keyup",j),document.body.style.overflow="hidden"):(c(document,"keyup",j),document.body.style.overflow="")),s(D.container,g.classes.fullscreen.active,g.fullscreen.active)}function j(e){27===(e.which||e.charCode||e.keyCode)&&g.fullscreen.active&&O()}function q(e){"undefined"==typeof e&&(e=g.storage.enabled&&m().supported?window.localStorage.plyr_volume||g.volume:g.volume),e>10&&(e=10),D.volume.value=e,D.media.volume=parseFloat(e/10),R(),g.storage.enabled&&m().supported&&(window.localStorage.plyr_volume=e)}function H(e){"undefined"==typeof active&&(e=!D.media.muted,D.buttons.mute.checked=e),D.media.muted=e,R()}function B(e){"undefined"==typeof e&&(e=-1===D.container.className.indexOf(g.classes.captions.active),D.buttons.captions.checked=e),e?s(D.container,g.classes.captions.active,!0):s(D.container,g.classes.captions.active)}function R(){s(D.container,g.classes.muted,0===D.media.volume||D.media.muted)}function P(e){var t,n,r=0;switch(e.type){case"timeupdate":t=D.progress.played.bar,n=D.progress.played.text,r=l(D.media.currentTime,D.media.duration);break;case"playing":case"progress":t=D.progress.buffer.bar,n=D.progress.buffer.text,r=function(){var e=D.media.buffered;return e.length?l(e.end(0),D.media.duration):0}()}t&&r>0&&(t.value=r,n.innerHTML=r)}function W(){D.secs=parseInt(D.media.currentTime%60),D.mins=parseInt(D.media.currentTime/60%60),D.secs=("0"+D.secs).slice(-2),D.mins=("0"+D.mins).slice(-2),D.duration.innerHTML=D.mins+":"+D.secs}function X(){i(D.buttons.play,"click",function(){M(),setTimeout(function(){D.buttons.pause.focus()},100)}),i(D.buttons.pause,"click",function(){E(),setTimeout(function(){D.buttons.play.focus()},100)}),i(D.buttons.restart,"click",I),i(D.buttons.rewind,"click",L),i(D.buttons.forward,"click",A),i(D.volume,"change",function(){q(this.value)}),i(D.buttons.mute,"change",function(){H(this.checked)}),i(D.buttons.fullscreen,"click",O),i(document,v.fullScreenEventName,O),"video"===D.type&&g.click&&i(D.videoContainer,"click",function(){D.media.paused?M():D.media.ended?I():E()}),i(D.media,"timeupdate",W),i(D.media,"timeupdate",P),i(D.progress.played.bar,"click",function(e){D.pos=u(e).x/this.offsetWidth,D.media.currentTime=D.pos*D.media.duration,D.isTextTracks||"video"!==D.type||o(D)}),i(D.buttons.captions,"click",function(){B(this.checked)}),i(D.media,"ended",function(){"video"===D.type&&(D.captionsContainer.innerHTML=""),V()}),i(D.media,"progress",P),i(D.media,"playing",P),i(D.media,"volumechange",R),i(D.media,"play pause",V)}function _(){return v=f(),D.browserInfo=n(),D.browserName=D.browserInfo[0],D.browserMajorVersion=D.browserInfo[1],t(D.browserName+" "+D.browserMajorVersion),"IE"!==D.browserName||8!==D.browserMajorVersion&&9!==D.browserMajorVersion?(g.playAriaLabel="undefined"!=typeof g.title&&g.title.length?"Play "+g.title:"Play",S(),D.random=Math.floor(1e4*Math.random()),k(),T()?(F(),q(),C(),N(),X(),void 0):!1):(t("Browser not suppported.",!0),!1)}var D=this;return D.container=e,_(),{media:D.media,play:M,pause:E,restart:I,rewind:L,forward:A,setVolume:q,toggleMute:H,toggleCaptions:B}}var v,g,y={enabled:!0,debug:!1,seekInterval:10,volume:5,click:!0,selectors:{container:".player",controls:".player-controls",buttons:{play:"[data-player='play']",pause:"[data-player='pause']",restart:"[data-player='restart']",rewind:"[data-player='rewind']",forward:"[data-player='fast-forward']",mute:"[data-player='mute']",volume:"[data-player='volume']",captions:"[data-player='captions']",fullscreen:"[data-player='fullscreen']"},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",duration:".player-duration",seekTime:".player-seek-time"},classes:{video:"player-video",videoWrapper:"player-video-wrapper",audio:"player-audio",stopped:"stopped",playing:"playing",muted:"muted",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0},storage:{enabled:!0}};e.setup=function(e){if(g=d(y,e),!g.enabled)return!1;for(var t=document.querySelectorAll(g.selectors.container),n=[],r=t.length-1;r>=0;r--){var a=t[r];"undefined"==typeof a.plyr&&(a.plyr=new b(a)),n.push(a.plyr)}return n}}(this.plyr=this.plyr||{});