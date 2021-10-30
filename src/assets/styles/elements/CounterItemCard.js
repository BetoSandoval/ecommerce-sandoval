import styled from "styled-components";

const CounterItemCard = styled.div`
  margin-bottom: 4rem;
  width: 26.2rem;
  display: inline-block;
  margin-bottom: 4rem;

  .title-item{
      text-align: center;
      margin: 1rem 0;    
  }
  .content-item {
    width: 26.2rem;

    .counter{
        display: flex;
        justify-content: space-around;
        margin: 1rem 0;

        .minus{
            width: 23.3%;
        }
        .count{
            width: 23.3%;
            text-align: center;
        }
        .plus{
            width:23.3%
        }
    }

    .add-shopping-car{
        text-align:center;
    }
  }
`;

export default CounterItemCard;