import axios from "axios";
import React from "react";

async function getData() {
  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: 21.0285, 
        longitude: 105.8542, 
        hourly: "temperature_2m,weathercode", 
        timezone: "Asia/Ho_Chi_Minh",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function page() {
  const weatherData = await getData();

  if (!weatherData) {
    return <div>Không tải được dữ liệu</div>;
  }

  const { hourly } = weatherData;
  const { time, temperature_2m, weathercode } = hourly;

  return (
    <div>
      <h1 className="text-[40px]">Thông tin thời tiết</h1>
      <ul>
        {time.map((timePoint: any, index: number) => (
          <li key={timePoint}>
            <p>
              Thời gian:
              {new Date(timePoint).toLocaleString("en-US", {
                timeZone: "Asia/Ho_Chi_Minh",
              })}
            </p>
            <p>Nhiệt độ: {temperature_2m[index]} °C</p>
            <p>Mã thời tiết: {weathercode[index]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
