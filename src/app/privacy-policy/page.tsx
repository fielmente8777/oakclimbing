import { Container, Section } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import { privacyPolicyDate } from "@/data/policyPagesDates";

const page = () => {
  return (
    <main>
      <PageTopBanner title={"privacy policy"} />
      <Section>
        <Container>
          <div
            className="policy_pages_dates "
            dangerouslySetInnerHTML={{
              __html: privacyPolicyDate,
            }}
          />
        </Container>
      </Section>
    </main>
  );
};

export default page;
