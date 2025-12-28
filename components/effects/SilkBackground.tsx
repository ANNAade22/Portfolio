'use client';

import config from '@/portfolio-plan.json';
import Silk from './Silk';
import { SomaliStar } from '@/components/ui/SomaliStar';

export function SilkBackground() {
  const silkConfig = config.globalLayers.Silk;
  const starConfig = config.globalLayers.SomaliStar;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Silk
        speed={silkConfig.speed}
        scale={silkConfig.scale}
        color={silkConfig.color}
        noiseIntensity={silkConfig.noiseIntensity}
        rotation={silkConfig.rotation}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SomaliStar
          color="#ffffff"
          size="w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          opacity={0.15}
          showRing={false}
          className=""
        />
      </div>
    </div>
  );
}

