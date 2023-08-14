import { Meta, StoryFn } from "@storybook/react"
import React from "react"
import GlossaryTooltip from "."

export default {
  component: GlossaryTooltip,
} as Meta<typeof GlossaryTooltip>

export const Basic: StoryFn<typeof GlossaryTooltip> = () => (
  <GlossaryTooltip to="/glossary/#big-endian">big-endian</GlossaryTooltip>
)
