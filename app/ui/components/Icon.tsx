import * as Lucide from "lucide-react"
import * as SimpleIcons from "simple-icons"

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: string
  size?: number
  color?: string
}

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) {
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  const upper = cap(name)

  const LucideIcon = (Lucide as any)[upper]
  if (LucideIcon) {
    return <LucideIcon size={size} color={color} {...props} />
  }

  const simple = (SimpleIcons as any)[`si${upper}`]
  if (simple) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: simple.svg }}
        {...props}
      />
    )
  }

  const Help = Lucide.HelpCircle
  return <Help size={size} color={color} {...props} />
}
