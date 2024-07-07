import MainCards from '@/components/Maincards/MainCards';
import Form from '@/components/Form/Form';
import FormContextProvider from '@/context/FormContext';

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-full sm:flex-row sm:items-center">
      <FormContextProvider>
        <MainCards />
        <Form />
      </FormContextProvider>
    </main>
  );
}
