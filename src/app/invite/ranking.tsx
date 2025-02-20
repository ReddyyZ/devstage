import Image from "next/image";
import medalCooper from "../../assets/medal-cooper.svg";
import medalGold from "../../assets/medal-gold.svg";
import medalSilver from "../../assets/medal-silver.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl font-semibold text-gray-200">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative flex w-full items-start justify-between rounded-xl border border-gray-600 bg-gray-700">
          <div className="space-y-2 px-7 py-6">
            <p className="text-sm leading-none text-gray-300">
              <span className="font-semibold">1.°</span> | Arthur Oliveira
            </p>
            <p className="font-heading text-2xl font-semibold text-gray-200">
              1.128
            </p>
          </div>
          <Image src={medalGold} alt="medal-gold" className="mr-8" />
        </div>
        <div className="relative flex w-full items-start justify-between rounded-xl border border-gray-600 bg-gray-700">
          <div className="space-y-2 px-7 py-6">
            <p className="text-sm leading-none text-gray-300">
              <span className="font-semibold">1.°</span> | Melissa Loures
            </p>
            <p className="font-heading text-2xl font-semibold text-gray-200">
              928
            </p>
          </div>
          <Image src={medalSilver} alt="medal-gold" className="mr-8" />
        </div>
        <div className="relative flex w-full items-start justify-between rounded-xl border border-gray-600 bg-gray-700">
          <div className="space-y-2 px-7 py-6">
            <p className="text-sm leading-none text-gray-300">
              <span className="font-semibold">1.°</span> | Rodrigo Gonçalves
            </p>
            <p className="font-heading text-2xl font-semibold text-gray-200">
              875
            </p>
          </div>
          <Image src={medalCooper} alt="medal-gold" className="mr-8" />
        </div>
      </div>
    </div>
  );
}
