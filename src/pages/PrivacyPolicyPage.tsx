export function PrivacyPolicyPage() {
  return (
    <div>
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(to bottom, rgb(69, 71, 116), rgb(92, 141, 195))",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif-brand text-5xl sm:text-6xl text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90">
            Your privacy is critically important to us. Your data is your own.
            We make no claims to it and will only use it according to the
            policies outlined below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="rounded-3xl p-8 sm:p-12 shadow-xl border-2"
            style={{ borderColor: "rgb(92, 141, 195)" }}
          >
            <div className="space-y-10 text-gray-700 leading-relaxed">
              <section>
                <h2
                  className="font-serif-brand text-3xl mb-4"
                  style={{ color: "rgb(69, 71, 116)" }}
                >
                  Information We Collect
                </h2>
                <p>
                  We do not collect any personally-identifying information.
                  Period.
                </p>
              </section>

              <section>
                <h2
                  className="font-serif-brand text-3xl mb-4"
                  style={{ color: "rgb(69, 71, 116)" }}
                >
                  HealthKit Integration
                </h2>
                <p>
                  If you allow us to integrate with HealthKit, the application
                  will only have access to the health data types you opt-in to
                  access.
                </p>

                <div className="mt-6 space-y-4">
                  <p>
                    <span className="font-semibold">Health data usage:</span>{" "}
                    The health data read from HealthKit is solely used for
                    display within the app. It is not collected or disclosed
                    outside of your local installation of the app.
                  </p>
                  <p>
                    <span className="font-semibold">Data sharing:</span> Under
                    no circumstances is your health data ever transferred to a
                    third party without your explicit consent, which can be
                    granted by using the share sheet.
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className="font-serif-brand text-3xl mb-4"
                  style={{ color: "rgb(69, 71, 116)" }}
                >
                  Your Consent
                </h2>
                <p>By using our apps, you consent to our privacy policy.</p>
              </section>

              <section>
                <h2
                  className="font-serif-brand text-3xl mb-4"
                  style={{ color: "rgb(69, 71, 116)" }}
                >
                  Contacting Us
                </h2>
                <p>
                  If you have any questions regarding this privacy policy,
                  please do not hesitate to contact us.
                </p>
              </section>

              <section>
                <h2
                  className="font-serif-brand text-3xl mb-4"
                  style={{ color: "rgb(69, 71, 116)" }}
                >
                  Changes to this Policy
                </h2>
                <p>
                  If we decide to change our privacy policy, we will post those
                  changes on this page.
                </p>
              </section>

              <section
                className="rounded-2xl p-6"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(92, 141, 195, 0.1), rgba(60, 120, 102, 0.1))",
                }}
              >
                <p className="font-semibold" style={{ color: "rgb(69, 71, 116)" }}>
                  First Published: 2023-11-14
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
