// const path = require('path')

// module.export = {
//     entry: { main: './src/client/app/index.jsx'},
//     output: {
//         path: path.resolve(_dirname, 'dist'),
//         filename: 'app.bundle.js'
//     },
//     module: {
//         rules: [ {
//             test: /\.scss$/,
//             use: [
//                 'style-loader',​
//                 'css-loader',​      
//                 'sass-loader'​ 
//             ]
//         }]
//     }
// }

const path = require('path');
module.exports = {
    entry: { main: './src/client/app/index.jsx' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
   };