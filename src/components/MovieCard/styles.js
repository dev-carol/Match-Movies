import styled from "styled-components";

export const Card = styled.div`
  width: 30%;
  color: #faf1f1;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #111;
  padding: 1rem;
`;
export const ImgMovie = styled.img`
  max-width: 100%;
`;
export const MovieTitle = styled.h2`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Average = styled.div`
  color: #f7d354;
  margin-bottom: 1rem;
`;

export const ButtonDetails = styled.button`
  background-color: transparent;
  border: 2px solid #9ac5e3;
  border-radius: 4px;
  color: #000;
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: bold;

  align-items: center;
  transition: 0.4s;
  &:hover {
    background-color: #ac3c4c;
    color: #fff;
  }
`;
