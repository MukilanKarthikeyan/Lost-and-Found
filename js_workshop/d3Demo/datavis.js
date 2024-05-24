import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

/*thigns to talk about in the meeting

    backend search query -> returns json
    strcture of api call and caching
    walk me through the backend


    call mom
    make fried rice
    bake cake


*/



const color = d3.scaleOrdinal(d3.schemeCategory10);
var addTog = false;
let margin = {top: 30, right: 30, bottom: 30, left: 30},
    width = window.innerWidth,
    height = window.innerHeight;
/*
let bttn = d3.select('body')
             .append('button')
             .text('add field')
             .on("click", (event) => {
               addTog = true;
               console.log("clicked");
             });
*/
/*
let svg = d3.select('body')
    .append('svg')
    .attr("id", '#force-graph')
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 50%; height: auto;");
*/

let count = 0;


let zoom = d3.zoom()
    .scaleExtent([0.5,5])
    .on("zoom", handleZoom);

function handleZoom(event) {
    svg.attr("transform", event.transform);
    d3.select('#background').attr("transform", event.transfrom);
}

let parent = d3.select('#chart-display')
.append('svg')
.attr('id', '#force-graph')
.attr('width', "100%")
.attr('height', height)
.style("background-color", "#1F1C1C");

parent.call(zoom)
    .on("dblclick.zoom", null);
let svg = parent.append('g').attr("class", "chart");

/* depreciated once .style backgroudn color was found
svg.append("rect")
    .attr("id", "background")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#1F1C1C");
*/
   
var graph = {
    "nodes": [
      {"name": "node1"},
      {"name": "node2"},
      {"name": "node3"},
      {"name": "node4"},
      {"name": "node5"},
      {"name": "node6"},
      {"name": "node7"},
      {"name": "node8"},
      {"name": "node9"},
      {"name": "node10"},
      {"name": "node11"},
      {"name": "node12"},
      {"name": "node13"},
      {"name": "node14"},
      {"name": "node15"},
      {"name": "node16"},
      {"name": "node17"},
      {"name": "node18"},
      {"name": "node19"},
      {"name": "node20"},
      {"name": "node21"},
      {"name": "node22"},
      {"name": "node23"},
      {"name": "node24"},
      {"name": "node25"},
      {"name": "node26"},
      {"name": "node27"},
      {"name": "node28"},
      {"name": "node29"},
    ],
    "links": [
      {"source": "node1", "target": "node2"},
      {"source": "node1", "target": "node3"},
      {"source": "node1", "target": "node4"},
      {"source": "node2", "target": "node5"},
      {"source": "node2", "target": "node6"},
      {"source": "node3", "target": "node7"},
      {"source": "node4", "target": "node8"},
      {"source": "node4", "target": "node9"},
      {"source": "node5", "target": "node10"},
      {"source": "node6", "target": "node10"},
      {"source": "node1", "target": "node11"},
      {"source": "node8", "target": "node12"},
      {"source": "node8", "target": "node13"},
      {"source": "node4", "target": "node14"},
      {"source": "node9", "target": "node15"},
      {"source": "node10", "target": "node16"},
      {"source": "node11", "target": "node17"},
      {"source": "node12", "target": "node18"},
      {"source": "node13", "target": "node19"},
      {"source": "node14", "target": "node20"},
      {"source": "node21", "target": "node20"},
      {"source": "node22", "target": "node20"},
      {"source": "node23", "target": "node20"},
      {"source": "node24", "target": "node20"},
      {"source": "node25", "target": "node20"},
      {"source": "node26", "target": "node20"},
      {"source": "node27", "target": "node28"},
      {"source": "node28", "target": "node29"},
      {"source": "node27", "target": "node29"}, 
      {"source": "node27", "target": "node17"}

    ]
  }
  
