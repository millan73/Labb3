import Link from 'next/link'
import fs from 'fs'

export default function Blog() {
    const files = fs.readdirSync('posts')

    const fileNames = files.map((filename) => filename.replace('.md', ''))

    console.log(fileNames)

    return (
        <>
            <div>
                <h1>Blog</h1>
            </div>
        </>
    )
}
