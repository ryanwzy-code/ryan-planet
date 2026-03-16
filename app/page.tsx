import { Box, Button, Card, Container, Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";
import { ArrowRightIcon, GitHubLogoIcon, LinkedInLogoIcon, RocketIcon } from "@radix-ui/react-icons";

function HeroSection() {
  return (
    <Box asChild py={{ initial: "6", md: "8" }}>
      <section>
        <Container size="3">
          <Flex direction={{ initial: "column", md: "row" }} align={{ md: "center" }} justify="between" gap="6">
            <Box maxWidth="480px">
              <Flex align="center" gap="2" mb="3">
                <RocketIcon />
                <Text size="2" color="gray">
                  Personal site · Work in progress
                </Text>
              </Flex>
              <Heading as="h1" size={{ initial: "7", md: "8" }} mb="3">
                Your Name
              </Heading>
              <Text size="3" color="gray" mb="4">
                A short one-line summary about what you do, taking up roughly one to two lines of text as a placeholder.
              </Text>
              <Flex gap="3" mb="4" wrap="wrap">
                <Button size="2">
                  View work
                  <ArrowRightIcon />
                </Button>
                <Button size="2" variant="soft" color="gray">
                  Download CV
                </Button>
              </Flex>
              <Flex gap="2">
                <Text size="2" color="gray">
                  Roles:
                </Text>
                <Text size="2">Design · Frontend · Experiments</Text>
              </Flex>
            </Box>
            <Box flexShrink="0">
              <Card size="3" variant="surface">
                <Text size="2" color="gray">
                  Portrait / visual block placeholder
                </Text>
              </Card>
            </Box>
          </Flex>
        </Container>
      </section>
    </Box>
  );
}

function WorkSection() {
  return (
    <Box asChild py={{ initial: "6", md: "8" }}>
      <section id="work">
        <Container size="3">
          <Flex justify="between" align="center" mb="4">
            <Heading as="h2" size="5">
              Selected work
            </Heading>
            <Text size="2" color="gray">
              A few representative projects
            </Text>
          </Flex>
          <Flex direction={{ initial: "column", md: "row" }} gap="4">
            <Card size="3" style={{ flex: 1 }}>
              <Heading as="h3" size="3" mb="2">
                Project One
              </Heading>
              <Text size="2" color="gray" mb="3">
                Short description for a primary project. This is placeholder content you can replace later.
              </Text>
              <Flex justify="between" align="center">
                <Text size="2" color="gray">
                  2024 · Design · Frontend
                </Text>
                <Link href="#" size="2">
                  View case
                </Link>
              </Flex>
            </Card>
            <Card size="3" style={{ flex: 1 }}>
              <Heading as="h3" size="3" mb="2">
                Project Two
              </Heading>
              <Text size="2" color="gray" mb="3">
                Another placeholder project card, mirroring the atom63-style layout of work summaries.
              </Text>
              <Flex justify="between" align="center">
                <Text size="2" color="gray">
                  2023 · Product · Systems
                </Text>
                <Link href="#" size="2">
                  View case
                </Link>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </section>
    </Box>
  );
}

function AboutSection() {
  return (
    <Box asChild py={{ initial: "6", md: "8" }}>
      <section id="about">
        <Container size="3">
          <Flex direction={{ initial: "column", md: "row" }} gap="6">
            <Box style={{ flex: 2 }}>
              <Heading as="h2" size="5" mb="3">
                About
              </Heading>
              <Text size="3" color="gray">
                This is placeholder copy for a short biography. Write about how you think, what you enjoy working on, and how you
                like to collaborate. Keep it to a few concise paragraphs for readability.
              </Text>
            </Box>
            <Box style={{ flex: 1 }}>
              <Heading as="h3" size="3" mb="2">
                Snapshot
              </Heading>
              <Text as="p" size="2" color="gray">
                • Based in Somewhere
              </Text>
              <Text as="p" size="2" color="gray">
                • Working across product, design, and engineering
              </Text>
              <Text as="p" size="2" color="gray">
                • Open to collaborations and new projects
              </Text>
            </Box>
          </Flex>
        </Container>
      </section>
    </Box>
  );
}

function FooterSection() {
  return (
    <Box asChild py="6">
      <footer>
        <Container size="3">
          <Separator mb="4" />
          <Flex direction={{ initial: "column", md: "row" }} justify="between" align={{ md: "center" }} gap="3">
            <Text size="2" color="gray">
              © {new Date().getFullYear()} Your Name. All placeholder content.
            </Text>
            <Flex gap="3" align="center">
              <Link href="#" size="2">
                <Flex gap="1" align="center">
                  <GitHubLogoIcon /> GitHub
                </Flex>
              </Link>
              <Link href="#" size="2">
                <Flex gap="1" align="center">
                  <LinkedInLogoIcon /> LinkedIn
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}

export default function HomePage() {
  return (
    <Box asChild>
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <FooterSection />
      </main>
    </Box>
  );
}
