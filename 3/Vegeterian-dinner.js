function VegeterianMenu(menu){
    const menuNode = document.querySelector("#menu");
    const vegeterianOptions = menu.filter((option) => option.isVegeterian === true);
    vegeterianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
}

const menu = [
    {
        name: "Chicken parmesan",
        isVegeterian: false
    },
    {
        name: "Stuffed Salad",
        isVegeterian: true
    }
]