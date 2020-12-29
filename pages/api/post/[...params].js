export default (req, res) => {
    console.log(req.body);
    const { query: { params } } = req

    res.end(`Post: ${params.join(', ')}`)
    res.json({params});
};