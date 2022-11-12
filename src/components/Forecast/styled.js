import styled from "@emotion/styled";

export const ForecastWidget = styled.div`
  .item {
    max-width: max-content;
  }
  .accordion {
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    max-width: 80%;
    text-align: center;
    margin: 30px auto;
    border-radius: 11px;
    height: max-content;
  }
`;
export const AccordionItemStyle = styled.div`
  color: white;
  display: grid;
  text-align: center;
  width: 100px;
  margin: 0 3px;
  border-radius: 18px;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
`;

export const ItemRevealStyle = styled.div`
  width: 100px;
  display: grid;
  overflow: hidden;
`;
