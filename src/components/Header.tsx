import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Title>Bem-vindo de volta, <strong>Kaique Steck</strong> </Title>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
    padding: 32px 32px 16px 32px;
  background-color: ${({ theme }) => theme.colors.input_background};
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.dark_grey};
    
  strong {
      color: ${({ theme }) => theme.colors.text};
  }
`;