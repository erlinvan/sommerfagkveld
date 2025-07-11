import { Event } from './Event.tsx';
import styled from 'styled-components';
import { Props } from '../pages/Program.tsx';

export function Blokk({ eventList }: Props) {
	const sortedEventList = eventList.sort((a, b) =>
		a.tittel.localeCompare(b.tittel)
	);

	return Object.values(sortedEventList).map((event) => (
		<StyledEvent key={event.id}>
			<Event event={event} />
		</StyledEvent>
	));
}

const StyledEvent = styled.div`
	width: 100%;
	height: 90%;
	cursor: pointer;
`;
