$(document).ready(function(){
  $('.dscr').css({ 'width':'100%', 'text-align':'center' });
  var dscr = $('.dscr').height();
  var h = dscr/2;
  var w1 = $(window).height();
  var w = w1/2;
  var m = w - h
  $('.dscr').css("margin-top",m + "px")
});

$(window).resize(function() {
  $('.dscr').css({ 'width':'100%', 'text-align':'center' });
  var dscr = $('.dscr').height();
  var h = dscr/2;
  var w1 = $(window).height();
  var w = w1/2;
  var m = w - h
  $('.dscr').css("margin-top",m + "px")     
});

function hoverLinkedin(element) {
    element.setAttribute('src', 'design/images/linkedin_white.png');
	element.style.background = '#007FB1';
}
function unhoverLinkedin(element) {
    element.setAttribute('src', 'design/images/linkedin.png');
	element.style.background = 'white';
}

function hoverViadeo(element) {
    element.setAttribute('src', 'design/images/viadeo_white.png');
	element.style.background = '#F4982B';
}
function unhoverViadeo(element) {
    element.setAttribute('src', 'design/images/viadeo.png');
	element.style.background = 'white';
}

function hoverGit(element) {
    element.setAttribute('src', 'design/images/git_white.png');
	element.style.background = '#4183C4';
}
function unhoverGit(element) {
    element.setAttribute('src', 'design/images/git.png');
	element.style.background = 'white';
}

function hoverGplus(element) {
    element.setAttribute('src', 'design/images/Gplus_white.png');
	element.style.background = '#DD4B39';
}
function unhoverGplus(element) {
    element.setAttribute('src', 'design/images/Gplus.png');
	element.style.background = 'white';
}

function hoverTwitter(element) {
    element.setAttribute('src', 'design/images/twitter_white.png');
	element.style.background = '#00ACED';
}
function unhoverTwitter(element) {
    element.setAttribute('src', 'design/images/twitter.png');
	element.style.background = 'white';
}

function hoverAbout(element) {
    element.setAttribute('src', 'design/images/about_white.png');
	element.style.background = '#00405D';
}
function unhoverAbout(element) {
    element.setAttribute('src', 'design/images/about.png');
	element.style.background = 'white';
}