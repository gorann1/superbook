import ContactForm from '@/components/ContactForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Contact() {
  return (
    <Main
      meta={<Meta title="SCUBAbooker | Contact" description="Lorem ipsum" />}
    >
      <ContactForm />
    </Main>
  );
}