/**
var graph = {
    nodes : [
        {name : "a"},
        {name : "b"},
        {name : "c"},
        {name : "d"},
        {name : "e"},
        {name : "f"},
        {name : "g"},
        {name : "h"},
    ],
    links : [
        {source: "a", target: "b"},
        {source: "b", target: "c"},
        {source: "d", target: "e"},
        {source: "f", target: "e"},
        {source: "g", target: "e"},
        {source: "e", target: "h"},

    ]
    
    nodes: [
        {name: "a"},
        {name: "b"},
        {name: "c"},
        {name: "d"},
        {name: "e"},
        {name: "f"},
        {name: "g"},
        {name: "h"},
        {name: "i"},
        {name: "j"}
      ],
      links: [
        {source: "a", target: "b"},
        {source: "a", target: "c"},
        {source: "a", target: "d"},
        {source: "a", target: "f"},
        {source: "e", target: "f"},
        {source: "f", target: "g"},
        {source: "h", target: "i"},
        {source: "i", target: "j"}
      ]
}

*/




var sim = d3.forceSimulation(graph.nodes)
    .force(
        "link",
        d3.forceLink(graph.links).id(function(d) {
            return d.name;
        })
    )
    .force("charge", d3.forceManyBody().strength(-150))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

var link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d) {
        return 3;
    });


graph.links.forEach(function(link){

    // initialize a new property on the node
    if (!link.source["linkCount"]) link.source["linkCount"] = 0; 
    if (!link.target["linkCount"]) link.target["linkCount"] = 0;
    
    // count it up
    link.source["linkCount"]++;
    link.target["linkCount"]++;    
    });

var node = svg
    .append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", function(d) {
        return d.linkCount ? (d.linkCount * 4) + 4 : 4;
    })
    .attr("fill", d => color(d.group))
    .call(
        d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
    )
    .on("dblclick", (d) => {
        moveChart(-400);
        // if the iframe already exists then change src else add iframe
        // or loadhtml
        d3.select("#chart-display")
            .append('iframe')
            .attr("id", "pop-up")
            .attr("width", 1000)
            .attr("height", height)
            .attr("src", 'https://docs.google.com/document/d/10GaDFdu3g30Z1fwmZCuGDe5NkawloU3p75roFplluRM/edit?usp=sharing');
            //function(d) {return d.src;}
    });

var text = svg
    .append("g")
    .attr("class", "labels")
    .selectAll('text')
    .data(graph.nodes)
    .enter()
    .append('text')
    .text(function(d) {
        
        return d.name;
    })
    .call(
        d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
    );
       
function ticked() {

    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
   
    text
        .attr("x", d => d.x)
        .attr("y", d => d.y);

    /**
     * link
        .attr("x1", function(d) {
            return d.source.x;
        })
        .attr("y1", function(d) {
            return d.source.y;
        })
        .attr("x2", function(d) {
            return d.target.x;
        })
        .attr("y2", function(d) {
            return d.target.y;
        })

    node
    .attr("cx", function(d) {
        return d.x;
    })
    .attr("cy", function(d) {
        return d.y;
    })   
     */
    
        
}


function dragstarted(event) {
    if (!event.active) {
        sim.alphaTarget(0.75).restart();
    }
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
}

function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
}

function dragended(event) {
    if (!event.active) {
        sim.alphaTarget(0);
    }
    event.subject.fx = null;
    event.subject.fy = null;
}

function moveChart(distance) {
    
    node.attr("transform", `translate(${distance}, 0)`);
    link.attr("transform", `translate(${distance}, 0)`);
    text.attr("transform", `translate(${distance}, 0)`);
}




/** 

svg.on("click", addNode);

function addNode(event) {

    graph.nodes.push({
        name: "z", 
        index: graph.nodes.length,
        x: Math.random() * 500, 
        y: Math.random()* 500});
    graph.links.push({source: "z", 
        target: "a"})
    console.log(graph.nodes);
    sim.alphaTarget(0.3).restart();
}
  
*/
  

/**
 * 
d3.json("./bob.json", function(json) {
  // decorate a node with a count of its children
  nodes = json.nodes;
  links = json.links;
  update();
  force = force
    .nodes(nodes)
    .links(links);
  force.start();
});

 */
