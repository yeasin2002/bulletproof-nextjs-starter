import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface WelcomeEmailProps {
  firstName: string
  verificationUrl?: string
}

export default function WelcomeEmail({ firstName, verificationUrl }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Next.js Boilerplate! {`Let's`} get you started.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src="https://your-domain.com/logo.png"
              width="120"
              height="36"
              alt="Next.js Boilerplate"
              style={logo}
            />
          </Section>

          <Heading style={h1}>Welcome to Next.js Boilerplate, {firstName}!</Heading>

          <Text style={text}>
            Thank you for joining us! {`We're`} excited to have you on board and {`can't`} wait to
            see what {`you'll`} build with our comprehensive Next.js boilerplate.
          </Text>

          {verificationUrl && (
            <>
              <Text style={text}>
                To get started, please verify your email address by clicking the button below:
              </Text>

              <Section style={buttonContainer}>
                <Link style={button} href={verificationUrl}>
                  Verify Email Address
                </Link>
              </Section>

              <Text style={text}>
                If the button {`doesn't`} work, you can also copy and paste this link into your
                browser:
              </Text>
              <Text style={link}>{verificationUrl}</Text>
            </>
          )}

          <Text style={text}>Here are some things you can do to get started:</Text>

          <ul style={list}>
            <li style={listItem}>Complete your profile setup</li>
            <li style={listItem}>Explore the dashboard and features</li>
            <li style={listItem}>Check out our documentation</li>
            <li style={listItem}>Join our community Discord</li>
          </ul>

          <Text style={text}>
            If you have any questions or need help getting started, {`don't`} hesitate to reach out
            to our support team at{' '}
            <Link href="mailto:support@example.com" style={link}>
              support@example.com
            </Link>
          </Text>

          <Text style={text}>
            Best regards,
            <br />
            The Next.js Boilerplate Team
          </Text>

          <Section style={footer}>
            <Text style={footerText}>© 2024 Next.js Boilerplate. All rights reserved.</Text>
            <Text style={footerText}>
              <Link href="https://your-domain.com/unsubscribe" style={footerLink}>
                Unsubscribe
              </Link>
              {' | '}
              <Link href="https://your-domain.com/privacy" style={footerLink}>
                Privacy Policy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const logoContainer = {
  margin: '32px 0',
  textAlign: 'center' as const,
}

const logo = {
  margin: '0 auto',
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center' as const,
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
  padding: '0 40px',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#007ee6',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
}

const link = {
  color: '#007ee6',
  fontSize: '14px',
  textDecoration: 'underline',
  wordBreak: 'break-all' as const,
  padding: '0 40px',
}

const list = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
  padding: '0 40px',
}

const listItem = {
  margin: '8px 0',
}

const footer = {
  margin: '32px 0',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '4px 0',
}

const footerLink = {
  color: '#8898aa',
  textDecoration: 'underline',
}
