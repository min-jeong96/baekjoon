export default async function test(func, parameters) {
  const startTime = new Date();
  await func(...parameters);
  const endTime = new Date();
  console.log(`time: ${endTime.getTime() - startTime.getTime()}ms`);
}