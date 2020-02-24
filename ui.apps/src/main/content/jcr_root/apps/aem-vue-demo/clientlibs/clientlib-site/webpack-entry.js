const components = require.context('../../components', true, /\.scss$|\.tsx?$/);
components.keys().forEach(components);
