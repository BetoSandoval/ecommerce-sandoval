import styled from "styled-components";

const ItemCard = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  display: inline-block;
  margin-bottom: 4rem;
  height: 40rem;
  border: 2px solid;
  border-radius: 6px;
  background-color: #2b2b2b;
  .title-item {
    border-bottom: 2px solid;
    text-align: center;
    color: white;
    padding: 1rem;
  }

  .img-desc-container {
    display: flex;
    align-items: center;
    padding: 0 5rem;
    height: 20rem;
    background-color: white;
    img {
      max-width: 20rem;
      max-height: 20rem;
      position: absolute;
    }
  }

  .info-container {
    color: white;
    padding: 3rem 0;
    position: relative;
    border-top: 2px solid;
    height: 10 rem;
    text-align: center;
  }
`;

export default ItemCard;
