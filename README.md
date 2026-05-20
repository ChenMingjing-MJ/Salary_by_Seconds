# SalaryTools

A multi-page salary calculator suite with a glamorous gold-on-dark theme, motivational background imagery, and multi-language support. Built for Google AdSense monetization with SEO-optimized pages.

## Tools

### 1. Salary By Second (Homepage)
Real-time salary tracker that shows your earnings ticking up every second based on your local clock.

- **Real-time earnings counter** — see your salary accumulate by the second
- **Today's earnings** — calculates how much you've earned since your work start time using your local timezone
- **Monthly total** — tracks all completed working days + today's progress
- **Flexible work hours** — set any start/end time
- **Half-day support** — right-click calendar days to mark them as half days
- **Drag-to-select calendar** — click and drag to select/deselect multiple working days
- **Falling dollar signs** — animated $ signs rain down every $10 earned
- **Motivational quotes** — rotating inspirational quotes in your selected language
- **Progress bar** — visual indicator of your workday completion

### 2. Take-Home Pay Calculator
Calculate your after-tax salary with accurate 2024 tax brackets.

- **4 countries** — US, UK, Australia, Canada
- **Filing status** — Single or Married brackets
- **Breakdown** — monthly, biweekly, weekly net pay
- **Pie chart** — visual tax vs net pay ratio
- **Effective tax rate** display

### 3. Freelance Rate Calculator
Convert your salary to an equivalent freelance hourly rate.

- **Total compensation** — accounts for benefits (health, 401k, PTO)
- **Self-employment tax** — factors in 15.3% SE tax
- **Profit margin** — configurable desired margin
- **Billable hours** — realistic hours/week and weeks/year
- **Comparison cards** — employee vs freelancer side-by-side

### 4. Overtime Calculator
Calculate overtime pay with configurable multipliers.

- **Input modes** — hourly rate or annual salary
- **OT multipliers** — 1.5x (time and a half) or 2.0x (double time)
- **Visual breakdown** — stacked bar chart showing regular vs OT earnings
- **Effective rate** — shows your blended hourly rate

### 5. Salary Comparison Tool
Compare your salary across 30+ global cities adjusted for cost of living.

- **32 cities** — major cities across US, Europe, Asia, Australia
- **Cost-of-living index** — NYC = 100 baseline
- **Purchasing power** — what your current salary buys in the target city
- **Rent comparison** — separate rent index
- **Side-by-side cards** — visual city comparison

## Shared Features

- **Multi-language** — English, Chinese (中文), Japanese (日本語), Korean (한국어)
- **Shared navigation** — consistent nav bar across all pages
- **Responsive design** — works on desktop and mobile
- **Background imagery** — motivational beach sunrise background
- **Ad-ready** — placeholder ad slots for Google AdSense integration
- **SEO optimized** — meta tags, structured data (JSON-LD), sitemap.xml

## Project Structure

```
salary_by_second/
├── index.html                     # Salary By Second (homepage)
├── take-home-pay/index.html       # Take-Home Pay Calculator
├── freelance-rate/index.html      # Freelance Rate Calculator
├── overtime/index.html            # Overtime Calculator
├── salary-comparison/index.html   # Salary Comparison Tool
├── css/shared.css                 # Shared styles, nav, footer, theme
├── js/shared.js                   # Shared nav, i18n, bg image injection
├── sitemap.xml                    # For Google Search Console
├── robots.txt                     # Crawl directives
├── ads.txt                        # AdSense publisher verification
├── start.sh                       # Local dev server launcher
└── README.md
```

## Quick Start

```bash
./start.sh
```

Opens http://localhost:8080 in your browser with all pages served locally.

## Calculation Logic

### Salary By Second
```
Effective working days = full days + (half days × 0.5)
Daily rate = (salary + bonus) / effective working days
Hourly rate = daily rate / work hours per day
Per-second rate = hourly rate / 3600
Monthly total = completed past days' earnings + today's real-time earnings
```

### Take-Home Pay
Progressive tax brackets applied per country. Tax is calculated bracket-by-bracket on income falling within each range.

### Freelance Rate
```
Total comp = salary + benefits
Annual needed = total comp / (1 - 0.153)    # SE tax
With profit = annual needed × (1 + margin%)
Hourly rate = with profit / (billable hours × weeks)
```

### Overtime
```
OT hours = max(0, total hours - standard hours)
Regular pay = standard hours × hourly rate
Overtime pay = OT hours × hourly rate × multiplier
```

### Salary Comparison
```
Equivalent salary = current salary × (target COL / current COL)
Purchasing power = current salary × (current COL / target COL)
```

## AdSense Setup

1. Deploy the site and get traffic
2. Apply for Google AdSense
3. After approval, update `ads.txt` with your publisher ID
4. Replace `<div class="ad-slot">` placeholders with your AdSense ad code

## Deployment

Pure static HTML — no build step required.

1. **Vercel** — connect the repo, auto-deploys on push
2. **GitHub Pages** — enable in repo settings
3. **Netlify** — drag and drop or connect repo

## Live Demo

[https://salary-by-seconds.vercel.app/](https://salary-by-seconds.vercel.app/)
