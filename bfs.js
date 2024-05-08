function bfsToTree(graph, startNode) {
    const tree = new Map();
    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);

    // Initialize the tree with all nodes
    for (const node of graph.keys()) {
        tree.set(node, { parent: null, children: [] });
    }

    while (queue.length > 0) {
        const currentNode = queue.shift();
        const neighbors = graph.get(currentNode);

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);

                tree.get(neighbor).parent = currentNode;
                tree.get(currentNode).children.push(neighbor);
            }
        }
    }

    return tree;
}

// Create the adjacency list graph from the matrix
const matrix = [];
for (let i = 0; i < 20; i++) {
    const row = [];
    for (let j = 0; j < 20; j++) {
        if ((i + j) % 2 === 1) {
            row.push(1);
        } else {
            row.push(0);
        }
    }
    matrix.push(row);
}

const graph = new Map();
for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const neighbors = [];
    for (let j = 0; j < row.length; j++) {
        if (row[j] === 1) {
            neighbors.push(j);
        }
    }
    graph.set(i, neighbors);
}

const secret = bfsToTree(graph, 0);
console.log(secret);
// Your existing code here...

// Function to stringify the secret object
function stringifySecret(secret) {
    let result = '{';
    let isFirstProperty = true;

    for (const [key, value] of secret.entries()) {
        if (!isFirstProperty) {
            result += ',\n ';
        }
        isFirstProperty = false;

        result += key + ': { parent: ' + (value.parent === null ? 'null' : value.parent) + ', children: [';
        if (value.children.length > 0) {
            result += value.children.join(', ');
        }
        result += '] }';
    }

    result += '}\n';
    return result;
}

// Usage
const secretString = stringifySecret(secret);
console.log(secretString);

document.addEventListener('DOMContentLoaded', function() {
    // Código que depende da variável secret
    const showButton = document.getElementById('showButton');
    const exibirDiv = document.getElementById('exibir');

    showButton.addEventListener('click', function() {
        
        exibirDiv.innerHTML = secretString;
    });
});