var grid = new Grid({
    element: '#photos',
    columns: 6,
    margin: 2
});

window.addEventListener('load', function() {
    grid.draw();
}, false);

