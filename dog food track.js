class time{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("last fed");
        var button = createButton("Play");
        var greeting = createElement('h3');

        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var time = input.value();
            foodCount+=1;
            food.updateCount(foodCount);

            greeting.html("last fed " + count);
            greeting.position(130,160);
        });
    }
}


