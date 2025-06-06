import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Sidebar />
      <ContentArea>
        <Header />
        <MainContent>
          {children}
        </MainContent>
      </ContentArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
    padding: 0 32px 16px 32px;
  background-color: ${({ theme }) => theme.colors.input_background};
`;
