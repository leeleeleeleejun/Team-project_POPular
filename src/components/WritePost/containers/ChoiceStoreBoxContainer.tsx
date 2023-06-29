import { useAppSelector, useAppDispatch } from '../../../Hooks/useSelectorHooks';
import { WritePostSliceActions } from '../WritePostSlice';
import { useState, useEffect } from 'react';
import { Store } from '../../../types/store';
import { API_PATH } from '../../../constants/path';
import filterFunc from '../../../utils/filterFunc';
import FilterContainer from './FilterContainer';
import FilterInfoContainer from './FilterInfoContainer';
import ChoiceStoreItemContainer from './ChoiceStoreItemContainer';
import SearchInputContainer from './SearchInputContainer';
import searchFilter from '../../../utils/SearchFilter';
import StoreItem from '../../common/Store/StoreItem';
import ChoiceStoreList from '../components/ChoiceStoreList';
import ChoiceStoreBox from '../components/ChoiceStoreBox';

const ChoiceStoreBoxContainer = () => {
  const choiceStoreId = useAppSelector((state) => state.WritePostSlice.choiceStoreId);
  const searchValue = useAppSelector((state) => state.WritePostSlice.searchValue);
  const filterCategory = useAppSelector((state) => state.WritePostSlice.categoryFilter);
  const filterAddress = useAppSelector((state) => state.WritePostSlice.addressFilter);
  const filterDate = useAppSelector((state) => state.WritePostSlice.durationFilter);

  const dispatch = useAppDispatch();
  const setChoiceStoreId = (id: string) => dispatch(WritePostSliceActions.setChoiceStoreId(id));
  const setFilterCategoryUse = (use: boolean) => dispatch(WritePostSliceActions.setFilterCategoryUse(use));
  const setFilterAddressUse = (use: boolean) => dispatch(WritePostSliceActions.setFilterAddressUse(use));
  const setFilterDurationUse = (use: boolean) => dispatch(WritePostSliceActions.setFilterDurationUse(use));
  const setFilterCategoryValue = (category: string) => dispatch(WritePostSliceActions.setFilterCategoryValue(category));
  const setFilterAddressValue = (address: string) => dispatch(WritePostSliceActions.setFilterAddressValue(address));

  let storeList: Store[] = [];
  const [stores, setStores] = useState<Store[]>();
  async function fetchData() {
    const response = await fetch(API_PATH.STORE.GET.ALL);
    const result = await response.json();
    setStores(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue.length > 0) {
      setFilterCategoryUse(false);
      setFilterAddressUse(false);
      setFilterDurationUse(false);
      setFilterCategoryValue('카테고리');
      setFilterAddressValue('지역');
    }
  }, [searchValue]);

  if (stores) {
    if (choiceStoreId && choiceStoreId.length > 0) {
      storeList = stores.filter((store) => store._id === choiceStoreId);
    } else if (searchValue.length > 0) {
      storeList = searchFilter(stores, searchValue);
    } else {
      storeList = filterFunc(stores, filterAddress, filterCategory, filterDate);
    }
  }

  return (
    <ChoiceStoreBox>
      <SearchInputContainer />
      <FilterContainer />
      <FilterInfoContainer />
      <ChoiceStoreList choice={choiceStoreId.length > 0}>
        {storeList
          ? storeList.map((store: Store) => (
              <ChoiceStoreItemContainer key={store._id} setChoiceStoreId={setChoiceStoreId} storeId={store._id}>
                <StoreItem store={store} />
              </ChoiceStoreItemContainer>
            ))
          : null}
      </ChoiceStoreList>
    </ChoiceStoreBox>
  );
};

export default ChoiceStoreBoxContainer;
