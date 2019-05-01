exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            movie: 'Avanngers',
            title: 'A very good movie'
        }]
    });
};

exports.createPost = (req,res,next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.json({
        message: 'Thank you, message sendt',
        post: {id: new Date().toISOString(), title: title, content: content}
    })
}