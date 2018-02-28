var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    articleOne:{
    title:'ArticleOne',
    heading:'Article One by Manjula',
    date:'Feb 27,2018',
    content:` <p>
                This is Article One and easy one.This is Article One and easy one.This is Article One and easy one.
            </p>
            <p>
                This is Article One and easy one.This is Article One and easy one.This is Article One and easy one.
            </p>
            <p>
                This is Article One and easy one.This is Article One and easy one.This is Article One and easy one.
            </p>`
                },
    articleTwo:{
    title:'ArticleTwo',
    heading:'ArticleTwo by Manjula',
    date:'Feb 25,2018',
    content:` <p>
                This is ArticleTwo and easy one.This is ArticleTwo and easy one.This is ArticleTwo and easy one.
            </p>
            `},
    articleThree:{
    title:'ArticleThree',
    heading:'ArticleThree by Manjula',
    date:'Feb 28,2018',
    content:` <p>
                This is ArticleThree and easy one.
            </p>
            `},
};
function createTemp(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var temp=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class='styles'>
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h4>${heading}</h4>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`
return temp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    var articleName=req.params.articleName;
    res.send(createTemp(articles[articleName]));
});

app.get('/counter',function (req, res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
