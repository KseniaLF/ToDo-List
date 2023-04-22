import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';

import { Button } from 'components/Button/Button';
import { FilterWrapper } from './StatusFilter.styled';
import { setStatusFilter } from 'redux/filtersSlice';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <FilterWrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </FilterWrapper>
  );
};
