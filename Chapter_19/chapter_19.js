<script src="//code.jquery.com/jquery-2.1.4.min.js">
const $paras = $('p');
$paras.length;
typeof $paras;
$('p').text('ALL paragraphs REPLACED');
$('p').html('<i>ALL</i> paragraphs REPLACED');
$('p').eq(2).html(<i>TPETИЙ</i> АБЗАЦ ЗАМЕНЕН);
$('p').append('<sup>*</sup>');
$('p').after('<hr>').before('<hr>');
$('p').after('<hr>').append('<sup>*</sup>').filter(':odd').css('color', 'red');
const para2 = $('p').get(1);
function refreshServerInfo() {
	const $serverInfo = $('.serverInfo');
	$.get('http://localhost:7070').then(
		function(data) {
			Object.keys(data).forEach(p => {
				$(`[data-replace=${p}`).text(data[p]);
			});
		},
		function(jqXHR, testStatus, err) {
			console.error(err);
			$serverInfo.addClass('error').html('ERROR');
		}
	);
}
</script>