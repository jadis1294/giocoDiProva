"use strict"
//initialization of all the editor's variables
let w = window.innerWidth-272,
    h = window.innerHeight-100;

/**
 * @function 
 * @description Initialize the Empty svg and the Svg's ID
 */
function initialize() {
    d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr('id', 'gameSvg')

    d3.select("#gameSvg")
        .append('g')
        .attr('id', 'circles')

    d3.select("#cgraph")
        .append('g')
        .attr('id', 'ellipses')    
    }

initialize();
