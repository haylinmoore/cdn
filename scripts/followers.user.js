// ==UserScript==
// @name         Follow Count
// @version      0.1
// @description  List following count
// @author       Hampton (herohamp)
// @match        https://scratch.mit.edu/users/*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $.get("following", function(data) {
	$("div.box-head:contains('Following')").last().find("h4").text("Following " + data.split("Following (")[1].split(")")[0]);
});

$.get("followers", function(data) {
	$("div.box-head:contains('Followers')").last().find("h4").text("Followers " + data.split("Followers (")[1].split(")")[0]);
});
})();
