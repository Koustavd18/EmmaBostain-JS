class Book{
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get avilability() {
        return this.getAvailability();
    }

    getAvailability(){
        if(this.numCopies === 0){
            return "OUT OF STOCK";
        } else if(this.numCopies < 10) {
            return "Low Stock";
        }
        return "In Stock";
    }
    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesRestocked = 5){
        this.numCopies += numCopiesRestocked;
    }

}


const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());

