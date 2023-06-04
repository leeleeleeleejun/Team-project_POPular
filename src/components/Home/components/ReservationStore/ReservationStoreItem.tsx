import styled from 'styled-components';
import { Store } from '../../../../types/store';

interface Props {
  store: Store;
}

const ReservationStoreItem = ({ store }: Props) => {
  return (
    <Container>
      <InnerContent>
        <div className={'item-image'}>
          <img src={store.images[0]} alt={store.title} />
        </div>
        <div className={'item-description'}>
          <p className={'item-title'}>{store.title}</p>
          <p className={'item-period'}>
            {store.startDate} ~ {store.endDate}
          </p>
        </div>
      </InnerContent>
    </Container>
  );
};

const Container = styled.div``;

const InnerContent = styled.div`
  .item-image {
    border-radius: 8px;
    overflow: hidden;

    &:hover img {
      transform: scale(1.07);
    }
    img {
      transition: all 0.3s;
      width: 100%;
    }
  }

  .item-description {
    margin-top: 10px;
  }

  .item-title {
    font-weight: var(--weight-semi-bold);
    font-size: var(--font-small);
  }

  .item-period {
    margin-top: 5px;
    font-weight: var(--weight-regular);
    font-size: var(--font-micro);
    color: var(--color-gray);
  }
`;

export default ReservationStoreItem;
