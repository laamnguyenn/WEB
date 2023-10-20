// Select the starting point and find its siblings
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change thue values of the siblings' class attributes.
prevItem.className = 'complete';
nextItem.className = 'cool';