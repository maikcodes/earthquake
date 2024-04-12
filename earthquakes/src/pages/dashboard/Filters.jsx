import { Filter } from "@components/Filters"
import { useState } from "react"
import { FiltersList } from "@constants/index"

function Filters({ handleFiltersChange }) {

    const [isActive, setIsActive] = useState(false)

    const [filters, setFilters] = useState(FiltersList)

    const filtersString = () => {
        const list = filters.map((filter) => filter.isChecked ? filter.value : null)
        const filteredList = list.filter((item) => item !== null)
        const filtersString = filteredList.join(',')
        return filtersString
    }

    const handleFilter = () => {
        setIsActive(!isActive)
    }

    const handleApplyFilters = (e) => {
        e.preventDefault();
        const _filters = filtersString()
        if (_filters === '') {
            setFilters(FiltersList)
        }

        handleFiltersChange(_filters)
        setIsActive(false)
    }

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        setFilters(filters.map(filter => {
            if (filter.value === value) {
                return { ...filter, isChecked: checked };
            }
            return filter;
        }));
    };

    return (
        <Filter
            filters={filters}
            isActive={isActive}
            handleClick={handleFilter}
            handleApplyFilters={handleApplyFilters}
            handleFilterChange={handleFilterChange}
        />
    )
}
export default Filters