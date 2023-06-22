import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Skyscanner</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            // href={'https://hover.gg/'}
                        >
                            {/* <h4>www.hover.gg</h4> */}
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>April 2023 - May 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                {/* <p>
                    Targeted towards online content creators and streamers
                    looking to build a brand, Hover is the home of over 150K
                    users. Written in Typescript using React, React-Native,
                    Framer, Express, and Redux.
                </p> */}
                <br />
                <ul>
                    <li>
                        <p>
                        Engineered a dropwizard micro-service to facilitate seamless search experience for users; developed algorithms that delivered
search results within 3 seconds, resulting in a 25% increase in user engagement.
                        </p>
                    </li>
                    <li>
                        <p>
                        Constructed the data flow architecture for the application, including handling and processing of 10k+ user searches daily;
integrated machine learning models that optimized search results and increased click-through rate by 30%
                        </p>
                    </li>
                    <li>
                        <p>
                        Created a JSON serialization method for search results that increased communication efficiency by 23%, allowing the
application to return search results to users faster.
                        </p>
                    </li>
                    <li>
                        <p>
                        Developed a data deserialization mechanism that seamlessly integrated with the application, reducing search processing time
by 17% and improved user experience.
                        </p>
                    </li>
                    {/* <li> */}
                        {/* <p>
                            Rebuilt the website with React and shared mobile app
                            components allowing users to access a wide variety
                            of app interactions entirely on the web, resulting
                            in over 700,000 total site visits.
                        </p> */}
                    {/* </li>1111 */}
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>10X Academy</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            // href={'https://bracs.co/'}
                        >
                            {/* <h4>www.bracs.co</h4> */}
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>DSA & Dev Mentor</h3>
                        <b>
                            <p>Sep 2022 - Apr 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <br />
                <ul>
                    <li>
                        <p>
                        Mentored over 500+ students & working professionals, in DSA & Dev.Taken 1:1, group mentoring, doubt sessions.
                        </p>
                    </li>
                    <li>
                        <p>
                        Helped them in debugging codes, assignments & various projects.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>USthaan</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            // href={'https://kfxnyc.com/'}
                        >
                            {/* <h4>www.kfxnyc.com</h4> */}
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Development Engineer Intern</h3>
                        <b>
                            <p>May 2022, Nov 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                {/* <p>
                    Applied problem solving and technical skills to operate
                    large equipment such as rain machines, fog machines, small
                    explosives and general rigging with a professional crew of
                    50+ people.
                </p> */}
                <br />
                <ul>
                    <li>
                        <p>
                        Wrote Unit tests and e2e tests for the application using Jasmine, Karma, chaiJs & mocha.

                        </p>
                    </li>
                    <li>
                        <p>
                        Increased the code coverage from 33 to 92 percent, created a new service to avoid multiple deployments, this reduced the time
taken during deployment of the services.
                        </p>
                    </li>
                    <li>
                        <p>
                        Utilized JIRA to track and report issues and analyzed Jenkins and Rapid Automation Software logs to troubleshoot and resolve
issues with microservices.
                        </p>
                    </li>
                    <li>
                        <p>
                        Developed JSON Schemas & implemented Lambda functions on AWS for real-time email notifications of new orders & signups.
                        </p>
                    </li>
                    
                    <li>
                        <p>
                        Worked with AWS Cloudformation templates to manage services like EC2, S3 buckets, Dynamodb
                        </p>
                    </li>
                    <li>
                        <p>
                        Reviewed, analyzed and optimized 20+ pull requests to ensure the highest quality code and adherence to industry best
practices; improved code stability by 25% through active collaboration with developers.
                        </p>
                    </li>
                    <li>
                        <p>
                        Engineered and implemented an automation pipeline for deploying services in prod and alpha environments using Groovy
and Jenkins; reduced deployment time by 40% and enabled faster feature delivery with less downtime.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
