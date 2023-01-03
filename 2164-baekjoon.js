import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num = 0;

rl.on("line", (line)=>{
    num = Number(line);
    rl.close();
});

rl.on("close", ()=>{
	/*입력이 끝나고 실행할 코드*/
  if (num === 1) {
      console.log(1);
      process.exit();
  }
  
  let count = 0;
  for (let i = 1; i <= num; i *= 2) {
      if (i < num && num <= i * 2) {
          count = i * 2 - ((i * 2) - num) * 2;
          break;
      }
  }
  
  console.log(count);
  process.exit();
});