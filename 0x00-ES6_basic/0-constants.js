//first task
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

//get function
export function getLast() {
  return ' is okay';
}

//comination
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
