let input = prompt("What would you like to do?");
let todos = ['Drink coffee', 'Eat lunch'];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("********************")
        console.log("     TODO LIST")
        console.log("********************")

        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
            console.log("********************")
        }
    } else if (input === "new") {
        const newTodo = prompt("What do you want to add?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === "del") {
        const index = parseInt(prompt("Type the index of the element that you want to delete: "));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`You deleted ${deleted}.`);
        } else {
            console.log("Unknown index");
        }
    }
    input = prompt("What would you like to do?");
}
console.log("Program ended.");