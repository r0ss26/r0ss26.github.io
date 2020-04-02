# Portfolio Website

## Site URL

https://r0ss26.github.io/portfolio/

## Github Repository

https://github.com/r0ss26/portfolio

## Purpose

The purpose of my portfolio website is to showcase my web development and programming skills & knowledge. This has been implemented in two ways - firstly, the website itself demonstrates functionality which I have designed utilising HTML5, CSS3 and JavaScript. Secondly, I have included a "Works" section on the page which links to various programming projects I have worked on that I am proud of.

This site also aims to bring attention to my blog posts which are published on the site. These posts outline my learning, progress and passion for development.

## Target Audience

**Other Developers: ** The site can act as a point of contact for networking with other developers and to find out about interesting projects.

**Potential Employers/Recruiters:** The site will also function as a demonstration to employers of my technical skills. The site will allow them to find out more about me and also to access my CV.

## Functionality / Features

### Component 1: Neumorphic Card

The aesthetics of my portfolio site were inspired by the design style "neumorphism". This style is similar to material design in that it draws inspiration from the physical characteristics of materials. The defining feature of neumorphism however, is that the material components in the foreground (buttons, text inputs, cards etc.) are styled in such a way that they visually appear to be extruding or to be carved out of the same material as the background. 

![neumorphism-material](./docs/neumorphism-material.jpeg)

*Visualisation of the difference between a neumorphic and material card* [1].

This style is accomplished by creating contrasting light and dark borders on opposing sides of an HTML component. This creates the illusion of a light source being shone from above. Altering which sides of the component are contrasting acts to modify the angle of this light source.

I have implemented a neumorphic card component which I have utilised throughout the site to display a range of content including blog posts, example projects, and various text content.

### Component 2: Navigation Menus

I have created various navigation menus for different contexts. Firstly, the home page navigation menu is split into a call to action to view my work, and then a side bar linking to the remaining pages. This is to control the user flow as a visitor views my site. My main goal is to get visitors to view my work before moving on to the other pages and finally to the contact form.

All other pages share a common navigation menu which is displayed along the top of the site. This menu is changed to a "hamburger" style menu when viewed at mobile screen widths.

The various navigation menus implement a similar aesthetic style - when hovered over they move up slightly and change colour. The current page the user is on is styled in the same way as when hovered over to indicate which page they are on.

### Component 3: Social Icons

I have implemented links to my social media profiles using a neumorphic design which is consistent with the rest of my site. This component consists of a series of icons which animate when hovered over, as well as a tool tip describing the website it links to. These links open up in a new tab to allow the user to view my profiles without navigating away from my portfolio.

### Component 4: Blog Posts

I have reused the neumorphic card component to represent a series of blog posts. Each card contains a blog post title, date of publication and body text. The body text of the post is split up into a 100 word preview, with the option to expand the card in order to continue reading the post. This can then be minimised back to the preview size, while the card expands and shrinks to accommodate the amount of text displayed. This allows users to skim over the various posts, in order to find a post they are interested in, without having to scroll through the entire post.

### Component 5: Contact Form

My contact form is designed utilising a "flat" style, as there are some accessibility concerns around user input displayed in a neumorphic style - mainly around the lack of contrast between background and foreground. I have utilised various CSS border properties to enhance the aesthetics.

### Component 6: Tech Stack Icons

On my "About Me" page I have visualised some of the technologies I am familiar with and enjoy using, while maintaining a "language agnostic" profile. I have implemented this in a similar fashion to the social icons component, with some visual changes. I have made these icons a different shape, while the cursor does not change on hover to indicate that these are not links. 

### Component 7: Typewriter Effect

I have used a typewriter effect to add visual flow to the home page, the aim is to draw the user's eye to the moving text in the introduction, which then flows across to the call to action button.

The animation consists of two separate CSS animations which run on a delay after the home page has loaded. I have simulated a cursor effect by having the right hand border of the HTML span animate between coloured and transparent on an infinite loop. The typing effect is achieved by transitioning the span from 0% width to 100% with the overflow being hidden.

### Feature 1:  Mobile Responsiveness

All pages on my site are responsive. This has been achieved using a combination of CSS grid and flexbox. Page content is laid out on between a nx3 grid and single column grid depending on the visual complexity of each page. For example, the home page is 3x3, as it is more complex, while the blog page utilises only a single column due to the repetitive nature of the content. Grid items with more than a single component are displayed with flexbox in order to wrap their content as the screen width gets smaller. I have explicitly implemented various layouts for mobile and tablet widths by specifying each components position on the CSS grid. 

### Feature 2: Work Showcase

In order to showcase my projects I have used a neumorphic card to display each project. The projects themselves are demonstrated in multiple ways. The user can see a screenshot and description of the project directly on the page, with options to view the source code as well as a live demonstration.

### Feature 3: Version Branches

My git repository includes three branches in addition to the master branch. Each branch demonstrates a unique styling of the site.

#### Purple Theme

![purple](/home/ross/Documents/Assignments/Portfolio_Site/docs/purple.png)

#### Monospace Font

![mono-font](/home/ross/Documents/Assignments/Portfolio_Site/docs/mono-font.png)

#### Dark Theme

![dark](/home/ross/Documents/Assignments/Portfolio_Site/docs/dark.png)



## Sitemap

![Portfolio_Sitemap](/home/ross/Documents/Assignments/Portfolio_Site/docs/Portfolio_Sitemap.png)

## Screenshots

### Trello

![trello-1](/home/ross/Documents/Assignments/Portfolio_Site/docs/trello-1.png)

![trello-2](/home/ross/Documents/Assignments/Portfolio_Site/docs/trello-2.png)

### Wire-framing

All wire-frames for my website were done with the balsamiq cloud application. I planned out the design of each page for desktop, tablet and mobile users.

#### Home Page

![Home Page](/home/ross/Documents/Assignments/Portfolio_Site/docs/wireframes/Home Page.png)

#### Work Page

![Work](/home/ross/Documents/Assignments/Portfolio_Site/docs/wireframes/Work.png)

#### About Page

![About](/home/ross/Documents/Assignments/Portfolio_Site/docs/wireframes/About.png)

#### Contact Page

![Get In Touch](/home/ross/Documents/Assignments/Portfolio_Site/docs/wireframes/Get In Touch.png)

#### Blog Page

![Blog](/home/ross/Documents/Assignments/Portfolio_Site/docs/wireframes/Blog.png)

## Tech Stack

- HTML5
- CSS3
- JavaScript

### Source Control

- Git

## References

[1] https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6

