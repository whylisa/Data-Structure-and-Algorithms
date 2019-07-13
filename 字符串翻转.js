function str(s) {
	return s.split(" ").map(res => {
		res.reverse().join('')
	}).join(" ")
}