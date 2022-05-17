// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   script.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: vamkrtch <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/05/18 00:33:06 by vamkrtch          #+#    #+#             //
//   Vahan Mkrtchyan - vaganvam                       ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var lines = [];
let pencolor, bgcolor, penSize,del;

function setup() {
    createCanvas(1200, 900).style("displey:flex");
    frameRate(30);
    var option = createDiv();
    var o = createDiv().parent(option);

    createP("Pencil color").parent(o).position(1300, 30).style("font-size", "20px");
    createP("backraund color").parent(o).position(1300, 60).style("font-size", "20px");
    createP("Pencil with").parent(o).position(1300, 0).style("font-size", "20px");

    var values = createDiv().parent(option).style("margin-top: 20px").position(1400 , 0);

    pencolor = createColorPicker('yellow').parent(values).position(50, 60);
    
    bgcolor = createColorPicker("rgb(100%,0%,10%)").parent(values).position(50, 30);
    
    penSize = createSelect(false).parent(values).position(50, 0).style("font-size", "10px");
    
    penSize.option(1);
    penSize.option(2);
    penSize.option(3);
    penSize.option(4);
    penSize.option(5);
    penSize.option(6);
    penSize.option(7);
    penSize.option(8);
    penSize.option(9);
    penSize.option(10);
    penSize.selected(3);

    del = createButton("Clear").parent(option).position(1300,110).style("font-size", "48px");

}


function draw() {
    del.mousePressed(
        ()=>{
            lines = [];    
        }
    );
    background(bgcolor.value());
    if (mouseIsPressed) {
        let line = new Myline(pencolor.value(), penSize.value());
        //console.log(line);
        
        lines.push(line);
    }
    for (let i = 0; i < lines.length; i++) {
        lines[i].show();
    }
    
}
