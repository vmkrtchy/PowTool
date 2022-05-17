// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   myline.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: vamkrtch <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/05/18 00:31:55 by vamkrtch          #+#    #+#             //
//   Vahan Mkrtchyan - vaganvam                       ###   ########.fr       //
//                                                                            //
// ************************************************************************** //


class Myline {
    constructor(pencolor, penSize) {
        this.px = pwinMouseX - 8;
        this.py = pwinMouseY - 10;
        this.x = winMouseX - 8;
        this.y = winMouseY - 10;

        this.pencolor = pencolor;
        this.penSize = penSize;
    }

    show() {
        stroke(this.pencolor);
        strokeWeight(this.penSize);
        line(this.px, this.py, this.x, this.y);
    }
}
