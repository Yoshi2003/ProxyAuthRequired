import React, { useState } from 'react';
import './Resources.css';

// Existing Resource Arrays
const redditSubreddits = [
  { name: 'r/CompTIA', url: 'https://www.reddit.com/r/CompTIA/' },
  { name: 'r/CyberSecurity', url: 'https://www.reddit.com/r/cybersecurity/' },
  { name: 'r/AskNetsec', url: 'https://www.reddit.com/r/AskNetsec/' },
  { name: 'r/Casp', url: 'https://www.reddit.com/r/casp/' },
  { name: 'r/ITCareerQuestions', url: 'https://www.reddit.com/r/ITCareerQuestions/' },
  { name: 'r/WGU', url: 'https://www.reddit.com/r/WGU/' },
  { name: 'r/CCNA', url: 'https://www.reddit.com/r/ccna/' },
  { name: 'r/sysadmin', url: 'https://www.reddit.com/r/sysadmin/' },
  { name: 'r/linuxquestions/', url: 'https://www.reddit.com/r/linuxquestions/' },
];

const redditPosts = [
  { title: 'View my Reddit post- How I passed 9 CompTIA certs with no experience and key tips on how I got my job.', url: '#' },
  { title: '##', url: '#' },
  { title: '##', url: '#' },
  { title: '##', url: '#' },
  { title: 'How I passed COMPTIA A+ N+ S+', url: 'https://www.reddit.com/r/CompTIA/comments/1cra3cg/how_i_passed_comptia_a_n_s/' },
];

