export default async function test(func, parameters) {
  const startTime = new Date();
  const result = await func(...parameters);
  const endTime = new Date();

  console.log('\n-----');
  console.log('input:', ...parameters);
  console.log('output:', result);
  console.log(`time: ${endTime.getTime() - startTime.getTime()}ms`);
}