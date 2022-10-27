import { NextPage } from "next";
import Lista from "../src/components/Lista/Lista";
import { Box } from '@mui/material'
import { Professor } from '../src/@types/professor';

const Home: NextPage = () => {

  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Elton Fonseca',
      foto: 'https://github.com/elton-fonseca.png',
      descricao: 'Descrição do professor 1',
      valor_hora: 100
    },
    {
      id: 2,
      nome: 'Luana Caroliny',
      foto: 'https://github.com/luacarol.png',
      descricao: 'Descrição do professor 2',
      valor_hora: 180
    }
  ]


  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={professores}></Lista>
      </Box>
    </>
  )
}

export default Home