import { useState } from "react";

const EXPLICIT_SELECTION = {
	mode: "explicit",
	selectedIds: [],
};

const ALL_SELECTION = {
	mode: "all",
	excludedIds: [],
};

function useSelection() {
	const [selection, setSelection] = useState(EXPLICIT_SELECTION);

	const isSelecting = selection.mode === "explicit" ? Boolean(selection.selectedIds.length) : true;

	const isSelected = (customerId) => {
		if (!isSelecting) return false;
    
		if (selection.mode === "all") {
			return Boolean(!selection.excludedIds.includes(customerId));
		}

		if (selection.mode === "explicit") {
			return Boolean(selection.selectedIds.includes(customerId));
		}
	};

	const toggleSelectAll = () => {
		setSelection((prevValues) => (prevValues.mode === "all" ? EXPLICIT_SELECTION : ALL_SELECTION));
	};

	const cancelSelection = () => {
		setSelection(EXPLICIT_SELECTION);
	};

	const addToSelectedIds = (customerId) => {
		setSelection((prevValues) => ({
			...prevValues,
			selectedIds: [...prevValues.selectedIds, customerId],
		}));
	};

	const removeFromExcludedIds = (customerId) => {
		setSelection((prevValues) => ({
			...prevValues,
			excludedIds: prevValues.excludedIds.filter((id) => id !== customerId),
		}));
	};

	const handleSelect = (customerId) => {
		if (selection.mode === "explicit") {
			addToSelectedIds(customerId);
		} else {
			removeFromExcludedIds(customerId);
		}
	};

	const removeFromSelectedIds = (customerId) => {
		setSelection((prevValues) => ({
			...prevValues,
			selectedIds: prevValues.selectedIds.filter((id) => id !== customerId),
		}));
	};

	const addToExcludedIds = (customerId) => {
		setSelection((prevValues) => ({
			...prevValues,
			excludedIds: [...prevValues.excludedIds, customerId],
		}));
	};

	const handleDeselect = (customerId) => {
		if (selection.mode === "explicit") {
			removeFromSelectedIds(customerId);
		} else {
			addToExcludedIds(customerId);
		}
	};

	const toggleSelect = (event, customerId) => {
		if (event.target.checked) {
      handleSelect(customerId);
		} else {
      handleDeselect(customerId);
		}
	};
  
	return {
		handleSelect,
		isSelected,
		isSelecting,
		toggleSelect,
		toggleSelectAll,
		cancelSelection,
    selectionState: selection
	};
}

export default useSelection;
