const chars = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let i = 0;
while (i < 5000) {
  for (const char of chars) {
    setTimeout(() => {
      process.stdout.write(char);
    }, i += 500)
  }
}