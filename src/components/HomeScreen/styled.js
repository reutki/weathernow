import styled from "@emotion/styled";

export const HomeScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  background: image();
`;
export const TopDataContainer = styled.div`
  width: 100%;
  display: grid;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  .city_name {
    margin-top: 54px;
  }
  .temperature_data {
    font-size: 96px;
    font-weight: 100;
    line-height: 70px;
    letter-spacing: 0.37400001287460327px;
    margin: 12px 0;
  }
  .icon {
    align-self: center;
    justify-self: center;
  }
  .clouds_status {
    opacity: 0.6;
    color: rgba(235, 235, 245);
  }
  .high_low_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const HouseContainer = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  background: image("/src/images/background.png");
`;