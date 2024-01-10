import Section from './components/Section'
import StartSection from './components/StartSection'
import styles from './rootStyle.module.css'

export default function Page() {
    return (
        <>
            <div>
                <StartSection />
                <Section headerText={'Tjänster'} />
                <Section headerText={'Nyheter'} />
            </div>
        </>
    )
}
