var vocaloid_spawn = document.getElementsByClassName("vocaloid");
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
vocaloid_spawn.style.opacity = scrollpercent;