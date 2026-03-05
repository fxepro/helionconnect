import { SiteHeader } from '@/components/header';
import { SiteFooter } from '@/components/footer';

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto prose-invert">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-8">Cookie Policy</h1>
              <p className="text-muted-foreground text-sm mb-12">Effective for Helion Connect, a wholly owned subsidiary of Redstone Global Inc.</p>

              <div className="space-y-10 text-foreground">
                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">What Are Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    As is customary practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or &apos;break&apos; certain elements of the site&apos;s functionality.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">How We Use Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Disabling Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.
                  </p>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">The Cookies We Set</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Account Related Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out, however in some cases they may remain afterwards to remember your site preferences when logged out.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Login Related Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Email Newsletter Related Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Orders Processing Related Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This site offers e-commerce or payment facilities, and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Surveys Related Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        From time to time, we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Forms Related Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When you submit data through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Site Preferences Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To provide you with a wonderful experience on this site we provide the functionality to set your preferences for how this site runs when you use it. To remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">Third Party Cookies</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      In some exceptional cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                    </p>
                    <p>
                      This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.
                    </p>
                    <p>
                      Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.
                    </p>
                    <p>
                      From time to time, we evaluate new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.
                    </p>
                    <p>
                      We may also use social media buttons and/or plugins on this site that allow you to connect with your social network in several ways. For these to work, social media sites may set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-headline text-2xl font-bold text-accent mb-4">More Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hopefully, that has clarified things for you and as was previously mentioned if there is something that you aren&apos;t sure whether you need or not it&apos;s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                  </p>
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
