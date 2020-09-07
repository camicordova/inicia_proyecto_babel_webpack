import one from "./one";
import two from "./two";

function init() {
    let respuesta= {
        status: "ok",
        one: one(),
        two: two(),
    }; 
    console.log(respuesta);
}
init();