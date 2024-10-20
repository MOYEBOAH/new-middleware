const logger = (req, res, next) => {
	console.log(`${req.method} request to ${req.url}`);
	next(); // move to the next middleware
};

export default logger;
