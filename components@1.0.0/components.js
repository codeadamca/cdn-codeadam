
const components = {
    'resources':
        '<div>' +
        'LIST OF RESOURCES' + 
        '</div>',
};

for (const [key, html] of Object.entries(components)) {

    console.log(`Key: ${key}`);
    console.log(`Component: ${html}`);

}