$('.categorias').click(function(){
        $('.menulateral ul .itensCategoria').toggleClass('mostrar');
    });
$('.botaoabre').click(function(){
    $('.menulateral').toggleClass('mostrar');
})
$('.botaofecha').click(function(){
    $('.menulateral').toggleClass('mostrar');
})
$('.categorias').mouseover(function(){
    $('.menulateral ul .seta').toggleClass('gira');
})
$('.categorias').mouseout(function(){
    $('.menulateral ul .seta').toggleClass('gira');
})
const $menulateral = $('.menulateral');
$(document).mouseup(e => {
    if(!$menulateral.is(e.target)
        && $menulateral.has(e.target).length === 0)
        {
            $menulateral.removeClass('mostrar');
        }
});