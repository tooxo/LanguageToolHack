setTimeout(() => {
	let raw = window.localStorage.getItem("__lt_host_storage");
	let parsed = JSON.parse(raw);
	if (parsed[4]["value"] < 10) {
		parsed[4]["value"] = 10000;
		console.log(parsed);
		let serialized = JSON.stringify(parsed);
		window.localStorage.setItem("__lt_host_storage", serialized);
 		window.location.reload();
	}
}, 2500);
