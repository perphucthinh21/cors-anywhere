const corsProxy = require("cors-anywhere");

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy
	.createServer({
		originWhitelist: [
			"http://localhost:3000",
			"https://portfolio-ravenous.herokuapp.com",
			"http://18.191.112.47",
			"http://spm.cnexco.com",
			"https://spm.cnexco.com",
			"http://123.25.30.61:195",
			"",
		],
		removeHeaders: ["cookie", "cookie2"],
	})
	.listen(port, host, () => {
		console.log("Running CORS Anywhere on " + host + ":" + port);
	});
