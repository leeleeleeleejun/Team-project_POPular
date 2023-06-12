import SearchContainerWrap from '../../common/SearchInput/SearchInput';
import FilterContainer from './FilterContainer';
import FilterInfoContainer from './FilterInfoContainer';
import ChoiceStoreItemContainer from './ChoiceStoreItemContainer';
import { useAppSelector, useAppDispatch } from '../../../Hooks/useSelectorHooks';
import { WritePostSliceActions } from '../WritePostSlice';
import { useState, useEffect } from 'react';
import StoreItem from '../../common/Store/StoreItem';
import { Store } from '../../../types/store';
import filterFunc from '../../../utils/filterFunc';
import ChoiceStoreList from '../components/ChoiceStoreList';
import ChoiceStoreBox from '../components/ChoiceStoreBox';
import { API_PATH } from '../../../constants/path';
const ChoiceStoreBoxContainer = () => {
  const choiceStoreId = useAppSelector((state) => state.WritePostSlice.choiceStoreId);
  const dispatch = useAppDispatch();
  const setChoiceStoreId = (id: string) => {
    return dispatch(WritePostSliceActions.setChoiceStoreId(id));
  };
  const filterCategory = useAppSelector((state) => state.WritePostSlice.categoryFilter);
  const filterAddress = useAppSelector((state) => state.WritePostSlice.addressFilter);
  const filterDate = useAppSelector((state) => state.WritePostSlice.durationFilter);

  const [stores, setStores] = useState<Store[]>();
  async function fetchData() {
    const response = await fetch(API_PATH.STORE.GET.ALL);
    const result = await response.json();
    setStores(result);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ChoiceStoreBox>
      <SearchContainerWrap placeholder={'스토어를 검색해주세요.'} />
      <FilterContainer />
      <FilterInfoContainer />
      <ChoiceStoreList choice={choiceStoreId.length > 0}>
        {stores ? (
          filterFunc(stores, filterAddress, filterCategory, filterDate, choiceStoreId).map((store: Store) => (
            <ChoiceStoreItemContainer key={store._id} setChoiceStoreId={setChoiceStoreId} storeId={store._id}>
              <StoreItem store={store} />
            </ChoiceStoreItemContainer>
          ))
        ) : (
          <li></li>
        )}
      </ChoiceStoreList>
    </ChoiceStoreBox>
  );
};

export default ChoiceStoreBoxContainer;
