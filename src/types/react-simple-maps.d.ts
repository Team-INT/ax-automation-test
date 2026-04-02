declare module "react-simple-maps" {
  import type { ReactNode, SVGProps, MouseEventHandler } from "react"

  interface ComposableMapProps extends SVGProps<SVGSVGElement> {
    projection?: string
    projectionConfig?: Record<string, unknown>
    width?: number
    height?: number
    children?: ReactNode
  }

  interface GeographiesProps {
    geography: string | object
    children: (props: { geographies: Geography[] }) => ReactNode
  }

  interface Geography {
    rsmKey: string
    type: string
    properties: Record<string, unknown>
  }

  interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: Geography
    style?: {
      default?: Record<string, string | number>
      hover?: Record<string, string | number>
      pressed?: Record<string, string | number>
    }
  }

  interface MarkerProps extends SVGProps<SVGGElement> {
    coordinates: [number, number]
    children?: ReactNode
    onMouseEnter?: MouseEventHandler<SVGGElement>
    onMouseLeave?: MouseEventHandler<SVGGElement>
    onClick?: MouseEventHandler<SVGGElement>
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element
  export function Geographies(props: GeographiesProps): JSX.Element
  export function Geography(props: GeographyProps): JSX.Element
  export function Marker(props: MarkerProps): JSX.Element
}
