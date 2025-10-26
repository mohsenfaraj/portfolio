# Personal Portfolio

> Live Demo: [MohsenFaraj.ir](https://mohsenfaraj.ir)

This is a dynamic personal portfolio blog built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Framer Motion](https://www.framer.com/motion/). The contents of the portfolio is fully customizable via the `/data` folder or you could use [DecapCMS](https://decapcms.org) at `/admin` route.

this project is configured to work with cloudflare workers.

colors can be modified using CSS variables defined in `global.css`.

## Features

- Dynamic content management via Decap CMS `/admin` route or `/data` folder
- Free hosting with deploying to cloudflare workers
- Smooth animations powered by Framer Motion
- Icons from Font Awesome and Devicons
- Responsive and customizable design with Tailwind CSS
- Light/Dark mode support (via CSS variables)
- sending comments using github issues thanks to [utterances](https://utteranc.es/)
- Simple and modular structure for easy customization
- proper typography and code highlighting for blog pages

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
pnpm install
```

I use pnpm package manager (faster, better handling of dependencies). for installing pnpm:

```bash
npm install -g pnpm
```

### Development

To run the development server:

```bash
pnpm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to see the website in action.

## Customization

### Content

All portfolio content is dynamically managed through the `/data` folder. Modify the yaml files in that folder to update sections like "About Me", "Skills", and "Experience".

For example, to update the skills section:

1. Navigate to `/data/timeline.yml`
2. Add or edit entries in the array, using the following structure:

```yaml
- date: 'the date'
  title: title
  body: body
```

### Colors

Colors are managed through CSS variables defined in `/app/css/global.css`. You can customize primary, secondary, and background colors by editing the following variables:

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

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the application for production.
- `npm start`: Runs the production build.
- `pnpm format`: Formats the package with prettier

## Deployment

This portfolio can be easily deployed on Cloudflare. you can deploy to other services like Netlify or Vercel but you should configure DecapCMS.

## License

This project is licensed under the MIT License.
