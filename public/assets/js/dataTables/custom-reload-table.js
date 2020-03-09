$(document).ready(function() {
setTimeout(function(){
  $('.data-table-user').DataTable({
      "columnDefs": [
        { "orderable": false, "targets": 4 }
      ],
      responsive: true,
      dom: 'Bfrtip',
      "language": {
          "search": "Buscar: ",
          "lengthMenu": "Mostrando _MENU_ registros por página",
          "zeroRecords": "No hay usuarios registrados",
          "info": "Mostrando la página _PAGE_ de _PAGES_",
          "infoEmpty": "No hay usuarios con estas especificaciones",
          "infoFiltered": "(filtrado de _MAX_ registros totales)",
          "paginate": {
            "previous": "Anterior",
            "next": "Siguiente"
          }
      },
      buttons: [
          {
            extend: 'excelHtml5', 
            title: 'Lista de usuarios', 
            text:'<i class="fa fa-file-excel-o" title="Descargar Excel"></i> Excel',
            exportOptions: {
              columns: [ 0, 1, 2, 3 ]
            }
          },
          {
            extend: 'pdfHtml5', 
            title: 'Lista de usuarios', 
            "text":'<i class="fa fa-file-pdf-o" title="Descargar PDF"></i> PDF',
            exportOptions: {
              columns: [ 0, 1, 2, 3 ]
            }
          }
      ]
    });

  $('.dt-buttons').addClass('bottom')
  $('.buttons-excel').addClass('btn btn-info').removeClass('dt-button buttons-excel buttons-html5');
  $('.buttons-pdf').addClass('btn btn-danger').removeClass('dt-button buttons-pdf buttons-html5');
  $('.dataTables_filter>label>input').addClass('form-control')
}, 0)
})
