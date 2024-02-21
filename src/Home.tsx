import Countries from '@/ui/Countries';
import Footer from '@/ui/Footer';
import { Counter } from '@/ui/Counter';

// eslint-disable-next-line react-refresh/only-export-components
const metadata = {
  title: 'Archangle Advertising',
  description: 'Archangle Advertising',
};

export default function Home() {
  document.title = metadata.title;
  document.description = metadata.description;

  return (
    <div className="bg-white">
      <Countries />
      <Counter />
      <Footer />
    </div>
  );
}
