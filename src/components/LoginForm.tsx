'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from "next/image";
import logoImage from "@/assets/logo-tropa-digital.png"
import senhaAberta from "@/assets/senha-aberta.svg"
import senhaFechada from "@/assets/senha-aberta.svg"

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        if (email && senha) {
            router.push('/eventos');
        } else {
            alert('Preencha os campos corretamente');
        }
    }

    return (
        <FormContainer as="form" onSubmit={handleLogin}>
            <Image
                src={logoImage}
                alt="Ilustração do logo da Tropa Digital"
                width={161}
                height={25}
            />

            <h2>Bem-vindo de volta</h2>
            <p>Entre com sua conta para acessar o painel.</p>

            <label htmlFor="email">E-mail</label>
            <Input
                type="email"
                id="email"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="senha">Senha</label>
            <PasswordWrapper>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    id="senha"
                    placeholder="Digite aqui"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}>
                <Image
                  src={showPassword ? senhaAberta : senhaFechada}
                  alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  width={25}
                  height={17}
                />
              </ToggleButton>
            </PasswordWrapper>

          <Button type="submit">Enviar</Button>
        </FormContainer>
    );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  padding-right: 30px;

  h2 {
    color: #CB6330;
    font-weight: 700;
    font-size: 26px;
    line-height: 15px;
    margin-top: 35px;
    margin-bottom: 3px;
  }

  p {
    color: #2A4D8E80;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 35px;
  }

  label {
    color: #CB6330;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 12px 20px;
  border-radius: 100px;
  border: none;
  outline: none;
  background-color: #f8f8f8;
  width: 100%;
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
  color: #657593;
  margin-bottom: 20px;
    
  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    color: #657593;
    opacity: 1;
  },
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20%; 
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 12px 25px;
  border-radius: 2rem;
  background-color: #CB6330;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin-bottom: 60px;
  transition: all ease 0.5s;

  &:hover {
      transform: scale(1.03);
      transition: all ease 0.5s;
  }
`;