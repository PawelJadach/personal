import { Badge } from "@/components/ui/badge";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <svg
        className="fixed z-[-1] opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="1440"
        height="560"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1010")' fill="none">
          <path
            d="M1653.02 459.63C1459.66 457.87 1216.24 271.49 906.27 258.03 596.29 244.57 655.81-51.82 532.89-74.76"
            stroke="rgba(51,121,194,0.58)"
            stroke-width="2"
          ></path>
          <path
            d="M1518.76 358.27C1383.24 358.88 1270.48 476.19 988.37 470.27 706.26 464.35 636.02 9.53 457.98-27.29"
            stroke="rgba(51,121,194,0.58)"
            stroke-width="2"
          ></path>
          <path
            d="M1449.53 177.61C1311.96 183 1147.43 410.78 948.96 407.21 750.5 403.64 812.1-3.59 698.68-80.52"
            stroke="rgba(51,121,194,0.58)"
            stroke-width="2"
          ></path>
          <path
            d="M1552.16 134.95C1446.08 137.79 1358.32 292.37 1157.71 291.75 957.1 291.13 886.55 5.05 763.26-11.84"
            stroke="rgba(51,121,194,0.58)"
            stroke-width="2"
          ></path>
          <path
            d="M1613.69 416.15C1510.93 415.89 1411.17 346.15 1208.64 346.15 1006.12 346.15 1029.19 426.84 803.59 416.15 577.99 405.46 546.78-8.13 398.54-53.7"
            stroke="rgba(51,121,194,0.58)"
            stroke-width="2"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1010">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
      <div className="flex flex-col items-center">
        <TypographyH1>Pawel Jadach</TypographyH1>
        <TypographyH2 className="text-primary mt-2">
          Frontend Developer
        </TypographyH2>
        <div className="flex gap-3 mt-3">
          <Badge variant="outline">JavaScript</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Next.js</Badge>
        </div>
      </div>
    </div>
  );
}
