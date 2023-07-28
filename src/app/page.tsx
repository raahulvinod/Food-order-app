import Featured from '@/components/Featured';
import Offter from '@/components/Offter';
import Slider from '@/components/Slider';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offter />
    </main>
  );
}
