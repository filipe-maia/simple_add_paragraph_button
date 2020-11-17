
/*document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('newParagraphButton').addEventListener('click', addNewColoredParagraph);
});*/

function addNewColoredParagraph() {
	const paragraphs = document.getElementById('paragraphs');
	let paragraphClass = null;
	let paragraphsChildsQuantity = paragraphs.childElementCount;
	if (paragraphsChildsQuantity === 0) paragraphClass = 'red';
	else if (isOdd(paragraphsChildsQuantity)) paragraphClass = 'yellow';
	else paragraphClass = 'red';

	const newParagraph = document.createElement('p');
	newParagraph.setAttribute('class', paragraphClass);//newParagraph.class = paragraphClass;
	newParagraph.innerText = 'Parágrafo ' + ++paragraphsChildsQuantity;//newParagraph.setAttribute('innerText', ('Parágrafo ' + ++paragraphsChildsQuantity));

	paragraphs.appendChild(newParagraph);
}
