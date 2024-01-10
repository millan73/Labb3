import Link from 'next/link'
import styles from './rootStyle.module.css'
import '@/styles/global.css'

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Mitt företag</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                ></meta>
            </head>
            <body>
                <div className="container-fluid">
                    <div className="header row">
                        <Link href={'/'} className={styles.homeLink}>
                            <h1 className={styles.homeLink}>Mitt företag</h1>
                        </Link>

                        <nav>
                            <ul className="nav justify-content-end ">
                                <li className="nav-item">
                                    <Link
                                        href={'/services'}
                                        className={'nav-link'}
                                    >
                                        Tjänster
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'/news'} className={'nav-link'}>
                                        Nyheter
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href={'/about'}
                                        className={'nav-link'}
                                    >
                                        Om oss
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href={'/contact'}
                                        className={'nav-link'}
                                    >
                                        Kontakt
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'/blog'} className={'nav-link'}>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    )
}
