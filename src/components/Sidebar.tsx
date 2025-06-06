import styled from 'styled-components';
import { useRouter } from 'next/router';
import logoImage from "@/assets/logo-tropa-digital.png";
import iconDashboard from "@/assets/icon-dashboard.svg"
import iconEventos from "@/assets/icon-eventos.svg"
import iconEquipes from "@/assets/icon-equipes.svg"
import iconInscricoes from "@/assets/icon-inscricoes.svg"
import iconSair from "@/assets/icon-sair.svg"
import iconalterarDados from "@/assets/icon-alterar-dados.svg"
import fotoUsuario from "@/assets/usuario.png"
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: iconDashboard },
    { label: 'Eventos', path: '/eventos', icon: iconEventos, active: true },
    { label: 'Equipes', path: '/equipes', icon: iconEquipes },
    { label: 'Inscrições', path: '/inscricoes', icon: iconInscricoes },
  ];

  return (
    <Container>
      <Nav>
        <LogoWrapper>
          <Image
            src={logoImage}
            alt="Ilustração do logo da Tropa Digital"
            width={191}
            height={25}
          />
        </LogoWrapper>
        <span>menu</span>
        <Menu>
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              $active={router.pathname === item.path || item.active}
              onClick={item.active ? () => router.push(item.path) : undefined}
            >
              <Icon>
                <Image
                  src={item.icon}
                  alt={`Ícone do(a) ${item.label}`}
                  width={15}
                  height={15}
                />
              </Icon>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Nav>
      <Footer>
        <User>
          <UserProfile>
            <Image
              src={fotoUsuario}
              alt={`Foto do usuário`}
              width={40}
              height={40}
              style={{ borderRadius: '36%' }}
            />
          </UserProfile>
          <UserInfo>
            <strong>Kaique Steck</strong>
            <span>Administrador</span>
          </UserInfo>
        </User>
        <FooterButton>
          <Image
            src={iconalterarDados}
            alt={`Ícone alterar dados`}
            width={20}
            height={20}
          />
          <p>Alterar dados</p>
        </FooterButton>
        <FooterButton onClick={() => router.push('/')}>
          <Image
            src={iconSair}
            alt={`Ícone sair`}
            width={20}
            height={20}
          />
          <p>Sair</p>
        </FooterButton>
      </Footer>
    </Container>
  );
}

const Container = styled.aside`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 15px;
`;

const Nav = styled.nav`
  span {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 10px;
    font-weight: 800;
    line-height: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 10px;
    padding-left: 8px;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MenuItem = styled.li<{ $active?: boolean }>`
  cursor: ${({ $active }) => $active ? 'pointer' : 'default'};;
  color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.text};
  background-color: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.white};
  font-weight: 500;
  border-radius: 5px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  padding: ${({ $active }) => $active ? '10px 10px 10px 0' : '10px 0px 10px 0px'};
    
  &:hover {
    opacity: ${({ $active }) => $active ? '0.8' : '1'};;
  }
`;

const Icon = styled.li<{ $active?: boolean }>`
  padding: 0 8px;
`;

const Footer = styled.footer`
    position: relative;
    margin-top: auto;
    display: flex;
    flex-direction: column;

    &:after {
      content: '';
      position: absolute;
      width: 95%;
      height: 1px;
      top: -30%;
      left: 50%;
      transform: translate(-50%, -30%);
      background-color: lightgray;
    }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  width: fit-content;
  cursor: pointer;
`;

const UserProfile = styled.div`
  position: relative;
    
  &:after {
    content: '';
    position: absolute;
    width: 94%;
    height: 84%;
    margin: 0 auto;
    padding: 3px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 36%;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const UserInfo = styled.div`
  margin-left: 10px;;
  font-size: 14px;
  font-weight: 500;

  strong {
    display: block;
    font-weight: bold;
  }

  span {
    font-size: 11px;
    font-weight: 400;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.light_balck_50};
  }
`;

const FooterButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    margin: 15px 0 10px 16px;
    
  p {
    margin-left: 10px;
    margin-top: 2px;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.text};
  }
    
  &:hover {
    opacity: 1;
  }
`;
