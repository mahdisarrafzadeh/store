import Head from 'next/head'

interface Props {
    title: string;
    desc: string;
}

const Meta = (props: Props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.desc} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
)
export default Meta