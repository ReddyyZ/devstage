import Image from "next/image";
import medalCooper from "../../../assets/medal-cooper.svg";
import medalGold from "../../../assets/medal-gold.svg";
import medalSilver from "../../../assets/medal-silver.svg";
import { getRanking } from "@/http/api";

export async function Ranking() {
  const { ranking } = await getRanking();

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl font-semibold text-gray-200">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking &&
          ranking.map((item, index) => {
            const rankingPosition = index + 1;

            return (
              <div
                key={item.id}
                className="relative flex w-full items-start justify-between rounded-xl border border-gray-600 bg-gray-700"
              >
                <div className="space-y-2 px-7 py-6">
                  <p className="text-sm leading-none text-gray-300">
                    <span className="font-semibold">{rankingPosition}.°</span> |{" "}
                    {item.name}
                  </p>
                  <p className="font-heading text-2xl font-semibold text-gray-200">
                    {item.score}
                  </p>
                </div>
                <Image
                  src={
                    rankingPosition === 1
                      ? medalGold
                      : rankingPosition === 2
                        ? medalSilver
                        : rankingPosition === 3
                          ? medalCooper
                          : null
                  }
                  alt="medal-gold"
                  className="mr-8"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
