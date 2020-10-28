import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import SubscribeOne from '../components/SubscribeOne'

const TeachersPage = () => {
    return (
        <Layout pageTitle="Etik İlkeler ve Yayın Politikası | UCBAD">
            <Topbar/>
            <NavOne/>
            <PageHeader title="Etik İlkeler ve Yayın Politikası"/>
            <section className="team-details">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <div className="team-details__content">

                                <p>Peer Review Policy<br/>National Environmental Science Research Journal (UCBAD), applies double blind peer-review process in which both the reviewer and the author
                                    are anonymous. Reviewer selection for each submitted article is up to area editors, and reviewers are selected based on the reviewer&rsquo;s expertise, competence,
                                    and previous experience in reviewing papers for UCBAD.<br/>Every submitted article is evaluated by area editor, at least, for an initial review. If the paper
                                    reaches minimum quality criteria, fulfills the aims, scope and policies of UCBAD, it is sent to at least two reviewers for evaluation.<br/>The reviewers evaluate
                                    the paper according to the Review guidelines set by editorial board members and return it to the area editor, who conveys the reviewers' anonymous comments back to
                                    the author. Anonymity is strictly maintained.<br/>The double blind peer-review process is managed using &ldquo;ULAKBİM Dergi Sistemleri&rdquo;, namely Dergipark
                                    platform.<br/><br/>Open Access Policy<br/>UCBAD provides immediate open access for all users to its content on the principle that making research freely available
                                    to the public, supporting a greater global exchange of knowledge.<br/><br/>Archiving Policy<br/>UCBAD is accessed by Dergipark platform which utilizes the LOCKSS
                                    system to create a distributed archiving system among participating libraries and permits those libraries to create permanent archives of the journal for purposes
                                    of preservation and restoration.<br/><br/>Originality and Plagiarism Policy<br/>Authors by submitting their manuscript to UCBAD declare that their work is original
                                    and authored by them; has not been previously published nor submitted for evaluation; original ideas, data, findings and materials taken from other sources
                                    (including their own) are properly documented and cited; their work does not violate any rights of others, including privacy rights and intellectual property
                                    rights; provided data is their own data, true and not manipulated. Plagiarism in whole or in part without proper citation is not tolerated by UCBAD. Manuscripts
                                    submitted to the journal will be checked for originality using anti-plagiarism software.<br/><br/>Journal Ethics and Malpractice Statement<br/>For all parties
                                    involved in the publishing process (the author(s), the journal editor(s), the peer reviewers, the society, and the publisher) it is necessary to agree upon
                                    standards of expected ethical behavior. The ethics statements for UCBAD are based on the Committee on Publication Ethics (COPE) Code of Conduct guidelines available
                                    at www.publicationethics.org.<br/><br/>1. Editor Responsibilities<br/>Publication Decisions &amp; Accountability<br/>The editor of UCBAD is responsible for deciding
                                    which articles submitted to the journal should be published, and, moreover, is accountable for everything published in the journal. In making these decisions, the
                                    editor may be guided by the journal&rsquo;s editorial board and/or area editors, and considers the policies of the journal. The editor should maintain the integrity
                                    of the academic record, preclude business needs from compromising intellectual and ethical standards, and always be willing to publish corrections, clarifications,
                                    retractions, and apologies when needed.<br/><br/>Fair play<br/>The editor should evaluate manuscripts for their intellectual content without regard to race, gender,
                                    sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy of the author(s).<br/><br/>Confidentiality<br/>The editor and any
                                    editorial staff must not disclose any information about a submitted manuscript to anyone other than the corresponding author, reviewers, potential reviewers, other
                                    editorial advisers, and the publisher, as appropriate.<br/><br/>Disclosure, conflicts of interest, and other issues<br/>The editor will be guided by COPE&rsquo;s
                                    Guidelines for Retracting Articles when considering retracting, issuing expressions of concern about, and issuing corrections pertaining to articles that have been
                                    published in UCBAD.<br/>Unpublished materials disclosed in a submitted manuscript must not be used in an editor&rsquo;s own research without the explicit written
                                    consent of the author(s). Privileged information or ideas obtained through peer review must be kept confidential and not used for personal advantage.<br/>The editor
                                    should seek so ensure a fair and appropriate peer-review process. The editor should recuse himself/herself from handling manuscripts (i.e. should ask a co-editor,
                                    associate editor, or other member of the editorial board instead to review and consider) in which they have conflicts of interest resulting from competitive,
                                    collaborative, or other relationships or connections with any of the authors, companies, or (possibly) institutions connected to the papers. The editor should
                                    require all contributors to disclose relevant competing interests and publish corrections if competing interests are revealed after publication. If needed, other
                                    appropriate action should be taken, such as the publication of a retraction or expression of concern.<br/><br/>2. Reviewer Responsibilities<br/>Contribution to
                                    editorial decisions<br/>Peer review assists the editor in making editorial decisions and, through the editorial communication with the author, may also assist the
                                    author in improving the manuscript.<br/><br/>Promptness<br/>Any invited referee who feels unqualified to review the research reported in a manuscript or knows that
                                    its timely review will be impossible should immediately notify the editor so that alternative reviewers can be contacted.<br/><br/>Confidentiality<br/>Any
                                    manuscripts received for review must be treated as confidential documents. They must not be shown to or discussed with others except if authorized by the
                                    editor.<br/><br/>Standards of objectivity<br/>Reviews should be conducted objectively. Personal criticism of the author(s) is inacceptable. Referees should express
                                    their views clearly with appropriate supporting arguments.<br/><br/>Acknowledgement of sources<br/>Reviewers should identify relevant published work that has not
                                    been cited by the author(s). Any statement that an observation, derivation, or argument had been previously reported should be accompanied by the relevant citation.
                                    Reviewers should also call to the editor&rsquo;s attention any substantial similarity or overlap between the manuscript under consideration and any other published
                                    data of which they have personal knowledge.<br/><br/>Disclosure and conflict of interest<br/>Privileged information or ideas obtained through peer review must be
                                    kept confidential and not used for personal advantage. Reviewers should not consider evaluating manuscripts in which they have conflicts of interest resulting from
                                    competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the submission.<br/><br/>3.
                                    Author Responsibilities<br/>Reporting standards<br/>Authors reporting results of original research should present an accurate account of the work performed as well
                                    as an objective discussion of its significance. Underlying data should be represented accurately in the manuscript. A paper should contain sufficient detail and
                                    references to permit others to replicate the work. Fraudulent or knowingly inaccurate statements constitute unethical behavior and are unacceptable.<br/><br/>Originality
                                    and plagiarism<br/>The authors should ensure that they have written entirely original works, and if the authors have used the work and/or words of others that this
                                    has been appropriately cited or quoted.<br/><br/>Multiple, redundant, or concurrent publication<br/>An author should not in general publish manuscripts describing
                                    essentially the same research in more than one journal or primary publication. Parallel submission of the same manuscript to more than one journal constitutes
                                    unethical publishing behavior and is unacceptable.<br/><br/>Acknowledgement of sources<br/>Proper acknowledgment of the work of others must always be given. Authors
                                    should also cite publications that have been influential in determining the nature of the reported work.<br/><br/>Authorship of a manuscript<br/>Authorship should
                                    be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study. All those who have made
                                    significant contributions should be listed as co-authors. Where there are others who have participated in certain substantive aspects of the research project, they
                                    should be named in an Acknowledgement section. The corresponding author should ensure that all appropriate co-authors are included in the author list of the
                                    manuscript, and that all co-authors have seen and approved the final version of the paper and have agreed to its submission for publication. All co-authors must be
                                    clearly indicated at the time of manuscript submission. Request to add co-authors, after a manuscript has been accepted will require approval of the
                                    editor.<br/><br/>Hazards and human or animal subjects<br/>If the work involves chemicals, procedures, or equipment that has any unusual hazards inherent in their
                                    use, the authors must clearly identify these in the manuscript. Additionally, manuscripts should adhere to the principles of the World Medical Association (WMA)
                                    Declaration of Helsinki regarding research study involving human or animal subjects.<br/><br/>Disclosure and conflicts of interest<br/>All authors should disclose
                                    in their manuscript any financial or other substantive conflict of interest that might be construed to influence the results or their interpretation in the
                                    manuscript. All sources of financial support for the project should be disclosed.<br/><br/>Fundamental errors in published works<br/>In case an author discovers a
                                    significant error or inaccuracy in his/her own published work, it is the author&rsquo;s obligation to promptly notify the journal&rsquo;s editor to either retract
                                    the paper or to publish an appropriate correction statement or erratum.<br/><br/>4. Publisher Responsibilities<br/>Editorial autonomy<br/>Academic Perspective
                                    Foundation is committed to working with editors to define clearly the respective roles of publisher and of editors in order to ensure the autonomy of editorial
                                    decisions, without influence from advertisers or other commercial partners.<br/><br/>Intellectual property and copyright<br/>We protect the intellectual property
                                    and copyright of Academic Perspective Foundation, its imprints, authors and publishing partners by promoting and maintaining each article&rsquo;s published version
                                    of record. Academic Perspective Foundation ensures the integrity and transparency of each published article with respect to: conflicts of interest, publication and
                                    research funding, publication and research ethics, cases of publication and research misconduct, confidentiality, authorship, article corrections, clarifications
                                    and retractions, and timely publication of content.<br/><br/>Scientific Misconduct<br/>In cases of alleged or proven scientific misconduct, fraudulent publication,
                                    or plagiarism the publisher, in close collaboration with the editors, will take all appropriate measures to clarify the situation and to amend the article in
                                    question. This includes the prompt publication of a correction statement or erratum or, in the most severe cases, the retraction of the affected work.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <SubscribeOne />
            <Footer/>
        </Layout>
    );
};

export default TeachersPage;
