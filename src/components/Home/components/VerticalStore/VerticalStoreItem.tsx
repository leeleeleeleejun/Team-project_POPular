import styled from 'styled-components';
import { Store } from '../../../../types/store';

interface Props {
  store: Store;
}

const VerticalStoreItem = ({ store }: Props) => {
  return (
    <Container>
      <InnerContent>
        <div className={'text-section'}>
          <p className={'item-title'}>{store.title}</p>
          <p className={'item-period'}>
            {store.start_date} ~ {store.end_date}
          </p>
        </div>
        <div className={'image-section'}>
          <img src={store.images[0]} alt={store.title} />
        </div>
      </InnerContent>
    </Container>
  );
};

const Container = styled.div``;

const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text-section {
    .item-title {
      font-weight: var(--weight-semi-bold);
      font-size: var(--font-regular);
    }

    .item-period {
      margin-top: 5px;
      font-weight: var(--weight-regular);
      font-size: var(--font-small);
      color: var(--color-gray);
    }
  }

  .image-section {
    width: 140px;
    height: 90px;
    overflow: hidden;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default VerticalStoreItem;
