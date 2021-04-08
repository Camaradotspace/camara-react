import React from 'react';
import styled from 'styled-components';
import { Button } from 'camara';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  @font-face {
    font-family: 'Hack';
    font-weight: 400;
    src: url('../fonts/Hack-Regular.ttf');
    font-display: swap;
  }

  @font-face {
    font-family: 'Hack';
    font-weight: 700;
    src: url('../fonts/Hack-Bold.ttf');
    font-display: swap;
  }

  .body {
    padding: 2rem 1rem;
    font-family: 'Hack', monospace;
  }

  .statement {
    font-size: 1.75rem;
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

  .cta a {
    font-family: 'JakartaText';
    margin-right: 2rem;
    font-size: 0.875rem;
  }

  .cta a:first-child {
    font-weight: bold;
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

    .cta a {
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-right: 2rem;
    }
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <div className='body'>
        <div>
          <Helmet>
            <link
              rel='preload'
              href='../fonts/Hack-Regular.ttf'
              as='font'
              crossOrigin=''
            />
            <link
              rel='preload'
              href='../fonts/Hack-Bold.ttf'
              as='font'
              crossOrigin=''
            />
          </Helmet>
          {/* Logo */}
          <img src='../images/logo-nav-dark.svg' alt='' />

          {/* Statement */}
          <div className='statement'>
            <p>
              <span>&lt;h2&gt;</span>UI foundations for accessible, beautiful,
              and responsive interfaces.
              <span>&lt;/h2&gt;</span>
            </p>
          </div>

          {/* Bio */}
          <div className='bio'>
            <p>
              <span className='ptag'>&lt;p&gt;</span>Camara is a design system
              with
              <span className='strongTag'>&lt;strong&gt;</span>
              <strong>reusable UI component library</strong>
              <span className='strongTag'>&lt;/strong&gt;</span>and APIs for the
              best <span className='strongTag'>&lt;strong&gt;</span>
              <strong>default user and developer experience.</strong>
              <span className='strongTag'>&lt;/strong&gt;</span>. This means
              that you can <span className='strongTag'>&lt;strong&gt;</span>
              <strong>spend less time</strong>
              <span className='strongTag'>&lt;/strong&gt;</span> thinking about
              the nuances of user interface elements and constructing the
              product, but rather spend more time and{' '}
              <span className='strongTag'>&lt;strong&gt;</span>
              <strong>focus on what the product actually is</strong>
              <span className='strongTag'>&lt;/strong&gt;</span>and the problems
              it is trying to solve.
              <span className='ptag'>&lt;/p&gt;</span>
            </p>
          </div>

          {/* Call to Actions */}
          <Link to='/docs/'>
            <Button pill backgroundColor='#75dd66' color='#000000'>
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
