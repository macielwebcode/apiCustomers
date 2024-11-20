import app from './app';

const port = 3000
app.listen(port, () => {
    console.log()
    console.log(`App rodando e escutando na porta:  ${port}`)
    console.log(`Acessar app http://localhost:${port}`)
});