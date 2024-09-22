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
  tiers: [
    {
      title: 'Support',
      preset: tierPresets.base,
    },
    {
      title: 'Backers',
      monthlyDollars: 5,
      preset: tierPresets.medium,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.large,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.xl,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
  // Run multiple renders with different configurations
  renders: [
    {
      name: 'sponsors',
      width: 800,
      formats: ['svg', 'png'],
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
