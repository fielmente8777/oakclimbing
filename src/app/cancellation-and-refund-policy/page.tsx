import { Container, Section } from "@/components";
import PageTopBanner from "@/components/PageTopBanner";
import { cancellationAndRefundPolicyDate } from "@/data/policyPagesDates";

const page = () => {
  return (
    <main>
      <PageTopBanner title={"cancellation & refund policy"} />
      <Section>
        <Container>
          <div
            className="policy_pages_dates"
            dangerouslySetInnerHTML={{
              __html: cancellationAndRefundPolicyDate,
            }}
          />
        </Container>
      </Section>
    </main>
  );
};

export default page;
