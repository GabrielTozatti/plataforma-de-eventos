import styled from 'styled-components';
import { useState } from 'react';
import { FaEllipsisV} from 'react-icons/fa';
import iconVisualizar from "@/assets/icon-visualizar.svg"
import iconEditar from "@/assets/icon-editar.svg"
import iconRemover from "@/assets/icon-remover.svg"
import iconBuscar from "@/assets/icon-buscar.svg"
import iconeAdicionarNovo from "@/assets/icone-adicionar-novo.svg"
import Image from "next/image";

const mockEvents = [
  {
    id: 1,
    nome: 'Clube do Laço Coração Pantaneiro',
    equipes: 10,
    status: 'Ativo',
    data: '09 a 11 de Junho',
  },
  {
    id: 2,
    nome: 'Clube do Laço Coração Pantaneiro',
    equipes: 10,
    status: 'Ativo',
    data: '09 a 11 de Junho',
  },
  {
    id: 3,
    nome: 'Evento Teste',
    equipes: 8,
    status: 'Ativo',
    data: '15 a 17 de Julho',
  },
  {
    id: 4,
    nome: 'Torneio Sul-Mato-Grossense',
    equipes: 12,
    status: 'Ativo',
    data: '20 a 22 de Agosto',
  },
  {
    id: 5,
    nome: 'Evento Adicional',
    equipes: 6,
    status: 'Ativo',
    data: '02 a 04 de Setembro',
  },
];

const itemsPerPage = 2;

export default function EventTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handleAction = (action: string, id: number) => {
    setOpenMenuId(null);

    switch (action) {
      case 'visualizar':
        console.log(`Visualizar ${id}`);
        break;
      case 'editar':
        console.log(`editar ${id}`);
        break;
      case 'remover':
        console.log(`remover ${id}`);
        break;
    }
  };

  const filtered = mockEvents.filter((event) =>
    event.nome.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card>
      <Header>
        <Actions>
          <SearchWrapper>
            <Image
              src={iconBuscar}
              alt={'Ícone Buscar'}
              width={16}
              height={16}
            />
            <SearchInput
              placeholder="Buscar eventos"
              value={search}
              onChange={(e) => {
                setCurrentPage(1);
                setSearch(e.target.value);
              }}
            />
          </SearchWrapper>

          <NewButton>
            <Image
              src={iconeAdicionarNovo}
              alt={'Ícone adicionar novo evento'}
              width={16}
              height={16}
            />
            Inserir novo
          </NewButton>
        </Actions>
      </Header>

      <TableWrapper>
        <Table>
          <thead>
          <tr>
            <th>Nome do evento</th>
            <th>Total de equipes</th>
            <th>Status</th>
            <th>Data</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {paginated.map((event) => (
            <tr key={event.id}>
              <td>{event.nome}</td>
              <td>{event.equipes}</td>
              <td>
                <Status>
                  <Dot /> {event.status}
                </Status>
              </td>
              <td>{event.data}</td>
              <td>
                <MoreButton onClick={() => setOpenMenuId(event.id === openMenuId ? null : event.id)}>
                  <FaEllipsisV size={14} />
                </MoreButton>
                {openMenuId === event.id && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleAction('visualizar', event.id)}>
                      <Image
                        src={iconVisualizar}
                        alt={'Ícone Visualizar'}
                        width={16}
                        height={16}
                        style={{ marginRight: 8 }}
                      />
                      Visualizar
                    </DropdownItem>
                    <DropdownItem onClick={() => handleAction('editar', event.id)}>
                      <Image
                        src={iconEditar}
                        alt={'Ícone Visualizar'}
                        width={18}
                        height={18}
                        style={{ marginRight: 8 }}
                      />
                      Editar
                    </DropdownItem>
                    <DropdownItem danger onClick={() => handleAction('remover', event.id)}>
                      <Image
                        src={iconRemover}
                        alt={'Ícone Visualizar'}
                        width={16}
                        height={16}
                        style={{ marginRight: 8 }}
                      />
                      Remover
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </TableWrapper>

      <PaginationWrapper>
        <PageButtonLast
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Anterior
        </PageButtonLast>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <PageNumber
            key={num}
            active={num === currentPage}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </PageNumber>
        ))}

        <PageButtonNext
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Próxima
        </PageButtonNext>
      </PaginationWrapper>
    </Card>
  );
}

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 4px 20px #0000000a;
  padding: 1.5rem;
  overflow-x: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
`;

const SearchWrapper = styled.div`
  background: #F6F6F6;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  border-radius: 33px;
  gap: 0.5rem;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color:gray;
    
  &::placeholder {
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    color: #00000033;
  }
`;

const NewButton = styled.button`
  background: #CB6330;
  color: #FFFFFF;
  border: none;
  border-radius: 33px;
  padding: 15px 30px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 1rem;
  }

  th {
    color: #CC623780;
    font-weight: 500;
    font-size: 13px;
  }

  td {
    color: #657593;
    font-size: 0.92rem;
    border-top: 1px solid #CC623780;
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  background-color: #4DEF00;
  border-radius: 50%;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #CB6330;
  display: flex;
  align-items: center;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const PageButtonNext = styled.button`
  background: #CB6330;
  border: none;
  border-radius: 200px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #FFFFFF;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

const PageButtonLast = styled.button`
  background: #f4f4f4;
  border: none;
  border-radius: 200px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #252525;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

const PageNumber = styled.button<{ active?: boolean }>`
  background: ${({ active }) =>
  active ? '#CB6330' : '#f4f4f4'};
  color: ${({ active }) => (active ? '#FFFFFF' : '#252525')};
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
  font-weight: 400;
`;

const DropdownMenu = styled.div`
  position: absolute;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  right: 0;
  z-index: 10;
  margin-top: 0.5rem;
  width: 160px;
  overflow: hidden;
`;

const DropdownItem = styled.button<{ danger?: boolean }>`
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ danger }) => (danger ? 'red' : '#111')};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #f5f5f5;
  }
`;
