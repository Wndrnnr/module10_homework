// Задание 1

const a = prompt("enter a number")
if (typeof +a === "number") {
  if (a % 2 === 0) {
    console.log("Четное число")
  } else if (a % 2 === 1) {
    console.log("Нечетное число")
  } else  {
    console.log("Это не число")
  }
} else {
  console.log("Кажется вы ошиблись")
}