class Parede {
    constructor(posicaox, posicaoy, largura, altura){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(posicaox, posicaoy, largura, altura, options);
        this.largura = largura;
        this.altura = altura;
        World.add(world, this.body);
    }

    mostrar(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke("white");
        fill("grey");
        rect(pos.x, pos.y, this.largura, this.altura);
        pop();
    }
}