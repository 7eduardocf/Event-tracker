import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento"
import { obterId } from "../../util"

const useAdicionarEvento = ()=>{

    const setListaDeEventos = useSetRecoilState(listaDeEventosState)
    const hoje = new Date()
    return (evento: IEvento) =>{

        if(evento.inicio < hoje ){
            throw new Error("Eventos não podem ser cadastrados com data menor que a atual!")
        }
        evento.id = obterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }

}

export default useAdicionarEvento