const youtubeChannels = [
  { name: 'Professor Messer', url: 'https://www.youtube.com/@professormesser' },
  { name: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck' },
  { name: 'PowerCertAnimatedVideos', url: 'https://www.youtube.com/@PowerCertAnimatedVideos' },
  { name: 'HackerSploit', url: 'https://www.youtube.com/@HackerSploit' },
  { name: 'Cyberkraft', url: 'https://www.youtube.com/@cyberkraft' },
  { name: 'howtonetwork', url: 'https://www.youtube.com/@howtonetworkcom' },
  { name: 'MyCS1', url: 'https://www.youtube.com/@MyCS1/videos' },
  
];

const youtubeVideos = [
  { title: 'A+ Core 1 Overview', url: '#' },
  { title: 'Security+ Latest Objectives Walkthrough', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
  { title: '#', url: '#' },
];

const udemyCourses = [
  { title: 'CompTIA A+ Complete Course', url: '#' },
  { title: 'CompTIA Security+ (SY0-601) Bootcamp', url: '#' },
];

const linkedInPeople = [
  { name: 'John Doe (Cybersecurity Analyst)', url: '#' },
  { name: 'Jane Smith (SOC Lead)', url: '#' },
];

const otherResources = [
  { name: '*VERY IMPORTANT FOR CASP* -wyzguyscybersecurity blog', url: 'https://wyzguyscybersecurity.com/new-insights-for-the-casp-cas-004-exam/' },
  { name: 'Official CompTIA Resources', url: 'https://www.comptia.org/resources' },
  { name: 'Cybrary', url: 'https://www.cybrary.it' },
  { name: 'OWASP Official Site', url: 'https://owasp.org' },
  { name: 'Pluralsight', url: 'https://www.pluralsight.com/' },
  
  
];


const comptiaObjectives = [
  { cert: 'A+ Core 1', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-a-220-1101-exam-objectives-(3-0)' },
  { cert: 'A+ Core 2', url:  'https://partners.comptia.org/docs/default-source/resources/comptia-a-220-1102-exam-objectives-(3-0)' },
  { cert: 'Network+ (009)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-network-n10-009-exam-objectives-(4-0)' },
  { cert: 'Security+ (701)', url: 'https://certblaster.com/wp-content/uploads/2023/11/CompTIA-Security-SY0-701-Exam-Objectives-1.pdf' },
  { cert: 'CySA+ (003)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-cysa-cs0-003-exam-objectives-2-0.pdf' },
  { cert: 'CASP+ (004)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-casp-cas-004-exam-objectives-(4-0)' },
  { cert: 'PenTest+ (002)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-pentest-pt0-002-exam-objectives-(4-0)' },
  { cert: 'Cloud+ (003)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-cloud-cv0-003-exam-objectives-(1-0)#:~:text=%EE%80%80CompTIA%EE%80%81%20exams%20result%20from%20subject%20matter' },
  { cert: 'Cloud Essentials', url: 'https://partners.comptia.org/docs/default-source/resources/cloud-essentials-certification-guide' },
  { cert: 'Linux+ (005)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-linux-xk0-005-exam-objectives-(1-0)' },
  { cert: 'Data+ (001)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-data-da0-001-exam-objectives-(2-0)' },
  { cert: 'DataSys+', url: 'https://partners.comptia.org/certifications/datasys' },
  { cert: 'DataX+', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-datax-dy0-001-exam-objectives-(5-0)' },
  { cert: 'Server+ (005)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-server-sk0-005-exam-objectives' },
  { cert: 'Project+ (005)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-project-pk0-005-exam-objectives-(2-0)' },
  { cert: 'ITF', url: 'https://www.comptia.jp/pdf/CompTIA%20IT%20Fundamentals%20FC0-U61%20Exam%20Objectives.pdf' },
  { cert: 'Tech+', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-tech-fc0-u71-exam-objectives-(1-2)' },
  { cert: 'SecurityX (CASP 005)', url: 'https://partners.comptia.org/docs/default-source/resources/comptia-securityx-cas-005-exam-objectives-(3-0)' }
];


const securityFrameworks = [
  { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
  { name: 'ISO/IEC 27001', url: 'https://www.iso.org/isoiec-27001-information-security.html' },
  { name: 'Lockheed Martin Cyber Kill Chain', url: 'https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html' },
  { name: 'MITRE ATT&CK Framework', url: 'https://attack.mitre.org/' },
  { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
  { name: 'COBIT', url: 'https://www.isaca.org/resources/cobit' },
  { name: 'ITIL (Information Technology Infrastructure Library)', url: 'https://www.itlibrary.org/' },
  { name: 'PCI-DSS (Payment Card Industry Data Security Standard)', url: 'https://www.pcisecuritystandards.org/' },
  { name: 'HIPAA Security Rule', url: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html' },
  { name: 'Sarbanes-Oxley (SOX) IT Controls', url: 'https://www.sarbanes-oxley-101.com/sarbanes-oxley-compliance.htm' },
  { name: 'FedRAMP', url: 'https://www.fedramp.gov/' },
  { name: 'CIS Controls', url: 'https://www.cisecurity.org/controls' },
  { name: 'ENISA (European Union Agency for Cybersecurity) Guidelines', url: 'https://www.enisa.europa.eu/' },
  { name: 'SANS Top 20 Critical Controls', url: 'https://www.cm-alliance.com/consultancy/compliance-gap-analysis/sans-top-20-controls/' },
  { name: 'Cybersecurity Maturity Model Certification (CMMC)', url: 'https://www.acq.osd.mil/cmmc/' },
  { name: 'FISMA (Federal Information Security Management Act)', url: 'https://www.cisa.gov/topics/cyber-threats-and-advisories/federal-information-security-modernization-act' },
  { name: 'NERC CIP', url: 'https://www.nerc.com/pa/CI/tpv5impmntnstdy/CIPV5_FAQs_Consolidated_Oct2015_Oct_13_2015.pdf' },
  { name: 'GDPR (General Data Protection Regulation)', url: 'https://gdpr.eu/' },
  { name: 'HITRUST CSF', url: 'https://hitrustalliance.net/' },
  { name: 'ISO/IEC 27002', url: 'https://www.iso.org/standard/73906.html' },
  { name: 'NIST 800-53 Security Controls', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  { name: 'NIST 800-171', url: 'https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final' },
  { name: 'Unified Kill Chain', url: 'https://www.unifiedkillchain.com/assets/The-Unified-Kill-Chain.pdf' },
  { name: 'VERIS', url: 'http://veriscommunity.net/' },
  { name: 'Diamond Model of Intrusion Analysis', url: 'https://www.threatintel.academy/wp-content/uploads/2020/07/diamond-model.pdf' },
  { name: 'ATT&CK for ICS', url: 'https://collaborate.mitre.org/attackics/index.php/Main_Page' },
  { name: 'SOC2', url: 'https://www.vanta.com/products/soc-2' },
  { name: 'ISO 22301 (Business Continuity)', url: 'https://www.iso.org/iso-22301-business-continuity.html' },
  { name: 'ISO/IEC 27004 (Information Security Management — Monitoring, Measurement, Analysis, and Evaluation)', url: 'https://www.iso.org/standard/42505.html' },
  { name: 'ISO/IEC 27006 (Requirements for Bodies Providing Audit and Certification of Information Security Management Systems)', url: 'https://www.iso.org/standard/43506.html' },
  { name: 'ISO/IEC 27007 (Guidelines for Information Security Management Systems Auditing)', url: 'https://www.iso.org/standard/44375.html' },
  { name: 'ISO/IEC 27008 (Guidance for Auditors on Information Security Controls)', url: 'https://www.iso.org/standard/50518.html' },
  { name: 'ISO/IEC 27011 (Information Security Management Guidelines for Telecommunications Organizations)', url: 'https://www.iso.org/standard/43755.html' },
  { name: 'ISO/IEC 27013 (Guidance on the Integrated Implementation of ISO/IEC 27001 and ISO/IEC 20000-1)', url: 'https://www.iso.org/standard/68427.html' },
  { name: 'ISO/IEC 27014 (Governance of Information Security)', url: 'https://www.iso.org/standard/43756.html' },
  { name: 'ISO/IEC 27031 (Guidelines for Information and Communication Technology Readiness for Business Continuity)', url: 'https://www.iso.org/standard/44374.html' },
  { name: 'ISO/IEC 27032 (Guidelines for Cybersecurity)', url: 'https://www.iso.org/standard/44375.html' },
  { name: 'ISO/IEC 27033 (Network Security)', url: 'https://www.iso.org/standard/63411.html' },
  { name: 'ISO/IEC 27034 (Application Security)', url: 'https://www.iso.org/standard/44379.html' },
  { name: 'ISO/IEC 27041 (Guidelines on Assuring Suitability and Adequacy of Incident Investigative Methods)', url: 'https://www.iso.org/standard/44403.html' },
  { name: 'ISO/IEC 27042 (Guidelines on Digital Evidence Analysis)', url: 'https://www.iso.org/standard/44404.html' },
  { name: 'ISO/IEC 27043 (Incident Investigation Principles and Processes)', url: 'https://www.iso.org/standard/44405.html' },
  { name: 'ISO/IEC 27044 (Guidelines for Security Information and Event Management)', url: 'https://www.iso.org/standard/44406.html' },
  { name: 'ISO/IEC 29100 (Privacy Framework)', url: 'https://www.iso.org/standard/45123.html' },
  { name: 'ISO/IEC 29134 (Guidelines for Privacy Impact Assessment)', url: 'https://www.iso.org/standard/62289.html' },
  { name: 'ISO/IEC 29151 (Code of Practice for Personally Identifiable Information Protection)', url: 'https://www.iso.org/standard/62725.html' },
  { name: 'ISO/IEC 38500 (Governance of IT for the Organization)', url: 'https://www.iso.org/standard/51639.html' },
  { name: 'NIST SP 800-160 (Systems Security Engineering)', url: 'https://csrc.nist.gov/publications/detail/sp/800-160/vol-1/final' },
  { name: 'NIST SP 800-190 (Application Container Security Guide)', url: 'https://csrc.nist.gov/publications/detail/sp/800-190/final' },
  { name: 'NIST SP 800-207 (Zero Trust Architecture)', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' },
  { name: 'NIST SP 800-218 (Secure Software Development Framework)', url: 'https://csrc.nist.gov/publications/detail/sp/800-218/final' },
  { name: 'NIST SP 800-53A (Assessing Security and Privacy Controls in Federal Information Systems and Organizations)', url: 'https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final' },
  { name: 'NIST SP 800-63 (Digital Identity Guidelines)', url: 'https://pages.nist.gov/800-63-3/' },
  { name: 'NIST SP 800-37 (Risk Management Framework for Information Systems and Organizations)', url: 'https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final' },
  { name: 'NIST SP 800-39 (Managing Information Security Risk)', url: 'https://csrc.nist.gov/publications/detail/sp/800-39/final' },
  { name: 'NIST SP 800-61 (Computer Security Incident Handling Guide)', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
  { name: 'NIST SP 800-88 (Guidelines for Media Sanitization)', url: 'https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final' },
  { name: 'NIST SP 800-115 (Technical Guide to Information Security Testing and Assessment)', url: 'https://csrc.nist.gov/publications/detail/sp/800-115/final' },
  { name: 'NIST SP 800-184 (Guide for Cybersecurity Event Recovery)', url: 'https://csrc.nist.gov/publications/detail/sp/800-184/final' },
  { name: 'NIST SP 800-30 (Guide for Conducting Risk Assessments)', url: 'https://csrc.nist.gov/publications/detail/sp/800-30/rev-a/final' },
  { name: 'NIST SP 800-64 (Security Considerations in the System Development Life Cycle)', url: 'https://csrc.nist.gov/publications/detail/sp/800-64/rev-2/final' },
  { name: 'NIST SP 800-83 (Guide to Malware Incident Prevention and Handling)', url: 'https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final' },
  { name: 'NIST SP 800-92 (Guide to Computer Security Log Management)', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
  { name: 'NIST SP 800-94 (Guide to Intrusion Detection and Prevention Systems)', url: 'https://csrc.nist.gov/publications/detail/sp/800-94/rev-1/draft' },
  { name: 'NIST SP 800-100 (Information Security Handbook: A Guide for Managers)', url: 'https://csrc.nist.gov/publications/detail/sp/800-100/final' },
  { name: 'NIST SP 800-122 (Guide to Protecting the Confidentiality of Personally Identifiable Information)', url: 'https://csrc.nist.gov/publications/detail/sp/800-122/final' },
  { name: 'NIST SP 800-137 (Information Security Continuous Monitoring for Federal Information Systems and Organizations)', url: 'https://csrc.nist.gov/publications/detail/sp/800-137/final' },
  { name: 'NIST SP 800-144 (Guidelines on Security and Privacy in Public Cloud Computing)', url: 'https://csrc.nist.gov/publications/detail/sp/800-144/final' },
  { name: 'NIST SP 800-146 (Cloud Computing Synopsis and Recommendations)', url: 'https://csrc.nist.gov/publications/detail/sp/800-146/final' },
  { name: 'NIST SP 800-150 (Guide to Cyber Threat Information Sharing)', url: 'https://csrc.nist.gov/publications/detail/sp/800-150/final' },
  { name: 'NIST SP 800-160 (Systems Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems)', url: 'https://csrc.nist.gov/publications/detail/sp/800-160/vol-1/final' },
  { name: 'NIST SP 800-171A (Assessing Security Requirements for Controlled Unclassified Information)', url: 'https://csrc.nist.gov/publications/detail/sp/800-171a/final' },
  { name: 'NIST SP 800-181 (National Initiative for Cybersecurity Education (NICE) Cybersecurity Workforce Framework)', url: 'https://csrc.nist.gov/publications/detail/sp/800-181/rev-1/final' },
  { name: 'Cyber Essentials (UK Cybersecurity Standard)', url: 'https://www.ncsc.gov.uk/cyberessentials/overview' },
  { name: 'Essential Eight (Australian Cybersecurity Framework)', url: 'https://www.cyber.gov.au/acsc/view-all-content/essential-eight' },
  { name: 'Secure Controls Framework (SCF)', url: 'https://www.securecontrolsframework.com/' },
  { name: 'Factor Analysis of Information Risk (FAIR)', url: 'https://www.fairinstitute.org/' },
  { name: 'Cloud Security Alliance (CSA) STAR', url: 'https://cloudsecurityalliance.org/star/' },
  { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework' },
  { name: 'ISF Standard of Good Practice for Information Security', url: 'https://www.securityforum.org/solutions-and-insights/the-standard-of-good-practice-for-information-security/' },
  { name: 'TOGAF (The Open Group Architecture Framework)', url: 'https://www.opengroup.org/togaf' },
  { name: 'IEC 62443 (Industrial Automation and Control Systems Security)', url: 'https://webstore.iec.ch/publication/7028' },
  { name: 'FFIEC Cybersecurity Assessment Tool', url: 'https://www.ffiec.gov/cyberassessmenttool.htm' },
  { name: 'SWIFT Customer Security Programme (CSP)', url: 'https://www.swift.com/myswift/customer-security-programme-csp' },
  { name: 'AI Risk Management Framework (AI RMF)', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  { name: 'BSI IT-Grundschutz (German Federal Office for Information Security)', url: 'https://www.bsi.bund.de/EN/Topics/IT-Grundschutz/it-grundschutz_node.html' },
  { name: 'Canadian Centre for Cyber Security’s IT Security Guidance', url: 'https://cyber.gc.ca/en/guidance' },
  { name: 'TISAX (Trusted Information Security Assessment Exchange)', url: 'https://enx.com/tisax/' },
  { name: 'MARISSA (Maritime Cybersecurity Standards)', url: 'https://www.maritimecybersecurity.center/' },
  { name: 'ANSI/ISA-62443 (Cybersecurity Standards for Automation)', url: 'https://www.isa.org/standards-and-publications/isa-standards/isa-62443-series-of-standards' },
  { name: 'UK Government Minimum Cyber Security Standard', url: 'https://www.gov.uk/government/publications/minimum-cyber-security-standard' },
  { name: 'Basel Committee on Banking Supervision (BCBS 239)', url: 'https://www.bis.org/bcbs/publ/d239.htm' },
  { name: 'OECD Guidelines for the Security of Information Systems and Networks', url: 'https://www.oecd.org/sti/ieconomy/15582260.pdf' },
  { name: 'CERT Resilience Management Model (CERT-RMM)', url: 'https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=508099' },
  { name: 'NESA Information Assurance Standards (UAE IAS)', url: 'https://www.nesa.ae/' },
  { name: 'Hong Kong Monetary Authority (HKMA) Cybersecurity Fortification Initiative', url: 'https://www.hkma.gov.hk/eng/key-functions/banking/cybersecurity-fortification-initiative-cfi/' },
  { name: 'K-ISMS (Korean Information Security Management System)', url: 'https://www.kisa.or.kr/eng/main.jsp' },
  { name: 'Japan Cybersecurity Framework (J-CSIP)', url: 'https://www.ipa.go.jp/security/english/jcsip.html' },
  { name: 'NATO Cyber Defence Policy Framework', url: 'https://www.nato.int/cps/en/natohq/topics_78170.htm' },
  { name: 'DHS Continuous Diagnostics and Mitigation (CDM) Program', url: 'https://www.cisa.gov/cdm' },
  { name: 'World Economic Forum (WEF) Cybersecurity Principles', url: 'https://www.weforum.org/reports/principles-for-board-governance-of-cyber-risk' },
  { name: 'HITRUST Threat Catalogue', url: 'https://hitrustalliance.net/hitrust-threat-catalog/' },
  { name: 'Digital Geneva Convention Cyber Norms', url: 'https://digitalpeace.microsoft.com/' },
  { name: 'Smart Grid Interoperability Panel (SGIP) Cybersecurity Guidelines', url: 'https://www.nist.gov/publications/nist-framework-and-roadmap-smart-grid-interoperability-standards-release-30' },
  { name: 'APEC Privacy Framework', url: 'https://www.apec.org/Publications/2017/08/APEC-Privacy-Framework-(2015)' },
  { name: 'NERC PRC Standards', url: 'https://www.nerc.com/pa/Stand/Pages/PRC-Reliability-Standards.aspx' },
  { name: 'Digital Identity Authentication and Fraud Prevention Framework', url: 'https://www.gsma.com/identity/digital-identity-programme/' },
];


const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Constructing Resources Data with Certification Categories
const resourcesData = {
  // Existing Categories
  reddit: [
    ...redditSubreddits,
    ...redditPosts.map((post) => ({ name: post.title, url: post.url }))
  ],
  youtube: [
    ...youtubeChannels,
    ...youtubeVideos.map((vid) => ({ name: vid.title, url: vid.url }))
  ],
  udemy: udemyCourses.map((course) => ({ name: course.title, url: course.url })),
  frameworks: [...securityFrameworks],
  other: [...otherResources],
  linkedin: [...linkedInPeople],

  
  'CompTIA Certification Objectives': comptiaObjectives.map((obj) => ({ name: obj.cert, url: obj.url })),


  // A+ Category
  'A+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().includes('a+ core'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'A+ Study Guide', url: '#' },
    { name: 'A+ Practice Exams', url: '#' },
    // Add more A+ specific resources here
  ],

 
  'Network+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('network+'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'Network+ Study Guide', url: '#' },
    { name: 'Network+ Labs', url: '#' },
    // Add more Network+ specific resources here
  ],

  
  'Security+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('security+') && !obj.cert.toLowerCase().includes('x'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'Security+ Study Guide', url: '#' },
    { name: 'Security+ Practice Labs', url: '#' },
    // Add more Security+ specific resources here
  ],

  
  'CySA+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('cysa+'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'CySA+ Study Guide', url: '#' },
    { name: 'CySA+ Practice Exams', url: '#' },
    // Add more CySA+ specific resources here
  ],

  
  'SecurityX/CASP': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().includes('casp') || obj.cert.toLowerCase().includes('securityx'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'CASP+ Study Guide', url: '#' },
    { name: 'SecurityX Practice Labs', url: '#' },
    // Add more SecurityX/CASP specific resources here
  ],

  
  'PenTest+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('pentest+'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'PenTest+ Study Guide', url: '#' },
    { name: 'PenTest+ Labs', url: '#' },
    // Add more PenTest+ specific resources here
  ],

  // Cloud+/Cloud Essentials Category
  'Cloud+/Cloud Essentials': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().includes('cloud'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'Cloud+ Study Guide', url: '#' },
    { name: 'Cloud Essentials Training', url: '#' },
    // Add more Cloud+/Cloud Essentials specific resources here
  ],

  // Linux+ Category
  'Linux+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('linux+'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'Linux+ Study Guide', url: '#' },
    { name: 'Linux+ Practice Labs', url: '#' },
    // Add more Linux+ specific resources here
  ],

  // Data+ Category
  'Data+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('data'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'Data+ Study Guide', url: '#' },
    { name: 'Data+ Practice Exams', url: '#' },
    // Add more Data+ specific resources here
  ],

  // Server+ Category
  'Server+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('server+'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'Server+ Study Guide', url: '#' },
    { name: 'Server+ Labs', url: '#' },
    // Add more Server+ specific resources here
  ],

  // Project+ Category
  'Project+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('project+'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'Project+ Study Guide', url: '#' },
    { name: 'Project+ Practice Exams', url: '#' },
    // Add more Project+ specific resources here
  ],

  // ITF/TECH+ Category
  'ITF/TECH+': [
    // Objective Links
    ...comptiaObjectives
      .filter(obj => obj.cert.toLowerCase().startsWith('itf') || obj.cert.toLowerCase().includes('tech+'))
      .map(obj => ({ name: obj.cert, url: obj.url })),
    // Additional Resources
    { name: 'ITF Study Guide', url: '#' },
    { name: 'Tech+ Training Videos', url: '#' },
    // Add more ITF/TECH+ specific resources here
  ]
};

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sorted, setSorted] = useState(false);
  const [randomResource, setRandomResource] = useState(null);

  const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());
  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);

  // Filtering Resources Based on Search and Category
  const filteredResources = Object.entries(resourcesData)
    .filter(([category]) => selectedCategory === "all" || category === selectedCategory)
    .flatMap(([, resources]) => resources)
    .filter((resource) => resource.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => (sorted ? a.name.localeCompare(b.name) : 0));

  // Handling Random Resource Selection
  const handleRandomResource = () => {
    const currentCategoryResources = selectedCategory === "all"
      ? Object.values(resourcesData).flat()
      : (resourcesData[selectedCategory] || []);
    
    if (currentCategoryResources.length === 0) {
      setRandomResource(null);
      return;
    }
    
    const random = currentCategoryResources[Math.floor(Math.random() * currentCategoryResources.length)];
    setRandomResource(random);
  };

return (
    // Apply the resources-background class to wrap the entire component
    <div className="resources-background">
      <div className="resources-container">
        <h1 className="resources-header">Cybersecurity Resources Hub</h1>

        {/* Controls Section */}
        <div className="resources-controls">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />

          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="category-select"
          >
            <option value="all">All Categories</option>
            {Object.keys(resourcesData).map((category) => (
              <option key={category} value={category}>
                {capitalizeFirstLetter(category)}
              </option>
            ))}
          </select>

          <button
            onClick={() => setSorted(!sorted)}
            className="sort-button"
          >
            {sorted ? "Unsort" : "Sort A-Z"}
          </button>

          <button
            onClick={handleRandomResource}
            className="random-button"
          >
            Random Resource
          </button>
        </div>

        {/* Random Resource Section */}
        {randomResource && (
          <div className="resources-random-resource">
            <h2>Explore This Resource:</h2>
            <a
              href={randomResource.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {randomResource.name}
            </a>
          </div>
        )}

        {/* Resources List */}
        <ul className="resources-list">
          {filteredResources.length ? (
            filteredResources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.name}
                </a>
              </li>
            ))
          ) : (
            <p>No resources found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Resources;


