const cz = require('./commit-rules.json')
const fs = require('fs')
const path = require('path')

function convertCommitTypes(commitTypes) {
	let result = []
	let max = 0

	for (const key in commitTypes) {
		if (key.length > max) max = key.length
	}

	for (const key in commitTypes) {
		result.push({
			value: key,
			name: `${key}:${' '.repeat(max - key.length)} ${commitTypes[key]}`
		})
	}

	return result
}

module.exports = {
	types: convertCommitTypes(cz.types),
	...cz.other
}
