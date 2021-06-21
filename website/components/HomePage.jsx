import React from 'react';
import styled from 'styled-components';
import { Button } from 'camara';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  .body {
    padding: 2rem 1rem;
    font-family: 'Hack', monospace;
  }

  .statement {
    font-size: 1.75rem;
    font-family: 'DM Mono', monospace;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 4rem;
    font-weight: bold;
  }

  .statement span {
    color: #75dd66;
  }

  .bio {
    color: #708090;
    font-size: 0.875rem;
    font-family: 'DM Mono', monospace;
    font-weight: 300;
    line-height: 2;
    margin-top: 3rem;
  }

  .bio .ptag {
    color: #75dd66;
  }

  .bio .strongTag {
    color: #f1ab48;
  }

  .cta {
    margin: 3rem 0;
  }

  .cta a button {
    font-size: 0.875rem;
    font-family: 'DM Mono', monospace;
    font-weight: 500;
    margin-right: 0.5rem;
  }

  /* Responsive Web Design */
  @media only screen and (min-width: 639px) {
    .body {
      padding: 2rem;
    }
  }
  @media only screen and (min-width: 800px) {
    .body {
      padding: 2rem;
    }

    .statement {
      font-size: 2rem;
    }

    .bio {
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 1023px) {
    .body {
      padding: 2rem 5rem;
    }

    .statement {
      font-size: 2.5rem;
    }

    .bio {
      font-size: 1.25rem;
      margin-top: 5rem;
    }
  }
  @media only screen and (min-width: 1365px) {
    .body {
      padding: 3rem 12rem;
    }

    .statement {
      font-size: 2.85rem;
    }

    .bio {
      font-size: 1.25rem;
      margin-top: 5rem;
    }
  }
  @media only screen and (min-width: 1600px) {
    .body {
      padding: 0 18rem;
    }

    .statement {
      font-size: 3.5rem;
    }

    .bio {
      font-size: 1.25rem;
      margin-top: 4rem;
    }
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <div className="body">
        <div>
          <Helmet>
            {/* Primary Meta Tags */}
            <title>Camara Design System</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;500&display=swap"
              rel="stylesheet"
            />
            <meta name="title" content="Camara Design System" />
            <meta
              name="description"
              content="UI foundations for building accessible, beautiful, and responsive web and mobile interfaces - with support for React and React Native."
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://camara.space/" />
            <meta property="og:title" content="Camara Design System" />
            <meta
              property="og:description"
              content="UI foundations for building accessible, beautiful, and responsive web and mobile interfaces - with support for React and React Native."
            />
            <meta
              property="og:image"
              content="https://res.cloudinary.com/beaniegram/image/upload/v1620642927/Personal%20Site/camara-design-system.png"
            />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://camara.space/" />
            <meta property="twitter:title" content="Camara Design System" />
            <meta
              property="twitter:description"
              content="UI foundations for building accessible, beautiful, and responsive web and mobile interfaces - with support for React and React Native."
            />
            <meta
              property="twitter:image"
              content="https://res.cloudinary.com/beaniegram/image/upload/v1620642927/Personal%20Site/camara-design-system.png"
            />
            <script
              async
              defer
              data-domain="camara.space"
              src="https://plausible.io/js/plausible.js"
            ></script>
          </Helmet>
          {/* Logo */}
          {/* <img src='../images/logo-nav-dark.svg' alt='camara-logo-dark' /> */}

          {/* Statement */}
          <div className="statement">
            <p>
              <span>&lt;h2&gt;</span>UI foundations for accessible, beautiful,
              and responsive interfaces.
              <span>&lt;/h2&gt;</span>
            </p>
          </div>

          {/* Bio */}
          <div className="bio">
            <p>
              <span className="ptag">&lt;p&gt;</span>Camara is a design system
              with
              <span className="strongTag">&lt;strong&gt;</span>
              <strong>reusable UI component library</strong>
              <span className="strongTag">&lt;/strong&gt;</span>and APIs for the
              best <span className="strongTag">&lt;strong&gt;</span>
              <strong>default user and developer experience.</strong>
              <span className="strongTag">&lt;/strong&gt;</span>. This means
              that you can <span className="strongTag">&lt;strong&gt;</span>
              <strong>spend less time</strong>
              <span className="strongTag">&lt;/strong&gt;</span> thinking about
              the nuances of user interface elements and constructing the
              product, but rather spend more time and{' '}
              <span className="strongTag">&lt;strong&gt;</span>
              <strong>focus on what the product actually is</strong>
              <span className="strongTag">&lt;/strong&gt;</span>and the problems
              it is trying to solve.
              <span className="ptag">&lt;/p&gt;</span>
            </p>
          </div>

          {/* Call to Actions */}
          <div className="cta">
            <Link to="/docs/">
              <Button pill>Learn More (Docs)</Button>
            </Link>
            <a
              href="https://github.com/Camaradotspace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button pill variant="secondary">
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
