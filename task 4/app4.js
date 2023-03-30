let h1 = document.body.firstChild.nextSibling
console.log(h1);
const a = document.createElement("a");
document.body.prepend(a);
a.id = 'link'
a.href = 'https://dom.spec.whatwg.org/'
a.appendChild(h1)