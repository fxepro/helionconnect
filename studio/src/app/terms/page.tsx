import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Website Terms of Use</h1>
              <p className="text-muted-foreground text-sm mb-12">Version 1.0 &mdash; Helion Connect, a wholly owned subsidiary of Redstone Global Inc.</p>

              <div className="space-y-10 text-foreground">
                <p className="text-muted-foreground leading-relaxed">
                  The Helion Connect website is a copyrighted work belonging to Redstone Global Inc. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Use describe the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISIONS OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
                </p>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Accounts</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Account Creation</h3>
                      <p>For you to use the Site, you must start an account and provide information about yourself. You warrant that: (a) all required registration information you submit is truthful, up-to-date, and accurate; (b) you will maintain the accuracy of such information. You may delete your Account at any time by following the instructions on the Site. Company may suspend or terminate your Account in accordance with these Terms.</p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Account Responsibilities</h3>
                      <p>You maintain the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify the Company of any unauthorized use or suspected unauthorized use of your Account. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Access to the Site</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Subject to these Terms, the Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.
                    </p>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Certain Restrictions</h3>
                      <p>The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated.</p>
                    </div>
                    <p>
                      The Company reserves the right to change, suspend, or cease the Site with or without notice to you. You agree that the Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part.
                    </p>
                    <p>
                      <strong className="text-foreground">No Support or Maintenance.</strong> You agree that the Company will have no obligation to provide you with any support in connection with the Site.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">User Content</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      &ldquo;User Content&rdquo; means all information and content that a user submits to the Site. You are exclusively responsible for your User Content. You bear all risks associated with the use of your User Content. You hereby certify that your User Content does not violate our Acceptable Use Policy.
                    </p>
                    <p>
                      You hereby grant to Company an irreversible, nonexclusive, royalty-free and fully paid, worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use and exploit your User Content, and to grant sublicenses of the foregoing rights, solely for the purposes of including your User Content in the Site.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Acceptable Use Policy</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>You agree not to use the Site to collect, upload, transmit, display, or distribute any User Content:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>That violates any third-party right or any intellectual property or proprietary right</li>
                      <li>That is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another&apos;s privacy, vulgar, defamatory, false, or intentionally misleading</li>
                      <li>That is harmful to minors in any way</li>
                      <li>That is in violation of any law, regulation, or obligations or restrictions imposed by any third party</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Third-Party Links &amp; Ads</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Site may contain links to third-party websites and services, and/or display advertisements for third parties. Such Third-Party Links &amp; Ads are not under the control of the Company, and Company is not responsible for any Third-Party Links &amp; Ads. The Company provides access to these Third-Party Links &amp; Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links &amp; Ads. You use all Third-Party Links &amp; Ads at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Disclaimers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    THE SITE IS PROVIDED ON AN &ldquo;AS-IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, AND COMPANY AND OUR SUPPLIERS EXPRESSLY DISCLAIM ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Limitation on Liability</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY OR OUR SUPPLIERS BE LIABLE TO YOU OR ANY THIRD-PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE THE SITE.
                    </p>
                    <p>
                      To the maximum extent permitted by law, our liability to you for any damages arising from or related to this agreement will always be limited to a maximum of fifty U.S. dollars (US $50).
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Term and Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Subject to this Section, these Terms will remain in full force and effect while you use the Site. We may suspend or terminate your right to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately. Company will not have any liability whatsoever to you for any termination of your rights under these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Dispute Resolution</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      All claims and disputes in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.
                    </p>
                    <p>
                      Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute describing the nature and basis of the claim or dispute, and the requested relief. If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding.
                    </p>
                    <p className="font-semibold text-foreground">
                      WAIVER OF JURY TRIAL: THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration.
                    </p>
                    <p className="font-semibold text-foreground">
                      WAIVER OF CLASS OR CONSOLIDATED ACTIONS: All claims and disputes within the scope of this arbitration agreement must be arbitrated or litigated on an individual basis and not on a class basis.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Copyright Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Company respects the intellectual property of others and asks that users of our Site do the same. If you believe that one of our users is unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, please provide our designated Copyright Agent with a written notification pursuant to 17 U.S.C. &sect; 512(c).
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">General</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site. Any changes to these Terms will be effective upon the earliest thirty (30) calendar days following our dispatch of notice.
                    </p>
                    <p>
                      These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision.
                    </p>
                    <p>
                      Copyright &copy; Redstone Global Inc. All rights reserved. All trademarks, logos and service marks displayed on the Site are our property or the property of other third parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
