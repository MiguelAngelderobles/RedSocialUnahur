const configurApp = async (app) => {
    app.set('port',process.env.PORT || 7000)
    app.listen(app.get('port'),()=>
    {console.log(`Server connect port ${app.get('port')}`)})
}

module.exports = configurApp;
