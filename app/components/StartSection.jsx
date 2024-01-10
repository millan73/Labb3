import Image from 'next/image'
import WhatWeOfferPic from '../img/top.jpeg'
import buttonIcon from '../img/Vector.png'
import styles from '../rootStyle.module.css'

export default function StartSection() {
    return (
        <div className="row ">
            <div className={styles.bg}>
                <Image
                    src={WhatWeOfferPic}
                    alt="arbetsplatsen"
                    placeholder="blur"
                    width={500}
                    height={300}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <aside className="col-2">
                <div>
                    <h2>Vi erbjuder</h2>
                    <p>
                        Mitt företag är ett IT-företag som erbjuder
                        expertkompetens inom området för utveckling av
                        IT-system.
                    </p>
                </div>
                <div className="row ">
                    <Image
                        src={buttonIcon}
                        alt="image"
                        width={35}
                        height={35}
                    />
                    <button className="btn btn-primary ml-3">
                        Vad vi erbjuder
                    </button>
                </div>
            </aside>
        </div>
    )
}
