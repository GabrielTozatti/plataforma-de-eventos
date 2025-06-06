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
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// const TopBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 1rem;
// `;
//
// const SearchInput = styled.input`
//   flex: 1;
//   padding: 0.75rem 1rem;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   font-size: 1rem;
// `;
//
// const InsertButton = styled.button`
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: ${({ theme }) => theme.colors.white};
//   border: none;
//   padding: 0.75rem 1.5rem;
//   border-radius: 10px;
//   cursor: pointer;
//   font-weight: bold;
//   font-size: 0.95rem;
//
//   &:hover {
//     opacity: 0.9;
//   }
// `;