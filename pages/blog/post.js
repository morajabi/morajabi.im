import styled from 'styled-components'

import rem from 'utils/rem'
import { headerFont, bodyFont } from 'utils/fonts'
import { mostlyBlack } from 'utils/colors'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: ${rem(60)} 0;
  box-sizing: border-box;
  background-image: url(/static/backgrounds/white-bg.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${mostlyBlack};
`

const Container = styled.div`
  max-width: ${rem(720)};
  margin: 0 auto;
`

const Meta = styled.span`
  display: inline-block;
  padding: 0 ${rem(20)};
  margin-bottom: ${rem(30)};
  font-size: ${rem(14)};
  font-weight: 700;
  letter-spacing: ${rem(2)};
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.9);
`


const Title = styled.div`
  padding: 0 ${rem(10)};
  margin-bottom: ${rem(50)};
  font-family: ${headerFont};
  font-size: ${rem(60)};
  font-weight: 700;
  letter-spacing: ${rem(-2)};
  text-align: center;
  text-shadow:
    ${rem(4)} ${rem(4)} 0 white,
    ${rem(-1)} ${rem(-1)} 0 white,
    ${rem(1)} ${rem(-1)} 0 white,
    ${rem(-1)} ${rem(1)} 0 white,
    ${rem(1)} ${rem(1)} 0 white;
`


const CenteredRow = styled.div`
  text-align: center;
`

const edgePadding = 90;

const TextArea = styled.div`
  padding: ${rem(60)} 0 ${rem(80)} 0;
  font-family: ${bodyFont};
  font-size: ${rem(19)};
  line-height: 1.4;
  background: rgba(255, 255, 255, 1);
  box-shadow: 15px 15px 0 0 rgba(0, 0 ,0, 0.7);

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  pre {
    padding-right: ${rem(edgePadding)};
    padding-left: ${rem(edgePadding)};
  }

  ul,
  ol {
    list-style: none;

    li {
      margin-bottom: ${rem(4)};

      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: ${rem(15)};
        height: ${rem(2)};
        background: #ccc;
        margin-right: ${rem(20)};
      }
    }
  }

  p {
    margin: ${rem(17)} 0;
  }

  blockquote {
    padding: ${rem(1)} 0;
    margin: 0;
    background: #f4f4f4;
  }

  pre {
    padding-top: ${rem(5)};
    padding-bottom: ${rem(5)};
    background: #f4f4f4;
  }
`

export default () => (
  <Wrapper>
    <Container>
      <CenteredRow><Meta>published 3 days ago, 3 mins</Meta></CenteredRow>
      <Title>How to config React 16 with the latest Webpack</Title>

      <TextArea>
        <SamplePost />
      </TextArea>
    </Container>
  </Wrapper>
)

function SamplePost() {
  return (
    <div class="article__body">
    <p>Did you know that Chrome now ships with the option to run in headless mode? The feature is called <a href="https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md" target="_blank" rel="noreferrer noopener">Headless Chrome</a> and it makes it super easy for developers to configure a headless browser environment and run powerful automated tests.</p>
<p>In this tutorial we are going to talk about its various features and run a couple of cool examples. Let's begin!</p>
<h2>What is Headless Chrome</h2>
<p>Headless Chrome allows us to run the browser from the command line without actually opening a Chrome window. The simulated browser environment has the same features as regular Chrome and can load any website or app we tell it to. </p>
<p>On top of that, we have a large number of controls for interacting with the page. We can click on elements, simulate keyboard input, resize the browser, and a lot more. Using these controls we can write a variety of helpful scripts. </p>
<p>Here are some examples of tasks usually done in a headless environment:</p>
<ul><li>Generate screenshots and PDFs.</li>
<li>Navigate between links and app states.</li>
<li>Automate user input and form validation testing.</li>
<li>Scrape data from websites and SPAs.</li>
<li>Monitor performance.</li>
</ul>

<p>Because Headless Chrome has a rather low-level API, it's preferred to access it via a library. For this tutorial we are going to use <a href="https://github.com/GoogleChrome/puppeteer" target="_blank" rel="noreferrer noopener">Puppeteer</a>. The project is maintained by the Chrome DevTools team and has an excellent API that is super easy to work with.</p>

<h2>Installation</h2>
<p>To use Puppeteer you will need to have Node.js installed. You can find out how to do it <a href="https://nodejs.org/en/download/package-manager/" target="_blank" rel="noreferrer noopener">here</a>. Note that all the examples in this tutorial rely heavily on the async/away syntax. It's available only in the more recent Node.js releases, so make sure you are running a version above v7.6.0. </p>
<pre class="hljs css"><span class="hljs-selector-tag">node</span> <span class="hljs-selector-tag">--version</span>
<span class="hljs-selector-tag">v8</span><span class="hljs-selector-class">.3</span><span class="hljs-selector-class">.0</span></pre>
<blockquote>
<p>If you are not familiar with the concept of async/await, we highly recommend reading our article <a href="https://tutorialzine.com/2017/07/javascript-async-await-explained" target="_blank" rel="noreferrer noopener">JavaScript Async Await Explained in 10 Minutes</a>.</p>
</blockquote>
<p>Go to your project's directory, initialize npm and install Puppeteer. You might need sudo access.</p>
<pre class="hljs coffeescript"><span class="hljs-built_in">npm</span> init
<span class="hljs-built_in">npm</span> i puppeteer</pre>
<p>Installation may take a couple of minutes. This is because unlike most other frameworks for headless testing, Puppeteer automatically downloads a version of Chromium for you (about 100mb). That's actually a very nice feature since you won't have to setup and maintain a local instance of Chrome manually.</p>
<p>Create a <em>index.js</em> file to work on and we are ready to go!</p>
<h2>Screen Capture</h2>
<p>Taking screenshots with puppeteer is very easy and there are plenty of options available for getting the exact results we need. We'll start off with a basic example and built upon that. </p>
<p>Below we simply start a headless browser, open a page, and take a screenshot of all of its contents. </p>
</div>
  )
}
