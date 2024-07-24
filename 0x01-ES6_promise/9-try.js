export default function guardrail(mathFunction) {
  const queue = [];
  let massege;

  try {
    massege = mathFunction();
  } catch (error) {
    massege = error.toString();
  } finally {
    queue.push(massege);
    queue.push('Guardrail was processed');
  }

  return queue;
}
