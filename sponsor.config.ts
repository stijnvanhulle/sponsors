import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'stijnvanhulle',
    type: 'user',
  },
  outputDir: '.',
  width: 800,
  formats: ['json', 'svg', 'png'],
  sponsorsAutoMerge: true,
  // Claude sponsors outside GitHub Sponsors, so add it by hand
  onSponsorsReady: (sponsors) => [
    ...sponsors,
    {
      sponsor: {
        type: 'Organization',
        login: 'anthropics',
        name: 'Claude',
        avatarUrl: 'https://github.com/anthropics.png',
        linkUrl: 'https://claude.com',
      },
      monthlyDollars: 100,
    },
  ],
  tiers: [
    {
      title: 'Supporters',
      preset: tierPresets.base,
    },
    {
      title: 'Backers',
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: 'Contributors',
      monthlyDollars: 25,
      preset: tierPresets.medium,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 250,
      preset: tierPresets.xl,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl,
    },
  ],
  // Run multiple renders with different configurations
  renders: [
    {
      name: 'sponsors',
      width: 800,
      formats: ['json', 'svg', 'png'],
    },
    {
      name: 'sponsors-wide',
      width: 1000,
      formats: ['svg'],
    },
    {
      renderer: 'circles',
      name: 'sponsors-circles',
      width: 1000,
      includePastSponsors: true,
    },
  ],
})
