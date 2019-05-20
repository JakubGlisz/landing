function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById("more-btn").addEventListener('click', () => {
  scrollTo(document.getElementById("more"));
});
