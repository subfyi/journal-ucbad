import {PageHeader} from '@/layout/Breadcrumb'
import Contact from "@/components/Contact";
import NavOne from "@/components/NavOne";
import ContactForm from "@/components/ContactForm";

const metaTitle = 'İletişim'
export const metadata = {
    title: metaTitle + ' | UCBAD',
    description: 'İletişim için buradan bize ulaşabilirsiniz.',
    openGraph: {
        title: metaTitle + ' | UCBAD',
        description: 'İletişim için buradan bize ulaşabilirsiniz.',
    }
}
export default function Page() {
    return <>
        <NavOne/>
        <PageHeader title={metaTitle}/>
        <Contact/>
        <ContactForm/>
    </>;
}
