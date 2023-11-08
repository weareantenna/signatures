const files = require.context('./../_data/signatures', true, /\.json$/i);

const data = [];
files.keys().map(key => data.push(files(key)));

export default data;
