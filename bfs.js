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
console.log(graph);
function bfs(graph, start) {
	const visited = new Set();
	const queue = [start];

	while (queue.length > 0) {
		const node = queue.shift();

		if (visited.has(node)) {
			continue;
		}

		visited.add(node);

		const neighbors = graph.get(node);

		for (let i = 0; i < neighbors.length; i++) {
			queue.push(neighbors[i]);
		}
	}

	return visited;
}
 const secret = bfs(graph, 0);
 console.log(secret)