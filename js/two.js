const two = () => {
    try {
        let objeto = {
            prop1: "valor1",
            prop2: "valor2",
            prop3: "valor3"
        };
        let objetoATexto = JSON.stringify(objeto);
        return objetoATexto;
    } catch(e) {
        return e;
    }
}
export default two