export default function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const newElement = element;
  const setCounter = (count: number) => {
    counter = count;
    newElement.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
