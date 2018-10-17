function setUpBrandFilter() {
    var brand;
    var brandlist = [];
    $('.product').each(function() {
        brand = $(this).attr('data-brand');
        if(brand && brandlist.indexOf(brand) < 0) {
            brandlist.push(brand); 
        }
    });
    brandlist.sort();
    brandlist.forEach(function(brand){
        var optionTag = `<option value="${brand}">${brand}</option>`;
        $(`#brand-filter`).append(optionTag);
    });

};
setUpBrandFilter();
function handleBrandFilter() {
    $('#brand-filter').on('change', function() {
        if($(this).val()) {
            $('.product').hide();
            $(`.product[data-brand="${$(this).val()}"]`).fadeIn();
        }
        else {
             $('.product').fadeIn();
         }
    });
};
handleBrandFilter();
