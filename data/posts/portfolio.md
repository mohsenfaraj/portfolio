---
title: 'About Portfolio'
date: '2024-01-15'
summary: 'Readme file for my Portfolio, just here to test'
tags: ['Next.js', 'React', 'Web Development']
---

This is a dynamic personal portfolio built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), and [React Icons](https://react-icons.github.io/react-icons/). The contents of the portfolio are fully customizable via the `/data` folder, and colors can be modified using CSS variables defined in `global.css`.

## Features

- Dynamic content management via JSON files in `/data`
- Smooth animations powered by Framer Motion
- Icons from React Icons
- Responsive and customizable design with Tailwind CSS
- Light/Dark mode support (via CSS variables)
- Simple and modular structure for easy customization

## Table of Contents

- [Installation](#installation)
- [Customization](#customization)
  - [Content](#content)
  - [Colors](#colors)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

## Installation

To get started with this portfolio, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/mohsenfaraj/portfolio.git
cd portfolio
npm install
```

Make sure to install [pnpm](https://pnpm.io) if you prefer to use it:

```bash
pnpm install
```

### Development

To run the development server:

```bash
npm run dev
# or
pnpm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to see the website in action.

## Customization

### Content

All portfolio content is dynamically managed through the `/data` folder. Modify the JSON files in that folder to update sections like "About Me", "Skills", and "Experience".

For example, to update the skills section:

1. Navigate to `/data/timeline.yml`
2. Add or edit entries in the array, using the following structure:

```yaml
- date: 'the date'
  title: title
  body: body
```

### Colors

Colors are managed through CSS variables defined in `global.css`. You can customize primary, secondary, and background colors by editing the following variables:

```css
:root {
  --background: #ffffff;
  --foreground: #353535;
  --primary: #e46400;
  --secondary: #e41700;
  --bars: #ddd;
}
```

### Light/Dark Mode

By default, the portfolio includes support for light and dark modes. you can use `dark:` prefix in tailwind for defining dark mode colors. You can further adjust light and dark mode styles in `global.css`:

```css
[data-theme='dark'] {
  --background: #121212;
  --foreground: #ccc;
  --primary: #e46400;
  --secondary: #e41700;
  --bars: #232323;
}
```

## Available Scripts

- `npm run dev` or `pnpm run dev`: Starts the development server.
- `npm run build` or `pnpm run build`: Builds the application for production.
- `npm start`: Runs the production build.

## Deployment

This portfolio can be easily deployed on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

To deploy with Vercel:

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/), import the repository, and deploy.

## License

This project is licensed under the MIT License.
