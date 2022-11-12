import styled from "@emotion/styled";

export const HomeScreenContainer = styled.div`
  /* width: 100%;
  height: 100%; */
`;
export const TopDataContainer = styled.div`
  width: 100%;
  display: grid;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  .city_name {
    text-align: center;
  }
  .temperature_data {
    font-size: 96px;
    font-weight: 100;
    line-height: 70px;
    letter-spacing: 0.37400001287460327px;
    margin: 20px 0;
  }
  .icon {
    width: 200px;
    align-self: center;
    justify-self: center;
  }
  .clouds_status {
  }
  .high_low_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
  }
`;

export const RainProbability = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 80%;
  text-align: center;
  margin: 12px auto;
  background: #fdfcfc;
  border-radius: 11px;
  padding: 6px 20px;
  color: #c4c4c4;
`;
