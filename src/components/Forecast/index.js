import React from "react";
import { ForecastWidget, AccordionItemStyle, ItemRevealStyle } from "./styled";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { List, Stack, Typography } from "@mui/material";
export const Forecast = ({ data }) => {
  console.log(data);
  const forecast = data.list;
  const dateConverter = (time) => {
    const unixTimestamp = time;

    const milliseconds = time * 1000; // 1575909015000

    const dateObject = new Date(milliseconds);

    const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15

    dateObject.toLocaleString("en-US", { weekday: "long" }); // Monday
    dateObject.toLocaleString("en-US", { month: "long" }); // December
    dateObject.toLocaleString("en-US", { day: "numeric" }); // 9
    dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
    dateObject.toLocaleString("en-US", { hour: "numeric" }); // 10 AM
    dateObject.toLocaleString("en-US", { minute: "numeric" }); // 30
    dateObject.toLocaleString("en-US", { second: "numeric" }); // 15
    dateObject.toLocaleString("en-US", { timeZoneName: "short" }); // 12/9/2019, 10:30:15 AM CST
    return [
      dateObject.toLocaleString("en-US", { weekday: "long" }),
      dateObject.toLocaleString("en-US", { hour: "numeric" }),
    ];
  };
  return (
    <>
      <ForecastWidget>
        <Accordion allowZeroExpanded>
          {forecast.map((item, indx) => (
            <AccordionItem key={indx} className="item">
              <AccordionItemStyle>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Typography variant="caption" className="day">
                      {dateConverter(item.dt)[0]}
                    </Typography>
                    <Typography variant="body2" className="hour">
                      {dateConverter(item.dt)[1]}
                    </Typography>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ItemRevealStyle>
                    <img
                      className="icon"
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="icon"
                    ></img>
                    <Typography variant="caption" className="description">
                      {item.weather[0].description}
                    </Typography>
                    <Typography variant="body1" className="min">
                      {Math.round(item.main.temp)}°
                    </Typography>
                  </ItemRevealStyle>
                </AccordionItemPanel>
              </AccordionItemStyle>
            </AccordionItem>
          ))}
        </Accordion>
      </ForecastWidget>
    </>
  );
};
