// document.addEventListener('DOMContentLoaded', function() {
// 	var div,
// 		n,
// 		v = document.getElementsByClassName('youtube-player');
// 	for (n = 0; n < v.length; n++) {
// 		div = document.createElement('div');
// 		div.setAttribute('data-id', v[n].dataset.id);
// 		div.innerHTML = labnolThumb(v[n].dataset.id);
// 		div.onclick = labnolIframe;
// 		v[n].appendChild(div);
// 	}
// });

// function labnolThumb(id) {
// 	var thumb = '<img src="https://i.ytimg.com/vi/1q3lIaxaqmg/maxresdefault.jpg">',
// 		play = '<div class="play"></div>';
// 	return thumb.replace('ID', id) + play;
// }

// function labnolIframe() {
// 	var iframe = document.createElement('iframe');
// 	iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.id + '?autoplay=1');
// 	iframe.setAttribute('frameborder', '0');
// 	iframe.setAttribute('allowfullscreen', '1');
// 	this.parentNode.replaceChild(iframe, this);
// }

var accordionItemHeader = document.getElementsByClassName('.stars-info');
accordionItemHeader.addEventListener('click', (event) => {
	accordionItemHeader.classList.toggle('active');
	const accordionItemBody = accordionItemHeader.nextElementSibling;
	if (accordionItemHeader.classList.contains('active')) {
		accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
	} else {
		accordionItemBody.style.maxHeight = 0;
	}
});
