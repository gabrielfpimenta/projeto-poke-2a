import axios from "axios";

const ViaCep = () => {

    let cep = "";
    const handleBuscarCep = () => {
        cep = document.querySelector(".cep").value;
        if(cep.length == 8) {
            buscarCep ();
        }
    }

    function buscarCep(){
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
        alert(JSON.stringify(response.data))
    })
    }

    return (
        <div className="ViaCep">
            <input type = {"text"}
            placeholder="00000-000"
            className="cep" />
            <button onClick={handleBuscarCep}>
                Buscar
            </button>
        </div>
    )
}

export default ViaCep