import Head from 'next/head'

const BASE_URL = 'https://transline-logistics.com'

const PageHead = ({
    headTitle,
    metaDescription,
    metaKeywords,
    canonicalUrl,
}) => {
    const title = headTitle
        ? `${headTitle} | Transline Logistics`
        : 'Transline Logistics | Pharmaceutical Logistics & Freight Forwarding'

    const description =
        metaDescription ||
        'Transline Logistics specialises in pharmaceutical logistics, air freight, sea freight and cold chain solutions from India to global destinations with compliant, time‑critical delivery.'

    const keywords =
        metaKeywords ||
        'Transline Logistics, pharmaceutical logistics, pharma freight, air freight India, sea freight India, cold chain logistics, pharma supply chain, freight forwarding Mumbai'

    const canonical = canonicalUrl || BASE_URL

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonical} />
                <link rel="shortcut icon" href="/assets/imgs/favicon.png" />
                <link rel="icon" type="image/png" href="/assets/imgs/favicon.png" />
            </Head>
        </>
    )
}

export default PageHead