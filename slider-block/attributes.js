const attributes = {
    images: {
        type: 'array',
        source: 'query',
        selector: 'img',
        query: {
            url: {
                type: 'string',
                source: 'attribute',
                attribute: 'src',
            },
            alt: {
                type: 'string',
                source: 'attribute',
                attribute: 'alt',
            },
        }
    }
}
export default attributes; 
