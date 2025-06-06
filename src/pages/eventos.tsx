import styled from 'styled-components';
import Layout from '@/components/Layout';
import EventTable from "@/components/EventTable";

export default function EventosPage() {
  return (
    <Layout>
      <Container>
        <h1>Todos eventos</h1>
        <EventTable/>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
    
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #CB6330;
  }
`;