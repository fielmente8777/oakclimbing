import { Container, Section } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import { termsAndConditionsDate } from "@/data/policyPagesDates";

const page = () => {
  return (
    <main>
      <PageTopBanner title={"Terms & Conditions"} />
      <Section>
        <Container>
          <div
            className="policy_pages_dates"
            dangerouslySetInnerHTML={{
              __html: termsAndConditionsDate,
            }}
          />
        </Container>
      </Section>
    </main>
  );
};

export default page;
