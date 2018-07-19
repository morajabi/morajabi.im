const inquirer = require('inquirer')
const prettier = require('prettier')
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const klaw = require('klaw')
const { PathPrompt } = require('inquirer-path')

inquirer.registerPrompt('path', PathPrompt)

inquirer
  .prompt([
    {
      type: 'input',
      message: `What's your blogpost title?`,
      name: 'title',
      validate: input => Boolean(input),
    },
    {
      type: 'input',
      message: `Blog post slug`,
      name: 'slug',
      validate: input =>
        Boolean(input) ||
        'Please specify a slug! We use the slug for the post url.',
    },
    {
      type: 'input',
      message: `Write a short (usually 1-2 line) description of your blogpost`,
      name: 'desc',
    },
    {
      type: 'confirm',
      message: `Does it have a hero image?`,
      name: 'hasHero',
      default: true,
    },
    {
      type: 'path',
      message: `Write the path to the hero image (from static/):`,
      name: 'heroSrc',
      cwd: './static/',
      when: answers => answers.hasHero,
      filter: input => input.replace(path.resolve(__dirname, '..'), ''),
    },
  ])
  .then(answers => {
    // Make post
    const { title, slug, desc, heroSrc } = answers
    const currentDate = new Date()
    const currentFormattedDate = currentDate.toISOString().split('T')[0]
    const postsJsonPath = 'data/posts.json'

    // 1.
    // Let's add the post entry to our JSON data store
    const postsObject = fs.readJsonSync(postsJsonPath)

    // Add the post to the JSON data of posts
    postsObject[title] = {
      slug,
      desc,
      heroSrc,
      publishedAt: currentFormattedDate,
    }

    // Stringify it back to JSON
    const postsJson = JSON.stringify(postsObject)

    // Prettify it
    const prettifiedJson = prettier.format(postsJson, { parser: 'json' })

    // Save it back!
    fs.writeFileSync(postsJsonPath, prettifiedJson)

    // 2.
    // Now let's make the file for the post (.mdx)
    const relativePathToMDX = `./pages/blog/${slug}.mdx`
    const pathToMDX = path.join(__dirname, `..`, relativePathToMDX)
    fs.createFileSync(pathToMDX)

    console.log(chalk.gray`Bootstrapping your blogpost...`)
    console.log(
      `Done! Go ahead and edit ${chalk.cyan(
        relativePathToMDX
      )} to complete the post.`
    )
    console.log(
      `You can start editing in Code: ${chalk.blue(
        `code ${relativePathToMDX}`
      )}`
    )
    console.log(
      `Once you finished, run ${chalk.blue`yarn publish`} to deploy the changes!`
    )
  })
