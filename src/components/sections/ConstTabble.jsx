"use client";
import { montserrat } from "@/app/layout";

const ConstTable = () => {
  return (
    <section className="w-full px-4 md:px-16 lg:px-24 xl:px-32 mb-10">

      <h2
        className={`${montserrat.className} w-full text-4xl md:text-6xl leading-[50px] md:leading-[84px] font-normal mb-4 text-[#636024] text-center`}
      >
        Стоимость сопровождения
      </h2>

      <div className="relative overflow-x-auto border border-[#636024] rounded-2xl mt-10">
        <table className={`w-full text-sm text-left`}>

          <thead className="bg-[#636024] text-white">
            <tr>
              <th className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-8 font-medium text-center">Программа</th>
              <th className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-8 font-medium text-center">Стоимость</th>
              <th className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-8 font-medium text-center">Примечание</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-[#EEE9CB] text-black">
              <td className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-8 text-center">Языковая программа</td>
              <td className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-8 text-center">¥2900</td>
              <td className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-8 text-center">
                Длительность сопровождения: ~7 месяцев
              </td>
            </tr>

            <tr className="bg-[#EEE9CB] text-black">
              <td className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-center">
                Бакалавриат / магистратура
              </td>
              <td className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-center">¥3300</td>
              <td className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-center">
                Длительность сопровождения: ~7 месяцев
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </section>
  );
};

export default ConstTable;