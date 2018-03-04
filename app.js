//https://newsapi.org/v2/everything?q=apple&from=2018-03-02&to=2018-03-02&sortBy=popularity&apiKey=18d3c0f94c714eecbb28c444ef961504
// const main = document.querySelector('main');
// const sourceSelector = document.querySelector('#sourceSelctor');



window.addEventListener('load', e => {
	// updateNews();
	updateSources();



	if ('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register('/sw.js');
			console.log(`SW registered`);
		} catch (error) {
			console.log(`SW reg failed`);
		}
	}
});

async function updateSources() {
	var table = await $('#datatable9').DataTable({
		"sDom": 'Rt<"dt-panelfooter clearfix"ip>',
		// "ajax": "vendor/plugins/datatables/examples/data_sources/objects.txt",
		"ajax": "https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/pwademo",
		"columns": [{
			"className": 'details-control',
			"orderable": false,
			"data": null,
			"defaultContent": ''
		}, {
			"data": "name"
		}, {
			"data": "position"
		}, {
			"data": "office"
		}, {
			"data": "salary"
		}],
		"order": [
			[1, 'asc']
		]
	});

	// Add event listener for opening and closing details
	$('#datatable9 tbody').on('click', 'td.details-control', function() {
		var tr = $(this).closest('tr');
		var row = table.row(tr);

		if (row.child.isShown()) {
			// This row is already open - close it
			row.child.hide();
			tr.removeClass('shown');
		} else {
			// Open this row
			row.child(format(row.data())).show();
			tr.addClass('shown');
		}
	});
}