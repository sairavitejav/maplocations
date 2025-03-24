import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(#961D19, #852ABA);
`;

export const LoginHeader = styled.h1`
    color: #6466E3;
    font-size: 64px;
    font-weight: bold;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;
`;

export const Input = styled.input`
    height: 40px;
    width: 500px;
    font-size: 24px;
    padding: 5px;
    padding-left: 15px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #000000;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const InputC = styled.input`
    height: 20px;
    width: 20px;
    margin-right: 10px;
`;

export const LabelC = styled.label`
    color: #FFFFFF;
    font-size: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const LoginButton = styled.button`
    height: 40px;
    width: 100px;
    font-size: 24px;
    background-color: #36A0E2;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #FFFFFF;
    cursor: pointer;
`;

export const ErrorMessage = styled.p`
    color: red;
    margin-top: 10px;
    text-align: center;
    font-size: 30px;
`;