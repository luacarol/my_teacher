import { styled } from '@mui/material'

export const ListaStyled = styled('ul')`

`

export const ItemLista = styled('li')`
    list-style: none;    
`

export const Foto = styled('img')`
    width: 100%;
`

export const Informacoes = styled('div')`
    
`

export const Nome = styled('h3')`
    margin: ${(props) => props.theme.spacing(2, 0, 0, 0)};
`

export const Valor = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main};
`

export const Descricao = styled('p')`
    
`