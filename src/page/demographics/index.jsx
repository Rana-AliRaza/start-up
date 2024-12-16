import React from "react";
import Heading from "../../components/shared/heading";
import ApexChart from "../../components/shared/apexChart";
import HomeCards from "../../components/shared/Cards";
const Demographics = () => {
  const chartData = [
    {
      key: 1,
      title: "Age Distribution",
      percentage: [10, 20, 40, 30],
      labels: ["11-20", "21-30", "31-40", "41-50"],
    },
    {
      key: 2,
      title: "Gender Distribution",
      percentage: [35, 40, 25],
      labels: [ "Men", "Women","Children"],
    },
    {
      key: 3,
      title: "Common Medical Conditions",
      percentage: [10, 20, 40, 30],
      labels: ["11-20", "21-30", "31-40", "41-50"],
    },
    {
      key: 4,
      title: "Gender Distribution",
      percentage: [25, 15, 25, 35],
      labels: ["Hypertension", "Chronic Pain", "Asthma", "Diabetes"],
    },
  ];

  const cardData = [
    {
        id: 1,
        label: 5000,
        desc: 'Total Patients Registered',
        color: '#D780FE',
    },
    {
        id: 2,
        label: '48%',
        desc: 'Gender Distribution (Male)',
        color: '#FFB780',
    },
    {
        id: 3,
        label: '50%',
        desc: 'Gender Distribution (Female)',
        color: '#79DC8E',
    },
    {
        id: 4,
        label: 300,
        desc: 'New Patients (Last 30 Days)',
        color: '#7E81C8',
    }
]

  return (
    <div className="demographics-sec px-8 pb-8">
      <Heading title="Demographics" />
      
      <div className="demographic-cards">
        <HomeCards data={cardData} />
      </div>

      <div className="charts grid grid-cols-2 gap-4 flex-wrap  mt-8">
        {chartData.map(({ id, title, percentage, labels }) => (
          <div className="flex justify-center  bg-white  p-4 rounded-lg shadow-lg" key={id}>
            <ApexChart title={title} labels={labels} percentage={percentage} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Demographics;
