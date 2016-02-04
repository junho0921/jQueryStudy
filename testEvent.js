$(function(){
	console.warn('init');
	for(var attr in jQuery.event.special){
		console.log(attr, jQuery.event.special[attr].add);
	}
	console.warn('s');
//	console.log('special', jQuery.event.special);

	$('.t1').on('focusin', function(){
		console.log('focus in input t1')
	});

	$('.t2').on('focus', '.txt', function(e){
		console.log('focus input txt', e.currentTarget)
		console.log('focus input txt', this);
	});

	$('.btn').on('click', function(){
		$('.txt').trigger('focus')
	})

	console.warn('ÊÂ¼þ')
});