import test from './program.js';

function dfs(components) {
  const adjacencies = {};
  const visits = {};

  const push = (u, v) => {
    if (adjacencies[`${u}`]) {
      adjacencies[`${u}`].push(`${v}`);
    } else {
      adjacencies[`${u}`] = [`${v}`];
    }

    visits[`${u}`] = false;
  }

  // setting
  for (let component of components) {
    let [u, v] = component;
    push(u, v);
    push(v, u); // 방향 없는 그래프
  }

  let flowStrings = [];
  let searchFlow = [];
  const stack = [];

  while (Object.values(visits).includes(false)) {
    if (stack.length > 0) {
      const key = stack.pop();
      !searchFlow.includes(key) && searchFlow.push(key);

      visits[key] = true;
      for (let node of adjacencies[key]) {
        !visits[node] && stack.push(node);
      }
    } else {
      flowStrings.push(searchFlow.join(' -> '));

      const [key, value] = Object.entries(visits).find(([key, value]) => !value);
      visits[key] = true;
      stack.push(key);
      searchFlow = [key];
    }
  }

  flowStrings.push(searchFlow.join(' -> '));

  return flowStrings.filter(flow => flow !== '');
}

await test(dfs, [[[1, 2], [2, 5], [5, 1], [3, 4], [4, 6]]]);
await test(dfs, [[[1, 2], [2, 5], [5, 1], [3, 4], [4, 6], [5, 4], [2, 4], [2, 3]]]);