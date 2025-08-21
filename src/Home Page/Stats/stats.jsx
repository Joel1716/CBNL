import "./stats.css";
import React from "react";
import CountUp from "react-countup";
export default function Stats() {
  const stats = [
    {
      numbers: 100,
      text: "Sites Deployed",
      suffix: "+",
      decimals: 0,
    },
    {
      numbers: 200,
      text: "Projects Delivered",
      suffix: "+",
      decimals: 0,
    },
    {
      numbers: 50,
      text: "Partner Companies",
      suffix: "+",
      decimals: 0,
    },
    {
      numbers: 99.99,
      text: "Network Uptime",
      suffix: "%",
      decimals: 2,
    },
  ];
  return (
    <div className="stats-section">
      <div className="stats-heading text-center">
        <h3>Trusted Across the Continent</h3>
        <p>Our numbers reflect our commitment to excellence</p>
      </div>
      <div className="stats-container">
        {stats.map((stat) => {
          return (
            <div className="stats flex-center">
              <p className="stat-number">
                <Counter
                  number={stat.numbers}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </p>
              <p className="stat-text">{stat.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Counter({ number, decimals, suffix }) {
  return (
    <CountUp
      duration={2}
      className="counter"
      end={number}
      decimals={decimals}
      suffix={suffix}
    />
  );
}
