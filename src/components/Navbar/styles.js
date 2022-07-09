import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1f425a;
   
`

export const TitleMatch = styled.a`
     display:flex;
     align-items: center;
     gap: 0.5rem;
`
export const Form = styled.form`
     display: flex;
     gap: 0.5rem;
  

`
export const Input = styled.input`
    padding: .2rem .8rem;
    border-radius: 4px;
    border: none;

`
export const Button = styled.button`
    background-color: #9ac5e3;
    border: 2px solid  #9ac5e3;
    border-radius: 4px;
    color: #000;
    padding: .3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .4s;
    &:hover {
        background-color: transparent;
        color: #9ac5e3;
      }
`