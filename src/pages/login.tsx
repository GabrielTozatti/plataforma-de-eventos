import styled from 'styled-components';
import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import loginImage from '@/assets/login-image.png';

export default function LoginPage() {
  return (
    <Container>
      <Card>
        <LeftContent>
          <LoginForm />
        </LeftContent>

        <RightContent>
          <ImageWrapper>
            <Image
              src={loginImage}
              alt="Ilustração de login"
              width={357}
              height={316}
              priority
            />
          </ImageWrapper>
        </RightContent>
      </Card>
    </Container>
  );
}

const Container = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  display: flex;
  width: 100%;
  height: 498px;
  max-width: 756px;
  box-shadow: 0 100px 200px 0 #00000040;
  overflow: hidden;
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 15px 50px 30px;
`;

const RightContent = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    position: relative;
    margin: 10px;
    border-radius: 20px;
    padding: 50px 10px 50px 15px;
`;

const ImageWrapper = styled.div`
    position: absolute;
    bottom: -4px;
    left: -42px;
`;
