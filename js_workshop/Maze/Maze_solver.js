//this will use grid world

function Point(x,y) {
    this.x = x;
    this.y = y;
}

// maze represetned as a 2D bianry array where 0-> path 1-> wall
maze = [] 

function is_same(a, b) {
    return (a.x == b.x && a.y == b.y);
}


function maze_create(h, w) {
    for (i = 0; i < h; i++) {
        maze[i] = [];
        for (j = 0; j < w; j++) {
            if (i == 0 || j == 0 || i == h - 1 || j == w -1) {
                maze[i][j] = 0;
            } else {

            }
        }
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