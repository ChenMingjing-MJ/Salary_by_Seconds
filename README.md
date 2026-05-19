# Salary By Seconds

A glamorous, motivational real-time salary tracker that shows your earnings ticking up every second. Watch your hard work turn into money — live.

## Features

- **Real-time earnings counter** — see your salary accumulate by the second based on actual clock time
- **Today's earnings** — calculates how much you've earned since your work start time
- **Monthly total** — tracks all completed working days + today's progress
- **Flexible work hours** — set any start/end time (supports minutes, not just whole hours)
- **Half-day support** — right-click calendar days to mark them as half days
- **Drag-to-select calendar** — click and drag to select/deselect multiple working days at once
- **Falling dollar signs** — animated $ signs rain down every $10 earned, or when you click the background
- **Multi-language** — English, Chinese (中文), Japanese (日本語), Korean (한국어)
- **Motivational quotes** — rotating inspirational quotes in your selected language
- **Progress bar** — visual indicator of your workday completion
- **Responsive design** — works on desktop and mobile

## How to Use

### 1. Set Your Salary
Enter your **monthly salary** and **monthly bonus** (optional) in the input fields.

### 2. Set Today's Date & Work Hours
- Pick today's date using the date picker
- Set your **work start time** and **work end time** (e.g., 9:00 AM to 6:00 PM)
- These can be different every day — adjust as needed

### 3. Select Working Days
- The calendar **auto-selects weekdays** for the current month
- **Left-click** a day to toggle it on/off (full day)
- **Drag** across multiple days to select/deselect in bulk
- **Right-click** a day to mark it as a **half day** (shown with ½ badge)
- Right-click again to remove half-day status

### 4. Start Earning
Click the **"Start Earning"** button. You'll see:
- Your earnings ticking up in real-time
- Per-second, per-hour, per-day, and monthly rates
- A progress bar showing how far through your workday you are
- Dollar signs falling from the sky every $10 milestone

### 5. Change Language
Click **EN / 中文 / 日本語 / 한국어** buttons at the top-right corner to switch languages. All UI text and motivational quotes update instantly.

## Calendar Legend

| Color | Meaning |
|-------|---------|
| Solid gold | Full working day |
| Semi-transparent gold with ½ | Half working day |
| No highlight | Day off |

## Calculation Logic

```
Effective working days = full days + (half days × 0.5)
Daily rate = (salary + bonus) / effective working days
Hourly rate = daily rate / work hours per day
Per-second rate = hourly rate / 3600
```

Monthly total = completed past days' earnings + today's real-time earnings

## Deployment

This is a single HTML file with no dependencies. To use:

1. Open `index.html` in any browser, or
2. Host on GitHub Pages / Netlify / Vercel for a shareable link

## Live Demo

[https://chenmingjing-mj.github.io/Salary_by_Seconds/](https://chenmingjing-mj.github.io/Salary_by_Seconds/)
