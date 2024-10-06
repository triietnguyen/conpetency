function rowTwo(){
  $('.custom-icon').on('click', function() {
    const icon = $(this);
    const row = icon.closest('tr');

    if (icon.hasClass('bi-chevron-right')) {
        icon.removeClass('bi-chevron-right').addClass('bi-chevron-down');

        const Row = `
          <tr id="sub-row" class="row sub-row-bg">
            <td class="col" style="background-color: #EEE5CF;"></td>
            <td class="col-4" style="display:flex; background-color: #EEE5CF;">
                <i id="row-2" class="bi bi-chevron-right custom-icon"></i>Developer
            </td>
            <td class="col-7" style="background-color: #EEE5CF;">Base SW</td>
          </tr>
        `;
        row.after(Row);

        $('#row-2').on('click', function() {
          const innerIcon = $(this);
          const innerRow = innerIcon.closest('tr');

          if (innerIcon.hasClass('bi-chevron-right')) {
              innerIcon.removeClass('bi-chevron-right').addClass('bi-chevron-down');

              const newRow = `
                <tr id="sub-sub-row" class="row sub-sub-row-bg">
                  <td class="col-2" style="background-color: #F2DADE;"></td>
                  <td class="col-2" style="background-color: #F2DADE;">Detail</td>
                  <td class="col-2" style="background-color: #F2DADE;">Developer Details</td>
                  <td class="col-2" style="background-color: #F2DADE;">Detail</td>
                  <td class="col-4" style="background-color: #F2DADE;">Developer Details</td>
                </tr>
              `;
              innerRow.after(newRow);
          } else {
              innerIcon.removeClass('bi-chevron-down').addClass('bi-chevron-right');

              innerRow.nextAll('#sub-sub-row').remove();
          }
        });

    } else {
        icon.removeClass('bi-chevron-down').addClass('bi-chevron-right');

        row.nextAll('#sub-row').remove();
    }
  });
}

$(document).ready(function() {
  rowTwo();
});
