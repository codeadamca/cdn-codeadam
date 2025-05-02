
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

const replace = document.getElementsByClassName("components")0;

for( let i = 0; i < replace.length; i ++ )
{
    console.log(replace[i].getAttribute("id"));
}