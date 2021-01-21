class food{
    constructor(){}

    getCount(){
        var foodCountref=database.ref('foodCount');
        foodCountref.on("value",function(data){
            foodCount=data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            'foodCount':count
        });
    }

    update(name){
        var foodIndex="food"+foodCount;
        database.ref(foodIndex).set({
            'name':name
        });
    }
}

