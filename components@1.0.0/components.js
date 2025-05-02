
const components = {
    'resources':
        '<div>' +
        'LIST OF RESOURCES' + 
        '</div>',
};

/*
for (const [key, html] of Object.entries(components)) {
    console.log(`Key: ${key}`);
    console.log(`Component: ${html}`);
}
*/

const replace = document.getElementsByClassName("components");

for( let i = 0; i < replace.length; i ++ )
{
    const id = replace[i].getAttribute("id");
    replace[i].innerHTML = components[id];
}