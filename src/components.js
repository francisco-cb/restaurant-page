import background from './background.jpg';

function title() {
  const titleDiv = document.createElement('div');

  titleDiv.innerText = 'Geniune Aitalian Restaurant, best in city!';

  return titleDiv;
}

function review() {
  const reviewDiv = document.createElement('div');

  reviewDiv.innerText = 'Try the garlic sticks! Definetly the best part, good pizza, good ingredients.';

  return reviewDiv;
}

function addBackgroundtoBody() {
  document.body.style.backgroundImage= "url(" + background + ")";
  document.body.style.width = '100%';
  document.body.style.height = '100%';
}

export {
  addBackgroundtoBody,
  title,
  review
};