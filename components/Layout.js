import React from 'react';
import Head from 'next/head';
import moment from "moment";

const Layout = (props) => {
    const {articles, volume, issue, article, pageTitle} = props;

    return (
        <div>
            <Head>

                <title>{pageTitle}</title>

                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>


                {articles && <>
                    <base href="/"/>
                    <meta name="generator" content="Sub Network Solutions"/>

                    <meta name="description" content={articles.tr_abstract}/>
                    <meta name="keywords" content={(articles.keywords).filter(a => a.keyword.type == "tr").map(a => a.keyword.value).join(", ")}/>

                    <meta property="og:type" content="website" />
                    <meta name="og:title" property="og:title" content={articles.tr_title} />
                    <meta name="og:description" property="og:description" content="" />
                    <meta property="og:site_name" content="Ulusal Çevre Bilimleri Araştırma Dergisi"/>
                    <meta property="og:url" content={"https://ucbad.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}/>
                    <meta property="og:image" content="/favicon/android-icon-192x192.png"/>

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={articles.tr_title} />
                    <meta name="twitter:description" content={articles.tr_abstract}/>
                    <meta name="twitter:site" content="Ulusal Çevre Bilimleri Araştırma Dergisi"/>
                    <meta name="twitter:creator" content="Sub Network Solutions" />
                    <meta name="twitter:image" content="/favicon/android-icon-192x192.png"/>

                    <link rel="canonical" href={"https://ucbad.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}/>

                    <link rel="schema.DC"
                          href="http://purl.org/dc/elements/1.1/"/>

                    <meta name="DC.Contributor.Sponsor"
                          xmlLang="tr"
                          content/>

                    <link rel="alternate"
                          hrefLang="tr"
                          href={"https://ucbad.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}
                          id="link-alternate-tr"
                    />
                    <link rel="alternate"
                          hrefLang="en"
                          href={"https://ucbad.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}
                          id="link-alternate-en"
                    />

                    <meta
                        content={articles.updated_at}
                        property="article:modified_time"
                    />
                    <meta
                        content="article"
                        property="og:type"/>
                    <meta
                        content={articles.tr_title}
                        property="og:title"
                    />
                    {articles.files.map((file, index) =>
                        <meta
                            content={file.file}
                            property="og:url"/>
                    )}

                    {articles.citations.map((citation, index) =>
                        <meta
                            name={"citation_reference."+(index+1)}
                            content={citation.raw}
                        />
                    )}


                    <meta name="DC.Title"
                          content={articles.tr_title}
                    />
                    <meta name="DC.Description"
                          xmlLang="tr"
                          content={articles.tr_abstract}/>
                    <meta name="DC.Source" content="Ulusal Çevre Bilimleri Araştırma Dergisi"/>
                    <meta name="DC.Source.ISSN" content="2618-6128"/>
                    <meta name="DC.Source.Issue" content={issue}/>
                    <meta name="DC.Source.URI" content="https://ucbad.com/"/>
                    <meta name="DC.Source.Volume" content={volume}/>
                    <meta
                        name="DC.Subject"
                        xmlLang="tr"
                        content={(articles.keywords).filter(a => a.keyword.type == "tr").map(a => a.keyword.value).join(", ")}
                    />

                    <meta name="DC.Type"
                          content="Text.Serial.Journal"/>
                    <meta name="DC.Type.articleType"
                          content="article"/>
                    <meta name="DC.Date.created"
                          scheme="ISO8601"
                          content={articles.created_at}/>
                    <meta name="DC.Date.dateSubmitted"
                          scheme="ISO8601"
                          content={moment(articles.submission_date).format("DD-MM-YYYY")}/>
                    <meta name="DC.Date.issued"
                          scheme="ISO8601"
                          content={moment(articles.created_at).format("DD-MM-YYYY")}/>
                    <meta name="DC.Date.modified"
                          scheme="ISO8601"
                          content={articles.updated_at}/>

                    {articles.authors.map((authorin, index) =>
                        <meta name={"DC.Creator.PersonalName."+(index+1)}
                              content={authorin.author.first_name + " " + ((authorin.author.middle_name && (authorin.author.middle_name + " ")) || "") + authorin.author.last_name}/>
                    )}

                    <meta name="DC.Format" scheme="IMT" content="application/pdf"/>

                    <meta name="DC.Identifier" content={articles.volume + articles.issue + articles.order_num}/>
                    <meta name="DC.Identifier.pageNumber" content={articles.first_page + "-" + articles.last_page}/>
                    <meta
                        name="DC.Identifier.URI"
                        content={"https://ucbad.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}
                    />
                    <meta name="DC.Language" content='tr scheme="ISO639-1"'/>

                    <meta name="gs_meta_revision" content="1.1"/>

                    <meta
                        name="citation_journal_title"
                        content="Ulusal Çevre Bilimleri Araştırma Dergisi"
                    />

                    {articles.authors.map((authorin, index) =>
                        <meta name={"citation_author."+(index+1)}
                              content={authorin.author.first_name + " " + (authorin.author.middle_name && (authorin.author.middle_name + " ")) + authorin.author.last_name}/>
                    )}
                    <meta name="citation_title" content={articles.tr_title}/>

                    <meta name="citation_date" content={moment(articles.pubdate).format("DD-MM-YYYY")}/>
                    <meta name="citation_publication_date" content={moment(articles.pubdate).format("DD-MM-YYYY")}/>
                    <meta name="citation_issn" content="2618-6128"/>
                    <meta name="citation_volume" content={volume}/>
                    <meta name="citation_issue" content={issue}/>
                    <meta name="citation_firstpage" content={articles.first_page}/>
                    <meta name="citation_lastpage" content={articles.last_page}/>
                    <meta
                        name="citation_abstract_html_url"
                        content={"https://ucbad.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}
                    />
                    <meta name="citation_language" content="tr"/>
                    <meta
                        name="citation_keywords"
                        xmlLang="tr"
                        content={(articles.keywords).filter(a => a.keyword.type == "tr").map(a => a.keyword.value).join(", ")}
                    />

                    {articles.files.map((file, index) =>
                        <meta name="citation_pdf_url" content={file.file}/>
                    )}


                    {articles.citations.map((citation, index) =>
                        <meta
                            name={"citation_reference."+(index+1)}
                            content={citation.raw}
                        />
                    )}

                    <meta
                        id="meta_stats_updated_at"
                        name="stats_updated_at"
                        content={articles.updated_at}
                    />

                    <meta name="DC.Language" scheme="ISO639-1" content="tr"/>
                    <meta name="DC.Rights" content="https://ucbad.com/doc/ucbad-telif-hakki-formu.pdf"/>

                </>}

                <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>

                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="/assets/plugins/bootstrap/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/css/animate.min.css"/>
                <link rel="stylesheet" href="/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css"/>
                <link rel="stylesheet" href="/assets/plugins/kipso-icons/style.css"/>
                <link rel="stylesheet" href="/assets/css/style.css"/>
                <link rel="stylesheet" href="/assets/css/responsive.css"/>

            </Head>
            <div className="page-wrapper">
                {props.children}
            </div>

            <script src="/assets/plugins/bootstrap/jquery.min.js"></script>
            <script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>
        </div>
    );
}

export default Layout;