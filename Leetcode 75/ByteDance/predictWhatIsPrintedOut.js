//  what is printed onto the console after the function below runs?

for (var i = 0; i < 10; i++) {
  // const closed = i;
  setTimeout(() => {
    console.log(i);
  }, 0);
}
