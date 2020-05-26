const configs = {
	development: {
		uri: 'http://localhost:3004/hris-apollo/v1'
	}
};

const ev = process.env.NODE_ENV || 'development';

export default configs[ev];