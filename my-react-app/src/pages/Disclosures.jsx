import { useState } from "react";
import { Button,Modal, ModalHeader,ModalBody,ModalFooter } from "reactstrap";
import { useNavigate, Link } from "react-router";
function Disclosures() {
  const [showModal, setShowModal] = useState(false);
  
const toggle = () => setShowModal(!showModal)
  ;
  return (
    <>
      <div className="Disclosure-Agreement">
        <h3>Disclosures</h3>
        <hr />
        <div>
          <span>
            <p>
              We can now begin your loan application. The application process
              will take about 10 minutes.
              <br />
              You will need to have the following information available for both
              you and your co-applicant (if applicable):
              <br />
              Your Social Security Number Your address and phone number Your
              income information.
            </p>
          </span>
          <div>
            {/* <a href="" onClick={toggle}> */}
              {/* Terms & Conditions */}
            {/* </a> */}
            <Button onClick={toggle}> Terms & Conditions</Button>
            |<a href=""> Privacy Policy</a>
          </div>
        <Modal isOpen={showModal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Terms & Uses</ModalHeader>
          <ModalBody>
          1. Terms of Use for All Information and Internet Services
These Terms of Use govern your access of any and all accounts you may have with Wagner
Financial Services, Inc. (“Wagner”) via this website and any websites that are owned and/or
maintained by Wagner Financial Services, Inc., including but not limited to wagner-financial.com,
mywagnerloan.com, all pages within each website and any related mobile applications
(collectively, the “Site”). Your use of the Site and the Internet Services are subject to the following
terms and conditions (“Terms”), including the Privacy Notice. “Internet Services” means online
account access provided by Wagner through the Site. Please read these Terms of use carefully
before using the Site and/or the Internet Services. By using this Site and its services, you agree to
be legally bound by all the Terms contained or referenced herein, and further agree to receive
disclosures required by federal and/or state laws electronically. Additional terms and conditions
may apply if you file your credit application online through this Site. If you do not agree to these
terms of use, do not access or use the Site, or any pages within.
You must be a current or former account holder with Wagner in order to have authorized access
to Internet Services.
The terms “we,” “us,” “our,” or “Wagner” mean Wagner Financial Services, Inc.

2. Changes to the Terms
Wagner may modify these Terms at any time. Those modified Terms will become effective
immediately after Wagner posts them on the Site. You agree to review the Terms posted on the
Site each time you access or use the Site so that you are aware of any modifications made to these
Terms. If you do not agree to the modified Terms, you are not authorized to access or use the Site.
Your failure to comply with these Terms as they may be modified from time to time will constitute
breach of contract and may violate Wagner’s copyright, trademark, and other proprietary and
intellectual property rights.

3. Modification to the Site and/or Internet Services
Wagner reserves the right to modify, suspend, and/or discontinue (temporarily or permanently)
Internet Services, the Site, or any part of the Site from time to time, for any or no reason and
without notice. You agree that Wagner will not be liable to you or to any third party for any
modification, suspension, or discontinuance of Internet Services, the Site, or any party of the Site.
Wagner may change the information and services available through Internet Services or the Site
from time to time at its discretion. It is your responsibility to take necessary action to maintain
your account in a timely manner if the Site and/or Internet Services are unavailable.

4. No Access by Children
The Site is intended for use by adults who are actual or potential consumers of Wagner. No person
under the age of 18 may use the Site. By using the Site, you represent and warrant to Wagner that
you meet the foregoing age requirement. Wagner will not knowingly collect personally identifiable
information via the Site from visitors under the age of 18 and will take prompt steps to delete any
such personally identifiable information if notified that any has been inadvertently collected.

5. Privacy Policy and Data Security
Personal data is only recorded if you voluntarily send it to us. Our employees and business partners
are committed to confidentiality. To prevent unauthorized access, maintain data accuracy, and
ensure the correct use of information, we have put in place commercially acceptable physical,
electronic, and managerial procedures to safeguard and secure the information we collect online.
However, no security system is perfect, and we cannot guarantee that personal information you
provide to us over the Internet will remain private. We also cannot guarantee that information you
transmit to us over the Internet will not be intercepted. Additionally, we may be required to provide
your personal information in response to a subpoena or other legal process. This privacy policy
applies to all websites that we account for. The website may include links to websites of other
companies and organizations. This privacy policy does not extend to those websites. For more
information on what personal information Wagner collects, and how Wagner uses the information
you provide, please review the Privacy Notice.

6. Electronic Communications
When you visit the Site or use Internet Services, or send emails to Wagner, you are communicating
with Wagner electronically. You consent to receive communications from Wagner electronically.
You agree that all agreements, notices, disclosures and other communications that Wagner
provides to you electronically satisfy any legal requirement that such communications be in
writing.

7. Your Account
If you set up an account on the Site, you are responsible for maintaining the confidentiality of your
account and password and for restricting access to your computer, and you agree to accept
responsibility for all activities that occur under your account or password. Wagner reserves the
right to refuse service, terminate accounts, remove or edit content in its sole discretion.
It is your responsibility to safeguard your password and information that you may use to access
your Wagner account through Internet Services. If you believe access to your account has been
compromised, notify Wagner immediately by either contacting your local branch or contacting

the home office at: 175 Jonestown Road; Winston-Salem, NC 27104; wfs@wagner-
financial.com.

Wagner contracts through third-party companies to process certain electronic payments. By
utilizing the electronic payment option through Internet Services, you are authorizing these third
parties to electronically charge your bank account in the amount you submit plus any fees
charged by the third parties. Any fees charged to process the electronic payment will be fully
disclosed to you before you submit your request. Wagner does not receive any portion of the
processing fees the third party may charge. You are not required by Wagner to make electronic
payments on your account through Internet Services.

8. Intellectual Property
Wagner owns or has the right to use all of the content on the Site, including all text, images,
graphics, photographs, video clips, audio clips, designs, icons, wallpaper, characters, artwork,
sounds, information, software, data, and other materials, and all HTML design, layouts,
configurations, CGI, and other code and scripts in any format used to implement the Site (the
“Content”), all of which are protected by United States and international copyright, trademark,
patent, trade secret, and other intellectual property or proprietary rights laws. Absent Wagner’s
express written permission as to particular Content on the Site, you may use the Content only for
informational purposes, and you may, subject to any stated restrictions or limitations, print a single
copy of a limited amount of Content solely for informational purposes, if the copy bears all
copyright and other intellectual property and proprietary notices displayed on the web page. Except
as expressly authorized by these Terms, you may not distribute, publish, download, transmit,
modify, create derivative works from, or in any way exploit, any of the Content, in whole or in
part, without Wagner’s prior written consent, provided that (a) your computer may temporarily
store copies of such materials in RAM incidental to your accessing and viewing those materials,
(b) you may store files that are automatically cached by your Web browser for display
enhancement purposes, and (c) if we provide desktop, mobile, or other applications for download,
you may download a single copy to your computer or mobile device solely for your own use,
provided you agree to be bound by any end user license agreement that we provide for such
applications. Additionally, framing pages or parts of pages on the Site and deep linking to pages
in the Site are prohibited.
Wagner or its affiliates own or license all trademarks, service marks, and trade names on the Site,
unless stated otherwise on the Site. You may not use any of these marks in any manner without
Wagner’s prior express written permission.
Except as expressly provided above, Wagner is not granting you a license under any copyright,
trademark, service mark, patent, or other intellectual property or proprietary right in any Content,
and nothing in these Terms will be interpreted as conferring by implication, estoppel, or otherwise
any license or right under any patent, trademark, copyright, or other proprietary, intellectual, or
other right of Wagner or any third party. You obtain no rights in the products, services, processes,
or technology described on this Site by accessing or using the Site. Wagner and any third party
owners retain all of those rights.

9. Statements Relating to Entity Names and Marks of Third Parties
All references on this Site to specific entity names, trade names, trademarks, or service marks of
third parties are intended to accurately identify such parties as the sources of specific products and
services. In many instances, the referenced names and marks are the subject of federal, state, and
international registrations. Wagner makes no claim of any interest or license under any such names
and marks of other parties identified on this website, and Wagner acknowledges the proprietary
rights of such other parties to their identified names and marks. Wagner’s use of such names and
marks is only for purposes of proper identification, and there is no intention on the part of Wagner
to improperly use or dilute the proprietary rights of the owners and authorized users of such names
and marks.

10. Disclaimers of Warranties
Information regarding loans, products, and/or services offered by Wagner on the Site are
reasonable representations of the loans, products, and/or services offered by Wagner. However,
Wagner does not guarantee that the representations of the loans, products, and/or services are
accurate or available. Wagner provides loans, products, and/or services pursuant to specific loan
agreements, product agreements, and/or service agreements, which set forth all applicable terms
and conditions, including warranty terms and exclusions. The terms of those agreements are not
set forth here. Carefully read any such loan, product, and/or service agreement. Wagner disclaims
and excludes any and all express and implied warranties for the loans, products and/or services
which are not set forth in their applicable loan, product, and/or service agreement, whether or not
information on the loans, products and/or services appears in the Site.
Wagner disclaims all responsibility and liability for the timeliness, sequence, quality, accuracy,
content, completeness, legality, reliability, operability, and availability of information and material
contained on the Site. The Site may contain inaccuracies or typographical errors. Wagner
disclaims any responsibility for the deletion, failure to store, failure to update, misdelivery, or
untimely delivery of any information or material on the Site. Wagner does not warrant or
guarantee that the Site will be error-free or virus-free or that access to the Site will be uninterrupted.
Wagner and its content providers cannot and do not warrant or guarantee against errors, omissions,
delays, interruptions, or losses, including loss of data. You are solely responsible for maintaining
the confidentiality of your username and password, and for all activities which occur during your
use of this Site. You agree to immediately notify Wagner of any unauthorized use of your password
or any other breach of security made known to you.
THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITH NO WARRANTIES
WHATSOEVER. WAGNER DISCLAIMS ALL EXPRESS, IMPLIED, STATUTORY AND
OTHER WARRANTIES, INCLUDING THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AS WELL AS
ANY WARRANTY OF QUALITY, FUNCTIONALITY, ACCURACY, CURRENCY,
COMPLETENESS, RELIABILITY, OPERABILITY, USE, PERFORMANCE, OR ABSENCE
OF VIRUSES.

IF YOU DOWNLOAD OR OTHERWISE OBTAIN OR USE ANY MATERIAL FROM THE
SITE, YOU DO SO AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE
SOLELY RESPONSIBLE FOR ANY CLAIMS, INCLUDING ANY DAMAGES TO YOUR
COMPUTING SYSTEM OR ANY LOSS OF DATA THAT RESULTS FROM
DOWNLOADING OR OTHERWISE OBTAINING OR USING THAT MATERIAL. YOU
ASSUME ALL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR USE OF
THE SITE.
THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
EXCLUDED OR LIMITED UNDER APPLICABLE LAW.

11. Limitation of Liability
IN NO EVENT WILL WAGNER, ITS AFFILIATES, ITS LICENSORS, ITS DATA
PROVIDERS, OR ANYONE ELSE INVOLVED IN CREATING, PRODUCING,
DELIVERING, OR MANAGING THE CONTENT (COLLECTIVELY, THE “SITE
PROVIDERS”) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY CLAIMS
WHATSOEVER, IN CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE,
INCLUDING DIRECT, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, OR
CONSEQUENTIAL DAMAGES, LOST REVENUES, LOST PROFITS, LOST
OPPORTUNITIES, AND LOSS OF PROSPECTIVE ECONOMIC ADVANTAGE, ARISING
OUT OF OR IN CONNECTION WITH (A) YOUR ACCESS OR USE OF THE SITE, (B) ANY
COMMUNICATIONS SENT TO YOU VIA THE SITE OR OTHERWISE FROM WAGNER,
OR ANY DAMAGES SUFFERED AS A RESULT OF OMISSIONS OR INACCURACIES IN
SUCH INFORMATION, (C) THE TRANSMISSION OF CONFIDENTIAL OR SENSITIVE
INFORMATION TO OR FROM THE SITE PROVIDERS, OR (D) INCONVENIENCE,
DELAY, OR LOSS OF USE OF THE SITE OR ANY SERVICE, EVEN IF SOME OR ALL OF
THE SITE PROVIDERS ARE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE
EXCLUDED OR LIMITED UNDER APPLICABLE LAW.

12. Indemnification
You agree to defend, indemnify and hold harmless Wagner, its affiliates, licensors, Site Providers,
and service providers, and its and their respective officers, directors, employees, contractors,
agents, licensors, suppliers, successors and assigns from and against any and all claims, liabilities,
damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys' fees)
arising out of or relating to (a) your use of the Site, (b) information you submit, post to, or transmit
through the Site, (c) your violation of any rights of any other company or person in connection
with this Site, or (d) your violation of these Terms.

13. Disclaimer of Client, Fiduciary, or Professional Relationship
YOU AGREE THAT NO CLIENT, ADVISORY, FIDUCIARY, OR PROFESSIONAL
RELATIONSHIP IS CREATED, IMPLIED, OR ESTABLISHED THROUGH USE OF THIS
SITE BETWEEN YOU AND WAGNER, ITS AFFILIATES, LICENSORS, SITE PROVIDERS,
AND SERVICE PROVIDERS, AND ITS AND THEIR RESPECTIVE OFFICERS,
DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, LICENSORS, SUPPLIERS,
SUCCESSORS AND ASSIGNS. YOU AGREE AND UNDERSTAND THAT NO PERSON OR
ENTITY IS, IN CONNECTION WITH THE SITE, ENGAGED IN RENDERING AUDITING,
ACCOUNTING, INVESTMENT, SECURITIES, TAX, OR LEGAL ADVICE OR
CONSULTING OPINIONS. YOU AGREE TO CONSULT APPROPRIATE LICENSED
PROFESSIONALS FOR OPINIONS AND ADVICE RELATING TO THE SPECIFIC FACTS,
LAWS AND ROLES WHICH MAY APPLY IN YOUR SPECIFIC CASE.

14. Services of Third Parties and Links to Other Websites
Certain services made available to you on this website may be provided to you directly by third
parties. Your use of such services may be subject to the terms and conditions and privacy policies
of the third parties providing the service.

References on the Site to names, marks, products, or services of third parties or hyperlinks to third-
party websites do not constitute or imply Wagner’s endorsement, sponsorship, or recommendation

of the third parties or their products, services, or websites. Descriptions of, or references to, any
third-party products, services, publications, or any links to other websites within this Site does not
necessarily represent the views or opinions of Wagner. Wagner does not make any warranties of
any kind with respect to the subject matter included on a third-party website, the products or
services listed on a third-party website, or the completeness or accuracy of the information.
Wagner specifically disclaims all warranties, express, implied or otherwise, including without
limitation, all warranties of merchantability and fitness for a particular purpose as to third parties.
These references are provided for your convenience and information only. Wagner does not
monitor or control the content of any website linked to or from the Site, and Wagner is not
responsible for the content of those other websites or the terms of use or privacy practices of those
sites.

15. Prohibited Actions
You may use the Site only for lawful purposes in accordance with these Terms. You agree not to
use the Site: (a) in any way that violates any applicable federal, state, local or international law or
regulation (including, without limitation, any laws regarding the export of data or software to and
from the U.S.A. or other countries); (b) for the purpose of exploiting, harming, or attempting to
exploit or harm minors in any way by exposing them to inappropriate content, asking for personally
identifiable information, or otherwise; (c) to send, knowingly receive, upload, download, use, or
re-use any material which does not comply with the section of these Terms titled “Intellectual

Property”; (d) to transmit, or procure the sending of, any advertising or promotional material,
including any "junk mail", "chain letter," "spam," or any other similar solicitation; (e) to
impersonate or attempt to impersonate Wagner, a Wagner employee, another user, or any other
person or entity (including, without limitation, by using e-mail addresses associated with any of
the foregoing); (f) to engage in any other conduct that restricts or inhibits anyone's use or
enjoyment of the Site, or which, as determined by us, may harm Wagner or users of the Site or
expose them to liability, or (g) to interfere with the proper working of the Site.

16. Conflict Resolution
These Terms will be governed by the laws of the State of North Carolina, excluding its conflicts
of law provisions. All actions and proceedings relating to the Site or the Content will be
commenced and heard exclusively in North Carolina state courts in Forsyth County, North
Carolina or the United States District Court for the Middle District of North Carolina. Wagner and
you consent to the jurisdiction of those courts.

17. Limitation on Time to File Claims
ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING
TO THESE TERMS OF USE OR THE SITE MUST BE COMMENCED WITHIN ONE (1)
YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE SUCH CAUSE OF
ACTION OR CLAIM IS PERMANENTLY BARRED.

18. Survival
Wagner may terminate these Terms at any time without notice or suspend or terminate your access
and use of the Site at any time, with or without cause, in Wagner’s absolute discretion and without
notice. The following sections of these Terms shall survive termination of your use or access to
the Site: 6 (Electronic Communications); 8 (Intellectual Property); 10 (Disclaimers of Warranties);
11 (Limitation of Liability); 12 (Indemnification); 13 (Disclaimer of Client, Fiduciary, or
Professional Relationship); 16 (Conflict Resolution); 17 (Limitation of Time to File Claims); 18
(Survival); 19 (Severability and Waiver); 20 (Entire Agreement); 21 (General Provisions); and any
other provision that by its nature or terms survives termination of your use or access to the Site.

19. Severability and Waiver
The invalidity of any term, condition, or provision of these Terms will not affect the enforceability
of the remaining portions of these Terms. Wagner’s failure to enforce any right or provision in
these Terms shall not constitute a waiver of such right or provision.

20. Entire Agreement
These Terms comprise the entire agreement between you and Wagner relating to your use of the
Site, and supersede all prior agreements and negotiations, whether oral or written. These Terms
superseded any previous terms of use relating to use of this Site to which you and Wagner may
have been bound. There are no other agreements, understandings, promises or conditions, oral or
written, express or implied, concerning the subject matter of these Terms, except as set forth in
these Terms.

21. General Provisions
These Terms will be binding on, inure to the benefit of, and be enforceable against the parties and
their respective successors and assigns. Neither the course of conduct between the parties nor trade
practice shall act to modify any provision of these Terms. All rights not expressly granted herein
are hereby reserved. Headings are for reference purposes only and in no way define, limit,
construe, or describe the scope or extent of such section.

22. Contact and Notification Information
If you have any questions regarding the Site or these Terms, please contact us at:
Wagner Financial Services, Inc.
Post Office Box 24608
Winston-Salem, NC 27114
or email us at: wfs@wagner-financial.com
</ModalBody>
        <ModalFooter>
          <Button toggle={toggle}>Exit</Button>
        </ModalFooter>

        </Modal>
          <div>
            <fieldset >
              <legend>
              I certify that I have read and agree to the privacy policy and the
              terms and conditions.
              </legend>
              <input type="radio" />
                No
                <input type="radio" />
                Yes
            </fieldset>
          </div>
          <Button>Back</Button>
          <Button tag={Link} to={"/LoanForm"}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
export default Disclosures;
