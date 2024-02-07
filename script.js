const wrapper = document.querySelector (' .wrapper');
const question = document.queryselector ('.question');
const yestn = document.queryselector('.yes-btn');
const not = document. querySelector ('.no-btn');

const wrapperRect = wrapper.getBoundingclientRect();
const notRect = noBtn.getBoundingclientRect ();

yesBtn.addEventListener('click', () =>
{question.innerHTML = ' :)';
});

noBtn.addEventListener ('mouseover', () => {
const i = Math.floor (Math.random9() * (wrapperRect. width - noBtRect. width)) + 1;
const j = Math. floor (Math.random() * (wrapperRect.height - nobtRect. height)) + 1;
nobtn.style.left = i + 'px';
nobtn.style.top = j + 'px';
});
