// ==UserScript==
// @name         Copy issue ID
// @namespace    Youtrack
// @version      0.1
// @description  Adds a link to select YT issue ID
// @author       dkozhevnikov
// @match        https://youtrack.jetbrains.com/*
// ==/UserScript==
/* jshint -W097 */
'use strict';
var issues = document.querySelectorAll('.issueId, .links .link');
[].forEach.call(issues, function(issue) {
    var a = document.createElement('a');
    a.innerHTML = '&#x1f4cb';
    a.href = "#";
    
    issue.parentNode.insertBefore(a, issue.nextSibling);
    
    a.onclick = function() {
        if (window.getSelection) {
            var selection = window.getSelection();        
            var range = document.createRange();
            range.selectNodeContents(issue);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
});
