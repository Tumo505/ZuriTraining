const fs = require('fs')
const fetch = require("node-fetch")


async function getPosts() {
    const posts = await fetch("http://jsonplaceholder.typicode.com/posts");
    let response = await posts.json()
        // console.log(response)

    fs.readFile('./result/posts.json', 'utf8', (err, data) => {
        if (err) throw err

        // posts = JSON.parse(content);
        // data.push(posts)

        fs.writeFile('./result/posts.json', JSON.stringify(posts), (err) => {
            if (err) throw err
        })
    })

}
getPosts()