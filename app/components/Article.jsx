import styles from '../rootStyle.module.css'

const servicesStyle = {
    color: 'white',
    backgroundColor: '#EA661E'
}

const newsStyle = {
    color: 'black',
    backgroundColor: 'white'
}

export default function Article({ name, header, body }) {
    return (
        <>
            <div
                className="card col-3"
                style={name != 'Tjänster' ? newsStyle : servicesStyle}
            >
                <div className="card-body">
                    <h5 className="card-title">{header}</h5>
                    <p className="card-text">{body}</p>
                    <a href="#" className={styles.cardLink}>
                        Läs mer här
                    </a>
                </div>
            </div>
        </>
    )
}
