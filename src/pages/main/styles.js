import styled from 'styled-components';
import bg from '../../assets/bg-movin.jpg';

export const Container = styled.div`
    background-image: url(${bg});
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Content = styled.div`
    padding: 30px;
    background: linear-gradient(to top left,black 22%,rgba(0,0,0,0) 100%);
    height: 100vh;
`; 

