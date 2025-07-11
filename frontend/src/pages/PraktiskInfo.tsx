import styled from 'styled-components';

export function PraktiskInfo() {
	return (
		<>
			<div>
				<h1>Praktisk info v2</h1>
			</div>
			<div>
				<Description>
					Velkommen til Sommerfagkveld på Havet, 23. juli september 2025!
					Her finner du litt praktisk informasjon rundt dagen, så
					sjekk gjerne innom denne siden om du lurer på noe når du
					rusler rundt på Havet. 🚃
				</Description>
			</div>
		</>
	);
}

const Description = styled.p`
	padding: 0 2rem;
`;
