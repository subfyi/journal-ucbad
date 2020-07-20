import React from 'react';
import Link from "next/link";

const Faq = (props) => {
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">

                    {props.articles.data.map((row, i) => <>
                        <tr key={row.id} className={this.props.trstyle && this.props.trstyle(row)}>
                            <td><b>O{i + 1}</b></td>
                            <td><a href={"/year/" + year + "/paper/" + (row.id)}> {row.pap_title}</a></td>
                        </tr>


                        <div className="col-lg-6" key={row.id}>
                            <div className="faq-one__single">
                                <Link href="/course-details"><a>
                                    <div className="faq-one__content">
                                        <h2 className="faq-one__title">{row.tr_title}
                                        </h2>
                                        <p className="faq-one__text">
                                            {row.authors
                                                .map(a => a.first_name + " " + a.middle_name + " " + a.last_name)
                                                .join(", ")
                                            }
                                        </p>
                                        <a className="obj_galley_link file" href="https://ucbad.com/ucbad/article/view/volume-3-issue-2-article-5/69" aria-labelledby="article-137">
                                            Tam Metin [PDF]
                                        </a>
                                    </div>
                                </a></Link>

                                <div className="faq-one__icon">{row.first_page}-{row.last_page}</div>
                            </div>
                        </div>
                    </>)}

                </div>
            </div>
        </section>
    );
};

export default Faq;
