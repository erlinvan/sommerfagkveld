import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { JenteMedGlass } from './JenteMedGlass';

export function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<GlobalStyle hideScroll={isModalOpen} />
			<StyledNav className="navbar">
				<StyledNavLink to="/" activeclassname="active">
					Sommerfagkveld
				</StyledNavLink>
				<StyledButton className={'body-text'} onClick={handleModal}>
					Meny
				</StyledButton>
			</StyledNav>
			{isModalOpen && <MenuPopup handleModal={handleModal} />}
		</>
	);
}

const StyledNavLinkMeny = styled(NavLink)<{ activeclassname: string }>`
	color: var(--text-color);
	text-decoration: none;
	font-weight: normal;
	align-text: left;

	h3 {
		font-weight: lighter;
	}

	&:focus,
	&:hover,
	&.${(props) => props.activeclassname} {
		text-decoration: underline;
		font-weight: bold;
		color: var(--blokk-color);
	}
`;

const StyledButton = styled.button`
	color: var(--text-color);
	text-decoration: none;
	font-weight: normal;
	background: none;
	border: none;

	&:focus,
	&:hover {
		text-decoration: underline;
		font-weight: bold;
	}
`;
const StyledNavLink = styled(NavLink)<{ activeclassname: string }>`
	color: var(--text-color);
	text-decoration: none;
	font-weight: normal;
	padding: 1rem;

	&:focus,
	&:hover {
		text-decoration: underline;
		font-weight: bold;
	}
`;

const StyledNav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`;
export const MenuPopup = ({ handleModal }: { handleModal: () => void }) => (
	<MenuContainer>
		<Container>
			<CloseButton className={'body-text'} onClick={handleModal}>
				<p>Lukk </p> <StyledImg src="/sirkelmedkryss.svg" alt="pil" />
			</CloseButton>
			<PopupContent>
				<StyledNavLinkMeny
					to="/program"
					onClick={handleModal}
					activeclassname="active"
				>
					<h3>Program</h3>
				</StyledNavLinkMeny>
				<StyledNavLinkMeny
					to="/kart"
					onClick={handleModal}
					activeclassname="active"
				>
					<h3>Kart</h3>
				</StyledNavLinkMeny>
			</PopupContent>
			<BildeContainer>
				<JenteMedGlass />
			</BildeContainer>
		</Container>
	</MenuContainer>
);

const BildeContainer = styled.div`
	grid-area: bilde;
	max-width: 40rem;
	max-width: 40rem;
	align-self: end;
`;

const MenuContainer = styled.div`
	background-color: var(--background-color);
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	height: inherit;
	@media (min-width: 830px) {
		display: grid;
		grid-template-areas: 'header header' 'program bilde';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr;
	}
`;

const PopupContent = styled.div`
	grid-area: program;
	justify-self: flex-end;
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-top: 10rem;
	@media (min-width: 830px) {
		margin-right: 8rem;
		margin-top: -6rem;
		align-self: center;
	}
`;

const CloseButton = styled.button`
	grid-area: header;
	align-self: end;
	width: max-content;

	display: flex;
	align-items: center;
	gap: 1rem;

	background: none;
	border: none;
	cursor: pointer;
	font-weight: bold;

	@media (min-width: 830px) {
		justify-self: flex-end;
	}
`;

const GlobalStyle = createGlobalStyle<{ hideScroll: boolean }>`
  body {
    overflow: ${(props) => (props.hideScroll ? 'hidden' : 'auto')};
  }
`;

const StyledImg = styled.img`
	max-width: 100%;
	margin-left: 0 auto;
`;
