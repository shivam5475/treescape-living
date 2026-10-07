import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import {
  Display,
  Eyebrow,
  Heading,
  Meta,
  Text,
} from "@/components/ui/typography";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Tree Escape Living</Eyebrow>

            <Display className="mt-4">
              Design System
            </Display>

            <Text className="type-body-lg mt-6 max-w-2xl">
              A visual foundation for bespoke furniture, considered spaces,
              and the craft behind them.
            </Text>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-alt">
        <Container>
          <Eyebrow>Typography</Eyebrow>

          <Heading className="mt-4">
            Crafted with restraint.
          </Heading>

          <Text className="mt-4 max-w-2xl">
            The Tree Escape interface combines editorial typography,
            earthy materials, and quiet interaction.
          </Text>

          <Divider className="my-8" />

          <Meta className="block">
            PLAYFAIR DISPLAY · DM SANS · DM MONO
          </Meta>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Actions</Eyebrow>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Start a Project</Button>

            <Button variant="secondary">
              Explore Commissions
            </Button>

            <Button variant="ghost">
              Learn More
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sage-wash">
        <Container>
          <Eyebrow>Form Controls</Eyebrow>

          <div className="mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
            <Field
              label="Your name"
              htmlFor="name"
              hint="Used when we respond to your enquiry."
            >
              <Input
                id="name"
                placeholder="Enter your name"
              />
            </Field>

            <Field
              label="Email address"
              htmlFor="email"
            >
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </Field>

            <Field
              label="Project details"
              htmlFor="details"
              className="md:col-span-2"
            >
              <Textarea
                id="details"
                placeholder="Tell us a little about your space..."
              />
            </Field>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Cards</Eyebrow>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Furniture"],
              ["02", "Interiors"],
              ["03", "Craft"],
            ].map(([number, title]) => (
              <Card key={number}>
                <CardContent>
                  <Meta>{number}</Meta>

                  <h3 className="type-h3 mt-8">
                    {title}
                  </h3>

                  <Text className="mt-4">
                    Thoughtful objects and spaces shaped around
                    material, proportion and everyday living.
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}