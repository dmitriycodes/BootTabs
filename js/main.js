var nav = document.querySelector('.nav'),
		link  = document.getElementsByClassName('tab-link'),
		tabPane = document.getElementsByClassName('tab-pane');

function hide(a) {
	for(var i = a; i < link.length; i++) {
		link[i].classList.add('tab-link_hide');
		link[i].classList.remove('tab-link_act');
		tabPane[i].classList.add('tab-pane_hide');
	}
}

hide(1);

function show(b) {
	if(link[b].classList.contains('tab-link_hide')) {
		hide(0);
		link[b].classList.remove('tab-link_hide');
		link[b].classList.add('tab-link_act');
		tabPane[b].classList.remove('tab-pane_hide');
		tabPane[b].classList.add('tab-pane_act');


	}
}

nav.addEventListener('click', function(event) {
	var target = event.target;
	for(var i = 0; i < link.length; i++) {
		if(target == link[i]) {
			show(i);
		}
	}
});

