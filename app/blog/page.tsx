import Link from 'next/link'
import fs from 'fs'

export default function Blog() {
    const files = fs.readdirSync('posts')

    const fileNames = files.map((filename) => filename.replace('.md', ''))

    return (
        <>
            <div>
                <h1>Blog</h1>
                <ul>
                    {fileNames.map((file) => (
                        <>
                            <li key={file}>
                                <Link href={`/blog/` + file}>{file}</Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </>
    )
}
