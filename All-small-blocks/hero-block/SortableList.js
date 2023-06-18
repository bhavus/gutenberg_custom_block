// eslint-disable-next-line import/no-extraneous-dependencies
import { useSortable } from '@dnd-kit/sortable';

const SortableList = (props) => {
	const { item } = props;

	const { attributes, listeners, setNodeRef } = useSortable({
		// eslint-disable-next-line react/destructuring-assignment
		id: props.id,
	});

	return (
		<div ref={setNodeRef} {...attributes} {...listeners}>
			<img src={item.url} alt={item.title} />
		</div>
	);
};

export default SortableList;
