'use strict';

$('.tab-pane').map(function(n, tab) {
    if (tab.attributes['pane-src']) {
        var req = $.ajax(document.location + tab.attributes['pane-src'].value);

        req.done(function(data) {
            tab.innerHTML = data;
            prettyPrint();
        });

	req.fail(function () {
	    tab.innerHTML = '<h1>Couldn\'t get frame!<h1>';
	});
    } else {
        tab.innerHTML = '<h1>pane-src not specified!<h1>';
    }
});
