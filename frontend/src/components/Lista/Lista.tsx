import { Button } from "@mui/material"
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return (
        <>
            <ListaStyled>
                <ItemLista>
                    <Foto src="https://github.com/luacarol.png"></Foto>
                    <Informacoes>
                        <Nome>Luana Caroliny</Nome>
                        <Valor>R$ 180,00</Valor>
                        <Descricao>Aulas de Programação, Criação de Sites e Jogos.</Descricao>
                        <Button>Marcar Aula</Button>
                    </Informacoes>
                </ItemLista>

                <ItemLista>
                    <Foto src="https://github.com/luacarol.png"></Foto>
                    <Informacoes>
                        <Nome>Luana Caroliny</Nome>
                        <Valor>R$ 180,00</Valor>
                        <Descricao>Aulas de Programação, Criação de Sites e Jogos.</Descricao>
                        <Button>Marcar Aula</Button>
                    </Informacoes>
                </ItemLista>

                <ItemLista>
                    <Foto src="https://github.com/luacarol.png"></Foto>
                    <Informacoes>
                        <Nome>Luana Caroliny</Nome>
                        <Valor>R$ 180,00</Valor>
                        <Descricao>Aulas de Programação, Criação de Sites e Jogos.</Descricao>
                        <Button>Marcar Aula</Button>
                    </Informacoes>
                </ItemLista>

                <ItemLista>
                    <Foto src="https://github.com/luacarol.png"></Foto>
                    <Informacoes>
                        <Nome>Luana Caroliny</Nome>
                        <Valor>R$ 180,00</Valor>
                        <Descricao>Aulas de Programação, Criação de Sites e Jogos.</Descricao>
                        <Button>Marcar Aula</Button>
                    </Informacoes>
                </ItemLista>
            </ListaStyled>
        </>
    )
}

export default Lista;