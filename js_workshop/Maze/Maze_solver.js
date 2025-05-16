var scl = 20;
var num_h = 20;
var num_w = 20;

// let w = 600;
// let h = 600;
//this will use grid world

function Point(x,y) {
    this.x = x;
    this.y = y;
}

let queue = [];
let stack = [];
let heap = [];


// maze represetned as a 2D bianry array where 0-> wall 1-> path
maze = [] 

function setup() {
    cnv = createCanvas(scl*num_h, scl*num_w);
    centerCanvas();
    maze_create(num_h, num_h);
    console.log(maze);
}

function draw() {
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            maze_show(i, j);
        }
    }
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}

function maze_create(h, w) {
    for (i = 0; i < h; i++) {
        maze[i] = [];
        for (j = 0; j < w; j++) {
            maze[i][j] = [true, true, true, true];
        }
    }
}

function is_same(a, b) {
    return (a.x == b.x && a.y == b.y);
}

function neighbors(i, j) {
    res = []
    var walls = maze[i][j];
    if(!walls[0]) {
        res.push(new Point(i - 1, j));
    }
    if(!walls[1]) {
        res.push(new Point(i, j + 1));
    }
    if(!walls[2]) {
        res.push(new Point(i + 1, j));
    }
    if(!walls[3]) {
        res.push(new Point(i, j - 1));
    }
    return res;
}

function maze_show(i, j) {
    x = i * scl;
    y = j * scl;
    stroke(255);
    var walls = maze[i][j];
    if(walls[0]) {
        line(x, y, x + scl, y);
    }
    if(walls[1]) {
        line(x + scl, y, x + scl, y + scl);
    }
    if(walls[2]) {
        line(x, y + scl, x + scl, y + scl);
    }
    if(walls[3]) {
        line(x, y, x, y + scl);
    }
}

//all of these variables are global and there is no security
function add_to_list(curr, pt) {
    if (!is_same(parent_map[curr], pt) && maze[curr.x - 1][curr.y] == 0) {
        queue.push(pt);
        parent_map[pt] = curr;
    }
}

function extract_path_bfs(curr) {
    path = [];
    term_pt = new Point(-1, -1);
    while (!is_same(curr, term_pt)) {
        path.push(curr);
        curr = parent_map[curr];
    }
    return path;
}

function bfs(maze) {
    queue = []
    origin = new Point(0,0);
    queue.push(origin);
    parent_map[origin] = new Point(-1, -1);
    visited = new Set();


    while (queue.length != 0) {
        var curr = queue.shift();
        if (curr.x = h - 1 && curr.y == w - 1) {
            return extract_path_bfs(curr);
        }
        if (visited.has(curr)) {
            continue;
        }
        visited.add(curr);

        var neigh = neighbors(curr.x, curr.y);

        for (n in neigh) {
            add_to_list(curr, n);
        }
        // var pt = new Point(curr.x - 1, curr.y);
        // add_to_list(curr, pt);
        // pt = new Point(curr.x + 1, curr.y);
        // add_to_list(curr, pt);
        // pt = new Point(curr.x, curr.y - 1);
        // add_to_list(curr, pt);
        // pt = new Point(curr.x, curr.y + 1);
        // add_to_list(curr, pt);
    }
    return;
}

function dfs(maze) {
    stack = []
    origin = new Point(0,0);
    stack.push(origin);
    parent_map[origin] = new Point(-1, -1);
    visited = new Set();


    while (stack.length != 0) {
        var curr = stack.pop();
        if (curr.x = h - 1 && curr.y == w - 1) {
            return extract_path_bfs(curr);
        }
        if (visited.has(curr)) {
            continue;
        }
        visited.add(curr);

        var pt = new Point(curr.x - 1, curr.y);
        add_to_list(curr, pt);
        pt = new Point(curr.x + 1, curr.y);
        add_to_list(curr, pt);
        pt = new Point(curr.x, curr.y - 1);
        add_to_list(curr, pt);
        pt = new Point(curr.x, curr.y + 1);
        add_to_list(curr, pt);
    }
    return;
}