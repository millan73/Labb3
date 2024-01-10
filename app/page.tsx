import Section from './components/Section'
import StartSection from './components/StartSection'
import styles from './rootStyle.module.css'
import Footer from './components/Footer'

export default function Page() {
    return (
        <>
            <div>
                <StartSection />
                <Section headerText={'Tjänster'} />
                <Section headerText={'Nyheter'} />
                <Footer />
            </div>
        </>
    )
}
